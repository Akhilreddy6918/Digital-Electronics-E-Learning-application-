import { ReferenceBook } from '../types/digitalElectronics';

export const REFERENCE_BOOKS: ReferenceBook[] = [
  {
    id: 'book-1',
    title: 'Digital Design',
    author: 'M. Morris Mano',
    edition: '3rd Edition',
    publisher: 'Prentice Hall / Pearson (PHI)',
    year: '2002',
    description: 'The definitive textbook for digital logic design, binary number systems, Boolean algebra minimization, combinational arithmetic blocks, and clocked synchronous sequential circuits.',
    syllabusUnitsCovered: [
      'Unit I: Number Systems, Binary Codes, Boolean Postulates',
      'Unit II: Karnaugh Map Minimization, Tabular Method',
      'Unit III: Adders, Subtractors, Decoders, Encoders, Multiplexers',
      'Unit IV: Flip-Flops, Registers, Counters, Sequential Circuits'
    ],
    keyChapters: [
      'Chapter 1: Binary Systems & Hexadecimal Codes',
      'Chapter 2: Boolean Algebra & Logic Gates',
      'Chapter 3: Gate-Level Minimization & K-Maps',
      'Chapter 4: Combinational Logic Circuits',
      'Chapter 5: Synchronous Sequential Logic & Flip-Flops',
      'Chapter 6: Registers and Counters'
    ]
  },
  {
    id: 'book-2',
    title: 'Digital Fundamentals – A Systems Approach',
    author: 'Thomas L. Floyd',
    edition: '1st Edition',
    publisher: 'Pearson Education',
    year: '2013',
    description: 'A practical, system-level perspective on modern digital hardware, programmable logic architectures, timing parameters, and real-world circuit implementations.',
    syllabusUnitsCovered: [
      'Unit I: Digital Concepts, Logic Levels, Noise Margin',
      'Unit III: Combinational Arithmetic & Logic Functions',
      'Unit IV: Latches, Flip-Flops, Timing Skew, Shift Registers',
      'Unit V: Memory Technologies (ROM, RAM, Flash) & Programmable Devices'
    ],
    keyChapters: [
      'Chapter 1: Digital Concepts & Number Systems',
      'Chapter 2: Logic Gates & Universal Logic',
      'Chapter 3: Combinational Logic Analysis',
      'Chapter 5: Functions of Combinational Logic',
      'Chapter 6: Latches, Flip-Flops, and Timers',
      'Chapter 7: Shift Registers & Counter Cascades',
      'Chapter 8: Data Storage & Memory Technologies'
    ]
  },
  {
    id: 'book-3',
    title: 'Switching Theory and Logic Design',
    author: 'A. Anand Kumar',
    edition: '2nd Edition',
    publisher: 'PHI Learning',
    year: '2014',
    description: 'Tailored specifically for Indian university engineering curricula (JNTUH, Anna Univ, VTU), with extensive worked-out exam problems on Quine-McCluskey, flip-flop conversions, and state machines.',
    syllabusUnitsCovered: [
      'Unit I: Base Conversions, Complements, Hamming Codes, Universal Gates',
      'Unit II: Prime Implicants, Quine-McCluskey Tabular Reduction',
      'Unit III: Adders, Multipliers, Comparators, Code Converters',
      'Unit IV: Sequential Circuits, Modulo Counters, FSM Design',
      'Unit V: Programmable Logic (PLA, PAL) & Semiconductor Memories'
    ],
    keyChapters: [
      'Chapter 1: Number Systems and Codes',
      'Chapter 2: Boolean Algebra and Switching Functions',
      'Chapter 3: Minimization of Switching Functions (K-Map & Tabular)',
      'Chapter 4: Combinational Logic Design',
      'Chapter 5: Sequential Circuits - Latches & Flip-Flops',
      'Chapter 6: Counters and Shift Registers',
      'Chapter 7: Finite State Machines & State Reduction'
    ]
  },
  {
    id: 'book-4',
    title: 'Switching and Finite Automata Theory',
    author: 'Zvi Kohavi & Niraj K. Jha',
    edition: '3rd Edition',
    publisher: 'Cambridge University Press',
    year: '2010',
    description: 'Advanced theoretical treatise on state minimization, incompletely specified machines, merger graphs, compatibility tables, and fault-tolerant sequential synthesis.',
    syllabusUnitsCovered: [
      'Unit II: Tabular Prime Implicants and Minimal Cover Bounds',
      'Unit IV: Finite State Machines, Mealy vs Moore, State Equivalence Partitions',
      'Unit IV: Machine Minimization using Merger Graphs & Merger Tables',
      'Unit V: Asynchronous Sequential Circuits, Hazards & Critical Races'
    ],
    keyChapters: [
      'Chapter 3: Threshold Logic & Symmetrical Functions',
      'Chapter 4: Map and Tabular Minimization Methods',
      'Chapter 9: Finite-State Machines & State Equivalence',
      'Chapter 10: Minimization of Completely & Incompletely Specified Machines',
      'Chapter 11: Asynchronous Sequential Circuits & Hazards'
    ]
  }
];
