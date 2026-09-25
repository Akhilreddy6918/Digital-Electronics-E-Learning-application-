import React from 'react';
import { Search, Sparkles, ArrowRight, BookOpen, Cpu, Dna, Network, Compass } from 'lucide-react';
import { SubjectCategory } from '../types/learning';

interface HeroSectionProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  selectedCategory: SubjectCategory;
  setSelectedCategory: (cat: SubjectCategory) => void;
  onExploreClick: () => void;
  onLaunchFeaturedLab: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  searchQuery,
  setSearchQuery,
  selectedCategory,
  setSelectedCategory,
  onExploreClick,
  onLaunchFeaturedLab
}) => {
  return (
    <section className="relative overflow-hidden bg-slate-900 text-white border-b border-slate-800">
      {/* Background Image with Measured Contrast Scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src="/src/assets/images/hero_elearning_campus_1790314357583.jpg"
          alt="University research library and interactive computing commons"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/85 to-slate-900/60" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="max-w-3xl">
          {/* Unboxed editorial category kicker (zero-pill compliant) */}
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-sky-400 uppercase mb-4">
            <span>Rigorous Science & Computational Engineering</span>
            <span aria-hidden="true">·</span>
            <span>Interactive Academy</span>
          </div>

          {/* Balanced Display Headline */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight font-sans" style={{ textWrap: 'balance' }}>
            Learn foundational science and computing through executable intuition.
          </h1>

          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl font-normal">
            Move past static slides and passive video tutorials. Every course at Cognita pairs theoretical mathematical rigor with real-time browser simulations, parameter playgrounds, and verifiable accredited coursework.
          </p>

          {/* Interactive Search Bar & Actions */}
          <div className="mt-8 flex flex-col sm:flex-row gap-3 max-w-xl">
            <div className="relative flex-1">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                placeholder="Search courses, neural nets, sorting algorithms, biophysics..."
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-slate-950/90 border border-slate-700 rounded-xl text-sm text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500 shadow-inner"
              />
            </div>
            <button
              onClick={onExploreClick}
              className="px-6 py-3 bg-sky-600 hover:bg-sky-500 text-white text-sm font-semibold rounded-xl flex items-center justify-center gap-2 transition-colors whitespace-nowrap shadow-md"
            >
              <span>Explore Curriculum</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Category Filter Controls (Functional Button Tabs) */}
          <div className="mt-6 flex flex-wrap items-center gap-1.5 p-1 bg-slate-950/70 border border-slate-800/80 rounded-xl max-w-2xl">
            {[
              { id: 'all', label: 'All Disciplines' },
              { id: 'ai-ml', label: 'Artificial Intelligence' },
              { id: 'biology', label: 'Biophysics & Cells' },
              { id: 'cloud', label: 'Distributed Systems' },
              { id: 'algorithms', label: 'Algorithms' }
            ].map(cat => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id as SubjectCategory)}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap ${
                  selectedCategory === cat.id
                    ? 'bg-white text-slate-950 shadow-xs font-semibold'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Quantitative Rigor & Claim-to-Proof Adjacency */}
          <div className="mt-12 pt-8 border-t border-slate-800/80 grid grid-cols-2 sm:grid-cols-3 gap-6 max-w-2xl">
            <div>
              <div className="text-2xl font-bold font-mono text-white tabular-nums">48,200+</div>
              <div className="text-xs text-slate-400 mt-0.5">Enrolled Active Scholars</div>
            </div>
            <div>
              <div className="text-2xl font-bold font-mono text-sky-400 tabular-nums">120+</div>
              <div className="text-xs text-slate-400 mt-0.5">Live Interactive Sandboxes</div>
            </div>
            <div>
              <div className="text-2xl font-bold font-mono text-emerald-400 tabular-nums">94.6%</div>
              <div className="text-xs text-slate-400 mt-0.5">Course Completion Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
