import React from 'react';
import { Course, LearningPath } from '../types/learning';
import { Compass, Clock, BookOpen, ArrowRight, CheckCircle2, ChevronRight } from 'lucide-react';

interface LearningPathsViewProps {
  paths: LearningPath[];
  courses: Course[];
  completedLessonIds: string[];
  onSelectCourse: (course: Course) => void;
}

export const LearningPathsView: React.FC<LearningPathsViewProps> = ({
  paths,
  courses,
  completedLessonIds,
  onSelectCourse
}) => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="pb-6 border-b border-slate-200">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-sky-600 mb-1">
          <Compass className="w-4 h-4" />
          <span>Comprehensive Career Tracks</span>
        </div>
        <h2 className="text-2xl font-bold tracking-tight text-slate-900 font-sans">
          Accredited Learning Roadmaps
        </h2>
        <p className="text-sm text-slate-600 mt-1 max-w-2xl">
          Progress from elementary theorems to production architectures through systematically sequenced courses and hands-on milestones.
        </p>
      </div>

      <div className="space-y-10 mt-8">
        {paths.map(path => {
          return (
            <div
              key={path.id}
              className="bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-8 shadow-xs overflow-hidden"
            >
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-slate-100">
                <div>
                  <div className="flex items-center gap-2 text-xs text-slate-500 mb-2">
                    <span className="font-semibold text-sky-700">{path.role}</span>
                    <span aria-hidden="true">·</span>
                    <span className="font-mono">{path.estimatedWeeks} Weeks Estimated</span>
                    <span aria-hidden="true">·</span>
                    <span>{path.coursesCount} Required Disciplines</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900">{path.title}</h3>
                  <p className="text-sm text-slate-600 mt-2 max-w-2xl leading-relaxed">
                    {path.description}
                  </p>
                </div>

                <button
                  onClick={() => {
                    const firstCourse = courses.find(c => c.id === path.milestones[0]?.courseId) || courses[0];
                    onSelectCourse(firstCourse);
                  }}
                  className="px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold rounded-lg flex items-center gap-2 transition-colors whitespace-nowrap self-start lg:self-auto shadow-xs"
                >
                  <span>Begin Track</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Milestones Flow */}
              <div className="mt-8">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-4">
                  Curriculum Sequence & Key Milestones
                </span>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {path.milestones.map((m, idx) => {
                    const targetCourse = courses.find(c => c.id === m.courseId);

                    return (
                      <div
                        key={idx}
                        onClick={() => targetCourse && onSelectCourse(targetCourse)}
                        className="p-5 rounded-xl bg-slate-50 border border-slate-200/80 hover:border-slate-300 hover:bg-white transition-all cursor-pointer group flex flex-col justify-between"
                      >
                        <div>
                          <div className="flex items-center justify-between text-xs text-slate-400 mb-2 font-mono">
                            <span>Stage 0{idx + 1}</span>
                            <span className="text-sky-600 font-semibold group-hover:translate-x-0.5 transition-transform flex items-center">
                              Enter <ChevronRight className="w-3.5 h-3.5" />
                            </span>
                          </div>
                          <h4 className="text-sm font-bold text-slate-900 group-hover:text-sky-700 transition-colors leading-snug">
                            {m.title}
                          </h4>
                          <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                            {m.description}
                          </p>
                        </div>

                        {targetCourse && (
                          <div className="mt-4 pt-3 border-t border-slate-200/70 text-[11px] text-slate-500 font-medium truncate">
                            Course: {targetCourse.title}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
