import React, { useState } from 'react';
import { DE_QUIZ_QUESTIONS } from '../data/deQuizData';
import { UnitId } from '../types/digitalElectronics';
import {
  HelpCircle,
  CheckCircle2,
  XCircle,
  RotateCcw,
  Award,
  Zap,
  BookOpen,
  ArrowRight
} from 'lucide-react';

interface QuizModuleProps {
  initialUnitId?: UnitId;
  onOpenNotes?: (unitId: UnitId) => void;
}

export const QuizModule: React.FC<QuizModuleProps> = ({ initialUnitId, onOpenNotes }) => {
  const [selectedUnit, setSelectedUnit] = useState<UnitId | 'All'>(initialUnitId || 'All');
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, number>>({});
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const filteredQuestions = DE_QUIZ_QUESTIONS.filter(q => {
    return selectedUnit === 'All' || q.unitId === selectedUnit;
  });

  const handleSelectOption = (questionId: string, optionIndex: number) => {
    if (isSubmitted) return;
    setSelectedAnswers(prev => ({
      ...prev,
      [questionId]: optionIndex
    }));
  };

  const handleReset = () => {
    setSelectedAnswers({});
    setIsSubmitted(false);
  };

  // Calculate score
  const totalQuestions = filteredQuestions.length;
  let correctCount = 0;
  if (isSubmitted) {
    filteredQuestions.forEach(q => {
      if (selectedAnswers[q.id] === q.correctIndex) {
        correctCount++;
      }
    });
  }
  const scorePercent = totalQuestions > 0 ? Math.round((correctCount / totalQuestions) * 100) : 0;

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 space-y-6">
      {/* Header Banner */}
      <div className="bg-slate-950 rounded-2xl border border-slate-800 p-6 sm:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400 uppercase tracking-wider mb-2">
            <HelpCircle className="w-4 h-4" />
            <span>Digital Electronics Examination Assessment</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight font-sans">
            Topic-Wise & Unit-Wise Quizzes
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed">
            Test your conceptual understanding and numerical accuracy against authentic questions extracted from university examinations and lecture notes.
          </p>
        </div>

        {/* Unit Selector */}
        <div className="flex items-center gap-1.5 p-1 bg-slate-900 rounded-xl border border-slate-800 self-start md:self-auto shrink-0 flex-wrap">
          {['All', 'unit-1', 'unit-2', 'unit-3', 'unit-4', 'unit-5'].map(u => (
            <button
              key={u}
              onClick={() => {
                setSelectedUnit(u as any);
                handleReset();
              }}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors ${
                selectedUnit === u
                  ? 'bg-emerald-600 text-white shadow-xs'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              {u === 'All' ? 'All Units' : u.toUpperCase()}
            </button>
          ))}
        </div>
      </div>

      {/* Score Summary Box (when submitted) */}
      {isSubmitted && (
        <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className={`w-16 h-16 rounded-2xl flex items-center justify-center font-mono font-bold text-2xl ${
              scorePercent >= 70 ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' : 'bg-amber-50 text-amber-700 border border-amber-200'
            }`}>
              {scorePercent}%
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-900">
                Assessment Result: {correctCount} of {totalQuestions} Correct
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                {scorePercent >= 80 ? 'Mastery demonstrated. Ready for university exams.' : 'Review marked rationales below and re-attempt to solidify gaps.'}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handleReset}
              className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Retry Quiz</span>
            </button>
          </div>
        </div>
      )}

      {/* Questions List */}
      <div className="space-y-6">
        {filteredQuestions.map((q, qIdx) => {
          const selected = selectedAnswers[q.id];
          const isCorrect = selected === q.correctIndex;

          return (
            <div
              key={q.id}
              className="bg-white rounded-xl border border-slate-200 p-6 space-y-4 shadow-xs"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-start gap-3">
                  <span className="w-7 h-7 rounded-lg bg-slate-100 text-xs font-mono font-bold text-slate-800 flex items-center justify-center shrink-0">
                    {qIdx + 1}
                  </span>
                  <div>
                    <div className="flex items-center gap-2 text-[11px] text-slate-500 font-mono mb-1">
                      <span>{q.unitId.toUpperCase()}</span>
                      <span>·</span>
                      <span>{q.topic}</span>
                      {q.isPyq && (
                        <span className="bg-amber-100 text-amber-800 font-bold px-1.5 py-0.2 rounded text-[10px]">
                          PYQ {q.pyqYear}
                        </span>
                      )}
                    </div>
                    <p className="text-sm font-semibold text-slate-900 leading-snug">{q.questionText}</p>
                  </div>
                </div>

                <span className="text-[11px] font-mono text-slate-400 shrink-0">{q.difficulty}</span>
              </div>

              {/* Options */}
              <div className="space-y-2 pt-1 pl-10">
                {q.options.map((opt, optIdx) => {
                  const isThisSelected = selected === optIdx;
                  let optionStyle = 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100 hover:border-slate-300';

                  if (isSubmitted) {
                    if (optIdx === q.correctIndex) {
                      optionStyle = 'bg-emerald-50 border-emerald-500 text-emerald-900 font-semibold';
                    } else if (isThisSelected && !isCorrect) {
                      optionStyle = 'bg-rose-50 border-rose-400 text-rose-900';
                    }
                  } else if (isThisSelected) {
                    optionStyle = 'bg-sky-50 border-sky-600 text-sky-900 font-medium';
                  }

                  return (
                    <button
                      key={optIdx}
                      disabled={isSubmitted}
                      onClick={() => handleSelectOption(q.id, optIdx)}
                      className={`w-full p-3 rounded-lg border text-left text-xs transition-colors flex items-center justify-between ${optionStyle}`}
                    >
                      <div className="flex items-center gap-2.5">
                        <span className="font-mono text-slate-400 uppercase font-bold text-[11px]">
                          {String.fromCharCode(65 + optIdx)}.
                        </span>
                        <span>{opt}</span>
                      </div>

                      {isSubmitted && optIdx === q.correctIndex && (
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 ml-2" />
                      )}
                      {isSubmitted && isThisSelected && !isCorrect && (
                        <XCircle className="w-4 h-4 text-rose-500 shrink-0 ml-2" />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Explanation Dropdown (when submitted) */}
              {isSubmitted && (
                <div className={`ml-10 p-3.5 rounded-lg text-xs leading-relaxed ${
                  isCorrect ? 'bg-emerald-50 text-emerald-900 border border-emerald-200' : 'bg-rose-50 text-rose-900 border border-rose-200'
                }`}>
                  <div className="font-bold mb-1">
                    {isCorrect ? '✓ Correct Solution:' : '✗ Detailed Solution:'}
                  </div>
                  <p>{q.explanation}</p>
                  <div className="text-[11px] text-slate-500 mt-2 font-mono">
                    Source Notes: {q.sourceNotesSection}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Bottom Submit Action */}
      {!isSubmitted && (
        <div className="flex justify-end pt-4">
          <button
            onClick={() => setIsSubmitted(true)}
            disabled={Object.keys(selectedAnswers).length === 0}
            className="px-6 py-3 bg-slate-900 hover:bg-slate-800 disabled:opacity-50 text-white text-xs font-semibold rounded-xl shadow-md transition-colors"
          >
            Submit Quiz & View Score
          </button>
        </div>
      )}
    </div>
  );
};
