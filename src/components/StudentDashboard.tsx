import React, { useState } from 'react';
import { Course, UserProgress } from '../types/learning';
import { Award, BookOpen, Clock, CheckCircle2, Bookmark, Flame, Zap, Play, ArrowRight, UserCheck } from 'lucide-react';

interface StudentDashboardProps {
  progress: UserProgress;
  courses: Course[];
  onSelectCourse: (course: Course) => void;
  onOpenCertificate: (course: Course) => void;
  onUpdateUserName: (name: string) => void;
}

export const StudentDashboard: React.FC<StudentDashboardProps> = ({
  progress,
  courses,
  onSelectCourse,
  onOpenCertificate,
  onUpdateUserName
}) => {
  const [isEditingName, setIsEditingName] = useState<boolean>(false);
  const [nameInput, setNameInput] = useState<string>(progress.userName);

  const enrolledCourses = courses.filter(c => progress.enrolledCourseIds.includes(c.id));
  const bookmarkedLessons = courses
    .flatMap(c => c.modules.flatMap(m => m.lessons.map(l => ({ ...l, course: c }))))
    .filter(l => progress.bookmarkedLessonIds.includes(l.id));

  const handleNameSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (nameInput.trim()) {
      onUpdateUserName(nameInput.trim());
      setIsEditingName(false);
    }
  };

  const daysOfWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Student Profile Card */}
      <div className="bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-8 shadow-xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pb-6 border-b border-slate-100">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-2xl bg-slate-900 text-white flex items-center justify-center text-xl font-bold font-mono shadow-sm">
              {progress.userName
                .split(' ')
                .map(n => n[0])
                .join('')
                .slice(0, 2)
                .toUpperCase() || 'ST'}
            </div>

            <div>
              {isEditingName ? (
                <form onSubmit={handleNameSave} className="flex items-center gap-2">
                  <input
                    type="text"
                    value={nameInput}
                    onChange={e => setNameInput(e.target.value)}
                    className="px-2.5 py-1 text-base font-bold text-slate-900 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
                  />
                  <button
                    type="submit"
                    className="px-3 py-1 bg-slate-900 text-white text-xs font-semibold rounded-lg"
                  >
                    Save
                  </button>
                </form>
              ) : (
                <div className="flex items-center gap-2">
                  <h2 className="text-xl sm:text-2xl font-bold text-slate-900">{progress.userName}</h2>
                  <button
                    onClick={() => setIsEditingName(true)}
                    className="text-xs text-sky-600 hover:text-sky-700 font-medium"
                  >
                    Edit Name
                  </button>
                </div>
              )}
              <div className="flex items-center gap-2 text-xs text-slate-500 mt-1">
                <span>Undergraduate Research Scholar</span>
                <span aria-hidden="true">·</span>
                <span className="font-mono">ID: CGN-84920</span>
              </div>
            </div>
          </div>

          {/* Quick Metrics (Zero-pill compliant) */}
          <div className="flex items-center gap-6 sm:border-l sm:border-slate-100 sm:pl-8">
            <div>
              <div className="flex items-center gap-1.5 text-xs text-slate-500">
                <Flame className="w-3.5 h-3.5 text-amber-500" />
                <span>Streak</span>
              </div>
              <div className="text-2xl font-bold font-mono text-slate-900 tabular-nums">
                {progress.streakDays} Days
              </div>
            </div>

            <div>
              <div className="flex items-center gap-1.5 text-xs text-slate-500">
                <Zap className="w-3.5 h-3.5 text-sky-500" />
                <span>Experience</span>
              </div>
              <div className="text-2xl font-bold font-mono text-sky-700 tabular-nums">
                {progress.xp} XP
              </div>
            </div>
          </div>
        </div>

        {/* 7-Day Study Cadence */}
        <div className="pt-6">
          <div className="flex items-center justify-between mb-3 text-xs">
            <span className="font-semibold text-slate-700">Weekly Laboratory Cadence</span>
            <span className="text-slate-500">Target: 5 days/week</span>
          </div>
          <div className="grid grid-cols-7 gap-2">
            {daysOfWeek.map((day, idx) => {
              const isDone = idx < 5; // e.g. 5 days active
              return (
                <div
                  key={day}
                  className={`p-3 rounded-xl border text-center transition-colors ${
                    isDone
                      ? 'bg-sky-50/80 border-sky-200 text-sky-900'
                      : 'bg-slate-50 border-slate-100 text-slate-400'
                  }`}
                >
                  <span className="text-[11px] font-medium block">{day}</span>
                  <div className="mt-1 flex justify-center">
                    {isDone ? (
                      <CheckCircle2 className="w-4 h-4 text-sky-600" />
                    ) : (
                      <span className="w-4 h-4 rounded-full border border-slate-300 block" />
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Enrolled Courses Section */}
      <div className="mt-12">
        <h3 className="text-lg font-bold text-slate-900 mb-4">Active Enrolled Curriculums</h3>

        {enrolledCourses.length === 0 ? (
          <div className="p-8 text-center bg-white rounded-xl border border-slate-200 text-slate-500 text-xs">
            You haven\'t enrolled in any courses yet. Browse the catalog to begin.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {enrolledCourses.map(course => {
              const allLessons = course.modules.flatMap(m => m.lessons);
              const completedInCourse = allLessons.filter(l => progress.completedLessonIds.includes(l.id)).length;
              const percent = Math.round((completedInCourse / allLessons.length) * 100);

              return (
                <div
                  key={course.id}
                  className="bg-white rounded-xl border border-slate-200 p-6 flex flex-col justify-between hover:border-slate-300 transition-colors"
                >
                  <div>
                    <div className="flex items-center justify-between text-xs text-slate-500 mb-2">
                      <span>{course.categoryLabel}</span>
                      <span className="font-mono">{completedInCourse} / {allLessons.length} Lessons</span>
                    </div>

                    <h4 className="text-base font-bold text-slate-900 leading-snug">{course.title}</h4>
                    <p className="text-xs text-slate-600 mt-1 line-clamp-2">{course.tagline}</p>

                    {/* Progress Bar */}
                    <div className="mt-4 space-y-1">
                      <div className="flex justify-between text-xs">
                        <span className="text-slate-500">Mastery Progress</span>
                        <span className="font-mono font-semibold text-sky-700 tabular-nums">{percent}%</span>
                      </div>
                      <div className="w-full bg-slate-100 rounded-full h-2 overflow-hidden">
                        <div
                          className="bg-sky-600 h-full rounded-full transition-all duration-300"
                          style={{ width: `${percent}%` }}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                    <button
                      onClick={() => onSelectCourse(course)}
                      className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold rounded-lg flex items-center gap-1.5 transition-colors"
                    >
                      <Play className="w-3.5 h-3.5 fill-current" />
                      <span>Resume Learning</span>
                    </button>

                    <button
                      onClick={() => onOpenCertificate(course)}
                      className="px-3 py-2 text-xs font-semibold text-sky-700 bg-sky-50 hover:bg-sky-100 rounded-lg transition-colors flex items-center gap-1"
                    >
                      <Award className="w-3.5 h-3.5" />
                      <span>Certificate</span>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Bookmarked Lessons Section */}
      <div className="mt-12">
        <h3 className="text-lg font-bold text-slate-900 mb-4">Saved Bookmarks</h3>

        {bookmarkedLessons.length === 0 ? (
          <div className="p-8 text-center bg-white rounded-xl border border-slate-200 text-slate-500 text-xs">
            No lessons bookmarked yet. Click the bookmark icon in any lesson to review later.
          </div>
        ) : (
          <div className="bg-white rounded-xl border border-slate-200 divide-y divide-slate-100">
            {bookmarkedLessons.map(lesson => (
              <div
                key={lesson.id}
                className="p-4 flex items-center justify-between gap-4 hover:bg-slate-50/70 transition-colors"
              >
                <div>
                  <span className="text-[11px] text-slate-400 block font-mono">{lesson.course.title}</span>
                  <span className="text-sm font-semibold text-slate-900">{lesson.title}</span>
                </div>

                <button
                  onClick={() => onSelectCourse(lesson.course)}
                  className="px-3 py-1.5 bg-slate-900 text-white text-xs font-medium rounded-lg flex items-center gap-1 hover:bg-slate-800 transition-colors"
                >
                  <span>Go to Lesson</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
