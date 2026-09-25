import React, { useState } from 'react';
import {
  X,
  Maximize2,
  ZoomIn,
  ZoomOut,
  ExternalLink,
  Zap,
  Sparkles,
  Info
} from 'lucide-react';

export const GATE_KEYS = ['AND', 'OR', 'NOT', 'BUFFER', 'NAND', 'NOR', 'XOR', 'XNOR'] as const;
export type GateKey = typeof GATE_KEYS[number];

export function isGateSearchQuery(query: string): { isGate: boolean; matchedGate?: GateKey } {
  const q = query.trim().toLowerCase();
  if (!q) return { isGate: false };

  // Exact or contains logic gate terms
  if (q.includes('xnor')) return { isGate: true, matchedGate: 'XNOR' };
  if (q.includes('xor') || q.includes('ex-or') || q.includes('exor')) return { isGate: true, matchedGate: 'XOR' };
  if (q.includes('nand')) return { isGate: true, matchedGate: 'NAND' };
  if (q.includes('nor')) return { isGate: true, matchedGate: 'NOR' };
  if (q.includes('buffer')) return { isGate: true, matchedGate: 'BUFFER' };
  if (q.includes('not') || q.includes('inverter')) return { isGate: true, matchedGate: 'NOT' };
  if (q === 'and' || q.includes('and gate') || q.includes('and-gate')) return { isGate: true, matchedGate: 'AND' };
  if (q === 'or' || q.includes('or gate') || q.includes('or-gate')) return { isGate: true, matchedGate: 'OR' };
  if (q.includes('gate') || q.includes('gates') || q.includes('truth table') || q.includes('symbol')) {
    return { isGate: true };
  }

  return { isGate: false };
}

interface LogicGateCardProps {
  matchedGate?: GateKey;
  onLaunchSimulator?: (circuitId: string) => void;
  onClose?: () => void;
}

