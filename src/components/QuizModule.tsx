import React, { useState, useEffect } from 'react';
import { DE_QUIZ_QUESTIONS, CHAPTER_QUIZ_INFO } from '../data/deQuizData';
import { UnitId } from '../types/digitalElectronics';
import {
  HelpCircle,
  CheckCircle2,
  XCircle,
  RotateCcw,
  Award,
  Zap,
  BookOpen,
  ArrowRight,
  GraduationCap,
  Sparkles,
  Layers,
  ChevronRight
} from 'lucide-react';

interface QuizModuleProps {
  initialUnitId?: UnitId;
  onOpenNotes?: (unitId: UnitId) => void;
}

const CHAPTER_KEYS: UnitId[] = ['unit-1', 'unit-2', 'unit-3', 'unit-4', 'unit-5'];

export const QuizModule: React.FC<QuizModuleProps> = ({ initialUnitId, onOpenNotes }) => {
  // Always strictly locked to a single chapter (no mixing of chapters)
  const [selectedUnit, setSelectedUnit] = useState<UnitId>(initialUnitId || 'unit-1');
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, number>>({});
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  // Sync when initialUnitId changes (e.g. when navigated directly from Notes or Dashboard)
  useEffect(() => {
    if (initialUnitId && CHAPTER_KEYS.includes(initialUnitId)) {
      setSelectedUnit(initialUnitId);
      setSelectedAnswers({});
      setIsSubmitted(false);
    }
  }, [initialUnitId]);

  // Filter questions STRICTLY for the chosen chapter
  const filteredQuestions = DE_QUIZ_QUESTIONS.filter(q => q.unitId === selectedUnit);
  const currentChapterInfo = CHAPTER_QUIZ_INFO[selectedUnit];
  const currentChapterIndex = CHAPTER_KEYS.indexOf(selectedUnit);

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

  const handleUnitChange = (u: UnitId) => {
    setSelectedUnit(u);
    setSelectedAnswers({});
    setIsSubmitted(false);
  };

  // Calculate score
  const totalQuestions = filteredQuestions.length;
  const answeredCount = filteredQuestions.filter(q => selectedAnswers[q.id] !== undefined).length;
  let correctCount = 0;
  if (isSubmitted) {
    filteredQuestions.forEach(q => {
      if (selectedAnswers[q.id] === q.correctIndex) {
        correctCount++;
      }
    });
  }
  const scorePercent = totalQuestions > 0 ? Math.round((correctCount / totalQuestions) * 100) : 0;

  // Move to next chapter quiz helper
  const handleNextChapter = () => {
    if (currentChapterIndex !== -1 && currentChapterIndex < CHAPTER_KEYS.length - 1) {
      handleUnitChange(CHAPTER_KEYS[currentChapterIndex + 1]);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-6 space-y-6 selection:bg-emerald-500 selection:text-white">
      {/* Chapter Selection Banner */}
      <div className="bg-slate-950 rounded-2xl border border-slate-800 p-6 sm:p-8 shadow-xl">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400 uppercase tracking-wider mb-2 font-mono">
              <HelpCircle className="w-4 h-4" />
              <span>Chapter-Specific Assessment Engine</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight font-sans">
              Chapter Assessment Quizzes (20 Questions Each)
            </h1>
            <p className="text-xs sm:text-sm text-slate-300 mt-2 max-w-2xl leading-relaxed">
              Every chapter features <strong>20 dedicated exam questions</strong> strictly focused on that particular chapter’s syllabus, derivations, problem-solving, and university PYQ papers.
            </p>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            {onOpenNotes && (
              <button
                onClick={() => onOpenNotes(selectedUnit)}
                className="px-3.5 py-2 bg-slate-900 hover:bg-slate-800 text-sky-300 hover:text-white rounded-xl text-xs font-semibold flex items-center gap-1.5 border border-slate-700 transition-colors cursor-pointer"
                title="Read Course Notes for this Chapter"
              >
                <BookOpen className="w-3.5 h-3.5 text-sky-400" />
                <span>Read Chapter {currentChapterIndex + 1} Notes</span>
              </button>
            )}
          </div>
        </div>

        {/* Chapter Selection Tabs (Strictly 5 Chapters, 20 Questions each) */}
        <div className="mt-6 pt-6 border-t border-slate-800/80">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 font-mono">
              Select Chapter to Test (20 Questions Strictly About That Chapter):
            </span>
            <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-800 font-bold">
              100 Total Questions Across 5 Chapters
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5">
            {CHAPTER_KEYS.map((u, idx) => {
              const info = CHAPTER_QUIZ_INFO[u];
              const isSelected = selectedUnit === u;
              return (
                <button
                  key={u}
                  onClick={() => handleUnitChange(u)}
                  className={`p-3 rounded-xl text-left border transition-all cursor-pointer flex flex-col justify-between ${
                    isSelected
                      ? 'bg-emerald-950/90 border-emerald-500 text-white shadow-lg ring-2 ring-emerald-500/40'
                      : 'bg-slate-900/90 border-slate-800 text-slate-400 hover:text-slate-200 hover:bg-slate-900'
                  }`}
                >
                  <div className="flex items-center justify-between w-full">
                    <span className="text-[10px] font-mono text-emerald-400 font-bold uppercase">
                      Chapter {idx + 1}
                    </span>
                    <span className="text-[10px] font-mono font-bold px-1.5 py-0.2 rounded bg-slate-950 text-slate-300 border border-slate-800">
                      20 Qs
                    </span>
                  </div>
                  <span className="text-xs font-bold line-clamp-2 mt-1 text-slate-200">
                    {info.title.split(': ')[1]}
                  </span>
                  <span className="text-[10px] text-slate-400 mt-2 block font-sans">
                    Strictly Unit {idx + 1}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Active Chapter Details Bar */}
      {currentChapterInfo && (
        <div className="bg-slate-900/90 rounded-xl border border-slate-800 p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-xs">
          <div>
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 rounded bg-emerald-950 border border-emerald-800 text-emerald-300 text-[10px] font-mono font-bold uppercase">
                Active Chapter Quiz
              </span>
              <h2 className="text-sm sm:text-base font-bold text-white font-sans">
                {currentChapterInfo.title}
              </h2>
            </div>
            <p className="text-xs text-slate-400 mt-1">{currentChapterInfo.subtitle}</p>
          </div>

          <div className="flex items-center gap-3 font-mono text-xs text-slate-300 shrink-0">
            <span className="bg-slate-950 px-3 py-1.5 rounded-lg border border-slate-800">
              Total: <strong className="text-emerald-400">{totalQuestions} Questions</strong>
            </span>
            <span className="bg-slate-950 px-3 py-1.5 rounded-lg border border-slate-800">
              Answered: <strong className={answeredCount === totalQuestions ? 'text-emerald-400' : 'text-amber-400'}>{answeredCount}/{totalQuestions}</strong>
            </span>
          </div>
        </div>
      )}

      {/* Score Summary Box (when submitted) */}
      {isSubmitted && (
        <div className="bg-white rounded-2xl border-2 border-emerald-500 p-6 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6 animate-in fade-in zoom-in-95 duration-200">
          <div className="flex items-center gap-4">
            <div className={`w-16 h-16 rounded-2xl flex items-center justify-center font-mono font-extrabold text-2xl shadow-inner ${
              scorePercent >= 75 ? 'bg-emerald-50 text-emerald-700 border-2 border-emerald-300' : 'bg-amber-50 text-amber-700 border-2 border-amber-300'
            }`}>
              {scorePercent}%
            </div>
            <div>
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-emerald-600" />
                <h3 className="text-base font-extrabold text-slate-900">
                  {currentChapterInfo ? currentChapterInfo.title : 'Assessment'} Results
                </h3>
              </div>
              <p className="text-sm font-semibold text-slate-800 mt-0.5">
                You scored <strong>{correctCount}</strong> out of <strong>{totalQuestions}</strong> questions correctly!
              </p>
              <p className="text-xs text-slate-500 mt-0.5">
                {scorePercent >= 80
                  ? 'Outstanding performance! You have thoroughly mastered this chapter for university midterms and finals.'
                  : 'Review the detailed step-by-step explanations and derivations below to solidify your concepts.'}
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2.5">
            <button
              onClick={handleReset}
              className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer border border-slate-200"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Retry Chapter {currentChapterIndex + 1}</span>
            </button>

            {currentChapterIndex < CHAPTER_KEYS.length - 1 && (
              <button
                onClick={handleNextChapter}
                className="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl text-xs font-bold flex items-center gap-1.5 transition-colors shadow-xs cursor-pointer"
              >
                <span>Proceed to Chapter {currentChapterIndex + 2} Quiz (20 Qs)</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>
      )}

      {/* Question Jump Ribbon (1 to 20) */}
      <div className="bg-slate-950 rounded-xl border border-slate-800 p-3.5 shadow-xs">
        <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 mb-2.5">
          <span className="font-semibold uppercase tracking-wider text-emerald-400">
            Chapter {currentChapterIndex + 1} Question Navigator (20 Questions Exclusively for this Chapter)
          </span>
          <span>Click any question to jump</span>
        </div>
        <div className="flex flex-wrap items-center gap-1.5">
          {filteredQuestions.map((q, idx) => {
            const isAnswered = selectedAnswers[q.id] !== undefined;
            const isCorrect = isSubmitted && selectedAnswers[q.id] === q.correctIndex;
            const isWrong = isSubmitted && isAnswered && !isCorrect;

            let badgeColor = 'bg-slate-900 text-slate-400 border-slate-800 hover:border-slate-700';
            if (isSubmitted) {
              if (isCorrect) badgeColor = 'bg-emerald-950 text-emerald-400 border-emerald-600 font-bold';
              else if (isWrong) badgeColor = 'bg-rose-950 text-rose-400 border-rose-600 font-bold';
              else badgeColor = 'bg-slate-900 text-slate-500 border-slate-800';
            } else if (isAnswered) {
              badgeColor = 'bg-emerald-600 text-white border-emerald-500 font-bold shadow-xs';
            }

            return (
              <button
                key={q.id}
                onClick={() => {
                  const el = document.getElementById(`question-card-${q.id}`);
                  if (el) {
                    el.scrollIntoView({ behavior: 'smooth', block: 'center' });
                  }
                }}
                className={`w-8 h-8 rounded-lg text-xs font-mono font-semibold flex items-center justify-center border transition-all cursor-pointer ${badgeColor}`}
                title={`Question ${idx + 1}: ${q.topic}`}
              >
                {idx + 1}
              </button>
            );
          })}
        </div>
      </div>

      {/* Questions Stack */}
      <div className="space-y-5">
        {filteredQuestions.map((q, index) => {
          const selectedOption = selectedAnswers[q.id];
          const isAnswered = selectedOption !== undefined;
          const isCorrect = isSubmitted && selectedOption === q.correctIndex;
          const isWrong = isSubmitted && isAnswered && !isCorrect;

          return (
            <div
              key={q.id}
              id={`question-card-${q.id}`}
              className={`rounded-2xl border p-5 sm:p-6 transition-all bg-slate-950 shadow-sm ${
                isSubmitted
                  ? isCorrect
                    ? 'border-emerald-600/80 bg-emerald-950/20'
                    : 'border-rose-600/80 bg-rose-950/20'
                  : isAnswered
                  ? 'border-slate-700'
                  : 'border-slate-800'
              }`}
            >
              {/* Question Header & Badges */}
              <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded-md bg-emerald-950 text-emerald-300 font-mono text-xs font-bold border border-emerald-800">
                    Chapter {currentChapterIndex + 1} · Q{index + 1} of {totalQuestions}
                  </span>
                  <span className="text-xs font-mono text-slate-300 font-medium">
                    {q.topic}
                  </span>
                </div>

                <div className="flex items-center gap-2 text-[11px] font-mono">
                  {q.isPyq && (
                    <span className="px-2 py-0.5 rounded bg-amber-950 text-amber-300 border border-amber-800 flex items-center gap-1 font-semibold">
                      <GraduationCap className="w-3 h-3" />
                      <span>JNTUH PYQ {q.pyqYear}</span>
                    </span>
                  )}
                  <span className={`px-2 py-0.5 rounded border font-semibold ${
                    q.difficulty === 'Easy'
                      ? 'bg-emerald-950/60 text-emerald-300 border-emerald-800'
                      : q.difficulty === 'Medium'
                      ? 'bg-sky-950/60 text-sky-300 border-sky-800'
                      : 'bg-purple-950/60 text-purple-300 border-purple-800'
                  }`}>
                    {q.difficulty}
                  </span>
                </div>
              </div>

              {/* Question Text */}
              <h3 className="text-sm sm:text-base font-bold text-white leading-relaxed mb-4 font-sans">
                {q.questionText}
              </h3>

              {/* Options */}
              <div className="space-y-2.5">
                {q.options.map((opt, optIndex) => {
                  const isThisSelected = selectedOption === optIndex;
                  const isThisCorrect = optIndex === q.correctIndex;

                  let optClass = 'bg-slate-900 border-slate-800 text-slate-200 hover:bg-slate-850 hover:border-slate-700';

                  if (isSubmitted) {
                    if (isThisCorrect) {
                      optClass = 'bg-emerald-950/80 border-emerald-500 text-white ring-1 ring-emerald-400 font-semibold';
                    } else if (isThisSelected && !isThisCorrect) {
                      optClass = 'bg-rose-950/80 border-rose-500 text-white ring-1 ring-rose-400';
                    } else {
                      optClass = 'bg-slate-900/60 border-slate-900 text-slate-500 opacity-60';
                    }
                  } else if (isThisSelected) {
                    optClass = 'bg-emerald-950/90 border-emerald-500 text-white ring-1 ring-emerald-400 shadow-xs font-semibold';
                  }

                  return (
                    <button
                      key={optIndex}
                      onClick={() => handleSelectOption(q.id, optIndex)}
                      disabled={isSubmitted}
                      className={`w-full text-left p-3.5 rounded-xl border text-xs sm:text-sm transition-all flex items-start gap-3 cursor-pointer ${optClass}`}
                    >
                      <span className={`w-6 h-6 rounded-lg font-mono font-bold text-xs flex items-center justify-center shrink-0 border ${
                        isThisSelected
                          ? 'bg-emerald-500 text-slate-950 border-emerald-400'
                          : 'bg-slate-800 text-slate-300 border-slate-700'
                      }`}>
                        {String.fromCharCode(65 + optIndex)}
                      </span>
                      <span className="flex-1 leading-normal pt-0.5">{opt}</span>
                    </button>
                  );
                })}
              </div>

              {/* Step-by-Step Explanation Banner (Displayed upon Submission) */}
              {isSubmitted && (
                <div className="mt-4 p-4 bg-slate-900/90 rounded-xl border border-slate-800 text-xs">
                  <div className="flex items-center gap-1.5 font-bold mb-1.5">
                    {isCorrect ? (
                      <>
                        <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                        <span className="text-emerald-400 font-mono uppercase tracking-wider">Correct Answer Verified</span>
                      </>
                    ) : (
                      <>
                        <XCircle className="w-4 h-4 text-rose-400" />
                        <span className="text-rose-400 font-mono uppercase tracking-wider">
                          Incorrect · Correct Answer: Option {String.fromCharCode(65 + q.correctIndex)} ({q.options[q.correctIndex]})
                        </span>
                      </>
                    )}
                  </div>
                  <p className="mt-1 text-slate-300 leading-relaxed font-sans">
                    <strong className="text-white">Explanation: </strong>
                    {q.explanation}
                  </p>
                  <div className="mt-2 text-[11px] font-mono text-slate-400">
                    Syllabus Section Reference: {q.sourceNotesSection}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Floating / Sticky Bottom Action Bar */}
      <div className="sticky bottom-4 z-20 bg-slate-950/95 backdrop-blur-md rounded-2xl border border-slate-800 p-4 shadow-2xl flex items-center justify-between gap-4">
        <div className="text-xs">
          <span className="text-slate-300 block font-mono">
            {answeredCount} of {totalQuestions} questions answered
          </span>
          <div className="w-36 sm:w-48 bg-slate-800 h-1.5 rounded-full mt-1 overflow-hidden">
            <div
              className="bg-emerald-500 h-full rounded-full transition-all duration-300"
              style={{ width: `${totalQuestions > 0 ? (answeredCount / totalQuestions) * 100 : 0}%` }}
            />
          </div>
        </div>

        <div className="flex items-center gap-2">
          {!isSubmitted ? (
            <button
              onClick={() => {
                setIsSubmitted(true);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              disabled={answeredCount === 0}
              className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-500 disabled:opacity-50 disabled:cursor-not-allowed text-white rounded-xl text-xs font-bold transition-all shadow-md cursor-pointer flex items-center gap-1.5"
            >
              <CheckCircle2 className="w-4 h-4" />
              <span>Submit Chapter {currentChapterIndex + 1} Quiz ({answeredCount}/{totalQuestions})</span>
            </button>
          ) : (
            <div className="flex items-center gap-2">
              <button
                onClick={handleReset}
                className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-xl text-xs font-bold transition-colors cursor-pointer flex items-center gap-1.5"
              >
                <RotateCcw className="w-4 h-4" />
                <span>Retake Quiz</span>
              </button>

              {currentChapterIndex < CHAPTER_KEYS.length - 1 && (
                <button
                  onClick={handleNextChapter}
                  className="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl text-xs font-bold transition-colors cursor-pointer flex items-center gap-1.5"
                >
                  <span>Chapter {currentChapterIndex + 2} Quiz</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
