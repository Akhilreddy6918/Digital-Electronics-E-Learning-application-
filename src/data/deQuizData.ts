import { QuizQuestion } from '../types/digitalElectronics';

export const DE_QUIZ_QUESTIONS: QuizQuestion[] = [
  // UNIT I QUESTIONS
  {
    id: 'quiz-u1-1',
    unitId: 'unit-1',
    topic: 'Number Systems & Base Conversions',
    questionText: 'Given that (292)₁₀ = (1204)₆, what is the unknown base b if (292)₁₀ = (1204)ᵦ?',
    options: ['b = 5', 'b = 6', 'b = 7', 'b = 8'],
    correctIndex: 1,
    explanation: '1·b³ + 2·b² + 0·b¹ + 4·b⁰ = 292 ⇒ b³ + 2b² = 288. For b = 6: 6³ + 2(6²) = 216 + 72 = 288. Hence, b = 6.',
    difficulty: 'Medium',
    sourceNotesSection: '1.1 Number Systems and Base Conversions',
    isPyq: true,
    pyqYear: 2023
  },
  {
    id: 'quiz-u1-2',
    unitId: 'unit-1',
    topic: 'Complements & Binary Arithmetic',
    questionText: "What is the result of subtracting (10010)₂ from (11010)₂ using 2's complement arithmetic?",
    options: ['(01000)₂ (+8)', '(10100)₂ (-4)', '(00110)₂ (+6)', '(11000)₂ (-8)'],
    correctIndex: 0,
    explanation: "2's complement of 10010 is 01101 + 1 = 01110. Adding to 11010: 11010 + 01110 = 101000. The end carry of 1 is discarded, leaving 01000₂ (+8 in decimal).",
    difficulty: 'Easy',
    sourceNotesSection: "1.2 Complements and Binary Arithmetic",
    isPyq: true,
    pyqYear: 2020
  },
  {
    id: 'quiz-u1-3',
    unitId: 'unit-1',
    topic: 'Logic Gates & Duality',
    questionText: 'A bubbled NOR gate (NOR gate with inverter bubbles on its inputs) is logically equivalent to which gate?',
    options: ['NAND Gate', 'AND Gate', 'OR Gate', 'XOR Gate'],
    correctIndex: 1,
    explanation: "By De Morgan's Law: (A' + B')' = A'' · B'' = A · B. Thus, an active-low input NOR gate is functionally identical to an AND gate.",
    difficulty: 'Easy',
    sourceNotesSection: '1.4 Logic Gates, Universal Gates & Realization',
    isPyq: true,
    pyqYear: 2024
  },
  {
    id: 'quiz-u1-4',
    unitId: 'unit-1',
    topic: 'Error Correcting Codes',
    questionText: 'In a 7-bit even parity Hamming code, if the calculated error syndrome vector is S₃S₂S₁ = 101₂, which bit position contains the error?',
    options: ['Bit position 3', 'Bit position 4', 'Bit position 5', 'Bit position 6'],
    correctIndex: 2,
    explanation: 'The binary value of the syndrome directly indicates the decimal index of the erroneous bit. 101₂ = 5 in decimal, meaning Bit 5 is corrupted.',
    difficulty: 'Medium',
    sourceNotesSection: '1.3 Binary Codes, Gray Codes & Hamming Code',
    isPyq: true,
    pyqYear: 2024
  },
  {
    id: 'quiz-u1-5',
    unitId: 'unit-1',
    topic: 'Boolean Theorems',
    questionText: 'According to the Consensus Theorem, what is the simplified form of AB + A\'C + BC?',
    options: ['AB + BC', 'A\'C + BC', 'AB + A\'C', 'A + B + C'],
    correctIndex: 2,
    explanation: 'The third term BC is the consensus term formed between AB and A\'C. Multiplying BC by (A + A\') proves that it is redundant and can be dropped.',
    difficulty: 'Easy',
    sourceNotesSection: '1.5 Laws of Boolean Algebra & Consensus Theorem',
    isPyq: true,
    pyqYear: 2023
  },

  // UNIT II QUESTIONS
  {
    id: 'quiz-u2-1',
    unitId: 'unit-2',
    topic: 'K-Map Minimization',
    questionText: 'What defines an Essential Prime Implicant (EPI) in a Karnaugh Map?',
    options: [
      'It contains the largest number of 1s on the map.',
      'It covers at least one minterm that is not covered by any other prime implicant.',
      'It covers only don\'t-care conditions.',
      'It can be eliminated without changing the function output.'
    ],
    correctIndex: 1,
    explanation: 'An Essential Prime Implicant is uniquely indispensable because it covers at least one 1-cell that no other prime implicant can cover.',
    difficulty: 'Easy',
    sourceNotesSection: '2.2 Prime Implicants and Don\'t-Care Optimization',
    isPyq: true,
    pyqYear: 2024
  },
  {
    id: 'quiz-u2-2',
    unitId: 'unit-2',
    topic: 'K-Map Rules',
    questionText: 'How many literals are eliminated when a group of 8 adjacent cells (Octet) is looped in a 4-variable K-map?',
    options: ['1 literal', '2 literals', '3 literals', '4 literals'],
    correctIndex: 2,
    explanation: 'Each doubling of group size eliminates 1 literal. A pair (2) eliminates 1, a quad (4) eliminates 2, and an octet (8) eliminates log₂(8) = 3 literals.',
    difficulty: 'Easy',
    sourceNotesSection: '2.1 K-Map Fundamentals',
    isPyq: false
  },

  // UNIT III QUESTIONS
  {
    id: 'quiz-u3-1',
    unitId: 'unit-3',
    topic: 'Combinational Adders',
    questionText: 'How many Half Adders and OR gates are needed to construct a 1-bit Full Adder?',
    options: [
      '1 Half Adder and 2 OR gates',
      '2 Half Adders and 1 OR gate',
      '3 Half Adders and 1 OR gate',
      '2 Half Adders and 2 OR gates'
    ],
    correctIndex: 1,
    explanation: 'HA1 computes S1 = A ⊕ B and C1 = AB. HA2 computes Sum = S1 ⊕ Cin and C2 = S1 · Cin. A single 2-input OR gate combines C1 + C2 to produce Cout.',
    difficulty: 'Easy',
    sourceNotesSection: '3.1 Binary Adders and Subtractors',
    isPyq: true,
    pyqYear: 2022
  },
  {
    id: 'quiz-u3-2',
    unitId: 'unit-3',
    topic: 'Multiplexers',
    questionText: 'To build a 32:1 Multiplexer using 16:1 Multiplexers and 2:1 Multiplexers, what is the minimum required count?',
    options: [
      'Two 16:1 MUX and one 2:1 MUX',
      'Four 16:1 MUX and one 4:1 MUX',
      'One 16:1 MUX and two 2:1 MUX',
      'Two 16:1 MUX and two 2:1 MUX'
    ],
    correctIndex: 0,
    explanation: 'Two 16:1 MUXes take 16 inputs each (total 32). Their single outputs are fed to a 2:1 MUX controlled by the most significant select line S₄.',
    difficulty: 'Medium',
    sourceNotesSection: '3.3 Multiplexers (Data Selectors)',
    isPyq: true,
    pyqYear: 2020
  },

  // UNIT IV QUESTIONS
  {
    id: 'quiz-u4-1',
    unitId: 'unit-4',
    topic: 'Sequential Timing',
    questionText: 'What is the characteristic equation of an edge-triggered JK Flip-Flop?',
    options: [
      'Q_next = J · Q + K\' · Q\'',
      'Q_next = J · Q\' + K\' · Q',
      'Q_next = J · K + Q',
      'Q_next = J\' · Q + K · Q\''
    ],
    correctIndex: 1,
    explanation: 'From the JK truth table, Q_next = J·Q\' + K\'·Q. When J=1, K=0 it sets (1); when J=0, K=1 it resets (0); when J=K=1 it toggles (Q\').',
    difficulty: 'Easy',
    sourceNotesSection: '4.2 JK, D, T Flip-Flops & Master-Slave JK',
    isPyq: true,
    pyqYear: 2023
  },
  {
    id: 'quiz-u4-2',
    unitId: 'unit-4',
    topic: 'Counters',
    questionText: 'How many unique states does a 10-bit Ring Counter possess compared to a 10-bit Johnson Counter?',
    options: [
      'Ring: 10 states; Johnson: 20 states',
      'Ring: 1024 states; Johnson: 20 states',
      'Ring: 20 states; Johnson: 10 states',
      'Ring: 10 states; Johnson: 10 states'
    ],
    correctIndex: 0,
    explanation: 'An n-bit Ring Counter circulates a single 1 through n flip-flops (n states = 10). A Johnson Counter feeds back inverted output Q\', generating 2n states = 20.',
    difficulty: 'Medium',
    sourceNotesSection: '4.6 Synchronous Counters & Ring/Johnson Counters',
    isPyq: true,
    pyqYear: 2023
  },
  {
    id: 'quiz-u4-3',
    unitId: 'unit-4',
    topic: 'Finite State Machines',
    questionText: 'What is the primary operational distinction between Mealy and Moore state machine models?',
    options: [
      'Mealy machines cannot have clock inputs.',
      'In a Moore machine, output depends strictly on current state; in a Mealy machine, output depends on both current state and current input.',
      'Moore machines always use fewer states than Mealy machines.',
      'Mealy outputs are always active-low while Moore outputs are active-high.'
    ],
    correctIndex: 1,
    explanation: 'Moore: Output Z = λ(S). Mealy: Output Z = λ(S, X). Mealy machines can respond within the current clock cycle when inputs change.',
    difficulty: 'Easy',
    sourceNotesSection: '4.7 Finite State Machines & State Minimization',
    isPyq: true,
    pyqYear: 2021
  },

  // UNIT V QUESTIONS
  {
    id: 'quiz-u5-1',
    unitId: 'unit-5',
    topic: 'Logic Families',
    questionText: 'Why does a standard CMOS logic gate consume near-zero static DC power compared to TTL logic?',
    options: [
      'Because CMOS operates at sub-zero temperatures.',
      'Because one of the series-complementary transistors (PMOS or NMOS) is always turned completely OFF in steady state, blocking path to ground.',
      'Because CMOS uses passive inductors instead of transistors.',
      'Because CMOS does not require a power supply V_DD.'
    ],
    correctIndex: 1,
    explanation: 'In steady state (High or Low), either the pull-up PMOS or pull-down NMOS network is cut off, allowing only minute sub-nanoampere leakage current.',
    difficulty: 'Medium',
    sourceNotesSection: '5.5 CMOS Logic Circuits and Transmission Gates',
    isPyq: true,
    pyqYear: 2023
  },
  {
    id: 'quiz-u5-2',
    unitId: 'unit-5',
    topic: 'Memory Devices',
    questionText: 'Why does Dynamic RAM (DRAM) require continuous periodic refresh cycles while Static RAM (SRAM) does not?',
    options: [
      'DRAM uses bipolar diodes that overheat.',
      'DRAM stores bits as electrostatic charge on tiny microscopic capacitors that leak charge over time.',
      'DRAM is magnetic core memory.',
      'DRAM has no clock signal.'
    ],
    correctIndex: 1,
    explanation: 'Each DRAM bit is stored on a 1T-1C capacitor (a few femtofarads). Subthreshold leakage drains this charge, requiring refresh every 64ms.',
    difficulty: 'Easy',
    sourceNotesSection: '5.2 SRAM vs DRAM Architectures',
    isPyq: true,
    pyqYear: 2021
  }
];
