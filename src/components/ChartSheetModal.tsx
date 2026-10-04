import React, { useState } from 'react';
import {
  X,
  Zap,
  Cpu,
  Download,
  ExternalLink,
  ZoomIn,
  ZoomOut,
  Maximize2,
  Table,
  CheckCircle2,
  Info,
  Layers,
  ArrowRight
} from 'lucide-react';

export type ChartType = 'flipflops' | 'gates';

interface ChartSheetModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialChart?: ChartType;
  onSimulateCircuit?: (circuitId: string) => void;
}

export const ChartSheetModal: React.FC<ChartSheetModalProps> = ({
  isOpen,
  onClose,
  initialChart = 'flipflops',
  onSimulateCircuit
}) => {
  const [activeChart, setActiveChart] = useState<ChartType>(initialChart);
  const [zoomLevel, setZoomLevel] = useState<number>(100);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-2 sm:p-4 animate-in fade-in duration-150">
      <div className="bg-slate-900 border border-slate-700 rounded-2xl max-w-5xl w-full max-h-[94vh] flex flex-col shadow-2xl overflow-hidden">
        {/* Top Header */}
        <div className="px-5 py-3.5 bg-slate-950 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-sky-500 to-indigo-600 flex items-center justify-center text-white shadow-md">
              <Layers className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-extrabold text-sm sm:text-base text-white tracking-tight">
                  Digital Electronics Engineering Chart Sheets
                </h3>
                <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-[10px] font-mono font-bold uppercase">
                  Verified Reference
                </span>
              </div>
              <p className="text-xs text-slate-400">
                Official infographic charts for Sequential Flip-Flops and Combinational Logic Gates
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* Chart Switcher Tabs */}
            <div className="flex items-center bg-slate-900 p-1 rounded-xl border border-slate-800">
              <button
                type="button"
                onClick={() => {
                  setActiveChart('flipflops');
                  setZoomLevel(100);
                }}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
                  activeChart === 'flipflops'
                    ? 'bg-sky-600 text-white shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Cpu className="w-3.5 h-3.5" />
                <span>Flip-Flops Chart</span>
                <span className="px-1.5 py-0.2 bg-emerald-400 text-slate-950 text-[9px] font-extrabold rounded-md">
                  NEW
                </span>
              </button>

              <button
                type="button"
                onClick={() => {
                  setActiveChart('gates');
                  setZoomLevel(100);
                }}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
                  activeChart === 'gates'
                    ? 'bg-sky-600 text-white shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Zap className="w-3.5 h-3.5" />
                <span>Logic Gates Chart</span>
              </button>
            </div>

            <button
              onClick={onClose}
              className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors cursor-pointer ml-2"
              title="Close Modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Content Body */}
        <div className="flex-1 overflow-y-auto bg-slate-950/60 p-4 sm:p-6 flex flex-col items-center">
          {activeChart === 'flipflops' ? (
            /* Flip-Flops Chart View (User Uploaded Chart) */
            <div className="w-full flex flex-col items-center gap-6">
              {/* Image Container with Zoom Controls */}
              <div className="w-full bg-slate-900/90 rounded-2xl border border-slate-800 p-4 flex flex-col items-center relative overflow-hidden shadow-xl">
                <div className="w-full flex items-center justify-between pb-3 mb-3 border-b border-slate-800 text-xs text-slate-300">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-white text-sm">FLIP-FLOP Infographic Chart Sheet</span>
                    <span className="text-slate-400 font-mono text-[11px]">
                      (SR, JK, D, T Flip-Flops · Truth Tables · Characteristic Equations)
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setZoomLevel(prev => Math.max(60, prev - 15))}
                      className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors"
                      title="Zoom Out"
                    >
                      <ZoomOut className="w-4 h-4" />
                    </button>
                    <span className="font-mono text-xs text-sky-400 w-12 text-center">
                      {zoomLevel}%
                    </span>
                    <button
                      onClick={() => setZoomLevel(prev => Math.min(180, prev + 15))}
                      className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors"
                      title="Zoom In"
                    >
                      <ZoomIn className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => setZoomLevel(100)}
                      className="px-2 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 font-mono text-xs"
                      title="Reset Zoom"
                    >
                      Reset
                    </button>
                  </div>
                </div>

                {/* The Chart Image */}
                <div className="w-full overflow-auto max-h-[62vh] flex items-center justify-center p-2 bg-slate-950/80 rounded-xl">
                  <img
                    src="/flip-flops-chart.png"
                    alt="FLIP-FLOP Engineering Reference Chart Sheet (SR, JK, D, T Flip-Flops)"
                    style={{ transform: `scale(${zoomLevel / 100})`, transformOrigin: 'top center' }}
                    className="max-h-[75vh] w-auto object-contain rounded-lg shadow-2xl transition-transform duration-150 border border-slate-800 bg-white"
                  />
                </div>
              </div>

              {/* Quick Simulator Launchers for Circuits in Chart */}
              {onSimulateCircuit && (
                <div className="w-full bg-slate-900/80 border border-slate-800 rounded-xl p-4">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-2">
                    <Cpu className="w-4 h-4 text-sky-400" />
                    <span>Launch Corresponding Interactive Circuit Simulators</span>
                  </h4>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                    <button
                      onClick={() => {
                        onSimulateCircuit('cir-sr-latch');
                        onClose();
                      }}
                      className="p-2.5 rounded-lg bg-slate-800 hover:bg-sky-900/60 border border-slate-700 hover:border-sky-500/50 text-left transition-all group cursor-pointer"
                    >
                      <div className="text-xs font-bold text-white group-hover:text-sky-300 flex items-center justify-between">
                        <span>3. SR Flip-Flop</span>
                        <ArrowRight className="w-3.5 h-3.5 opacity-60 group-hover:translate-x-0.5 transition-transform" />
                      </div>
                      <div className="text-[10px] text-slate-400 mt-0.5 font-mono">Qn+1 = S + R'Qn</div>
                    </button>

                    <button
                      onClick={() => {
                        onSimulateCircuit('cir-jk-flipflop');
                        onClose();
                      }}
                      className="p-2.5 rounded-lg bg-slate-800 hover:bg-sky-900/60 border border-slate-700 hover:border-sky-500/50 text-left transition-all group cursor-pointer"
                    >
                      <div className="text-xs font-bold text-white group-hover:text-sky-300 flex items-center justify-between">
                        <span>4. JK Flip-Flop</span>
                        <ArrowRight className="w-3.5 h-3.5 opacity-60 group-hover:translate-x-0.5 transition-transform" />
                      </div>
                      <div className="text-[10px] text-slate-400 mt-0.5 font-mono">Qn+1 = JQ'n + K'Qn</div>
                    </button>

                    <button
                      onClick={() => {
                        onSimulateCircuit('cir-d-flipflop');
                        onClose();
                      }}
                      className="p-2.5 rounded-lg bg-slate-800 hover:bg-sky-900/60 border border-slate-700 hover:border-sky-500/50 text-left transition-all group cursor-pointer"
                    >
                      <div className="text-xs font-bold text-white group-hover:text-sky-300 flex items-center justify-between">
                        <span>5. D Flip-Flop</span>
                        <ArrowRight className="w-3.5 h-3.5 opacity-60 group-hover:translate-x-0.5 transition-transform" />
                      </div>
                      <div className="text-[10px] text-slate-400 mt-0.5 font-mono">Qn+1 = D (Delay)</div>
                    </button>

                    <button
                      onClick={() => {
                        onSimulateCircuit('cir-t-flipflop');
                        onClose();
                      }}
                      className="p-2.5 rounded-lg bg-slate-800 hover:bg-sky-900/60 border border-slate-700 hover:border-sky-500/50 text-left transition-all group cursor-pointer"
                    >
                      <div className="text-xs font-bold text-white group-hover:text-sky-300 flex items-center justify-between">
                        <span>6. T Flip-Flop</span>
                        <ArrowRight className="w-3.5 h-3.5 opacity-60 group-hover:translate-x-0.5 transition-transform" />
                      </div>
                      <div className="text-[10px] text-slate-400 mt-0.5 font-mono">Qn+1 = T ⊕ Qn</div>
                    </button>
                  </div>
                </div>
              )}

              {/* Digital Reference Summary Matrix matching the Chart Sheet */}
              <div className="w-full bg-slate-900 border border-slate-800 rounded-xl p-5 text-white">
                <div className="flex items-center gap-2 mb-3">
                  <Table className="w-4 h-4 text-emerald-400" />
                  <h4 className="text-sm font-bold">Chart Sheet Section 7: Flip-Flop Comparison Table</h4>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-xs text-left">
                    <thead>
                      <tr className="border-b border-slate-800 text-slate-400 font-mono text-[11px]">
                        <th className="py-2 px-3">Type</th>
                        <th className="py-2 px-3">Inputs</th>
                        <th className="py-2 px-3">Characteristic Equation</th>
                        <th className="py-2 px-3">Special Feature & Behavior</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-800 font-sans">
                      <tr className="hover:bg-slate-800/40">
                        <td className="py-2.5 px-3 font-bold text-sky-400">SR Flip-Flop</td>
                        <td className="py-2.5 px-3 font-mono text-slate-300">S, R</td>
                        <td className="py-2.5 px-3 font-mono text-emerald-300 font-bold">Qn+1 = S + R̄ Qn</td>
                        <td className="py-2.5 px-3 text-rose-300">S = R = 1 is Invalid (Forbidden Condition)</td>
                      </tr>
                      <tr className="hover:bg-slate-800/40">
                        <td className="py-2.5 px-3 font-bold text-indigo-400">JK Flip-Flop</td>
                        <td className="py-2.5 px-3 font-mono text-slate-300">J, K</td>
                        <td className="py-2.5 px-3 font-mono text-emerald-300 font-bold">Qn+1 = J Q̄n + K̄ Qn</td>
                        <td className="py-2.5 px-3 text-sky-300">No Invalid State; Toggles when J = K = 1</td>
                      </tr>
                      <tr className="hover:bg-slate-800/40">
                        <td className="py-2.5 px-3 font-bold text-emerald-400">D Flip-Flop</td>
                        <td className="py-2.5 px-3 font-mono text-slate-300">D</td>
                        <td className="py-2.5 px-3 font-mono text-emerald-300 font-bold">Qn+1 = D</td>
                        <td className="py-2.5 px-3 text-slate-300">Output captures and follows Data input D</td>
                      </tr>
                      <tr className="hover:bg-slate-800/40">
                        <td className="py-2.5 px-3 font-bold text-amber-400">T Flip-Flop</td>
                        <td className="py-2.5 px-3 font-mono text-slate-300">T</td>
                        <td className="py-2.5 px-3 font-mono text-emerald-300 font-bold">Qn+1 = T ⊕ Qn</td>
                        <td className="py-2.5 px-3 text-amber-300">Toggles state when T = 1; Holds state when T = 0</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>Memory Element: Stores 1 bit of information (bistable multivibrator).</span>
                  </div>
                  <span className="font-mono text-[11px] text-sky-400">Symbols: Q (Output) · Q̄ (Complement) · n (Present) · n+1 (Next)</span>
                </div>
              </div>
            </div>
          ) : (
            /* Logic Gates Chart View */
            <div className="w-full flex flex-col items-center gap-4">
              <div className="w-full bg-slate-900/90 rounded-2xl border border-slate-800 p-4 flex flex-col items-center relative overflow-hidden shadow-xl">
                <div className="w-full flex items-center justify-between pb-3 mb-3 border-b border-slate-800 text-xs text-slate-300">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-white text-sm">Logic Gates Reference Chart Sheet</span>
                    <span className="text-slate-400 font-mono text-[11px]">
                      (AND, OR, NOT, BUFFER, NAND, NOR, XOR, XNOR)
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setZoomLevel(prev => Math.max(60, prev - 15))}
                      className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors"
                      title="Zoom Out"
                    >
                      <ZoomOut className="w-4 h-4" />
                    </button>
                    <span className="font-mono text-xs text-sky-400 w-12 text-center">
                      {zoomLevel}%
                    </span>
                    <button
                      onClick={() => setZoomLevel(prev => Math.min(180, prev + 15))}
                      className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors"
                      title="Zoom In"
                    >
                      <ZoomIn className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => setZoomLevel(100)}
                      className="px-2 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 font-mono text-xs"
                      title="Reset Zoom"
                    >
                      Reset
                    </button>
                  </div>
                </div>

                <div className="w-full overflow-auto max-h-[62vh] flex items-center justify-center p-2 bg-slate-950/80 rounded-xl">
                  <img
                    src="/logic-gates-chart.jpg"
                    alt="Symbols and Truth Tables of Common Logic Gates"
                    style={{ transform: `scale(${zoomLevel / 100})`, transformOrigin: 'top center' }}
                    className="max-h-[75vh] w-auto object-contain rounded-lg shadow-2xl transition-transform duration-150 border border-slate-800 bg-white"
                  />
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3.5 bg-slate-950 border-t border-slate-800 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <Info className="w-4 h-4 text-sky-400" />
            <span>
              {activeChart === 'flipflops'
                ? 'Flip-Flops Chart Sheet: Authentic study sheet matching sequential logic syllabus.'
                : 'Logic Gates Chart Sheet: IEEE standard symbols, IEC shapes, and boolean functions.'}
            </span>
          </div>

          <div className="flex items-center gap-2.5">
            <a
              href={activeChart === 'flipflops' ? '/flip-flops-chart.png' : '/logic-gates-chart.jpg'}
              target="_blank"
              rel="noreferrer"
              className="px-3.5 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 rounded-lg font-semibold inline-flex items-center gap-1.5 transition-colors"
            >
              <ExternalLink className="w-3.5 h-3.5 text-sky-400" />
              <span>Open Image in New Tab</span>
            </a>

            <a
              href={activeChart === 'flipflops' ? '/flip-flops-chart.png' : '/logic-gates-chart.jpg'}
              download={activeChart === 'flipflops' ? 'FLIP_FLOPS_CHART.png' : 'LOGIC_GATES_CHART.jpg'}
              className="px-4 py-1.5 bg-sky-600 hover:bg-sky-500 text-white rounded-lg font-bold inline-flex items-center gap-1.5 transition-colors shadow-xs"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download Chart Image</span>
            </a>

            <button
              onClick={onClose}
              className="px-3.5 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-lg font-semibold transition-colors cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
