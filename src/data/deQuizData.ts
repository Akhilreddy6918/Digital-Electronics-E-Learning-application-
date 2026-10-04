import { QuizQuestion, UnitId } from '../types/digitalElectronics';

export const DE_QUIZ_QUESTIONS: QuizQuestion[] = [
  // ==========================================
  // CHAPTER 1 / UNIT I: NUMBER SYSTEMS & BOOLEAN ALGEBRA (19 Questions)
  // ==========================================
  {
    id: 'quiz-u1-1',
    unitId: 'unit-1',
    topic: 'Number Systems & Base Conversions',
    questionText: 'Given that (292)₁₀ = (1204)ᵦ, determine the unknown radix (base) b.',
    options: ['b = 5', 'b = 6', 'b = 7', 'b = 8'],
    correctIndex: 1,
    explanation: 'Express in polynomial form: 1·b³ + 2·b² + 0·b¹ + 4·b⁰ = 292 ⇒ b³ + 2b² = 288. Testing b = 6: 6³ + 2(6²) = 216 + 72 = 288. Thus, radix b = 6.',
    difficulty: 'Medium',
    sourceNotesSection: '1.1 Number Systems and Base Conversions',
    isPyq: true,
    pyqYear: 2023
  },
  {
    id: 'quiz-u1-2',
    unitId: 'unit-1',
    topic: 'Complements & Binary Arithmetic',
    questionText: "What is the result of evaluating (11010)₂ - (10010)₂ using 2's complement arithmetic in 5-bit representation?",
    options: ['(01000)₂ (+8 decimal)', '(10100)₂ (-4 decimal)', '(00110)₂ (+6 decimal)', '(11000)₂ (-8 decimal)'],
    correctIndex: 0,
    explanation: "2's complement of subtrahend (10010)₂ is 01101 + 1 = 01110. Adding to minuend: 11010 + 01110 = 101000. Discarding the 6th bit end-carry yields 01000₂ (+8 in decimal).",
    difficulty: 'Easy',
    sourceNotesSection: "1.2 Complements and Binary Arithmetic",
    isPyq: true,
    pyqYear: 2020
  },
  {
    id: 'quiz-u1-3',
    unitId: 'unit-1',
    topic: 'Logic Gates & Duality',
    questionText: 'A bubbled NOR gate (a NOR gate with inverting bubbles placed on both of its inputs) is functionally equivalent to which standard gate?',
    options: ['NAND Gate', 'AND Gate', 'OR Gate', 'XOR Gate'],
    correctIndex: 1,
    explanation: "By De Morgan's theorem, an active-low input NOR gate evaluates as: Y = (A' + B')' = (A')' · (B')' = A · B, which is an AND gate.",
    difficulty: 'Easy',
    sourceNotesSection: '1.4 Logic Gates, Universal Gates & Realization',
    isPyq: true,
    pyqYear: 2024
  },
  {
    id: 'quiz-u1-4',
    unitId: 'unit-1',
    topic: 'Error Correcting Codes',
    questionText: 'In a standard 7-bit even parity Hamming code (b₇b₆b₅b₄b₃b₂b₁), if the computed error syndrome is S₃S₂S₁ = 101₂, which bit position is corrupted?',
    options: ['Bit position 3', 'Bit position 4', 'Bit position 5', 'Bit position 6'],
    correctIndex: 2,
    explanation: 'The syndrome vector bits directly form the binary address of the faulty bit. Since 101₂ = 5 in decimal, Bit position 5 has an error.',
    difficulty: 'Medium',
    sourceNotesSection: '1.3 Binary Codes, Gray Codes & Hamming Code',
    isPyq: true,
    pyqYear: 2024
  },
  {
    id: 'quiz-u1-5',
    unitId: 'unit-1',
    topic: 'Boolean Theorems',
    questionText: "According to the Boolean Consensus Theorem, what is the minimized form of AB + A'C + BC?",
    options: ['AB + BC', "A'C + BC", "AB + A'C", 'A + B + C'],
    correctIndex: 2,
    explanation: "The third term BC is the redundant consensus term between AB and A'C: BC = BC(A + A') = ABC + A'BC. Combining gives AB(1 + C) + A'C(1 + B) = AB + A'C.",
    difficulty: 'Easy',
    sourceNotesSection: '1.5 Laws of Boolean Algebra & Consensus Theorem',
    isPyq: true,
    pyqYear: 2023
  },
  {
    id: 'quiz-u1-6',
    unitId: 'unit-1',
    topic: 'Gray Code Conversion',
    questionText: 'What is the 4-bit Gray code representation for the standard binary number (1101)₂?',
    options: ['(1011)ɢ', '(1110)ɢ', '(1001)ɢ', '(1111)ɢ'],
    correctIndex: 0,
    explanation: 'G₃ = B₃ = 1; G₂ = B₃ ⊕ B₂ = 1 ⊕ 1 = 0; G₁ = B₂ ⊕ B₁ = 1 ⊕ 0 = 1; G₀ = B₁ ⊕ B₀ = 0 ⊕ 1 = 1. Therefore, Gray code = (1011)ɢ.',
    difficulty: 'Easy',
    sourceNotesSection: '1.3 Binary Codes, Gray Codes & Hamming Code',
    isPyq: true,
    pyqYear: 2022
  },
  {
    id: 'quiz-u1-7',
    unitId: 'unit-1',
    topic: 'BCD Arithmetic',
    questionText: 'In BCD (8421) arithmetic addition, what correction must be added when the 4-bit binary sum exceeds 9 (1001₂) or produces an illegal code?',
    options: ['Add (0011)₂ (3)', 'Add (0110)₂ (6)', 'Add (1000)₂ (8)', 'Add (0001)₂ (1)'],
    correctIndex: 1,
    explanation: 'Since BCD skips the 6 invalid 4-bit combinations (1010₂ through 1111₂), adding 6 (0110₂) skips the gap and correctly propagates the decimal carry to the next decade.',
    difficulty: 'Easy',
    sourceNotesSection: '1.3 Binary Codes, Gray Codes & Hamming Code',
    isPyq: true,
    pyqYear: 2021
  },
  {
    id: 'quiz-u1-8',
    unitId: 'unit-1',
    topic: 'Universal Gate Realization',
    questionText: 'What is the minimum number of 2-input NAND gates required to construct a 2-input XOR gate?',
    options: ['3 NAND gates', '4 NAND gates', '5 NAND gates', '6 NAND gates'],
    correctIndex: 1,
    explanation: "A standard 2-input XOR gate requires exactly 4 NAND gates: Gate 1 generates (AB)'. Gates 2 and 3 generate (A(AB)')' and (B(AB)')'. Gate 4 combines them to yield A ⊕ B.",
    difficulty: 'Medium',
    sourceNotesSection: '1.4 Logic Gates, Universal Gates & Realization',
    isPyq: true,
    pyqYear: 2022
  },
  {
    id: 'quiz-u1-9',
    unitId: 'unit-1',
    topic: 'Self-Complementing Codes',
    questionText: 'Which of the following binary decimal codes is a self-complementing code where the 9s complement is obtained by inverting all bits?',
    options: ['8421 BCD Code', 'Excess-3 Code', '5421 Code', '2-out-of-5 Code'],
    correctIndex: 1,
    explanation: 'Excess-3 is self-complementing: bitwise inverting an Excess-3 digit yields the 9s complement of the decimal digit directly (e.g., 0 [0011] complements to 1100 = 9).',
    difficulty: 'Medium',
    sourceNotesSection: '1.3 Binary Codes, Gray Codes & Hamming Code',
    isPyq: true,
    pyqYear: 2020
  },
  {
    id: 'quiz-u1-10',
    unitId: 'unit-1',
    topic: 'Signed Binary Range',
    questionText: "What is the valid numerical range of integers that can be represented using an 8-bit 2's complement representation?",
    options: ['-128 to +127', '-127 to +128', '-256 to +255', '0 to +255'],
    correctIndex: 0,
    explanation: "For an n-bit 2's complement number, the range is -2ⁿ⁻¹ to +(2ⁿ⁻¹ - 1). For n = 8: -2⁷ to +(2⁷ - 1) = -128 to +127.",
    difficulty: 'Easy',
    sourceNotesSection: '1.2 Complements and Binary Arithmetic',
    isPyq: false
  },
  {
    id: 'quiz-u1-11',
    unitId: 'unit-1',
    topic: 'Boolean Duality',
    questionText: 'According to the Duality Principle in Boolean algebra, what is the dual of the expression A + B · (C + 0)?',
    options: ['A · (B + C · 1)', 'A · (B + C · 0)', 'A + (B · C + 1)', "A' · (B' + C')"],
    correctIndex: 0,
    explanation: 'To form the dual, interchange AND (·) with OR (+) and interchange 0 with 1 without complementing any literal. A + B · (C + 0) becomes A · (B + C · 1).',
    difficulty: 'Medium',
    sourceNotesSection: '1.5 Laws of Boolean Algebra & Consensus Theorem',
    isPyq: true,
    pyqYear: 2021
  },
  {
    id: 'quiz-u1-12',
    unitId: 'unit-1',
    topic: 'Universal Gate Realization',
    questionText: 'What is the minimum number of 2-input NOR gates required to implement an AND gate?',
    options: ['2 NOR gates', '3 NOR gates', '4 NOR gates', '5 NOR gates'],
    correctIndex: 1,
    explanation: "By De Morgan's Law: A · B = (A' + B')'. We invert A with NOR1 (A+A)' = A', invert B with NOR2 (B+B)' = B', and feed them into NOR3: (A' + B')' = A · B. Total = 3 NOR gates.",
    difficulty: 'Easy',
    sourceNotesSection: '1.4 Logic Gates, Universal Gates & Realization',
    isPyq: true,
    pyqYear: 2023
  },
  {
    id: 'quiz-u1-13',
    unitId: 'unit-1',
    topic: 'Fractional Base Conversion',
    questionText: 'Convert the binary fractional number (1011.11)₂ to its exact decimal equivalent.',
    options: ['11.75', '11.50', '13.75', '11.25'],
    correctIndex: 0,
    explanation: 'Integer: 1·2³ + 0·2² + 1·2¹ + 1·2⁰ = 8 + 0 + 2 + 1 = 11. Fraction: 1·2⁻¹ + 1·2⁻² = 0.5 + 0.25 = 0.75. Total = 11.75.',
    difficulty: 'Easy',
    sourceNotesSection: '1.1 Number Systems and Base Conversions',
    isPyq: false
  },
  {
    id: 'quiz-u1-14',
    unitId: 'unit-1',
    topic: 'Ring Oscillator Delay',
    questionText: 'A ring oscillator is constructed using 5 identical cascaded inverters. If the measured oscillation frequency is 50 MHz, what is the propagation delay (tₚd) of each inverter?',
    options: ['1 ns', '2 ns', '4 ns', '5 ns'],
    correctIndex: 1,
    explanation: 'Oscillation frequency f = 1 / (2 · n · tₚd). Rearranging: tₚd = 1 / (2 · 5 · 50×10⁶) = 1 / (5×10⁸) = 2×10⁻⁹ s = 2 ns.',
    difficulty: 'Hard',
    sourceNotesSection: '1.4 Logic Gates, Universal Gates & Realization',
    isPyq: true,
    pyqYear: 2024
  },
  {
    id: 'quiz-u1-15',
    unitId: 'unit-1',
    topic: 'Even Parity Generator',
    questionText: 'For the 7-bit binary data word (1011001)₂, what must the value of the even parity bit P be so that the total transmitted codeword has an even number of 1s?',
    options: ['P = 0', 'P = 1', 'P = undefined', 'P = 2'],
    correctIndex: 0,
    explanation: 'Count the number of 1s in the data word: 1, 0, 1, 1, 0, 0, 1 contains exactly four 1s. Since 4 is already even, the parity bit P = 0.',
    difficulty: 'Easy',
    sourceNotesSection: '1.3 Binary Codes, Gray Codes & Hamming Code',
    isPyq: false
  },
  {
    id: 'quiz-u1-16',
    unitId: 'unit-1',
    topic: 'Distributive Law',
    questionText: 'In Boolean algebra, which identity represents the second distributive law (OR distributed over AND)?',
    options: ['A + BC = (A + B)(A + C)', 'A(B + C) = AB + AC', 'A + AB = A', 'A(A + B) = A'],
    correctIndex: 0,
    explanation: 'Unlike ordinary algebra, Boolean algebra allows OR to distribute over AND: A + BC = (A + B)(A + C). Proof: (A+B)(A+C) = AA + AC + AB + BC = A(1 + C + B) + BC = A + BC.',
    difficulty: 'Easy',
    sourceNotesSection: '1.5 Laws of Boolean Algebra & Consensus Theorem',
    isPyq: true,
    pyqYear: 2022
  },
  {
    id: 'quiz-u1-17',
    unitId: 'unit-1',
    topic: '1s Complement Subtraction',
    questionText: "When performing (1010)₂ - (0101)₂ using 1's complement arithmetic, what must be done with the resulting end-around carry?",
    options: ['Discard the carry', 'Add the carry back to the least significant bit (LSB)', 'Subtract the carry from the MSB', 'Invert the entire result'],
    correctIndex: 1,
    explanation: "In 1's complement arithmetic, an end-around carry indicates the result is positive. The carry must be added back to the LSB (end-around carry addition) to obtain the true result.",
    difficulty: 'Medium',
    sourceNotesSection: '1.2 Complements and Binary Arithmetic',
    isPyq: true,
    pyqYear: 2020
  },
  {
    id: 'quiz-u1-18',
    unitId: 'unit-1',
    topic: 'De Morgan Theorems',
    questionText: "What is the complement of the Boolean function F = A + B'C?",
    options: ["F' = A'(B + C')", "F' = A' + B · C'", "F' = A(B' + C)", "F' = A'B'C"],
    correctIndex: 0,
    explanation: "Apply De Morgan's theorem: (A + B'C)' = A' · (B'C)'. Applying De Morgan to the second factor: (B'C)' = (B')' + C' = B + C'. Therefore, F' = A'(B + C').",
    difficulty: 'Easy',
    sourceNotesSection: '1.5 Laws of Boolean Algebra & Consensus Theorem',
    isPyq: false
  },
  {
    id: 'quiz-u1-19',
    unitId: 'unit-1',
    topic: 'Hexadecimal to Octal',
    questionText: 'What is the octal equivalent of the hexadecimal number (3B2)₁₆?',
    options: ['(1662)₈', '(1562)₈', '(732)₈', '(1672)₈'],
    correctIndex: 0,
    explanation: 'Convert hex to 4-bit binary: 3 = 0011, B = 1011, 2 = 0010 ⇒ 0011 1011 0010₂. Regroup in 3s from right: 001 | 110 | 110 | 010₂ = (1662)₈.',
    difficulty: 'Medium',
    sourceNotesSection: '1.1 Number Systems and Base Conversions',
    isPyq: true,
    pyqYear: 2023
  },
  {
    id: 'quiz-u1-20',
    unitId: 'unit-1',
    topic: 'Boolean Algebra & Duality Principle',
    questionText: 'According to the Duality Principle of Boolean Algebra, what is the exact algebraic dual of the absorption identity: A + A · B = A?',
    options: [
      'A · (A + B) = A',
      "A' + A'B' = A'",
      'A · (A · B) = A',
      '(A + A) · B = A'
    ],
    correctIndex: 0,
    explanation: 'The dual of any Boolean identity is formed by systematically interchanging AND (·) and OR (+) operators and swapping 0 and 1, leaving variables untouched. The dual of A + A·B = A is A·(A + B) = A (the second Absorption Law).',
    difficulty: 'Easy',
    sourceNotesSection: '1.5 Laws of Boolean Algebra & Consensus Theorem',
    isPyq: true,
    pyqYear: 2022
  },

  // ==========================================
  // CHAPTER 2 / UNIT II: MINIMIZATION TECHNIQUES & K-MAPS (20 Questions)
  // ==========================================
  {
    id: 'quiz-u2-1',
    unitId: 'unit-2',
    topic: 'Essential Prime Implicants',
    questionText: 'What fundamentally defines an Essential Prime Implicant (EPI) in Karnaugh Map minimization?',
    options: [
      'It covers the maximum number of 1-cells on the map.',
      'It covers at least one minterm (1-cell) that cannot be covered by any other prime implicant.',
      'It consists only of don’t-care conditions.',
      'It is redundant and can be omitted from the final SOP form.'
    ],
    correctIndex: 1,
    explanation: 'An Essential Prime Implicant is uniquely mandatory in the minimal cover because it contains at least one minterm not included in any other prime implicant.',
    difficulty: 'Easy',
    sourceNotesSection: '2.2 Prime Implicants and Don\'t-Care Optimization',
    isPyq: true,
    pyqYear: 2024
  },
  {
    id: 'quiz-u2-2',
    unitId: 'unit-2',
    topic: 'K-Map Literal Reduction',
    questionText: 'How many literals are eliminated from the final product term when an 8-cell adjacent group (Octet) is formed in a 4-variable K-map?',
    options: ['1 literal', '2 literals', '3 literals', '4 literals'],
    correctIndex: 2,
    explanation: 'In an n-variable K-map, grouping 2ᵏ adjacent cells eliminates exactly k literals. For an octet (2³ = 8 cells), k = 3 literals are eliminated, leaving a single literal term.',
    difficulty: 'Easy',
    sourceNotesSection: '2.1 K-Map Fundamentals',
    isPyq: false
  },
  {
    id: 'quiz-u2-3',
    unitId: 'unit-2',
    topic: 'K-Map Cell Adjacency',
    questionText: 'In a 4-variable K-map with variables A, B, C, D, which minterms are directly adjacent to cell m₀ (0000)?',
    options: ['m₁, m₂, m₄, m₈', 'm₁, m₃, m₄, m₁₂', 'm₁, m₄, m₅, m₈', 'm₂, m₄, m₆, m₈'],
    correctIndex: 0,
    explanation: 'Adjacent cells differ by exactly 1 bit. Minterm 0 (0000) is adjacent to 0001 (m₁), 0010 (m₂), 0100 (m₄), and 1000 (m₈) via wrap-around edges.',
    difficulty: 'Medium',
    sourceNotesSection: '2.1 K-Map Fundamentals',
    isPyq: true,
    pyqYear: 2021
  },
  {
    id: 'quiz-u2-4',
    unitId: 'unit-2',
    topic: "Don't-Care Optimization",
    questionText: "How should Don't-Care conditions (d) be utilized during K-map looping?",
    options: [
      'They must always all be included as 1s in the groups.',
      'They should only be included as 1s if they help form larger groupings to eliminate literals, otherwise left as 0s.',
      'They must strictly be treated as 0s and never grouped.',
      'They must form separate groups exclusively of don’t-cares.'
    ],
    correctIndex: 1,
    explanation: "Don't-cares represent input combinations that will never occur. We treat them as 1s only when they expand a group to a larger power of 2, minimizing literals, and ignore the rest as 0s.",
    difficulty: 'Easy',
    sourceNotesSection: "2.2 Prime Implicants and Don't-Care Optimization",
    isPyq: true,
    pyqYear: 2023
  },
  {
    id: 'quiz-u2-5',
    unitId: 'unit-2',
    topic: 'K-Map Minimization',
    questionText: 'Minimize the 3-variable Boolean function F(A, B, C) = Σm(1, 3, 5, 7).',
    options: ['F = C', 'F = A', 'F = B', "F = C'"],
    correctIndex: 0,
    explanation: 'Minterms 1 (001), 3 (011), 5 (101), 7 (111) form a 4-cell group (quad). A varies (0 and 1), B varies (0 and 1), while C is consistently 1 across all 4 cells. Hence F = C.',
    difficulty: 'Easy',
    sourceNotesSection: '2.1 K-Map Fundamentals',
    isPyq: false
  },
  {
    id: 'quiz-u2-6',
    unitId: 'unit-2',
    topic: 'Quine-McCluskey Method',
    questionText: 'What is the primary initial step in the Quine-McCluskey (Tabular) minimization algorithm?',
    options: [
      'Drawing an overlapping grid chart',
      'Grouping minterms into buckets according to the number of 1s in their binary representations',
      'Factoring out common terms using Consensus theorem',
      'Converting all minterms into POS form'
    ],
    correctIndex: 1,
    explanation: 'Quine-McCluskey first partitions minterms into columns by their Hamming weight (number of 1s: index 0, 1, 2, ...), because terms can only be combined if their weights differ by exactly 1.',
    difficulty: 'Medium',
    sourceNotesSection: '2.3 Tabular Method (Quine-McCluskey)',
    isPyq: true,
    pyqYear: 2022
  },
  {
    id: 'quiz-u2-7',
    unitId: 'unit-2',
    topic: 'Static-1 Hazards',
    questionText: 'What causes a static-1 hazard in a combinational logic circuit, and how is it eliminated using a K-map?',
    options: [
      'Equal path delays; eliminated by removing gates.',
      'Unequal propagation delays when moving between adjacent 1-cells covered by different groupings; eliminated by adding a redundant prime implicant.',
      'Operating at excessive clock frequency; eliminated by reducing supply voltage.',
      'A short circuit between power and ground; eliminated by adding capacitors.'
    ],
    correctIndex: 1,
    explanation: 'When transitioning between two adjacent 1s in different groups, unequal path delays can cause a momentary 0-glitch (static-1 hazard). Adding an overlapping consensus loop covers the transition and eliminates the glitch.',
    difficulty: 'Hard',
    sourceNotesSection: '2.4 Hazards in Combinational Logic',
    isPyq: true,
    pyqYear: 2024
  },
  {
    id: 'quiz-u2-8',
    unitId: 'unit-2',
    topic: 'K-Map Four Corners Quad',
    questionText: 'In a 4-variable K-map F(A, B, C, D), what is the simplified product term produced by grouping the four corner cells m₀, m₂, m₈, and m₁₀?',
    options: ["B'D'", "A'C'", "B'C'", "A'D'"],
    correctIndex: 0,
    explanation: 'Corner minterms: m₀(0000), m₂(0010), m₈(1000), m₁₀(1010). Rows 00 and 10 have B=0 in common (B\'). Columns 00 and 10 have D=0 in common (D\'). The combined term is B\'D\'.',
    difficulty: 'Medium',
    sourceNotesSection: '2.1 K-Map Fundamentals',
    isPyq: true,
    pyqYear: 2023
  },
  {
    id: 'quiz-u2-9',
    unitId: 'unit-2',
    topic: 'Gray Code in K-Maps',
    questionText: 'Why are the row and column coordinates in a Karnaugh Map ordered in Gray code (00, 01, 11, 10) instead of natural binary (00, 01, 10, 11)?',
    options: [
      'To save physical layout space on silicon',
      'To guarantee that adjacent geometrical cells differ by exactly one binary variable (Hamming distance = 1)',
      'To make it compatible with decimal numbers',
      'To prevent race conditions in static flip-flops'
    ],
    correctIndex: 1,
    explanation: 'Gray code enforces unit-distance adjacency: adjacent cells differ by only one variable, allowing algebraic simplification (A + A\' = 1) whenever adjacent cells are grouped.',
    difficulty: 'Easy',
    sourceNotesSection: '2.1 K-Map Fundamentals',
    isPyq: false
  },
  {
    id: 'quiz-u2-10',
    unitId: 'unit-2',
    topic: '5-Variable K-Map',
    questionText: 'How is a 5-variable K-map (variables A, B, C, D, E) geometrically structured and minimized?',
    options: [
      'As a single 32-cell circular cylinder',
      'As two 16-cell 4-variable K-maps placed side-by-side or superimposed (one for A=0 and one for A=1)',
      'As five separate 2-variable maps',
      'As four 8-cell maps with diagonal adjacency'
    ],
    correctIndex: 1,
    explanation: 'A 5-variable K-map consists of two 4-variable maps: Map 0 for A=0 (minterms 0-15) and Map 1 for A=1 (minterms 16-31). Cells in identical row/column positions across the two maps are adjacent.',
    difficulty: 'Medium',
    sourceNotesSection: '2.1 K-Map Fundamentals',
    isPyq: true,
    pyqYear: 2021
  },
  {
    id: 'quiz-u2-11',
    unitId: 'unit-2',
    topic: 'Two-Level Realization',
    questionText: 'A minimized Sum of Products (SOP) Boolean expression can be directly converted into a two-level all-NAND circuit using which transformation?',
    options: [
      'AND-OR logic is directly equivalent to NAND-NAND logic with no inverter additions',
      'By inserting NOT gates after every input and output',
      'By converting all AND gates to NOR gates',
      'Two-level NAND circuits cannot realize SOP forms'
    ],
    correctIndex: 0,
    explanation: "By double inversion and De Morgan's Law, an AND-OR circuit is identical to a NAND-NAND circuit: (A·B + C·D) = ((A·B)' · (C·D)')'.",
    difficulty: 'Easy',
    sourceNotesSection: '2.5 Multilevel Logic Implementations',
    isPyq: true,
    pyqYear: 2020
  },
  {
    id: 'quiz-u2-12',
    unitId: 'unit-2',
    topic: 'Petrick Method',
    questionText: "In Quine-McCluskey minimization, what is the purpose of Petrick's Method?",
    options: [
      'To generate the binary parity bits for Hamming codes',
      'To find all minimum sum-of-products solutions when a Prime Implicant chart has no essential prime implicants (cyclic chart)',
      'To count the number of gates in an ECL circuit',
      'To compute static-0 hazard conditions in flip-flops'
    ],
    correctIndex: 1,
    explanation: "When a prime implicant table is cyclic (every column has 2 or more X's with no single-X EPIs), Petrick's method translates the chart into product-of-sums of prime implicants and expands it to identify minimum covers.",
    difficulty: 'Hard',
    sourceNotesSection: '2.3 Tabular Method (Quine-McCluskey)',
    isPyq: true,
    pyqYear: 2024
  },
  {
    id: 'quiz-u2-13',
    unitId: 'unit-2',
    topic: 'K-Map POS Minimization',
    questionText: 'To obtain the minimal Product of Sums (POS) expression from a K-map, what procedure is followed?',
    options: [
      'Loop the 1s and invert each literal',
      'Loop the 0s to obtain F\', then apply De Morgan’s Law to invert F\' into minimal POS form',
      'Group both 1s and 0s simultaneously in the same octet',
      'POS minimization cannot be performed using K-maps'
    ],
    correctIndex: 1,
    explanation: 'Grouping 0-cells produces the minimized complement function F\' in SOP form. Inverting both sides using De Morgan’s theorem gives F directly in minimal POS form.',
    difficulty: 'Medium',
    sourceNotesSection: '2.1 K-Map Fundamentals',
    isPyq: false
  },
  {
    id: 'quiz-u2-14',
    unitId: 'unit-2',
    topic: 'XOR Pattern on K-Map',
    questionText: 'When 1-cells form a diagonal checkerboard pattern on a K-map with no adjacent 1s, which logic function is indicated?',
    options: ['AND / OR function', 'Exclusive-OR (XOR) or Exclusive-NOR (XNOR) function', 'Majority logic function', 'Buffer amplifier function'],
    correctIndex: 1,
    explanation: 'Checkerboard patterns on a K-map represent parity functions (XOR / XNOR), where odd or even counts of 1s in input addresses activate the output with zero adjacent groupings.',
    difficulty: 'Easy',
    sourceNotesSection: '2.1 K-Map Fundamentals',
    isPyq: true,
    pyqYear: 2022
  },
  {
    id: 'quiz-u2-15',
    unitId: 'unit-2',
    topic: 'Don’t-Care Minimization Example',
    questionText: 'Minimize F(A, B, C, D) = Σm(1, 3, 7, 11, 15) + d(0, 2, 5). What is the minimal SOP expression?',
    options: ["CD + A'B'", "CD + A'D", 'CD + BD', "AC + B'D"],
    correctIndex: 0,
    explanation: "Minterms 3, 7, 11, 15 form an octet with don't-cares? 3(0011), 7(0111), 11(1011), 15(1111) form a quad with term CD. Minterms 1(0001), 3(0011), plus d(0)=0000 and d(2)=0010 form a 4-cell row quad giving A'B'. Hence F = CD + A'B'.",
    difficulty: 'Hard',
    sourceNotesSection: "2.2 Prime Implicants and Don't-Care Optimization",
    isPyq: true,
    pyqYear: 2023
  },
  {
    id: 'quiz-u2-16',
    unitId: 'unit-2',
    topic: 'Multiple-Output Minimization',
    questionText: 'What is the principal advantage of multiple-output minimization over minimizing each output function independently?',
    options: [
      'It increases circuit propagation delay',
      'It identifies shared common prime implicants that can be reused across multiple outputs, reducing total gate count',
      'It eliminates the need for power supplies',
      'It guarantees all gates become active-low'
    ],
    correctIndex: 1,
    explanation: 'In multiple-output circuits, selecting non-essential prime implicants that are shared between two or more output functions allows one physical gate to drive multiple outputs, lowering hardware cost.',
    difficulty: 'Medium',
    sourceNotesSection: '2.5 Multilevel Logic Implementations',
    isPyq: false
  },
  {
    id: 'quiz-u2-17',
    unitId: 'unit-2',
    topic: 'Maxterm & Minterm Relationship',
    questionText: 'For a 3-variable Boolean function, if F(A, B, C) = Σm(0, 2, 4, 6), what is its representation in canonical Product of Maxterms?',
    options: ['ΠM(1, 3, 5, 7)', 'ΠM(0, 2, 4, 6)', 'ΠM(0, 1, 2, 3)', 'ΠM(4, 5, 6, 7)'],
    correctIndex: 0,
    explanation: 'The maxterms of a function are precisely the minterms where the function is 0 (the complement set). Since Σm(0, 2, 4, 6) = 1, the remaining indices {1, 3, 5, 7} are the maxterm indices: ΠM(1, 3, 5, 7).',
    difficulty: 'Easy',
    sourceNotesSection: '2.1 K-Map Fundamentals',
    isPyq: true,
    pyqYear: 2020
  },
  {
    id: 'quiz-u2-18',
    unitId: 'unit-2',
    topic: 'Multilevel Factoring',
    questionText: 'Why is multilevel logic factoring often preferred in VLSI implementation over pure two-level SOP/POS forms?',
    options: [
      'It reduces gate fan-in requirements and overall chip wiring complexity',
      'It eliminates the clock signal requirement',
      'It guarantees zero dynamic power dissipation',
      'It increases total transistor count'
    ],
    correctIndex: 0,
    explanation: 'Two-level gates for complex equations require huge fan-in (e.g., 8-input or 16-input gates), which are slow and unroutable in silicon. Multilevel factoring breaks equations into smaller, faster 2-to-4 input standard gates.',
    difficulty: 'Medium',
    sourceNotesSection: '2.5 Multilevel Logic Implementations',
    isPyq: true,
    pyqYear: 2022
  },
  {
    id: 'quiz-u2-19',
    unitId: 'unit-2',
    topic: 'Prime Implicant Definition',
    questionText: 'What differentiates an ordinary implicant from a Prime Implicant in a K-map?',
    options: [
      'A prime implicant cannot be combined with any other implicant to form a larger group',
      'A prime implicant must always contain exactly two cells',
      'A prime implicant cannot cover any minterm',
      'A prime implicant is always equal to 1'
    ],
    correctIndex: 0,
    explanation: 'An implicant is any product term that covers 1-cells. A Prime Implicant is a maximal group: it cannot be merged with any adjacent group to eliminate another literal.',
    difficulty: 'Easy',
    sourceNotesSection: '2.2 Prime Implicants and Don\'t-Care Optimization',
    isPyq: false
  },
  {
    id: 'quiz-u2-20',
    unitId: 'unit-2',
    topic: '5-Variable K-Map Minimization',
    questionText: 'When minimizing a 5-variable function F(A, B, C, D, E) using two 4-variable K-maps (Map 1 for A=0 and Map 2 for A=1), how is 5-dimensional cell adjacency determined?',
    options: [
      'Cells sharing the exact same row and column position in both Map 1 and Map 2 are adjacent.',
      'Only opposite diagonal corners of the two maps are adjacent.',
      'No cells from Map 1 can ever be merged with cells from Map 2.',
      'Adjacent cells must differ in at least three bit positions.'
    ],
    correctIndex: 0,
    explanation: 'In a 5-variable K-map, variable A splits the space into two superimposed 4-variable sub-cubes. Any cell in Map 1 (A=0) is logically adjacent to the cell in Map 2 (A=1) having the identical (row, column) coordinates because their 5-bit minterm addresses differ solely in the MSB (variable A).',
    difficulty: 'Medium',
    sourceNotesSection: '2.1 K-Map Fundamentals',
    isPyq: true,
    pyqYear: 2023
  },

  // ==========================================
  // CHAPTER 3 / UNIT III: COMBINATIONAL LOGIC CIRCUITS (20 Questions)
  // ==========================================
  {
    id: 'quiz-u3-1',
    unitId: 'unit-3',
    topic: 'Binary Adders',
    questionText: 'How many Half Adders and OR gates are required to construct a 1-bit Full Adder?',
    options: ['1 Half Adder and 2 OR gates', '2 Half Adders and 1 OR gate', '3 Half Adders and 1 OR gate', '2 Half Adders and 2 OR gates'],
    correctIndex: 1,
    explanation: 'HA1 computes S₁ = A ⊕ B and C₁ = AB. HA2 computes Sum = S₁ ⊕ Cᵢₙ and C₂ = S₁·Cᵢₙ. A single OR gate combines carry signals: Cₒᵤₜ = C₁ + C₂.',
    difficulty: 'Easy',
    sourceNotesSection: '3.1 Binary Adders and Subtractors',
    isPyq: true,
    pyqYear: 2022
  },
  {
    id: 'quiz-u3-2',
    unitId: 'unit-3',
    topic: 'Multiplexer Trees',
    questionText: 'To build a 32:1 Multiplexer using only 16:1 Multiplexers and 2:1 Multiplexers, what is the minimum required component count?',
    options: ['Two 16:1 MUX and one 2:1 MUX', 'Four 16:1 MUX and one 4:1 MUX', 'One 16:1 MUX and two 2:1 MUX', 'Two 16:1 MUX and two 2:1 MUX'],
    correctIndex: 0,
    explanation: 'Two 16:1 MUXes process 16 inputs each (total 32 data lines) using select lines S₃S₂S₁S₀. Their two single-ended outputs feed a 2:1 MUX selected by the MSB select line S₄.',
    difficulty: 'Medium',
    sourceNotesSection: '3.3 Multiplexers (Data Selectors)',
    isPyq: true,
    pyqYear: 2020
  },
  {
    id: 'quiz-u3-3',
    unitId: 'unit-3',
    topic: 'Carry Look-Ahead Adder',
    questionText: 'In a Carry Look-Ahead (CLA) Adder, what are the Carry Generate (Gᵢ) and Carry Propagate (Pᵢ) equations for bit stage i?',
    options: [
      'Gᵢ = Aᵢ · Bᵢ,  Pᵢ = Aᵢ ⊕ Bᵢ',
      'Gᵢ = Aᵢ + Bᵢ,  Pᵢ = Aᵢ · Bᵢ',
      'Gᵢ = Aᵢ ⊕ Bᵢ,  Pᵢ = Aᵢ · Bᵢ',
      "Gᵢ = Aᵢ' · Bᵢ,  Pᵢ = Aᵢ + Bᵢ"
    ],
    correctIndex: 0,
    explanation: 'A carry is generated internally if both inputs are 1: Gᵢ = Aᵢ · Bᵢ. An incoming carry propagates to the output if either input is 1: Pᵢ = Aᵢ ⊕ Bᵢ (or Aᵢ + Bᵢ).',
    difficulty: 'Medium',
    sourceNotesSection: '3.1 Binary Adders and Subtractors',
    isPyq: true,
    pyqYear: 2024
  },
  {
    id: 'quiz-u3-4',
    unitId: 'unit-3',
    topic: 'BCD Adder Detection Logic',
    questionText: 'In a BCD Adder, which Boolean condition detects when the preliminary 4-bit binary sum (S₃S₂S₁S₀) exceeds 9, triggering addition of 6 (0110₂)?',
    options: [
      'K = Cₒᵤₜ + S₃S₂ + S₃S₁',
      'K = Cₒᵤₜ · S₃S₂',
      'K = S₃ + S₂ + S₁',
      'K = S₃S₀ + S₂S₁'
    ],
    correctIndex: 0,
    explanation: 'A sum exceeds 9 if either a carry out is produced (Cₒᵤₜ = 1), or the sum is 10-11 (S₃S₁ = 1), or 12-15 (S₃S₂ = 1). Thus, correction trigger K = Cₒᵤₜ + S₃S₂ + S₃S₁.',
    difficulty: 'Hard',
    sourceNotesSection: '3.1 Binary Adders and Subtractors',
    isPyq: true,
    pyqYear: 2023
  },
  {
    id: 'quiz-u3-5',
    unitId: 'unit-3',
    topic: 'Half Subtractor Equations',
    questionText: 'What are the Boolean transfer functions for the Difference (D) and Borrow (Bₒᵤₜ) in a 1-bit Half Subtractor with inputs A and B (computing A - B)?',
    options: [
      "D = A ⊕ B,  Bₒᵤₜ = A' · B",
      "D = A ⊕ B,  Bₒᵤₜ = A · B'",
      'D = A · B,  Bₒᵤₜ = A ⊕ B',
      "D = A + B,  Bₒᵤₜ = A' + B"
    ],
    correctIndex: 0,
    explanation: 'Truth table: 0-0=0 (B=0); 0-1=1 (B=1); 1-0=1 (B=0); 1-1=0 (B=0). Difference is active when inputs differ: D = A ⊕ B. Borrow is active only for 0 - 1: Bₒᵤₜ = A\'B.',
    difficulty: 'Easy',
    sourceNotesSection: '3.1 Binary Adders and Subtractors',
    isPyq: false
  },
  {
    id: 'quiz-u3-6',
    unitId: 'unit-3',
    topic: 'Logic Function Realization with MUX',
    questionText: 'Any arbitrary n-variable Boolean logic function can be realized using a standard multiplexer with how many select lines and data inputs?',
    options: [
      'A 2ⁿ:1 MUX using n select lines, or a 2ⁿ⁻¹:1 MUX using n-1 select lines with the nth variable applied to data inputs',
      'Only with an n:1 MUX',
      'Must use two 2ⁿ:1 MUXes in parallel',
      'Multiplexers cannot realize combinational logic functions'
    ],
    correctIndex: 0,
    explanation: 'Using Shannon’s expansion theorem, an n-variable function can be realized with a 2ⁿ⁻¹:1 MUX using n-1 select lines; each data line receives 0, 1, the remaining variable X, or its complement X\'.',
    difficulty: 'Medium',
    sourceNotesSection: '3.3 Multiplexers (Data Selectors)',
    isPyq: true,
    pyqYear: 2021
  },
  {
    id: 'quiz-u3-7',
    unitId: 'unit-3',
    topic: 'Priority Encoders',
    questionText: 'In a 4-to-2 Priority Encoder with input lines D₃ (highest), D₂, D₁, D₀ (lowest), if inputs D₃ and D₁ are simultaneously HIGH, what output code (Y₁Y₀) is generated?',
    options: ['11 (representing D₃)', '01 (representing D₁)', '10 (representing D₂)', '00 (representing D₀)'],
    correctIndex: 0,
    explanation: 'A priority encoder ignores lower-priority active lines when a higher-priority line is asserted. Since D₃ has highest priority, the output corresponds to D₃: binary code 11.',
    difficulty: 'Easy',
    sourceNotesSection: '3.5 Encoders and Priority Encoders',
    isPyq: true,
    pyqYear: 2023
  },
  {
    id: 'quiz-u3-8',
    unitId: 'unit-3',
    topic: 'Decoder vs Demultiplexer',
    questionText: 'What is the operational equivalence between a 1-to-2ⁿ Demultiplexer and an n-to-2ⁿ Decoder?',
    options: [
      'A decoder with an active-high Enable input is functionally identical to a demultiplexer where the Enable acts as the Data Input',
      'A demultiplexer has more select lines than a decoder',
      'Decoders only work with sequential flip-flops',
      'Demultiplexers can only have 2 outputs'
    ],
    correctIndex: 0,
    explanation: 'In a 1-to-2ⁿ DEMUX, the data input line is routed to one of 2ⁿ outputs based on n select lines. In an n-to-2ⁿ decoder, the Enable pin acts as the Data input and address pins act as select lines.',
    difficulty: 'Medium',
    sourceNotesSection: '3.4 Decoders and Demultiplexers',
    isPyq: false
  },
  {
    id: 'quiz-u3-9',
    unitId: 'unit-3',
    topic: 'Adder-Subtractor Circuit',
    questionText: "In a 4-bit binary parallel Adder-Subtractor circuit, what is the role of the XOR gates placed between the B input bits and the full adders when Mode M = 1 (Subtraction)?",
    options: [
      'They act as controlled inverters, complementing B and adding Cᵢₙ = 1 to form 2s complement of B',
      'They act as buffers passing B directly',
      'They set the sum outputs directly to zero',
      'They multiply B by 2'
    ],
    correctIndex: 0,
    explanation: 'When M = 1, Bᵢ ⊕ 1 = Bᵢ\' (1s complement). Passing M = 1 to the initial carry-in C₀ adds 1: B\' + 1 = 2s complement of B. Thus, A + (2s comp of B) computes A - B.',
    difficulty: 'Medium',
    sourceNotesSection: '3.1 Binary Adders and Subtractors',
    isPyq: true,
    pyqYear: 2022
  },
  {
    id: 'quiz-u3-10',
    unitId: 'unit-3',
    topic: 'Magnitude Comparator',
    questionText: 'For a 2-bit magnitude comparator comparing numbers A = A₁A₀ and B = B₁B₀, what is the condition for A > B?',
    options: [
      "A₁B₁' + (A₁ ⊙ B₁) · A₀B₀'",
      "A₁B₁ + A₀B₀",
      "A₁'B₁ + A₀'B₀",
      "A₁ ⊕ B₁ + A₀ ⊕ B₀"
    ],
    correctIndex: 0,
    explanation: "A > B occurs either if the MSB of A is greater than B (A₁=1, B₁=0 ⇒ A₁B₁'), OR if MSBs are equal (A₁ ⊙ B₁) and the LSB of A is greater (A₀=1, B₀=0 ⇒ A₀B₀').",
    difficulty: 'Medium',
    sourceNotesSection: '3.2 Magnitude Comparators',
    isPyq: true,
    pyqYear: 2021
  },
  {
    id: 'quiz-u3-11',
    unitId: 'unit-3',
    topic: 'Binary Multiplier',
    questionText: 'How many 1-bit full adders and 2-input AND gates are required to construct a 4-bit by 3-bit binary array multiplier?',
    options: [
      '12 AND gates and 8 Full Adders (or 4 Full Adders + 4 Half Adders)',
      '16 AND gates and 12 Full Adders',
      '7 AND gates and 4 Full Adders',
      '24 AND gates and 6 Full Adders'
    ],
    correctIndex: 0,
    explanation: 'Generating all partial products requires 4 × 3 = 12 AND gates. Adding 3 rows of 4 bits requires (3 - 1) = 2 adder stages, totaling 8 adder units (typically 4 HAs and 4 FAs, or equivalent).',
    difficulty: 'Hard',
    sourceNotesSection: '3.1 Binary Adders and Subtractors',
    isPyq: false
  },
  {
    id: 'quiz-u3-12',
    unitId: 'unit-3',
    topic: 'Ripple Carry Delay',
    questionText: 'In an 8-bit ripple carry adder, if each full adder stage has a carry propagation delay of 2.5 ns and a sum generation delay of 3.0 ns, what is the worst-case carry propagation time?',
    options: ['20.0 ns', '24.0 ns', '5.5 ns', '16.0 ns'],
    correctIndex: 0,
    explanation: 'The carry ripples sequentially through all 8 stages. Total worst-case carry delay = 8 × t_carry = 8 × 2.5 ns = 20.0 ns.',
    difficulty: 'Easy',
    sourceNotesSection: '3.1 Binary Adders and Subtractors',
    isPyq: true,
    pyqYear: 2020
  },
  {
    id: 'quiz-u3-13',
    unitId: 'unit-3',
    topic: 'Decoder Minterm Realization',
    questionText: 'A 3-to-8 line decoder with active-low outputs (NAND-based outputs) can realize any Boolean function by connecting its outputs directly to which gate?',
    options: ['A single NAND gate', 'A single AND gate', 'A single NOR gate', 'An XOR gate'],
    correctIndex: 0,
    explanation: "Active-low decoder outputs generate negated minterms mᵢ'. Connecting selected outputs to an external NAND gate gives: (m₁' · m₂' · ...)' = m₁ + m₂ + ... (by De Morgan's Law), forming the SOP function.",
    difficulty: 'Medium',
    sourceNotesSection: '3.4 Decoders and Demultiplexers',
    isPyq: true,
    pyqYear: 2023
  },
  {
    id: 'quiz-u3-14',
    unitId: 'unit-3',
    topic: 'Code Converter Design',
    questionText: 'Which gates are used to convert a 4-bit Binary number (B₃B₂B₁B₀) into a 4-bit Gray code (G₃G₂G₁G₀)?',
    options: ['Three XOR gates', 'Three AND gates', 'Three OR gates', 'Four NAND gates'],
    correctIndex: 0,
    explanation: 'Binary to Gray formulas: G₃ = B₃, G₂ = B₃ ⊕ B₂, G₁ = B₂ ⊕ B₁, G₀ = B₁ ⊕ B₀. Exactly 3 XOR gates are required.',
    difficulty: 'Easy',
    sourceNotesSection: '3.2 Magnitude Comparators',
    isPyq: false
  },
  {
    id: 'quiz-u3-15',
    unitId: 'unit-3',
    topic: 'Full Subtractor Using MUX',
    questionText: 'When implementing a Full Subtractor Difference D(A, B, Bᵢₙ) using an 8:1 Multiplexer with A, B, Bᵢₙ connected to select lines S₂S₁S₀, what data inputs I₀ to I₇ must be applied?',
    options: [
      'I₀=0, I₁=1, I₂=1, I₃=0, I₄=1, I₅=0, I₆=0, I₇=1',
      'I₀=1, I₁=0, I₂=0, I₃=1, I₄=0, I₅=1, I₆=1, I₇=0',
      'All inputs set to 1',
      'I₀=0, I₁=0, I₂=0, I₃=1, I₄=0, I₅=1, I₆=1, I₇=1'
    ],
    correctIndex: 0,
    explanation: 'The difference function D is 1 for minterms m(1, 2, 4, 7). Therefore, data inputs I₁, I₂, I₄, I₇ are connected to Vcc (1) and I₀, I₃, I₅, I₆ are grounded (0).',
    difficulty: 'Hard',
    sourceNotesSection: '3.3 Multiplexers (Data Selectors)',
    isPyq: true,
    pyqYear: 2024
  },
  {
    id: 'quiz-u3-16',
    unitId: 'unit-3',
    topic: 'BCD to 7-Segment Decoder',
    questionText: 'In a Common Anode 7-segment LED display, what logic level is required to illuminate an individual segment?',
    options: ['Logic LOW (0)', 'Logic HIGH (1)', 'Tri-state (Z)', 'Oscillating clock pulse'],
    correctIndex: 0,
    explanation: 'In a Common Anode display, all LED anodes are tied to positive supply (+Vcc). To create forward bias and light a segment, its cathode must be driven LOW (0).',
    difficulty: 'Easy',
    sourceNotesSection: '3.4 Decoders and Demultiplexers',
    isPyq: true,
    pyqYear: 2021
  },
  {
    id: 'quiz-u3-17',
    unitId: 'unit-3',
    topic: 'Multiplexer Sizing',
    questionText: 'How many select lines are required for a 64:1 multiplexer?',
    options: ['4 select lines', '5 select lines', '6 select lines', '8 select lines'],
    correctIndex: 2,
    explanation: 'A 2ⁿ:1 multiplexer requires n select lines. Since 64 = 2⁶, exactly 6 select lines (S₅, S₄, S₃, S₂, S₁, S₀) are required.',
    difficulty: 'Easy',
    sourceNotesSection: '3.3 Multiplexers (Data Selectors)',
    isPyq: false
  },
  {
    id: 'quiz-u3-18',
    unitId: 'unit-3',
    topic: 'Carry Look-Ahead Generation',
    questionText: 'Why does a 4-bit Carry Look-Ahead Adder operate substantially faster than a 4-bit Ripple Carry Adder?',
    options: [
      'It uses silicon bipolar transistors instead of CMOS',
      'All carry signals (C₁, C₂, C₃, C₄) are generated simultaneously in parallel two-level logic without waiting for previous stages to settle',
      'It skips odd-numbered bits during addition',
      'It runs on a separate high-frequency clock signal'
    ],
    correctIndex: 1,
    explanation: 'CLA expands carries as explicit Boolean functions of initial carry C₀ and propagate/generate terms (Gᵢ, Pᵢ). All carries evaluate simultaneously after only 2 gate delays, independent of word size.',
    difficulty: 'Medium',
    sourceNotesSection: '3.1 Binary Adders and Subtractors',
    isPyq: true,
    pyqYear: 2022
  },
  {
    id: 'quiz-u3-19',
    unitId: 'unit-3',
    topic: 'Full Subtractor Borrow Out',
    questionText: "What is the minimized Boolean equation for the Borrow Out (Bₒᵤₜ) of a Full Subtractor with inputs A, B, and Borrow In (Bᵢₙ)?",
    options: [
      "Bₒᵤₜ = A'B + A'Bᵢₙ + BBᵢₙ",
      "Bₒᵤₜ = AB + ABᵢₙ + BBᵢₙ",
      "Bₒᵤₜ = A'B' + B'Bᵢₙ",
      "Bₒᵤₜ = A ⊕ B ⊕ Bᵢₙ"
    ],
    correctIndex: 0,
    explanation: "K-map minimization of the borrow table (minterms 1, 2, 3, 7) yields: Bₒᵤₜ = A'B + A'Bᵢₙ + BBᵢₙ. Factored with XOR: Bₒᵤₜ = A'B + (A ⊕ B)' · Bᵢₙ.",
    difficulty: 'Medium',
    sourceNotesSection: '3.1 Binary Adders and Subtractors',
    isPyq: false
  },
  {
    id: 'quiz-u3-20',
    unitId: 'unit-3',
    topic: 'Magnitude Comparator',
    questionText: 'For a 2-bit binary magnitude comparator comparing word A = A₁A₀ and word B = B₁B₀, what is the precise Boolean equation for the Equality output (A = B)?',
    options: [
      '(A₁ ⊙ B₁) · (A₀ ⊙ B₀)',
      '(A₁ ⊕ B₁) + (A₀ ⊕ B₀)',
      '(A₁ · B₁) + (A₀ · B₀)',
      "(A₁' · B₁) · (A₀' · B₀)"
    ],
    correctIndex: 0,
    explanation: 'Two single bits are equal when their XNOR (equivalence) gate outputs 1: xᵢ = (Aᵢ ⊙ Bᵢ) = AᵢBᵢ + Aᵢ\'Bᵢ\'. For the two multi-bit words to be equal simultaneously, every corresponding bit pair must match: (A = B) = x₁ · x₀ = (A₁ ⊙ B₁) · (A₀ ⊙ B₀).',
    difficulty: 'Medium',
    sourceNotesSection: '3.4 Encoders, Decoders & Code Converters',
    isPyq: true,
    pyqYear: 2024
  },

  // ==========================================
  // CHAPTER 4 / UNIT IV: SEQUENTIAL LOGIC CIRCUITS (20 Questions)
  // ==========================================
  {
    id: 'quiz-u4-1',
    unitId: 'unit-4',
    topic: 'JK Characteristic Equation',
    questionText: 'What is the characteristic equation governing the next state (Qₙₑₓₜ) of an edge-triggered JK Flip-Flop?',
    options: [
      "Qₙₑₓₜ = J · Q + K' · Q'",
      "Qₙₑₓₜ = J · Q' + K' · Q",
      'Qₙₑₓₜ = J · K + Q',
      "Qₙₑₓₜ = J' · Q + K · Q'"
    ],
    correctIndex: 1,
    explanation: "From the JK excitation table: when J=1, K=0 it sets (1); when J=0, K=1 it resets (0); when J=K=0 it holds (Q); when J=K=1 it toggles (Q'). K-map reduction yields Qₙₑₓₜ = J·Q' + K'·Q.",
    difficulty: 'Easy',
    sourceNotesSection: '4.2 JK, D, T Flip-Flops & Master-Slave JK',
    isPyq: true,
    pyqYear: 2023
  },
  {
    id: 'quiz-u4-2',
    unitId: 'unit-4',
    topic: 'Ring Counter vs Johnson Counter',
    questionText: 'How many unique valid states does an 8-bit Ring Counter possess compared to an 8-bit Johnson (Twisted Ring) Counter?',
    options: [
      'Ring: 8 states; Johnson: 16 states',
      'Ring: 256 states; Johnson: 16 states',
      'Ring: 16 states; Johnson: 8 states',
      'Ring: 8 states; Johnson: 8 states'
    ],
    correctIndex: 0,
    explanation: 'An n-bit Ring Counter circulates a single 1 through n stages, yielding n states (8 states). A Johnson counter feeds inverted output Q\' back to input D, yielding 2n states (2 × 8 = 16 states).',
    difficulty: 'Medium',
    sourceNotesSection: '4.6 Synchronous Counters & Ring/Johnson Counters',
    isPyq: true,
    pyqYear: 2023
  },
  {
    id: 'quiz-u4-3',
    unitId: 'unit-4',
    topic: 'Finite State Machines',
    questionText: 'What is the fundamental architectural difference between Mealy and Moore state machine models?',
    options: [
      'Mealy machines cannot be built with flip-flops.',
      'In a Moore machine, output depends strictly on the current state; in a Mealy machine, output depends on both current state and current inputs.',
      'Moore machines always require twice as many clock cycles as Mealy machines.',
      'Mealy machines have no feedback paths.'
    ],
    correctIndex: 1,
    explanation: 'Moore output equation: Z = λ(S). Mealy output equation: Z = λ(S, X). Because Mealy outputs depend on current external inputs, they can react asynchronously within the current clock cycle.',
    difficulty: 'Easy',
    sourceNotesSection: '4.7 Finite State Machines & State Minimization',
    isPyq: true,
    pyqYear: 2021
  },
  {
    id: 'quiz-u4-4',
    unitId: 'unit-4',
    topic: 'Race-Around Condition',
    questionText: 'Under what specific operating conditions does the Race-Around condition occur in a level-triggered JK flip-flop?',
    options: [
      'When J = 0, K = 0 and clock pulse width tₚ < Δt',
      'When J = 1, K = 1 and clock pulse width tₚ > Δt (propagation delay of flip-flop)',
      'When J = 1, K = 0 and supply voltage drops',
      'When clock frequency is less than 1 Hz'
    ],
    correctIndex: 1,
    explanation: 'When J=K=1 in a level-triggered latch, output toggles every Δt. If the clock stays HIGH for tₚ > Δt, the output will oscillate uncontrollably between 0 and 1, leaving an unpredictable final state.',
    difficulty: 'Medium',
    sourceNotesSection: '4.2 JK, D, T Flip-Flops & Master-Slave JK',
    isPyq: true,
    pyqYear: 2022
  },
  {
    id: 'quiz-u4-5',
    unitId: 'unit-4',
    topic: 'Master-Slave Flip-Flop',
    questionText: 'How does a Master-Slave JK Flip-Flop completely eliminate the race-around problem?',
    options: [
      'By using inverters with infinite propagation delay',
      'The Master latch is enabled when CLK = 1 while the Slave is disabled; the Slave latch updates on the falling edge (CLK = 0) while the Master is disabled, isolating input from output',
      'By replacing the JK inputs with a D input',
      'By operating in asynchronous mode'
    ],
    correctIndex: 1,
    explanation: 'Because Master and Slave clock signals are complementary, at no time are both latches simultaneously enabled. Feedback from Slave cannot alter Master inputs during the clock pulse, preventing race-around.',
    difficulty: 'Medium',
    sourceNotesSection: '4.2 JK, D, T Flip-Flops & Master-Slave JK',
    isPyq: true,
    pyqYear: 2024
  },
  {
    id: 'quiz-u4-6',
    unitId: 'unit-4',
    topic: 'Timing Parameters',
    questionText: 'What is the definition of Setup Time (tₛₑₜᵤₚ) in a clocked edge-triggered flip-flop?',
    options: [
      'The time required to reset the flip-flop to 0',
      'The minimum duration of time that data input must remain stable before the active transition of the clock pulse',
      'The time data must remain stable after the active clock edge',
      'The delay from clock pulse to output Q'
    ],
    correctIndex: 1,
    explanation: 'Setup time (tₛₑₜᵤₚ) is the minimum time data must be held constant prior to the triggering clock edge to ensure reliable internal latching without entering metastability.',
    difficulty: 'Easy',
    sourceNotesSection: '4.3 Setup and Hold Times, Metastability',
    isPyq: true,
    pyqYear: 2023
  },
  {
    id: 'quiz-u4-7',
    unitId: 'unit-4',
    topic: 'Flip-Flop Conversion',
    questionText: 'To convert an available JK Flip-Flop into a D Flip-Flop, what external connections must be made?',
    options: [
      "Connect D directly to J, and connect D' (via an inverter) to K",
      'Tie J and K together and connect to D',
      'Connect J to ground and K to D',
      'Connect J to D and leave K floating'
    ],
    correctIndex: 0,
    explanation: "D flip-flop requires Qₙₑₓₜ = D. For D=1: J=1, K=0 (Set). For D=0: J=0, K=1 (Reset). Thus, J = D and K = D'.",
    difficulty: 'Easy',
    sourceNotesSection: '4.4 Flip-Flop Conversions & Excitation Tables',
    isPyq: true,
    pyqYear: 2020
  },
  {
    id: 'quiz-u4-8',
    unitId: 'unit-4',
    topic: 'Modulo-N Counter Sizing',
    questionText: 'What is the minimum number of flip-flops required to construct a synchronous Modulo-13 counter?',
    options: ['3 flip-flops', '4 flip-flops', '5 flip-flops', '13 flip-flops'],
    correctIndex: 1,
    explanation: 'The number of flip-flops n must satisfy 2ⁿ ≥ N. For N = 13: 2³ = 8 < 13, but 2⁴ = 16 ≥ 13. Therefore, n = 4 flip-flops are required.',
    difficulty: 'Easy',
    sourceNotesSection: '4.5 Asynchronous (Ripple) Counters',
    isPyq: false
  },
  {
    id: 'quiz-u4-9',
    unitId: 'unit-4',
    topic: 'Universal Shift Register (74194)',
    questionText: 'In the 4-bit Universal Shift Register (IC 74LS194), what operation is executed when mode control inputs are set to S₁S₀ = 11?',
    options: ['Parallel Load', 'Shift Right', 'Shift Left', 'Inhibit Clock (Hold)'],
    correctIndex: 0,
    explanation: 'Control modes of 74194: S₁S₀ = 00 is Hold/Inhibit; S₁S₀ = 01 is Shift Right; S₁S₀ = 10 is Shift Left; S₁S₀ = 11 is Parallel Load.',
    difficulty: 'Medium',
    sourceNotesSection: '4.5 Asynchronous (Ripple) Counters',
    isPyq: true,
    pyqYear: 2021
  },
  {
    id: 'quiz-u4-10',
    unitId: 'unit-4',
    topic: 'T Flip-Flop Excitation',
    questionText: 'From the excitation table of a T Flip-Flop, what value of input T is required to cause a state transition from Q = 1 to Qₙₑₓₜ = 0?',
    options: ['T = 0', 'T = 1', "T = Don't Care (X)", 'T = High-Impedance'],
    correctIndex: 1,
    explanation: 'T flip-flop toggles state when T = 1 (1 → 0 or 0 → 1) and holds state when T = 0. Since the state changes from 1 to 0, T must be 1.',
    difficulty: 'Easy',
    sourceNotesSection: '4.4 Flip-Flop Conversions & Excitation Tables',
    isPyq: false
  },
  {
    id: 'quiz-u4-11',
    unitId: 'unit-4',
    topic: 'Synchronous vs Asynchronous Counters',
    questionText: 'Why can a Synchronous Counter operate at vastly higher clock frequencies than an Asynchronous Ripple Counter of the same bit length?',
    options: [
      'In a synchronous counter, all flip-flops are clocked simultaneously by the same clock edge, eliminating cumulative ripple propagation delay',
      'Synchronous counters do not require power supply Vcc',
      'Asynchronous counters use analog inductors',
      'Synchronous counters use fewer logic gates'
    ],
    correctIndex: 0,
    explanation: 'In ripple counters, carry ripples sequentially from bit 0 to n (delay = n·tₚd). In synchronous counters, all stages toggle concurrently on the clock edge, with delay limited only to a single flip-flop plus logic gate delay.',
    difficulty: 'Medium',
    sourceNotesSection: '4.6 Synchronous Counters & Ring/Johnson Counters',
    isPyq: true,
    pyqYear: 2022
  },
  {
    id: 'quiz-u4-12',
    unitId: 'unit-4',
    topic: 'Maximum Operating Frequency',
    questionText: 'In a synchronous sequential circuit, the flip-flops have clock-to-Q delay t_cq = 3 ns, setup time t_setup = 2 ns, and the combinational logic path delay is t_comb = 5 ns. What is the maximum operating clock frequency (f_max)?',
    options: ['100 MHz', '50 MHz', '200 MHz', '20 MHz'],
    correctIndex: 0,
    explanation: 'Minimum clock period T_min = t_cq + t_comb + t_setup = 3 ns + 5 ns + 2 ns = 10 ns. Maximum clock frequency f_max = 1 / T_min = 1 / (10 × 10⁻⁹ s) = 100 MHz.',
    difficulty: 'Hard',
    sourceNotesSection: '4.3 Setup and Hold Times, Metastability',
    isPyq: true,
    pyqYear: 2024
  },
  {
    id: 'quiz-u4-13',
    unitId: 'unit-4',
    topic: 'SR Latch Invalid State',
    questionText: 'Why is the input combination S = 1, R = 1 designated as prohibited (invalid) in a basic NOR-based SR latch?',
    options: [
      'Because both outputs Q and Q_bar are forced to 0 simultaneously, violating the fundamental complementary relation Q = (Q_bar)’',
      'Because the circuit will immediately burn out',
      'Because it causes the power supply to short circuit',
      'Because the clock signal cannot penetrate the gates'
    ],
    correctIndex: 0,
    explanation: 'A NOR gate outputs 0 whenever any input is 1. When S=1 and R=1, both Q and Q_bar become 0. When inputs return to 00 simultaneously, random gate delay differences cause unpredictable race conditions.',
    difficulty: 'Easy',
    sourceNotesSection: '4.1 Latches vs Flip-Flops',
    isPyq: false
  },
  {
    id: 'quiz-u4-14',
    unitId: 'unit-4',
    topic: 'Johnson Counter Illegal States',
    questionText: 'An 8-bit Johnson counter utilizes 8 flip-flops (256 total states) but only traverses 16 valid states. What happens if noise knocks the counter into one of the 240 unused states?',
    options: [
      'The counter halts permanently',
      'The counter may lock up into an illegal sub-cycle unless self-correcting feedback decoding logic is incorporated',
      'It instantly reboots to state 00000000 with no extra hardware',
      'It converts into a 16-bit counter'
    ],
    correctIndex: 1,
    explanation: 'Unused states in Johnson counters can form closed parasitic loops. Designers must include self-correcting gating to force any illegal state back into the main counting sequence within a few clock cycles.',
    difficulty: 'Hard',
    sourceNotesSection: '4.6 Synchronous Counters & Ring/Johnson Counters',
    isPyq: true,
    pyqYear: 2023
  },
  {
    id: 'quiz-u4-15',
    unitId: 'unit-4',
    topic: 'PISO Shift Register Timing',
    questionText: 'To load 8 bits of parallel data into a Parallel-In Serial-Out (PISO) register and shift all 8 bits out serially, how many total clock pulses are required?',
    options: ['8 clock pulses (1 to parallel load + 7 to shift out)', '16 clock pulses', '1 clock pulse', '64 clock pulses'],
    correctIndex: 0,
    explanation: 'Parallel loading happens in 1 clock pulse. Once loaded, the first bit is already at the output terminal, so shifting the remaining 7 bits out requires 7 serial shift pulses. Total = 1 + 7 = 8 clock pulses.',
    difficulty: 'Medium',
    sourceNotesSection: '4.5 Asynchronous (Ripple) Counters',
    isPyq: false
  },
  {
    id: 'quiz-u4-16',
    unitId: 'unit-4',
    topic: 'State Table Minimization',
    questionText: 'In sequential circuit state reduction, under what criteria are two states considered equivalent?',
    options: [
      'If for every possible input combination, they generate identical outputs and transition to identical (or equivalent) next states',
      'If they have the same binary state label',
      'If both states have only 0 as an output',
      'If they belong to the same flip-flop'
    ],
    correctIndex: 0,
    explanation: 'By the state equivalence theorem, two states S_i and S_j are equivalent iff for all input sequences, the circuit generates identical output sequences whether started in S_i or S_j.',
    difficulty: 'Medium',
    sourceNotesSection: '4.7 Finite State Machines & State Minimization',
    isPyq: true,
    pyqYear: 2020
  },
  {
    id: 'quiz-u4-17',
    unitId: 'unit-4',
    topic: 'JK to T Flip-Flop Conversion',
    questionText: 'How is a standard JK flip-flop configured to operate as a Toggle (T) flip-flop?',
    options: [
      'By tying inputs J and K together to form the single T input',
      "By connecting J = T and K = T'",
      'By tying K to ground and J to T',
      'By tying J to ground and K to T'
    ],
    correctIndex: 0,
    explanation: 'When J=K=0, the JK flip-flop holds state (T=0). When J=K=1, the JK flip-flop toggles state (T=1). Connecting J and K together perfectly satisfies the T flip-flop behavior.',
    difficulty: 'Easy',
    sourceNotesSection: '4.4 Flip-Flop Conversions & Excitation Tables',
    isPyq: false
  },
  {
    id: 'quiz-u4-18',
    unitId: 'unit-4',
    topic: 'Clock Skew',
    questionText: 'What is Clock Skew in a high-speed synchronous digital system?',
    options: [
      'The spatial difference in arrival times of the clock edge at different flip-flops across the chip due to routing delays',
      'The gradual degradation of power supply voltage',
      'The fluctuation of clock frequency over temperature',
      'The delay between input data and output data'
    ],
    correctIndex: 0,
    explanation: 'Clock skew is caused by differing wire lengths and RC delays in the clock distribution tree, causing the clock edge to arrive at different registers at slightly different times, potentially causing hold-time violations.',
    difficulty: 'Hard',
    sourceNotesSection: '4.3 Setup and Hold Times, Metastability',
    isPyq: true,
    pyqYear: 2024
  },
  {
    id: 'quiz-u4-19',
    unitId: 'unit-4',
    topic: 'Asynchronous Ripple Decoding Glitches',
    questionText: 'Why do decoding gates attached to asynchronous ripple counters suffer from temporary false output spikes (glitches)?',
    options: [
      'Because flip-flops do not change state simultaneously; intermediate temporary binary count states exist briefly during ripple propagation',
      'Because of electromagnetic interference from nearby inductors',
      'Because ripple counters only work on negative voltages',
      'Because the supply voltage drops during every count'
    ],
    correctIndex: 0,
    explanation: 'When counting e.g. from 0111 (7) to 1000 (8), stage 0 flips first, then stage 1, then stage 2. Brief transient states like 0110, 0100 appear for nanoseconds, causing decoding gates to glitch momentarily.',
    difficulty: 'Medium',
    sourceNotesSection: '4.5 Asynchronous (Ripple) Counters',
    isPyq: false
  },
  {
    id: 'quiz-u4-20',
    unitId: 'unit-4',
    topic: 'State Reduction & State Equivalence',
    questionText: 'In the design of synchronous sequential machines (FSM), two states Sᵢ and Sⱼ are defined to be equivalent if and only if:',
    options: [
      'For every possible input combination, they yield identical outputs AND their next states are either identical or equivalent.',
      'They have the exact same binary state assignment.',
      'They both transition to the initial state on reset.',
      'They are active only on the falling edge of the clock.'
    ],
    correctIndex: 0,
    explanation: 'By the formal definition of state equivalence in sequential finite state machines, two states are equivalent (Sᵢ ≈ Sⱼ) if for all possible input sequences of arbitrary length, the machine generates identical output sequences. In single-step partitioning, this requires matching outputs and equivalent next states.',
    difficulty: 'Hard',
    sourceNotesSection: '4.7 Synchronous Counters & FSM Design',
    isPyq: true,
    pyqYear: 2023
  },

  // ==========================================
  // CHAPTER 5 / UNIT V: MEMORY DEVICES & LOGIC FAMILIES (20 Questions)
  // ==========================================
  {
    id: 'quiz-u5-1',
    unitId: 'unit-5',
    topic: 'CMOS Static Power Dissipation',
    questionText: 'Why does a standard CMOS logic gate consume near-zero static (quiescent) DC power compared to bipolar TTL logic?',
    options: [
      'Because CMOS operates at sub-zero cryogenic temperatures.',
      'Because in any steady-state output condition (HIGH or LOW), one of the series-complementary transistors (PMOS or NMOS) is always turned completely OFF, blocking any direct DC path from V_DD to Ground.',
      'Because CMOS circuits use passive inductors instead of active transistors.',
      'Because CMOS logic does not require a power supply voltage V_DD.'
    ],
    correctIndex: 1,
    explanation: 'In steady state (0 or 1), the pull-up PMOS and pull-down NMOS networks are never ON simultaneously. Only minute sub-nanoampere reverse-biased junction leakage currents flow.',
    difficulty: 'Medium',
    sourceNotesSection: '5.5 CMOS Logic Circuits and Transmission Gates',
    isPyq: true,
    pyqYear: 2023
  },
  {
    id: 'quiz-u5-2',
    unitId: 'unit-5',
    topic: 'SRAM vs DRAM Operation',
    questionText: 'Why does Dynamic RAM (DRAM) require continuous periodic memory refresh cycles whereas Static RAM (SRAM) does not?',
    options: [
      'DRAM uses bipolar diodes that degrade under heat.',
      'DRAM stores each data bit as an electrostatic charge on a microscopic MOS capacitor that gradually leaks charge over milliseconds; SRAM stores data in bistable cross-coupled flip-flop latches.',
      'DRAM is magnetic core memory.',
      'DRAM has no clock signal.'
    ],
    correctIndex: 1,
    explanation: 'A DRAM cell uses a single transistor and capacitor (1T-1C). Subthreshold silicon leakage drains the stored charge within milliseconds, requiring a refresh cycle every 64 ms. SRAM uses a 6T bistable latch that retains data as long as power is applied.',
    difficulty: 'Easy',
    sourceNotesSection: '5.2 SRAM vs DRAM Architectures',
    isPyq: true,
    pyqYear: 2021
  },
  {
    id: 'quiz-u5-3',
    unitId: 'unit-5',
    topic: 'PLA vs PAL Architectures',
    questionText: 'What is the structural difference between a Programmable Logic Array (PLA) and a Programmable Array Logic (PAL) device?',
    options: [
      'PLA has both programmable AND array and programmable OR array; PAL has programmable AND array but fixed OR array.',
      'PAL has both programmable arrays; PLA has fixed arrays.',
      'PLA cannot realize SOP expressions.',
      'PAL uses bipolar vacuum tubes.'
    ],
    correctIndex: 0,
    explanation: 'A PLA provides maximum flexibility because both the AND plane and OR plane are user-programmable. A PAL simplifies manufacturing by keeping the OR plane fixed and only allowing the AND plane to be programmed.',
    difficulty: 'Medium',
    sourceNotesSection: '5.4 Programmable Logic Devices (PROM, PLA, PAL, FPGA)',
    isPyq: true,
    pyqYear: 2024
  },
  {
    id: 'quiz-u5-4',
    unitId: 'unit-5',
    topic: 'Memory Capacity Calculation',
    questionText: 'A memory chip has 14 address lines (A₁₃ to A₀) and 8 data lines (D₇ to D₀). What is the total storage capacity of this memory device in bytes?',
    options: ['16 KB (16,384 Bytes)', '32 KB (32,768 Bytes)', '8 KB (8,192 Bytes)', '64 KB (65,536 Bytes)'],
    correctIndex: 0,
    explanation: 'Total addressable memory locations = 2¹⁴ = 16,384 words. Since each word has a width of 8 bits (1 Byte), total capacity = 16,384 × 1 Byte = 16 KB.',
    difficulty: 'Easy',
    sourceNotesSection: '5.1 Classification of Semiconductor Memories',
    isPyq: true,
    pyqYear: 2022
  },
  {
    id: 'quiz-u5-5',
    unitId: 'unit-5',
    topic: 'Noise Margin Definitions',
    questionText: 'How is the High-State Noise Margin (NM_H) of a digital logic family defined mathematically?',
    options: [
      'NM_H = V_OH(min) - V_IH(min)',
      'NM_H = V_IH(min) - V_IL(max)',
      'NM_H = V_CC - V_OH(min)',
      'NM_H = V_OL(max) - V_IL(max)'
    ],
    correctIndex: 0,
    explanation: 'Noise Margin High represents the maximum noise voltage that can be added to a HIGH signal without causing it to drop below the threshold: NM_H = V_OH(min) - V_IH(min).',
    difficulty: 'Medium',
    sourceNotesSection: '5.5 CMOS Logic Circuits and Transmission Gates',
    isPyq: true,
    pyqYear: 2020
  },
  {
    id: 'quiz-u5-6',
    unitId: 'unit-5',
    topic: 'Logic Family Fan-Out',
    questionText: 'What is the definition of Fan-Out in digital IC specifications?',
    options: [
      'The number of cooling fans required inside the chip packaging',
      'The maximum number of standard logic inputs of the same family that a gate output can reliably drive without violating voltage thresholds',
      'The number of inputs connected to a single gate',
      'The maximum output voltage swing'
    ],
    correctIndex: 1,
    explanation: 'Fan-out indicates output load-driving capability. It is the minimum of I_OH/I_IH and I_OL/I_IL, defining how many identical input gates can be tied to the output without causing logic level degradation.',
    difficulty: 'Easy',
    sourceNotesSection: '5.5 CMOS Logic Circuits and Transmission Gates',
    isPyq: false
  },
  {
    id: 'quiz-u5-7',
    unitId: 'unit-5',
    topic: 'CMOS Inverter Transistor Structure',
    questionText: 'In a standard static CMOS inverter, how are the PMOS and NMOS transistors connected between the power supply rails and the output node?',
    options: [
      'PMOS pull-up between V_DD and output; NMOS pull-down between output and Ground; both gates tied to input',
      'NMOS pull-up between V_DD and output; PMOS pull-down to Ground',
      'Both PMOS and NMOS connected in parallel between V_DD and Ground',
      'Only NMOS is used with an active resistor'
    ],
    correctIndex: 0,
    explanation: 'PMOS conducts when gate is 0 (pulling output up to V_DD). NMOS conducts when gate is 1 (pulling output down to GND). Their gates are tied together to form the input.',
    difficulty: 'Easy',
    sourceNotesSection: '5.5 CMOS Logic Circuits and Transmission Gates',
    isPyq: true,
    pyqYear: 2023
  },
  {
    id: 'quiz-u5-8',
    unitId: 'unit-5',
    topic: 'Tri-State Logic',
    questionText: 'What are the three distinct states of a Tri-State (Three-State) logic buffer?',
    options: [
      'Logic 0, Logic 1, and High-Impedance (Hi-Z)',
      'Positive, Negative, and Neutral',
      'Low, Medium, and High voltage',
      'Active, Idle, and Sleep mode'
    ],
    correctIndex: 0,
    explanation: 'When enabled, a tri-state buffer outputs standard Logic 0 or Logic 1. When disabled (high impedance / Hi-Z), its output electrically disconnects from the bus, preventing signal contention on shared communication lines.',
    difficulty: 'Easy',
    sourceNotesSection: '5.5 CMOS Logic Circuits and Transmission Gates',
    isPyq: false
  },
  {
    id: 'quiz-u5-9',
    unitId: 'unit-5',
    topic: 'Open-Collector TTL Applications',
    questionText: 'What capability does an Open-Collector TTL gate output provide when used with an external pull-up resistor?',
    options: [
      'It allows outputs of multiple gates to be tied directly together to perform Wired-AND logic without damaging the ICs',
      'It doubles the switching speed of the transistors',
      'It eliminates the need for ground connections',
      'It converts TTL logic levels directly into 230V AC'
    ],
    correctIndex: 0,
    explanation: 'Because open-collector gates only pull down to 0 and have no active pull-up transistor, tying outputs together creates a Wired-AND function: if any gate pulls LOW, the bus is LOW.',
    difficulty: 'Medium',
    sourceNotesSection: '5.5 CMOS Logic Circuits and Transmission Gates',
    isPyq: true,
    pyqYear: 2021
  },
  {
    id: 'quiz-u5-10',
    unitId: 'unit-5',
    topic: 'EPROM vs EEPROM Erasure',
    questionText: 'How is stored data erased in an EPROM chip compared to an EEPROM chip?',
    options: [
      'EPROM is erased by exposure to intense Ultraviolet (UV) light through a transparent quartz window; EEPROM is erased electrically in-circuit byte-by-byte',
      'EPROM is erased by magnetic pulses; EEPROM by laser beams',
      'EPROM cannot be erased once programmed',
      'EEPROM requires chemical bath immersion'
    ],
    correctIndex: 0,
    explanation: 'EPROM (Ultraviolet Erasable PROM) requires 20-30 minutes of UV radiation through its quartz lid to discharge floating gates. EEPROM (Electrically Erasable PROM) uses Fowler-Nordheim electron tunneling to erase bytes electrically in-system.',
    difficulty: 'Easy',
    sourceNotesSection: '5.1 Classification of Semiconductor Memories',
    isPyq: true,
    pyqYear: 2020
  },
  {
    id: 'quiz-u5-11',
    unitId: 'unit-5',
    topic: 'Emitter-Coupled Logic (ECL)',
    questionText: 'Why is Emitter-Coupled Logic (ECL) the fastest saturated/bipolar logic family available?',
    options: [
      'Because its bipolar transistors operate strictly in the active (non-saturated) region, eliminating transistor base charge storage time delay',
      'Because it uses optical fiber connections inside the package',
      'Because it operates at 100V power supply',
      'Because it has zero propagation delay'
    ],
    correctIndex: 0,
    explanation: 'In standard TTL, transistors saturate, requiring significant storage time to evacuate excess base charge before turning off. ECL uses non-saturating current steering, enabling sub-nanosecond switching.',
    difficulty: 'Hard',
    sourceNotesSection: '5.5 CMOS Logic Circuits and Transmission Gates',
    isPyq: true,
    pyqYear: 2024
  },
  {
    id: 'quiz-u5-12',
    unitId: 'unit-5',
    topic: 'Power-Delay Product (PDP)',
    questionText: 'What does the Power-Delay Product (PDP) figure of merit measure in digital logic families?',
    options: [
      'The energy consumed by a logic gate per switching transition (PDP = Power × Propagation Delay)',
      'The maximum temperature the gate can withstand',
      'The physical surface area occupied on silicon',
      'The ratio of input pins to output pins'
    ],
    correctIndex: 0,
    explanation: 'PDP = P_diss × t_pd. Dimensionally, Watts × seconds = Joules (energy). A lower PDP indicates superior energy-efficiency, switching quickly while dissipating minimal power.',
    difficulty: 'Medium',
    sourceNotesSection: '5.5 CMOS Logic Circuits and Transmission Gates',
    isPyq: false
  },
  {
    id: 'quiz-u5-13',
    unitId: 'unit-5',
    topic: 'PROM Architecture',
    questionText: 'What is the internal hardware organization of a standard Programmable Read-Only Memory (PROM) device?',
    options: [
      'A fixed, non-programmable AND decoder array generating all 2ⁿ minterms, followed by a programmable OR array (fusible links)',
      'A programmable AND array and a fixed OR array',
      'Both AND and OR arrays are fixed',
      'Both AND and OR arrays are programmable'
    ],
    correctIndex: 0,
    explanation: 'A PROM consists of a fixed complete n-to-2ⁿ binary decoder (fixed AND array) that generates every canonical minterm, connected to a user-programmable OR matrix (blown fuses).',
    difficulty: 'Medium',
    sourceNotesSection: '5.4 Programmable Logic Devices (PROM, PLA, PAL, FPGA)',
    isPyq: true,
    pyqYear: 2022
  },
  {
    id: 'quiz-u5-14',
    unitId: 'unit-5',
    topic: 'CMOS Transmission Gate',
    questionText: 'What is a CMOS Transmission Gate (Bilateral Switch) and why is it constructed with a parallel PMOS and NMOS pair?',
    options: [
      'Because NMOS passes a strong Logic 0 but a degraded weak 1, while PMOS passes a strong Logic 1 but a degraded weak 0; combining them in parallel passes full rail-to-rail voltage for both 0 and 1',
      'To provide double the amplification gain of an operational amplifier',
      'To act as a high-voltage fuse',
      'To invert the clock signal'
    ],
    correctIndex: 0,
    explanation: 'Single NMOS suffers threshold drop V_DD - V_tn when passing HIGH. Single PMOS drops |V_tp| when passing LOW. Paralleling PMOS and NMOS with complementary clocks ensures true rail-to-rail conduction for both states.',
    difficulty: 'Hard',
    sourceNotesSection: '5.5 CMOS Logic Circuits and Transmission Gates',
    isPyq: true,
    pyqYear: 2023
  },
  {
    id: 'quiz-u5-15',
    unitId: 'unit-5',
    topic: 'SRAM 6T Memory Cell',
    questionText: 'How many MOSFET transistors are utilized to construct a single standard Static RAM (SRAM) memory storage bit?',
    options: ['6 MOSFETs (4 forming two cross-coupled inverters + 2 access pass transistors)', '1 MOSFET and 1 capacitor', '2 MOSFETs', '8 MOSFETs'],
    correctIndex: 0,
    explanation: 'Standard 6T SRAM cell consists of two cross-coupled CMOS inverters (4 transistors) forming a bistable flip-flop, plus 2 NMOS access pass transistors gated by the Word Line.',
    difficulty: 'Easy',
    sourceNotesSection: '5.2 SRAM vs DRAM Architectures',
    isPyq: false
  },
  {
    id: 'quiz-u5-16',
    unitId: 'unit-5',
    topic: 'FPGA Architecture',
    questionText: 'What are the fundamental building blocks of a Field Programmable Gate Array (FPGA)?',
    options: [
      'Configurable Logic Blocks (CLBs) with Look-Up Tables (LUTs), flip-flops, programmable I/O blocks, and programmable routing interconnects',
      'Vacuum tubes and relays',
      'Hardwired non-reprogrammable NAND gates only',
      'Bipolar operational amplifiers'
    ],
    correctIndex: 0,
    explanation: 'FPGAs feature a sea of Configurable Logic Blocks (CLBs) containing SRAM-based LUTs (which implement arbitrary Boolean truth tables) and flip-flops, interconnected by a programmable switch matrix.',
    difficulty: 'Medium',
    sourceNotesSection: '5.4 Programmable Logic Devices (PROM, PLA, PAL, FPGA)',
    isPyq: true,
    pyqYear: 2024
  },
  {
    id: 'quiz-u5-17',
    unitId: 'unit-5',
    topic: 'Flash Memory Architecture',
    questionText: 'How does Flash Memory differ in its write/erase architecture from standard EEPROM?',
    options: [
      'Flash memory must be erased in entire blocks or sectors simultaneously rather than byte-by-byte, yielding vastly higher storage density at lower cost',
      'Flash memory requires mechanical moving parts',
      'Flash memory is volatile and loses contents when powered down',
      'Flash memory cannot be written to more than 10 times'
    ],
    correctIndex: 0,
    explanation: 'Flash memory omits individual select transistors per byte, allowing ultra-compact single-transistor floating-gate cells. The trade-off is that erasure must be performed in large blocks (sectors).',
    difficulty: 'Medium',
    sourceNotesSection: '5.1 Classification of Semiconductor Memories',
    isPyq: false
  },
  {
    id: 'quiz-u5-18',
    unitId: 'unit-5',
    topic: 'TTL Totem-Pole Output',
    questionText: 'What is the purpose of the Totem-Pole output stage configuration in standard TTL logic gates?',
    options: [
      'To provide active pull-up and active pull-down, charging load capacitances rapidly to achieve low propagation delays',
      'To allow wireless radio frequency transmission',
      'To permit direct connection to 110V wall outlets',
      'To disable all current flow'
    ],
    correctIndex: 0,
    explanation: 'A passive pull-up resistor suffers slow RC charging time constants. TTL totem-pole replaces the resistor with an active NPN transistor pull-up, providing low output impedance in both HIGH and LOW states for fast switching.',
    difficulty: 'Hard',
    sourceNotesSection: '5.5 CMOS Logic Circuits and Transmission Gates',
    isPyq: true,
    pyqYear: 2021
  },
  {
    id: 'quiz-u5-19',
    unitId: 'unit-5',
    topic: 'Memory Address Decoding',
    questionText: 'A 2-dimensional (2D) memory matrix with 1024 word storage locations uses coincidence decoding. How many lines are decoded by the Row Decoder and Column Decoder?',
    options: [
      '32 Row lines and 32 Column lines (32 × 32 = 1024 coincidence intersections)',
      '1024 Row lines and 1 Column line',
      '512 Row lines and 2 Column lines',
      '64 Row lines and 16 Column lines'
    ],
    correctIndex: 0,
    explanation: '2D matrix decoding splits 10 address bits (2¹⁰ = 1024) into 5 row bits and 5 column bits. A 5-to-32 row decoder and 5-to-32 column decoder require only 32 + 32 = 64 lines instead of 1024 lines.',
    difficulty: 'Medium',
    sourceNotesSection: '5.3 Memory Decoding and Coincidence Selection',
    isPyq: true,
    pyqYear: 2022
  },
  {
    id: 'quiz-u5-20',
    unitId: 'unit-5',
    topic: 'Dynamic RAM (DRAM) Refresh',
    questionText: 'Why does Dynamic RAM (DRAM) fundamentally require periodic refresh cycles (typically every 64 ms), unlike Static RAM (SRAM)?',
    options: [
      'DRAM stores bits as tiny electrical charges on microscopic MOS gate capacitors that gradually leak charge through the semiconductor junction.',
      'DRAM uses miniature magnetic coils that lose magnetic polarization.',
      'DRAM loses synchronized phase alignment with the CPU clock bus.',
      'DRAM operating junction temperature increases without active discharge.'
    ],
    correctIndex: 0,
    explanation: 'DRAM cells utilize an ultra-compact single transistor and single storage capacitor (1T-1C) per bit. Due to sub-micron junction leakage currents, the charge stored on the capacitor leaks away within milliseconds. Periodic refresh read/write cycles continuously recharge the cell to prevent data corruption.',
    difficulty: 'Medium',
    sourceNotesSection: '5.2 SRAM vs DRAM and Memory Cell Design',
    isPyq: true,
    pyqYear: 2024
  }
];

