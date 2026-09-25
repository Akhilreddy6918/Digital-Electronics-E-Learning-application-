import React, { useState, useEffect, useRef } from 'react';
import { Course, Lesson, QuizQuestion, Flashcard, DiscussionPost } from '../types/learning';
import {
  ArrowLeft,
  Play,
  Pause,
  RotateCcw,
  CheckCircle2,
  Bookmark,
  Award,
  FlaskConical,
  FileText,
  HelpCircle,
  Layers,
  MessageSquare,
  Edit3,
  ChevronDown,
  ChevronRight,
  Maximize2,
  Volume2,
  VolumeX,
  FastForward,
  Rewind,
  ThumbsUp,
  Download,
  Share2
} from 'lucide-react';
import { NeuralNetSimulation } from './simulations/NeuralNetSimulation';
import { PlantVascularSimulation } from './simulations/PlantVascularSimulation';
import { LoadBalancerSimulation } from './simulations/LoadBalancerSimulation';
import { SortingVisualizer } from './simulations/SortingVisualizer';
import { INITIAL_DISCUSSIONS } from '../data/coursesData';

interface CoursePlayerProps {
  course: Course;
  completedLessonIds: string[];
  bookmarkedLessonIds: string[];
  notes: Record<string, string>;
  onBackToCatalog: () => void;
  onToggleCompleteLesson: (lessonId: string) => void;
  onToggleBookmark: (lessonId: string) => void;
  onSaveNotes: (courseId: string, content: string) => void;
  onOpenCertificate: (course: Course) => void;
  onAwardXp: (amount: number) => void;
}

