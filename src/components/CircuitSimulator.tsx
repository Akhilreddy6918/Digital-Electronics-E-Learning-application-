import React, { useState, useEffect } from 'react';
import { CircuitDefinition } from '../types/digitalElectronics';
import { CIRCUITS_DATA } from '../data/deCircuitsData';
import {
  Search,
  Zap,
  Play,
  RotateCcw,
  BookOpen,
  Video,
  Info,
  CheckCircle2,
  Clock,
  Layers,
  Activity,
  Sliders
} from 'lucide-react';

interface CircuitSimulatorProps {
  initialCircuitId?: string;
  onOpenNotes?: (notesRef: string) => void;
  onWatchVideo?: (videoRef: number) => void;
}

export const CircuitSimulator: React.FC<CircuitSimulatorProps> = ({
  initialCircuitId,
  onOpenNotes,
  onWatchVideo
}) => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeCircuitId, setActiveCircuitId] = useState<string>(initialCircuitId || CIRCUITS_DATA[0].id);

  const activeCircuit = CIRCUITS_DATA.find(c => c.id === activeCircuitId) || CIRCUITS_DATA[0];

  // Dynamic input values map
  const [inputs, setInputs] = useState<Record<string, number>>(() => {
    const init: Record<string, number> = {};
    activeCircuit.inputs.forEach(inp => {
      init[inp.name] = inp.defaultVal;
    });
    return init;
  });

  // Circuit sequential internal state
  const [internalState, setInternalState] = useState<any>(activeCircuit.initialState || {});
  const [clockTick, setClockTick] = useState<number>(0);
  const [isAutoClock, setIsAutoClock] = useState<boolean>(false);
  const [waveformHistory, setWaveformHistory] = useState<{ time: number; values: Record<string, number> }[]>([]);

  // Reset inputs and state when active circuit changes
  useEffect(() => {
    const init: Record<string, number> = {};
    activeCircuit.inputs.forEach(inp => {
      init[inp.name] = inp.defaultVal;
    });
    setInputs(init);
    setInternalState(activeCircuit.initialState || {});
    setClockTick(0);
    setWaveformHistory([]);
  }, [activeCircuitId]);

  // Compute live outputs
  const evaluation = activeCircuit.computeOutput(inputs, internalState);
  const liveOutputs = evaluation.outputs;

  // Clock pulse trigger
  const triggerClockPulse = () => {
    setClockTick(prev => prev + 1);
    if (evaluation.nextState) {
      setInternalState(evaluation.nextState);
    }
  };

  // Auto clock generator
  useEffect(() => {
    let interval: any;
    if (isAutoClock && activeCircuit.hasClock) {
      interval = setInterval(() => {
        triggerClockPulse();
      }, 700);
    }
    return () => clearInterval(interval);
  }, [isAutoClock, activeCircuit.hasClock, inputs, internalState]);

  // Record waveform
  useEffect(() => {
    setWaveformHistory(prev => {
      const snap = { time: clockTick, values: { ...inputs, ...liveOutputs } };
      return [...prev.slice(-15), snap];
    });
  }, [clockTick, inputs]);

  // Filter circuit list by search query and category
  const categories = ['All', 'Gates', 'Combinational', 'Sequential', 'Counters & Registers', 'Logic Families'];

  const filteredCircuits = CIRCUITS_DATA.filter(c => {
    const matchesCat = selectedCategory === 'All' || c.category === selectedCategory;
    const matchesSearch =
      searchQuery.trim() === '' ||
      c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  const toggleInput = (name: string) => {
    setInputs(prev => ({
      ...prev,
      [name]: prev[name] === 1 ? 0 : 1
    }));
  };

  return (
    <div className="flex flex-col lg:flex-row h-[calc(100vh-64px)] bg-slate-900 text-slate-100 overflow-hidden">
      {/* Left Panel: Circuit Search & Category Library */}
      <aside className="w-full lg:w-80 bg-slate-950 border-r border-slate-800 flex flex-col shrink-0 overflow-hidden">
        {/* Search Bar */}
        <div className="p-4 border-b border-slate-800 bg-slate-900/40">
          <div className="flex items-center gap-2 text-xs font-semibold text-sky-400 uppercase tracking-wider mb-2">
            <Zap className="w-4 h-4" />
            <span>Circuit Directory</span>
          </div>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search circuit (e.g. AND gate, JK flip-flop)..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              className="w-full bg-slate-900 border border-slate-700/80 rounded-lg pl-9 pr-3 py-2 text-xs text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500 shadow-inner"
            />
          </div>
        </div>

        {/* Category Pills */}
        <div className="p-2 border-b border-slate-800 flex gap-1 overflow-x-auto bg-slate-950">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-2.5 py-1 text-[11px] rounded-md transition-colors whitespace-nowrap ${
                selectedCategory === cat
                  ? 'bg-sky-600 text-white font-semibold'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Matching Circuit List */}
        <div className="flex-1 overflow-y-auto divide-y divide-slate-900 p-2 space-y-1">
          {filteredCircuits.map(cir => {
            const isActive = cir.id === activeCircuitId;
            return (
              <button
                key={cir.id}
                onClick={() => setActiveCircuitId(cir.id)}
                className={`w-full text-left p-3 rounded-lg text-xs transition-colors flex flex-col gap-1 ${
                  isActive
                    ? 'bg-sky-950/80 border border-sky-700 text-white shadow-xs'
                    : 'hover:bg-slate-900 text-slate-300'
                }`}
              >
                <div className="flex items-center justify-between text-[10px] text-slate-400">
                  <span className="font-mono text-sky-400 uppercase">{cir.category}</span>
                  {cir.hasClock && <span className="text-amber-400 font-mono">Clocked</span>}
                </div>
                <span className={`font-semibold ${isActive ? 'text-white' : 'text-slate-200'}`}>
                  {cir.name}
                </span>
                <span className="text-[11px] text-slate-400 line-clamp-1">{cir.description}</span>
              </button>
            );
          })}
        </div>
      </aside>

      {/* Center & Right: Interactive Simulation Stage & Output Deck */}
      <main className="flex-1 flex flex-col overflow-y-auto p-4 sm:p-6 lg:p-8 space-y-6">
        {/* Top Header of Active Circuit */}
        <div className="bg-slate-950 rounded-xl border border-slate-800 p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs text-slate-400 font-mono mb-1">
              <span>{activeCircuit.category}</span>
              <span>·</span>
              <span className="text-sky-400">{activeCircuit.unitId.toUpperCase()}</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight font-sans">
              {activeCircuit.name}
            </h2>
            <p className="text-xs text-slate-300 mt-1 max-w-xl">{activeCircuit.description}</p>
          </div>

          {/* Quick Links to Notes & Video */}
          <div className="flex items-center gap-2 self-start sm:self-auto shrink-0">
            {activeCircuit.notesRef && onOpenNotes && (
              <button
                onClick={() => onOpenNotes(activeCircuit.notesRef!)}
                className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-900 hover:bg-slate-800 text-slate-200 rounded-lg text-xs font-semibold border border-slate-700 transition-colors"
              >
                <BookOpen className="w-3.5 h-3.5 text-sky-400" />
                <span>Read in Notes</span>
              </button>
            )}

            {activeCircuit.videoRef && onWatchVideo && (
              <button
                onClick={() => onWatchVideo(activeCircuit.videoRef!)}
                className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-900 hover:bg-slate-800 text-slate-200 rounded-lg text-xs font-semibold border border-slate-700 transition-colors"
              >
                <Video className="w-3.5 h-3.5 text-rose-400" />
                <span>Watch Video</span>
              </button>
            )}
          </div>
        </div>

        {/* Center Canvas: Interactive Logic Breadboard Stage */}
        <div className="bg-slate-950 rounded-2xl border border-slate-800 p-6 sm:p-8 shadow-xl relative overflow-hidden">
          {/* Subtle PCB Grid Lines */}
          <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:20px_20px] opacity-40 pointer-events-none" />

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 min-h-[280px]">
            {/* Left Inputs Column */}
            <div className="w-full md:w-56 flex flex-col gap-3">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1 block">
                Digital Inputs
              </span>

              {activeCircuit.inputs.map(inp => {
                const val = inputs[inp.name] ?? inp.defaultVal;
                return (
                  <div
                    key={inp.name}
                    className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 flex items-center justify-between gap-3 shadow-xs"
                  >
                    <div>
                      <span className="text-xs font-semibold text-slate-200 block">{inp.label}</span>
                      <span className="text-[10px] font-mono text-slate-400">Logic Pin {inp.name}</span>
                    </div>

                    <button
                      onClick={() => toggleInput(inp.name)}
                      className={`w-12 h-7 rounded-full transition-colors relative p-0.5 border ${
                        val === 1
                          ? 'bg-sky-600 border-sky-400 shadow-[0_0_10px_rgba(2,132,199,0.5)]'
                          : 'bg-slate-800 border-slate-700'
                      }`}
                      title={`Toggle ${inp.label}`}
                    >
                      <div
                        className={`w-5.5 h-5.5 rounded-full flex items-center justify-center text-[10px] font-mono font-bold transition-transform ${
                          val === 1 ? 'translate-x-5 bg-white text-slate-950' : 'translate-x-0 bg-slate-600 text-slate-300'
                        }`}
                      >
                        {val}
                      </div>
                    </button>
                  </div>
                );
              })}

              {/* Clock Generator Controls (if sequential) */}
              {activeCircuit.hasClock && (
                <div className="mt-2 p-3 bg-amber-950/30 border border-amber-800/50 rounded-xl space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-amber-300 flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5" />
                      <span>Clock Pulse</span>
                    </span>
                    <span className="font-mono text-xs text-amber-400 tabular-nums">#{clockTick}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={triggerClockPulse}
                      className="flex-1 py-1.5 bg-amber-600 hover:bg-amber-500 text-white rounded-lg text-xs font-semibold transition-colors"
                    >
                      Trigger Pulse
                    </button>
                    <button
                      onClick={() => setIsAutoClock(!isAutoClock)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                        isAutoClock
                          ? 'bg-rose-600 text-white'
                          : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                      }`}
                    >
                      {isAutoClock ? 'Stop Clock' : 'Auto Clock'}
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Center: Circuit Schematic Box */}
            <div className="flex-1 flex flex-col items-center justify-center text-center p-6 bg-slate-900/60 rounded-2xl border border-slate-800/80 w-full max-w-md shadow-inner">
              <div className="text-[11px] font-mono text-slate-400 uppercase tracking-widest mb-3">
                Logic Core Schematic
              </div>

              {/* Visual Symbolic Representation */}
              <div className="w-36 h-28 bg-slate-950 border-2 border-sky-500/80 rounded-xl shadow-[0_0_20px_rgba(2,132,199,0.25)] flex flex-col items-center justify-center p-3 relative">
                <span className="text-sm font-bold font-mono text-white tracking-wider">
                  {activeCircuit.name.split(' ')[0]}
                </span>
                {activeCircuit.booleanExpression && (
                  <span className="text-xs font-mono text-sky-400 mt-1">
                    {activeCircuit.booleanExpression}
                  </span>
                )}
                {/* Visual Active Pin Indicator */}
                <div className="absolute -right-2 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-sky-500 animate-ping opacity-75 pointer-events-none" />
              </div>

              <div className="mt-4 text-xs text-slate-400 max-w-xs leading-relaxed">
                Click input toggle switches to observe real-time gate propagation and truth table synchronization.
              </div>
            </div>

            {/* Right Outputs Column */}
            <div className="w-full md:w-56 flex flex-col gap-3">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1 block">
                Digital Outputs
              </span>

              {activeCircuit.outputs.map(out => {
                const val = liveOutputs[out.name] ?? 0;
                return (
                  <div
                    key={out.name}
                    className={`p-3.5 rounded-xl border flex items-center justify-between gap-3 transition-all ${
                      val === 1
                        ? 'bg-emerald-950/60 border-emerald-500/80 shadow-[0_0_15px_rgba(16,185,129,0.3)]'
                        : 'bg-slate-900/90 border-slate-800'
                    }`}
                  >
                    <div>
                      <span className="text-xs font-semibold text-slate-200 block">{out.label}</span>
                      <span className="text-[10px] font-mono text-slate-400">Pin {out.name}</span>
                    </div>

                    <div className="flex items-center gap-2">
                      {/* LED Bulb */}
                      <div
                        className={`w-3.5 h-3.5 rounded-full transition-all ${
                          val === 1
                            ? 'bg-emerald-400 shadow-[0_0_12px_#34d399]'
                            : 'bg-slate-700'
                        }`}
                      />
                      <span
                        className={`text-lg font-mono font-bold tabular-nums ${
                          val === 1 ? 'text-emerald-400' : 'text-slate-500'
                        }`}
                      >
                        {val}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Output Panels: Truth Table & Behavioral Analysis */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Truth Table with Active Row Highlight */}
          <div className="bg-slate-950 rounded-xl border border-slate-800 p-5">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-300">
                Functional Truth Table
              </span>
              <span className="text-[11px] text-slate-500 font-mono">Row highlight = current inputs</span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-xs text-left">
                <thead>
                  <tr className="border-b border-slate-800 text-slate-400 font-mono">
                    {activeCircuit.inputs.map(i => (
                      <th key={i.name} className="py-2 px-3">{i.name}</th>
                    ))}
                    {activeCircuit.outputs.map(o => (
                      <th key={o.name} className="py-2 px-3 text-sky-400">{o.name}</th>
                    ))}
                    <th className="py-2 px-3 text-slate-500">State / Description</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-900 font-mono">
                  {activeCircuit.truthTable.map((row, idx) => {
                    // Check if current inputs match this row
                    const isCurrentRow = activeCircuit.inputs.every((inp, iIdx) => {
                      return (inputs[inp.name] ?? inp.defaultVal) === row.inputs[iIdx];
                    });

                    return (
                      <tr
                        key={idx}
                        className={`transition-colors ${
                          isCurrentRow
                            ? 'bg-sky-950/70 text-white font-bold border-l-2 border-sky-400'
                            : 'text-slate-400 hover:bg-slate-900/50'
                        }`}
                      >
                        {row.inputs.map((val, vIdx) => (
                          <td key={vIdx} className="py-2 px-3">{val}</td>
                        ))}
                        {row.outputs.map((val, vIdx) => (
                          <td
                            key={vIdx}
                            className={`py-2 px-3 ${val === 1 ? 'text-emerald-400 font-semibold' : 'text-slate-500'}`}
                          >
                            {val}
                          </td>
                        ))}
                        <td className="py-2 px-3 text-slate-400 text-[11px] font-sans">
                          {row.state || (row.outputs[0] === 1 ? 'Active High' : 'Active Low')}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>

          {/* Theory & Operational Analysis Deck */}
          <div className="bg-slate-950 rounded-xl border border-slate-800 p-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold text-sky-400 mb-2">
                <Info className="w-4 h-4" />
                <span>Theory & Exam Relevance</span>
              </div>
              <h3 className="text-sm font-bold text-white mb-2">{activeCircuit.name} Analysis</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                {activeCircuit.description} This circuit is directly covered under <strong>{activeCircuit.unitId.toUpperCase()}</strong> of the university syllabus and frequently examined in JNTUH previous-year question papers.
              </p>

              {activeCircuit.booleanExpression && (
                <div className="mt-4 p-3 bg-slate-900 rounded-lg border border-slate-800 font-mono text-xs text-sky-300">
                  <span className="text-slate-500 block text-[10px] uppercase">Boolean Transfer Function:</span>
                  {activeCircuit.booleanExpression}
                </div>
              )}
            </div>

            <div className="mt-6 pt-4 border-t border-slate-900 flex items-center justify-between text-xs text-slate-400">
              <span>Simulation Engine: Interactive Logic v2</span>
              <button
                onClick={() => {
                  const init: Record<string, number> = {};
                  activeCircuit.inputs.forEach(inp => {
                    init[inp.name] = inp.defaultVal;
                  });
                  setInputs(init);
                  setInternalState(activeCircuit.initialState || {});
                  setClockTick(0);
                }}
                className="flex items-center gap-1.5 text-slate-300 hover:text-white"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reset Circuit</span>
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
