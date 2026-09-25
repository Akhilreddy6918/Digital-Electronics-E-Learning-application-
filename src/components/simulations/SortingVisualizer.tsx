import React, { useState, useEffect, useRef } from 'react';
import { Play, Pause, RotateCcw, SkipForward, BarChart2, CheckCircle2 } from 'lucide-react';

type SortAlgorithm = 'quicksort' | 'bubblesort' | 'selectionsort';

export const SortingVisualizer: React.FC = () => {
  const [arraySize, setArraySize] = useState<number>(20);
  const [speedMs, setSpeedMs] = useState<number>(80);
  const [algorithm, setAlgorithm] = useState<SortAlgorithm>('quicksort');
  const [array, setArray] = useState<number[]>([]);
  const [comparingIndices, setComparingIndices] = useState<number[]>([]);
  const [swappingIndices, setSwappingIndices] = useState<number[]>([]);
  const [sortedIndices, setSortedIndices] = useState<number[]>([]);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [comparisons, setComparisons] = useState<number>(0);
  const [swaps, setSwaps] = useState<number>(0);

  const abortRef = useRef<boolean>(false);

  // Generate new array
  const generateArray = (type: 'random' | 'nearly' | 'reversed' = 'random') => {
    setIsRunning(false);
    abortRef.current = true;
    setComparingIndices([]);
    setSwappingIndices([]);
    setSortedIndices([]);
    setComparisons(0);
    setSwaps(0);

    let newArr: number[] = [];
    if (type === 'random') {
      newArr = Array.from({ length: arraySize }, () => Math.floor(Math.random() * 80) + 15);
    } else if (type === 'reversed') {
      newArr = Array.from({ length: arraySize }, (_, i) => Math.floor(((arraySize - i) / arraySize) * 80) + 15);
    } else {
      newArr = Array.from({ length: arraySize }, (_, i) => Math.floor((i / arraySize) * 80) + 15);
      // swap a few
      for (let k = 0; k < 3; k++) {
        const i1 = Math.floor(Math.random() * arraySize);
        const i2 = Math.floor(Math.random() * arraySize);
        const temp = newArr[i1];
        newArr[i1] = newArr[i2];
        newArr[i2] = temp;
      }
    }
    setArray(newArr);
  };

  useEffect(() => {
    generateArray('random');
  }, [arraySize]);

  const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

  // Bubble sort implementation
  const runBubbleSort = async () => {
    abortRef.current = false;
    setIsRunning(true);
    const arr = [...array];
    const n = arr.length;
    let comps = 0;
    let swps = 0;

    for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < n - i - 1; j++) {
        if (abortRef.current) return;
        setComparingIndices([j, j + 1]);
        comps++;
        setComparisons(comps);
        await sleep(speedMs);

        if (arr[j] > arr[j + 1]) {
          if (abortRef.current) return;
          setSwappingIndices([j, j + 1]);
          swps++;
          setSwaps(swps);
          const temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
          setArray([...arr]);
          await sleep(speedMs);
          setSwappingIndices([]);
        }
      }
      setSortedIndices(prev => [...prev, n - 1 - i]);
    }
    setSortedIndices(Array.from({ length: n }, (_, i) => i));
    setComparingIndices([]);
    setIsRunning(false);
  };

  // Selection sort implementation
  const runSelectionSort = async () => {
    abortRef.current = false;
    setIsRunning(true);
    const arr = [...array];
    const n = arr.length;
    let comps = 0;
    let swps = 0;

    for (let i = 0; i < n; i++) {
      let minIdx = i;
      for (let j = i + 1; j < n; j++) {
        if (abortRef.current) return;
        setComparingIndices([minIdx, j]);
        comps++;
        setComparisons(comps);
        await sleep(speedMs);

        if (arr[j] < arr[minIdx]) {
          minIdx = j;
        }
      }

      if (minIdx !== i) {
        if (abortRef.current) return;
        setSwappingIndices([i, minIdx]);
        swps++;
        setSwaps(swps);
        const temp = arr[i];
        arr[i] = arr[minIdx];
        arr[minIdx] = temp;
        setArray([...arr]);
        await sleep(speedMs);
        setSwappingIndices([]);
      }
      setSortedIndices(prev => [...prev, i]);
    }
    setSortedIndices(Array.from({ length: n }, (_, i) => i));
    setComparingIndices([]);
    setIsRunning(false);
  };

  // QuickSort implementation
  const runQuickSort = async () => {
    abortRef.current = false;
    setIsRunning(true);
    const arr = [...array];
    let comps = 0;
    let swps = 0;

    const partition = async (low: number, high: number): Promise<number> => {
      const pivot = arr[high];
      let i = low - 1;

      for (let j = low; j < high; j++) {
        if (abortRef.current) return -1;
        setComparingIndices([j, high]);
        comps++;
        setComparisons(comps);
        await sleep(speedMs);

        if (arr[j] < pivot) {
          i++;
          if (i !== j) {
            if (abortRef.current) return -1;
            setSwappingIndices([i, j]);
            swps++;
            setSwaps(swps);
            const temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
            setArray([...arr]);
            await sleep(speedMs);
            setSwappingIndices([]);
          }
        }
      }

      const pIndex = i + 1;
      setSwappingIndices([pIndex, high]);
      swps++;
      setSwaps(swps);
      const temp = arr[pIndex];
      arr[pIndex] = arr[high];
      arr[high] = temp;
      setArray([...arr]);
      await sleep(speedMs);
      setSwappingIndices([]);
      setSortedIndices(prev => [...prev, pIndex]);
      return pIndex;
    };

    const qs = async (low: number, high: number) => {
      if (low < high) {
        const pi = await partition(low, high);
        if (pi === -1) return;
        await qs(low, pi - 1);
        await qs(pi + 1, high);
      } else if (low === high) {
        setSortedIndices(prev => [...prev, low]);
      }
    };

    await qs(0, arr.length - 1);
    setSortedIndices(Array.from({ length: arr.length }, (_, i) => i));
    setComparingIndices([]);
    setIsRunning(false);
  };

  const handleStartSort = () => {
    if (isRunning) {
      abortRef.current = true;
      setIsRunning(false);
    } else {
      if (algorithm === 'quicksort') runQuickSort();
      else if (algorithm === 'bubblesort') runBubbleSort();
      else runSelectionSort();
    }
  };

  return (
    <div className="bg-slate-900 text-slate-100 rounded-xl border border-slate-800 p-6 shadow-sm">
      <div className="flex flex-col lg:flex-row gap-6 items-start">
        {/* Left Stage: Visual Bar Array */}
        <div className="flex-1 w-full flex flex-col items-center">
          <div className="w-full flex items-center justify-between mb-3 text-xs text-slate-400">
            <span className="font-medium text-slate-200">Execution Call Stack & Memory Array</span>
            <div className="flex items-center gap-3">
              <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-xs bg-amber-400 inline-block" /> Comparing</span>
              <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-xs bg-sky-400 inline-block" /> Swapping</span>
              <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-xs bg-emerald-400 inline-block" /> Sorted</span>
            </div>
          </div>

          <div className="w-full bg-slate-950 border border-slate-800 rounded-lg p-6 min-h-[360px] flex items-end justify-center gap-1.5 relative overflow-hidden">
            {array.map((val, idx) => {
              const isComparing = comparingIndices.includes(idx);
              const isSwapping = swappingIndices.includes(idx);
              const isSorted = sortedIndices.includes(idx);

              let barColor = 'bg-slate-600';
              if (isSorted) barColor = 'bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.4)]';
              else if (isSwapping) barColor = 'bg-sky-400 shadow-[0_0_10px_rgba(56,189,248,0.6)]';
              else if (isComparing) barColor = 'bg-amber-400 shadow-[0_0_8px_rgba(251,191,36,0.6)]';

              return (
                <div key={idx} className="flex-1 max-w-[28px] flex flex-col items-center gap-1">
                  <div
                    className={`w-full rounded-t transition-all duration-75 ${barColor}`}
                    style={{ height: `${val * 3}px` }}
                  />
                  <span className="text-[9px] font-mono text-slate-500 tabular-nums">{val}</span>
                </div>
              );
            })}
          </div>

          {/* Bottom Counters */}
          <div className="w-full grid grid-cols-3 gap-2 mt-3 text-center">
            <div className="p-2.5 bg-slate-800/80 rounded-lg border border-slate-700/50">
              <span className="text-[11px] text-slate-400 block">Comparisons</span>
              <span className="text-base font-semibold font-mono text-amber-400 tabular-nums">{comparisons}</span>
            </div>
            <div className="p-2.5 bg-slate-800/80 rounded-lg border border-slate-700/50">
              <span className="text-[11px] text-slate-400 block">Array Swaps / Writes</span>
              <span className="text-base font-semibold font-mono text-sky-400 tabular-nums">{swaps}</span>
            </div>
            <div className="p-2.5 bg-slate-800/80 rounded-lg border border-slate-700/50">
              <span className="text-[11px] text-slate-400 block">Time Complexity</span>
              <span className="text-xs font-semibold font-mono text-slate-200 mt-1 block">
                {algorithm === 'quicksort' ? 'O(n log n) avg' : 'O(n²) worst'}
              </span>
            </div>
          </div>
        </div>

        {/* Right Zone: Algorithm & Array Controls */}
        <div className="w-full lg:w-80 flex flex-col gap-5 bg-slate-950/60 p-5 rounded-lg border border-slate-800">
          <div>
            <h4 className="text-sm font-semibold text-slate-200 tracking-tight">Execution Controller</h4>
            <p className="text-xs text-slate-400 mt-1">Switch algorithms and test partition invariants.</p>
          </div>

          {/* Start/Stop Button */}
          <div className="flex items-center gap-2">
            <button
              onClick={handleStartSort}
              className={`flex-1 flex items-center justify-center gap-2 py-2 px-4 rounded-lg text-xs font-semibold transition-colors ${
                isRunning
                  ? 'bg-amber-600 hover:bg-amber-500 text-white'
                  : 'bg-sky-600 hover:bg-sky-500 text-white'
              }`}
            >
              {isRunning ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
              {isRunning ? 'Pause Sorting' : 'Execute Sorting'}
            </button>
            <button
              onClick={() => generateArray('random')}
              className="p-2 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-lg transition-colors"
              title="Shuffle array"
            >
              <RotateCcw className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Algorithm Picker */}
          <div className="space-y-1.5">
            <label className="text-xs text-slate-300 font-medium block">Select Algorithm</label>
            <div className="grid grid-cols-3 gap-1 p-1 bg-slate-900 rounded-lg border border-slate-800">
              {[
                { id: 'quicksort', label: 'QuickSort' },
                { id: 'bubblesort', label: 'Bubble' },
                { id: 'selectionsort', label: 'Selection' }
              ].map(algo => (
                <button
                  key={algo.id}
                  onClick={() => {
                    setAlgorithm(algo.id as SortAlgorithm);
                    generateArray('random');
                  }}
                  className={`py-1.5 text-xs font-medium rounded transition-colors ${
                    algorithm === algo.id
                      ? 'bg-slate-700 text-white font-semibold'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  {algo.label}
                </button>
              ))}
            </div>
          </div>

          {/* Array Pattern Generation */}
          <div className="space-y-1.5">
            <label className="text-xs text-slate-300 font-medium block">Array Initial Ordering</label>
            <div className="grid grid-cols-3 gap-1.5">
              <button
                onClick={() => generateArray('random')}
                className="py-1.5 px-2 bg-slate-800 hover:bg-slate-700 text-[11px] rounded text-slate-200 transition-colors"
              >
                Random
              </button>
              <button
                onClick={() => generateArray('nearly')}
                className="py-1.5 px-2 bg-slate-800 hover:bg-slate-700 text-[11px] rounded text-slate-200 transition-colors"
              >
                Near-Sorted
              </button>
              <button
                onClick={() => generateArray('reversed')}
                className="py-1.5 px-2 bg-slate-800 hover:bg-slate-700 text-[11px] rounded text-slate-200 transition-colors"
              >
                Reversed
              </button>
            </div>
          </div>

          {/* Array Size */}
          <div className="space-y-1.5">
            <div className="flex justify-between text-xs">
              <label className="text-slate-300 font-medium">Array Length (N)</label>
              <span className="font-mono text-sky-400 tabular-nums">{arraySize} Items</span>
            </div>
            <input
              type="range"
              min={12}
              max={32}
              step={2}
              disabled={isRunning}
              value={arraySize}
              onChange={e => setArraySize(parseInt(e.target.value))}
              className="w-full accent-sky-500 h-1.5 bg-slate-800 rounded-lg cursor-pointer disabled:opacity-50"
            />
          </div>

          {/* Execution Speed */}
          <div className="space-y-1.5">
            <div className="flex justify-between text-xs">
              <label className="text-slate-300 font-medium">Delay Between Steps</label>
              <span className="font-mono text-sky-400 tabular-nums">{speedMs} ms</span>
            </div>
            <input
              type="range"
              min={20}
              max={250}
              step={10}
              value={speedMs}
              onChange={e => setSpeedMs(parseInt(e.target.value))}
              className="w-full accent-sky-500 h-1.5 bg-slate-800 rounded-lg cursor-pointer"
            />
            <div className="flex justify-between text-[10px] text-slate-500">
              <span>20ms (Turbo)</span>
              <span>250ms (Pedagogical)</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