export const CHAPTER_QUIZ_INFO: Record<string, { title: string; subtitle: string; count: number; chapterNo: number }> = {
  'unit-1': {
    chapterNo: 1,
    title: 'Chapter 1: Number Systems & Boolean Algebra',
    subtitle: 'Radix conversions, 1s/2s complements, Hamming & Gray codes, Logic gates, Boolean theorems',
    count: 20
  },
  'unit-2': {
    chapterNo: 2,
    title: 'Chapter 2: Minimization Techniques & K-Maps',
    subtitle: '2, 3, 4, 5-variable K-maps, Prime & Essential PIs, Don’t-Care terms, Quine-McCluskey tabular method',
    count: 20
  },
  'unit-3': {
    chapterNo: 3,
    title: 'Chapter 3: Combinational Logic Circuits',
    subtitle: 'Half/Full Adders & Subtractors, Carry Look-Ahead, BCD Adders, MUX trees, Decoders, Priority Encoders',
    count: 20
  },
  'unit-4': {
    chapterNo: 4,
    title: 'Chapter 4: Sequential Logic Circuits',
    subtitle: 'SR, JK, D, T Flip-Flops, Race-around & Master-Slave, Counters (Ripple, Ring, Johnson), FSM Mealy/Moore',
    count: 20
  },
  'unit-5': {
    chapterNo: 5,
    title: 'Chapter 5: Memory Devices & Logic Families',
    subtitle: 'SRAM vs DRAM, ROM, PLA, PAL, FPGA, CMOS vs TTL vs ECL, Noise Margin, Fan-out, Transmission Gates',
    count: 20
  }
};
