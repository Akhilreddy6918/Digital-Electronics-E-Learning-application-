import React, { useState } from 'react';
import { VideoRecord, UnitId } from '../types/digitalElectronics';
import { ALL_228_VIDEOS } from '../data/deVideosData';
import {
  Search,
  Play,
  ExternalLink,
  CheckCircle2,
  BookOpen,
  Zap,
  HelpCircle,
  Filter,
  X,
  Clock,
  Layers,
  List,
  LayoutGrid
} from 'lucide-react';

interface YouTubeVideoLibraryProps {
  onOpenNotes?: (notesRef: string) => void;
  onOpenSimulator?: (circuitId: string) => void;
  onOpenQuiz?: (unitId: UnitId) => void;
}

export const YouTubeVideoLibrary: React.FC<YouTubeVideoLibraryProps> = ({
  onOpenNotes,
  onOpenSimulator,
  onOpenQuiz
}) => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedUnit, setSelectedUnit] = useState<string>('All');
  const [selectedType, setSelectedType] = useState<string>('All');
  const [displayMode, setDisplayMode] = useState<'line-wise' | 'grid'>('line-wise');
  const [activeVideoModal, setActiveVideoModal] = useState<VideoRecord | null>(null);
  const [watchedVideoIds, setWatchedVideoIds] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('cognita_watched_videos');
      return saved ? JSON.parse(saved) : ['vid-1', 'vid-2'];
    } catch (e) {
      return ['vid-1'];
    }
  });

  const toggleWatched = (videoId: string) => {
    setWatchedVideoIds(prev => {
      const updated = prev.includes(videoId)
        ? prev.filter(id => id !== videoId)
        : [...prev, videoId];
      try {
        localStorage.setItem('cognita_watched_videos', JSON.stringify(updated));
      } catch (e) {
        // ignore
      }
      return updated;
    });
  };

  const filteredVideos = ALL_228_VIDEOS.filter(v => {
    const matchesUnit =
      selectedUnit === 'All' ||
      v.unit.toLowerCase().includes(selectedUnit.toLowerCase()) ||
      v.unitId === selectedUnit;

    const matchesType =
      selectedType === 'All' ||
      v.content_type === selectedType;

    const matchesSearch =
      searchQuery.trim() === '' ||
      v.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      v.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      v.topic.toLowerCase().includes(searchQuery.toLowerCase()) ||
      v.sequence_no.toString() === searchQuery.trim();

    return matchesUnit && matchesType && matchesSearch;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
      {/* Header Banner */}
      <div className="bg-slate-950 rounded-2xl border border-slate-800 p-6 sm:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold text-rose-400 uppercase tracking-wider mb-2">
            <Play className="w-4 h-4 fill-rose-500 text-rose-500" />
            <span>Curated Video Learning Library</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight font-sans">
            228 YouTube Learning Lectures
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 mt-2 max-w-2xl leading-relaxed">
            All 228 exact videos mapped systematically across Units I through V and supplemental university exam topics. Watch concepts, review step-by-step solved problems, and cross-reference with syllabus notes.
          </p>
        </div>

        {/* Video Progress Summary */}
        <div className="bg-slate-900/90 rounded-xl border border-slate-800 p-4 self-start md:self-auto shrink-0 text-center min-w-[160px]">
          <span className="text-[11px] text-slate-400 block font-medium">Lectures Completed</span>
          <span className="text-2xl font-bold font-mono text-emerald-400 tabular-nums">
            {watchedVideoIds.length} <span className="text-sm text-slate-500 font-normal">/ 228</span>
          </span>
          <div className="w-full bg-slate-800 rounded-full h-1.5 mt-2 overflow-hidden">
            <div
              className="bg-emerald-500 h-full rounded-full transition-all duration-300"
              style={{ width: `${Math.round((watchedVideoIds.length / 228) * 100)}%` }}
            />
          </div>
        </div>
      </div>

      {/* Search & Filter Toolbar */}
      <div className="bg-white rounded-xl border border-slate-200/90 p-4 flex flex-col md:flex-row items-center justify-between gap-4 shadow-xs">
        {/* Search Input */}
        <div className="relative w-full md:w-96">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            type="text"
            placeholder="Search by title, topic, video # (e.g. 103, JK flip-flop)..."
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            className="w-full bg-slate-50 border border-slate-200 rounded-lg pl-9 pr-4 py-2 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500"
          />
        </div>

        {/* Unit Filter Dropdown/Tabs & Layout Switcher */}
        <div className="flex flex-wrap items-center justify-between gap-3 w-full">
          <div className="flex flex-wrap items-center gap-1.5">
            {[
              { id: 'All', label: 'All Units' },
              { id: 'unit-1', label: 'Unit I' },
              { id: 'unit-2', label: 'Unit II' },
              { id: 'unit-3', label: 'Unit III' },
              { id: 'unit-4', label: 'Unit IV' },
              { id: 'unit-5', label: 'Unit V' },
              { id: 'supplemental', label: 'Supp/PYQ' }
            ].map(u => (
              <button
                key={u.id}
                onClick={() => setSelectedUnit(u.id)}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                  selectedUnit === u.id
                    ? 'bg-slate-900 text-white font-semibold shadow-xs'
                    : 'text-slate-600 hover:text-slate-900 bg-slate-100 hover:bg-slate-200'
                }`}
              >
                {u.label}
              </button>
            ))}
          </div>

          {/* Line-wise vs Grid View Switcher */}
          <div className="flex items-center bg-slate-100 p-1 rounded-lg border border-slate-200 text-xs font-semibold">
            <button
              onClick={() => setDisplayMode('line-wise')}
              className={`px-3 py-1 rounded-md flex items-center gap-1.5 transition-colors cursor-pointer ${
                displayMode === 'line-wise'
                  ? 'bg-white text-slate-900 shadow-xs font-bold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <List className="w-3.5 h-3.5 text-sky-600" />
              <span>Line-wise List View</span>
            </button>
            <button
              onClick={() => setDisplayMode('grid')}
              className={`px-3 py-1 rounded-md flex items-center gap-1.5 transition-colors cursor-pointer ${
                displayMode === 'grid'
                  ? 'bg-white text-slate-900 shadow-xs font-bold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <LayoutGrid className="w-3.5 h-3.5 text-sky-600" />
              <span>Grid View</span>
            </button>
          </div>
        </div>
      </div>

      {/* Videos List Header */}
      <div className="flex items-center justify-between text-xs text-slate-500 font-mono">
        <span>Showing {filteredVideos.length} of 228 lecture records arranged line-wise in order (1 to 228)</span>
        <span>Mode: {displayMode === 'line-wise' ? 'Line-wise Table' : '3-Column Grid'}</span>
      </div>

      {/* LINE-WISE VIEW (Table rows with exact URLs and actions) */}
      {displayMode === 'line-wise' && (
        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-slate-900 text-white font-mono text-[11px] border-b border-slate-800">
                  <th className="py-3 px-4 w-14 text-center">#</th>
                  <th className="py-3 px-4 w-40">Unit & Syllabus</th>
                  <th className="py-3 px-4 min-w-[280px]">Lecture Topic & Description</th>
                  <th className="py-3 px-4 min-w-[240px]">YouTube Direct Link</th>
                  <th className="py-3 px-4 w-48 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 font-sans">
                {filteredVideos.map(video => {
                  const isWatched = watchedVideoIds.includes(video.id);

                  return (
                    <tr
                      key={video.id}
                      className={`hover:bg-sky-50/50 transition-colors ${isWatched ? 'bg-slate-50/60' : ''}`}
                    >
                      {/* Column 1: Sequence # */}
                      <td className="py-3 px-4 text-center">
                        <span className="inline-block font-mono font-bold text-xs bg-slate-100 text-slate-800 px-2 py-0.5 rounded border border-slate-200">
                          {video.sequence_no}
                        </span>
                      </td>

                      {/* Column 2: Unit */}
                      <td className="py-3 px-4">
                        <span className="font-mono text-[11px] font-semibold text-sky-700 bg-sky-50 px-2 py-0.5 rounded border border-sky-100 block w-fit mb-1">
                          {video.unit.split('–')[0].trim()}
                        </span>
                        <span className="text-[11px] text-slate-500 font-medium block truncate max-w-[150px]">
                          {video.topic}
                        </span>
                      </td>

                      {/* Column 3: Title and Description */}
                      <td className="py-3 px-4">
                        <div className="font-bold text-slate-900 text-xs sm:text-sm leading-snug">
                          {video.title}
                        </div>
                        <p className="text-[11px] text-slate-500 line-clamp-1 mt-0.5">
                          {video.description}
                        </p>
                      </td>

                      {/* Column 4: YouTube Link (Line-wise Exact URL) */}
                      <td className="py-3 px-4">
                        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-slate-100 hover:bg-slate-200 rounded-lg border border-slate-200 font-mono text-[11px] text-slate-700 max-w-full">
                          <Play className="w-3 h-3 text-rose-600 fill-rose-600 shrink-0" />
                          <span className="truncate max-w-[200px]">{video.youtube_url}</span>
                          <a
                            href={video.youtube_url}
                            target="_blank"
                            rel="noreferrer"
                            className="text-sky-600 hover:text-sky-800 shrink-0 ml-1"
                            title="Open exact YouTube link in new tab"
                          >
                            <ExternalLink className="w-3.5 h-3.5" />
                          </a>
                        </div>
                      </td>

                      {/* Column 5: Action Buttons */}
                      <td className="py-3 px-4 text-right">
                        <div className="inline-flex items-center gap-1.5 justify-end">
                          <button
                            onClick={() => {
                              setActiveVideoModal(video);
                              if (!isWatched) toggleWatched(video.id);
                            }}
                            className="px-2.5 py-1.5 bg-slate-900 hover:bg-sky-600 text-white rounded-lg text-xs font-semibold inline-flex items-center gap-1 transition-colors cursor-pointer shadow-xs whitespace-nowrap"
                          >
                            <Play className="w-3 h-3 fill-current" />
                            <span>Watch</span>
                          </button>

                          {video.notes_reference && onOpenNotes && (
                            <button
                              onClick={() => onOpenNotes(video.notes_reference!)}
                              className="p-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg transition-colors cursor-pointer"
                              title="Read Topic PDF Notes"
                            >
                              <BookOpen className="w-3.5 h-3.5" />
                            </button>
                          )}

                          {video.simulator_circuit_id && onOpenSimulator && (
                            <button
                              onClick={() => onOpenSimulator(video.simulator_circuit_id!)}
                              className="p-1.5 bg-sky-50 hover:bg-sky-100 text-sky-700 rounded-lg transition-colors cursor-pointer"
                              title="Test Circuit Simulator"
                            >
                              <Zap className="w-3.5 h-3.5" />
                            </button>
                          )}

                          <button
                            onClick={() => toggleWatched(video.id)}
                            className="p-1.5 text-slate-400 hover:text-emerald-600 transition-colors cursor-pointer"
                            title={isWatched ? 'Mark as unwatched' : 'Mark as completed'}
                          >
                            <CheckCircle2 className={`w-4 h-4 ${isWatched ? 'text-emerald-500 fill-emerald-100' : ''}`} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* GRID VIEW (Card Mode) */}
      {displayMode === 'grid' && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredVideos.map(video => {
          const isWatched = watchedVideoIds.includes(video.id);

          return (
            <div
              key={video.id}
              className="bg-white rounded-xl border border-slate-200 p-5 flex flex-col justify-between hover:border-slate-300 hover:shadow-md transition-all group"
            >
              <div>
                {/* Top Row: Sequence #, Unit, Watched Checkbox */}
                <div className="flex items-center justify-between gap-2 mb-2 text-[11px] text-slate-500 font-mono">
                  <span className="font-bold text-sky-700 bg-sky-50 px-2 py-0.5 rounded border border-sky-100">
                    #{video.sequence_no}
                  </span>
                  <span className="truncate">{video.unit.split('–')[0]}</span>
                  <button
                    onClick={() => toggleWatched(video.id)}
                    className="p-1 text-slate-400 hover:text-emerald-600 transition-colors cursor-pointer"
                    title={isWatched ? 'Mark as unwatched' : 'Mark as watched'}
                  >
                    <CheckCircle2 className={`w-4 h-4 ${isWatched ? 'text-emerald-500 fill-emerald-100' : ''}`} />
                  </button>
                </div>

                {/* Video Title */}
                <h3 className="text-sm font-bold text-slate-900 group-hover:text-sky-700 transition-colors line-clamp-2 leading-snug">
                  {video.title}
                </h3>

                {/* Topic and Description */}
                <div className="mt-1 text-[11px] text-slate-500 font-medium">{video.topic}</div>
                <p className="mt-2 text-xs text-slate-600 line-clamp-2 leading-relaxed">
                  {video.description}
                </p>

                {/* Visible Exact URL (as mandated by document requirement) */}
                <div className="mt-3 p-2 bg-slate-50 rounded-lg border border-slate-100 flex items-center justify-between text-[10px] font-mono text-slate-500 overflow-hidden">
                  <span className="truncate mr-2">{video.youtube_url}</span>
                  <a
                    href={video.youtube_url}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sky-600 hover:text-sky-800 shrink-0"
                    title="Open exact YouTube link in new tab"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between gap-2">
                <button
                  onClick={() => {
                    setActiveVideoModal(video);
                    if (!isWatched) toggleWatched(video.id);
                  }}
                  className="flex-1 py-1.5 px-3 bg-slate-900 hover:bg-slate-800 text-white rounded-lg text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                >
                  <Play className="w-3.5 h-3.5 fill-current" />
                  <span>Watch Video</span>
                </button>

                {video.notes_reference && onOpenNotes && (
                  <button
                    onClick={() => onOpenNotes(video.notes_reference!)}
                    className="p-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg text-xs font-medium transition-colors cursor-pointer"
                    title="View related PDF notes"
                  >
                    <BookOpen className="w-3.5 h-3.5" />
                  </button>
                )}

                {video.simulator_circuit_id && onOpenSimulator && (
                  <button
                    onClick={() => onOpenSimulator(video.simulator_circuit_id!)}
                    className="p-1.5 bg-sky-50 hover:bg-sky-100 text-sky-700 rounded-lg text-xs font-medium transition-colors cursor-pointer"
                    title="Launch circuit simulator"
                  >
                    <Zap className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>
      )}

      {/* In-App Video Modal Player */}
      {activeVideoModal && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-3xl w-full overflow-hidden shadow-2xl border border-slate-200 animate-in fade-in zoom-in-95 duration-150">
            {/* Modal Header */}
            <div className="p-4 bg-slate-900 text-white flex items-center justify-between">
              <div className="truncate mr-4">
                <span className="text-[11px] font-mono text-rose-400 block">
                  Video #{activeVideoModal.sequence_no} · {activeVideoModal.unit}
                </span>
                <h3 className="text-sm font-bold text-white truncate">{activeVideoModal.title}</h3>
              </div>
              <button
                onClick={() => setActiveVideoModal(null)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Embedded Player or Fallback Container */}
            <div className="relative aspect-video w-full bg-black flex items-center justify-center">
              {activeVideoModal.youtube_id && activeVideoModal.youtube_id.length > 5 ? (
                <iframe
                  src={`https://www.youtube.com/embed/${activeVideoModal.youtube_id}?autoplay=1&rel=0`}
                  title={activeVideoModal.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full border-0"
                />
              ) : (
                <div className="p-8 text-center text-white space-y-3">
                  <Play className="w-12 h-12 text-rose-500 mx-auto" />
                  <p className="text-sm font-semibold">{activeVideoModal.title}</p>
                  <a
                    href={activeVideoModal.youtube_url}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 bg-rose-600 hover:bg-rose-500 text-white text-xs font-semibold rounded-lg"
                  >
                    <span>Watch on YouTube</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              )}
            </div>

            {/* Modal Footer Info */}
            <div className="p-4 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
              <span className="text-slate-600 line-clamp-1">{activeVideoModal.description}</span>
              <a
                href={activeVideoModal.youtube_url}
                target="_blank"
                rel="noreferrer"
                className="text-sky-600 hover:text-sky-800 font-semibold flex items-center gap-1 shrink-0"
              >
                <span>Direct URL</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
