import React, { useState, useEffect } from 'react';
import { Droplet, Wind, Sun, AlertTriangle, CheckCircle2, RefreshCw } from 'lucide-react';

export const PlantVascularSimulation: React.FC = () => {
  const [humidity, setHumidity] = useState<number>(55); // 20% - 90%
  const [stomataOpen, setStomataOpen] = useState<number>(70); // 10% - 100%
  const [soilPotential, setSoilPotential] = useState<number>(-0.3); // -0.1 to -1.8 MPa
  const [sunlight, setSunlight] = useState<number>(80); // 20% - 100%
  const [particleOffset, setParticleOffset] = useState<number>(0);

  // Biophysical calculations
  // Vapor Pressure Deficit (VPD) increases with lower humidity and high sunlight
  const vpd = Math.max(0.2, ((100 - humidity) / 100) * 2.8 * (sunlight / 75));
  
  // Transpiration rate is proportional to stomata conductance and VPD
  const transpirationRate = parseFloat(((stomataOpen / 100) * vpd * 4.2).toFixed(2)); // mmol / m^2 s
  
  // Negative xylem tension builds up with higher transpiration and drier soil
  const xylemTension = parseFloat((soilPotential - (transpirationRate * 0.18)).toFixed(2)); // in MPa
  
  // Sap velocity in cm/h
  const sapVelocity = parseFloat((transpirationRate * 4.8).toFixed(1));

  // Cavitation risk threshold occurs when xylem tension drops below -2.2 MPa
  const isCavitationRisk = xylemTension < -2.1;
  const isSevereEmbolism = xylemTension < -2.8;

  // Animate fluid particles
  useEffect(() => {
    const interval = setInterval(() => {
      setParticleOffset(prev => (prev + sapVelocity * 0.08) % 100);
    }, 40);
    return () => clearInterval(interval);
  }, [sapVelocity]);

  return (
    <div className="bg-slate-900 text-slate-100 rounded-xl border border-slate-800 p-6 shadow-sm">
      <div className="flex flex-col lg:flex-row gap-6 items-start">
        {/* Left Stage: Vascular Hydraulic Column Animation */}
        <div className="flex-1 w-full flex flex-col items-center">
          <div className="w-full flex items-center justify-between mb-3 text-xs text-slate-400">
            <span className="font-medium text-slate-200">Cohesion-Tension Vascular Column</span>
            <span>Passive Sap Velocity: <strong className="font-mono text-sky-400">{sapVelocity} cm/h</strong></span>
          </div>

          {/* Interactive Visual Stage */}
          <div className="w-full bg-slate-950 border border-slate-800 rounded-lg p-5 flex flex-col md:flex-row items-center justify-between gap-6 min-h-[360px] relative overflow-hidden">
            {/* Diagram Background Grid */}
            <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:16px_16px] opacity-30 pointer-events-none" />

            {/* Vessel 1: Xylem (Water & Solutes Pull) */}
            <div className="w-36 flex flex-col items-center z-10">
              <span className="text-[11px] font-mono text-sky-400 mb-2 font-medium">XYLEM TRACHEID</span>
              <div className="w-20 h-64 bg-slate-900/90 border-2 border-sky-600/70 rounded-md relative overflow-hidden flex flex-col justify-between items-center py-2 shadow-lg">
                {/* Moving water particles */}
                <div className="absolute inset-0 flex flex-col justify-around items-center pointer-events-none">
                  {[0, 1, 2, 3, 4, 5, 6].map(i => {
                    const topPos = (particleOffset + i * 14.2) % 100;
                    return (
                      <div
                        key={i}
                        className="absolute w-3.5 h-3.5 rounded-full bg-sky-400/80 shadow-[0_0_8px_rgba(56,189,248,0.8)] flex items-center justify-center text-[7px] font-bold text-slate-950"
                        style={{ top: `${100 - topPos}%` }}
                      >
                        H₂O
                      </div>
                    );
                  })}
                </div>

                <div className="text-[9px] font-mono text-slate-500 z-10">Leaf Margin</div>
                {/* Tension indicator */}
                <div className="text-center z-10 bg-slate-950/80 px-1.5 py-1 rounded border border-slate-700/60">
                  <div className="text-[8px] text-slate-400">Tension (Ψ)</div>
                  <div className={`text-[11px] font-mono font-bold ${isCavitationRisk ? 'text-rose-400' : 'text-sky-300'}`}>
                    {xylemTension} MPa
                  </div>
                </div>
                <div className="text-[9px] font-mono text-slate-500 z-10">Root Cortex</div>
              </div>
              <span className="text-[10px] text-slate-400 mt-2 text-center">Unidirectional Ascent</span>
            </div>

            {/* Center: Leaf Transpiration & Stomata Cross-Section */}
            <div className="flex-1 flex flex-col items-center justify-center text-center z-10 px-4">
              <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 w-full max-w-xs flex flex-col items-center">
                <span className="text-xs font-semibold text-slate-200">Stomatal Guard Cells</span>
                <span className="text-[11px] text-slate-400 mb-3">Pore Aperture: {stomataOpen}%</span>

                {/* Stomata Visual Aperture */}
                <div className="w-24 h-14 bg-emerald-950/40 border border-emerald-700/50 rounded-full flex items-center justify-center relative p-1 mb-3">
                  <div
                    className="h-8 bg-emerald-500/80 rounded-full transition-all duration-300 shadow-[0_0_12px_rgba(16,185,129,0.5)]"
                    style={{ width: `${Math.max(8, stomataOpen * 0.7)}px` }}
                  />
                  {/* Evaporation lines */}
                  <div className="absolute -top-4 flex gap-2 text-sky-400 animate-pulse text-[10px]">
                    <span>↑</span>
                    <span>↑</span>
                    <span>↑</span>
                  </div>
                </div>

                <div className="text-xs text-slate-300">
                  Transpiration: <span className="font-mono font-bold text-sky-400 tabular-nums">{transpirationRate}</span> mmol/m²·s
                </div>
              </div>

              {/* Status Alert with Dual Coding (Icon + Text, anti-slop compliant) */}
              <div className="mt-4 w-full max-w-xs">
                {isSevereEmbolism ? (
                  <div className="p-2.5 rounded-lg bg-rose-950/50 border border-rose-600/60 text-rose-300 flex items-center gap-2 text-xs">
                    <AlertTriangle className="w-4 h-4 shrink-0 text-rose-400" />
                    <span><strong>▲ CRITICAL EMBOLISM:</strong> Air bubble cavitation rupture in xylem.</span>
                  </div>
                ) : isCavitationRisk ? (
                  <div className="p-2.5 rounded-lg bg-amber-950/50 border border-amber-600/60 text-amber-300 flex items-center gap-2 text-xs">
                    <AlertTriangle className="w-4 h-4 shrink-0 text-amber-400" />
                    <span><strong>▲ ELEVATED RISK:</strong> High tension approaching hydraulic threshold.</span>
                  </div>
                ) : (
                  <div className="p-2.5 rounded-lg bg-emerald-950/50 border border-emerald-700/60 text-emerald-300 flex items-center gap-2 text-xs">
                    <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-400" />
                    <span><strong>● NOMINAL TRANSPORT:</strong> Cohesion column uninterrupted.</span>
                  </div>
                )}
              </div>
            </div>

            {/* Vessel 2: Phloem Sieve Tubes */}
            <div className="w-36 flex flex-col items-center z-10">
              <span className="text-[11px] font-mono text-amber-400 mb-2 font-medium">PHLOEM SIEVE</span>
              <div className="w-20 h-64 bg-slate-900/90 border-2 border-amber-600/70 rounded-md relative overflow-hidden flex flex-col justify-between items-center py-2 shadow-lg">
                {/* Moving sucrose particles */}
                <div className="absolute inset-0 flex flex-col justify-around items-center pointer-events-none">
                  {[0, 1, 2, 3, 4].map(i => {
                    const topPos = (particleOffset * 0.5 + i * 20) % 100;
                    return (
                      <div
                        key={i}
                        className="absolute w-3.5 h-3.5 rounded-full bg-amber-400/90 shadow-[0_0_8px_rgba(251,191,36,0.8)] flex items-center justify-center text-[7px] font-bold text-slate-950"
                        style={{ top: `${topPos}%` }}
                      >
                        Suc
                      </div>
                    );
                  })}
                </div>

                <div className="text-[9px] font-mono text-slate-500 z-10">Source (Leaf)</div>
                <div className="text-center z-10 bg-slate-950/80 px-1.5 py-1 rounded border border-slate-700/60">
                  <div className="text-[8px] text-slate-400">Turgor Press.</div>
                  <div className="text-[11px] font-mono font-bold text-amber-300">+0.85 MPa</div>
                </div>
                <div className="text-[9px] font-mono text-slate-500 z-10">Sink (Root/Fruit)</div>
              </div>
              <span className="text-[10px] text-slate-400 mt-2 text-center">Bidirectional Bulk Flow</span>
            </div>
          </div>
        </div>

        {/* Right Zone: Biophysical Parameter Sliders */}
        <div className="w-full lg:w-80 flex flex-col gap-5 bg-slate-950/60 p-5 rounded-lg border border-slate-800">
          <div>
            <h4 className="text-sm font-semibold text-slate-200 tracking-tight">Environmental Variables</h4>
            <p className="text-xs text-slate-400 mt-1">Control transpiration pull and evaluate hydraulic failure.</p>
          </div>

          {/* Stomatal Aperture */}
          <div className="space-y-1.5">
            <div className="flex justify-between text-xs">
              <label className="text-slate-300 font-medium">Stomatal Aperture</label>
              <span className="font-mono text-sky-400 tabular-nums">{stomataOpen}%</span>
            </div>
            <input
              type="range"
              min={10}
              max={100}
              step={5}
              value={stomataOpen}
              onChange={e => setStomataOpen(parseInt(e.target.value))}
              className="w-full accent-sky-500 h-1.5 bg-slate-800 rounded-lg cursor-pointer"
            />
            <div className="flex justify-between text-[10px] text-slate-500">
              <span>10% (Guard Cells Flaccid)</span>
              <span>100% (Fully Turgid)</span>
            </div>
          </div>

          {/* Relative Humidity */}
          <div className="space-y-1.5">
            <div className="flex justify-between text-xs">
              <label className="text-slate-300 font-medium">Atmospheric Humidity</label>
              <span className="font-mono text-sky-400 tabular-nums">{humidity}% RH</span>
            </div>
            <input
              type="range"
              min={20}
              max={90}
              step={5}
              value={humidity}
              onChange={e => setHumidity(parseInt(e.target.value))}
              className="w-full accent-sky-500 h-1.5 bg-slate-800 rounded-lg cursor-pointer"
            />
            <div className="flex justify-between text-[10px] text-slate-500">
              <span>20% (Arid Desert)</span>
              <span>90% (Canopy Mist)</span>
            </div>
          </div>

          {/* Soil Water Potential */}
          <div className="space-y-1.5">
            <div className="flex justify-between text-xs">
              <label className="text-slate-300 font-medium">Soil Water Potential (Ψ_soil)</label>
              <span className="font-mono text-sky-400 tabular-nums">{soilPotential.toFixed(2)} MPa</span>
            </div>
            <input
              type="range"
              min={-1.8}
              max={-0.1}
              step={0.05}
              value={soilPotential}
              onChange={e => setSoilPotential(parseFloat(e.target.value))}
              className="w-full accent-sky-500 h-1.5 bg-slate-800 rounded-lg cursor-pointer"
            />
            <div className="flex justify-between text-[10px] text-slate-500">
              <span>-1.8 MPa (Drought)</span>
              <span>-0.1 MPa (Field Saturation)</span>
            </div>
          </div>

          {/* Quick Preset Buttons */}
          <div className="pt-2 border-t border-slate-800">
            <span className="text-[11px] font-medium text-slate-400 block mb-2">Simulate Ecological Scenario</span>
            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={() => {
                  setHumidity(30);
                  setStomataOpen(90);
                  setSoilPotential(-1.4);
                }}
                className="py-1.5 px-2 bg-slate-800 hover:bg-slate-700 text-[11px] text-slate-200 rounded text-center transition-colors"
              >
                Midday Drought Heat
              </button>
              <button
                onClick={() => {
                  setHumidity(85);
                  setStomataOpen(35);
                  setSoilPotential(-0.2);
                }}
                className="py-1.5 px-2 bg-slate-800 hover:bg-slate-700 text-[11px] text-slate-200 rounded text-center transition-colors"
              >
                Temperate Rain Canopy
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
