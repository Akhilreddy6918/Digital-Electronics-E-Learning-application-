import React from 'react';
import { BooleanTransferFunction } from '../types/digitalElectronics';
import { FunctionSquare, CheckCircle2, Sparkles, BookOpen } from 'lucide-react';

interface BooleanFunctionDisplayProps {
  expression?: string;
  details?: BooleanTransferFunction;
  circuitName: string;
  compact?: boolean;
}

export const BooleanFunctionDisplay: React.FC<BooleanFunctionDisplayProps> = ({
  expression,
  details,
  circuitName,
  compact = false
}) => {
  const primaryEquation = details?.standardForm || expression || '';

  if (!primaryEquation) return null;

  if (compact) {
    return (
      <div className="flex flex-wrap items-center gap-2 bg-slate-950 px-3 py-1.5 rounded-lg border border-sky-500/40 text-xs">
        <span className="text-sky-400 font-mono text-[11px] font-bold uppercase tracking-wider">
          Boolean Transfer Function:
        </span>
        <span className="text-amber-300 font-mono font-extrabold text-sm tracking-wide bg-slate-900 px-2 py-0.5 rounded border border-slate-800">
          {primaryEquation}
        </span>
      </div>
    );
  }

  return (
    <div className="bg-slate-950 rounded-xl border border-sky-500/40 p-4 sm:p-5 shadow-md space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-slate-800 pb-3">
        <div className="flex items-center gap-2.5">
          <div className="w-7 h-7 rounded-lg bg-sky-600 flex items-center justify-center text-white shadow-xs">
            <FunctionSquare className="w-4 h-4" />
          </div>
          <div>
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-sky-400">
              Boolean Transfer Function
            </h4>
            <span className="text-[11px] text-slate-400">
              Mathematical relationship between input switching variables & output
            </span>
          </div>
        </div>
        <span className="text-[10px] font-mono bg-sky-950 text-sky-300 px-2.5 py-1 rounded-md border border-sky-800 font-bold">
          Standard Logic Notation
        </span>
      </div>

      {/* Primary Mathematical Transfer Equation */}
      <div className="bg-slate-900 rounded-xl p-4 border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <span className="text-[10px] text-slate-400 uppercase tracking-widest font-mono font-bold block mb-1">
            Primary Transfer Function (Output Equation):
          </span>
          <div className="text-xl sm:text-2xl font-black font-mono text-amber-300 tracking-wider select-all bg-slate-950/80 px-3 py-1.5 rounded-lg border border-amber-500/30 inline-block">
            {primaryEquation}
          </div>
        </div>

        {details?.characteristicEquation && (
          <div className="sm:text-right border-t sm:border-t-0 sm:border-l border-slate-800 pt-2 sm:pt-0 sm:pl-4">
            <span className="text-[10px] text-slate-400 uppercase tracking-widest font-mono font-bold block mb-1">
              Characteristic Equation:
            </span>
            <span className="text-base font-mono text-emerald-400 font-bold bg-slate-950/80 px-2.5 py-1 rounded-md border border-emerald-500/30 inline-block">
              {details.characteristicEquation}
            </span>
          </div>
        )}
      </div>

      {/* Expanded Forms & De Morgan's Equivalents */}
      {(details?.deMorganForm || details?.expandedForm) && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono">
          {details.deMorganForm && (
            <div className="p-3 bg-slate-900/80 rounded-xl border border-purple-500/30">
              <span className="text-[10px] text-purple-400 font-sans font-bold uppercase tracking-wider block mb-1">
                De Morgan's Theorem Dual Form:
              </span>
              <span className="text-purple-200 font-bold text-sm block">
                {details.deMorganForm}
              </span>
            </div>
          )}

          {details.expandedForm && (
            <div className="p-3 bg-slate-900/80 rounded-xl border border-sky-500/30">
              <span className="text-[10px] text-sky-400 font-sans font-bold uppercase tracking-wider block mb-1">
                Sum of Products (SOP) Expansion:
              </span>
              <span className="text-sky-200 font-bold text-sm block">
                {details.expandedForm}
              </span>
            </div>
          )}
        </div>
      )}

      {/* Logical Rule in Plain Words */}
      {details?.wordDescription && (
        <div className="text-xs text-slate-200 leading-relaxed bg-slate-900/60 p-3 rounded-xl border border-slate-800 flex items-start gap-2.5">
          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
          <div>
            <strong className="text-emerald-400 font-bold">Transfer Rule: </strong>
            <span>{details.wordDescription}</span>
          </div>
        </div>
      )}
    </div>
  );
};
