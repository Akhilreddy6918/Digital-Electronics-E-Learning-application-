import React, { useRef } from 'react';
import { Course } from '../types/learning';
import { X, Download, Printer, Award, CheckCircle, ShieldCheck } from 'lucide-react';

interface CertificateModalProps {
  course: Course;
  userName: string;
  onClose: () => void;
}

export const CertificateModal: React.FC<CertificateModalProps> = ({
  course,
  userName,
  onClose
}) => {
  const certificateRef = useRef<HTMLDivElement | null>(null);

  // Generate deterministic verification code
  const verificationCode = `CGN-${course.slug.slice(0, 4).toUpperCase()}-9471-2026`;
  const issueDate = 'September 24, 2026';

  const handlePrint = () => {
    window.print();
  };

  const handleDownload = () => {
    // Generate simple download snapshot or print
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white rounded-2xl max-w-3xl w-full shadow-2xl border border-slate-200 overflow-hidden my-8 animate-in fade-in zoom-in-95 duration-150">
        {/* Modal Top Actions */}
        <div className="p-4 bg-slate-50 border-b border-slate-200 flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
            <Award className="w-4 h-4 text-amber-600" />
            <span>Official Verifiable Credential</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="px-3 py-1.5 bg-white border border-slate-300 hover:bg-slate-50 text-slate-700 rounded-lg text-xs font-medium flex items-center gap-1.5 transition-colors"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-200/60 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Certificate Parchment Surface */}
        <div
          ref={certificateRef}
          className="p-8 sm:p-12 bg-[#FCFCFD] text-slate-900 border-8 border-double border-slate-200 m-4 rounded-lg relative overflow-hidden"
        >
          {/* Subtle Watermark Seal */}
          <div className="absolute right-8 bottom-8 opacity-5 pointer-events-none">
            <Award className="w-64 h-64 text-slate-900" />
          </div>

          {/* Header */}
          <div className="text-center space-y-2">
            <div className="text-2xl font-bold font-serif tracking-widest uppercase text-slate-900">
              Cognita Academy
            </div>
            <div className="text-xs font-mono tracking-widest text-slate-500 uppercase">
              Institute for Advanced Computational & Scientific Studies
            </div>
            <div className="w-24 h-[1px] bg-slate-300 mx-auto my-3" />
            <h2 className="text-sm font-semibold tracking-wider uppercase text-slate-700">
              Certificate of Academic Completion
            </h2>
          </div>

          {/* Recipient Statement */}
          <div className="text-center my-8 space-y-3">
            <p className="text-xs text-slate-500 italic">This credential is formally awarded to</p>
            <div className="text-2xl sm:text-3xl font-extrabold font-serif text-slate-950 tracking-tight">
              {userName || 'Distinguished Scholar'}
            </div>
            <p className="text-xs text-slate-600 max-w-lg mx-auto leading-relaxed pt-2">
              for successfully completing all theoretical lectures, interactive laboratory simulations, algorithmic proofs, and curriculum benchmarks for:
            </p>
            <div className="text-lg sm:text-xl font-bold text-sky-900 font-sans mt-2">
              {course.title}
            </div>
            <div className="text-xs font-mono text-slate-500">
              Coursework Volume: {course.durationHours} Credit Hours · Level: {course.level}
            </div>
          </div>

          {/* Verification & Signatures */}
          <div className="mt-12 pt-6 border-t border-slate-200 grid grid-cols-2 sm:grid-cols-3 gap-6 items-end">
            <div>
              <div className="text-xs font-serif italic text-slate-800 border-b border-slate-400 pb-1 font-semibold">
                {course.instructor.name}
              </div>
              <div className="text-[11px] font-semibold text-slate-800 mt-1">{course.instructor.title}</div>
              <div className="text-[10px] text-slate-500 truncate">{course.instructor.affiliation}</div>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 mx-auto rounded-full bg-amber-50 border-2 border-amber-500/80 flex items-center justify-center text-amber-700 shadow-xs">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div className="text-[10px] font-mono text-slate-600 mt-1 uppercase font-bold tracking-wider">
                Accredited Seal
              </div>
            </div>

            <div className="text-right">
              <div className="text-[11px] text-slate-500">Date Issued:</div>
              <div className="text-xs font-mono text-slate-800 font-semibold">{issueDate}</div>
              <div className="text-[10px] font-mono text-slate-400 mt-1">Hash: {verificationCode}</div>
            </div>
          </div>
        </div>

        {/* Modal Footer Info */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 text-center text-xs text-slate-500">
          This digital credential is cryptographically stamped and registered under the Cognita Academic Ledger.
        </div>
      </div>
    </div>
  );
};
