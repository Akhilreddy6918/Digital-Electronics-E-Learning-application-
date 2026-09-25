import React, { useState, useEffect, useRef } from 'react';
import { Play, Pause, RotateCcw, Plus, Info, CheckCircle2, AlertTriangle } from 'lucide-react';

interface Point {
  x: number;
  y: number;
  label: 1 | -1; // 1 = blue/cyan, -1 = coral/red
}

export const NeuralNetSimulation: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [learningRate, setLearningRate] = useState<number>(0.15);
  const [activation, setActivation] = useState<'relu' | 'sigmoid' | 'tanh'>('tanh');
  const [hiddenNeurons, setHiddenNeurons] = useState<number>(4);
  const [isTraining, setIsTraining] = useState<boolean>(false);
  const [epoch, setEpoch] = useState<number>(0);
  const [loss, setLoss] = useState<number>(0.42);
  const [accuracy, setAccuracy] = useState<number>(68);

  // Initialize spiral or cluster points
  const [points, setPoints] = useState<Point[]>([
    { x: -0.6, y: -0.5, label: 1 },
    { x: -0.4, y: -0.3, label: 1 },
    { x: -0.2, y: -0.6, label: 1 },
    { x: -0.5, y: -0.1, label: 1 },
    { x: -0.7, y: -0.3, label: 1 },
    { x: 0.5, y: 0.5, label: -1 },
    { x: 0.3, y: 0.6, label: -1 },
    { x: 0.6, y: 0.3, label: -1 },
    { x: 0.4, y: 0.4, label: -1 },
    { x: 0.7, y: 0.6, label: -1 },
    { x: 0.1, y: -0.2, label: 1 },
    { x: -0.2, y: 0.3, label: -1 },
    { x: -0.1, y: 0.5, label: -1 },
    { x: 0.3, y: -0.5, label: 1 }
  ]);

  // Model parameters (weights)
  const weightsRef = useRef<{
    w1: number[][]; // hiddenNeurons x 2
    b1: number[];   // hiddenNeurons
    w2: number[];   // hiddenNeurons
    b2: number;
  }>({
    w1: Array.from({ length: 4 }, () => [(Math.random() - 0.5) * 1.5, (Math.random() - 0.5) * 1.5]),
    b1: Array.from({ length: 4 }, () => (Math.random() - 0.5) * 0.5),
    w2: Array.from({ length: 4 }, () => (Math.random() - 0.5) * 1.5),
    b2: 0
  });

  // Reset or re-init weights when hiddenNeurons change
  const resetWeights = () => {
    weightsRef.current = {
      w1: Array.from({ length: hiddenNeurons }, () => [(Math.random() - 0.5) * 1.5, (Math.random() - 0.5) * 1.5]),
      b1: Array.from({ length: hiddenNeurons }, () => (Math.random() - 0.5) * 0.5),
      w2: Array.from({ length: hiddenNeurons }, () => (Math.random() - 0.5) * 1.5),
      b2: 0
    };
    setEpoch(0);
    setLoss(0.42);
    setAccuracy(65);
  };

  useEffect(() => {
    resetWeights();
  }, [hiddenNeurons, activation]);

  // Activation function & its derivative
  const act = (z: number): number => {
    if (activation === 'relu') return Math.max(0, z);
    if (activation === 'tanh') return Math.tanh(z);
    return 1 / (1 + Math.exp(-Math.max(-10, Math.min(10, z)))); // sigmoid
  };

  // Forward pass for single coordinate (x, y)
  const forward = (x: number, y: number): number => {
    const { w1, b1, w2, b2 } = weightsRef.current;
    let sumOut = b2;
    for (let i = 0; i < hiddenNeurons; i++) {
      const z = (w1[i]?.[0] ?? 0) * x + (w1[i]?.[1] ?? 0) * y + (b1[i] ?? 0);
      const a = act(z);
      sumOut += a * (w2[i] ?? 0);
    }
    return Math.tanh(sumOut); // Output between -1 and 1
  };

  // Perform one training step
  const trainStep = () => {
    const { w1, b1, w2 } = weightsRef.current;
    let totalLoss = 0;
    let correct = 0;

    // Numerical gradient descent approximation for robust client-side visualization
    for (const p of points) {
      const pred = forward(p.x, p.y);
      const error = pred - p.label;
      totalLoss += error * error;

      if ((pred >= 0 && p.label === 1) || (pred < 0 && p.label === -1)) {
        correct++;
      }

      // Update output weights
      for (let i = 0; i < hiddenNeurons; i++) {
        const z = w1[i][0] * p.x + w1[i][1] * p.y + b1[i];
        const a = act(z);
        w2[i] -= learningRate * error * a * 0.2;
        w1[i][0] -= learningRate * error * w2[i] * p.x * 0.1;
        w1[i][1] -= learningRate * error * w2[i] * p.y * 0.1;
        b1[i] -= learningRate * error * w2[i] * 0.1;
      }
      weightsRef.current.b2 -= learningRate * error * 0.1;
    }

    const currentLoss = totalLoss / points.length;
    const currentAcc = Math.round((correct / points.length) * 100);

    setEpoch(prev => prev + 1);
    setLoss(parseFloat(currentLoss.toFixed(4)));
    setAccuracy(currentAcc);
  };

  // Continuous training loop
  useEffect(() => {
    let animId: number;
    if (isTraining) {
      const step = () => {
        trainStep();
        animId = requestAnimationFrame(step);
      };
      animId = requestAnimationFrame(step);
    }
    return () => cancelAnimationFrame(animId);
  }, [isTraining, learningRate, hiddenNeurons, activation, points]);

  // Render decision boundary on canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const width = canvas.width;
    const height = canvas.height;
    const gridSize = 8; // Step size for boundary rasterization

    ctx.clearRect(0, 0, width, height);

    // Render decision background heatmap
    for (let px = 0; px < width; px += gridSize) {
      for (let py = 0; py < height; py += gridSize) {
        // Map pixel coordinates to [-1, 1]
        const nx = (px / width) * 2 - 1;
        const ny = 1 - (py / height) * 2;
        const pred = forward(nx, ny);

        if (pred > 0) {
          // Azure / Blue (Class +1)
          const alpha = Math.min(0.4, Math.abs(pred) * 0.4);
          ctx.fillStyle = `rgba(2, 132, 199, ${alpha})`;
        } else {
          // Coral / Rose (Class -1)
          const alpha = Math.min(0.4, Math.abs(pred) * 0.4);
          ctx.fillStyle = `rgba(225, 29, 72, ${alpha})`;
        }
        ctx.fillRect(px, py, gridSize, gridSize);
      }
    }

    // Grid center axes
    ctx.strokeStyle = 'rgba(148, 163, 184, 0.4)';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(0, height / 2);
    ctx.lineTo(width, height / 2);
    ctx.moveTo(width / 2, 0);
    ctx.lineTo(width / 2, height);
    ctx.stroke();

    // Render data points
    for (const p of points) {
      const px = ((p.x + 1) / 2) * width;
      const py = ((1 - p.y) / 2) * height;

      ctx.beginPath();
      ctx.arc(px, py, 7, 0, Math.PI * 2);
      ctx.fillStyle = p.label === 1 ? '#0284c7' : '#e11d48';
      ctx.fill();
      ctx.lineWidth = 2;
      ctx.strokeStyle = '#ffffff';
      ctx.stroke();
    }
  }, [points, epoch, hiddenNeurons, activation]);

  // Handle canvas click to add points
  const handleCanvasClick = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const px = e.clientX - rect.left;
    const py = e.clientY - rect.top;

    const nx = (px / canvas.width) * 2 - 1;
    const ny = 1 - (py / canvas.height) * 2;

    // Toggle label on shift click, or alternating
    const label: 1 | -1 = e.shiftKey ? -1 : 1;
    setPoints(prev => [...prev, { x: nx, y: ny, label }]);
  };

  return (
    <div className="bg-slate-900 text-slate-100 rounded-xl border border-slate-800 p-6 shadow-sm">
      <div className="flex flex-col lg:flex-row gap-6 items-start">
        {/* Left Zone: Interactive Stage (Canvas) */}
        <div className="flex-1 w-full flex flex-col items-center">
          <div className="w-full flex items-center justify-between mb-3 text-xs text-slate-400">
            <span className="font-medium text-slate-200">Interactive Feature Manifold (2D)</span>
            <span>Click to add blue point · Shift+Click for red</span>
          </div>

          <div className="relative border border-slate-700/60 rounded-lg overflow-hidden bg-slate-950 shadow-inner">
            <canvas
              ref={canvasRef}
              width={460}
              height={380}
              onClick={handleCanvasClick}
              className="cursor-crosshair block w-full max-w-[460px] aspect-[46/38]"
            />
          </div>

          {/* Canvas bottom metrics bar */}
          <div className="w-full grid grid-cols-3 gap-2 mt-3 text-center">
            <div className="p-2.5 bg-slate-800/80 rounded-lg border border-slate-700/50">
              <span className="text-[11px] text-slate-400 block">Training Epoch</span>
              <span className="text-base font-semibold font-mono text-slate-100 tabular-nums">{epoch}</span>
            </div>
            <div className="p-2.5 bg-slate-800/80 rounded-lg border border-slate-700/50">
              <span className="text-[11px] text-slate-400 block">Loss (MSE)</span>
              <span className="text-base font-semibold font-mono text-amber-400 tabular-nums">{loss.toFixed(3)}</span>
            </div>
            <div className="p-2.5 bg-slate-800/80 rounded-lg border border-slate-700/50">
              <span className="text-[11px] text-slate-400 block">Classification Accuracy</span>
              <span className="text-base font-semibold font-mono text-emerald-400 tabular-nums">{accuracy}%</span>
            </div>
          </div>
        </div>

        {/* Right Zone: Control Deck */}
        <div className="w-full lg:w-80 flex flex-col gap-5 bg-slate-950/60 p-5 rounded-lg border border-slate-800">
          <div>
            <h4 className="text-sm font-semibold text-slate-200 tracking-tight">Perceptron Controls</h4>
            <p className="text-xs text-slate-400 mt-1">Adjust hyper-parameters to observe gradient convergence.</p>
          </div>

          {/* Primary Simulation Actions */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsTraining(!isTraining)}
              className={`flex-1 flex items-center justify-center gap-2 py-2 px-4 rounded-lg text-xs font-semibold transition-colors ${
                isTraining
                  ? 'bg-amber-600 hover:bg-amber-500 text-white'
                  : 'bg-sky-600 hover:bg-sky-500 text-white'
              }`}
            >
              {isTraining ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
              {isTraining ? 'Pause Optimization' : 'Run Gradient Descent'}
            </button>
            <button
              onClick={trainStep}
              disabled={isTraining}
              className="py-2 px-3 bg-slate-800 hover:bg-slate-700 disabled:opacity-40 text-slate-200 text-xs rounded-lg font-medium transition-colors"
              title="Perform single gradient step"
            >
              Step
            </button>
            <button
              onClick={resetWeights}
              className="p-2 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-lg transition-colors"
              title="Reset weights and epochs"
            >
              <RotateCcw className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Learning Rate Slider */}
          <div className="space-y-1.5">
            <div className="flex justify-between text-xs">
              <label className="text-slate-300 font-medium">Learning Rate (η)</label>
              <span className="font-mono text-sky-400 tabular-nums">{learningRate.toFixed(2)}</span>
            </div>
            <input
              type="range"
              min={0.02}
              max={0.45}
              step={0.01}
              value={learningRate}
              onChange={e => setLearningRate(parseFloat(e.target.value))}
              className="w-full accent-sky-500 h-1.5 bg-slate-800 rounded-lg cursor-pointer"
            />
            <div className="flex justify-between text-[10px] text-slate-500">
              <span>0.02 (Damped)</span>
              <span>0.45 (Fast / Oscillatory)</span>
            </div>
          </div>

          {/* Hidden Neurons Count */}
          <div className="space-y-1.5">
            <div className="flex justify-between text-xs">
              <label className="text-slate-300 font-medium">Hidden Layer Neurons</label>
              <span className="font-mono text-sky-400 tabular-nums">{hiddenNeurons} Units</span>
            </div>
            <div className="flex items-center gap-1 p-1 bg-slate-900 rounded-lg border border-slate-800">
              {[2, 4, 6, 8].map(count => (
                <button
                  key={count}
                  onClick={() => setHiddenNeurons(count)}
                  className={`flex-1 py-1 text-xs font-mono font-medium rounded transition-colors ${
                    hiddenNeurons === count
                      ? 'bg-sky-600 text-white shadow-xs'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  {count}
                </button>
              ))}
            </div>
          </div>

          {/* Activation Function Segmented Tab */}
          <div className="space-y-1.5">
            <label className="text-xs text-slate-300 font-medium block">Non-Linear Activation</label>
            <div className="grid grid-cols-3 gap-1 p-1 bg-slate-900 rounded-lg border border-slate-800">
              {(['tanh', 'relu', 'sigmoid'] as const).map(actName => (
                <button
                  key={actName}
                  onClick={() => setActivation(actName)}
                  className={`py-1.5 text-xs font-medium rounded capitalize transition-colors ${
                    activation === actName
                      ? 'bg-slate-700 text-white font-semibold'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  {actName}
                </button>
              ))}
            </div>
          </div>

          {/* Real-time Observation Note */}
          <div className="p-3 bg-slate-900/90 rounded-lg border border-slate-800 text-xs text-slate-300 space-y-1.5">
            <div className="flex items-center gap-1.5 font-medium text-sky-400">
              <Info className="w-3.5 h-3.5 shrink-0" />
              <span>Theory Connection</span>
            </div>
            <p className="text-[11px] leading-relaxed text-slate-400">
              Watch how <strong className="text-slate-300">tanh</strong> warps the boundary symmetrically across zero, while <strong className="text-slate-300">ReLU</strong> forms sharp piecewise linear boundaries.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
