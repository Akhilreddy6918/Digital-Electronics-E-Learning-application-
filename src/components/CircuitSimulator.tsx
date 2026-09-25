import React, { useState, useEffect } from 'react';
import { CircuitDefinition } from '../types/digitalElectronics';
import { CIRCUITS_DATA } from '../data/deCircuitsData';
import { LogicGateSymbol, SupportedGate } from './LogicGateSymbol';
import { BooleanFunctionDisplay } from './BooleanFunctionDisplay';
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
  Sliders,
  Maximize2,
  X,
  Eye,
  Image as ImageIcon,
  Minimize2
} from 'lucide-react';

interface CircuitSimulatorProps {
  initialCircuitId?: string;
  onOpenNotes?: (notesRef: string) => void;
  onWatchVideo?: (videoRef: number) => void;
}

const QUICK_GATES: { id: string; label: string; gate: SupportedGate }[] = [
  { id: 'gate-and', label: 'AND Gate', gate: 'AND' },
  { id: 'gate-or', label: 'OR Gate', gate: 'OR' },
  { id: 'gate-not', label: 'NOT Gate', gate: 'NOT' },
  { id: 'gate-buffer', label: 'BUFFER', gate: 'BUFFER' },
  { id: 'gate-nand', label: 'NAND Gate', gate: 'NAND' },
  { id: 'gate-nor', label: 'NOR Gate', gate: 'NOR' },
  { id: 'gate-xor', label: 'XOR Gate', gate: 'XOR' },
  { id: 'gate-xnor', label: 'XNOR Gate', gate: 'XNOR' }
];

