import React, { useState } from 'react';
import { PYQ_PAPERS } from '../data/dePyqData';
import { PYQPaper, UnitId } from '../types/digitalElectronics';
import {
  FileText,
  Search,
  Printer,
  Download,
  BookOpen,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  HelpCircle,
  ExternalLink
} from 'lucide-react';

interface PyqModuleProps {
  onOpenNotes?: (unitId: UnitId) => void;
}

export const PyqModule: React.FC<PyqModuleProps> = ({ onOpenNotes }) => {
  const [selectedYear, setSelectedYear] = useState<number>(2024);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [expandedSolutions, setExpandedSolutions] = useState<Record<string, boolean>>({});
  const [selectedUnit, setSelectedUnit] = useState<string>('All');

  const activePaper = PYQ_PAPERS.find(p => p.year === selectedYear) || PYQ_PAPERS[0];

  const toggleSolution = (qNum: string) => {
    setExpandedSolutions(prev => ({
      ...prev,
      [qNum]: !prev[qNum]
    }));
  };

  // Filter questions by search or unit
  const filteredQuestions = activePaper.questions.filter(q => {
    const matchesUnit = selectedUnit === 'All' || q.unitId === selectedUnit;
    const matchesSearch =
      searchQuery.trim() === '' ||
      q.text.toLowerCase().includes(searchQuery.toLowerCase()) ||
      q.topic.toLowerCase().includes(searchQuery.toLowerCase()) ||
      q.solutionHint.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesUnit && matchesSearch;
  });

  const partAQuestions = filteredQuestions.filter(q => q.part === 'Part-A');
  const partBQuestions = filteredQuestions.filter(q => q.part === 'Part-B');

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
      {/* Header Banner */}
      <div className="bg-slate-950 rounded-2xl border border-slate-800 p-6 sm:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold text-amber-400 uppercase tracking-wider mb-2">
            <FileText className="w-4 h-4" />
            <span>JNTUH University Examination Archive</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight font-sans">
            5-Year Previous Question Papers (2020–2024)
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 mt-2 max-w-2xl leading-relaxed">
            Authentic examination papers for Digital Logic Design (DLD) and Digital System Design (DSD), complete with marks distribution, syllabus topic mappings, and step-by-step solution keys.
          </p>
        </div>

        {/* Year Selector Tabs */}
        <div className="flex items-center gap-1.5 p-1 bg-slate-900 rounded-xl border border-slate-800 self-start md:self-auto shrink-0">
          {[2024, 2023, 2022, 2021, 2020].map(yr => (
            <button
              key={yr}
              onClick={() => setSelectedYear(yr)}
              className={`px-3 py-1.5 text-xs font-mono font-bold rounded-lg transition-colors ${
                selectedYear === yr
                  ? 'bg-amber-500 text-slate-950 shadow-xs'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              {yr}
            </button>
          ))}
        </div>
      </div>

      {/* Filter and Paper Header Card */}
      <div className="bg-white rounded-xl border border-slate-200 p-6 space-y-4 shadow-xs">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-slate-100">
          <div>
            <div className="flex items-center gap-2 text-xs text-slate-500 font-mono mb-1">
              <span className="font-bold text-slate-900">Code No: {activePaper.code}</span>
              <span>·</span>
              <span className="bg-slate-100 text-slate-800 px-2 py-0.5 rounded font-bold">{activePaper.regulation}</span>
              <span>·</span>
              <span>Max Marks: {activePaper.maxMarks}</span>
            </div>
            <h2 className="text-lg font-bold text-slate-900">{activePaper.title}</h2>
            <div className="text-xs text-slate-600 font-medium mt-0.5">
              Subject: {activePaper.subject} · {activePaper.branch}
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => window.print()}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg text-xs font-semibold transition-colors"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print Paper</span>
            </button>
          </div>
        </div>

        {/* Search in PYQ Questions */}
        <div className="flex flex-col sm:flex-row items-center gap-3">
          <div className="relative flex-1 w-full">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search question keywords (e.g. Hamming, K-map, JK flip-flop, MUX)..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              className="w-full bg-slate-50 border border-slate-200 rounded-lg pl-9 pr-3 py-2 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500"
            />
          </div>

          <div className="flex items-center gap-1 overflow-x-auto w-full sm:w-auto">
            {['All', 'unit-1', 'unit-2', 'unit-3', 'unit-4', 'unit-5'].map(u => (
              <button
                key={u}
                onClick={() => setSelectedUnit(u)}
                className={`px-2.5 py-1.5 text-[11px] rounded-md transition-colors whitespace-nowrap ${
                  selectedUnit === u
                    ? 'bg-slate-900 text-white font-semibold'
                    : 'bg-slate-100 text-slate-600 hover:text-slate-900'
                }`}
              >
                {u === 'All' ? 'All Units' : u.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Part A Section */}
      {partAQuestions.length > 0 && (
        <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-xs">
          <div className="p-4 bg-slate-50 border-b border-slate-200 flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-800">
              PART – A (Compulsory Short Answer Questions · 10 Marks)
            </span>
            <span className="text-xs font-mono text-slate-500">{partAQuestions.length} Questions</span>
          </div>

          <div className="divide-y divide-slate-100 p-4 space-y-4">
            {partAQuestions.map(q => {
              const isExpanded = expandedSolutions[q.questionNumber];
              return (
                <div key={q.questionNumber} className="pt-3 first:pt-0">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-start gap-3">
                      <span className="w-7 h-7 rounded-lg bg-slate-100 font-mono text-xs font-bold flex items-center justify-center text-slate-800 shrink-0">
                        {q.questionNumber}
                      </span>
                      <div>
                        <div className="text-xs text-slate-500 font-mono mb-0.5">
                          {q.unitId.toUpperCase()} · {q.topic}
                        </div>
                        <p className="text-sm font-semibold text-slate-900">{q.text}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                      <span className="text-xs font-mono font-bold text-slate-500 bg-slate-100 px-2 py-0.5 rounded">
                        [{q.marks} Mark{q.marks > 1 ? 's' : ''}]
                      </span>
                      <button
                        onClick={() => toggleSolution(q.questionNumber)}
                        className="px-2.5 py-1 text-xs font-medium text-sky-700 hover:text-sky-800 bg-sky-50 rounded transition-colors"
                      >
                        {isExpanded ? 'Hide Solution' : 'View Solution'}
                      </button>
                    </div>
                  </div>

                  {isExpanded && (
                    <div className="mt-3 ml-10 p-3 bg-slate-50 rounded-lg border border-slate-200 text-xs text-slate-800 leading-relaxed font-mono">
                      <strong className="text-sky-800 block mb-1">Key Examination Solution / Hint:</strong>
                      {q.solutionHint}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Part B Section */}
      {partBQuestions.length > 0 && (
        <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-xs">
          <div className="p-4 bg-slate-50 border-b border-slate-200 flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-800">
              PART – B (Long Answer Descriptive Questions · 50 Marks)
            </span>
            <span className="text-xs font-mono text-slate-500">{partBQuestions.length} Questions</span>
          </div>

          <div className="divide-y divide-slate-100 p-4 space-y-4">
            {partBQuestions.map(q => {
              const isExpanded = expandedSolutions[q.questionNumber];
              return (
                <div key={q.questionNumber} className="pt-3 first:pt-0">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-start gap-3">
                      <span className="w-7 h-7 rounded-lg bg-sky-50 font-mono text-xs font-bold text-sky-800 flex items-center justify-center shrink-0 border border-sky-100">
                        {q.questionNumber}
                      </span>
                      <div>
                        <div className="text-xs text-slate-500 font-mono mb-0.5">
                          {q.unitId.toUpperCase()} · {q.topic} {q.orWith && `(Internal Choice: ${q.orWith})`}
                        </div>
                        <p className="text-sm font-semibold text-slate-900 leading-snug">{q.text}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                      <span className="text-xs font-mono font-bold text-slate-500 bg-slate-100 px-2 py-0.5 rounded">
                        [{q.marks} Marks]
                      </span>
                      <button
                        onClick={() => toggleSolution(q.questionNumber)}
                        className="px-2.5 py-1 text-xs font-medium text-sky-700 hover:text-sky-800 bg-sky-50 rounded transition-colors"
                      >
                        {isExpanded ? 'Hide Solution' : 'View Solution'}
                      </button>
                    </div>
                  </div>

                  {isExpanded && (
                    <div className="mt-3 ml-10 p-3 bg-slate-50 rounded-lg border border-slate-200 text-xs text-slate-800 leading-relaxed font-mono">
                      <strong className="text-sky-800 block mb-1">Key Examination Solution / Hint:</strong>
                      {q.solutionHint}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
