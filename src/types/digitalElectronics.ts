export type UnitId = 'unit-1' | 'unit-2' | 'unit-3' | 'unit-4' | 'unit-5' | 'supplemental';

export interface VideoRecord {
  id: string;
  sequence_no: number;
  title: string;
  youtube_url: string;
  youtube_id?: string;
  unit: string;
  unitId: UnitId;
  topic: string;
  description: string;
  content_type: 'concept' | 'problem-solving' | 'quiz' | 'simulation';
  notes_reference?: string;
  quiz_available: boolean;
  simulator_available: boolean;
  simulator_circuit_id?: string;
  pyq_topics?: string[];
  isVerified?: boolean;
}

export interface NoteSection {
  id: string;
  title: string;
  unitId: UnitId;
  unitTitle: string;
  summary: string;
  pageNumber: number;
  content: string; // Rich markdown-like or HTML text for fast rendering and search highlighting
  keyFormulas?: string[];
  circuitIds?: string[];
  videoSequenceNos?: number[];
}

export interface BooleanTransferFunction {
  standardForm: string;
  expandedForm?: string;
  deMorganForm?: string;
  characteristicEquation?: string;
  wordDescription: string;
}

export interface CircuitDefinition {
  id: string;
  name: string;
  category: 'Gates' | 'Combinational' | 'Sequential' | 'Counters & Registers' | 'Logic Families';
  unitId: UnitId;
  description: string;
  booleanExpression?: string;
  booleanDetails?: BooleanTransferFunction;
  inputs: { name: string; label: string; defaultVal: 0 | 1 }[];
  outputs: { name: string; label: string }[];
  truthTable: {
    inputs: number[];
    outputs: number[];
    state?: string;
  }[];
  computeOutput: (inputs: Record<string, number>, state?: any) => { outputs: Record<string, number>; nextState?: any };
  initialState?: any;
  hasClock?: boolean;
  notesRef?: string;
  videoRef?: number;
}

export interface QuizQuestion {
  id: string;
  unitId: UnitId;
  topic: string;
  questionText: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  sourceNotesSection: string;
  isPyq?: boolean;
  pyqYear?: number;
}

export interface PYQQuestion {
  questionNumber: string;
  part: 'Part-A' | 'Part-B';
  subQuestion?: string;
  unitId: UnitId;
  topic: string;
  text: string;
  marks: number;
  orWith?: string;
  solutionHint: string;
}

export interface PYQPaper {
  year: number;
  month: string;
  code: string;
  regulation: 'R18' | 'R22';
  title: string;
  subject: string;
  branch: string;
  timeHours: number;
  maxMarks: number;
  instructions: string[];
  questions: PYQQuestion[];
}

export interface ReferenceBook {
  id: string;
  title: string;
  author: string;
  edition: string;
  publisher: string;
  year?: string;
  coverImage?: string;
  description: string;
  syllabusUnitsCovered: string[];
  keyChapters: string[];
}