export const LogicGateSearchCard: React.FC<LogicGateCardProps> = ({
  matchedGate,
  onLaunchSimulator,
  onClose
}) => {
  const [selectedGate, setSelectedGate] = useState<GateKey>(matchedGate || 'AND');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const gateDetails: Record<GateKey, {
    title: string;
    expression: string;
    circuitId?: string;
    description: string;
    table: { a: number; b?: number; out: number }[];
  }> = {
    AND: {
      title: 'AND GATE',
      expression: 'Z = A . B',
      circuitId: 'gate-and',
      description: 'Output is HIGH (1) only when all inputs are HIGH (1).',
      table: [
        { a: 0, b: 0, out: 0 },
        { a: 0, b: 1, out: 0 },
        { a: 1, b: 0, out: 0 },
        { a: 1, b: 1, out: 1 }
      ]
    },
    OR: {
      title: 'OR GATE',
      expression: 'Z = A + B',
      circuitId: 'gate-or',
      description: 'Output is HIGH (1) if at least one input is HIGH (1).',
      table: [
        { a: 0, b: 0, out: 0 },
        { a: 0, b: 1, out: 1 },
        { a: 1, b: 0, out: 1 },
        { a: 1, b: 1, out: 1 }
      ]
    },
    NOT: {
      title: 'NOT GATE (Inverter)',
      expression: 'Z = A\' (A-bar)',
      circuitId: 'gate-not',
      description: 'Inverts input logic: 0 becomes 1, and 1 becomes 0.',
      table: [
        { a: 0, out: 1 },
        { a: 1, out: 0 }
      ]
    },
    BUFFER: {
      title: 'BUFFER',
      expression: 'Z = A',
      description: 'Passes logic state unchanged; provides electrical signal amplification.',
      table: [
        { a: 0, out: 0 },
        { a: 1, out: 1 }
      ]
    },
    NAND: {
      title: 'NAND GATE (Universal Gate)',
      expression: 'Z = (A . B)\'',
      circuitId: 'gate-nand',
      description: 'Inverted AND: Output is LOW (0) only when all inputs are HIGH (1).',
      table: [
        { a: 0, b: 0, out: 1 },
        { a: 0, b: 1, out: 1 },
        { a: 1, b: 0, out: 1 },
        { a: 1, b: 1, out: 0 }
      ]
    },
    NOR: {
      title: 'NOR GATE (Universal Gate)',
      expression: 'Z = (A + B)\'',
      circuitId: 'gate-nor',
      description: 'Inverted OR: Output is HIGH (1) only when all inputs are LOW (0).',
      table: [
        { a: 0, b: 0, out: 1 },
        { a: 0, b: 1, out: 0 },
        { a: 1, b: 0, out: 0 },
        { a: 1, b: 1, out: 0 }
      ]
    },
    XOR: {
      title: 'XOR GATE (Exclusive-OR)',
      expression: 'Z = A ⊕ B = A\'B + AB\'',
      circuitId: 'gate-xor',
      description: 'Output is HIGH (1) when inputs are different (odd parity).',
      table: [
        { a: 0, b: 0, out: 0 },
        { a: 0, b: 1, out: 1 },
        { a: 1, b: 0, out: 1 },
        { a: 1, b: 1, out: 0 }
      ]
    },
    XNOR: {
      title: 'XNOR GATE (Equivalence)',
      expression: 'Z = (A ⊕ B)\' = AB + A\'B\'',
      description: 'Output is HIGH (1) when both inputs are identical.',
      table: [
        { a: 0, b: 0, out: 1 },
        { a: 0, b: 1, out: 0 },
        { a: 1, b: 0, out: 0 },
        { a: 1, b: 1, out: 1 }
      ]
    }
  };

  const current = gateDetails[selectedGate];

  return (
    <div className="bg-white border-2 border-sky-400 rounded-2xl p-4 sm:p-5 shadow-xl my-4 animate-in fade-in zoom-in-95 duration-200">
      {/* Top Banner */}
      <div className="flex items-center justify-between border-b border-slate-200 pb-3 mb-3">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-xl bg-sky-600 flex items-center justify-center text-white shadow-xs">
            <Zap className="w-4 h-4 fill-white" />
          </div>
          <div>
            <h3 className="text-sm sm:text-base font-extrabold text-slate-900 leading-tight">
              Symbols & Truth Tables of Common Logic Gates
            </h3>
            <p className="text-[11px] text-sky-700 font-medium">
              Logic gate search match: Displaying diagrams, circuit symbols & truth tables
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsModalOpen(true)}
            className="px-2.5 py-1 bg-sky-50 hover:bg-sky-100 text-sky-700 rounded-lg text-xs font-semibold flex items-center gap-1 transition-colors cursor-pointer border border-sky-200"
            title="View Full High-Resolution Chart Image"
          >
            <Maximize2 className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Enlarge Chart</span>
          </button>
          {onClose && (
            <button
              onClick={onClose}
              className="p-1 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-100 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>

      {/* Gate Selector Pills */}
      <div className="flex flex-wrap items-center gap-1.5 mb-4">
        {GATE_KEYS.map(g => (
          <button
            key={g}
            onClick={() => setSelectedGate(g)}
            className={`px-3 py-1 rounded-lg text-xs font-mono font-bold transition-all cursor-pointer ${
              selectedGate === g
                ? 'bg-sky-600 text-white shadow-xs scale-105'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200'
            }`}
          >
            {g}
          </button>
        ))}
      </div>

      {/* Two Column Layout: Left Image Preview, Right Truth Table & Details */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-5 items-center">
        {/* Left: Diagram & Image Card */}
        <div
          onClick={() => setIsModalOpen(true)}
          className="md:col-span-7 bg-slate-50 border border-slate-200 rounded-xl p-3 flex flex-col items-center justify-center cursor-pointer group hover:border-sky-400 hover:shadow-md transition-all relative overflow-hidden"
          title="Click to view full chart image in high resolution"
        >
          <div className="w-full flex items-center justify-between text-[11px] font-mono text-slate-500 mb-2">
            <span className="font-bold text-sky-700 bg-sky-50 px-2 py-0.5 rounded border border-sky-100">
              {current.title}
            </span>
            <span className="text-slate-400 flex items-center gap-1 group-hover:text-sky-600">
              <Maximize2 className="w-3 h-3" /> Click to enlarge chart
            </span>
          </div>

          <div className="w-full max-h-56 overflow-hidden rounded-lg bg-white border border-slate-200 p-2 flex items-center justify-center">
            <img
              src="/logic-gates-chart.jpg"
              alt="Symbols and Truth Tables of Common Logic Gates"
              className="max-h-52 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </div>

          <span className="text-[10px] text-slate-400 mt-2 text-center block">
            Official Logic Gates Diagram: AND, OR, NOT, BUFFER, NAND, NOR, XOR, XNOR
          </span>
        </div>

        {/* Right: Truth Table and Information */}
        <div className="md:col-span-5 space-y-3">
          <div className="bg-slate-900 text-white p-3 rounded-xl border border-slate-800">
            <div className="text-[10px] text-sky-400 font-mono uppercase font-bold">Boolean Function</div>
            <div className="text-lg font-extrabold font-mono text-amber-300 mt-0.5">
              {current.expression}
            </div>
            <p className="text-xs text-slate-300 mt-1 leading-relaxed">
              {current.description}
            </p>
          </div>

          {/* Truth Table */}
          <div className="border border-sky-200 rounded-xl overflow-hidden shadow-xs">
            <table className="w-full text-center text-xs font-mono">
              <thead className="bg-sky-500 text-white font-bold">
                <tr>
                  <th className="py-1.5 px-3">Input A</th>
                  {current.table[0].b !== undefined && <th className="py-1.5 px-3">Input B</th>}
                  <th className="py-1.5 px-3 bg-sky-600">Output (Z)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 bg-white">
                {current.table.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50">
                    <td className="py-1.5 px-3 font-semibold text-slate-800">{row.a}</td>
                    {row.b !== undefined && (
                      <td className="py-1.5 px-3 font-semibold text-slate-800">{row.b}</td>
                    )}
                    <td className={`py-1.5 px-3 font-extrabold ${
                      row.out === 1 ? 'text-emerald-600 bg-emerald-50/50' : 'text-slate-500'
                    }`}>
                      {row.out}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2 pt-1">
            {current.circuitId && onLaunchSimulator && (
              <button
                onClick={() => onLaunchSimulator(current.circuitId!)}
                className="flex-1 py-2 px-3 bg-sky-600 hover:bg-sky-500 text-white rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition-colors shadow-xs cursor-pointer"
              >
                <Zap className="w-3.5 h-3.5" />
                <span>Simulate {selectedGate} Gate</span>
              </button>
            )}
            <button
              onClick={() => setIsModalOpen(true)}
              className="px-3 py-2 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-xl text-xs font-semibold flex items-center gap-1 transition-colors cursor-pointer border border-slate-200"
            >
              <Maximize2 className="w-3.5 h-3.5" />
              <span>Full Image</span>
            </button>
          </div>
        </div>
      </div>

      {/* FULL SCREEN IMAGE MODAL */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-slate-950/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-150">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[92vh] flex flex-col overflow-hidden shadow-2xl border border-slate-300">
            {/* Modal Header */}
            <div className="px-5 py-3.5 bg-slate-900 text-white flex items-center justify-between border-b border-slate-800">
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-sky-400" />
                <span className="font-bold text-sm">
                  SYMBOLS & TRUTH TABLES OF COMMON LOGIC GATES
                </span>
              </div>
              <div className="flex items-center gap-2">
                <a
                  href="/logic-gates-chart.jpg"
                  target="_blank"
                  rel="noreferrer"
                  className="px-2.5 py-1 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded text-xs inline-flex items-center gap-1"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Open in Tab</span>
                </a>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Modal Body: Full Image */}
            <div className="flex-1 overflow-auto p-4 sm:p-6 bg-slate-100 flex items-center justify-center">
              <img
                src="/logic-gates-chart.jpg"
                alt="Symbols and Truth Tables of Common Logic Gates Chart"
                className="max-h-[75vh] w-auto object-contain rounded-xl shadow-lg border border-slate-300 bg-white p-2"
              />
            </div>

            {/* Modal Footer */}
            <div className="px-5 py-3 bg-white border-t border-slate-200 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-600">
              <span>Covers all 8 basic gates: AND, OR, NOT, BUFFER, NAND, NOR, XOR, XNOR</span>
              <button
                onClick={() => setIsModalOpen(false)}
                className="px-4 py-1.5 bg-slate-900 hover:bg-slate-800 text-white rounded-lg font-semibold cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