export const CircuitSimulator: React.FC<CircuitSimulatorProps> = ({
  initialCircuitId,
  onOpenNotes,
  onWatchVideo
}) => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeCircuitId, setActiveCircuitId] = useState<string>(initialCircuitId || CIRCUITS_DATA[0].id);
  const [schematicView, setSchematicView] = useState<'symbol' | 'chart'>('symbol');
  const [isChartModalOpen, setIsChartModalOpen] = useState<boolean>(false);
  const [isFocusMode, setIsFocusMode] = useState<boolean>(false);

  // Sync activeCircuitId whenever initialCircuitId prop changes
  useEffect(() => {
    if (initialCircuitId) {
      setActiveCircuitId(initialCircuitId);
    }
  }, [initialCircuitId]);

  const activeCircuit = CIRCUITS_DATA.find(c => c.id === activeCircuitId) || CIRCUITS_DATA[0];

  // Map active circuit id to SupportedGate
  const getGateType = (circuitId: string): SupportedGate | null => {
    switch (circuitId) {
      case 'gate-and': return 'AND';
      case 'gate-or': return 'OR';
      case 'gate-not': return 'NOT';
      case 'gate-buffer': return 'BUFFER';
      case 'gate-nand': return 'NAND';
      case 'gate-nor': return 'NOR';
      case 'gate-xor': return 'XOR';
      case 'gate-xnor': return 'XNOR';
      default: return null;
    }
  };

  const currentGateType = getGateType(activeCircuit.id);

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

  const resetCircuit = () => {
    const init: Record<string, number> = {};
    activeCircuit.inputs.forEach(inp => {
      init[inp.name] = inp.defaultVal;
    });
    setInputs(init);
    setInternalState(activeCircuit.initialState || {});
    setClockTick(0);
  };

  return (
    <div className="flex flex-col lg:flex-row min-h-[calc(100vh-64px)] bg-slate-900 text-slate-100 selection:bg-sky-500 selection:text-white">
      {/* Left Panel: Circuit Directory (Can be collapsed in focus mode) */}
      {!isFocusMode && (
        <aside className="w-full lg:w-80 bg-slate-950 border-r border-slate-800 flex flex-col shrink-0 lg:max-h-[calc(100vh-64px)] lg:sticky lg:top-16">
          {/* Search Bar */}
          <div className="p-4 border-b border-slate-800 bg-slate-900/40">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2 text-xs font-semibold text-sky-400 uppercase tracking-wider">
                <Zap className="w-4 h-4" />
                <span>Circuit Directory</span>
              </div>
              <span className="text-[10px] font-mono text-slate-400 bg-slate-800 px-2 py-0.5 rounded">
                {filteredCircuits.length} Circuits
              </span>
            </div>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                placeholder="Search circuit (e.g. AND, XOR, Adder)..."
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                className="w-full bg-slate-900 border border-slate-700/80 rounded-lg pl-9 pr-3 py-2 text-xs text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500 shadow-inner"
              />
            </div>
          </div>

          {/* Category Tabs */}
          <div className="p-2 border-b border-slate-800 flex gap-1 overflow-x-auto bg-slate-950">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-2.5 py-1 text-[11px] rounded-md transition-colors whitespace-nowrap cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-sky-600 text-white font-semibold shadow-xs'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Circuit Items List */}
          <div className="flex-1 overflow-y-auto divide-y divide-slate-900 p-2 space-y-1">
            {filteredCircuits.map(cir => {
              const isActive = cir.id === activeCircuitId;
              return (
                <button
                  key={cir.id}
                  onClick={() => setActiveCircuitId(cir.id)}
                  className={`w-full text-left p-2.5 rounded-lg text-xs transition-colors flex flex-col gap-1 cursor-pointer ${
                    isActive
                      ? 'bg-sky-950/80 border border-sky-600 text-white shadow-xs'
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
      )}

      {/* Main Simulation Stage & Controls Deck */}
      <main className="flex-1 flex flex-col p-4 sm:p-6 lg:p-8 space-y-6 overflow-y-auto">
        {/* Quick Gate Selector Bar (One-click access to all 8 standard logic gates) */}
        <div className="bg-slate-950 rounded-xl border border-slate-800 p-3 flex flex-wrap items-center justify-between gap-3 shadow-md">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-sky-400 uppercase tracking-wider flex items-center gap-1.5">
              <Zap className="w-3.5 h-3.5 fill-current" />
              <span>Logic Gates:</span>
            </span>
            <div className="flex flex-wrap items-center gap-1.5">
              {QUICK_GATES.map(q => {
                const isSelected = activeCircuitId === q.id;
                return (
                  <button
                    key={q.id}
                    onClick={() => setActiveCircuitId(q.id)}
                    className={`px-2.5 py-1 rounded-lg text-xs font-mono font-bold transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-sky-600 text-white shadow-xs scale-105 border border-sky-400'
                        : 'bg-slate-900 text-slate-300 hover:bg-slate-800 hover:text-white border border-slate-800'
                    }`}
                  >
                    {q.gate}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Quick Actions & Focus Mode */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsChartModalOpen(true)}
              className="px-2.5 py-1 bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white rounded-lg text-xs font-semibold flex items-center gap-1.5 border border-slate-700 transition-colors cursor-pointer"
              title="View Complete Logic Gates Reference Sheet"
            >
              <ImageIcon className="w-3.5 h-3.5 text-sky-400" />
              <span className="hidden sm:inline">Official Gates Chart</span>
            </button>

            <button
              onClick={() => setIsFocusMode(!isFocusMode)}
              className="px-2.5 py-1 bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white rounded-lg text-xs font-semibold flex items-center gap-1.5 border border-slate-700 transition-colors cursor-pointer"
              title={isFocusMode ? 'Show Directory Sidebar' : 'Expand Simulation Canvas'}
            >
              {isFocusMode ? <Minimize2 className="w-3.5 h-3.5" /> : <Maximize2 className="w-3.5 h-3.5" />}
              <span className="hidden sm:inline">{isFocusMode ? 'Normal View' : 'Focus Mode'}</span>
            </button>
          </div>
        </div>

        {/* Top Header of Active Circuit */}
        <div className="bg-slate-950 rounded-xl border border-slate-800 p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-sm">
          <div>
            <div className="flex items-center gap-2 text-xs text-slate-400 font-mono mb-1">
              <span className="text-sky-400 uppercase font-semibold">{activeCircuit.category}</span>
              <span>·</span>
              <span>{activeCircuit.unitId.toUpperCase()}</span>
              {currentGateType && (
                <>
                  <span>·</span>
                  <span className="bg-sky-950 border border-sky-800 text-sky-300 px-2 py-0.2 rounded text-[10px] font-bold">
                    Standard IEEE / ANSI Symbol
                  </span>
                </>
              )}
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight font-sans">
              {activeCircuit.name}
            </h2>
            <p className="text-xs text-slate-300 mt-1 max-w-xl leading-relaxed">{activeCircuit.description}</p>
          </div>

          {/* Quick Links to Notes & Video */}
          <div className="flex items-center gap-2 self-start sm:self-auto shrink-0">
            {activeCircuit.notesRef && onOpenNotes && (
              <button
                onClick={() => onOpenNotes(activeCircuit.notesRef!)}
                className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-900 hover:bg-slate-800 text-slate-200 rounded-lg text-xs font-semibold border border-slate-700 transition-colors cursor-pointer"
              >
                <BookOpen className="w-3.5 h-3.5 text-sky-400" />
                <span>Read in Notes</span>
              </button>
            )}

            {activeCircuit.videoRef && onWatchVideo && (
              <button
                onClick={() => onWatchVideo(activeCircuit.videoRef!)}
                className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-900 hover:bg-slate-800 text-slate-200 rounded-lg text-xs font-semibold border border-slate-700 transition-colors cursor-pointer"
              >
                <Video className="w-3.5 h-3.5 text-rose-400" />
                <span>Watch Video</span>
              </button>
            )}

            <button
              onClick={resetCircuit}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white rounded-lg text-xs font-semibold border border-slate-700 transition-colors cursor-pointer"
              title="Reset All Inputs to Defaults"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset</span>
            </button>
          </div>
        </div>

        {/* Interactive Breadboard Stage */}
        <div className="bg-slate-950 rounded-2xl border border-slate-800 p-6 sm:p-8 shadow-xl relative overflow-hidden">
          {/* Background Grid Pattern */}
          <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none" />

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 min-h-[300px]">
            {/* Left Inputs Column */}
            <div className="w-full md:w-60 flex flex-col gap-3">
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Digital Inputs
                </span>
                <span className="text-[10px] text-slate-500 font-mono">Click to toggle (0 / 1)</span>
              </div>

              {activeCircuit.inputs.map(inp => {
                const val = inputs[inp.name] ?? inp.defaultVal;
                const isHigh = val === 1;
                return (
                  <div
                    key={inp.name}
                    className={`p-3 rounded-xl border flex items-center justify-between gap-3 shadow-xs transition-all ${
                      isHigh ? 'bg-slate-900/90 border-sky-500/60' : 'bg-slate-900/80 border-slate-800'
                    }`}
                  >
                    <div>
                      <span className="text-xs font-bold text-slate-200 block">{inp.label}</span>
                      <span className="text-[10px] font-mono text-slate-400">Pin {inp.name}</span>
                    </div>

                    <button
                      onClick={() => toggleInput(inp.name)}
                      className={`w-14 h-8 rounded-full transition-colors relative p-1 border cursor-pointer ${
                        isHigh
                          ? 'bg-red-600 border-red-500'
                          : 'bg-slate-800 border-slate-700'
                      }`}
                      title={`Toggle ${inp.label} (Current: ${val})`}
                    >
                      <div
                        className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-mono font-bold transition-transform ${
                          isHigh ? 'translate-x-6 bg-white text-slate-950' : 'translate-x-0 bg-slate-600 text-slate-200'
                        }`}
                      >
                        {val}
                      </div>
                    </button>
                  </div>
                );
              })}

              {/* Clock Pulse Generator (For Sequential Circuits) */}
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
                      className="flex-1 py-1.5 bg-amber-600 hover:bg-amber-500 text-white rounded-lg text-xs font-semibold transition-colors cursor-pointer"
                    >
                      Trigger Pulse
                    </button>
                    <button
                      onClick={() => setIsAutoClock(!isAutoClock)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
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

            {/* Center: Authentic IEEE / ANSI Logic Gate Schematic Stage */}
            <div className="flex-1 flex flex-col items-center justify-center p-4 sm:p-6 bg-slate-900/80 rounded-2xl border border-slate-800 w-full max-w-lg shadow-inner">
              {/* Top View Selector Header */}
              <div className="w-full flex items-center justify-between mb-4 pb-2 border-b border-slate-800">
                <div className="flex items-center gap-1.5">
                  <span className="text-[11px] font-mono text-sky-400 uppercase tracking-widest font-bold">
                    {currentGateType ? `${currentGateType} Gate Symbol` : 'Circuit Logic Core'}
                  </span>
                </div>

                <div className="flex items-center bg-slate-950 border border-slate-800 rounded-lg p-0.5 text-xs">
                  <button
                    onClick={() => setSchematicView('symbol')}
                    className={`px-2.5 py-1 rounded-md font-semibold transition-colors flex items-center gap-1 cursor-pointer ${
                      schematicView === 'symbol'
                        ? 'bg-sky-600 text-white shadow-xs'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    <Zap className="w-3 h-3" />
                    <span>Diagram</span>
                  </button>
                  <button
                    onClick={() => setSchematicView('chart')}
                    className={`px-2.5 py-1 rounded-md font-semibold transition-colors flex items-center gap-1 cursor-pointer ${
                      schematicView === 'chart'
                        ? 'bg-sky-600 text-white shadow-xs'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    <ImageIcon className="w-3 h-3" />
                    <span>Chart Sheet</span>
                  </button>
                </div>
              </div>

              {schematicView === 'symbol' ? (
                <>
                  {currentGateType ? (
                    /* Authentic Logic Gate Symbol (No effects, pure clean vector colors) */
                    <div className="w-full flex flex-col items-center justify-center py-2">
                      <LogicGateSymbol
                        gate={currentGateType}
                        inputA={inputs.A ?? 0}
                        inputB={inputs.B ?? 0}
                        output={liveOutputs.Y ?? 0}
                        showLabels={true}
                        className="w-full max-w-[320px] h-auto"
                      />
                    </div>
                  ) : (
                    /* Schematic IC Block for Combinational / Sequential circuits (Adders, Flip-Flops, MUX) */
                    <div className="w-full max-w-[360px] bg-slate-950 border-2 border-sky-500 rounded-2xl p-5 relative">
                      {/* IC Notch at Top */}
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-3 bg-slate-900 border-b border-x border-sky-500 rounded-b-md" />

                      <div className="text-center mt-2 mb-4">
                        <span className="text-sm font-extrabold font-mono text-white tracking-wider block">
                          {activeCircuit.name}
                        </span>
                        <span className="text-[10px] font-mono text-sky-400 uppercase tracking-widest font-bold">
                          {activeCircuit.category} CORE
                        </span>
                      </div>

                      {/* Pins Grid */}
                      <div className="grid grid-cols-2 gap-4 text-xs font-mono">
                        {/* Input Pins */}
                        <div className="space-y-2 border-r border-slate-800 pr-3">
                          <span className="text-[10px] text-slate-400 uppercase tracking-wider block font-bold">Inputs</span>
                          {activeCircuit.inputs.map(inp => {
                            const val = inputs[inp.name] ?? 0;
                            return (
                              <div key={inp.name} className="flex items-center justify-between">
                                <span className="text-slate-300">{inp.name}:</span>
                                <span className={`px-1.5 py-0.5 rounded font-bold ${val === 1 ? 'bg-red-600 text-white' : 'bg-slate-800 text-slate-400'}`}>
                                  {val}
                                </span>
                              </div>
                            );
                          })}
                        </div>

                        {/* Output Pins */}
                        <div className="space-y-2 pl-3">
                          <span className="text-[10px] text-slate-400 uppercase tracking-wider block font-bold">Outputs</span>
                          {activeCircuit.outputs.map(out => {
                            const val = liveOutputs[out.name] ?? 0;
                            return (
                              <div key={out.name} className="flex items-center justify-between">
                                <span className="text-slate-300">{out.name}:</span>
                                <span className={`px-1.5 py-0.5 rounded font-bold ${val === 1 ? 'bg-emerald-600 text-white' : 'bg-slate-800 text-slate-400'}`}>
                                  {val}
                                </span>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Transfer Function & Live Status */}
                  <div className="w-full mt-4 pt-3 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs">
                    <BooleanFunctionDisplay
                      expression={activeCircuit.booleanExpression}
                      details={activeCircuit.booleanDetails}
                      circuitName={activeCircuit.name}
                      compact={true}
                    />
                    <span className="text-[11px] text-slate-400 font-mono">
                      Gate Latency: <strong className="text-emerald-400">0 ns (Ideal)</strong>
                    </span>
                  </div>
                </>
              ) : (
                /* Chart Sheet View right in the simulator stage */
                <div
                  onClick={() => setIsChartModalOpen(true)}
                  className="w-full flex flex-col items-center justify-center p-2 bg-slate-950 rounded-xl border border-slate-800 cursor-pointer group"
                >
                  <div className="relative max-h-56 overflow-hidden rounded-lg bg-white p-2">
                    <img
                      src="/logic-gates-chart.jpg"
                      alt="Official Logic Gates Chart Sheet"
                      className="max-h-52 w-auto object-contain transition-transform duration-200 group-hover:scale-105"
                    />
                  </div>
                  <span className="text-xs text-sky-400 font-semibold mt-2 flex items-center gap-1 group-hover:text-sky-300">
                    <Maximize2 className="w-3.5 h-3.5" /> Click to view full resolution sheet
                  </span>
                </div>
              )}
            </div>

            {/* Right Outputs Column */}
            <div className="w-full md:w-60 flex flex-col gap-3">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1 block">
                Digital Outputs
              </span>

              {activeCircuit.outputs.map(out => {
                const val = liveOutputs[out.name] ?? 0;
                const isHigh = val === 1;
                return (
                  <div
                    key={out.name}
                    className={`p-3.5 rounded-xl border flex items-center justify-between gap-3 transition-colors ${
                      isHigh
                        ? 'bg-emerald-950/70 border-emerald-500'
                        : 'bg-slate-900/90 border-slate-800'
                    }`}
                  >
                    <div>
                      <span className="text-xs font-semibold text-slate-200 block">{out.label}</span>
                      <span className="text-[10px] font-mono text-slate-400">Pin {out.name}</span>
                    </div>

                    <div className="flex items-center gap-2.5">
                      {/* Solid Clean LED Indicator (No blur glow effects) */}
                      <div
                        className={`w-4 h-4 rounded-full border ${
                          isHigh
                            ? 'bg-emerald-500 border-emerald-300'
                            : 'bg-slate-700 border-slate-600'
                        }`}
                      />
                      <span
                        className={`text-xl font-mono font-bold tabular-nums ${
                          isHigh ? 'text-emerald-400' : 'text-slate-500'
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

        {/* Bottom Output Panels: Truth Table & Theoretical Analysis */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Functional Truth Table with Synchronized Row Highlight */}
          <div className="bg-slate-950 rounded-xl border border-slate-800 p-5 shadow-sm">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-300">
                Functional Truth Table
              </span>
              <span className="text-[11px] text-sky-400 font-mono">Row highlight = current inputs</span>
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
                    const isCurrentRow = activeCircuit.inputs.every((inp, iIdx) => {
                      return (inputs[inp.name] ?? inp.defaultVal) === row.inputs[iIdx];
                    });

                    return (
                      <tr
                        key={idx}
                        className={`transition-colors ${
                          isCurrentRow
                            ? 'bg-sky-950/80 text-white font-bold border-l-4 border-sky-400'
                            : 'text-slate-400 hover:bg-slate-900/50'
                        }`}
                      >
                        {row.inputs.map((val, vIdx) => (
                          <td key={vIdx} className="py-2.5 px-3">{val}</td>
                        ))}
                        {row.outputs.map((val, vIdx) => (
                          <td
                            key={vIdx}
                            className={`py-2.5 px-3 font-bold ${val === 1 ? 'text-emerald-400' : 'text-slate-500'}`}
                          >
                            {val}
                          </td>
                        ))}
                        <td className="py-2.5 px-3 text-slate-400 text-[11px] font-sans">
                          {row.state || (row.outputs[0] === 1 ? 'Active High (1)' : 'Active Low (0)')}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>

          {/* Theory & University Exam Relevance Deck */}
          <div className="bg-slate-950 rounded-xl border border-slate-800 p-5 flex flex-col justify-between shadow-sm">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold text-sky-400 mb-2">
                <Info className="w-4 h-4" />
                <span>Theory & Exam Relevance</span>
              </div>
              <h3 className="text-sm font-bold text-white mb-2">{activeCircuit.name} Analysis</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                {activeCircuit.description} This circuit is directly covered under <strong>{activeCircuit.unitId.toUpperCase()}</strong> of the university syllabus and frequently examined in JNTUH previous-year question papers.
              </p>

              <div className="mt-4">
                <BooleanFunctionDisplay
                  expression={activeCircuit.booleanExpression}
                  details={activeCircuit.booleanDetails}
                  circuitName={activeCircuit.name}
                />
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-900 flex items-center justify-between text-xs text-slate-400">
              <span className="text-[11px]">Interactive Logic Engine · Active Circuit Simulation</span>
              <button
                onClick={resetCircuit}
                className="flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reset Circuit</span>
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* Full Resolution Modal for Official Logic Gates Chart Sheet */}
      {isChartModalOpen && (
        <div className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-150">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] flex flex-col shadow-2xl overflow-hidden border border-slate-300">
            {/* Modal Header */}
            <div className="px-6 py-4 bg-slate-900 text-white flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-sky-600 flex items-center justify-center text-white">
                  <Zap className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-extrabold text-sm sm:text-base tracking-tight">
                    Symbols & Truth Tables of Common Logic Gates
                  </h3>
                  <p className="text-xs text-sky-400">Official Course Engineering Reference Sheet</p>
                </div>
              </div>

              <button
                onClick={() => setIsChartModalOpen(false)}
                className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Image Content */}
            <div className="flex-1 overflow-auto p-4 sm:p-6 bg-slate-100 flex items-center justify-center">
              <img
                src="/logic-gates-chart.jpg"
                alt="Symbols & Truth Tables of Common Logic Gates"
                className="max-h-[70vh] w-auto object-contain rounded-xl shadow-lg border border-slate-300 bg-white"
              />
            </div>

            {/* Modal Footer */}
            <div className="px-6 py-3 bg-slate-900 text-slate-400 text-xs flex flex-wrap items-center justify-between gap-3 border-t border-slate-800">
              <span>Covers: AND, OR, NOT, BUFFER, NAND, NOR, XOR, XNOR</span>
              <div className="flex items-center gap-2">
                <a
                  href="/logic-gates-chart.jpg"
                  target="_blank"
                  rel="noreferrer"
                  className="px-3 py-1.5 bg-sky-600 hover:bg-sky-500 text-white rounded-lg font-semibold transition-colors"
                >
                  Open Original Image in New Tab
                </a>
                <button
                  onClick={() => setIsChartModalOpen(false)}
                  className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-lg font-semibold transition-colors cursor-pointer"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
