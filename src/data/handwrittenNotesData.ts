export interface HandwrittenPage {
  id: string;
  unitId: 'unit-1' | 'unit-2' | 'unit-3' | 'unit-4' | 'unit-5';
  unitName: string;
  unitTitle: string;
  pageNumber: number;
  globalPage: number;
  title: string;
  category: 'Theory' | 'Derivation' | 'Conversion' | 'Circuit' | 'Table' | 'Design Problem';
  summary: string;
  sections: {
    heading: string;
    points?: string[];
    equations?: string[];
    table?: {
      headers: string[];
      rows: (string | number)[][];
    };
    example?: {
      problem: string;
      solution: string[];
    };
    diagramNote?: string;
  }[];
  keyTakeaways: string[];
}

export const HANDWRITTEN_UNITS = [
  {
    id: 'unit-1',
    name: 'Unit 1',
    title: 'Number Systems, Binary Codes & Boolean Algebra',
    pageCount: 34,
    description: 'Number bases, conversions, 1s & 2s complement, weighted/cyclic codes, Hamming code, basic/universal gates, Boolean laws, and canonical forms.'
  },
  {
    id: 'unit-2',
    name: 'Unit 2',
    title: 'K-Maps, Minimization & IC Logic Families',
    pageCount: 18,
    description: '2 to 5 variable Karnaugh maps, prime implicants, Quine-McCluskey tabular method, digital IC characteristics, TTL and CMOS circuits.'
  },
  {
    id: 'unit-3',
    name: 'Unit 3',
    title: 'Sequential Circuits, Flip-Flops, Counters & Registers',
    pageCount: 30,
    description: 'Latches, clocked SR/JK/D/T flip-flops, excitation tables, state diagrams, ripple counters, synchronous counters, shift registers, and sequence generators.'
  },
  {
    id: 'unit-4',
    name: 'Unit 4',
    title: 'Combinational Logic Circuits & MSI Devices',
    pageCount: 36,
    description: 'Adders, subtractors, look-ahead carry, BCD arithmetic, magnitude comparators, code converters, multiplexers, demultiplexers, encoders, and decoders.'
  },
  {
    id: 'unit-5',
    name: 'Unit 5',
    title: 'Semiconductor Memories & PLDs (PROM, PLA, PAL)',
    pageCount: 25,
    description: 'Memory hierarchy, SRAM vs DRAM, ROM classification, flash memory, synchronous SRAM, PLDs architecture, PLA and PAL implementation.'
  }
];

