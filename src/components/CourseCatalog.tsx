import React, { useState } from 'react';
import { Course, DifficultyLevel, SubjectCategory } from '../types/learning';
import { Clock, BookOpen, Star, Play, Sparkles, CheckCircle2, ChevronRight, FlaskConical } from 'lucide-react';

interface CourseCatalogProps {
  courses: Course[];
  selectedCategory: SubjectCategory;
  setSelectedCategory: (cat: SubjectCategory) => void;
  searchQuery: string;
  enrolledCourseIds: string[];
  completedLessonIds: string[];
  onSelectCourse: (course: Course) => void;
  onLaunchSimulation: (course: Course) => void;
}

export const CourseCatalog: React.FC<CourseCatalogProps> = ({
  courses,
  selectedCategory,
  setSelectedCategory,
  searchQuery,
  enrolledCourseIds,
  completedLessonIds,
  onSelectCourse,
  onLaunchSimulation
}) => {
  const [selectedLevel, setSelectedLevel] = useState<DifficultyLevel>('All Levels');

  // Filter courses
  const filteredCourses = courses.filter(course => {
    const matchesCategory = selectedCategory === 'all' || course.category === selectedCategory;
    const matchesLevel = selectedLevel === 'All Levels' || course.level === selectedLevel;
    const matchesSearch =
      searchQuery.trim() === '' ||
      course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.skillsLearned.some(s => s.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesCategory && matchesLevel && matchesSearch;
  });

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Section Header & Level Controls */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 border-b border-slate-200">
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 font-sans">
            Curated Course Curriculum
          </h2>
          <p className="text-sm text-slate-600 mt-1">
            Every course combines rigorous academic theory with real-time browser laboratory sandboxes.
          </p>
        </div>

        {/* Level Filter Segmented Control */}
        <div className="flex items-center gap-1 p-1 bg-slate-100 rounded-lg self-start md:self-auto">
          {(['All Levels', 'Foundational', 'Intermediate', 'Advanced'] as DifficultyLevel[]).map(level => (
            <button
              key={level}
              onClick={() => setSelectedLevel(level)}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap ${
                selectedLevel === level
                  ? 'bg-white text-slate-900 shadow-xs font-semibold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {level}
            </button>
          ))}
        </div>
      </div>

      {/* Courses Grid */}
      {filteredCourses.length === 0 ? (
        <div className="py-16 text-center">
          <p className="text-base font-medium text-slate-700">No courses match your active search filters.</p>
          <button
            onClick={() => {
              setSelectedCategory('all');
              setSelectedLevel('All Levels');
            }}
            className="mt-3 px-4 py-2 text-xs font-semibold text-sky-600 hover:text-sky-700 bg-sky-50 rounded-lg transition-colors"
          >
            Clear all filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mt-8">
          {filteredCourses.map(course => {
            const isEnrolled = enrolledCourseIds.includes(course.id);
            const totalLessons = course.modules.reduce((acc, m) => acc + m.lessons.length, 0);
            const completedInCourse = course.modules
              .flatMap(m => m.lessons)
              .filter(l => completedLessonIds.includes(l.id)).length;
            const progressPercent = totalLessons > 0 ? Math.round((completedInCourse / totalLessons) * 100) : 0;

            return (
              <div
                key={course.id}
                className="group flex flex-col bg-white rounded-xl border border-slate-200/90 overflow-hidden hover:border-slate-300 hover:shadow-md transition-all duration-200"
              >
                {/* Image Container with Safe Fallback */}
                <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-100 border-b border-slate-100">
                  <img
                    src={course.image}
                    alt={course.imageAlt}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-300"
                  />

                  {/* Gradient Scrim for Visual Integrity */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />

                  {/* Top-right Lab Highlight Badge */}
                  <div className="absolute top-3 right-3 bg-slate-950/80 backdrop-blur-xs text-white px-2.5 py-1 rounded-md text-[11px] font-medium flex items-center gap-1.5 border border-slate-700/50">
                    <FlaskConical className="w-3 h-3 text-sky-400" />
                    <span>Includes Interactive Lab</span>
                  </div>

                  {/* Bottom Image Overlay Metadata */}
                  <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs text-white/90">
                    <span className="font-semibold text-white drop-shadow-xs">{course.categoryLabel}</span>
                    <span className="font-mono text-white/90 drop-shadow-xs">{course.durationHours} Hours Dedicated</span>
                  </div>
                </div>

                {/* Card Content Area */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Unboxed Metadata Line (Zero-pill compliant) */}
                    <div className="flex items-center gap-2 text-xs text-slate-500 mb-2">
                      <span className="font-medium text-slate-700">{course.level}</span>
                      <span aria-hidden="true">·</span>
                      <span className="flex items-center gap-1 text-slate-700 font-medium">
                        <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-500" />
                        <span className="font-mono tabular-nums">{course.rating}</span>
                        <span className="text-slate-400">({course.reviewsCount.toLocaleString()})</span>
                      </span>
                      <span aria-hidden="true">·</span>
                      <span className="font-mono tabular-nums text-slate-600">{course.studentsCount.toLocaleString()} scholars</span>
                    </div>

                    {/* Course Title */}
                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-sky-700 transition-colors tracking-tight leading-snug">
                      {course.title}
                    </h3>

                    {/* Tagline */}
                    <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {course.tagline}
                    </p>

                    {/* Instructor Info */}
                    <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-2.5">
                      <div className="w-7 h-7 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center text-[10px] font-bold text-slate-700 font-mono">
                        {course.instructor.avatarInitials}
                      </div>
                      <div className="truncate">
                        <span className="text-xs font-semibold text-slate-900 block truncate">{course.instructor.name}</span>
                        <span className="text-[11px] text-slate-500 block truncate">{course.instructor.affiliation}</span>
                      </div>
                    </div>

                    {/* Progress Bar (if enrolled) */}
                    {isEnrolled && (
                      <div className="mt-4 p-2.5 bg-slate-50 rounded-lg border border-slate-100">
                        <div className="flex justify-between text-xs text-slate-600 mb-1">
                          <span>Course Progress</span>
                          <span className="font-mono font-semibold text-sky-700 tabular-nums">{progressPercent}%</span>
                        </div>
                        <div className="w-full bg-slate-200 rounded-full h-1.5 overflow-hidden">
                          <div
                            className="bg-sky-600 h-full rounded-full transition-all duration-300"
                            style={{ width: `${progressPercent}%` }}
                          />
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2.5">
                    <button
                      onClick={() => onSelectCourse(course)}
                      className="flex-1 py-2.5 px-4 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold rounded-lg flex items-center justify-center gap-1.5 transition-colors whitespace-nowrap shadow-xs"
                    >
                      <Play className="w-3.5 h-3.5 fill-current" />
                      <span>{isEnrolled ? 'Continue Course' : 'Enter Classroom'}</span>
                    </button>

                    <button
                      onClick={() => onLaunchSimulation(course)}
                      className="py-2.5 px-3 bg-sky-50 hover:bg-sky-100 text-sky-700 border border-sky-200/80 text-xs font-semibold rounded-lg flex items-center gap-1.5 transition-colors whitespace-nowrap"
                      title="Launch the course laboratory directly"
                    >
                      <FlaskConical className="w-3.5 h-3.5 text-sky-600" />
                      <span>Launch Lab</span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
};
