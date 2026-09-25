import React, { useState } from 'react';
import {
  FileText,
  Video,
  HelpCircle,
  Zap,
  GraduationCap,
  BookOpen,
  ArrowRight,
  Search,
  CheckCircle2,
  Clock,
  Play,
  Flame,
  Award,
  Sparkles,
  Cpu,
  Layers,
  FlaskConical,
  Activity,
  Terminal,
  ExternalLink
} from 'lucide-react';
import { UNIT_OVERVIEWS } from '../data/deNotesData';
import { ALL_228_VIDEOS } from '../data/deVideosData';
import { CIRCUITS_DATA } from '../data/deCircuitsData';
import { LogicGateSearchCard, isGateSearchQuery } from './LogicGateSearchModal';

interface DashboardProps {
  onNavigate: (destination: 'notes' | 'videos' | 'quizzes' | 'simulator' | 'pyq' | 'books') => void;
  onOpenCircuit: (circuitId: string) => void;
  onWatchVideo: (seqNo: number) => void;
  onSearchGlobal: (query: string) => void;
}

export const Dashboard: React.FC<DashboardProps> = ({
  onNavigate,
  onOpenCircuit,
  onWatchVideo,
  onSearchGlobal
}) => {
  const [localSearch, setLocalSearch] = useState('');

  // Interactive Mini-Demo in the Hero/Spotlight
  const [demoInputA, setDemoInputA] = useState<number>(1);
  const [demoInputB, setDemoInputB] = useState<number>(0);
  const [demoGate, setDemoGate] = useState<'AND' | 'OR' | 'NAND' | 'NOR' | 'XOR'>('AND');

  const computeDemoOutput = (gate: string, a: number, b: number): number => {
    switch (gate) {
      case 'AND': return a & b;
      case 'OR': return a | b;
      case 'NAND': return (a & b) ? 0 : 1;
      case 'NOR': return (a | b) ? 0 : 1;
      case 'XOR': return a ^ b;
      default: return 0;
    }
  };

  const demoOutput = computeDemoOutput(demoGate, demoInputA, demoInputB);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (localSearch.trim()) {
      onSearchGlobal(localSearch.trim());
    } else {
      onNavigate('notes');
    }
  };

  const quickSearchPills = [
    'Karnaugh Map',
    'De Morgan Theorems',
    'JK Flip-Flop',
    'Full Adder',
    'Multiplexer 4:1',
    'Shift Registers',
    'Universal Gates'
  ];

  const stats = [
    { label: 'Syllabus Units', value: '5 Units', desc: 'JNTUH R18 / R22 Aligned' },
    { label: 'Searchable Topics', value: '28 Notes', desc: 'In-Depth Page View & Formulas' },
    { label: 'Video Catalog', value: '228 Lectures', desc: 'Step-by-Step Problem Solving' },
    { label: 'Virtual Breadboard', value: '12+ Circuits', desc: 'Real-Time Logic Gate Testing' },
    { label: 'University PYQs', value: '2020–2024', desc: '5-Year Past Examination Papers' }
  ];

  const modules = [
    {
      id: 'notes',
      title: 'PDF Notes & Reader',
      subtitle: '5 Units · Instant Search Option',
      description: 'Comprehensive academic lecture notes organized across Units I to V with instant in-document keyword search, highlighted formulas, and printable pages.',
      icon: FileText,
      badgeText: 'Searchable PDF',
      actionText: 'Open PDF Notes',
      color: 'bg-sky-600',
      textColor: 'text-sky-600',
      borderColor: 'border-sky-200 hover:border-sky-500'
    },
    {
      id: 'simulator',
      title: 'Circuit Simulator',
      subtitle: 'Real-Time Logic Gates & Flip-Flops',
      description: 'Interactive virtual breadboard to toggle inputs (0/1), test gates (AND, OR, NAND, NOR, XOR), Full Adders, MUX, and Flip-Flops with glowing LEDs.',
      icon: Zap,
      badgeText: 'Interactive Canvas',
      actionText: 'Launch Simulator',
      color: 'bg-amber-600',
      textColor: 'text-amber-600',
      borderColor: 'border-amber-200 hover:border-amber-500'
    },
    {
      id: 'videos',
      title: 'YouTube Video Library',
      subtitle: '228 Curated Syllabus Lectures',
      description: 'Complete 228-video catalog mapped unit-by-unit with exact YouTube URLs, concept explanations, and problem-solving walkthroughs.',
      icon: Video,
      badgeText: '228 Videos',
      actionText: 'Browse Video Lectures',
      color: 'bg-rose-600',
      textColor: 'text-rose-600',
      borderColor: 'border-rose-200 hover:border-rose-500'
    },
    {
      id: 'quizzes',
      title: 'Self-Assessment Quizzes',
      subtitle: 'Automated Scoring & Explanations',
      description: 'Unit-wise and topic-wise multiple choice questions with instant score calculations, solution rationales, and error breakdowns.',
      icon: HelpCircle,
      badgeText: 'Instant Score',
      actionText: 'Attempt Topic Quiz',
      color: 'bg-emerald-600',
      textColor: 'text-emerald-600',
      borderColor: 'border-emerald-200 hover:border-emerald-500'
    },
    {
      id: 'pyq',
      title: 'Previous-Year Papers',
      subtitle: 'JNTUH 5-Year Archive (2020–2024)',
      description: 'Official university examination question papers for DLD / DSD (R18 & R22 regulations) with marks distributions and solution hints.',
      icon: GraduationCap,
      badgeText: '2020 - 2024 Archive',
      actionText: 'View PYQ Papers',
      color: 'bg-indigo-600',
      textColor: 'text-indigo-600',
      borderColor: 'border-indigo-200 hover:border-indigo-500'
    },
    {
      id: 'books',
      title: 'Reference Textbooks',
      subtitle: '4 Standard Recommended Books',
      description: 'Morris Mano, Thomas Floyd, Anand Kumar, and Kohavi/Jha with syllabus unit mappings, chapter indexes, and key reading tips.',
      icon: BookOpen,
      badgeText: '4 Prescribed Texts',
      actionText: 'Explore Textbooks',
      color: 'bg-purple-600',
      textColor: 'text-purple-600',
      borderColor: 'border-purple-200 hover:border-purple-500'
    }
  ];

  return (
    <div className="bg-slate-50 text-slate-900 pb-20 space-y-12">
      {/* Hero Section */}
      <section className="bg-slate-900 text-white border-b border-slate-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-sky-950/30 via-slate-900 to-slate-950 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Column: Description & Search */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-950 border border-sky-800 text-sky-400 text-xs font-semibold">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Digital Logic Design & Integrated Circuit Learning Platform</span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight font-sans">
                Master Digital Electronics through Theory & Live Simulation.
              </h1>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal max-w-2xl">
                A unified academic platform combining <strong>Searchable PDF Notes</strong>, an <strong>Interactive Circuit Simulator</strong>, <strong>228 Curated YouTube Lectures</strong>, <strong>Self-Assessment Quizzes</strong>, and <strong>5-Year JNTUH Exam Papers</strong>.
              </p>

              {/* In-Document Search Form */}
              <form onSubmit={handleSearchSubmit} className="pt-2">
                <div className="flex flex-col sm:flex-row gap-2 max-w-xl">
                  <div className="relative flex-1">
                    <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-sky-400" />
                    <input
                      type="text"
                      placeholder="Search any gate (e.g. AND, XOR, NAND) or topic (K-Map, Full Adder)..."
                      value={localSearch}
                      onChange={e => setLocalSearch(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 bg-slate-950 border border-slate-700 hover:border-sky-500 focus:border-sky-400 rounded-xl text-sm text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500/50 shadow-inner"
                    />
                  </div>
                  <button
                    type="submit"
                    className="px-6 py-3 bg-sky-600 hover:bg-sky-500 text-white text-sm font-semibold rounded-xl flex items-center justify-center gap-2 transition-colors whitespace-nowrap shadow-md cursor-pointer"
                  >
                    <Search className="w-4 h-4" />
                    <span>Search Notes</span>
                  </button>
                </div>

                {/* Quick Topic Chips */}
                <div className="flex flex-wrap items-center gap-1.5 mt-3 text-xs text-slate-400">
                  <span className="text-slate-400 font-medium">Quick search:</span>
                  {quickSearchPills.map(q => (
                    <button
                      key={q}
                      type="button"
                      onClick={() => {
                        setLocalSearch(q);
                        if (!isGateSearchQuery(q).isGate) {
                          onSearchGlobal(q);
                        }
                      }}
                      className="px-2.5 py-1 bg-slate-800 hover:bg-sky-600 hover:text-white rounded-lg text-slate-300 text-xs transition-colors cursor-pointer"
                    >
                      {q}
                    </button>
                  ))}
                </div>

                {/* Direct Link to Provided PDF */}
                <div className="pt-3 flex flex-wrap items-center gap-3">
                  <a
                    href="/digital-electronics-notes-130-pages.pdf"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-sky-950 border border-sky-800 text-sky-300 hover:text-white hover:bg-sky-900 text-xs font-semibold transition-colors"
                  >
                    <FileText className="w-3.5 h-3.5 text-sky-400" />
                    <span>Open Provided Notes PDF (130 Pages)</span>
                    <ExternalLink className="w-3 h-3 ml-0.5 opacity-80" />
                  </a>

                  <a
                    href="/digital-electronics-notes-130-pages.pdf"
                    download="digital-electronics-notes-130-pages.pdf"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-950 border border-emerald-800 text-emerald-300 hover:text-white hover:bg-emerald-900 text-xs font-semibold transition-colors"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Download PDF</span>
                  </a>
                </div>
              </form>

              {/* Logic Gate Diagram & Truth Table Image Card (Appears if user typed or clicked any gate!) */}
              {isGateSearchQuery(localSearch).isGate && (
                <div className="pt-2 max-w-2xl">
                  <LogicGateSearchCard
                    matchedGate={isGateSearchQuery(localSearch).matchedGate}
                    onLaunchSimulator={onOpenCircuit}
                    onClose={() => setLocalSearch('')}
                  />
                </div>
              )}
            </div>

            {/* Right Column: Live Interactive Circuit Simulator Preview Box */}
            <div className="lg:col-span-5">
              <div className="bg-slate-950 border border-slate-800 rounded-2xl p-5 shadow-2xl relative">
                <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-xs font-mono font-semibold text-slate-300">
                      Live Logic Gate Sandbox
                    </span>
                  </div>
                  <button
                    onClick={() => onNavigate('simulator')}
                    className="text-xs font-bold text-sky-400 hover:text-sky-300 flex items-center gap-1 cursor-pointer"
                  >
                    <span>Full Screen Simulator</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

                {/* Gate Selector Pills */}
                <div className="flex items-center gap-1.5 mb-4 overflow-x-auto pb-1 text-xs">
                  {(['AND', 'OR', 'NAND', 'NOR', 'XOR'] as const).map(gate => (
                    <button
                      key={gate}
                      onClick={() => setDemoGate(gate)}
                      className={`px-2.5 py-1 rounded-md font-mono text-xs font-bold transition-colors cursor-pointer ${
                        demoGate === gate
                          ? 'bg-sky-600 text-white shadow-xs'
                          : 'bg-slate-800 text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      {gate}
                    </button>
                  ))}
                </div>

                {/* Gate Visual Canvas */}
                <div className="bg-slate-900/90 rounded-xl p-4 border border-slate-800/80 flex items-center justify-around gap-4 font-mono">
                  {/* Inputs */}
                  <div className="flex flex-col gap-3">
                    <button
                      onClick={() => setDemoInputA(demoInputA === 1 ? 0 : 1)}
                      className={`px-3 py-2 rounded-lg text-xs font-bold transition-all border cursor-pointer ${
                        demoInputA === 1
                          ? 'bg-emerald-600 text-white border-emerald-400 shadow-[0_0_12px_rgba(16,185,129,0.4)]'
                          : 'bg-slate-800 text-slate-400 border-slate-700'
                      }`}
                    >
                      Input A: {demoInputA}
                    </button>

                    <button
                      onClick={() => setDemoInputB(demoInputB === 1 ? 0 : 1)}
                      className={`px-3 py-2 rounded-lg text-xs font-bold transition-all border cursor-pointer ${
                        demoInputB === 1
                          ? 'bg-emerald-600 text-white border-emerald-400 shadow-[0_0_12px_rgba(16,185,129,0.4)]'
                          : 'bg-slate-800 text-slate-400 border-slate-700'
                      }`}
                    >
                      Input B: {demoInputB}
                    </button>
                  </div>

                  {/* Gate Symbol Box */}
                  <div className="w-16 h-16 rounded-xl bg-slate-800 border border-slate-700 flex flex-col items-center justify-center text-sky-400 font-bold text-sm shadow-inner">
                    <span>{demoGate}</span>
                    <span className="text-[10px] text-slate-400 font-normal">GATE</span>
                  </div>

                  {/* Output Indicator */}
                  <div className="flex flex-col items-center gap-1.5">
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-sm border-2 transition-all ${
                        demoOutput === 1
                          ? 'bg-amber-500 text-slate-950 border-amber-300 shadow-[0_0_20px_rgba(245,158,11,0.6)]'
                          : 'bg-slate-800 text-slate-500 border-slate-700'
                      }`}
                    >
                      {demoOutput}
                    </div>
                    <span className="text-[10px] text-slate-400 uppercase font-semibold">
                      LED {demoOutput === 1 ? 'ON' : 'OFF'}
                    </span>
                  </div>
                </div>

                <div className="mt-4 flex items-center justify-between text-xs text-slate-400">
                  <span>Toggle inputs to see the output update in real time.</span>
                  <button
                    onClick={() => onOpenCircuit('gate-and')}
                    className="text-amber-400 hover:underline font-semibold cursor-pointer"
                  >
                    Open Adders & Flip-Flops →
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Bar */}
          <div className="mt-12 pt-8 border-t border-slate-800 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {stats.map(s => (
              <div key={s.label} className="bg-slate-800/40 rounded-xl p-3.5 border border-slate-800">
                <span className="text-lg sm:text-2xl font-bold font-mono text-white block">
                  {s.value}
                </span>
                <span className="text-xs font-semibold text-sky-400 block mt-0.5">
                  {s.label}
                </span>
                <span className="text-[11px] text-slate-400 block mt-0.5 line-clamp-1">
                  {s.desc}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Learning Modules Grid (The 6 Pillars) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-slate-200 gap-2 mb-6">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              Platform Core Learning Modules
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
              Explore theoretical lecture notes, test interactive circuits, view curated video playlists, and solve past exam questions.
            </p>
          </div>
          <button
            onClick={() => onNavigate('notes')}
            className="text-xs font-bold text-sky-600 hover:text-sky-800 flex items-center gap-1 self-start sm:self-auto cursor-pointer"
          >
            <span>Browse Complete Curriculum</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {modules.map(mod => {
            const Icon = mod.icon;
            return (
              <div
                key={mod.id}
                onClick={() => onNavigate(mod.id as any)}
                className={`group cursor-pointer rounded-2xl border bg-white p-6 shadow-xs hover:shadow-lg transition-all duration-200 flex flex-col justify-between ${mod.borderColor}`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-11 h-11 rounded-xl ${mod.color} text-white flex items-center justify-center shadow-xs`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-mono text-slate-600 bg-slate-100 px-2 py-0.5 rounded font-semibold border border-slate-200">
                      {mod.badgeText}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-sky-700 transition-colors">
                    {mod.title}
                  </h3>
                  <div className={`text-xs font-semibold ${mod.textColor} mt-0.5`}>
                    {mod.subtitle}
                  </div>

                  <p className="mt-2.5 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {mod.description}
                  </p>
                </div>

                <div className="mt-5 pt-3.5 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-slate-800 group-hover:text-sky-600">
                  <span>{mod.actionText}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Syllabus 5-Unit Structure & Direct Navigation */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-200 gap-2 mb-6">
            <div>
              <h3 className="text-lg font-bold text-slate-900">
                Digital Electronics Syllabus Architecture (Units I to V)
              </h3>
              <p className="text-xs text-slate-500">
                Mapped against standard JNTUH R18/R22 university guidelines with topic notes and lab linkages.
              </p>
            </div>
            <button
              onClick={() => onNavigate('notes')}
              className="text-xs font-bold text-sky-600 hover:text-sky-800 flex items-center gap-1 cursor-pointer"
            >
              <span>Open PDF Notes Reader</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="divide-y divide-slate-100 space-y-3">
            {UNIT_OVERVIEWS.map(unit => (
              <div key={unit.id} className="pt-3 first:pt-0 flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="max-w-2xl">
                  <div className="flex items-center gap-2 text-xs font-mono">
                    <span className="font-bold text-sky-700 bg-sky-50 px-2 py-0.5 rounded border border-sky-200">
                      {unit.number}
                    </span>
                    <span className="text-slate-500 font-semibold">{unit.sectionsCount} Topics</span>
                  </div>
                  <h4 className="text-sm font-bold text-slate-900 mt-1">{unit.title}</h4>
                  <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">{unit.scope}</p>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <button
                    onClick={() => onNavigate('notes')}
                    className="px-3 py-1.5 bg-slate-100 hover:bg-sky-50 text-slate-700 hover:text-sky-700 border border-slate-200 rounded-lg text-xs font-semibold transition-colors cursor-pointer"
                  >
                    Read Notes
                  </button>
                  <button
                    onClick={() => onNavigate('simulator')}
                    className="px-3 py-1.5 bg-slate-100 hover:bg-amber-50 text-slate-700 hover:text-amber-800 border border-slate-200 rounded-lg text-xs font-semibold transition-colors cursor-pointer"
                  >
                    Simulate
                  </button>
                  <button
                    onClick={() => onNavigate('videos')}
                    className="px-3 py-1.5 bg-slate-100 hover:bg-rose-50 text-slate-700 hover:text-rose-800 border border-slate-200 rounded-lg text-xs font-semibold transition-colors cursor-pointer"
                  >
                    Videos
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Suggested Study Flow Workflow */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-8 border border-slate-800 shadow-md">
          <div className="max-w-2xl mb-6">
            <h3 className="text-lg font-bold text-white">Recommended Study Roadmap</h3>
            <p className="text-xs text-slate-400 mt-1">
              Follow this 4-step pedagogical workflow to build complete conceptual mastery and practical intuition.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
            <div className="bg-slate-800/60 p-4 rounded-xl border border-slate-700/80 space-y-2">
              <div className="w-7 h-7 rounded-lg bg-sky-600 text-white flex items-center justify-center font-bold">1</div>
              <h4 className="font-bold text-white text-sm">Study Theory Notes</h4>
              <p className="text-slate-300 leading-relaxed">
                Review detailed proofs, Boolean theorems, K-Map grouping rules, and state tables in the Searchable PDF Reader.
              </p>
            </div>

            <div className="bg-slate-800/60 p-4 rounded-xl border border-slate-700/80 space-y-2">
              <div className="w-7 h-7 rounded-lg bg-amber-600 text-white flex items-center justify-center font-bold">2</div>
              <h4 className="font-bold text-white text-sm">Test in Simulator</h4>
              <p className="text-slate-300 leading-relaxed">
                Build and toggle virtual logic gates, observe glowing connection wires, and verify truth tables in real time.
              </p>
            </div>

            <div className="bg-slate-800/60 p-4 rounded-xl border border-slate-700/80 space-y-2">
              <div className="w-7 h-7 rounded-lg bg-rose-600 text-white flex items-center justify-center font-bold">3</div>
              <h4 className="font-bold text-white text-sm">Watch Video Lectures</h4>
              <p className="text-slate-300 leading-relaxed">
                Watch curated 228 YouTube lectures for step-by-step numerical calculations, circuit derivations, and examples.
              </p>
            </div>

            <div className="bg-slate-800/60 p-4 rounded-xl border border-slate-700/80 space-y-2">
              <div className="w-7 h-7 rounded-lg bg-emerald-600 text-white flex items-center justify-center font-bold">4</div>
              <h4 className="font-bold text-white text-sm">Quizzes & PYQ Papers</h4>
              <p className="text-slate-300 leading-relaxed">
                Validate conceptual retention through instant quizzes and practice with 5-year JNTUH university examination papers.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
