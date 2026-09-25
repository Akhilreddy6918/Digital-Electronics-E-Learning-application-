import React from 'react';
import { REFERENCE_BOOKS } from '../data/deBooksData';
import { BookOpen, CheckCircle2, Bookmark, ExternalLink } from 'lucide-react';

interface ReferenceBooksModuleProps {
  onOpenNotes?: () => void;
}

export const ReferenceBooksModule: React.FC<ReferenceBooksModuleProps> = ({ onOpenNotes }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
      {/* Header Banner */}
      <div className="bg-slate-950 rounded-2xl border border-slate-800 p-6 sm:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold text-sky-400 uppercase tracking-wider mb-2">
            <BookOpen className="w-4 h-4" />
            <span>Academic Reference Collection</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight font-sans">
            Recommended Reference Textbooks
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 mt-2 max-w-2xl leading-relaxed">
            The four official standard reference textbooks specified in the project syllabus handoff, providing complete chapter references, authoritative proofs, and university curriculum alignment.
          </p>
        </div>
      </div>

      {/* Books Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {REFERENCE_BOOKS.map((book, idx) => (
          <div
            key={book.id}
            className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 flex flex-col justify-between shadow-xs hover:border-slate-300 transition-all"
          >
            <div>
              {/* Header */}
              <div className="flex items-center justify-between text-xs text-slate-500 font-mono mb-2">
                <span>Reference Book #{idx + 1} of 4</span>
                <span className="font-semibold text-slate-700">{book.edition}</span>
              </div>

              <h2 className="text-xl font-bold text-slate-900 tracking-tight">{book.title}</h2>
              <div className="text-xs font-semibold text-sky-800 mt-1">
                {book.author} · {book.publisher} ({book.year})
              </div>

              <p className="text-xs text-slate-600 mt-3 leading-relaxed">
                {book.description}
              </p>

              {/* Units Covered */}
              <div className="mt-5 pt-4 border-t border-slate-100">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block mb-2 font-mono">
                  Syllabus Units Covered:
                </span>
                <div className="space-y-1">
                  {book.syllabusUnitsCovered.map((u, uIdx) => (
                    <div key={uIdx} className="flex items-start gap-2 text-xs text-slate-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{u}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Key Chapters */}
              <div className="mt-5 pt-4 border-t border-slate-100">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block mb-2 font-mono">
                  Key Chapters:
                </span>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1 text-xs text-slate-600 font-mono">
                  {book.keyChapters.map((ch, chIdx) => (
                    <li key={chIdx} className="truncate">
                      · {ch}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
              <span className="text-slate-500 font-medium">Prescribed for JNTUH / AICTE</span>
              {onOpenNotes && (
                <button
                  onClick={onOpenNotes}
                  className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white rounded-lg font-semibold transition-colors flex items-center gap-1.5"
                >
                  <span>Read Syllabus Notes</span>
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