export const HANDWRITTEN_PAGES: HandwrittenPage[] = [
  // ==========================================
  // UNIT 1: NUMBER SYSTEMS, CODES & BOOLEAN ALGEBRA (34 Pages)
  // ==========================================
  {
    id: 'hw-u1-p1',
    unitId: 'unit-1',
    unitName: 'Unit 1',
    unitTitle: 'Number Systems & Boolean Algebra',
    pageNumber: 1,
    globalPage: 1,
    title: 'Number Systems, Radix & MSB/LSB Basics',
    category: 'Theory',
    summary: 'Foundations of number representation, radix definition, and significance of bit weights.',
    sections: [
      {
        heading: 'Number Systems Definition',
        points: [
          'A number system is a basis for counting various items.',
          'Decimal number system has 10 digits: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9.',
          'Modern computers communicate and operate with binary numbers which use only digits 0 & 1.',
          'When decimal quantities are represented in binary form, they take more digits. Example: (18)₁₀ = (10010)₂.'
        ]
      },
      {
        heading: 'Radix (Base)',
        points: [
          'The number of different symbols used by a number system is called Radix (or) Base.',
          'Binary: Radix = 2 (Symbols: 0, 1)',
          'Octal: Radix = 8 (Symbols: 0 to 7)',
          'Decimal: Radix = 10 (Symbols: 0 to 9)',
          'Hexadecimal: Radix = 16 (Symbols: 0 to 9, A, B, C, D, E, F)'
        ]
      },
      {
        heading: 'Most Significant Bit (MSB)',
        points: [
          'The left-most bit which has greatest weight is called Most Significant Bit (MSB).',
          'Example in 10101: the leftmost 1 is MSB (weight 2⁴ = 16), rightmost 1 is LSB (weight 2⁰ = 1).'
        ]
      }
    ],
    keyTakeaways: ['Radix = total valid symbols in base', 'MSB has highest positional weight']
  },
  {
    id: 'hw-u1-p2',
    unitId: 'unit-1',
    unitName: 'Unit 1',
    unitTitle: 'Number Systems & Boolean Algebra',
    pageNumber: 2,
    globalPage: 2,
    title: 'Positional Weights & Number System Structures',
    category: 'Theory',
    summary: 'Positional weighting of binary, octal, decimal, and hexadecimal systems.',
    sections: [
      {
        heading: 'Least Significant Bit (LSB) & Weights',
        points: [
          'The right-most bit which has least weight is called Least Significant Bit (LSB).',
          'Weight (or) Value represents the value of the digit position relative to the radix point.'
        ]
      },
      {
        heading: 'Radix Weights Across Bases',
        points: [
          'Binary: ... 2³, 2², 2¹, 2⁰ . 2⁻¹, 2⁻², 2⁻³ ... Example: (10101.1101)₂',
          'Decimal: ... 10³, 10², 10¹, 10⁰ . 10⁻¹, 10⁻² ... Example: (98.27)₁₀',
          'Octal: ... 8³, 8², 8¹, 8⁰ . 8⁻¹, 8⁻² ... Example: (704.26)₈',
          'Hexadecimal: ... 16³, 16², 16¹, 16⁰ . 16⁻¹, 16⁻² ... Example: (4A.B2)₁₆'
        ]
      }
    ],
    keyTakeaways: ['Integer powers positive to left', 'Fractional powers negative to right']
  },
  {
    id: 'hw-u1-p3',
    unitId: 'unit-1',
    unitName: 'Unit 1',
    unitTitle: 'Number Systems & Boolean Algebra',
    pageNumber: 3,
    globalPage: 3,
    title: 'Decimal to Binary Conversion',
    category: 'Conversion',
    summary: 'Technique of successive division by 2 for integer part and multiplication by 2 for fractional part.',
    sections: [
      {
        heading: 'Conversion Rules',
        points: [
          'Integer part: Successively divide by 2, collect remainders in upward direction (bottom to top).',
          'Fractional part: Successively multiply by 2, collect integer part of product downwards.'
        ]
      },
      {
        heading: 'Solved Examples',
        example: {
          problem: 'Convert (72)₁₀ and (0.95)₁₀ to Binary',
          solution: [
            '72/2 = 36 rem 0; 36/2 = 18 rem 0; 18/2 = 9 rem 0; 9/2 = 4 rem 1; 4/2 = 2 rem 0; 2/2 = 1 rem 0; 1/2 = 0 rem 1.',
            'Reading upwards: (72)₁₀ = (1001000)₂.',
            '0.95 × 2 = 1.90 (1); 0.90 × 2 = 1.80 (1); 0.80 × 2 = 1.60 (1); 0.60 × 2 = 1.20 (1); 0.20 × 2 = 0.40 (0); 0.40 × 2 = 0.80 (0); 0.80 × 2 = 1.60 (1)...',
            'Reading downwards: (0.95)₁₀ = (0.11110011...)₂.'
          ]
        }
      }
    ],
    keyTakeaways: ['Divide integer part by target radix', 'Multiply fractional part by target radix']
  },
  {
    id: 'hw-u1-p4',
    unitId: 'unit-1',
    unitName: 'Unit 1',
    unitTitle: 'Number Systems & Boolean Algebra',
    pageNumber: 4,
    globalPage: 4,
    title: 'Decimal to Octal & Hexadecimal Conversions',
    category: 'Conversion',
    summary: 'Conversion of decimal numbers with fractional parts to octal (base 8) and hexadecimal (base 16).',
    sections: [
      {
        heading: 'Decimal to Octal Examples',
        example: {
          problem: 'Convert (378.93)₁₀ and (35.45)₁₀ to Octal',
          solution: [
            '378/8 = 47 rem 2; 47/8 = 5 rem 7; 5/8 = 0 rem 5 => (378)₁₀ = (572)₈.',
            '0.93 × 8 = 7.44 (7); 0.44 × 8 = 3.52 (3); 0.52 × 8 = 4.16 (4); 0.16 × 8 = 1.28 (1)... => (0.7341217...)₈.',
            '(378.93)₁₀ = (572.7341217...)₈.',
            '(35.45)₁₀ = (43.34632...)₈.'
          ]
        }
      },
      {
        heading: 'Decimal to Hexadecimal Example',
        example: {
          problem: 'Convert (2598.675)₁₀ to Hexadecimal',
          solution: [
            '2598/16 = 162 rem 6; 162/16 = 10 (A) rem 2 => (A66)₁₆.',
            '0.675 × 16 = 10.8 (A); 0.8 × 16 = 12.8 (C); 0.8 × 16 = 12.8 (C)...',
            '(2598.675)₁₀ = (A66.ACC...)₁₆.'
          ]
        }
      }
    ],
    keyTakeaways: ['Hexadecimal uses letters A-F for values 10-15', 'Radix multiplication isolates fractional digits']
  },
  {
    id: 'hw-u1-p5',
    unitId: 'unit-1',
    unitName: 'Unit 1',
    unitTitle: 'Number Systems & Boolean Algebra',
    pageNumber: 5,
    globalPage: 5,
    title: 'Binary, Octal, Hexadecimal to Decimal Conversion',
    category: 'Conversion',
    summary: 'Direct expansion using positional polynomial powers.',
    sections: [
      {
        heading: 'Binary to Decimal',
        example: {
          problem: 'Convert (101011.11001)₂ to Decimal',
          solution: [
            '= 1×2⁵ + 0×2⁴ + 1×2³ + 0×2² + 1×2¹ + 1×2⁰ + 1×2⁻¹ + 1×2⁻² + 0×2⁻³ + 0×2⁻⁴ + 1×2⁻⁵',
            '= 32 + 8 + 2 + 1 + 0.5 + 0.25 + 0.03125 = (43.78125)₁₀.'
          ]
        }
      },
      {
        heading: 'Octal & Hexadecimal to Decimal',
        example: {
          problem: 'Convert (742.2)₈ and (A26.B1)₁₆ to Decimal',
          solution: [
            '(742.2)₈ = 7×8² + 4×8¹ + 2×8⁰ + 2×8⁻¹ = 448 + 32 + 2 + 0.25 = (482.25)₁₀.',
            '(A26.B1)₁₆ = 10×16² + 2×16¹ + 6×16⁰ + 11×16⁻¹ + 1×16⁻² = 2560 + 32 + 6 + 0.6875 + 0.0039 = (2598.69)₁₀.'
          ]
        }
      }
    ],
    keyTakeaways: ['Value = Σ digit × base^position', 'Hex coefficients: A=10, B=11, C=12, D=13, E=14, F=15']
  },
  {
    id: 'hw-u1-p6',
    unitId: 'unit-1',
    unitName: 'Unit 1',
    unitTitle: 'Number Systems & Boolean Algebra',
    pageNumber: 6,
    globalPage: 6,
    title: 'Binary-Octal & Binary-Hexadecimal Shortcuts',
    category: 'Conversion',
    summary: 'Rapid grouping methods: 3-bit groups for octal, 4-bit groups for hexadecimal.',
    sections: [
      {
        heading: 'Binary to Octal & Vice-Versa',
        points: [
          'Group binary bits in 3s starting from radix point (left for integer, right for fraction).',
          '(11011011.0110111)₂ -> (011)(011)(011).(011)(011)(100) -> (333.334)₈.',
          'Octal to Binary: replace each octal digit with exact 3-bit binary equivalent.'
        ]
      },
      {
        heading: 'Binary to Hexadecimal',
        points: [
          'Group binary bits in 4s starting from radix point.',
          '(11011011.01101110)₂ -> (1101)(1011).(0110)(1110) -> (DB.6E)₁₆.',
          '(001111000111.11110000)₂ -> (0011)(1100)(0111).(1111)(0000) -> (3C7.F0)₁₆.'
        ]
      }
    ],
    keyTakeaways: ['2³ = 8 -> 3 bits per octal digit', '2⁴ = 16 -> 4 bits per hex digit']
  },
  {
    id: 'hw-u1-p7',
    unitId: 'unit-1',
    unitName: 'Unit 1',
    unitTitle: 'Number Systems & Boolean Algebra',
    pageNumber: 7,
    globalPage: 7,
    title: 'Octal-Hexadecimal Conversions via Binary Intermediate',
    category: 'Conversion',
    summary: 'Two-step conversion process linking octal and hexadecimal using binary as the bridge.',
    sections: [
      {
        heading: 'Hexadecimal to Binary',
        example: {
          problem: 'Convert (A26.B1)₁₆ and (1BCD)₁₆ to Binary',
          solution: [
            '(A26.B1)₁₆ = (1010 0010 0110 . 1011 0001)₂.',
            '(1BCD)₁₆ = (0001 1011 1100 1101)₂.'
          ]
        }
      },
      {
        heading: 'Octal to Hexadecimal',
        example: {
          problem: 'Convert (746.22)₈ and (256.235)₈ to Hexadecimal',
          solution: [
            'Step 1: (746.22)₈ = (111 100 110 . 010 010)₂.',
            'Step 2: Group into 4s: (0001 1110 0110 . 0100 1000)₂ = (1E6.48)₁₆.',
            '(256.235)₈ = (010 101 110 . 010 011 101)₂ -> (0AE.4E8)₁₆.'
          ]
        }
      }
    ],
    keyTakeaways: ['Octal to Hex: 3-bit binary expand then 4-bit regroup', 'Never convert octal to hex directly']
  },
  {
    id: 'hw-u1-p8',
    unitId: 'unit-1',
    unitName: 'Unit 1',
    unitTitle: 'Number Systems & Boolean Algebra',
    pageNumber: 8,
    globalPage: 8,
    title: 'Complete 0-15 Multi-Base Conversion Reference Table',
    category: 'Table',
    summary: 'Comprehensive cross-reference table comparing Decimal, Binary, Octal, and Hexadecimal.',
    sections: [
      {
        heading: 'Reference Master Table (0 to 15)',
        table: {
          headers: ['Decimal', 'Binary (8421)', 'Octal', 'Hexadecimal'],
          rows: [
            ['0', '0000', '0', '0'],
            ['1', '0001', '1', '1'],
            ['2', '0010', '2', '2'],
            ['3', '0011', '3', '3'],
            ['4', '0100', '4', '4'],
            ['5', '0101', '5', '5'],
            ['6', '0110', '6', '6'],
            ['7', '0111', '7', '7'],
            ['8', '1000', '10', '8'],
            ['9', '1001', '11', '9'],
            ['10', '1010', '12', 'A'],
            ['11', '1011', '13', 'B'],
            ['12', '1100', '14', 'C'],
            ['13', '1101', '15', 'D'],
            ['14', '1110', '16', 'E'],
            ['15', '1111', '17', 'F']
          ]
        }
      }
    ],
    keyTakeaways: ['Decimal 10-15 maps to hex A-F', 'Octal resets count at 7 -> 10']
  },
  {
    id: 'hw-u1-p9',
    unitId: 'unit-1',
    unitName: 'Unit 1',
    unitTitle: 'Number Systems & Boolean Algebra',
    pageNumber: 9,
    globalPage: 9,
    title: 'Digital Logic Gates: Basic Gates (NOT, AND)',
    category: 'Circuit',
    summary: 'Definitions, ANSI logic symbols, transfer functions, and truth tables for NOT and AND gates.',
    sections: [
      {
        heading: 'Classification of Logic Gates',
        points: [
          'Basic Gates: NOT, AND, OR',
          'Universal Gates: NAND, NOR',
          'Special Gates: Ex-OR, Ex-NOR'
        ]
      },
      {
        heading: 'NOT Gate (Inverter)',
        equations: ['Y = Ā (or A\')'],
        points: [
          'Definition: Produces complement of input.',
          'Truth table: A=0 -> Y=1; A=1 -> Y=0.'
        ]
      },
      {
        heading: 'AND Gate',
        equations: ['Y = A · B'],
        points: [
          'Produces HIGH output only when ALL inputs are HIGH. If at least one input is LOW, output is LOW.',
          'Truth table: (0,0)->0, (0,1)->0, (1,0)->0, (1,1)->1.'
        ]
      }
    ],
    keyTakeaways: ['NOT is unary operator', 'AND acts as logical series switch']
  },
  {
    id: 'hw-u1-p10',
    unitId: 'unit-1',
    unitName: 'Unit 1',
    unitTitle: 'Number Systems & Boolean Algebra',
    pageNumber: 10,
    globalPage: 10,
    title: 'Digital Logic Gates: OR, NAND & NOR Gates',
    category: 'Circuit',
    summary: 'Definitions, ANSI logic symbols, Boolean transfer equations, and truth tables.',
    sections: [
      {
        heading: 'OR Gate',
        equations: ['Y = A + B'],
        points: [
          'Produces HIGH output when AT LEAST ONE input is HIGH. Low only when all inputs are low.',
          'Truth table: (0,0)->0, (0,1)->1, (1,0)->1, (1,1)->1.'
        ]
      },
      {
        heading: 'NAND Gate (Universal)',
        equations: ['Y = (A · B)̄'],
        points: [
          'Equivalent to AND gate followed by NOT gate.',
          'Output is LOW only when all inputs are HIGH; HIGH if at least one input is LOW.',
          'Truth table: (0,0)->1, (0,1)->1, (1,0)->1, (1,1)->0.'
        ]
      },
      {
        heading: 'NOR Gate (Universal)',
        equations: ['Y = (A + B)̄'],
        points: [
          'Equivalent to OR gate followed by NOT gate.',
          'Output is HIGH only when all inputs are LOW; LOW if at least one input is HIGH.',
          'Truth table: (0,0)->1, (0,1)->0, (1,0)->0, (1,1)->0.'
        ]
      }
    ],
    keyTakeaways: ['NAND is inverted AND', 'NOR is inverted OR']
  },
  {
    id: 'hw-u1-p11',
    unitId: 'unit-1',
    unitName: 'Unit 1',
    unitTitle: 'Number Systems & Boolean Algebra',
    pageNumber: 11,
    globalPage: 11,
    title: 'Special Logic Gates: XOR & XNOR',
    category: 'Circuit',
    summary: 'Exclusive-OR and Exclusive-NOR gate equations, symbols, parity behavior, and truth tables.',
    sections: [
      {
        heading: 'Exclusive-OR (XOR) Gate',
        equations: ['Y = A ⊕ B = ĀB + AB̄'],
        points: [
          'Produces HIGH output when inputs are DIFFERENT (odd parity of 1s).',
          'Output is LOW when both inputs are identical.',
          'Truth table: (0,0)->0, (0,1)->1, (1,0)->1, (1,1)->0.'
        ]
      },
      {
        heading: 'Exclusive-NOR (XNOR) Gate / Equivalence Gate',
        equations: ['Y = A ⊙ B = (A ⊕ B)̄ = ĀB̄ + AB'],
        points: [
          'Produces HIGH output when both inputs are SAME (coincidence/equality detector).',
          'Truth table: (0,0)->1, (0,1)->0, (1,0)->0, (1,1)->1.'
        ]
      }
    ],
    keyTakeaways: ['XOR detects difference / odd parity', 'XNOR detects equality / coincidence']
  },
  {
    id: 'hw-u1-p12',
    unitId: 'unit-1',
    unitName: 'Unit 1',
    unitTitle: 'Number Systems & Boolean Algebra',
    pageNumber: 12,
    globalPage: 12,
    title: 'Boolean Algebra Laws: Identity, Commutative, Complementation',
    category: 'Derivation',
    summary: 'Axioms, identity elements, commutative laws with truth table proofs, and double complementation.',
    sections: [
      {
        heading: 'Boolean Algebra Concept',
        points: [
          'Mathematical system defining logical operations (AND, OR, NOT) performed on variables (A, B, C...).',
          'Boolean functions: expressions constructed by connecting Boolean constants/variables with operators. Ex: f(A,B,C) = (A + B̄)C.'
        ]
      },
      {
        heading: 'Identity & Commutative Laws',
        equations: [
          'Identity: A · 1 = A, A + 0 = A, A + 1 = 1, A · 0 = 0',
          'Commutative: A + B = B + A, A · B = B · A',
          'Double Complementation: Ā̄ = A'
        ],
        points: [
          'Commutative law is verified by truth table: column (A+B) matches (B+A) exactly for all four binary combinations.'
        ]
      }
    ],
    keyTakeaways: ['Identity element for OR is 0, for AND is 1', 'Double inversion cancels out']
  },
  {
    id: 'hw-u1-p13',
    unitId: 'unit-1',
    unitName: 'Unit 1',
    unitTitle: 'Number Systems & Boolean Algebra',
    pageNumber: 13,
    globalPage: 13,
    title: 'Distributive & Associative Properties with Proofs',
    category: 'Derivation',
    summary: 'Truth table proof of Distributive laws (including A + BC = (A+B)(A+C)) and Associative laws.',
    sections: [
      {
        heading: 'Distributive Property',
        equations: [
          '1) A(B + C) = AB + AC',
          '2) A + BC = (A + B)(A + C) [Crucial Boolean dual identity]'
        ],
        points: [
          'Proof of A + BC = (A+B)(A+C) via 8-row truth table demonstrates column A+BC is identical to (A+B)(A+C) across all 8 input combinations.'
        ]
      },
      {
        heading: 'Associative Property',
        equations: [
          '1) A + (B + C) = (A + B) + C',
          '2) A · (BC) = (AB) · C'
        ]
      }
    ],
    keyTakeaways: ['Second distributive law A+BC = (A+B)(A+C) is valid in Boolean algebra unlike ordinary algebra']
  },
  {
    id: 'hw-u1-p14',
    unitId: 'unit-1',
    unitName: 'Unit 1',
    unitTitle: 'Number Systems & Boolean Algebra',
    pageNumber: 14,
    globalPage: 14,
    title: 'Absorption, Idempotency & Redundant (Elimination) Laws',
    category: 'Derivation',
    summary: 'Complementarity, sameness (idempotency), absorption identities and proofs, and redundant rule.',
    sections: [
      {
        heading: 'Complementarity & Idempotency',
        equations: [
          'A · Ā = 0, A + Ā = 1',
          'A + A = A, A · A = A'
        ]
      },
      {
        heading: 'Absorption Law',
        equations: [
          'A + AB = A [Proof: A(1 + B) = A·1 = A]',
          'A(A + B) = A [Proof: A·A + AB = A + AB = A(1 + B) = A]'
        ]
      },
      {
        heading: 'Redundant (Elimination) Law',
        equations: [
          'A + ĀB = A + B [Proof: (A + Ā)(A + B) = 1·(A + B) = A + B]',
          'A(Ā + B) = AB [Proof: AĀ + AB = 0 + AB = AB]'
        ]
      }
    ],
    keyTakeaways: ['Absorption removes redundant sub-terms', 'Redundant rule eliminates complemented literal']
  },
  {
    id: 'hw-u1-p15',
    unitId: 'unit-1',
    unitName: 'Unit 1',
    unitTitle: 'Number Systems & Boolean Algebra',
    pageNumber: 15,
    globalPage: 15,
    title: 'De Morgan\'s Theorems & Duality Principle',
    category: 'Derivation',
    summary: 'Two De Morgan theorems with truth table proofs, and duality theorem rules and examples.',
    sections: [
      {
        heading: 'De Morgan\'s Theorems',
        equations: [
          'Theorem 1: (AB)̄ = Ā + B̄ ("Complement of product is sum of individual complements")',
          'Theorem 2: (A + B)̄ = Ā · B̄ ("Complement of sum is product of individual complements")'
        ],
        points: ['Both proven by 4-row truth tables matching columns exactly.']
      },
      {
        heading: 'Duality Theorem Rules',
        points: [
          '1. Change each OR sign (+) to AND (·).',
          '2. Change each AND sign (·) to OR (+).',
          '3. Complement any 0 or 1 appearing in expression (0 <-> 1).',
          'NOTE: Keep variables as they are (do NOT complement variables for dual!).'
        ],
        example: {
          problem: 'Find Dual of: A + Ā = 1; x + (x̄ȳ + x̄z); ABC + D̄E + BC̄E',
          solution: [
            'Dual of A + Ā = 1 is A · Ā = 0.',
            'Dual of x + (x̄ȳ + x̄z) is x · [(x̄ + ȳ) · (x̄ + z)].',
            'Dual of ABC + D̄E + BC̄E is (A + B + C)(D̄ + E)(B + C̄ + E).'
          ]
        }
      }
    ],
    keyTakeaways: ['Break the bar, change the sign', 'In duality, never complement variables']
  },
  {
    id: 'hw-u1-p16',
    unitId: 'unit-1',
    unitName: 'Unit 1',
    unitTitle: 'Number Systems & Boolean Algebra',
    pageNumber: 16,
    globalPage: 16,
    title: 'Solved Problems on Boolean Simplification',
    category: 'Design Problem',
    summary: 'Exam-standard Boolean minimization and complement problems solved step-by-step.',
    sections: [
      {
        heading: 'Problem 1: Complement of ABC + D̄E + BC̄E',
        points: [
          '(ABC + D̄E + BC̄E)̄ = (ABC)̄ · (D̄E)̄ · (BC̄E)̄ = (Ā + B̄ + C̄)(D + Ē)(B̄ + C + Ē).'
        ]
      },
      {
        heading: 'Problem 2: Minimize f = A\'B + A\'BC\' + A\'BCD + A\'BC\'D\'E',
        points: [
          'Factor out A\'B: f = A\'B [ 1 + C\' + CD + C\'D\'E ].',
          'Since 1 + anything = 1: f = A\'B(1) = A\'B.',
          'Complement f̄ = (A\'B)\' = A + B\'.'
        ]
      },
      {
        heading: 'Problem 3: Reduce f = A[B + C̄((AB + AC̄)̄)]',
        points: [
          'Applying De Morgan to inner term: (AB + AC̄)̄ = (AB)̄ · (AC̄)̄ = (Ā + B̄)(Ā + C) = Ā + B̄C.',
          'f = A[ B + C̄(Ā + B̄C) ] = A[ B + ĀC̄ + 0 ] = AB + AĀC̄ = AB + 0 = AB.'
        ]
      }
    ],
    keyTakeaways: ['Term factoring reduces large polynomial quickly', 'A[Ā + ...] always eliminates via A·Ā = 0']
  },
  {
    id: 'hw-u1-p17',
    unitId: 'unit-1',
    unitName: 'Unit 1',
    unitTitle: 'Number Systems & Boolean Algebra',
    pageNumber: 17,
    globalPage: 17,
    title: 'Binary Arithmetic & Signed Binary Number Systems',
    category: 'Theory',
    summary: 'Binary addition, binary subtraction truth tables, Sign-Magnitude, 1s complement, and 2s complement.',
    sections: [
      {
        heading: 'Binary Addition & Subtraction',
        points: [
          'Addition: 0+0=0, 0+1=1, 1+0=1, 1+1=0 (carry 1). Ex: (23)₁₀ + (15)₁₀ = (38)₁₀ -> 10111 + 01111 = 100110₂.',
          'Subtraction: 0-0=0, 1-0=1, 1-1=0, 0-1=1 (borrow 1). Ex: (11)₁₀ - (5)₁₀ = (6)₁₀ -> 1011 - 0101 = 0110₂.'
        ]
      },
      {
        heading: 'Representation of Signed Numbers',
        points: [
          '1. Sign-Magnitude: MSB=0 for positive, MSB=1 for negative, remaining bits are magnitude. +7 = 0 111, -7 = 1 111.',
          '2. 1s Complement: Invert each bit (1 -> 0, 0 -> 1). +7 = 0111, -7 = 1000.',
          '3. 2s Complement: Add 1 to LSB of 1s complement. +7 = 0111, -7 = 1000 + 1 = 1001.'
        ]
      }
    ],
    keyTakeaways: ['2s complement eliminates +0 and -0 ambiguity', 'Standard representation used in microprocessors']
  },
  {
    id: 'hw-u1-p18',
    unitId: 'unit-1',
    unitName: 'Unit 1',
    unitTitle: 'Number Systems & Boolean Algebra',
    pageNumber: 18,
    globalPage: 18,
    title: 'Subtraction Using 1\'s Complement Method',
    category: 'Conversion',
    summary: 'Hardware advantages of complement arithmetic and detailed 1s complement subtraction cases.',
    sections: [
      {
        heading: 'Advantages of Complement Subtraction',
        points: [
          'Hardware reduction: instead of having separate digital circuits for addition & subtraction, only addition circuits perform both operations.'
        ]
      },
      {
        heading: '1\'s Complement Subtraction Procedure',
        points: [
          'Step 1: Keep the first number (minuend) as it is.',
          'Step 2: Find the 1\'s complement of the 2nd number (subtrahend).',
          'Step 3: Add Step 1 and Step 2.',
          'Step 4 Case 1: If carry is present, result is positive. Add the end-around carry to LSB to get final result.',
          'Step 4 Case 2: If carry is NOT present, result is negative. Take 1\'s complement of the result.'
        ],
        example: {
          problem: 'Subtract 48 - 23 using 1\'s complement (8-bit)',
          solution: [
            '48 = 00110000; 23 = 00010111.',
            '1\'s comp of 23 = 11101000.',
            'Add: 00110000 + 11101000 = (1) 00011000 (carry 1).',
            'Carry present -> Add carry to LSB: 00011000 + 1 = 00011001 = (+25)₁₀.'
          ]
        }
      }
    ],
    keyTakeaways: ['End-around carry is added when carry = 1', 'Absence of carry means negative result in 1s comp']
  },
  {
    id: 'hw-u1-p19',
    unitId: 'unit-1',
    unitName: 'Unit 1',
    unitTitle: 'Number Systems & Boolean Algebra',
    pageNumber: 19,
    globalPage: 19,
    title: 'Subtraction Using 2\'s Complement Method',
    category: 'Conversion',
    summary: 'Detailed step-by-step algorithms and solved examples for 2s complement subtraction.',
    sections: [
      {
        heading: 'Negative Result in 1s Complement Example',
        points: [
          '23 - 48: 23 = 00010111; 1s comp of 48 = 11001111.',
          'Sum = 11100110. No carry -> result is negative.',
          '1s comp of 11100110 = 00011001 = -(25)₁₀.'
        ]
      },
      {
        heading: '2\'s Complement Subtraction Procedure',
        points: [
          'Step 1: Keep 1st number as it is.',
          'Step 2: Find 2\'s complement of 2nd number.',
          'Step 3: Add Step 1 and Step 2.',
          'Step 4 Case 1: If carry is present, result is positive. DISCARD (IGNORE) the carry!',
          'Step 4 Case 2: If carry is NOT present, result is negative. Take 2\'s complement of the sum to get magnitude.'
        ],
        example: {
          problem: 'Subtract 25 - 14 using 2\'s complement',
          solution: [
            '25 = 00011001; 14 = 00001110.',
            '2\'s comp of 14 = 11110001 + 1 = 11110010.',
            'Add: 00011001 + 11110010 = (1) 00001011.',
            'Discard carry -> Result is positive = (+11)₁₀ = (00001011)₂.'
          ]
        }
      }
    ],
    keyTakeaways: ['In 2s complement, carry is simply discarded', 'Faster because no end-around carry addition needed']
  },
  {
    id: 'hw-u1-p20',
    unitId: 'unit-1',
    unitName: 'Unit 1',
    unitTitle: 'Number Systems & Boolean Algebra',
    pageNumber: 20,
    globalPage: 20,
    title: 'Classification of Binary Codes',
    category: 'Theory',
    summary: 'Taxonomy of Numeric and Alphanumeric codes: weighted, non-weighted, cyclic, error codes.',
    sections: [
      {
        heading: 'Binary Codes Tree',
        points: [
          'Numeric Codes: Weighted (8421, 2421, 5421, 6311) vs Non-Weighted (Gray, Excess-3).',
          'Self-Complementing Codes: 2421, Excess-3, Gray.',
          'Reflective Codes: Excess-3, 2421.',
          'Cyclic (Unit Distance) Codes: Gray Code.',
          'Sequential Codes: 8421, Excess-3.',
          'Error Detecting & Correcting: Hamming Code.',
          'Alphanumeric Codes: ASCII, EBCDIC, Hollerith.'
        ]
      }
    ],
    keyTakeaways: ['Weighted codes assign fixed value to each position', 'Gray code is unit distance (single bit change)']
  },
  {
    id: 'hw-u1-p21',
    unitId: 'unit-1',
    unitName: 'Unit 1',
    unitTitle: 'Number Systems & Boolean Algebra',
    pageNumber: 21,
    globalPage: 21,
    title: 'BCD (Binary Coded Decimal) & Weighted Codes Table',
    category: 'Table',
    summary: 'Detailed explanation of BCD and comparative table of 0-15 in 8421, 2421, and 6311 codes.',
    sections: [
      {
        heading: 'BCD (Binary Coded Decimal)',
        points: [
          'Weighted numeric code where each decimal digit (0-9) is represented as a group of 4 bits.',
          'Example: (12)₁₀ in binary is (1100)₂, but in BCD it is (0001 0010)BCD.',
          'Valid BCD digits are 0000 to 1001. States 1010 to 1111 are INVALID BCD.'
        ]
      }
    ],
    keyTakeaways: ['BCD packs decimal digits 0-9 into 4-bit nibbles', 'Invalid BCD codes require +6 correction']
  },
  {
    id: 'hw-u1-p22',
    unitId: 'unit-1',
    unitName: 'Unit 1',
    unitTitle: 'Number Systems & Boolean Algebra',
    pageNumber: 22,
    globalPage: 22,
    title: 'Excess-3 (XS-3) & Self-Complementing Codes',
    category: 'Theory',
    summary: 'Derivation of Excess-3 code by adding 3 (0011) and demonstration of self-complementing property.',
    sections: [
      {
        heading: 'Excess-3 (XS-3) Code',
        points: [
          'Modified form of BCD derived by adding 3 (0011)₂ to each decimal digit.',
          'Example: (12)₁₀ in BCD = 0001 0010 -> XS-3 = 0100 0101.'
        ]
      },
      {
        heading: 'Self-Complementing Code Principle',
        points: [
          'A code is self-complementing if the 9\'s complement of N (i.e. 9 - N) can be obtained directly by inverting all 0s to 1s and 1s to 0s.',
          'Proof in XS-3: For N=7 (1010), 9-7 = 2 (0101). Notice 1010 inverted is 0101!',
          'For N=4 (0111), 9-4 = 5 (1000). 0111 inverted is 1000! Hence XS-3 is self-complementing.'
        ]
      }
    ],
    keyTakeaways: ['XS-3 = BCD + 0011', 'Self-complementing eases 9s complement arithmetic in ALUs']
  },
  {
    id: 'hw-u1-p23',
    unitId: 'unit-1',
    unitName: 'Unit 1',
    unitTitle: 'Number Systems & Boolean Algebra',
    pageNumber: 23,
    globalPage: 23,
    title: 'Gray Code (Cyclic / Unit Distance) Conversions',
    category: 'Conversion',
    summary: 'XOR logic equations for Binary to Gray and Gray to Binary conversions with diagrams.',
    sections: [
      {
        heading: 'Binary to Gray Code Conversion',
        equations: [
          'G₁ = B₁ (MSB remains same)',
          'G₂ = B₁ ⊕ B₂',
          'G₃ = B₂ ⊕ B₃',
          'G₄ = B₃ ⊕ B₄'
        ],
        example: {
          problem: 'Convert Binary 1101 to Gray Code',
          solution: ['G₁=1; G₂=1⊕1=0; G₃=1⊕0=1; G₄=0⊕1=1 -> Gray = 1011.']
        }
      },
      {
        heading: 'Gray to Binary Code Conversion',
        equations: [
          'B₁ = G₁',
          'B₂ = B₁ ⊕ G₂',
          'B₃ = B₂ ⊕ G₃',
          'B₄ = B₃ ⊕ G₄'
        ]
      }
    ],
    keyTakeaways: ['Binary to Gray XORs adjacent binary bits', 'Gray to Binary XORs generated binary bit with next Gray bit']
  },
  {
    id: 'hw-u1-p24',
    unitId: 'unit-1',
    unitName: 'Unit 1',
    unitTitle: 'Number Systems & Boolean Algebra',
    pageNumber: 24,
    globalPage: 24,
    title: 'Binary-Gray 0-15 Table & Error Control Overview',
    category: 'Table',
    summary: 'Complete conversion table 0-15 and introduction to parity bit and Hamming code concepts.',
    sections: [
      {
        heading: 'Binary to Gray Verification',
        points: [
          'Observe that each consecutive Gray code differs by EXACTLY 1 bit (no switching glitches!).'
        ]
      }
    ],
    keyTakeaways: ['Gray code prevents mechanical shaft encoder read errors']
  },
  {
    id: 'hw-u1-p25',
    unitId: 'unit-1',
    unitName: 'Unit 1',
    unitTitle: 'Number Systems & Boolean Algebra',
    pageNumber: 25,
    globalPage: 25,
    title: 'Parity Bits & Hamming Code Formulation',
    category: 'Derivation',
    summary: 'Parity bit generation and Hamming inequality 2^P >= M + P + 1 for single bit error correction.',
    sections: [
      {
        heading: 'Parity Bit',
        points: [
          'Extra bit included with message to make total count of 1s either even or odd.',
          'Even parity: appends bit so total 1s is even. Ex: for 101 (two 1s), parity bit = 0 -> 0 101.',
          'Odd parity: appends bit so total 1s is odd. Ex: for 101, parity bit = 1 -> 1 101.'
        ]
      },
      {
        heading: 'Hamming Code Formulation',
        equations: ['2^P ≥ M + P + 1 (M = data bits, P = parity bits)'],
        points: [
          'Parity bits located at power-of-2 positions: 1 (2⁰), 2 (2¹), 4 (2²), 8 (2³)...',
          'P₁ checks positions: 1, 3, 5, 7, 9, 11...',
          'P₂ checks positions: 2, 3, 6, 7, 10, 11...',
          'P₃ checks positions: 4, 5, 6, 7, 12, 13, 14, 15...',
          'P₄ checks positions: 8, 9, 10, 11, 12, 13, 14, 15...'
        ]
      }
    ],
    keyTakeaways: ['Hamming code provides single error correction (SEC)', 'Parity bit positions are powers of 2']
  },
  {
    id: 'hw-u1-p26',
    unitId: 'unit-1',
    unitName: 'Unit 1',
    unitTitle: 'Number Systems & Boolean Algebra',
    pageNumber: 26,
    globalPage: 26,
    title: 'Hamming Code Encoding Examples',
    category: 'Design Problem',
    summary: 'Full worked examples for 7-bit even parity and 9-bit odd parity Hamming encoded words.',
    sections: [
      {
        heading: 'Encode Data 1011 into 7-bit Even Parity Hamming Code',
        points: [
          'M = 4. 2^P ≥ 4 + P + 1 -> P = 3 parity bits (total length = 7 bits).',
          'Bit positions: 7=D₄=1, 6=D₃=0, 5=D₂=1, 4=P₃, 3=D₁=1, 2=P₂, 1=P₁.',
          'P₁ checks (1,3,5,7) -> P₁, 1, 1, 1 (three 1s) -> P₁ = 1 (to make even).',
          'P₂ checks (2,3,6,7) -> P₂, 1, 0, 1 (two 1s) -> P₂ = 0.',
          'P₃ checks (4,5,6,7) -> P₃, 1, 0, 1 (two 1s) -> P₃ = 0.',
          'Encoded Message: [1 0 1 0 1 0 1].'
        ]
      },
      {
        heading: 'Encode Data 11101 using Odd Parity Hamming Code',
        points: [
          'M = 5 -> P = 4 parity bits (total length = 9 bits).',
          'Encoded Message: [1 0 1 1 0 1 1 0 0].'
        ]
      }
    ],
    keyTakeaways: ['Substitute data bits into non-power-of-2 positions', 'Parity equation solves unknown P values']
  },
  {
    id: 'hw-u1-p27',
    unitId: 'unit-1',
    unitName: 'Unit 1',
    unitTitle: 'Number Systems & Boolean Algebra',
    pageNumber: 27,
    globalPage: 27,
    title: 'Hamming Code Error Detection & Correction',
    category: 'Design Problem',
    summary: 'Determining error syndromes C3 C2 C1 to pinpoint bit error position and invert corrupt bit.',
    sections: [
      {
        heading: 'Detect & Correct Received Word: 0100011 (Even Parity)',
        points: [
          'Bit positions 7 to 1: b₇=0, b₆=1, b₅=0, b₄=0, b₃=0, b₂=1, b₁=1.',
          'C₁ checks (1,3,5,7): 1 + 0 + 0 + 0 = 1 (odd) -> C₁ = 1.',
          'C₂ checks (2,3,6,7): 1 + 0 + 1 + 0 = 2 (even) -> C₂ = 0.',
          'C₃ checks (4,5,6,7): 0 + 0 + 1 + 0 = 1 (odd) -> C₃ = 1.',
          'Error syndrome (C₃ C₂ C₁)₂ = (1 0 1)₂ = (5)₁₀.',
          'Error is in 5th bit! Invert bit 5 from 0 to 1.',
          'Corrected Code: [0 1 1 0 0 1 1].'
        ]
      }
    ],
    keyTakeaways: ['Syndrome directly gives binary index of error bit']
  },
  {
    id: 'hw-u1-p28',
    unitId: 'unit-1',
    unitName: 'Unit 1',
    unitTitle: 'Number Systems & Boolean Algebra',
    pageNumber: 28,
    globalPage: 28,
    title: 'ASCII Code (American Standard Code for Information Interchange)',
    category: 'Table',
    summary: '7-bit alphanumeric code structure, hex mapping for characters A-Z, a-z, 0-9, and conversion examples.',
    sections: [
      {
        heading: 'ASCII Structure',
        points: [
          '7-bit code representing 2⁷ = 128 characters.',
          'A to Z: (41)₁₆ to (5A)₁₆',
          'a to z: (61)₁₆ to (7A)₁₆',
          '0 to 9: (30)₁₆ to (39)₁₆'
        ]
      },
      {
        heading: 'Worked Examples',
        example: {
          problem: 'Convert "Eee2" and "Binary" to ASCII binary strings',
          solution: [
            'E -> 45₁₆ -> 1000101₂; e -> 65₁₆ -> 1100101₂; 2 -> 32₁₆ -> 0110010₂.',
            '"Binary": B(42)->1000010, i(69)->1101001, n(6E)->1101110, a(61)->1100001, r(72)->1110010, y(79)->1111001.'
          ]
        }
      }
    ],
    keyTakeaways: ['Case difference between uppercase and lowercase is 20 hex (bit 5 flip)']
  },
  {
    id: 'hw-u1-p29',
    unitId: 'unit-1',
    unitName: 'Unit 1',
    unitTitle: 'Number Systems & Boolean Algebra',
    pageNumber: 29,
    globalPage: 29,
    title: 'Universal Gates: NAND-NAND Implementation',
    category: 'Circuit',
    summary: 'Systematic conversion of AND-OR-INVERT logic into pure NAND gates using bubble placement.',
    sections: [
      {
        heading: 'Why NAND & NOR are Universal Gates',
        points: [
          'Any basic logic gate (NOT, AND, OR) and any combinational logic circuit can be implemented exclusively using only NAND or only NOR gates.'
        ]
      },
      {
        heading: 'NAND-NAND Implementation Algorithm',
        points: [
          '1. Draw AOI (AND-OR-INVERT) logic for function.',
          '2. Add bubble at output of AND gate and inputs of OR gate.',
          '3. Wherever bubble is placed in circuit, place NOT gate in same path to compensate.',
          '4. Eliminate double inversions.',
          '5. Replace single input NOT gates with NAND gates.'
        ]
      },
      {
        heading: 'Example: XOR Implementation with NAND',
        equations: ['f = ĀB + AB̄ = A ⊕ B'],
        points: ['Standard conversion results in 5 NAND gates (or 4 minimal).']
      }
    ],
    keyTakeaways: ['Bubbled OR is equivalent to NAND (De Morgan)', 'Double inversion preserves signal polarity']
  },
  {
    id: 'hw-u1-p30',
    unitId: 'unit-1',
    unitName: 'Unit 1',
    unitTitle: 'Number Systems & Boolean Algebra',
    pageNumber: 30,
    globalPage: 30,
    title: 'Universal Gates: NOR-NOR Implementation',
    category: 'Circuit',
    summary: 'Conversion of logic functions into pure NOR gates, demonstrating 5 NOR gates for XOR and 6 NOR gates for XNOR.',
    sections: [
      {
        heading: 'NOR-NOR Algorithm',
        points: [
          '1. Draw AOI logic.',
          '2. Put bubbles at output of OR gate and input of AND gates.',
          '3. Compensate with inverters.',
          '4. Eliminate double inversions.',
          '5. Replace inverters with single-input NOR gates.'
        ]
      }
    ],
    keyTakeaways: ['Bubbled AND is equivalent to NOR (De Morgan)']
  },
  {
    id: 'hw-u1-p31',
    unitId: 'unit-1',
    unitName: 'Unit 1',
    unitTitle: 'Number Systems & Boolean Algebra',
    pageNumber: 31,
    globalPage: 31,
    title: 'Synthesizing All Basic Gates Using NAND Gates',
    category: 'Circuit',
    summary: 'Schematic diagrams showing NOT (1), AND (2), and OR (3) using only 2-input NAND gates.',
    sections: [
      {
        heading: 'Gate Realizations with NAND',
        points: [
          'NOT gate: Tie both inputs of NAND together -> Y = (A·A)̄ = Ā (1 NAND).',
          'AND gate: NAND gate followed by NAND inverter -> Y = ((A·B)̄)̄ = AB (2 NANDs).',
          'OR gate: Invert A and B with NAND inverters, feed to 3rd NAND -> Y = (Ā·B̄)̄ = A + B (3 NANDs).'
        ]
      }
    ],
    keyTakeaways: ['1 NAND for NOT', '2 NANDs for AND', '3 NANDs for OR']
  },
  {
    id: 'hw-u1-p32',
    unitId: 'unit-1',
    unitName: 'Unit 1',
    unitTitle: 'Number Systems & Boolean Algebra',
    pageNumber: 32,
    globalPage: 32,
    title: 'Universal Gates Master Gate Count Summary Table',
    category: 'Table',
    summary: 'Definitive competitive exam table comparing minimum NAND vs NOR gate counts for all 7 logic gates.',
    sections: [
      {
        heading: 'Minimum Gate Counts',
        table: {
          headers: ['Target Gate', 'Only NAND Gates', 'Only NOR Gates'],
          rows: [
            ['1. AND', '2', '3'],
            ['2. OR', '3', '2'],
            ['3. NOT', '1', '1'],
            ['4. NAND', '1', '4'],
            ['5. NOR', '4', '1'],
            ['6. XOR', '4 or 5', '5'],
            ['7. XNOR', '5', '4 or 5']
          ]
        }
      }
    ],
    keyTakeaways: ['NAND is dual to NOR in gate count efficiency', 'Crucial table for GATE/JNTUH questions']
  },
  {
    id: 'hw-u1-p33',
    unitId: 'unit-1',
    unitName: 'Unit 1',
    unitTitle: 'Number Systems & Boolean Algebra',
    pageNumber: 33,
    globalPage: 33,
    title: 'Standard SOP, POS, Minterms & Maxterms',
    category: 'Theory',
    summary: 'Definitions of canonical Sum of Products (minterms m_i) and Product of Sums (maxterms M_i).',
    sections: [
      {
        heading: 'Sum of Products (SOP) & Minterms',
        equations: ['f(A,B,C) = ∑m(3, 5, 6, 7)'],
        points: [
          'A minterm (m_i) is a product term in which all variables exist either in normal or complement form.',
          'Minterm is 1 for corresponding input combination.'
        ]
      },
      {
        heading: 'Product of Sums (POS) & Maxterms',
        equations: ['f(A,B,C) = ∏M(0, 1, 2, 4)'],
        points: [
          'A maxterm (M_i) is a sum term in which all variables exist either in normal or complement form.',
          'Maxterm is 0 for corresponding input combination.'
        ]
      }
    ],
    keyTakeaways: ['∑m terms + ∏M terms = complete set of 2^n binary combinations']
  },
  {
    id: 'hw-u1-p34',
    unitId: 'unit-1',
    unitName: 'Unit 1',
    unitTitle: 'Number Systems & Boolean Algebra',
    pageNumber: 34,
    globalPage: 34,
    title: 'Conversion to Canonical SOP and POS Forms',
    category: 'Derivation',
    summary: 'Technique of multiplying missing variables by (X + X̄) for SOP and adding X·X̄ for POS.',
    sections: [
      {
        heading: 'Convert f = ĀB + C̄ + ABC to Canonical SOP',
        points: [
          'f = ĀB(C + C̄) + C̄(A + Ā)(B + B̄) + ABC',
          '= ĀBC + ĀBC̄ + ABC̄ + AB̄C̄ + ĀBC̄ + ĀB̄C̄ + ABC',
          '= m₃ + m₂ + m₆ + m₄ + m₀ + m₇',
          'f(A,B,C) = ∑m(0, 2, 3, 4, 6, 7).'
        ]
      },
      {
        heading: 'Convert to Standard POS',
        points: [
          'Maxterms are remaining combinations: f(A,B,C) = ∏M(1, 5).'
        ]
      }
    ],
    keyTakeaways: ['SOP and POS are complementary indexing sets']
  },

  // ==========================================
  // UNIT 2: K-MAPS & IC LOGIC FAMILIES (18 Pages)
  // ==========================================
  {
    id: 'hw-u2-p1',
    unitId: 'unit-2',
    unitName: 'Unit 2',
    unitTitle: 'K-Maps & IC Logic Families',
    pageNumber: 1,
    globalPage: 35,
    title: 'Karnaugh Map (K-Map) Fundamentals & Cell Grouping Rules',
    category: 'Theory',
    summary: 'Graphical minimization technique, Gray code coordinate labeling, and 2^n cell grouping rules.',
    sections: [
      {
        heading: 'Concept of K-Map',
        points: [
          'K-Map is a graphical method of simplifying Boolean expressions.',
          'Advantage: Systematic approach that avoids unpredictable algebraic intuition.',
          'Consists of 2ⁿ cells for n variables: 2-var = 4 cells; 3-var = 8 cells; 4-var = 16 cells; 5-var = 32 cells.'
        ]
      },
      {
        heading: 'Grouping Rules',
        points: [
          '16 1s (complete 4-var map) -> reduces 4 variables (result = 1).',
          '8 1s (Octet) -> reduces 3 variables.',
          '4 1s (Quad) -> reduces 2 variables.',
          '2 1s (Pair) -> reduces 1 variable.',
          'Single 1 -> reduces 0 variables.'
        ]
      }
    ],
    keyTakeaways: ['Group size must always be a power of 2', 'Wrap-around edges and corners are adjacent']
  },
  {
    id: 'hw-u2-p2',
    unitId: 'unit-2',
    unitName: 'Unit 2',
    unitTitle: 'K-Maps & IC Logic Families',
    pageNumber: 2,
    globalPage: 36,
    title: '2-Variable & 3-Variable K-Map Solved Problems',
    category: 'Design Problem',
    summary: 'Grouping pairs and quads across 3-variable maps with Gray code adjacency.',
    sections: [
      {
        heading: 'Examples',
        points: [
          'f = ∑m(0,2,3) -> Group (0,2) gives B̄; Group (2,3) gives A -> f = B̄ + A.',
          'f = ∑m(0,5,6,7) -> f = ĀB̄C̄ + AC + AB.',
          'f = ∑m(0,2,4,6) -> All corners group into a quad -> f = C̄!'
        ]
      }
    ],
    keyTakeaways: ['Four corners of 3-var or 4-var map eliminate two variables']
  },
  {
    id: 'hw-u2-p3',
    unitId: 'unit-2',
    unitName: 'Unit 2',
    unitTitle: 'K-Maps & IC Logic Families',
    pageNumber: 3,
    globalPage: 37,
    title: '4-Variable K-Map Simplification & Gate Implementation',
    category: 'Design Problem',
    summary: 'Minimizing 4-variable expressions and drawing AOI gate circuit implementations.',
    sections: [
      {
        heading: 'Example: f(A,B,C,D) = ∑m(0,1,2,3,4,7,11,15)',
        points: [
          'Quad (0,1,2,3) gives ĀB̄.',
          'Quad (3,7,11,15) gives CD.',
          'Pair (0,4) gives ĀC̄D̄.',
          'Final simplified expression: f = ĀB̄ + CD + ĀC̄D̄.'
        ]
      }
    ],
    keyTakeaways: ['Always prioritize larger groups first to maximize variable elimination']
  },
  {
    id: 'hw-u2-p4',
    unitId: 'unit-2',
    unitName: 'Unit 2',
    unitTitle: 'K-Maps & IC Logic Families',
    pageNumber: 4,
    globalPage: 38,
    title: 'Prime Implicants, Don\'t Care Conditions & POS K-Maps',
    category: 'Theory',
    summary: 'Definitions of Prime Implicant, Essential Prime Implicant, handling don\'t care terms (d), and POS maps.',
    sections: [
      {
        heading: 'Prime Implicants & Don\'t Cares',
        points: [
          'Prime Implicant: A group of 2ⁿ adjacent cells that cannot be combined into a larger group.',
          'Essential Prime Implicant (EPI): A prime implicant that covers at least one \'1\' not covered by any other prime implicant.',
          'Don\'t Care conditions (d or X): Outputs that never occur in practice or whose output value doesn\'t matter. Can be grouped as 1 if helpful, or left as 0.'
        ]
      }
    ],
    keyTakeaways: ['Include don\'t cares ONLY if they enlarge a group of 1s']
  },
  {
    id: 'hw-u2-p5',
    unitId: 'unit-2',
    unitName: 'Unit 2',
    unitTitle: 'K-Maps & IC Logic Families',
    pageNumber: 5,
    globalPage: 39,
    title: 'POS K-Map Reduction & Introduction to Quine-McCluskey',
    category: 'Theory',
    summary: 'Grouping 0s in K-maps to obtain simplified Product of Sums (POS), and need for Tabular Method for >= 5 variables.',
    sections: [
      {
        heading: 'POS Minimization Example',
        points: [
          'f(A,B,C) = ∏M(1,4,6,7) -> Grouping 0s gives f = (Ā + B̄)(B̄ + C)(A + B + C̄).'
        ]
      },
      {
        heading: 'Quine-McCluskey (Tabular) Method',
        points: [
          'Map method is difficult when variables exceed 4 or 5 because 3D visualization is required.',
          'Tabular method is algorithmic and suitable for computer programming.'
        ]
      }
    ],
    keyTakeaways: ['Tabular method guarantees finding all prime implicants systematically']
  },
  {
    id: 'hw-u2-p6',
    unitId: 'unit-2',
    unitName: 'Unit 2',
    unitTitle: 'K-Maps & IC Logic Families',
    pageNumber: 6,
    globalPage: 40,
    title: 'Quine-McCluskey Method: Grouping by Number of 1s',
    category: 'Derivation',
    summary: 'Grouping minterms by number of 1s, matching adjacent binary terms differing by 1 bit.',
    sections: [
      {
        heading: 'Step-by-Step Procedure',
        points: [
          'Step 1: List all minterms in binary form.',
          'Step 2: Partition into groups based on the count of 1s (Group 0, Group 1, Group 2, etc.).',
          'Step 3: Compare each term in group i with group i+1. If they differ in exactly one bit position, place a dash (-) in that position and place check mark (✓) on both terms.',
          'Step 4: Repeat for pairs and quads until no further combinations are possible.'
        ]
      }
    ],
    keyTakeaways: ['Only terms in adjacent 1-count groups can differ by exactly 1 bit']
  },
  {
    id: 'hw-u2-p7',
    unitId: 'unit-2',
    unitName: 'Unit 2',
    unitTitle: 'K-Maps & IC Logic Families',
    pageNumber: 7,
    globalPage: 41,
    title: 'Quine-McCluskey Prime Implicant Chart',
    category: 'Table',
    summary: 'Setting up rows as Prime Implicants and columns as Minterms, finding essential columns with single X.',
    sections: [
      {
        heading: 'Prime Implicant Table Selection',
        points: [
          'Columns = all original minterms.',
          'Rows = all unchecked Prime Implicants.',
          'Place X in row i, column j if Prime Implicant i covers minterm j.',
          'Identify columns with only a single X -> corresponding row is an Essential Prime Implicant (EPI).'
        ]
      }
    ],
    keyTakeaways: ['Single checkmark in column forces row into final minimal sum']
  },
  {
    id: 'hw-u2-p8',
    unitId: 'unit-2',
    unitName: 'Unit 2',
    unitTitle: 'K-Maps & IC Logic Families',
    pageNumber: 8,
    globalPage: 42,
    title: 'Complete Tabular Method Worked Example',
    category: 'Design Problem',
    summary: 'Full minimization of f(w,x,y,z) = ∑m(0,2,3,6,7,8,10,12,13) resulting in f = wȳ + w̄y + x̄z̄.',
    sections: [
      {
        heading: 'Final Reduction Verification',
        points: [
          'Prime Implicants: (12,13) = wx̄y; (0,2,8,10) = x̄z̄; (2,3,6,7) = w̄y.',
          'Minimal expression: f = wȳ + w̄y + x̄z̄.'
        ]
      }
    ],
    keyTakeaways: ['Exact match with K-map result verifies algorithmic correctness']
  },
  {
    id: 'hw-u2-p9',
    unitId: 'unit-2',
    unitName: 'Unit 2',
    unitTitle: 'K-Maps & IC Logic Families',
    pageNumber: 9,
    globalPage: 43,
    title: 'Digital IC Gates & Characteristics (Delay, Power, Noise Margin)',
    category: 'Theory',
    summary: 'Standard 74xx IC gates, Propagation delay (tp), Power dissipation (PD), and Noise Margin.',
    sections: [
      {
        heading: 'Standard TTL 74xx IC Part Numbers',
        table: {
          headers: ['IC Number', 'Description'],
          rows: [
            ['7400', 'Quad 2-input NAND gates'],
            ['7402', 'Quad 2-input NOR gates'],
            ['7404', 'Hex Inverters (NOT)'],
            ['7408', 'Quad 2-input AND gates'],
            ['7432', 'Quad 2-input OR gates'],
            ['7486', 'Quad 2-input Ex-OR gates']
          ]
        }
      },
      {
        heading: 'Key IC Performance Metrics',
        points: [
          'Propagation Delay (tp): Time interval between application of input pulse and occurrence of resulting output pulse. Shorter delay = higher operational speed.',
          'Power Dissipation (PD): Amount of power dissipated: PD = Icc(avg) × Vcc.',
          'Noise Margin: Voltage limit of noise that can be present without disturbing normal circuit operation.'
        ]
      }
    ],
    keyTakeaways: ['7400 is quad NAND', 'Lower propagation delay enables higher clock frequency']
  },
  {
    id: 'hw-u2-p10',
    unitId: 'unit-2',
    unitName: 'Unit 2',
    unitTitle: 'K-Maps & IC Logic Families',
    pageNumber: 10,
    globalPage: 44,
    title: 'Fan-In, Fan-Out, SPP & Logic Voltage Levels',
    category: 'Theory',
    summary: 'Fan-in, Fan-out, Speed Power Product, VIH, VIL, VOH, VOL, and high/low noise margin equations.',
    sections: [
      {
        heading: 'Definitions',
        points: [
          'Fan-In: Maximum number of inputs that can be connected to a logic gate without disturbing normal operation.',
          'Fan-Out: Maximum number of standard logic inputs the gate output can reliably drive without exceeding specified voltage limits.',
          'Speed Power Product (SPP): SPP = Propagation delay (sec) × Power dissipation (W) in Joules. Lower SPP = superior figure of merit.'
        ]
      },
      {
        heading: 'Noise Margin Equations',
        equations: [
          'High Level Noise Margin: VNH = VOH(min) - VIH(min)',
          'Low Level Noise Margin: VNL = VIL(max) - VOL(max)'
        ]
      }
    ],
    keyTakeaways: ['VNH = VOH(min) - VIH(min)', 'VNL = VIL(max) - VOL(max)']
  },
  {
    id: 'hw-u2-p11',
    unitId: 'unit-2',
    unitName: 'Unit 2',
    unitTitle: 'K-Maps & IC Logic Families',
    pageNumber: 11,
    globalPage: 45,
    title: 'Classification of IC Logic Families',
    category: 'Theory',
    summary: 'Comprehensive tree: Bipolar (RTL, DTL, TTL, ECL, I2L) vs Unipolar MOS (NMOS, PMOS, CMOS).',
    sections: [
      {
        heading: 'Logic Families Hierarchy',
        points: [
          'Bipolar Saturated: RTL (Resistor-Transistor Logic), DTL (Diode-Transistor Logic), TTL (Transistor-Transistor Logic), I²L (Integrated Injection Logic), HTL (High Threshold Logic).',
          'Bipolar Unsaturated: Schottky TTL, ECL (Emitter Coupled Logic - fastest logic family).',
          'Unipolar / MOS: PMOS, NMOS, CMOS (Complementary MOS - lowest power dissipation).'
        ]
      }
    ],
    keyTakeaways: ['ECL is fastest (non-saturated bipolar)', 'CMOS has lowest static power dissipation']
  },
  {
    id: 'hw-u2-p12',
    unitId: 'unit-2',
    unitName: 'Unit 2',
    unitTitle: 'K-Maps & IC Logic Families',
    pageNumber: 12,
    globalPage: 46,
    title: 'TTL Two-Input NAND Gate Circuit & Totem-Pole Output',
    category: 'Circuit',
    summary: 'Detailed transistor-level schematic of standard TTL NAND gate with multi-emitter transistor Q1 and totem pole (Q3, Q4, D1).',
    sections: [
      {
        heading: 'Circuit Components',
        points: [
          'Q1: Multi-emitter input transistor (acts as AND diodes).',
          'Q2: Phase splitter transistor providing complementary drive signals to totem pole.',
          'Totem-Pole Output: Q3 (pull-up transistor), Q4 (pull-down transistor), D1 (diode ensuring Q3 is off when Q4 is on).'
        ]
      }
    ],
    keyTakeaways: ['Totem pole provides low output impedance for both HIGH and LOW transitions']
  },
  {
    id: 'hw-u2-p13',
    unitId: 'unit-2',
    unitName: 'Unit 2',
    unitTitle: 'K-Maps & IC Logic Families',
    pageNumber: 13,
    globalPage: 47,
    title: 'CMOS Inverter (NOT Gate) Circuit & Operation',
    category: 'Circuit',
    summary: 'Complementary PMOS pull-up and NMOS pull-down transistors, switch model, and transfer behavior.',
    sections: [
      {
        heading: 'CMOS Inverter Structure',
        points: [
          'PMOS connected to VDD (+5V), NMOS connected to Ground (0V). Both gates tied to common input.',
          'Input = 0V (LOW): PMOS is ON (closed switch), NMOS is OFF (open switch) -> Output pulled up to VDD = +5V.',
          'Input = +5V (HIGH): PMOS is OFF, NMOS is ON -> Output pulled down to Ground = 0V.',
          'No direct path from VDD to Ground in steady state -> Static power dissipation is near ZERO!'
        ]
      }
    ],
    keyTakeaways: ['Zero static power dissipation because PMOS and NMOS never conduct simultaneously']
  },
  {
    id: 'hw-u2-p14',
    unitId: 'unit-2',
    unitName: 'Unit 2',
    unitTitle: 'K-Maps & IC Logic Families',
    pageNumber: 14,
    globalPage: 48,
    title: 'CMOS NAND Gate Schematic & Operation Cases',
    category: 'Circuit',
    summary: 'Two parallel PMOS transistors and two series NMOS transistors forming 2-input CMOS NAND.',
    sections: [
      {
        heading: 'Architecture Rule for CMOS',
        points: [
          'NAND: PMOS in PARALLEL, NMOS in SERIES.',
          'If any input is 0, corresponding PMOS conducts, pulling output to VDD = 1.',
          'Output goes to 0 ONLY when both inputs are 1 (both series NMOS transistors conduct to ground).'
        ]
      }
    ],
    keyTakeaways: ['Parallel PMOS ensures output is HIGH if ANY input is 0']
  },
  {
    id: 'hw-u2-p15',
    unitId: 'unit-2',
    unitName: 'Unit 2',
    unitTitle: 'K-Maps & IC Logic Families',
    pageNumber: 15,
    globalPage: 49,
    title: 'CMOS NOR Gate Schematic & Operation Cases',
    category: 'Circuit',
    summary: 'Two series PMOS transistors and two parallel NMOS transistors forming 2-input CMOS NOR.',
    sections: [
      {
        heading: 'CMOS NOR Architecture',
        points: [
          'NOR: PMOS in SERIES, NMOS in PARALLEL.',
          'Output is HIGH (1) ONLY when both inputs are 0 (both series PMOS transistors are ON).',
          'If either input is 1, parallel NMOS pulls output to ground (0).'
        ]
      }
    ],
    keyTakeaways: ['Series PMOS requires larger channel width to compensate lower hole mobility']
  },
  {
    id: 'hw-u2-p16',
    unitId: 'unit-2',
    unitName: 'Unit 2',
    unitTitle: 'K-Maps & IC Logic Families',
    pageNumber: 16,
    globalPage: 50,
    title: 'Comparison Table: TTL vs CMOS Logic Families',
    category: 'Table',
    summary: 'Definitive 13-parameter side-by-side comparison table between TTL and CMOS.',
    sections: [
      {
        heading: 'TTL vs CMOS Comparison',
        table: {
          headers: ['Parameter', 'CMOS', 'TTL'],
          rows: [
            ['1. Devices used', 'MOSFET (P & N-channel)', 'BJT (NPN bipolar)'],
            ['2. VIH (min)', '3.5 V', '2.0 V'],
            ['3. VIL (max)', '1.5 V', '0.8 V'],
            ['4. VOH (min)', '4.95 V', '2.7 V'],
            ['5. VOL (max)', '0.05 V', '0.4 V'],
            ['6. VNH (high noise margin)', '1.45 V', '0.7 V'],
            ['7. VNL (low noise margin)', '1.45 V', '0.4 V'],
            ['8. Noise immunity', 'Better than TTL', 'Less than CMOS'],
            ['9. Propagation delay', '70 nsec', '10 nsec'],
            ['10. Power dissipation', '0.1 mW (near 0 static)', '10 mW'],
            ['11. Fan-out', '50', '10'],
            ['12. Power supply range', '3 to 15 V (wide)', 'Fixed 5 V (strict ±5%)'],
            ['13. Switching speed', 'Slower than TTL', 'Faster than CMOS']
          ]
        }
      }
    ],
    keyTakeaways: ['CMOS: superior noise immunity, wider supply range, lower power', 'TTL: faster switching speed']
  },
  {
    id: 'hw-u2-p17',
    unitId: 'unit-2',
    unitName: 'Unit 2',
    unitTitle: 'K-Maps & IC Logic Families',
    pageNumber: 17,
    globalPage: 51,
    title: 'IC Interfacing: TTL Driving CMOS',
    category: 'Circuit',
    summary: 'Voltage incompatibility analysis (TTL VOH = 2.7V < CMOS VIH = 3.5V) and pull-up resistor solution.',
    sections: [
      {
        heading: 'The Interfacing Problem',
        points: [
          'TTL minimum HIGH output VOH(min) = 2.7V.',
          'CMOS minimum HIGH input VIH(min) = 3.5V.',
          'Since 2.7V < 3.5V, standard TTL cannot reliably drive CMOS directly in HIGH state!'
        ]
      },
      {
        heading: 'Solution',
        points: [
          'Connect external pull-up resistor Rp (typically 1 kΩ to 10 kΩ) from TTL output to Vcc (+5V).',
          'When TTL output is HIGH, pull-up resistor pulls voltage up to full +5V rail, safely exceeding CMOS VIH requirement.'
        ]
      }
    ],
    keyTakeaways: ['Pull-up resistor bridges the voltage gap when TTL drives CMOS']
  },
  {
    id: 'hw-u2-p18',
    unitId: 'unit-2',
    unitName: 'Unit 2',
    unitTitle: 'K-Maps & IC Logic Families',
    pageNumber: 18,
    globalPage: 52,
    title: 'IC Interfacing: CMOS Driving TTL & Tri-State Logic',
    category: 'Circuit',
    summary: 'Current sinking limits, CMOS buffer 4050B, and Tri-state logic (Low, High, High-Impedance).',
    sections: [
      {
        heading: 'CMOS Driving TTL',
        points: [
          'Voltage is fully compatible (CMOS VOH = 4.95V > TTL VIH = 2.0V).',
          'Current sinking issue: TTL requires 1.6 mA at LOW, while standard CMOS provides only 0.4 mA.',
          'Solution: Use CMOS buffer IC 4050B / 4049B to boost drive current.'
        ]
      },
      {
        heading: 'Tri-State Logic',
        points: [
          'Outputs have three valid states: LOW (0), HIGH (1), and HIGH IMPEDANCE (Hi-Z).',
          'In Hi-Z state, output behaves as an open switch (floating), allowing multiple circuit outputs to connect to a shared data bus.'
        ]
      }
    ],
    keyTakeaways: ['Tri-state logic prevents bus contention on shared microprocessor buses']
  }
];

import { HANDWRITTEN_PAGES_345 } from './handwrittenUnits345';

export const ALL_HANDWRITTEN_PAGES: HandwrittenPage[] = [
  ...HANDWRITTEN_PAGES,
  ...HANDWRITTEN_PAGES_345
];

// Helper to get pages by unit
export function getPagesForUnit(unitId: string): HandwrittenPage[] {
  return ALL_HANDWRITTEN_PAGES.filter(p => p.unitId === unitId);
}

