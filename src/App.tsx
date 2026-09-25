import React, { useState } from 'react';
import { UnitId } from './types/digitalElectronics';
import { Navbar } from './components/Navbar';
import { Dashboard } from './components/Dashboard';
import { PdfNotesViewer } from './components/PdfNotesViewer';
import { CircuitSimulator } from './components/CircuitSimulator';
import { YouTubeVideoLibrary } from './components/YouTubeVideoLibrary';
import { QuizModule } from './components/QuizModule';
import { PyqModule } from './components/PyqModule';
import { ReferenceBooksModule } from './components/ReferenceBooksModule';

export default function App() {
  const [activeView, setActiveView] = useState<'dashboard' | 'notes' | 'videos' | 'quizzes' | 'simulator' | 'pyq' | 'books'>('dashboard');
  const [selectedCircuitId, setSelectedCircuitId] = useState<string>('gate-and');
  const [selectedNotesSectionId, setSelectedNotesSectionId] = useState<string>('sec-u1-1');
  const [notesSearchQuery, setNotesSearchQuery] = useState<string>('');
  const [selectedQuizUnit, setSelectedQuizUnit] = useState<UnitId | undefined>(undefined);

  // Global search handler from Dashboard
  const handleGlobalSearch = (query: string) => {
    setNotesSearchQuery(query);
    setActiveView('notes');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Launch Simulator with specific circuit
  const handleOpenCircuit = (circuitId: string) => {
    setSelectedCircuitId(circuitId);
    setActiveView('simulator');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Open Notes for a specific section
  const handleOpenNotesSection = (sectionIdOrUnit: string) => {
    if (sectionIdOrUnit.startsWith('sec-')) {
      setSelectedNotesSectionId(sectionIdOrUnit);
    }
    setActiveView('notes');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Watch video by sequence number
  const handleWatchVideo = (seqNo: number) => {
    setActiveView('videos');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const isDarkCanvas = activeView === 'simulator';

  return (
    <div className={`min-h-screen flex flex-col font-sans selection:bg-sky-500 selection:text-white ${isDarkCanvas ? 'bg-slate-900 text-slate-100' : 'bg-slate-50 text-slate-900'}`}>
      {/* Top Bar Navigation */}
      <Navbar activeView={activeView} setActiveView={setActiveView} />

      {/* Main View Router */}
      <main className="flex-1">
        {activeView === 'dashboard' && (
          <Dashboard
            onNavigate={dest => {
              setActiveView(dest);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onOpenCircuit={handleOpenCircuit}
            onWatchVideo={handleWatchVideo}
            onSearchGlobal={handleGlobalSearch}
          />
        )}

        {activeView === 'notes' && (
          <PdfNotesViewer
            initialSectionId={selectedNotesSectionId}
            initialSearchQuery={notesSearchQuery}
            onLaunchSimulator={handleOpenCircuit}
            onWatchVideo={handleWatchVideo}
          />
        )}

        {activeView === 'simulator' && (
          <CircuitSimulator
            initialCircuitId={selectedCircuitId}
            onOpenNotes={handleOpenNotesSection}
            onWatchVideo={handleWatchVideo}
          />
        )}

        {activeView === 'videos' && (
          <div className="py-6">
            <YouTubeVideoLibrary
              onOpenNotes={handleOpenNotesSection}
              onOpenSimulator={handleOpenCircuit}
              onOpenQuiz={uId => {
                setSelectedQuizUnit(uId);
                setActiveView('quizzes');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            />
          </div>
        )}

        {activeView === 'quizzes' && (
          <div className="py-6">
            <QuizModule
              initialUnitId={selectedQuizUnit}
              onOpenNotes={uId => {
                setActiveView('notes');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            />
          </div>
        )}

        {activeView === 'pyq' && (
          <div className="py-6">
            <PyqModule
              onOpenNotes={uId => {
                setActiveView('notes');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            />
          </div>
        )}

        {activeView === 'books' && (
          <div className="py-6">
            <ReferenceBooksModule
              onOpenNotes={() => {
                setActiveView('notes');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            />
          </div>
        )}
      </main>

      {/* Footer */}
      {activeView !== 'notes' && activeView !== 'simulator' && (
        <footer className="bg-slate-900 border-t border-slate-800 text-slate-400 py-10 mt-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6 text-xs">
            <div>
              <span className="text-white font-bold text-sm block">Digital Electronics E-Learning Platform</span>
              <p className="text-slate-400 mt-1">
                Major Project Stage-1 · Preserving JNTUH R18/R22 syllabus materials, 228 lecture links, interactive circuit simulation, and 5-year PYQs.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-5 text-slate-300 font-medium">
              <button onClick={() => { setActiveView('notes'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:text-white cursor-pointer">PDF Notes</button>
              <button onClick={() => { setActiveView('simulator'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:text-white cursor-pointer">Circuit Simulator</button>
              <button onClick={() => { setActiveView('videos'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:text-white cursor-pointer">228 Videos</button>
              <button onClick={() => { setActiveView('quizzes'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:text-white cursor-pointer">Quizzes</button>
              <button onClick={() => { setActiveView('pyq'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:text-white cursor-pointer">PYQ (2020–2024)</button>
              <button onClick={() => { setActiveView('books'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:text-white cursor-pointer">Reference Books</button>
            </div>
          </div>
        </footer>
      )}
    </div>
  );
}
