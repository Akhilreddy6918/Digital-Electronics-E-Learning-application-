import React, { useState } from 'react';
import {
  FileText,
  Download,
  ExternalLink,
  Search,
  BookOpen,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Zap,
  PenTool,
  ZoomIn,
  ZoomOut,
  Maximize2,
  Minimize2,
  Image as ImageIcon,
  Upload,
  RotateCw,
  CheckCircle2,
  HelpCircle
} from 'lucide-react';
import {
  HANDWRITTEN_UNITS,
  ALL_HANDWRITTEN_PAGES,
  HandwrittenPage
} from '../data/handwrittenNotesData';

interface HandWrittenNotesViewerProps {
  initialUnitId?: string;
  onNavigateToSimulator?: (circuitId: string) => void;
}

export const HandWrittenNotesViewer: React.FC<HandWrittenNotesViewerProps> = ({
  initialUnitId = 'unit-1',
  onNavigateToSimulator
}) => {
  const [selectedUnitId, setSelectedUnitId] = useState<string>(initialUnitId);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedPageIndex, setSelectedPageIndex] = useState<number>(0);
  const [viewMode, setViewMode] = useState<'scans' | 'notebook' | 'pdfEmbed'>('scans');
  const [zoomLevel, setZoomLevel] = useState<number>(100);
  const [customUserImages, setCustomUserImages] = useState<string[]>([]);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);

  // Unit CamScanner Images mapping
  const unitImages: Record<string, { src: string; title: string; desc: string }> = {
    'unit-1': {
      src: '/handwritten_u1_p1.jpg',
      title: 'Unit - 1: Number Systems & Boolean Algebra',
      desc: 'Handwritten CamScanner sheet covering Radix, MSB/LSB, Decimal-Binary-Octal-Hex conversions, and Boolean laws.'
    },
    'unit-2': {
      src: '/handwritten_u2_p1.jpg',
      title: 'Unit - 2: K-Map Minimization & IC Families',
      desc: 'Handwritten CamScanner sheet with 2/3/4-variable K-maps, red loop groupings, TTL NAND totem-pole, and CMOS.'
    },
    'unit-3': {
      src: '/handwritten_u3_p1.jpg',
      title: 'Unit - 3: Sequential Circuits & Flip-Flops',
      desc: 'Handwritten CamScanner sheet with SR, JK, D, T flip-flop circuits, truth tables, and characteristic equations.'
    },
    'unit-4': {
      src: '/handwritten_u4_p1.jpg',
      title: 'Unit - 4: Combinational Logic & Adders/MUX',
      desc: 'Handwritten CamScanner sheet with Half/Full Adders, CLA generator, 4-bit Parallel Adder, and Multiplexers.'
    },
    'unit-5': {
      src: '/handwritten_u5_p1.jpg',
      title: 'Unit - 5: Semiconductor Memories & PLDs',
      desc: 'Handwritten CamScanner sheet with SRAM vs DRAM table, EPROM UV window, PLA & PAL programmable matrix.'
    }
  };

  const currentUnitImage = unitImages[selectedUnitId] || unitImages['unit-1'];

  const unitPages = ALL_HANDWRITTEN_PAGES.filter(p => p.unitId === selectedUnitId);

  // Filter pages by search query
  const filteredPages = searchQuery.trim()
    ? ALL_HANDWRITTEN_PAGES.filter(
        p =>
          p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.sections.some(
            s =>
              s.heading.toLowerCase().includes(searchQuery.toLowerCase()) ||
              (s.points && s.points.some(pt => pt.toLowerCase().includes(searchQuery.toLowerCase())))
          )
      )
    : unitPages;

  const currentPage: HandwrittenPage | undefined = filteredPages[selectedPageIndex] || filteredPages[0];

  const handleUnitChange = (uId: string) => {
    setSelectedUnitId(uId);
    setSelectedPageIndex(0);
    setSearchQuery('');
    setZoomLevel(100);
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      const newUrls: string[] = [];
      Array.from(files).forEach(file => {
        newUrls.push(URL.createObjectURL(file));
      });
      setCustomUserImages(prev => [...prev, ...newUrls]);
      setViewMode('scans');
    }
  };

  return (
    <div className={`w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6 ${isFullscreen ? 'fixed inset-0 z-50 bg-slate-950 p-4 overflow-y-auto max-w-none' : ''}`}>
      {/* Top Header Banner */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-amber-950 via-slate-900 to-sky-950 border border-amber-600/30 p-6 sm:p-8 text-white shadow-xl">
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30 text-xs font-bold uppercase tracking-wider">
              <PenTool className="w-3.5 h-3.5" />
              <span>Authentic CamScanner Handwritten Notebook</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight flex items-center gap-3">
              <span>HandWritten Notes</span>
              <span className="text-xs px-2.5 py-1 rounded-lg bg-amber-500/20 text-amber-300 border border-amber-500/30 font-mono">
                CamScanner Verified
              </span>
            </h1>
            <p className="text-sm text-slate-300 max-w-2xl leading-relaxed">
              Student classroom classwork & handwritten study notes as scanned with CamScanner. Features real blue/red ink handwriting, hand-drawn logic diagrams, K-maps with circled loops, and solved derivations.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-2.5">
            <a
              href="/HandWritten-Notes.pdf"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-bold transition-all shadow-md cursor-pointer"
              title="Open HandWritten Notes PDF in a new tab"
            >
              <FileText className="w-4 h-4 text-slate-950" />
              <span>Open HandWritten Notes PDF</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-80" />
            </a>

            <a
              href="/HandWritten-Notes.pdf"
              download="HandWritten_Notes_Digital_Electronics.pdf"
              className="inline-flex items-center gap-2 px-3.5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 text-xs font-semibold transition-colors"
              title="Download HandWritten Notes PDF"
            >
              <Download className="w-4 h-4 text-emerald-400" />
              <span className="hidden sm:inline">Download PDF</span>
            </a>

            <button
              onClick={() => setIsFullscreen(!isFullscreen)}
              className="p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700 text-xs transition-colors cursor-pointer"
              title={isFullscreen ? 'Exit Fullscreen' : 'Fullscreen View'}
            >
              {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </div>

      {/* View Mode Switcher: CamScanner Scans vs Lined Notebook Sheet vs PDF */}
      <div className="flex flex-wrap items-center justify-between gap-3 bg-white dark:bg-slate-900 p-2.5 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xs">
        {/* View Mode Tabs */}
        <div className="flex items-center gap-1.5 p-1 bg-slate-100 dark:bg-slate-800 rounded-xl">
          <button
            onClick={() => setViewMode('scans')}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
              viewMode === 'scans'
                ? 'bg-amber-500 text-slate-950 shadow-xs'
                : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            <ImageIcon className="w-3.5 h-3.5" />
            <span>CamScanner Scans (Images)</span>
          </button>

          <button
            onClick={() => setViewMode('notebook')}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
              viewMode === 'notebook'
                ? 'bg-amber-500 text-slate-950 shadow-xs'
                : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            <PenTool className="w-3.5 h-3.5" />
            <span>Handwritten Notebook Sheet</span>
          </button>

          <button
            onClick={() => setViewMode('pdfEmbed')}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
              viewMode === 'pdfEmbed'
                ? 'bg-amber-500 text-slate-950 shadow-xs'
                : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>Embed PDF</span>
          </button>
        </div>

        {/* Zoom Controls (Active in Scans & Notebook modes) */}
        {viewMode !== 'pdfEmbed' && (
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1 bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded-lg border border-slate-200 dark:border-slate-700 text-xs text-slate-700 dark:text-slate-300">
              <button
                onClick={() => setZoomLevel(prev => Math.max(50, prev - 15))}
                className="p-1 hover:text-amber-500 cursor-pointer"
                title="Zoom Out"
              >
                <ZoomOut className="w-3.5 h-3.5" />
              </button>
              <span className="font-mono px-1 font-bold">{zoomLevel}%</span>
              <button
                onClick={() => setZoomLevel(prev => Math.min(200, prev + 15))}
                className="p-1 hover:text-amber-500 cursor-pointer"
                title="Zoom In"
              >
                <ZoomIn className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => setZoomLevel(100)}
                className="text-[10px] ml-1 px-1.5 py-0.5 rounded bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300 cursor-pointer"
              >
                Reset
              </button>
            </div>

            <label className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 text-slate-700 dark:text-slate-200 rounded-lg text-xs font-semibold cursor-pointer border border-slate-200 dark:border-slate-700">
              <Upload className="w-3.5 h-3.5 text-amber-500" />
              <span className="hidden sm:inline">Attach Scan</span>
              <input
                type="file"
                accept="image/*"
                multiple
                className="hidden"
                onChange={handleImageUpload}
              />
            </label>
          </div>
        )}
      </div>

      {/* Unit Selector Pills */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2.5">
        {HANDWRITTEN_UNITS.map(unit => {
          const isSelected = selectedUnitId === unit.id && !searchQuery.trim();
          return (
            <button
              key={unit.id}
              onClick={() => handleUnitChange(unit.id)}
              className={`p-3.5 rounded-xl text-left border transition-all cursor-pointer flex flex-col justify-between ${
                isSelected
                  ? 'bg-amber-500/15 border-amber-500/60 shadow-xs ring-1 ring-amber-500/40'
                  : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700'
              }`}
            >
              <div className="flex items-center justify-between mb-1">
                <span className={`text-xs font-extrabold uppercase tracking-wider ${isSelected ? 'text-amber-500' : 'text-slate-500 dark:text-slate-400'}`}>
                  {unit.name}
                </span>
                <span className="text-[10px] font-mono text-slate-500 dark:text-slate-400 px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800">
                  {unit.pageCount} pgs
                </span>
              </div>
              <p className={`text-xs font-bold line-clamp-2 ${isSelected ? 'text-slate-900 dark:text-white' : 'text-slate-700 dark:text-slate-300'}`}>
                {unit.title}
              </p>
            </button>
          );
        })}
      </div>

      {/* ------------------------------------------------------------- */}
      {/* MODE 1: CAMSCANNER SCANS (AUTHENTIC HANDWRITTEN IMAGES) */}
      {/* ------------------------------------------------------------- */}
      {viewMode === 'scans' && (
        <div className="space-y-4">
          {/* Unit description & scan status bar */}
          <div className="p-4 rounded-xl bg-slate-900 text-white border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="font-bold text-amber-400 uppercase tracking-wider">{currentUnitImage.title}</span>
              <span className="text-slate-400 hidden md:inline">— {currentUnitImage.desc}</span>
            </div>
            <div className="flex items-center gap-2 font-mono text-slate-300">
              <span className="bg-slate-800 px-2 py-0.5 rounded border border-slate-700">
                CamScanner High-Resolution Document
              </span>
              <a
                href={currentUnitImage.src}
                target="_blank"
                rel="noreferrer"
                className="text-amber-400 hover:underline flex items-center gap-1 font-bold"
              >
                Raw Image <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* The High-Resolution CamScanner Scanned Document Container */}
          <div className="bg-slate-950 rounded-2xl border border-slate-800 p-4 sm:p-8 flex flex-col items-center justify-center overflow-auto shadow-2xl min-h-[600px]">
            <div
              style={{ transform: `scale(${zoomLevel / 100})`, transformOrigin: 'top center' }}
              className="transition-transform duration-150 max-w-full"
            >
              <div className="relative rounded-lg shadow-2xl overflow-hidden border border-slate-700 bg-white">
                <img
                  src={currentUnitImage.src}
                  alt={currentUnitImage.title}
                  className="w-full max-w-[850px] h-auto object-contain select-none"
                  loading="lazy"
                />
                {/* CamScanner Brand Mark */}
                <div className="absolute bottom-2 right-3 px-2 py-1 bg-white/90 backdrop-blur-xs text-[10px] font-sans font-bold text-slate-700 rounded shadow-xs flex items-center gap-1 border border-slate-200">
                  <span>Scanned with CamScanner</span>
                </div>
              </div>
            </div>
          </div>

          {/* User Attached Additional Scans if any */}
          {customUserImages.length > 0 && (
            <div className="p-4 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 space-y-3">
              <h4 className="text-xs font-bold text-slate-700 dark:text-slate-300">
                Your Attached Handwritten Pages ({customUserImages.length}):
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {customUserImages.map((imgUrl, i) => (
                  <a
                    key={i}
                    href={imgUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="group relative rounded-lg overflow-hidden border border-slate-200 dark:border-slate-700 aspect-3/4 bg-slate-100"
                  >
                    <img src={imgUrl} alt={`Custom scan ${i + 1}`} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-slate-950/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white text-xs font-bold">
                      View Fullscreen
                    </div>
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {/* ------------------------------------------------------------- */}
      {/* MODE 2: AUTHENTIC LINED NOTEBOOK SHEET (HANDWRITING TYPOGRAPHY) */}
      {/* ------------------------------------------------------------- */}
      {viewMode === 'notebook' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left Sidebar: Topic Selector List */}
          <div className="lg:col-span-4 space-y-4">
            <div className="relative">
              <Search className="w-4 h-4 absolute left-3.5 top-3 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={e => {
                  setSearchQuery(e.target.value);
                  setSelectedPageIndex(0);
                }}
                placeholder="Search handwritten topics..."
                className="w-full pl-9 pr-4 py-2 text-xs bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-xl text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-2.5 text-xs text-slate-400 hover:text-slate-600"
                >
                  Clear
                </button>
              )}
            </div>

            <div className="flex items-center justify-between px-1 text-xs text-slate-500 dark:text-slate-400">
              <span>{filteredPages.length} Notes Pages</span>
              <span>Page {selectedPageIndex + 1} of {filteredPages.length}</span>
            </div>

            <div className="space-y-1.5 max-h-[640px] overflow-y-auto pr-1">
              {filteredPages.map((pg, idx) => {
                const isActive = idx === selectedPageIndex;
                return (
                  <button
                    key={pg.id}
                    onClick={() => setSelectedPageIndex(idx)}
                    className={`w-full text-left p-3 rounded-xl border transition-all cursor-pointer ${
                      isActive
                        ? 'bg-amber-500/10 border-amber-500/50 shadow-xs'
                        : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700'
                    }`}
                  >
                    <div className="flex items-center justify-between text-[11px] mb-1">
                      <span className="font-bold text-amber-600 dark:text-amber-400">
                        {pg.unitName} · Page {pg.pageNumber}
                      </span>
                      <span className="text-[10px] px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400">
                        {pg.category}
                      </span>
                    </div>
                    <div className="text-xs font-semibold text-slate-900 dark:text-white line-clamp-1">
                      {pg.title}
                    </div>
                    <div className="text-[11px] text-slate-500 dark:text-slate-400 line-clamp-1 mt-0.5">
                      {pg.summary}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right: Authentic Ruled Notebook Sheet */}
          <div className="lg:col-span-8">
            {currentPage ? (
              <div
                style={{
                  backgroundColor: '#fbfaf5',
                  backgroundImage: 'repeating-linear-gradient(transparent, transparent 29px, #cbd5e1 30px)',
                  backgroundAttachment: 'local'
                }}
                className="relative rounded-2xl border border-slate-300 shadow-xl p-8 sm:p-12 text-slate-900 overflow-hidden font-['Kalam','Caveat',cursive]"
              >
                {/* Red Left Margin Line (Classroom Notebook Standard) */}
                <div className="absolute top-0 bottom-0 left-10 sm:left-14 w-[1.5px] bg-red-400/80 pointer-events-none" />

                {/* Top Notebook Heading Bar */}
                <div className="relative pl-6 sm:pl-8 pb-4 border-b border-red-300 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div>
                    <div className="text-red-700 font-bold text-lg tracking-wide uppercase">
                      * {currentPage.unitName}: {currentPage.unitTitle}
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-blue-900 mt-0.5">
                      {currentPage.title}
                    </h2>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-sm font-bold text-blue-800 bg-amber-100 px-3 py-1 rounded-full border border-amber-300">
                      Page {currentPage.pageNumber}
                    </span>
                    <button
                      disabled={selectedPageIndex <= 0}
                      onClick={() => setSelectedPageIndex(prev => Math.max(0, prev - 1))}
                      className="p-1 rounded-lg border border-slate-300 hover:bg-slate-200 disabled:opacity-30 cursor-pointer"
                      title="Previous Page"
                    >
                      <ChevronLeft className="w-4 h-4 text-slate-700" />
                    </button>
                    <button
                      disabled={selectedPageIndex >= filteredPages.length - 1}
                      onClick={() => setSelectedPageIndex(prev => Math.min(filteredPages.length - 1, prev + 1))}
                      className="p-1 rounded-lg border border-slate-300 hover:bg-slate-200 disabled:opacity-30 cursor-pointer"
                      title="Next Page"
                    >
                      <ChevronRight className="w-4 h-4 text-slate-700" />
                    </button>
                  </div>
                </div>

                {/* Core Notes Content in Blue and Red Ballpoint Pen Ink */}
                <div className="relative pl-6 sm:pl-8 pt-6 space-y-6 text-base sm:text-lg leading-relaxed text-blue-900">
                  {/* Summary / Definition Callout */}
                  <div className="p-3 bg-amber-100/70 border border-amber-300/80 rounded-lg text-amber-950 font-semibold text-base">
                    <span className="text-red-700 font-bold">Key Concept: </span>
                    {currentPage.summary}
                  </div>

                  {/* Sections */}
                  {currentPage.sections.map((sec, sIdx) => (
                    <div key={sIdx} className="space-y-2">
                      <div className="text-red-700 font-bold text-lg sm:text-xl border-b border-red-300 pb-0.5 inline-block">
                        ➤ {sec.heading} : —
                      </div>

                      {sec.points && (
                        <div className="space-y-1.5 pl-2 text-blue-900">
                          {sec.points.map((pt, pIdx) => (
                            <div key={pIdx} className="flex items-start gap-2">
                              <span className="text-red-600 font-bold">•</span>
                              <span>{pt}</span>
                            </div>
                          ))}
                        </div>
                      )}

                      {sec.equations && (
                        <div className="p-3 bg-blue-50/80 border border-blue-200 rounded-lg space-y-1 font-mono text-sm sm:text-base text-blue-950 font-bold">
                          {sec.equations.map((eq, eqIdx) => (
                            <div key={eqIdx} className="flex items-center gap-2">
                              <span className="text-red-600 font-sans">Eq:</span>
                              <span>{eq}</span>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Handwritten Ruled Table */}
                      {sec.table && (
                        <div className="my-3 overflow-x-auto">
                          <table className="border-collapse border-2 border-slate-700 text-sm sm:text-base text-blue-900 bg-white/70">
                            <thead>
                              <tr className="border-b-2 border-slate-700 bg-amber-50">
                                {sec.table.headers.map((h, hIdx) => (
                                  <th key={hIdx} className="border border-slate-700 px-3 py-1.5 text-red-800 font-bold">
                                    {h}
                                  </th>
                                ))}
                              </tr>
                            </thead>
                            <tbody>
                              {sec.table.rows.map((r, rIdx) => (
                                <tr key={rIdx} className="border-b border-slate-700 hover:bg-amber-50/50">
                                  {r.map((c, cIdx) => (
                                    <td key={cIdx} className="border border-slate-700 px-3 py-1 font-semibold">
                                      {c}
                                    </td>
                                  ))}
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      )}

                      {/* Solved Handwritten Example */}
                      {sec.example && (
                        <div className="p-3 bg-emerald-50/80 border border-emerald-300 rounded-lg text-emerald-950 space-y-1 text-sm sm:text-base">
                          <div className="font-bold text-red-700">
                            Q) {sec.example.problem}
                          </div>
                          <div className="pl-3 space-y-0.5 text-blue-950 font-semibold">
                            {sec.example.solution.map((sol, solIdx) => (
                              <div key={solIdx}>→ {sol}</div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  ))}

                  {/* Key Takeaways */}
                  {currentPage.keyTakeaways && (
                    <div className="pt-4 border-t-2 border-red-300 text-sm sm:text-base text-red-800 font-bold flex flex-wrap items-center gap-2">
                      <span>✓ Note:</span>
                      {currentPage.keyTakeaways.map((t, tIdx) => (
                        <span key={tIdx} className="bg-amber-100 text-blue-950 px-2.5 py-0.5 rounded border border-amber-300 font-semibold">
                          {t}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                {/* CamScanner Watermark Banner at Bottom Right */}
                <div className="relative pl-6 sm:pl-8 pt-8 flex justify-end">
                  <div className="px-3 py-1 bg-white/90 text-xs text-slate-700 font-sans font-bold rounded border border-slate-300 shadow-xs">
                    Scanned with CamScanner
                  </div>
                </div>
              </div>
            ) : (
              <div className="p-12 text-center text-slate-500 font-['Kalam',cursive]">
                No handwritten notes found for "{searchQuery}".
              </div>
            )}
          </div>
        </div>
      )}

      {/* ------------------------------------------------------------- */}
      {/* MODE 3: EMBEDDED PDF VIEWER */}
      {/* ------------------------------------------------------------- */}
      {viewMode === 'pdfEmbed' && (
        <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-lg p-2">
          <div className="p-3 bg-slate-100 dark:bg-slate-800 rounded-xl mb-2 flex items-center justify-between text-xs">
            <span className="font-semibold text-slate-700 dark:text-slate-200 flex items-center gap-2">
              <FileText className="w-4 h-4 text-amber-500" />
              Document Viewer: HandWritten-Notes.pdf (All 5 Units)
            </span>
            <a
              href="/HandWritten-Notes.pdf"
              target="_blank"
              rel="noreferrer"
              className="text-sky-600 dark:text-sky-400 font-bold hover:underline flex items-center gap-1"
            >
              Open fullscreen in new tab <ExternalLink className="w-3 h-3" />
            </a>
          </div>
          <iframe
            src="/HandWritten-Notes.pdf"
            title="HandWritten Notes PDF"
            className="w-full h-[780px] rounded-xl border border-slate-200 dark:border-slate-800"
          />
        </div>
      )}
    </div>
  );
};
