export type SubjectCategory = 'all' | 'ai-ml' | 'biology' | 'cloud' | 'algorithms';

export type DifficultyLevel = 'All Levels' | 'Foundational' | 'Intermediate' | 'Advanced';

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export interface Flashcard {
  id: string;
  front: string;
  back: string;
  hint?: string;
}

export interface DiscussionPost {
  id: string;
  author: string;
  avatarText: string;
  role: 'Student' | 'Instructor' | 'Teaching Assistant';
  timeAgo: string;
  content: string;
  upvotes: number;
  repliesCount: number;
}

export interface Lesson {
  id: string;
  title: string;
  durationMinutes: number;
  type: 'video' | 'lab' | 'quiz' | 'reading';
  videoDurationText: string;
  summary: string;
  contentMarkdown: string;
  simulationType?: 'neural-net' | 'plant-vascular' | 'load-balancer' | 'sorting-viz';
  quizQuestions?: QuizQuestion[];
  flashcards?: Flashcard[];
}

export interface CourseModule {
  id: string;
  title: string;
  description: string;
  lessons: Lesson[];
}

export interface Instructor {
  name: string;
  title: string;
  affiliation: string;
  avatarInitials: string;
  bio: string;
}

export interface Course {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  category: 'ai-ml' | 'biology' | 'cloud' | 'algorithms';
  categoryLabel: string;
  level: DifficultyLevel;
  durationHours: number;
  rating: number;
  reviewsCount: number;
  studentsCount: number;
  image: string;
  imageAlt: string;
  instructor: Instructor;
  prerequisites: string[];
  skillsLearned: string[];
  modules: CourseModule[];
}

export interface LearningPath {
  id: string;
  title: string;
  role: string;
  estimatedWeeks: number;
  coursesCount: number;
  description: string;
  milestones: {
    title: string;
    description: string;
    courseId: string;
  }[];
}

export interface UserProgress {
  enrolledCourseIds: string[];
  completedLessonIds: string[];
  quizScores: Record<string, number>; // quizId -> score (0-100)
  notes: Record<string, string>; // courseId -> notes
  bookmarkedLessonIds: string[];
  xp: number;
  streakDays: number;
  lastStudiedDate: string;
  userName: string;
}
