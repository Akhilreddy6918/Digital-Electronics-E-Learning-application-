import React, { useState, useEffect } from 'react';
import { Server, Activity, ShieldAlert, ShieldCheck, Zap, RefreshCw, AlertCircle } from 'lucide-react';

interface BackendNode {
  id: string;
  name: string;
  isHealthy: boolean;
  isLagging: boolean;
  cpu: number;
  activeConnections: number;
  totalHandled: number;
}

export const LoadBalancerSimulation: React.FC = () => {
  const [rps, setRps] = useState<number>(450); // Influx RPS
  const [algorithm, setAlgorithm] = useState<'round-robin' | 'least-conn' | 'hash'>('least-conn');
  const [circuitBreakerEnabled, setCircuitBreakerEnabled] = useState<boolean>(true);
  const [circuitState, setCircuitState] = useState<'CLOSED' | 'OPEN' | 'HALF-OPEN'>('CLOSED');
  const [rrIndex, setRrIndex] = useState<number>(0);

  const [nodes, setNodes] = useState<BackendNode[]>([
    { id: 'node-1', name: 'Replica-us-east-1a', isHealthy: true, isLagging: false, cpu: 32, activeConnections: 12, totalHandled: 3420 },
    { id: 'node-2', name: 'Replica-us-east-1b', isHealthy: true, isLagging: false, cpu: 28, activeConnections: 9, totalHandled: 3210 },
    { id: 'node-3', name: 'Replica-us-east-1c', isHealthy: true, isLagging: false, cpu: 35, activeConnections: 14, totalHandled: 3580 },
    { id: 'node-4', name: 'Replica-us-east-1d', isHealthy: true, isLagging: false, cpu: 30, activeConnections: 10, totalHandled: 3390 }
  ]);

  const healthyNodesCount = nodes.filter(n => n.isHealthy).length;
  const failureRatio = (4 - healthyNodesCount) / 4;

  // Real-time update of load and requests
  useEffect(() => {
    const interval = setInterval(() => {
      setNodes(prevNodes => {
        return prevNodes.map(node => {
          if (!node.isHealthy) {
            return { ...node, cpu: 0, activeConnections: 0 };
          }

          // Compute simulated load based on incoming RPS and healthy nodes
          const baseLoad = rps / Math.max(1, healthyNodesCount * 12);
          const lagFactor = node.isLagging ? 2.2 : 1.0;
          const targetCpu = Math.min(98, Math.max(15, Math.round(baseLoad * lagFactor + (Math.random() * 8 - 4))));
          const targetConns = Math.max(2, Math.round((targetCpu / 100) * 45));

          return {
            ...node,
            cpu: targetCpu,
            activeConnections: targetConns,
            totalHandled: node.totalHandled + Math.round(rps / (healthyNodesCount || 1) / 10)
          };
        });
      });

      // Circuit breaker evaluation
      if (circuitBreakerEnabled) {
        if (healthyNodesCount <= 1) {
          setCircuitState('OPEN');
        } else if (healthyNodesCount <= 2 && circuitState === 'OPEN') {
          setCircuitState('HALF-OPEN');
        } else if (healthyNodesCount >= 3) {
          setCircuitState('CLOSED');
        }
      } else {
        setCircuitState('CLOSED');
      }
    }, 600);

    return () => clearInterval(interval);
  }, [rps, healthyNodesCount, circuitBreakerEnabled, circuitState]);

  const toggleNodeHealth = (id: string) => {
    setNodes(prev => prev.map(n => (n.id === id ? { ...n, isHealthy: !n.isHealthy } : n)));
  };

  const toggleNodeLag = (id: string) => {
    setNodes(prev => prev.map(n => (n.id === id ? { ...n, isLagging: !n.isLagging } : n)));
  };

  const resetAllNodes = () => {
    setNodes(prev => prev.map(n => ({ ...n, isHealthy: true, isLagging: false })));
    setCircuitState('CLOSED');
  };

  // Compute calculated metrics
  const p99Latency = circuitState === 'OPEN' 
    ? 2 // fast fail in open circuit
    : Math.round(18 + (rps / 25) + (nodes.filter(n => n.isLagging).length * 85));

  const errorRate = circuitState === 'OPEN' 
    ? 100 
    : healthyNodesCount === 0 
    ? 100 
    : Math.round(failureRatio * (circuitBreakerEnabled ? 5 : 45));

  return (
    <div className="bg-slate-900 text-slate-100 rounded-xl border border-slate-800 p-6 shadow-sm">
      <div className="flex flex-col lg:flex-row gap-6 items-start">
        {/* Left Stage: Architecture Topology & Cluster Nodes */}
        <div className="flex-1 w-full flex flex-col items-center">
          <div className="w-full flex items-center justify-between mb-3 text-xs text-slate-400">
            <span className="font-medium text-slate-200">Cluster Topology & Health Map</span>
            <span>Active Nodes: <strong className="font-mono text-emerald-400">{healthyNodesCount} of 4</strong></span>
          </div>

          <div className="w-full bg-slate-950 border border-slate-800 rounded-lg p-5">
            {/* Ingress Gateway Bar */}
            <div className="flex items-center justify-between p-3.5 bg-slate-900 border border-slate-800 rounded-lg mb-6 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-sky-950 border border-sky-800 rounded text-sky-400">
                  <Zap className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-slate-200">Ingress Reverse Proxy / Gateway</div>
                  <div className="text-[11px] text-slate-400 font-mono">Algorithm: {algorithm.toUpperCase()}</div>
                </div>
              </div>

              {/* Circuit Breaker Badge */}
              <div className="flex items-center gap-2">
                <span className="text-[11px] text-slate-400">Circuit State:</span>
                <span className={`text-xs font-mono font-bold px-2 py-0.5 rounded ${
                  circuitState === 'CLOSED'
                    ? 'bg-emerald-950/80 text-emerald-300 border border-emerald-700/60'
                    : circuitState === 'HALF-OPEN'
                    ? 'bg-amber-950/80 text-amber-300 border border-amber-700/60'
                    : 'bg-rose-950/80 text-rose-300 border border-rose-700/60'
                }`}>
                  {circuitState}
                </span>
              </div>
            </div>

            {/* Nodes Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {nodes.map(node => (
                <div
                  key={node.id}
                  className={`p-4 rounded-lg border transition-all ${
                    !node.isHealthy
                      ? 'bg-rose-950/20 border-rose-900/40 opacity-70'
                      : node.isLagging
                      ? 'bg-amber-950/20 border-amber-800/50'
                      : 'bg-slate-900/90 border-slate-800'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <Server className={`w-4 h-4 ${node.isHealthy ? 'text-sky-400' : 'text-rose-400'}`} />
                      <span className="text-xs font-mono font-semibold text-slate-200">{node.name}</span>
                    </div>
                    <span className={`text-[10px] font-mono px-1.5 py-0.5 rounded ${
                      node.isHealthy ? 'bg-emerald-950 text-emerald-300' : 'bg-rose-950 text-rose-400'
                    }`}>
                      {node.isHealthy ? 'HEALTHY' : 'DOWN'}
                    </span>
                  </div>

                  {/* CPU Load Bar */}
                  <div className="space-y-1 mb-3">
                    <div className="flex justify-between text-[11px] text-slate-400">
                      <span>CPU Utilization</span>
                      <span className="font-mono text-slate-200">{node.cpu}%</span>
                    </div>
                    <div className="w-full bg-slate-800 rounded-full h-1.5 overflow-hidden">
                      <div
                        className={`h-full transition-all duration-300 ${
                          node.cpu > 80 ? 'bg-rose-500' : node.cpu > 60 ? 'bg-amber-500' : 'bg-emerald-500'
                        }`}
                        style={{ width: `${node.cpu}%` }}
                      />
                    </div>
                  </div>

                  <div className="flex justify-between text-[11px] text-slate-400 mb-3 font-mono">
                    <span>Connections: {node.activeConnections}</span>
                    <span>Total: {node.totalHandled.toLocaleString()}</span>
                  </div>

                  {/* Chaos Action Buttons */}
                  <div className="flex items-center gap-2 pt-2 border-t border-slate-800/80">
                    <button
                      onClick={() => toggleNodeLag(node.id)}
                      disabled={!node.isHealthy}
                      className={`flex-1 py-1 text-[11px] rounded font-medium transition-colors ${
                        node.isLagging
                          ? 'bg-amber-600 text-white'
                          : 'bg-slate-800 hover:bg-slate-700 text-slate-300'
                      }`}
                    >
                      {node.isLagging ? 'Lag Injected' : 'Inject Lag'}
                    </button>
                    <button
                      onClick={() => toggleNodeHealth(node.id)}
                      className={`flex-1 py-1 text-[11px] rounded font-medium transition-colors ${
                        node.isHealthy
                          ? 'bg-rose-950 hover:bg-rose-900 text-rose-300 border border-rose-800/50'
                          : 'bg-emerald-950 hover:bg-emerald-900 text-emerald-300 border border-emerald-800/50'
                      }`}
                    >
                      {node.isHealthy ? 'Kill Node' : 'Revive'}
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom SRE Metrics */}
            <div className="grid grid-cols-3 gap-3 mt-4 text-center">
              <div className="p-2.5 bg-slate-900 rounded-lg border border-slate-800">
                <span className="text-[11px] text-slate-400 block">P99 Latency</span>
                <span className="text-base font-semibold font-mono text-sky-400 tabular-nums">{p99Latency} ms</span>
              </div>
              <div className="p-2.5 bg-slate-900 rounded-lg border border-slate-800">
                <span className="text-[11px] text-slate-400 block">HTTP 5xx Error Rate</span>
                <span className={`text-base font-semibold font-mono tabular-nums ${errorRate > 10 ? 'text-rose-400' : 'text-emerald-400'}`}>
                  {errorRate}%
                </span>
              </div>
              <div className="p-2.5 bg-slate-900 rounded-lg border border-slate-800">
                <span className="text-[11px] text-slate-400 block">Throughput Served</span>
                <span className="text-base font-semibold font-mono text-slate-100 tabular-nums">
                  {circuitState === 'OPEN' ? 0 : Math.round(rps * (healthyNodesCount / 4))} req/s
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Zone: Balancer Controls */}
        <div className="w-full lg:w-80 flex flex-col gap-5 bg-slate-950/60 p-5 rounded-lg border border-slate-800">
          <div>
            <h4 className="text-sm font-semibold text-slate-200 tracking-tight">Traffic & Gateway Policies</h4>
            <p className="text-xs text-slate-400 mt-1">Configure distribution algorithm and resilience guards.</p>
          </div>

          {/* Ingress RPS Slider */}
          <div className="space-y-1.5">
            <div className="flex justify-between text-xs">
              <label className="text-slate-300 font-medium">Ingress Traffic Volume</label>
              <span className="font-mono text-sky-400 tabular-nums">{rps} RPS</span>
            </div>
            <input
              type="range"
              min={100}
              max={1200}
              step={50}
              value={rps}
              onChange={e => setRps(parseInt(e.target.value))}
              className="w-full accent-sky-500 h-1.5 bg-slate-800 rounded-lg cursor-pointer"
            />
            <div className="flex justify-between text-[10px] text-slate-500">
              <span>100 RPS (Baseline)</span>
              <span>1,200 RPS (Surge)</span>
            </div>
          </div>

          {/* Algorithm Selection */}
          <div className="space-y-1.5">
            <label className="text-xs text-slate-300 font-medium block">Balancing Strategy</label>
            <div className="flex flex-col gap-1.5">
              {[
                { id: 'least-conn', label: 'Least Connections', desc: 'Routes to replica with fewest active sockets' },
                { id: 'round-robin', label: 'Round Robin', desc: 'Cycles sequentially across healthy ring' },
                { id: 'hash', label: 'Consistent IP Hash', desc: 'Deterministic affinity mapping' }
              ].map(strat => (
                <button
                  key={strat.id}
                  onClick={() => setAlgorithm(strat.id as any)}
                  className={`p-2.5 rounded-lg text-left border transition-all ${
                    algorithm === strat.id
                      ? 'bg-sky-950/50 border-sky-600 text-white'
                      : 'bg-slate-900 border-slate-800 text-slate-300 hover:border-slate-700'
                  }`}
                >
                  <div className="text-xs font-semibold">{strat.label}</div>
                  <div className="text-[10px] text-slate-400">{strat.desc}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Circuit Breaker Toggle */}
          <div className="pt-2 border-t border-slate-800 flex items-center justify-between">
            <div>
              <span className="text-xs font-semibold text-slate-200 block">Automatic Circuit Breaker</span>
              <span className="text-[10px] text-slate-400">Trips to prevent cascade saturation</span>
            </div>
            <button
              onClick={() => setCircuitBreakerEnabled(!circuitBreakerEnabled)}
              className={`w-11 h-6 rounded-full transition-colors relative p-0.5 ${
                circuitBreakerEnabled ? 'bg-sky-600' : 'bg-slate-700'
              }`}
            >
              <div
                className={`w-5 h-5 bg-white rounded-full transition-transform ${
                  circuitBreakerEnabled ? 'translate-x-5' : 'translate-x-0'
                }`}
              />
            </button>
          </div>

          <button
            onClick={resetAllNodes}
            className="w-full py-2 px-3 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold rounded-lg flex items-center justify-center gap-2 transition-colors"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            Reset All Cluster Replicas
          </button>
        </div>
      </div>
    </div>
  );
};
