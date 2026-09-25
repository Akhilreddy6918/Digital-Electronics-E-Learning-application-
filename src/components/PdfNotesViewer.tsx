import React, { useState, useEffect, useRef } from 'react';
import { NoteSection, UnitId } from '../types/digitalElectronics';
import { NOTE_SECTIONS, UNIT_OVERVIEWS } from '../data/deNotesData';
import { LogicGateSearchCard, isGateSearchQuery } from './LogicGateSearchModal';
import {
  Search,
  ChevronLeft,
  ChevronRight,
  BookOpen,
  Printer,
  Download,
  FlaskConical,
  Play,
  FileText,
  List,
  CheckCircle2,
  Sparkles,
  Upload,
  ZoomIn,
  ZoomOut,
  Maximize2,
  Minimize2,
  X,
  FileUp,
  Layers,
  ArrowRight,
  ExternalLink,
  Zap
} from 'lucide-react';

interface PdfNotesViewerProps {
  initialSectionId?: string;
  initialSearchQuery?: string;
  onLaunchSimulator?: (circuitId: string) => void;
  onWatchVideo?: (videoSeq: number) => void;
}

export const PdfNotesViewer: React.FC<PdfNotesViewerProps> = ({
  initialSectionId,
  initialSearchQuery = '',
  onLaunchSimulator,
  onWatchVideo
}) => {
  const [activeSectionId, setActiveSectionId] = useState<string>(initialSectionId || NOTE_SECTIONS[0].id);
  const [searchQuery, setSearchQuery] = useState<string>(initialSearchQuery);
  const [zoomLevel, setZoomLevel] = useState<number>(100);
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(true);
  const [selectedUnitFilter, setSelectedUnitFilter] = useState<UnitId | 'all'>('all');
  const [viewMode, setViewMode] = useState<'paginated' | 'continuous' | 'customPdf'>('paginated');
  const [customPdfUrl, setCustomPdfUrl] = useState<string | null>(null);
  const [customPdfName, setCustomPdfName] = useState<string>('');

  const documentContainerRef = useRef<HTMLDivElement | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  // Active section index and reference
  const currentSectionIndex = NOTE_SECTIONS.findIndex(s => s.id === activeSectionId);
  const activeSection = NOTE_SECTIONS[currentSectionIndex >= 0 ? currentSectionIndex : 0];
  const totalSections = NOTE_SECTIONS.length;

  // Sync initial props
  useEffect(() => {
    if (initialSectionId && NOTE_SECTIONS.some(s => s.id === initialSectionId)) {
      setActiveSectionId(initialSectionId);
    }
  }, [initialSectionId]);

  useEffect(() => {
    if (initialSearchQuery) {
      setSearchQuery(initialSearchQuery);
    }
  }, [initialSearchQuery]);

  // Global search across ALL sections in all units
  const searchResults = React.useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    if (!q) return [];

    return NOTE_SECTIONS.map(sec => {
      const titleMatches = (sec.title.toLowerCase().match(new RegExp(q.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g')) || []).length;
      const contentMatches = (sec.content.toLowerCase().match(new RegExp(q.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g')) || []).length;
      const summaryMatches = (sec.summary.toLowerCase().match(new RegExp(q.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g')) || []).length;
      const totalMatches = titleMatches * 3 + contentMatches + summaryMatches * 2;

      // Extract a relevant snippet around the first occurrence
      let snippet = sec.summary;
      const idx = sec.content.toLowerCase().indexOf(q);
      if (idx !== -1) {
        const start = Math.max(0, idx - 45);
        const end = Math.min(sec.content.length, idx + q.length + 65);
        snippet = (start > 0 ? '...' : '') + sec.content.substring(start, end).replace(/\n/g, ' ') + (end < sec.content.length ? '...' : '');
      }

      return {
        section: sec,
        matches: totalMatches,
        snippet
      };
    }).filter(res => res.matches > 0);
  }, [searchQuery]);

  // When search query is typed and results exist, if current section has no match, auto-jump to the top matching section!
  const handleSelectSearchResult = (secId: string) => {
    setActiveSectionId(secId);
    setViewMode('paginated');
    if (documentContainerRef.current) {
      documentContainerRef.current.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Quick search keywords for easy demonstration
  const quickSearches = [
    'Karnaugh Map',
    'De Morgan',
    'JK Flip-Flop',
    'Full Adder',
    'Multiplexer',
    'Shift Register',
    'Gray Code',
    'Quine-McCluskey',
    'Universal Gates'
  ];

  // Pagination handlers
  const handlePrevPage = () => {
    if (currentSectionIndex > 0) {
      setActiveSectionId(NOTE_SECTIONS[currentSectionIndex - 1].id);
      if (documentContainerRef.current) {
        documentContainerRef.current.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  };

  const handleNextPage = () => {
    if (currentSectionIndex < totalSections - 1) {
      setActiveSectionId(NOTE_SECTIONS[currentSectionIndex + 1].id);
      if (documentContainerRef.current) {
        documentContainerRef.current.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  };

  // Text highlighting renderer
  const renderHighlighted = (text: string) => {
    if (!searchQuery.trim()) return text;
    const escaped = searchQuery.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const regex = new RegExp(`(${escaped})`, 'gi');
    const parts = text.split(regex);

    return parts.map((part, i) => {
      if (part.toLowerCase() === searchQuery.toLowerCase()) {
        return (
          <mark
            key={i}
            className="bg-amber-300 text-slate-950 font-bold px-1 py-0.5 rounded shadow-xs"
          >
            {part}
          </mark>
        );
      }
      return part;
    });
  };

  // Handle custom PDF upload
  const handlePdfFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && file.type === 'application/pdf') {
      const url = URL.createObjectURL(file);
      setCustomPdfUrl(url);
      setCustomPdfName(file.name);
      setViewMode('customPdf');
    }
  };

  // Handle export / download notes
  const handleDownloadNotes = () => {
    const header = `=======================================================\n` +
      `COGNITA DIGITAL ELECTRONICS LECTURE NOTES (JNTUH R18/R22)\n` +
      `Unit: ${activeSection.unitTitle}\n` +
      `Topic: ${activeSection.title} (Page ${activeSection.pageNumber} of ${totalSections})\n` +
      `=======================================================\n\n`;
    const blob = new Blob([header + activeSection.content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `Digital_Electronics_${activeSection.id}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <div className="flex flex-col h-[calc(100vh-64px)] bg-slate-100 text-slate-800 overflow-hidden font-sans">
      {/* Top Banner & PDF Search Control Bar */}
      <div className="bg-slate-900 border-b border-slate-800 text-white px-4 py-2.5 shrink-0 z-30 shadow-md">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
          {/* Left: View Mode Toggle & Table of Contents button */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-colors ${
                isSidebarOpen ? 'bg-sky-600 text-white' : 'bg-slate-800 text-slate-300 hover:text-white'
              }`}
              title="Toggle Unit Outline & Index"
            >
              <List className="w-4 h-4" />
              <span>{isSidebarOpen ? 'Hide Index' : 'Show Index'}</span>
            </button>

            <div className="h-5 w-[1px] bg-slate-700 hidden sm:block" />

            {/* Provided Course Notes PDF Link */}
            <div className="flex items-center gap-2">
              <a
                href="/digital-electronics-notes-130-pages.pdf"
                target="_blank"
                rel="noreferrer"
                className="px-3 py-1.5 bg-sky-600 hover:bg-sky-500 text-white rounded-lg text-xs font-bold inline-flex items-center gap-1.5 transition-colors shadow-xs"
                title="Open the provided Digital Electronics Notes PDF in a new tab"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>Open Notes PDF</span>
                <ExternalLink className="w-3 h-3 opacity-80" />
              </a>

              <a
                href="/digital-electronics-notes-130-pages.pdf"
                download="digital-electronics-notes-130-pages.pdf"
                className="px-2.5 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-lg text-xs font-semibold inline-flex items-center gap-1 transition-colors border border-slate-700"
                title="Download provided Notes PDF file (130 Pages)"
              >
                <Download className="w-3.5 h-3.5 text-emerald-400" />
                <span className="hidden sm:inline">Download PDF</span>
              </a>

              <button
                onClick={() => {
                  if (customPdfUrl) {
                    setViewMode(viewMode === 'customPdf' ? 'paginated' : 'customPdf');
                  } else {
                    fileInputRef.current?.click();
                  }
                }}
                className={`p-1.5 rounded-lg text-xs transition-colors cursor-pointer border ${
                  viewMode === 'customPdf'
                    ? 'bg-sky-900 border-sky-400 text-white'
                    : 'bg-slate-800 border-slate-700 text-slate-400 hover:text-white'
                }`}
                title="Upload or view custom PDF"
              >
                <Upload className="w-3.5 h-3.5" />
              </button>
              <input
                ref={fileInputRef}
                type="file"
                accept="application/pdf"
                className="hidden"
                onChange={handlePdfFileUpload}
              />
            </div>
          </div>

          {/* Center: PROMINENT IN-DOCUMENT SEARCH BAR */}
          <div className="flex-1 max-w-xl mx-auto w-full relative">
            <div className="relative flex items-center">
              <Search className="absolute left-3 w-4 h-4 text-sky-400 pointer-events-none" />
              <input
                type="text"
                placeholder="Search topics, formulas e.g. K-Map, De Morgan, Flip-Flop, Full Adder..."
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                className="w-full bg-slate-950 border border-slate-700 hover:border-sky-500 focus:border-sky-400 rounded-lg pl-9 pr-20 py-2 text-xs text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500/50 transition-all shadow-inner"
              />

              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2.5 p-1 text-slate-400 hover:text-white transition-colors"
                  title="Clear search"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* Quick Keyword Pills for Instant Demo */}
            {!searchQuery && (
              <div className="hidden lg:flex items-center gap-1.5 mt-1.5 overflow-x-auto text-[10px] text-slate-400">
                <span className="text-slate-400 shrink-0 font-medium">Try searching:</span>
                {quickSearches.slice(0, 5).map(q => (
                  <button
                    key={q}
                    onClick={() => setSearchQuery(q)}
                    className="px-2 py-0.5 bg-slate-800/80 hover:bg-sky-600 hover:text-white rounded text-slate-300 transition-colors whitespace-nowrap"
                  >
                    {q}
                  </button>
                ))}
              </div>
            )}

            {/* Live Search Results Dropdown */}
            {searchQuery.trim() && (
              <div className="absolute left-0 right-0 top-full mt-2 bg-slate-900 border border-slate-700 rounded-xl shadow-2xl p-2 z-50 max-h-80 overflow-y-auto">
                <div className="flex items-center justify-between px-2 py-1.5 text-xs text-slate-400 border-b border-slate-800 mb-1">
                  <span className="font-semibold text-white">
                    Found {searchResults.length} topic{searchResults.length === 1 ? '' : 's'} matching &ldquo;{searchQuery}&rdquo;
                  </span>
                  <button
                    onClick={() => setSearchQuery('')}
                    className="text-[11px] text-sky-400 hover:underline"
                  >
                    Close
                  </button>
                </div>

                {/* Gate Search Indicator */}
                {isGateSearchQuery(searchQuery).isGate && (
                  <div className="p-2.5 mb-2 bg-gradient-to-r from-sky-950 to-slate-900 border border-sky-500 rounded-xl flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-lg bg-sky-600 flex items-center justify-center text-white">
                        <Zap className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <span className="text-xs font-bold text-white block">
                          Logic Gate Diagram & Truth Table Image
                        </span>
                        <span className="text-[10px] text-sky-300 block">
                          Displaying diagram & truth table for {isGateSearchQuery(searchQuery).matchedGate || 'All Gates'}
                        </span>
                      </div>
                    </div>
                    <span className="text-[10px] font-mono font-bold bg-amber-400 text-slate-950 px-2 py-0.5 rounded">
                      Chart Matched
                    </span>
                  </div>
                )}

                {searchResults.length === 0 && !isGateSearchQuery(searchQuery).isGate ? (
                  <div className="p-4 text-center text-xs text-slate-400">
                    No matching topics found in the 5 units for &ldquo;{searchQuery}&rdquo;. Try searching for <em>AND</em>, <em>NAND</em>, <em>XOR</em>, <em>K-Map</em>, or <em>Adder</em>.
                  </div>
                ) : (
                  <div className="space-y-1">
                    {searchResults.map(({ section, matches, snippet }) => (
                      <button
                        key={section.id}
                        onClick={() => handleSelectSearchResult(section.id)}
                        className={`w-full text-left p-2.5 rounded-lg text-xs transition-colors flex flex-col gap-0.5 ${
                          section.id === activeSectionId
                            ? 'bg-sky-950 border border-sky-600 text-white'
                            : 'hover:bg-slate-800 text-slate-300'
                        }`}
                      >
                        <div className="flex items-center justify-between font-mono text-[10px]">
                          <span className="text-sky-400 font-semibold">{section.unitTitle.split('–')[0]}</span>
                          <span className="bg-amber-400/20 text-amber-300 px-1.5 py-0.2 rounded font-bold">
                            {matches} hit{matches > 1 ? 's' : ''} · Page {section.pageNumber}
                          </span>
                        </div>
                        <span className="font-bold text-slate-100">{section.title}</span>
                        <p className="text-[11px] text-slate-400 line-clamp-1">{snippet}</p>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Right: Page Navigation, Zoom, and Actions */}
          <div className="flex items-center gap-2 justify-end">
            {viewMode === 'paginated' && (
              <div className="flex items-center bg-slate-800 rounded-lg p-0.5 text-xs text-slate-300 font-mono">
                <button
                  onClick={handlePrevPage}
                  disabled={currentSectionIndex === 0}
                  className="p-1 hover:text-white disabled:opacity-30 transition-colors"
                  title="Previous Page"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <span className="px-2 text-white font-medium tabular-nums">
                  {currentSectionIndex + 1} / {totalSections}
                </span>
                <button
                  onClick={handleNextPage}
                  disabled={currentSectionIndex === totalSections - 1}
                  className="p-1 hover:text-white disabled:opacity-30 transition-colors"
                  title="Next Page"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            )}

            {/* Zoom Controls */}
            <div className="hidden sm:flex items-center bg-slate-800 rounded-lg p-0.5 text-xs text-slate-300">
              <button
                onClick={() => setZoomLevel(prev => Math.max(70, prev - 15))}
                className="p-1 hover:text-white transition-colors"
                title="Zoom Out"
              >
                <ZoomOut className="w-3.5 h-3.5" />
              </button>
              <span className="px-1 text-[11px] font-mono tabular-nums">{zoomLevel}%</span>
              <button
                onClick={() => setZoomLevel(prev => Math.min(150, prev + 15))}
                className="p-1 hover:text-white transition-colors"
                title="Zoom In"
              >
                <ZoomIn className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Print & Download 130-Page PDF */}
            <a
              href="/digital-electronics-notes-130-pages.pdf"
              download="digital-electronics-notes-130-pages.pdf"
              className="px-3 py-1.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg text-xs font-bold flex items-center gap-1.5 transition-colors shadow-xs"
              title="Download Complete 130-Page PDF Document"
            >
              <Download className="w-3.5 h-3.5" />
              <span className="hidden md:inline">Download PDF (130 Pgs)</span>
              <span className="md:hidden">PDF</span>
            </a>

            <button
              onClick={() => window.print()}
              className="p-1.5 bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white rounded-lg transition-colors cursor-pointer"
              title="Print Document or Save as PDF"
            >
              <Printer className="w-4 h-4" />
            </button>

            <button
              onClick={handleDownloadNotes}
              className="px-2.5 py-1.5 bg-sky-600 hover:bg-sky-500 text-white rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
              title="Download Notes Text"
            >
              <FileText className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Text</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex overflow-hidden">
        {/* Left Sidebar: Table of Contents & Unit Hierarchy */}
        {isSidebarOpen && (
          <aside className="w-72 sm:w-80 bg-white border-r border-slate-200 flex flex-col shrink-0 overflow-hidden shadow-xs">
            {/* Unit Selector */}
            <div className="p-3 bg-slate-50 border-b border-slate-200">
              <label className="text-[11px] font-bold text-slate-600 uppercase tracking-wider block mb-1">
                Filter by Syllabus Unit
              </label>
              <select
                value={selectedUnitFilter}
                onChange={e => setSelectedUnitFilter(e.target.value as any)}
                className="w-full bg-white border border-slate-300 rounded-lg px-2.5 py-1.5 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-sky-500 font-medium"
              >
                <option value="all">All 5 Units (Full Syllabus)</option>
                {UNIT_OVERVIEWS.map(u => (
                  <option key={u.id} value={u.id}>
                    {u.number}: {u.title}
                  </option>
                ))}
              </select>
            </div>

            {/* Topic List */}
            <div className="flex-1 overflow-y-auto divide-y divide-slate-100 p-2 space-y-1">
              {NOTE_SECTIONS.filter(
                s => selectedUnitFilter === 'all' || s.unitId === selectedUnitFilter
              ).map(sec => {
                const isActive = sec.id === activeSectionId;
                const matches = searchQuery.trim()
                  ? (sec.content.match(new RegExp(searchQuery.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'gi')) || []).length
                  : 0;

                return (
                  <button
                    key={sec.id}
                    onClick={() => {
                      setActiveSectionId(sec.id);
                      setViewMode('paginated');
                    }}
                    className={`w-full text-left p-2.5 rounded-lg text-xs transition-all flex flex-col gap-1 ${
                      isActive
                        ? 'bg-sky-50 border border-sky-400 text-sky-950 font-semibold shadow-xs'
                        : 'hover:bg-slate-50 text-slate-700 border border-transparent'
                    }`}
                  >
                    <div className="flex items-center justify-between text-[10px] text-slate-500 font-mono">
                      <span>Page {sec.pageNumber}</span>
                      {matches > 0 && (
                        <span className="bg-amber-100 text-amber-800 font-bold px-1.5 py-0.2 rounded border border-amber-300">
                          {matches} match{matches > 1 ? 'es' : ''}
                        </span>
                      )}
                    </div>
                    <span className="line-clamp-2 leading-snug">{sec.title}</span>
                    <span className="text-[11px] text-slate-500 line-clamp-1 font-normal">{sec.summary}</span>
                  </button>
                );
              })}
            </div>
          </aside>
        )}

        {/* Center / Right: Reader Stage */}
        <div
          ref={documentContainerRef}
          className="flex-1 overflow-y-auto bg-slate-200 p-4 sm:p-8 flex justify-center print:p-0 print:bg-white"
        >
          {/* Custom PDF Mode */}
          {viewMode === 'customPdf' && customPdfUrl && (
            <div className="w-full max-w-5xl h-full flex flex-col bg-white rounded-xl shadow-xl overflow-hidden border border-slate-300">
              <div className="bg-slate-900 text-white px-4 py-2.5 flex items-center justify-between text-xs">
                <span className="font-semibold flex items-center gap-2">
                  <FileText className="w-4 h-4 text-sky-400" />
                  <span>Viewing Custom PDF: {customPdfName}</span>
                </span>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => fileInputRef.current?.click()}
                    className="px-2.5 py-1 bg-slate-800 hover:bg-slate-700 rounded text-slate-200"
                  >
                    Upload Another PDF
                  </button>
                  <button
                    onClick={() => setViewMode('paginated')}
                    className="px-2.5 py-1 bg-sky-600 hover:bg-sky-500 rounded text-white"
                  >
                    Back to Textbook Notes
                  </button>
                </div>
              </div>
              <iframe
                src={customPdfUrl}
                className="w-full flex-1 border-0"
                title="Custom PDF Document"
              />
            </div>
          )}

          {/* Paginated PDF Document Page View */}
          {viewMode === 'paginated' && (
            <div
              className="w-full max-w-4xl bg-white text-slate-900 shadow-xl rounded-xl p-8 sm:p-14 border border-slate-300 relative transition-all duration-150 print:shadow-none print:border-none print:p-0"
              style={{ fontSize: `${(zoomLevel / 100) * 14}px` }}
            >
              {/* Logic Gate Diagram & Truth Table Image (Appears whenever user searches for any gate, or on gates topic) */}
              {(isGateSearchQuery(searchQuery).isGate || activeSection.id === 'sec-u1-5') && (
                <div className="mb-6">
                  <LogicGateSearchCard
                    matchedGate={isGateSearchQuery(searchQuery).matchedGate}
                    onLaunchSimulator={onLaunchSimulator}
                  />
                </div>
              )}

              {/* Academic Watermark / Top Header */}
              <div className="border-b-2 border-slate-800 pb-4 mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono font-bold tracking-wider text-sky-700 uppercase">
                    <BookOpen className="w-4 h-4" />
                    <span>JNTUH R18 / R22 DIGITAL LOGIC DESIGN (DLD)</span>
                  </div>
                  <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-serif tracking-tight mt-1">
                    {renderHighlighted(activeSection.title)}
                  </h1>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1 font-sans">
                    {renderHighlighted(activeSection.summary)}
                  </p>
                </div>

                <div className="text-right sm:self-start shrink-0">
                  <span className="inline-block text-xs font-mono font-semibold text-slate-700 bg-slate-100 px-3 py-1 rounded-md border border-slate-300">
                    Page {activeSection.pageNumber} of {totalSections}
                  </span>
                </div>
              </div>

              {/* Interactive Bridges: Circuit Simulator & YouTube Video Links */}
              <div className="mb-8 p-3.5 bg-sky-50/80 rounded-xl border border-sky-200 flex flex-wrap items-center justify-between gap-3 text-xs print:hidden">
                <div className="flex items-center gap-2 text-sky-900 font-medium">
                  <Sparkles className="w-4 h-4 text-sky-600" />
                  <span>Interactive Study Integrations for this topic:</span>
                </div>

                <div className="flex items-center gap-2">
                  {activeSection.circuitIds && activeSection.circuitIds.length > 0 && onLaunchSimulator && (
                    <button
                      onClick={() => onLaunchSimulator(activeSection.circuitIds![0])}
                      className="flex items-center gap-1.5 px-3 py-1.5 bg-sky-600 hover:bg-sky-700 text-white rounded-lg font-semibold transition-colors shadow-xs"
                    >
                      <FlaskConical className="w-3.5 h-3.5" />
                      <span>Test in Circuit Simulator</span>
                    </button>
                  )}

                  {activeSection.videoSequenceNos && activeSection.videoSequenceNos.length > 0 && onWatchVideo && (
                    <button
                      onClick={() => onWatchVideo(activeSection.videoSequenceNos![0])}
                      className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-800 hover:bg-slate-900 text-white rounded-lg font-semibold transition-colors shadow-xs"
                    >
                      <Play className="w-3.5 h-3.5 fill-current" />
                      <span>Watch Lecture Video #{activeSection.videoSequenceNos[0]}</span>
                    </button>
                  )}
                </div>
              </div>

              {/* Key Formulas & Theorems Callout */}
              {activeSection.keyFormulas && activeSection.keyFormulas.length > 0 && (
                <div className="mb-8 p-4 bg-amber-50/70 border-l-4 border-amber-500 rounded-r-xl">
                  <span className="text-xs font-bold uppercase tracking-wider text-amber-900 block mb-2 font-mono">
                    Key Equations, Laws & Theorems:
                  </span>
                  <ul className="space-y-1 text-xs sm:text-sm font-mono text-slate-900">
                    {activeSection.keyFormulas.map((formula, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-amber-600 font-bold">▸</span>
                        <span>{renderHighlighted(formula)}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Document Text Body with Search Highlight */}
              <div className="prose prose-slate max-w-none text-slate-800 leading-relaxed font-sans whitespace-pre-line text-justify">
                {renderHighlighted(activeSection.content)}
              </div>

              {/* Bottom Pagination Bar */}
              <div className="mt-12 pt-6 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500 print:hidden">
                <button
                  onClick={handlePrevPage}
                  disabled={currentSectionIndex === 0}
                  className="flex items-center gap-1 font-semibold text-slate-700 hover:text-sky-600 disabled:opacity-40"
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span>Previous Page</span>
                </button>

                <span className="font-mono text-slate-400">
                  {activeSection.unitTitle} · Page {activeSection.pageNumber}
                </span>

                <button
                  onClick={handleNextPage}
                  disabled={currentSectionIndex === totalSections - 1}
                  className="flex items-center gap-1 font-semibold text-slate-700 hover:text-sky-600 disabled:opacity-40"
                >
                  <span>Next Page</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* Continuous All-Units View Mode */}
          {viewMode === 'continuous' && (
            <div
              className="w-full max-w-4xl space-y-8 print:space-y-4"
              style={{ fontSize: `${(zoomLevel / 100) * 14}px` }}
            >
              {NOTE_SECTIONS.filter(
                s => selectedUnitFilter === 'all' || s.unitId === selectedUnitFilter
              ).map((sec, idx) => (
                <div
                  key={sec.id}
                  className="bg-white text-slate-900 shadow-lg rounded-xl p-8 sm:p-12 border border-slate-300"
                >
                  <div className="border-b border-slate-200 pb-3 mb-6 flex justify-between items-center">
                    <div>
                      <span className="text-xs font-mono font-bold text-sky-700 uppercase">
                        {sec.unitTitle}
                      </span>
                      <h2 className="text-xl sm:text-2xl font-bold font-serif text-slate-900 mt-1">
                        {renderHighlighted(sec.title)}
                      </h2>
                    </div>
                    <span className="text-xs font-mono bg-slate-100 px-2.5 py-1 rounded border border-slate-200">
                      Page {sec.pageNumber}
                    </span>
                  </div>

                  <div className="prose prose-slate max-w-none text-slate-800 leading-relaxed font-sans whitespace-pre-line text-justify">
                    {renderHighlighted(sec.content)}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
