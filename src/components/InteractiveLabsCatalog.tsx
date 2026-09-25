import React, { useState } from 'react';
import { FlaskConical, Cpu, Dna, Network, BarChart2 } from 'lucide-react';
import { NeuralNetSimulation } from './simulations/NeuralNetSimulation';
import { PlantVascularSimulation } from './simulations/PlantVascularSimulation';
import { LoadBalancerSimulation } from './simulations/LoadBalancerSimulation';
import { SortingVisualizer } from './simulations/SortingVisualizer';

export const InteractiveLabsCatalog: React.FC = () => {
  const [activeLab, setActiveLab] = useState<'neural' | 'vascular' | 'load-balancer' | 'sorting'>('neural');

  const labs = [
    {
      id: 'neural',
      title: 'Neural Decision Boundary & Loss Surface',
      discipline: 'Artificial Intelligence',
      icon: Cpu,
      description: 'Tune 2-layer perceptron hyperparameters, test non-linear activations (ReLU, Sigmoid, Tanh), and watch boundary adaptation.'
    },
    {
      id: 'vascular',
      title: 'Xylem Cohesion-Tension & Cavitation Risk',
      discipline: 'Plant Biophysics',
      icon: Dna,
      description: 'Alter vapor pressure deficit, relative humidity, and stomatal opening to evaluate passive sap velocities and hydraulic failure.'
    },
    {
      id: 'load-balancer',
      title: 'Distributed Load Balancer & Fault Cascade',
      discipline: 'Cloud Architecture',
      icon: Network,
      description: 'Simulate high request traffic across 4 replica servers, trigger node lag or sudden outages, and verify circuit breaker fail-safes.'
    },
    {
      id: 'sorting',
      title: 'Sorting Execution Engine & Comparison Bounds',
      discipline: 'Theoretical Computer Science',
      icon: BarChart2,
      description: 'Execute QuickSort, BubbleSort, and SelectionSort step-by-step with live array write tallies and asymptotic complexity metrics.'
    }
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="pb-6 border-b border-slate-200">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-sky-600 mb-1">
          <FlaskConical className="w-4 h-4" />
          <span>Interactive Virtual Laboratories</span>
        </div>
        <h2 className="text-2xl font-bold tracking-tight text-slate-900 font-sans">
          Executable Concept Sandboxes
        </h2>
        <p className="text-sm text-slate-600 mt-1 max-w-2xl">
          Cognita laboratories replace passive reading with real-time parameter exploration. Choose any simulation to manipulate biological, algorithmic, or infrastructure systems directly.
        </p>
      </div>

      {/* Lab Selector Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
        {labs.map(lab => {
          const Icon = lab.icon;
          const isActive = activeLab === lab.id;

          return (
            <button
              key={lab.id}
              onClick={() => setActiveLab(lab.id as any)}
              className={`p-4 rounded-xl text-left border transition-all ${
                isActive
                  ? 'bg-slate-900 text-white border-slate-900 shadow-md ring-2 ring-sky-500/20'
                  : 'bg-white text-slate-900 border-slate-200 hover:border-slate-300'
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <div className={`p-2 rounded-lg ${isActive ? 'bg-sky-500/20 text-sky-400' : 'bg-slate-100 text-slate-700'}`}>
                  <Icon className="w-4 h-4" />
                </div>
                <span className={`text-[10px] font-mono uppercase ${isActive ? 'text-slate-400' : 'text-slate-500'}`}>
                  {lab.discipline}
                </span>
              </div>
              <h3 className="text-sm font-bold leading-snug">{lab.title}</h3>
              <p className={`text-xs mt-1.5 line-clamp-2 ${isActive ? 'text-slate-300' : 'text-slate-600'}`}>
                {lab.description}
              </p>
            </button>
          );
        })}
      </div>

      {/* Active Laboratory Container */}
      <div className="mt-8">
        {activeLab === 'neural' && <NeuralNetSimulation />}
        {activeLab === 'vascular' && <PlantVascularSimulation />}
        {activeLab === 'load-balancer' && <LoadBalancerSimulation />}
        {activeLab === 'sorting' && <SortingVisualizer />}
      </div>
    </section>
  );
};