export const CoursePlayer: React.FC<CoursePlayerProps> = ({
  course,
  completedLessonIds,
  bookmarkedLessonIds,
  notes,
  onBackToCatalog,
  onToggleCompleteLesson,
  onToggleBookmark,
  onSaveNotes,
  onOpenCertificate,
  onAwardXp
}) => {
  // Find first lesson or active lesson
  const allLessons = course.modules.flatMap(m => m.lessons);
  const [activeLessonId, setActiveLessonId] = useState<string>(allLessons[0]?.id || '');
  const activeLesson = allLessons.find(l => l.id === activeLessonId) || allLessons[0];

  // Active Tab: 'lab' | 'notes' | 'quiz' | 'flashcards' | 'discussions' | 'scratchpad'
  const [activeTab, setActiveTab] = useState<'lab' | 'notes' | 'quiz' | 'flashcards' | 'discussions' | 'scratchpad'>(
    activeLesson.type === 'lab' ? 'lab' : 'notes'
  );

  // Simulated Video Player States
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [videoProgress, setVideoProgress] = useState<number>(18); // percent (0-100)
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const [playbackSpeed, setPlaybackSpeed] = useState<number>(1.0);
  const [showCaptions, setShowCaptions] = useState<boolean>(true);
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(true);

  // Quiz state
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, number>>({});
  const [submittedQuiz, setSubmittedQuiz] = useState<boolean>(false);

  // Flashcards state
  const [currentCardIndex, setCurrentCardIndex] = useState<number>(0);
  const [isCardFlipped, setIsCardFlipped] = useState<boolean>(false);

  // Discussions state
  const [discussions, setDiscussions] = useState<DiscussionPost[]>(INITIAL_DISCUSSIONS);
  const [newQuestionText, setNewQuestionText] = useState<string>('');

  // Scratchpad state
  const [myNotesText, setMyNotesText] = useState<string>(notes[course.id] || '');

  // Progress calculations
  const completedInCourse = allLessons.filter(l => completedLessonIds.includes(l.id)).length;
  const progressPercent = Math.round((completedInCourse / allLessons.length) * 100);
  const isCurrentLessonCompleted = completedLessonIds.includes(activeLesson.id);
  const isCurrentBookmarked = bookmarkedLessonIds.includes(activeLesson.id);

  // Simulated video playback timer
  useEffect(() => {
    let interval: any;
    if (isPlaying) {
      interval = setInterval(() => {
        setVideoProgress(prev => {
          if (prev >= 100) {
            setIsPlaying(false);
            if (!isCurrentLessonCompleted) {
              onToggleCompleteLesson(activeLesson.id);
              onAwardXp(50);
            }
            return 100;
          }
          return prev + 0.5 * playbackSpeed;
        });
      }, 300);
    }
    return () => clearInterval(interval);
  }, [isPlaying, playbackSpeed, activeLesson.id, isCurrentLessonCompleted]);

  // Reset tab on lesson change if appropriate
  useEffect(() => {
    if (activeLesson.type === 'lab') {
      setActiveTab('lab');
    }
    setVideoProgress(completedLessonIds.includes(activeLesson.id) ? 100 : 0);
    setIsPlaying(false);
    setSelectedAnswers({});
    setSubmittedQuiz(false);
    setCurrentCardIndex(0);
    setIsCardFlipped(false);
  }, [activeLessonId]);

  // Handle quiz submission
  const handleQuizSubmit = () => {
    setSubmittedQuiz(true);
    const questions = activeLesson.quizQuestions || [];
    let correct = 0;
    questions.forEach(q => {
      if (selectedAnswers[q.id] === q.correctIndex) {
        correct++;
      }
    });
    if (correct > 0) {
      onAwardXp(correct * 25);
    }
  };

  // Handle posting discussion question
  const handlePostQuestion = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newQuestionText.trim()) return;

    const newPost: DiscussionPost = {
      id: `disc-${Date.now()}`,
      author: 'Alex Mercer (You)',
      avatarText: 'AM',
      role: 'Student',
      timeAgo: 'Just now',
      content: newQuestionText.trim(),
      upvotes: 1,
      repliesCount: 0
    };

    setDiscussions([newPost, ...discussions]);
    setNewQuestionText('');
    onAwardXp(15);
  };

  const handleUpvote = (postId: string) => {
    setDiscussions(prev =>
      prev.map(p => (p.id === postId ? { ...p, upvotes: p.upvotes + 1 } : p))
    );
  };

  // Handle notes save
  const handleNotesChange = (text: string) => {
    setMyNotesText(text);
    onSaveNotes(course.id, text);
  };

  const downloadNotesFile = () => {
    const element = document.createElement('a');
    const file = new Blob([myNotesText || `# Notes: ${course.title}\n\nNo notes recorded yet.`], {
      type: 'text/plain'
    });
    element.href = URL.createObjectURL(file);
    element.download = `${course.slug}-notes.txt`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  // Active simulation component resolver
  const renderSimulation = () => {
    if (activeLesson.simulationType === 'neural-net' || course.id === 'course-ai-neural-nets') {
      return <NeuralNetSimulation />;
    }
    if (activeLesson.simulationType === 'plant-vascular' || course.id === 'course-biology-vascular') {
      return <PlantVascularSimulation />;
    }
    if (activeLesson.simulationType === 'load-balancer' || course.id === 'course-cloud-distributed') {
      return <LoadBalancerSimulation />;
    }
    return <SortingVisualizer />;
  };

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 flex flex-col">
      {/* Classroom Top Bar */}
      <header className="h-14 bg-slate-950 border-b border-slate-800 px-4 flex items-center justify-between gap-4 sticky top-0 z-30">
        <div className="flex items-center gap-4">
          <button
            onClick={onBackToCatalog}
            className="flex items-center gap-1.5 text-xs font-semibold text-slate-300 hover:text-white px-2.5 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Catalog</span>
          </button>

          <div className="hidden sm:block h-4 w-[1px] bg-slate-800" />

          <div className="truncate max-w-md">
            <span className="text-xs text-slate-400 block truncate">{course.title}</span>
            <span className="text-xs font-semibold text-slate-100 block truncate">{activeLesson.title}</span>
          </div>
        </div>

        {/* Center/Right Actions */}
        <div className="flex items-center gap-3">
          {/* Progress pill-free metadata */}
          <div className="hidden md:flex items-center gap-2 text-xs">
            <span className="text-slate-400">Progress:</span>
            <span className="font-mono font-bold text-sky-400 tabular-nums">{progressPercent}%</span>
            <div className="w-20 bg-slate-800 rounded-full h-1.5 overflow-hidden">
              <div
                className="bg-sky-500 h-full rounded-full transition-all duration-300"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>

          {/* Bookmark Button */}
          <button
            onClick={() => onToggleBookmark(activeLesson.id)}
            className={`p-2 rounded-lg text-xs transition-colors ${
              isCurrentBookmarked
                ? 'bg-amber-950/80 text-amber-400 border border-amber-800/60'
                : 'bg-slate-900 text-slate-400 hover:text-slate-200'
            }`}
            title="Bookmark this lesson"
          >
            <Bookmark className={`w-3.5 h-3.5 ${isCurrentBookmarked ? 'fill-amber-400' : ''}`} />
          </button>

          {/* Certificate Button */}
          <button
            onClick={() => onOpenCertificate(course)}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg bg-sky-950 text-sky-300 border border-sky-800/70 hover:bg-sky-900 transition-colors"
          >
            <Award className="w-3.5 h-3.5 text-sky-400" />
            <span>Certificate</span>
          </button>
        </div>
      </header>

      {/* Classroom Main Layout */}
      <div className="flex-1 flex flex-col lg:flex-row overflow-hidden">
        {/* Left Column: Player & Active Content Tabs */}
        <div className="flex-1 flex flex-col overflow-y-auto">
          {/* Simulated Video Player Section */}
          <div className="relative w-full aspect-video max-h-[500px] bg-black flex flex-col justify-between p-4 group select-none">
            {/* Video Canvas Simulation Background */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-80">
              <img
                src={course.image}
                alt="Lecture visual presentation backdrop"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover filter brightness-50"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/30" />
            </div>

            {/* Video Top Watermark & Topic */}
            <div className="relative z-10 flex items-center justify-between text-xs text-white/90">
              <span className="font-semibold tracking-wide drop-shadow-md">{activeLesson.title}</span>
              <span className="font-mono text-slate-300">{course.instructor.name}</span>
            </div>

            {/* Center Play Button Overlay */}
            <div className="relative z-10 flex items-center justify-center my-auto">
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="w-16 h-16 rounded-full bg-sky-600/90 hover:bg-sky-500 text-white flex items-center justify-center shadow-xl hover:scale-105 transition-all"
              >
                {isPlaying ? <Pause className="w-7 h-7 fill-current" /> : <Play className="w-7 h-7 fill-current ml-1" />}
              </button>
            </div>

            {/* Live Subtitle Overlay */}
            {showCaptions && (
              <div className="relative z-10 text-center px-4 mb-2">
                <span className="bg-black/85 text-slate-100 text-xs sm:text-sm px-3 py-1 rounded inline-block shadow">
                  {activeLesson.summary}
                </span>
              </div>
            )}

            {/* Video Control Bar */}
            <div className="relative z-10 bg-slate-950/90 backdrop-blur-xs p-3 rounded-lg border border-slate-800 flex flex-col gap-2">
              {/* Scrub Timeline */}
              <div
                onClick={e => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  const pos = (e.clientX - rect.left) / rect.width;
                  setVideoProgress(Math.max(0, Math.min(100, pos * 100)));
                }}
                className="w-full bg-slate-800 h-2 rounded-full cursor-pointer relative overflow-hidden"
              >
                <div
                  className="bg-sky-500 h-full rounded-full transition-all"
                  style={{ width: `${videoProgress}%` }}
                />
              </div>

              {/* Controls Row */}
              <div className="flex items-center justify-between text-xs text-slate-300">
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="hover:text-white transition-colors"
                  >
                    {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 fill-current" />}
                  </button>

                  <button
                    onClick={() => setVideoProgress(prev => Math.max(0, prev - 10))}
                    className="hover:text-white transition-colors"
                    title="Rewind 10s"
                  >
                    <Rewind className="w-4 h-4" />
                  </button>

                  <button
                    onClick={() => setVideoProgress(prev => Math.min(100, prev + 10))}
                    className="hover:text-white transition-colors"
                    title="Forward 10s"
                  >
                    <FastForward className="w-4 h-4" />
                  </button>

                  <span className="font-mono text-[11px] tabular-nums text-slate-400">
                    {Math.floor((videoProgress / 100) * activeLesson.durationMinutes)}:00 / {activeLesson.videoDurationText}
                  </span>

                  <button
                    onClick={() => setIsMuted(!isMuted)}
                    className="hover:text-white transition-colors ml-2"
                  >
                    {isMuted ? <VolumeX className="w-4 h-4 text-rose-400" /> : <Volume2 className="w-4 h-4" />}
                  </button>
                </div>

                <div className="flex items-center gap-3">
                  {/* Speed Switcher */}
                  <div className="flex items-center gap-1 bg-slate-900 px-1.5 py-0.5 rounded border border-slate-800 text-[11px] font-mono">
                    {[1.0, 1.25, 1.5].map(spd => (
                      <button
                        key={spd}
                        onClick={() => setPlaybackSpeed(spd)}
                        className={`px-1 rounded ${playbackSpeed === spd ? 'text-sky-400 font-bold' : 'text-slate-400'}`}
                      >
                        {spd}x
                      </button>
                    ))}
                  </div>

                  {/* Subtitles Toggle */}
                  <button
                    onClick={() => setShowCaptions(!showCaptions)}
                    className={`text-[10px] font-mono px-1.5 py-0.5 rounded border ${
                      showCaptions ? 'bg-sky-950 text-sky-400 border-sky-800' : 'bg-slate-900 text-slate-500 border-slate-800'
                    }`}
                  >
                    CC
                  </button>

                  {/* Complete Button */}
                  <button
                    onClick={() => {
                      onToggleCompleteLesson(activeLesson.id);
                      if (!isCurrentLessonCompleted) onAwardXp(50);
                    }}
                    className={`flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-semibold transition-colors ${
                      isCurrentLessonCompleted
                        ? 'bg-emerald-950 text-emerald-300 border border-emerald-800'
                        : 'bg-sky-600 hover:bg-sky-500 text-white'
                    }`}
                  >
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>{isCurrentLessonCompleted ? 'Completed' : 'Mark Complete (+50 XP)'}</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Classroom Tabs */}
          <div className="border-b border-slate-800 bg-slate-950 px-4 flex items-center gap-2 overflow-x-auto">
            {[
              { id: 'notes', label: 'Lecture Syllabus', icon: FileText },
              { id: 'lab', label: 'Interactive Sandbox', icon: FlaskConical },
              { id: 'quiz', label: 'Knowledge Check', icon: HelpCircle },
              { id: 'flashcards', label: 'Flashcards', icon: Layers },
              { id: 'discussions', label: 'Q&A Forum', icon: MessageSquare },
              { id: 'scratchpad', label: 'Personal Notes', icon: Edit3 }
            ].map(tab => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`flex items-center gap-2 py-3 px-3.5 text-xs font-semibold border-b-2 transition-colors whitespace-nowrap ${
                    activeTab === tab.id
                      ? 'border-sky-500 text-sky-400 bg-slate-900/60'
                      : 'border-transparent text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* Tab Content Display */}
          <div className="p-6 flex-1 bg-slate-900">
            {/* Tab 1: Lecture Syllabus Notes */}
            {activeTab === 'notes' && (
              <div className="max-w-3xl space-y-6 text-slate-200">
                <div className="border-b border-slate-800 pb-4">
                  <h3 className="text-xl font-bold text-white font-sans">{activeLesson.title}</h3>
                  <p className="text-xs text-slate-400 mt-1">Instructor: {course.instructor.name} · {course.instructor.affiliation}</p>
                </div>

                <div className="prose prose-invert prose-slate text-sm leading-relaxed max-w-none">
                  <div className="p-4 bg-slate-950 rounded-lg border border-slate-800 text-xs text-slate-300 font-mono whitespace-pre-wrap leading-relaxed">
                    {activeLesson.contentMarkdown}
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-sky-950/30 border border-sky-900/50 flex items-start gap-3">
                  <FlaskConical className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-semibold text-sky-200">Hands-On Laboratory Connection</h4>
                    <p className="text-xs text-slate-300 mt-1">
                      Ready to test these equations? Switch to the <strong>Interactive Sandbox</strong> tab to adjust parameters and verify mathematical bounds in real time.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Tab 2: Interactive Sandbox */}
            {activeTab === 'lab' && (
              <div className="w-full">
                <div className="mb-4 flex items-center justify-between">
                  <div>
                    <h3 className="text-base font-bold text-white">Live Experimental Laboratory</h3>
                    <p className="text-xs text-slate-400">Directly manipulate physical and algorithmic parameters.</p>
                  </div>
                </div>
                {renderSimulation()}
              </div>
            )}

            {/* Tab 3: Knowledge Check (Quiz) */}
            {activeTab === 'quiz' && (
              <div className="max-w-2xl space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-white">Concept Verification Quiz</h3>
                  <p className="text-xs text-slate-400 mt-1">Answer questions to solidify mathematical foundations and earn XP.</p>
                </div>

                {(activeLesson.quizQuestions && activeLesson.quizQuestions.length > 0) ? (
                  <div className="space-y-6">
                    {activeLesson.quizQuestions.map((q, qIdx) => {
                      const selected = selectedAnswers[q.id];
                      const isCorrect = selected === q.correctIndex;

                      return (
                        <div key={q.id} className="p-5 rounded-xl bg-slate-950 border border-slate-800 space-y-3">
                          <div className="flex items-start gap-2.5">
                            <span className="w-5 h-5 rounded-full bg-slate-800 text-[11px] font-mono font-bold flex items-center justify-center text-slate-300 shrink-0">
                              {qIdx + 1}
                            </span>
                            <span className="text-sm font-medium text-slate-100">{q.question}</span>
                          </div>

                          <div className="space-y-2 pt-2">
                            {q.options.map((opt, optIdx) => {
                              const isThisSelected = selected === optIdx;
                              let optionClass = 'bg-slate-900 border-slate-800 text-slate-300 hover:border-slate-700';

                              if (submittedQuiz) {
                                if (optIdx === q.correctIndex) {
                                  optionClass = 'bg-emerald-950/80 border-emerald-600 text-emerald-200';
                                } else if (isThisSelected && !isCorrect) {
                                  optionClass = 'bg-rose-950/80 border-rose-600 text-rose-200';
                                }
                              } else if (isThisSelected) {
                                optionClass = 'bg-sky-950 border-sky-600 text-sky-200';
                              }

                              return (
                                <button
                                  key={optIdx}
                                  disabled={submittedQuiz}
                                  onClick={() => setSelectedAnswers(prev => ({ ...prev, [q.id]: optIdx }))}
                                  className={`w-full p-3 rounded-lg border text-left text-xs transition-colors flex items-center justify-between ${optionClass}`}
                                >
                                  <span>{opt}</span>
                                  {submittedQuiz && optIdx === q.correctIndex && (
                                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 ml-2" />
                                  )}
                                </button>
                              );
                            })}
                          </div>

                          {/* Explanation Box */}
                          {submittedQuiz && (
                            <div className={`p-3 rounded-lg text-xs mt-3 ${
                              isCorrect ? 'bg-emerald-950/40 border border-emerald-800/60 text-emerald-300' : 'bg-rose-950/40 border border-rose-800/60 text-rose-300'
                            }`}>
                              <strong>{isCorrect ? '✓ Correct Rationale: ' : '✗ Explanation: '}</strong>
                              {q.explanation}
                            </div>
                          )}
                        </div>
                      );
                    })}

                    <div className="flex items-center gap-3 pt-2">
                      {!submittedQuiz ? (
                        <button
                          onClick={handleQuizSubmit}
                          disabled={Object.keys(selectedAnswers).length === 0}
                          className="px-5 py-2.5 bg-sky-600 hover:bg-sky-500 disabled:opacity-50 text-white text-xs font-semibold rounded-lg transition-colors"
                        >
                          Submit Knowledge Check
                        </button>
                      ) : (
                        <button
                          onClick={() => {
                            setSubmittedQuiz(false);
                            setSelectedAnswers({});
                          }}
                          className="px-5 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold rounded-lg transition-colors"
                        >
                          Retry Questions
                        </button>
                      )}
                    </div>
                  </div>
                ) : (
                  <div className="p-8 text-center bg-slate-950 rounded-xl border border-slate-800">
                    <p className="text-xs text-slate-400">Complete the video and laboratory exercises to proceed to the module review.</p>
                  </div>
                )}
              </div>
            )}

            {/* Tab 4: Flashcards */}
            {activeTab === 'flashcards' && (
              <div className="max-w-xl mx-auto space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-white">Spaced Repetition Deck</h3>
                    <p className="text-xs text-slate-400">Click card to reveal definition and derivation hints.</p>
                  </div>
                  <span className="text-xs font-mono text-slate-400">
                    Card {currentCardIndex + 1} of {(activeLesson.flashcards || []).length || 1}
                  </span>
                </div>

                {activeLesson.flashcards && activeLesson.flashcards.length > 0 ? (
                  <div className="space-y-4">
                    {/* Flippable Card Container */}
                    <div
                      onClick={() => setIsCardFlipped(!isCardFlipped)}
                      className="min-h-[220px] p-8 rounded-2xl bg-slate-950 border border-slate-800 cursor-pointer hover:border-sky-500/50 transition-all flex flex-col justify-between shadow-lg relative group"
                    >
                      <div className="text-[11px] font-mono text-sky-400 uppercase tracking-wider">
                        {isCardFlipped ? 'Definition & Key Insight' : 'Core Theoretical Concept'}
                      </div>

                      <div className="text-base sm:text-lg font-medium text-slate-100 text-center py-4">
                        {isCardFlipped
                          ? activeLesson.flashcards[currentCardIndex].back
                          : activeLesson.flashcards[currentCardIndex].front}
                      </div>

                      {activeLesson.flashcards[currentCardIndex].hint && !isCardFlipped && (
                        <div className="text-center text-xs text-slate-500 italic">
                          Hint: {activeLesson.flashcards[currentCardIndex].hint}
                        </div>
                      )}

                      <div className="text-center text-[10px] text-slate-500 mt-2">
                        (Click anywhere to flip)
                      </div>
                    </div>

                    {/* Flashcard Actions */}
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => {
                          setIsCardFlipped(false);
                          setCurrentCardIndex(prev => (prev > 0 ? prev - 1 : activeLesson.flashcards!.length - 1));
                        }}
                        className="flex-1 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-lg text-xs font-semibold transition-colors"
                      >
                        Previous Card
                      </button>

                      <button
                        onClick={() => {
                          onAwardXp(10);
                          setIsCardFlipped(false);
                          setCurrentCardIndex(prev => (prev < activeLesson.flashcards!.length - 1 ? prev + 1 : 0));
                        }}
                        className="flex-1 py-2 bg-emerald-950 hover:bg-emerald-900 text-emerald-300 border border-emerald-800/60 rounded-lg text-xs font-semibold transition-colors"
                      >
                        Mastered (+10 XP)
                      </button>

                      <button
                        onClick={() => {
                          setIsCardFlipped(false);
                          setCurrentCardIndex(prev => (prev < activeLesson.flashcards!.length - 1 ? prev + 1 : 0));
                        }}
                        className="flex-1 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-lg text-xs font-semibold transition-colors"
                      >
                        Next Card
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="p-8 text-center bg-slate-950 rounded-xl border border-slate-800 text-xs text-slate-400">
                    Flashcard deck is being generated for this advanced unit.
                  </div>
                )}
              </div>
            )}

            {/* Tab 5: Discussions Q&A */}
            {activeTab === 'discussions' && (
              <div className="max-w-2xl space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-white">Student & Faculty Discussion</h3>
                  <p className="text-xs text-slate-400">Ask questions, share test benchmarks, or clarify derivations.</p>
                </div>

                {/* Question Form */}
                <form onSubmit={handlePostQuestion} className="space-y-3 p-4 rounded-xl bg-slate-950 border border-slate-800">
                  <textarea
                    rows={3}
                    placeholder="Ask a question about this lesson or sandbox parameters..."
                    value={newQuestionText}
                    onChange={e => setNewQuestionText(e.target.value)}
                    className="w-full bg-slate-900 border border-slate-800 rounded-lg p-3 text-xs text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-sky-500"
                  />
                  <div className="flex justify-end">
                    <button
                      type="submit"
                      disabled={!newQuestionText.trim()}
                      className="px-4 py-2 bg-sky-600 hover:bg-sky-500 disabled:opacity-50 text-white text-xs font-semibold rounded-lg transition-colors"
                    >
                      Post Question (+15 XP)
                    </button>
                  </div>
                </form>

                {/* Posts List */}
                <div className="space-y-4">
                  {discussions.map(post => (
                    <div key={post.id} className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2.5">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 rounded-full bg-slate-800 flex items-center justify-center text-[10px] font-bold text-sky-400 font-mono">
                            {post.avatarText}
                          </div>
                          <span className="text-xs font-semibold text-slate-200">{post.author}</span>
                          <span className="text-[10px] text-slate-400">({post.role})</span>
                        </div>
                        <span className="text-[11px] text-slate-500">{post.timeAgo}</span>
                      </div>

                      <p className="text-xs text-slate-300 leading-relaxed">{post.content}</p>

                      <div className="flex items-center gap-3 pt-2 border-t border-slate-900">
                        <button
                          onClick={() => handleUpvote(post.id)}
                          className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-sky-400 transition-colors"
                        >
                          <ThumbsUp className="w-3.5 h-3.5" />
                          <span className="font-mono tabular-nums">{post.upvotes}</span>
                        </button>
                        <span className="text-xs text-slate-500">{post.repliesCount} Replies</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Tab 6: Scratchpad (My Notes) */}
            {activeTab === 'scratchpad' && (
              <div className="max-w-3xl space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-white">Course Notebook</h3>
                    <p className="text-xs text-slate-400">Auto-saved to your local session storage.</p>
                  </div>
                  <button
                    onClick={downloadNotesFile}
                    className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-xs font-medium text-slate-200 rounded-lg transition-colors"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Export Notes (.txt)</span>
                  </button>
                </div>

                <textarea
                  rows={14}
                  value={myNotesText}
                  onChange={e => handleNotesChange(e.target.value)}
                  placeholder={`# Notes on ${course.title}\n\n- Key equation: ...\n- Laboratory observation: ...\n- Questions for instructor: ...`}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl p-4 text-xs font-mono text-slate-200 leading-relaxed focus:outline-none focus:ring-1 focus:ring-sky-500 shadow-inner"
                />
              </div>
            )}
          </div>
        </div>

        {/* Right Drawer: Curriculum Sidebar */}
        <div className="w-full lg:w-80 bg-slate-950 border-t lg:border-t-0 lg:border-l border-slate-800 flex flex-col shrink-0">
          <div className="p-4 border-b border-slate-800 flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-300">Course Syllabus</span>
            <span className="text-xs font-mono text-slate-400">
              {completedInCourse} / {allLessons.length} Done
            </span>
          </div>

          <div className="flex-1 overflow-y-auto divide-y divide-slate-900">
            {course.modules.map(module => (
              <div key={module.id} className="p-3">
                <h4 className="text-xs font-semibold text-slate-300 mb-2 leading-tight">
                  {module.title}
                </h4>

                <div className="space-y-1">
                  {module.lessons.map(lesson => {
                    const isActive = lesson.id === activeLesson.id;
                    const isDone = completedLessonIds.includes(lesson.id);

                    return (
                      <button
                        key={lesson.id}
                        onClick={() => setActiveLessonId(lesson.id)}
                        className={`w-full p-2.5 rounded-lg text-left text-xs transition-colors flex items-start gap-2.5 ${
                          isActive
                            ? 'bg-sky-950/70 border border-sky-800 text-white'
                            : 'hover:bg-slate-900 text-slate-400 hover:text-slate-200'
                        }`}
                      >
                        <span className="mt-0.5 shrink-0">
                          {isDone ? (
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                          ) : (
                            <span className="w-3.5 h-3.5 rounded-full border border-slate-600 block" />
                          )}
                        </span>

                        <div className="flex-1 truncate">
                          <span className={`block truncate ${isActive ? 'font-semibold text-slate-100' : ''}`}>
                            {lesson.title}
                          </span>
                          <div className="flex items-center gap-2 text-[10px] text-slate-500 mt-0.5">
                            <span>{lesson.durationMinutes} min</span>
                            {lesson.type === 'lab' && (
                              <span className="text-sky-400 font-medium">· Interactive Lab</span>
                            )}
                          </div>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
