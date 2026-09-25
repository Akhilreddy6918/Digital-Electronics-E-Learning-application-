import { NoteSection } from '../../types/digitalElectronics';

export const UNIT_3_NOTES: NoteSection[] = [
  {
    id: 'sec-u3-1',
    unitId: 'unit-3',
    unitTitle: 'Unit III – Combinational Circuits',
    title: '10. Combinational Logic Design & Half/Full Adders & Subtractors',
    pageNumber: 60,
    summary: 'Design procedure, Half Adder, Full Adder (AOI, 2-HA, NAND, NOR), Half Subtractor, and Full Subtractor logic expressions and truth tables.',
    keyFormulas: [
      'Half Adder: S = A \\oplus B, \\quad C = AB',
      'Full Adder: S = A \\oplus B \\oplus C_{in}, \\quad C_{out} = AB + C_{in}(A \\oplus B)',
      'Half Subtractor: d = A \\oplus B, \\quad b = A\'B',
      'Full Subtractor: d = A \\oplus B \\oplus b_i, \\quad b = A\'B + b_i(A \\oplus B)\''
    ],
    videoSequenceNos: [69, 70, 71, 72, 73, 74],
    circuitIds: ['half-adder', 'full-adder', 'half-subtractor', 'full-subtractor'],
    content: `
DIGITAL LOGIC DESIGN - Page no. 60 to 72

UNIT - III: COMBINATIONAL CIRCUITS

COMBINATIONAL LOGIC DEFINITION:
A combinational circuit consists of logic gates whose outputs at any time are determined directly from the present combination of inputs without memory or feedback.
For n input variables, there are 2^n possible binary combinations. For each input combination, there is one and only one possible output combination.

Standard Design Procedure:
1. State the problem clearly.
2. Determine available input variables and required output variables.
3. Assign letter symbols to inputs and outputs.
4. Derive the truth table defining relationships between inputs and outputs.
5. Obtain simplified Boolean functions for each output using K-maps.
6. Draw the logic diagram and verify design.

THE HALF ADDER:
Adds two single binary bits (augend A and addend B):
• Sum (S): S = A'B + AB' = A ⊕ B
• Carry (C): C = AB
Implemented using ONE XOR gate and ONE AND gate, or 5 two-input NAND gates.

THE FULL ADDER:
Adds three bits: two operand bits A, B and a carry from the previous stage C_{in}:
• Sum (S): S = A ⊕ B ⊕ C_{in}
• Carry-Out (C_{out}): C_{out} = AB + C_{in}(A ⊕ B) = AB + BC_{in} + AC_{in}
Realization using Two Half-Adders:
• HA1 produces: S1 = A ⊕ B and C1 = AB
• HA2 adds S1 and C_{in}: S = S1 ⊕ C_{in} = A ⊕ B ⊕ C_{in}
• Final Carry: C_{out} = C1 + C2 = AB + C_{in}(A ⊕ B)

THE HALF SUBTRACTOR:
Subtracts subtrahend bit B from minuend bit A:
• Difference (d): d = A ⊕ B
• Borrow (b): b = A'B
Notice that difference logic is identical to sum in half adder!

THE FULL SUBTRACTOR:
Subtracts two bits A, B along with an input borrow b_i from previous column:
• Difference (d): d = A ⊕ B ⊕ b_i
• Output Borrow (b): b = A'B + b_i(A ⊕ B)' = A'B + A'b_i + Bb_i
Can be realized using two half-subtractors and one OR gate, or universal NAND/NOR logic.
`
  },
  {
    id: 'sec-u3-2',
    unitId: 'unit-3',
    unitTitle: 'Unit III – Combinational Circuits',
    title: '11. Parallel Binary Adders, Ripple Carry, Subtractor & Carry Look-Ahead (CLA)',
    pageNumber: 73,
    summary: '4-bit binary parallel adder, ripple carry delay, parallel subtractor, adder-subtractor unit with mode M, and high-speed Carry Look-Ahead equations.',
    keyFormulas: [
      'Carry Generate: G_n = A_n B_n | Carry Propagate: P_n = A_n \\oplus B_n',
      'C_1 = G_0 + P_0 C_0',
      'C_2 = G_1 + P_1 G_0 + P_1 P_0 C_0',
      'C_3 = G_2 + P_2 G_1 + P_2 P_1 G_0 + P_2 P_1 P_0 C_0',
      'C_4 = G_3 + P_3 G_2 + P_3 P_2 G_1 + P_3 P_2 P_1 G_0 + P_3 P_2 P_1 P_0 C_0',
      'Mode M Control: M=0 -> Addition (B \\oplus 0 = B, C_0=0); M=1 -> Subtraction (B \\oplus 1 = B\', C_0=1)'
    ],
    videoSequenceNos: [75, 76, 77, 78],
    circuitIds: ['adder-subtractor', 'full-adder'],
    content: `
DIGITAL LOGIC DESIGN - Page no. 73 to 78

4-BIT BINARY PARALLEL ADDER:
Adds two 4-bit numbers A (A3 A2 A1 A0) and B (B3 B2 B1 B0) in parallel. Constructed by cascading four Full Adders (FA).
The carry-out of each full-adder is connected to the carry-in of the next stage.
Example IC: 74LS83 / 74LS283.

Ripple Carry Adder Limitation:
• Carry must ripple sequentially from FA1 to FA4.
• Worst-case propagation delay is 4 * t_{carry}, making addition slow for large word lengths (32 or 64 bits).

4-BIT BINARY ADDER-SUBTRACTOR:
Combines addition and subtraction into one circuit using an XOR gate on each B input and a Mode control input M:
• When M = 0: B ⊕ 0 = B and C_0 = 0 -> Performs A + B (Addition).
• When M = 1: B ⊕ 1 = B' and C_0 = 1 -> Adds 1's complement of B plus 1 to A (i.e. A + 2's complement of B) -> Performs A - B (Subtraction)!

CARRY LOOK-AHEAD (CLA) ADDER:
Speeds up addition by eliminating ripple carry delay. Generates all carries simultaneously using two auxiliary functions:
1. Carry Generate: G_n = A_n . B_n (carry generated inside stage n regardless of input carry).
2. Carry Propagate: P_n = A_n ⊕ B_n (carry propagated through stage n if input carry exists).

Recursive Boolean Expressions:
  C_1 = G_0 + P_0 C_0
  C_2 = G_1 + P_1 G_0 + P_1 P_0 C_0
  C_3 = G_2 + P_2 G_1 + P_2 P_1 G_0 + P_2 P_1 P_0 C_0
  C_4 = G_3 + P_3 G_2 + P_3 P_2 G_1 + P_3 P_2 P_1 G_0 + P_3 P_2 P_1 P_0 C_0

Since each carry is expressed as a two-level AND-OR equation directly in terms of input operands, all carries are available after only 2 gate delays!

SERIAL ADDER:
Adds binary numbers serially one bit at a time using two shift registers (A and B), a single Full Adder, and a D Flip-Flop to store the carry bit.
Accumulates the sum into Register A over n clock cycles.
`
  },
  {
    id: 'sec-u3-3',
    unitId: 'unit-3',
    unitTitle: 'Unit III – Combinational Circuits',
    title: '12. BCD Adder, Excess-3 Adder & Multipliers',
    pageNumber: 79,
    summary: 'BCD adder correction logic X = S4 + S3(S2 + S1), Excess-3 adder/subtractor, serial binary multiplier 4 clock cycle execution (1110 x 1001).',
    keyFormulas: [
      'BCD Correction logic: X = S_4 + S_3(S_2 + S_1)',
      'If X = 1: Add 0110 (6) to sum bits using second 4-bit adder and propagate carry',
      'Binary Multiplier: Multiplicand shifted left, accumulator stores running partial sum'
    ],
    videoSequenceNos: [79, 80, 81, 82],
    circuitIds: ['full-adder'],
    content: `
DIGITAL LOGIC DESIGN - Page no. 79 to 83

BCD (DECIMAL) ADDER:
Adds two 4-bit BCD code groups A3 A2 A1 A0 and B3 B2 B1 B0:
1. Sum can range from 0 (00000) to 19 (10011) when carry-in is present.
2. If sum <= 9 and S4 (carry-out) = 0: Valid BCD, no correction needed.
3. If sum > 9 or S4 = 1: Invalid BCD; add correction factor 0110 (6_{10}) to sum bits.

Correction Detector Logic:
Output X goes HIGH whenever sum > 9:
  X = S_4 + S_3(S_2 + S_1)
Architecture:
• Top 4-bit adder (74LS83) computes initial binary sum.
• Logic gates detect condition X = S4 + S3(S2 + S1).
• Bottom 4-bit adder adds 0110 when X = 1, yielding corrected BCD sum and decimal carry.

EXCESS-3 (XS-3) ADDER:
1. Add two XS-3 numbers using a 4-bit binary adder.
2. If carry is 1: Add 0011 (3) in second adder.
3. If carry is 0: Subtract 0011 (i.e. add 1101) in second adder.

BINARY SERIAL MULTIPLIER:
Multiplies two 4-bit numbers (e.g. 1110 x 1001) using:
• Multiplicand Register B (8-bit, shifts left)
• Multiplier Register X (4-bit, shifts right)
• Accumulator Register A (8-bit)
• 8-bit parallel adder
In 4 clock cycles, partial products corresponding to multiplier bits are accumulated, producing an 8-bit product (1111110_2).
`
  },
  {
    id: 'sec-u3-4',
    unitId: 'unit-3',
    unitTitle: 'Unit III – Combinational Circuits',
    title: '13. Code Converters, Comparators, Encoders & Tristate Bus System',
    pageNumber: 84,
    summary: 'Binary-to-Gray, Gray-to-Binary, BCD-to-XS-3, 1-bit/2-bit/4-bit magnitude comparators (IC 7485), Encoders, Priority Encoders, and Tristate logic.',
    keyFormulas: [
      'Binary to Gray: G_4 = B_4, G_3 = B_4 \\oplus B_3, G_2 = B_3 \\oplus B_2, G_1 = B_2 \\oplus B_1',
      'Gray to Binary: B_4 = G_4, B_3 = G_4 \\oplus G_3, B_2 = B_3 \\oplus G_2, B_1 = B_2 \\oplus G_1',
      'Magnitude Comparator Equality: (A=B) = (A_3 \\odot B_3)(A_2 \\odot B_2)(A_1 \\odot B_1)(A_0 \\odot B_0)',
      'Tristate Logic: Logic 0, Logic 1, and High-Impedance (Hi-Z)'
    ],
    videoSequenceNos: [83, 84, 85, 86, 87, 88, 89, 90],
    circuitIds: ['mux-4to1', 'gate-xor'],
    content: `
DIGITAL LOGIC DESIGN - Page no. 84 to 92

CODE CONVERTERS:
Logic circuits transforming bit patterns from one binary code into another:
1. 4-Bit Binary to Gray Converter:
   G_4 = B_4
   G_3 = B_4 ⊕ B_3
   G_2 = B_3 ⊕ B_2
   G_1 = B_2 ⊕ B_1
   Implemented using 3 XOR gates.

2. 4-Bit Gray to Binary Converter:
   B_4 = G_4
   B_3 = G_4 ⊕ G_3
   B_2 = B_3 ⊕ G_2 = G_4 ⊕ G_3 ⊕ G_2
   B_1 = B_2 ⊕ G_1 = G_4 ⊕ G_3 ⊕ G_2 ⊕ G_1

3. BCD to Excess-3 Converter:
   Truth table derived by mapping BCD inputs 0-9 to XS-3 outputs (BCD + 3).
   Inputs 10-15 treated as don't-cares ('X') in K-maps.
   Minimal expressions:
     X_4 = B_4 + B_3 B_2 + B_3 B_1
     X_3 = B_3' B_2 + B_3' B_1 + B_3 B_2' B_1'
     X_2 = B_2' B_1 + B_2 B_1' = B_2 ⊕ B_1
     X_1 = B_1'

MAGNITUDE COMPARATORS:
Compares two binary numbers A and B and determines whether A > B, A < B, or A = B:
• 1-Bit Comparator:
  A = B: E = (A ⊕ B)' = AB + A'B' (XNOR)
  A > B: G = AB'
  A < B: L = A'B

• 4-Bit Magnitude Comparator (IC 7485):
  Equality Condition:
    (A = B) = (A3 ⊙ B3)(A2 ⊙ B2)(A1 ⊙ B1)(A0 ⊙ B0)
  Greater Condition:
    (A > B) = A3 B3' + (A3 ⊙ B3) A2 B2' + (A3 ⊙ B3)(A2 ⊙ B2) A1 B1' + (A3 ⊙ B3)(A2 ⊙ B2)(A1 ⊙ B1) A0 B0'
  Supports cascading inputs for comparing 8-bit, 16-bit, or larger words.

ENCODERS:
Converts 2^n active input lines into an n-bit binary code:
• Octal to Binary Encoder: 8 inputs (D0 to D7) -> 3 outputs (A2, A1, A0).
• Decimal to BCD Encoder: 10 inputs (0-9) -> 4 BCD outputs (A3, A2, A1, A0).

TRISTATE BUS SYSTEM:
Three-state logic allows an output port to assume three distinct states:
1. Logic 0 (Low)
2. Logic 1 (High)
3. High Impedance (Hi-Z): Disconnects the device output, preventing bus contention and allowing multiple circuits to share a common data bus controlled by Output Enable (OE).
`
  }
];
