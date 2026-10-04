import React, { useState } from 'react';
import {
  FileText,
  Video,
  Zap,
  HelpCircle,
  GraduationCap,
  BookOpen,
  Cpu,
  Menu,
  X,
  Search,
  LayoutDashboard,
  ExternalLink,
  Layers,
  PenTool
} from 'lucide-react';

interface NavbarProps {
  activeView: 'dashboard' | 'handwritten' | 'notes' | 'videos' | 'quizzes' | 'simulator' | 'pyq' | 'books';
  setActiveView: (view: 'dashboard' | 'handwritten' | 'notes' | 'videos' | 'quizzes' | 'simulator' | 'pyq' | 'books') => void;
  onOpenChartModal?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeView,
  setActiveView,
  onOpenChartModal
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'dashboard', label: 'Overview', icon: LayoutDashboard },
    { id: 'handwritten', label: 'HandWritten Notes', icon: PenTool, highlight: true },
    { id: 'notes', label: 'PDF Notes', icon: FileText },
    { id: 'simulator', label: 'Circuit Simulator', icon: Zap },
    { id: 'videos', label: '228 Videos', icon: Video },
    { id: 'quizzes', label: 'Quizzes', icon: HelpCircle },
    { id: 'pyq', label: 'PYQ Papers', icon: GraduationCap },
    { id: 'books', label: 'Books', icon: BookOpen }
  ];

  return (
    <header className="sticky top-0 z-40 w-full bg-slate-900 border-b border-slate-800 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        {/* Brand wordmark */}
        <button
          onClick={() => {
            setActiveView('dashboard');
            setMobileMenuOpen(false);
          }}
          className="flex items-center gap-2.5 text-left text-white hover:opacity-90 transition-opacity cursor-pointer"
        >
          <div className="w-9 h-9 rounded-xl bg-sky-600 flex items-center justify-center text-white shadow-xs">
            <Cpu className="w-5 h-5" />
          </div>
          <div>
            <span className="text-sm sm:text-base font-extrabold tracking-tight font-sans block leading-tight text-white">
              Digital Electronics
            </span>
            <span className="text-[10px] text-sky-400 font-mono font-medium block leading-tight">
              E-Learning & Circuit Simulation
            </span>
          </div>
        </button>

        {/* Navigation links */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2 text-xs font-semibold">
          {navItems.map(item => {
            const Icon = item.icon;
            const isActive = activeView === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveView(item.id as any)}
                className={`px-3 py-1.5 rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer whitespace-nowrap ${
                  isActive
                    ? 'bg-sky-600 text-white shadow-xs font-bold'
                    : item.highlight
                    ? 'text-sky-300 hover:text-white hover:bg-slate-800 font-bold'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>

        {/* Right CTA Button */}
        <div className="flex items-center gap-2">
          {/* HandWritten Notes PDF Direct Link */}
          <a
            href="/HandWritten-Notes.pdf"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold text-amber-200 bg-amber-950 hover:bg-amber-900 border border-amber-600/80 rounded-lg transition-colors shadow-xs cursor-pointer whitespace-nowrap"
            title="Open HandWritten Notes PDF (Units 1 - 5)"
          >
            <PenTool className="w-3.5 h-3.5 text-amber-400" />
            <span className="hidden sm:inline">HandWritten Notes</span>
            <span className="sm:hidden">HandWritten</span>
            <ExternalLink className="w-3 h-3 opacity-80" />
          </a>

          {/* DIGITAL ELECTRONICS NOTES PDF Direct Link */}
          <a
            href="/digital-electronics-notes-130-pages.pdf"
            target="_blank"
            rel="noreferrer"
            className="hidden md:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold text-sky-200 bg-sky-950 hover:bg-sky-900 border border-sky-600/80 rounded-lg transition-colors shadow-xs cursor-pointer whitespace-nowrap"
            title="Open 130-Page Digital Electronics Notes PDF"
          >
            <FileText className="w-3.5 h-3.5 text-sky-400" />
            <span>Course Notes PDF</span>
            <ExternalLink className="w-3 h-3 opacity-80" />
          </a>

          {/* Engineering Chart Sheets Button */}
          {onOpenChartModal && (
            <button
              onClick={onOpenChartModal}
              className="hidden lg:inline-flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-semibold text-slate-200 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-lg transition-colors cursor-pointer whitespace-nowrap"
              title="View Flip-Flops & Logic Gates Chart Sheets"
            >
              <Layers className="w-3.5 h-3.5 text-emerald-400" />
              <span>Chart Sheets</span>
              <span className="px-1.5 py-0.2 bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-[9px] font-bold rounded">
                NEW
              </span>
            </button>
          )}

          <button
            onClick={() => setActiveView('notes')}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-lg transition-colors shadow-xs cursor-pointer"
          >
            <Search className="w-3.5 h-3.5 text-sky-400" />
            <span className="hidden sm:inline">Search Notes</span>
          </button>

          <button
            onClick={() => setActiveView('simulator')}
            className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold text-white rounded-lg transition-colors whitespace-nowrap shadow-xs cursor-pointer ${
              activeView === 'simulator'
                ? 'bg-sky-700/80 border border-sky-400'
                : 'bg-sky-600 hover:bg-sky-500'
            }`}
          >
            {activeView === 'simulator' ? (
              <>
                <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="hidden sm:inline">Simulator Active</span>
              </>
            ) : (
              <>
                <Zap className="w-3.5 h-3.5 fill-current" />
                <span className="hidden sm:inline">Open Simulator</span>
              </>
            )}
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-slate-300 hover:text-white hover:bg-slate-800 rounded-lg cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-slate-950 border-b border-slate-800 px-4 py-3 space-y-1 shadow-xl">
          {navItems.map(item => {
            const Icon = item.icon;
            const isActive = activeView === item.id;
            return (
              <button
                key={item.id}
                onClick={() => {
                  setActiveView(item.id as any);
                  setMobileMenuOpen(false);
                }}
                className={`w-full text-left p-2.5 rounded-lg text-xs font-semibold flex items-center gap-2.5 cursor-pointer ${
                  isActive
                    ? 'bg-sky-600 text-white font-bold'
                    : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{item.label}</span>
              </button>
            );
          })}
        </div>
      )}
    </header>
  );
};
