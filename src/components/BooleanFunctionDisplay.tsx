import React from 'react';
import { BooleanTransferFunction } from '../types/digitalElectronics';
import { FunctionSquare, CheckCircle2, BookOpen } from 'lucide-react';

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
      <div className="flex items-center gap-2 bg-slate-950 px-3 py-1.5 rounded-lg border border-slate-800 text-xs font-mono">
        <span className="text-slate-400 font-sans text-[11px] font-semibold">Boolean Function:</span>
        <span className="text-sky-300 font-bold tracking-wide">{primaryEquation}</span>
      </div>
    );
  }

  return (
    <div className="bg-slate-950 rounded-xl border border-sky-500/30 p-4 shadow-sm space-y-3">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-slate-800/80 pb-2">
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 rounded-md bg-sky-600 flex items-center justify-center text-white">
            <FunctionSquare className="w-3.5 h-3.5" />
          </div>
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-sky-400">
            Boolean Transfer Function
          </span>
        </div>
        <span className="text-[10px] font-mono bg-sky-950 text-sky-300 px-2 py-0.5 rounded border border-sky-800">
          Standard Logic Notation
        </span>
      </div>

      {/* Primary Mathematical Equation */}
      <div className="bg-slate-900/90 rounded-lg p-3 border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
        <div>
          <span className="text-[10px] text-slate-400 uppercase tracking-widest font-mono block">
            Primary Transfer Equation:
          </span>
          <div className="text-lg sm:text-xl font-bold font-mono text-amber-300 tracking-wider mt-0.5 select-all">
            {primaryEquation}
          </div>
        </div>

        {details?.characteristicEquation && (
          <div className="sm:text-right">
            <span className="text-[10px] text-slate-400 uppercase tracking-widest font-mono block">
              Characteristic Eq:
            </span>
            <span className="text-sm font-mono text-emerald-400 font-bold">
              {details.characteristicEquation}
            </span>
          </div>
        )}
      </div>

      {/* Expanded Forms & De Morgan's Equivalents */}
      {(details?.deMorganForm || details?.expandedForm) && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono">
          {details.deMorganForm && (
            <div className="p-2.5 bg-slate-900/60 rounded-lg border border-slate-800/70">
              <span className="text-[10px] text-purple-400 font-sans font-bold uppercase block">
                De Morgan's Theorem Form:
              </span>
              <span className="text-slate-200 font-bold mt-0.5 block">{details.deMorganForm}</span>
            </div>
          )}

          {details.expandedForm && (
            <div className="p-2.5 bg-slate-900/60 rounded-lg border border-slate-800/70">
              <span className="text-[10px] text-sky-400 font-sans font-bold uppercase block">
                Sum of Products (SOP) Form:
              </span>
              <span className="text-slate-200 font-bold mt-0.5 block">{details.expandedForm}</span>
            </div>
          )}
        </div>
      )}

      {/* Logical Rule in Words */}
      {details?.wordDescription && (
        <div className="text-xs text-slate-300 leading-relaxed bg-slate-900/40 p-2.5 rounded-lg border border-slate-800/60 flex items-start gap-2">
          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
          <div>
            <strong className="text-white font-semibold">Rule: </strong>
            <span>{details.wordDescription}</span>
          </div>
        </div>
      )}
    </div>
  );
};
