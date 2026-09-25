import { PYQPaper } from '../types/digitalElectronics';

export const PYQ_PAPERS: PYQPaper[] = [
  // 2024 PAPER
  {
    year: 2024,
    month: 'February 2024',
    code: '183AQ',
    regulation: 'R22',
    title: 'B.Tech II Year I Semester Examinations – February 2024',
    subject: 'DIGITAL LOGIC DESIGN',
    branch: 'Electronics and Communication Engineering (ECE)',
    timeHours: 3,
    maxMarks: 60,
    instructions: [
      'This question paper contains two parts: Part-A (10 Marks) and Part-B (50 Marks).',
      'Part-A is a compulsory question consisting of ten sub-questions carrying 1 mark each.',
      'Part-B consists of ten questions (2 to 11) carrying 10 marks each. Answer one question from each unit.'
    ],
    questions: [
      // Part A
      {
        questionNumber: '1.a',
        part: 'Part-A',
        unitId: 'unit-1',
        topic: 'Error Detecting Codes',
        text: 'How many types of parity are there? Name them.',
        marks: 1,
        solutionHint: 'Two types: Even Parity (total count of 1s in codeword is made even) and Odd Parity (total count of 1s is made odd).'
      },
      {
        questionNumber: '1.b',
        part: 'Part-A',
        unitId: 'unit-1',
        topic: 'Logic Gates',
        text: 'A bubbled NOR gate is equivalent to which gate?',
        marks: 1,
        solutionHint: 'By De Morgan’s theorem: (A\' + B\')\' = A\'\' · B\'\' = A · B. A bubbled NOR gate is equivalent to an AND gate.'
      },
      {
        questionNumber: '1.c',
        part: 'Part-A',
        unitId: 'unit-2',
        topic: 'Boolean Minimization',
        text: 'What is meant by real minimal expression?',
        marks: 1,
        solutionHint: 'A minimal expression is an algebraic sum of prime implicants containing the minimum number of literals and product terms.'
      },
      {
        questionNumber: '1.d',
        part: 'Part-A',
        unitId: 'unit-2',
        topic: 'K-Map Minimization',
        text: 'What are essential prime implicants?',
        marks: 1,
        solutionHint: 'A prime implicant that covers at least one minterm (1-cell) that cannot be covered by any other prime implicant.'
      },
      {
        questionNumber: '1.e',
        part: 'Part-A',
        unitId: 'unit-2',
        topic: 'Hazards in Digital Circuits',
        text: 'What is meant by Hazards?',
        marks: 1,
        solutionHint: 'Unwanted temporary switching transients or glitches on circuit outputs caused by unequal path propagation delays.'
      },
      {
        questionNumber: '1.f',
        part: 'Part-A',
        unitId: 'unit-4',
        topic: 'Flip-Flops',
        text: 'Draw the circuit diagram of Master Slave JK flip flop.',
        marks: 1,
        solutionHint: 'Two clocked JK flip-flops in series: Master clocked with CLK, Slave clocked with inverted CLK (CLK_bar).'
      },
      {
        questionNumber: '1.g',
        part: 'Part-A',
        unitId: 'unit-4',
        topic: 'Shift Registers',
        text: 'What is a register? Give applications of it.',
        marks: 1,
        solutionHint: 'A collection of flip-flops used for binary data storage. Applications: CPU accumulators, data buffering, serial-parallel conversion.'
      },
      {
        questionNumber: '1.h',
        part: 'Part-A',
        unitId: 'unit-4',
        topic: 'Counters',
        text: 'What is a BCD counter?',
        marks: 1,
        solutionHint: 'A decade counter that cycles through 10 valid BCD states (0000 to 1001) and resets asynchronously upon reaching 1010.'
      },
      {
        questionNumber: '1.i',
        part: 'Part-A',
        unitId: 'unit-4',
        topic: 'Finite State Machines',
        text: 'Define state Compatibility in FSMs.',
        marks: 1,
        solutionHint: 'Two states are compatible if for every input sequence, the outputs are identical or unspecified, and next states are compatible.'
      },
      {
        questionNumber: '1.j',
        part: 'Part-A',
        unitId: 'unit-4',
        topic: 'Algorithmic State Machines',
        text: 'What is a link path in an ASM chart?',
        marks: 1,
        solutionHint: 'A directed path from the exit of a state box through zero or more decision boxes leading to an exit or entry of the next state box.'
      },

      // Part B
      {
        questionNumber: '2.a',
        part: 'Part-B',
        unitId: 'unit-1',
        topic: 'Number Codes',
        text: 'Express the Decimal Digits 0-9 in BCD, 2421, 84-2-1 and Excess-3 codes.',
        marks: 5,
        solutionHint: 'Tabulate 0-9 for 8421 BCD, self-complementing 2421 (weights 2,4,2,1), negative weights 8,4,-2,-1, and Excess-3 (BCD + 0011).'
      },
      {
        questionNumber: '2.b',
        part: 'Part-B',
        unitId: 'unit-1',
        topic: 'Base Conversion',
        text: 'Solve for x: (i) (257)8 = (x)2, (ii) (21.625)10 = (x)8, (iii) (BC.2)16 = (x)8, (iv) (33)10 = (201)x',
        marks: 5,
        solutionHint: '(i) 2=010, 5=101, 7=111 -> 010101111_2. (ii) 21/8=2 R5, 0.625*8=5 -> 25.5_8. (iv) 2x^2 + 0x + 1 = 33 -> 2x^2=32 -> x=4.'
      },
      {
        questionNumber: '3.a',
        part: 'Part-B',
        unitId: 'unit-1',
        topic: 'Universal Gates',
        text: 'Show that NAND gate and NOR gate are universal gates.',
        marks: 5,
        orWith: 'Question 2',
        solutionHint: 'Synthesize NOT, AND, OR, XOR using strictly NAND gates, and then repeat using strictly NOR gates.'
      },
      {
        questionNumber: '3.b',
        part: 'Part-B',
        unitId: 'unit-1',
        topic: 'Hamming Error Correction',
        text: 'Detect and correct errors, if any, in the even parity Hamming code words: (i) 1100110, (ii) 0011101, (iii) 0111110.',
        marks: 5,
        orWith: 'Question 2',
        solutionHint: 'Check parity syndromes S1, S2, S3 using bit checks (1,3,5,7), (2,3,6,7), (4,5,6,7). Invert bit at syndrome decimal index.'
      },
      {
        questionNumber: '4.a',
        part: 'Part-B',
        unitId: 'unit-2',
        topic: 'K-Map Minimization',
        text: 'Simplify the Boolean expression using K-map: F = A\' + AB + AB D\' + A B\' D\' + C.',
        marks: 5,
        solutionHint: 'Expand terms into minterms on 4-variable map with variables A, B, C, D. Group adjacent 1s into maximal quads/octets.'
      },
      {
        questionNumber: '4.b',
        part: 'Part-B',
        unitId: 'unit-2',
        topic: 'Quine-McCluskey Method',
        text: 'Obtain the minimal expression for f = Sum(0, 1, 6, 7, 8, 9, 13, 14, 15) using the tabular method.',
        marks: 5,
        solutionHint: 'Group minterms by weight of 1s (Group 0, 1, 2, 3, 4). Match adjacent group terms, construct prime implicant table, find EPIs.'
      },
      {
        questionNumber: '6.a',
        part: 'Part-B',
        unitId: 'unit-3',
        topic: 'Multiplexers',
        text: 'Implement the logic expression using (i) 4:1 MUX, (ii) 8:1 MUX: F = Sum(0, 2, 4, 7).',
        marks: 5,
        solutionHint: 'For 8:1 MUX, connect select lines to A,B,C and data lines I0=I2=I4=I7=1, others=0. For 4:1 MUX, use A,B as select lines and derive inputs as C, C\', 0, 1.'
      },
      {
        questionNumber: '6.b',
        part: 'Part-B',
        unitId: 'unit-3',
        topic: 'Code Converters',
        text: 'Design a 4-bit gray-to-binary code converter.',
        marks: 5,
        solutionHint: 'Derive B3 = G3, B2 = G3 ⊕ G2, B1 = G3 ⊕ G2 ⊕ G1, B0 = G3 ⊕ G2 ⊕ G1 ⊕ G0 using 3 cascaded XOR gates.'
      }
    ]
  },

  // 2023 PAPER
  {
    year: 2023,
    month: 'April/May 2023',
    code: '153AN',
    regulation: 'R18',
    title: 'B.Tech II Year I Semester Examinations – April/May 2023',
    subject: 'DIGITAL SYSTEM DESIGN',
    branch: 'Electronics and Communication Engineering (ECE)',
    timeHours: 3,
    maxMarks: 75,
    instructions: [
      'Part-A is compulsory and carries 25 marks. Answer all questions.',
      'Part-B carries 50 marks. Answer any one question from each unit (10 marks each).'
    ],
    questions: [
      {
        questionNumber: '1.a',
        part: 'Part-A',
        unitId: 'unit-1',
        topic: 'Radix Representation',
        text: 'Given that (292)10 = (1204)b, determine the value of b.',
        marks: 2,
        solutionHint: '1·b^3 + 2·b^2 + 0·b + 4 = 292 => b^3 + 2b^2 = 288 => For b=6: 216 + 72 = 288. Hence base b = 6.'
      },
      {
        questionNumber: '1.c',
        part: 'Part-A',
        unitId: 'unit-3',
        topic: 'Combinational Logic',
        text: 'What is the difference between Decoder and Demultiplexer?',
        marks: 2,
        solutionHint: 'Decoder has n input lines and 2^n output lines (activates corresponding minterm). DEMUX has 1 data input, n select lines, and 2^n output lines.'
      },
      {
        questionNumber: '1.e',
        part: 'Part-A',
        unitId: 'unit-4',
        topic: 'Flip-Flops',
        text: 'What is a Flip-Flop? What is the difference between Flip Flop and Latch?',
        marks: 2,
        solutionHint: 'Latch is level-sensitive (transparent while enable is high); Flip-flop is edge-triggered (samples inputs strictly on clock edge transition).'
      },
      {
        questionNumber: '3.b',
        part: 'Part-B',
        unitId: 'unit-1',
        topic: 'Consensus Theorem',
        text: 'State and prove consensus theorem.',
        marks: 4,
        solutionHint: 'AB + A\'C + BC = AB + A\'C. Proof: Multiply BC by (A + A\') and apply absorption law.'
      },
      {
        questionNumber: '4.b',
        part: 'Part-B',
        unitId: 'unit-3',
        topic: 'Magnitude Comparator',
        text: 'With a neat design procedure, explain the implementation of a 4-bit Magnitude Comparator.',
        marks: 5,
        solutionHint: 'Derive equality condition using XNOR: x_i = A_i ⊙ B_i. Formulate A > B and A < B priority expansion.'
      },
      {
        questionNumber: '6.b',
        part: 'Part-B',
        unitId: 'unit-4',
        topic: 'Flip-Flop Conversion',
        text: 'Describe the conversion of SR-FlipFlop to JK-FlipFlop.',
        marks: 4,
        solutionHint: 'Set S = J·Q\' and R = K·Q using AND gates driving SR inputs.'
      },
      {
        questionNumber: '10.a',
        part: 'Part-B',
        unitId: 'unit-5',
        topic: 'CMOS Logic',
        text: 'Draw the circuit of CMOS NOR gate and explain its operation. List some advantages of CMOS.',
        marks: 5,
        solutionHint: 'PMOS transistors in series tied to VDD; NMOS transistors in parallel tied to GND. Advantages: zero static power, high noise margin, high fan-out.'
      },
      {
        questionNumber: '11.b',
        part: 'Part-B',
        unitId: 'unit-5',
        topic: 'Transmission Gate',
        text: 'Draw the symbol of CMOS transmission gate and write its advantages and applications.',
        marks: 5,
        solutionHint: 'Parallel PMOS and NMOS with complementary control inputs C and C\'. Bilateral analog switch with rail-to-rail dynamic range.'
      }
    ]
  },

  // 2022 PAPER
  {
    year: 2022,
    month: 'March 2022',
    code: '153AN',
    regulation: 'R18',
    title: 'B.Tech II Year I Semester Examinations – March 2022',
    subject: 'DIGITAL SYSTEM DESIGN',
    branch: 'Electronics and Communication Engineering (ECE)',
    timeHours: 3,
    maxMarks: 75,
    instructions: ['Answer any five questions. All questions carry equal marks.'],
    questions: [
      {
        questionNumber: '1.b',
        part: 'Part-B',
        unitId: 'unit-1',
        topic: 'Duality',
        text: 'Obtain dual of the following Boolean expressions: (i) AB + A(B+C) + B\'(B+D), (ii) A + B + A\'B\'C.',
        marks: 7,
        solutionHint: 'Change AND to OR, and OR to AND. Leave variables complemented or uncomplemented as they are.'
      },
      {
        questionNumber: '3.b',
        part: 'Part-B',
        unitId: 'unit-3',
        topic: 'Full Adder Realization',
        text: 'Construct a full adder using only two half adders and one OR gate.',
        marks: 7,
        solutionHint: 'HA1 inputs A,B -> Sum1, Carry1. HA2 inputs Sum1, Cin -> Sum, Carry2. OR gate inputs Carry1, Carry2 -> Cout.'
      },
      {
        questionNumber: '4.b',
        part: 'Part-B',
        unitId: 'unit-4',
        topic: 'Synchronous Counters',
        text: 'Design a synchronous modulo-12 counter using JK flip-flop.',
        marks: 10,
        solutionHint: 'Requires 4 flip-flops (2^4 = 16 > 12). States 0 to 11. Derive JK excitation equations via K-maps for QA, QB, QC, QD.'
      },
      {
        questionNumber: '7.b',
        part: 'Part-B',
        unitId: 'unit-4',
        topic: 'Sequence Detectors',
        text: 'Design a 1101 sequence detector and draw its logic diagram.',
        marks: 10,
        solutionHint: 'Construct state diagram: S0 (Initial), S1 (1), S2 (11), S3 (110). Input 1 in S3 triggers output Z=1 and returns to S1.'
      }
    ]
  },

  // 2021 PAPER
  {
    year: 2021,
    month: 'March 2021',
    code: '153AN',
    regulation: 'R18',
    title: 'B.Tech II Year I Semester Examinations – March 2021',
    subject: 'DIGITAL SYSTEM DESIGN',
    branch: 'Electronics and Communication Engineering (ECE)',
    timeHours: 3,
    maxMarks: 75,
    instructions: ['Answer any five questions. All questions carry equal marks.'],
    questions: [
      {
        questionNumber: '1.b',
        part: 'Part-B',
        unitId: 'unit-1',
        topic: 'Gray Code',
        text: 'How do you convert a gray number to binary? Generate a 4-bit gray code directly using the mirror image property.',
        marks: 8,
        solutionHint: 'Start with 0, 1 -> mirror and prefix with 0 and 1 -> repeat for 3 and 4 bits. Gray to binary: B3=G3, B_i = B_{i+1} ⊕ G_i.'
      },
      {
        questionNumber: '2.b',
        part: 'Part-B',
        unitId: 'unit-3',
        topic: 'Code Converters',
        text: 'Design a circuit that converts 8421 BCD code to XS-3 code.',
        marks: 7,
        solutionHint: 'Truth table: BCD (0-9) to XS-3 (BCD + 3). Minterms for w, x, y, z derived via 4-variable K-maps with don\'t cares (10-15).'
      },
      {
        questionNumber: '3.a',
        part: 'Part-B',
        unitId: 'unit-4',
        topic: 'Master-Slave JK',
        text: 'With a neat circuit diagram and waveforms explain the operation of Master Slave JK flip flop.',
        marks: 8,
        solutionHint: 'Master samples J,K when clock=1; slave transfers to Q when clock falls to 0. Eliminates race around condition.'
      },
      {
        questionNumber: '8.a',
        part: 'Part-B',
        unitId: 'unit-5',
        topic: 'Logic Families',
        text: 'Mention the characteristics of different logic families. Also compare the performance of TTL, CMOS and ECL logic.',
        marks: 7,
        solutionHint: 'Comparison metrics: Propagation delay (ECL fastest), Power dissipation (CMOS lowest static), Noise margin (CMOS best), Fan-out.'
      }
    ]
  },

  // 2020 PAPER
  {
    year: 2020,
    month: 'October 2020',
    code: '153AN',
    regulation: 'R18',
    title: 'B.Tech II Year I Semester Examinations – October 2020',
    subject: 'DIGITAL SYSTEM DESIGN',
    branch: 'Electronics and Communication Engineering (ECE)',
    timeHours: 2,
    maxMarks: 75,
    instructions: ['Answer any five questions. All questions carry equal marks.'],
    questions: [
      {
        questionNumber: '1.b',
        part: 'Part-B',
        unitId: 'unit-1',
        topic: '2\'s Complement Subtraction',
        text: 'Perform subtraction using 2\'s complement: (i) 11010 - 10010, (ii) 100 - 110000.',
        marks: 8,
        solutionHint: '(i) 11010 + 01110 = 101000 -> Discard carry -> 01000 (+8). (ii) 000100 + 010000 = 010100 -> No carry -> negative -> -101100.'
      },
      {
        questionNumber: '4.b',
        part: 'Part-B',
        unitId: 'unit-3',
        topic: 'Multiplexers',
        text: 'Design a 32:1 Multiplexer using two 16:1 and one 2:1 Multiplexers.',
        marks: 7,
        solutionHint: '32 inputs require 5 select lines S4..S0. Feed S3..S0 to both 16:1 MUX. Feed S4 to select line of 2:1 MUX to choose between the two 16:1 outputs.'
      },
      {
        questionNumber: '5.a',
        part: 'Part-B',
        unitId: 'unit-4',
        topic: 'Universal Shift Register',
        text: 'Design a 4 bit universal shift register and draw the circuit with the given mode of operation table.',
        marks: 8,
        solutionHint: 'Four 4:1 multiplexers driving four D flip-flops. Select lines S1, S0: 00=Hold, 01=Shift Right, 10=Shift Left, 11=Parallel Load.'
      },
      {
        questionNumber: '7.a',
        part: 'Part-B',
        unitId: 'unit-4',
        topic: 'Synchronous Counters',
        text: 'Design a Mod-6 synchronous counter using J-K flip flops.',
        marks: 8,
        solutionHint: 'Counts 0 to 5 (000 to 101). Requires 3 flip-flops. Next state table and JK excitation equations: JA=QC, KA=QC, etc.'
      },
      {
        questionNumber: '8.a',
        part: 'Part-B',
        unitId: 'unit-1',
        topic: 'Diode Logic',
        text: 'Draw and explain the circuit diagram of a diode OR gate for positive logic.',
        marks: 7,
        solutionHint: 'Anodes connected to inputs A and B; cathodes tied together to load resistor R to ground. If either input is High, diode conducts and pulls output High.'
      }
    ]
  }
];
