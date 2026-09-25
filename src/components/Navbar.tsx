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
  ExternalLink
} from 'lucide-react';

interface NavbarProps {
  activeView: 'dashboard' | 'notes' | 'videos' | 'quizzes' | 'simulator' | 'pyq' | 'books';
  setActiveView: (view: 'dashboard' | 'notes' | 'videos' | 'quizzes' | 'simulator' | 'pyq' | 'books') => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeView, setActiveView }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'dashboard', label: 'Overview', icon: LayoutDashboard },
    { id: 'notes', label: 'PDF Notes', icon: FileText, highlight: true },
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
        <div className="flex items-center gap-2.5">
          <a
            href="/digital-electronics-notes-130-pages.pdf"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold text-sky-200 bg-sky-950 hover:bg-sky-900 border border-sky-800 rounded-lg transition-colors shadow-xs cursor-pointer whitespace-nowrap"
            title="Open Provided Course Notes PDF (130 Pages)"
          >
            <FileText className="w-3.5 h-3.5 text-sky-400" />
            <span className="hidden sm:inline">Provided Notes PDF</span>
            <ExternalLink className="w-3 h-3 opacity-80" />
          </a>

          <button
            onClick={() => setActiveView('notes')}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-lg transition-colors shadow-xs cursor-pointer"
          >
            <Search className="w-3.5 h-3.5 text-sky-400" />
            <span className="hidden sm:inline">Search Notes</span>
          </button>

          <button
            onClick={() => setActiveView('simulator')}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold text-white bg-sky-600 hover:bg-sky-500 rounded-lg transition-colors whitespace-nowrap shadow-xs cursor-pointer"
          >
            <Zap className="w-3.5 h-3.5 fill-current" />
            <span className="hidden sm:inline">Open Simulator</span>
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
