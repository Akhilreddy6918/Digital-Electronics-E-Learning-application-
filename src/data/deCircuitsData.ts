import { CircuitDefinition } from '../types/digitalElectronics';

export const CIRCUITS_DATA: CircuitDefinition[] = [
  // 1. AND Gate
  {
    id: 'gate-and',
    name: 'AND Gate (2-Input)',
    category: 'Gates',
    unitId: 'unit-1',
    description: 'Basic logic gate producing High (1) only when all inputs A and B are simultaneously High (1).',
    booleanExpression: 'Y = A · B',
    booleanDetails: {
      standardForm: 'Y = A · B',
      expandedForm: 'Z = A · B (also written Y = AB)',
      wordDescription: 'Output Y is HIGH (1) if and only if both input A = 1 AND input B = 1. If any input is 0, the output is 0.'
    },
    inputs: [
      { name: 'A', label: 'Input A', defaultVal: 0 },
      { name: 'B', label: 'Input B', defaultVal: 0 }
    ],
    outputs: [{ name: 'Y', label: 'Output Y' }],
    truthTable: [
      { inputs: [0, 0], outputs: [0], state: 'Both LOW (0) -> Output 0' },
      { inputs: [0, 1], outputs: [0], state: 'A is LOW (0) -> Output 0' },
      { inputs: [1, 0], outputs: [0], state: 'B is LOW (0) -> Output 0' },
      { inputs: [1, 1], outputs: [1], state: 'Both HIGH (1) -> Output 1' }
    ],
    computeOutput: inputs => ({
      outputs: { Y: (inputs.A && inputs.B) ? 1 : 0 }
    }),
    notesRef: 'sec-u1-4',
    videoRef: 31
  },

  // 2. OR Gate
  {
    id: 'gate-or',
    name: 'OR Gate (2-Input)',
    category: 'Gates',
    unitId: 'unit-1',
    description: 'Basic logic gate producing High (1) when at least one input (A or B) is High (1).',
    booleanExpression: 'Y = A + B',
    booleanDetails: {
      standardForm: 'Y = A + B',
      expandedForm: 'Z = A + B',
      wordDescription: 'Output Y is HIGH (1) if at least one input is HIGH (1). The output is LOW (0) only when both inputs are 0.'
    },
    inputs: [
      { name: 'A', label: 'Input A', defaultVal: 0 },
      { name: 'B', label: 'Input B', defaultVal: 0 }
    ],
    outputs: [{ name: 'Y', label: 'Output Y' }],
    truthTable: [
      { inputs: [0, 0], outputs: [0], state: 'Both LOW (0) -> Output 0' },
      { inputs: [0, 1], outputs: [1], state: 'B is HIGH (1) -> Output 1' },
      { inputs: [1, 0], outputs: [1], state: 'A is HIGH (1) -> Output 1' },
      { inputs: [1, 1], outputs: [1], state: 'Both HIGH (1) -> Output 1' }
    ],
    computeOutput: inputs => ({
      outputs: { Y: (inputs.A || inputs.B) ? 1 : 0 }
    }),
    notesRef: 'sec-u1-4',
    videoRef: 31
  },

  // 3. NOT Gate (Inverter)
  {
    id: 'gate-not',
    name: 'NOT Gate (Inverter)',
    category: 'Gates',
    unitId: 'unit-1',
    description: 'Inverts the binary state of the single input (0 becomes 1, 1 becomes 0).',
    booleanExpression: "Y = A'  (or Y = Ā)",
    booleanDetails: {
      standardForm: "Y = A'  (or Y = Ā)",
      expandedForm: "Z = NOT(A) = A'",
      wordDescription: 'Complements the input binary state: when input A = 0, output Y = 1; when input A = 1, output Y = 0.'
    },
    inputs: [{ name: 'A', label: 'Input A', defaultVal: 0 }],
    outputs: [{ name: 'Y', label: 'Output Y' }],
    truthTable: [
      { inputs: [0], outputs: [1], state: 'Input 0 -> Inverted to 1' },
      { inputs: [1], outputs: [0], state: 'Input 1 -> Inverted to 0' }
    ],
    computeOutput: inputs => ({
      outputs: { Y: inputs.A ? 0 : 1 }
    }),
    notesRef: 'sec-u1-4',
    videoRef: 31
  },

  // 4. BUFFER Gate
  {
    id: 'gate-buffer',
    name: 'BUFFER Gate',
    category: 'Gates',
    unitId: 'unit-1',
    description: 'Passes logic state unchanged (Y = A) while restoring signal amplitude and driving current.',
    booleanExpression: 'Y = A',
    booleanDetails: {
      standardForm: 'Y = A',
      expandedForm: 'Z = A (Non-Inverting Buffer)',
      wordDescription: 'Passes the input logic state to output unchanged (0→0, 1→1) with current amplification and signal restoration.'
    },
    inputs: [{ name: 'A', label: 'Input A', defaultVal: 1 }],
    outputs: [{ name: 'Y', label: 'Output Y' }],
    truthTable: [
      { inputs: [0], outputs: [0], state: 'Input 0 -> Output 0' },
      { inputs: [1], outputs: [1], state: 'Input 1 -> Output 1' }
    ],
    computeOutput: inputs => ({
      outputs: { Y: inputs.A ? 1 : 0 }
    }),
    notesRef: 'sec-u1-4',
    videoRef: 31
  },

  // 5. NAND Gate (Universal Gate)
  {
    id: 'gate-nand',
    name: 'NAND Gate (Universal)',
    category: 'Gates',
    unitId: 'unit-1',
    description: 'Universal logic building block. Outputs 0 only when both inputs A and B are 1.',
    booleanExpression: "Y = (A · B)'",
    booleanDetails: {
      standardForm: "Y = (A · B)'  (or Y = (A · B)̄)",
      deMorganForm: "Y = A' + B'  (De Morgan's First Theorem)",
      wordDescription: 'Inverted AND function: Output Y is LOW (0) strictly when both inputs A and B are HIGH (1); otherwise output is 1.'
    },
    inputs: [
      { name: 'A', label: 'Input A', defaultVal: 1 },
      { name: 'B', label: 'Input B', defaultVal: 1 }
    ],
    outputs: [{ name: 'Y', label: 'Output Y' }],
    truthTable: [
      { inputs: [0, 0], outputs: [1], state: 'Both LOW (0) -> Output 1' },
      { inputs: [0, 1], outputs: [1], state: 'A is LOW (0) -> Output 1' },
      { inputs: [1, 0], outputs: [1], state: 'B is LOW (0) -> Output 1' },
      { inputs: [1, 1], outputs: [0], state: 'Both HIGH (1) -> Output 0' }
    ],
    computeOutput: inputs => ({
      outputs: { Y: (inputs.A && inputs.B) ? 0 : 1 }
    }),
    notesRef: 'sec-u1-4',
    videoRef: 50
  },

  // 6. NOR Gate (Universal Gate)
  {
    id: 'gate-nor',
    name: 'NOR Gate (Universal)',
    category: 'Gates',
    unitId: 'unit-1',
    description: 'Universal gate producing High (1) strictly when all inputs are Low (0).',
    booleanExpression: "Y = (A + B)'",
    booleanDetails: {
      standardForm: "Y = (A + B)'  (or Y = (A + B)̄)",
      deMorganForm: "Y = A' · B'  (De Morgan's Second Theorem)",
      wordDescription: 'Inverted OR function: Output Y is HIGH (1) strictly when both inputs A and B are LOW (0); otherwise output is 0.'
    },
    inputs: [
      { name: 'A', label: 'Input A', defaultVal: 0 },
      { name: 'B', label: 'Input B', defaultVal: 0 }
    ],
    outputs: [{ name: 'Y', label: 'Output Y' }],
    truthTable: [
      { inputs: [0, 0], outputs: [1], state: 'Both LOW (0) -> Output 1' },
      { inputs: [0, 1], outputs: [0], state: 'B is HIGH (1) -> Output 0' },
      { inputs: [1, 0], outputs: [0], state: 'A is HIGH (1) -> Output 0' },
      { inputs: [1, 1], outputs: [0], state: 'Both HIGH (1) -> Output 0' }
    ],
    computeOutput: inputs => ({
      outputs: { Y: (inputs.A || inputs.B) ? 0 : 1 }
    }),
    notesRef: 'sec-u1-4',
    videoRef: 52
  },

  // 7. XOR Gate
  {
    id: 'gate-xor',
    name: 'XOR Gate (Exclusive OR)',
    category: 'Gates',
    unitId: 'unit-1',
    description: 'Outputs 1 when inputs are distinct (odd parity / controlled inverter).',
    booleanExpression: "Y = A ⊕ B = A · B' + A' · B",
    booleanDetails: {
      standardForm: 'Y = A ⊕ B',
      expandedForm: "Y = A · B' + A' · B  (Sum of Products)",
      wordDescription: 'Exclusive-OR function: Output Y is HIGH (1) when inputs are different (odd parity). If inputs are equal, output is 0.'
    },
    inputs: [
      { name: 'A', label: 'Input A', defaultVal: 1 },
      { name: 'B', label: 'Input B', defaultVal: 0 }
    ],
    outputs: [{ name: 'Y', label: 'Output Y' }],
    truthTable: [
      { inputs: [0, 0], outputs: [0], state: 'Identical inputs (0,0) -> Output 0' },
      { inputs: [0, 1], outputs: [1], state: 'Different inputs (0,1) -> Output 1' },
      { inputs: [1, 0], outputs: [1], state: 'Different inputs (1,0) -> Output 1' },
      { inputs: [1, 1], outputs: [0], state: 'Identical inputs (1,1) -> Output 0' }
    ],
    computeOutput: inputs => ({
      outputs: { Y: inputs.A !== inputs.B ? 1 : 0 }
    }),
    notesRef: 'sec-u1-4',
    videoRef: 33
  },

  // 8. XNOR Gate
  {
    id: 'gate-xnor',
    name: 'XNOR Gate (Equivalence Gate)',
    category: 'Gates',
    unitId: 'unit-1',
    description: 'Outputs 1 when both inputs are identical (coincidence detector).',
    booleanExpression: "Y = (A ⊕ B)' = A ⊙ B = A · B + A' · B'",
    booleanDetails: {
      standardForm: "Y = A ⊙ B = (A ⊕ B)'",
      expandedForm: "Y = A · B + A' · B'  (Sum of Products)",
      wordDescription: 'Equivalence / Coincidence function: Output Y is HIGH (1) when both inputs are identical (both 0 or both 1).'
    },
    inputs: [
      { name: 'A', label: 'Input A', defaultVal: 0 },
      { name: 'B', label: 'Input B', defaultVal: 0 }
    ],
    outputs: [{ name: 'Y', label: 'Output Y' }],
    truthTable: [
      { inputs: [0, 0], outputs: [1], state: 'Identical inputs (0,0) -> Output 1' },
      { inputs: [0, 1], outputs: [0], state: 'Different inputs (0,1) -> Output 0' },
      { inputs: [1, 0], outputs: [0], state: 'Different inputs (1,0) -> Output 0' },
      { inputs: [1, 1], outputs: [1], state: 'Identical inputs (1,1) -> Output 1' }
    ],
    computeOutput: inputs => ({
      outputs: { Y: inputs.A === inputs.B ? 1 : 0 }
    }),
    notesRef: 'sec-u1-4',
    videoRef: 33
  },

  // 9. Half Adder
  {
    id: 'cir-half-adder',
    name: 'Half Adder',
    category: 'Combinational',
    unitId: 'unit-3',
    description: 'Adds two single-bit binary inputs, generating Sum (S) and Carry (C).',
    booleanExpression: 'Sum: S = A ⊕ B,  Carry: C = A · B',
    booleanDetails: {
      standardForm: 'Sum: S = A ⊕ B,  Carry: C = A · B',
      expandedForm: "S = A · B' + A' · B,  C = A · B",
      wordDescription: 'Computes arithmetic sum of 2 binary bits. Generates Sum (S) and Carry (C).'
    },
    inputs: [
      { name: 'A', label: 'Augend A', defaultVal: 1 },
      { name: 'B', label: 'Addend B', defaultVal: 1 }
    ],
    outputs: [
      { name: 'S', label: 'Sum (S)' },
      { name: 'C', label: 'Carry (C)' }
    ],
    truthTable: [
      { inputs: [0, 0], outputs: [0, 0], state: '0 + 0 = 0 (Carry 0)' },
      { inputs: [0, 1], outputs: [1, 0], state: '0 + 1 = 1 (Carry 0)' },
      { inputs: [1, 0], outputs: [1, 0], state: '1 + 0 = 1 (Carry 0)' },
      { inputs: [1, 1], outputs: [0, 1], state: '1 + 1 = 10 (Sum 0, Carry 1)' }
    ],
    computeOutput: inputs => ({
      outputs: {
        S: inputs.A !== inputs.B ? 1 : 0,
        C: (inputs.A && inputs.B) ? 1 : 0
      }
    }),
    notesRef: 'sec-u3-1',
    videoRef: 69
  },

  // 10. Full Adder
  {
    id: 'cir-full-adder',
    name: 'Full Adder (3-Input)',
    category: 'Combinational',
    unitId: 'unit-3',
    description: 'Adds three binary bits: A, B, and incoming Carry (Cin).',
    booleanExpression: 'Sum: S = A ⊕ B ⊕ Cin,  Carry: Cout = A·B + Cin·(A ⊕ B)',
    booleanDetails: {
      standardForm: 'Sum: S = A ⊕ B ⊕ Cin',
      expandedForm: 'Carry: Cout = A · B + B · Cin + A · Cin = A · B + Cin · (A ⊕ B)',
      wordDescription: 'Adds two operand bits (A, B) plus previous stage Carry In (Cin), generating Sum (S) and Carry Out (Cout).'
    },
    inputs: [
      { name: 'A', label: 'Bit A', defaultVal: 1 },
      { name: 'B', label: 'Bit B', defaultVal: 0 },
      { name: 'Cin', label: 'Carry In (Cin)', defaultVal: 1 }
    ],
    outputs: [
      { name: 'S', label: 'Sum (S)' },
      { name: 'Cout', label: 'Carry Out (Cout)' }
    ],
    truthTable: [
      { inputs: [0, 0, 0], outputs: [0, 0], state: '0+0+0 = 0, Cout=0' },
      { inputs: [0, 0, 1], outputs: [1, 0], state: '0+0+1 = 1, Cout=0' },
      { inputs: [0, 1, 0], outputs: [1, 0], state: '0+1+0 = 1, Cout=0' },
      { inputs: [0, 1, 1], outputs: [0, 1], state: '0+1+1 = 2, Cout=1' },
      { inputs: [1, 0, 0], outputs: [1, 0], state: '1+0+0 = 1, Cout=0' },
      { inputs: [1, 0, 1], outputs: [0, 1], state: '1+0+1 = 2, Cout=1' },
      { inputs: [1, 1, 0], outputs: [0, 1], state: '1+1+0 = 2, Cout=1' },
      { inputs: [1, 1, 1], outputs: [1, 1], state: '1+1+1 = 3, Cout=1' }
    ],
    computeOutput: inputs => {
      const sumCount = (inputs.A || 0) + (inputs.B || 0) + (inputs.Cin || 0);
      return {
        outputs: {
          S: sumCount % 2 === 1 ? 1 : 0,
          Cout: sumCount >= 2 ? 1 : 0
        }
      };
    },
    notesRef: 'sec-u3-1',
    videoRef: 69
  },

  // 11. 4:1 Multiplexer
  {
    id: 'cir-mux-4to1',
    name: '4:1 Multiplexer (MUX)',
    category: 'Combinational',
    unitId: 'unit-3',
    description: 'Routes one of four input data lines (I0-I3) to output Y based on select lines S1, S0.',
    booleanExpression: "Y = S1'·S0'·I0 + S1'·S0·I1 + S1·S0'·I2 + S1·S0·I3",
    booleanDetails: {
      standardForm: "Y = S1' · S0' · I0 + S1' · S0 · I1 + S1 · S0' · I2 + S1 · S0 · I3",
      wordDescription: 'Data Selector: Transmits data from the selected channel (I0 when S1S0=00, I1 when 01, I2 when 10, I3 when 11) to output Y.'
    },
    inputs: [
      { name: 'I0', label: 'Data I0', defaultVal: 1 },
      { name: 'I1', label: 'Data I1', defaultVal: 0 },
      { name: 'I2', label: 'Data I2', defaultVal: 1 },
      { name: 'I3', label: 'Data I3', defaultVal: 0 },
      { name: 'S1', label: 'Select S1', defaultVal: 0 },
      { name: 'S0', label: 'Select S0', defaultVal: 0 }
    ],
    outputs: [{ name: 'Y', label: 'Output Y' }],
    truthTable: [
      { inputs: [0, 0], outputs: [1], state: 'Select I0 (S1=0, S0=0)' },
      { inputs: [0, 1], outputs: [0], state: 'Select I1 (S1=0, S0=1)' },
      { inputs: [1, 0], outputs: [1], state: 'Select I2 (S1=1, S0=0)' },
      { inputs: [1, 1], outputs: [0], state: 'Select I3 (S1=1, S0=1)' }
    ],
    computeOutput: inputs => {
      const sel = (inputs.S1 << 1) | inputs.S0;
      let outVal = 0;
      if (sel === 0) outVal = inputs.I0;
      else if (sel === 1) outVal = inputs.I1;
      else if (sel === 2) outVal = inputs.I2;
      else outVal = inputs.I3;

      return { outputs: { Y: outVal } };
    },
    notesRef: 'sec-u3-3',
    videoRef: 82
  },

  // 12. 2-to-4 Decoder
  {
    id: 'cir-decoder-2to4',
    name: '2-to-4 Line Decoder',
    category: 'Combinational',
    unitId: 'unit-3',
    description: 'Decodes a 2-bit binary address into 1 of 4 active-high output lines with active-high Enable.',
    booleanExpression: "Y0 = E · A1' · A0',  Y1 = E · A1' · A0,  Y2 = E · A1 · A0',  Y3 = E · A1 · A0",
    booleanDetails: {
      standardForm: 'Yi = E · mi  (where mi is binary minterm i)',
      expandedForm: "Y0 = E·A1'·A0',  Y1 = E·A1'·A0,  Y2 = E·A1·A0',  Y3 = E·A1·A0",
      wordDescription: 'When Enable E = 1, exactly one output corresponding to binary input address (A1, A0) goes HIGH (1).'
    },
    inputs: [
      { name: 'E', label: 'Enable (E)', defaultVal: 1 },
      { name: 'A1', label: 'Address A1', defaultVal: 0 },
      { name: 'A0', label: 'Address A0', defaultVal: 0 }
    ],
    outputs: [
      { name: 'Y0', label: 'Y0 (m0)' },
      { name: 'Y1', label: 'Y1 (m1)' },
      { name: 'Y2', label: 'Y2 (m2)' },
      { name: 'Y3', label: 'Y3 (m3)' }
    ],
    truthTable: [
      { inputs: [0, 0, 0], outputs: [0, 0, 0, 0], state: 'Disabled (E=0)' },
      { inputs: [1, 0, 0], outputs: [1, 0, 0, 0], state: 'Active Y0 (Address 00)' },
      { inputs: [1, 0, 1], outputs: [0, 1, 0, 0], state: 'Active Y1 (Address 01)' },
      { inputs: [1, 1, 0], outputs: [0, 0, 1, 0], state: 'Active Y2 (Address 10)' },
      { inputs: [1, 1, 1], outputs: [0, 0, 0, 1], state: 'Active Y3 (Address 11)' }
    ],
    computeOutput: inputs => {
      if (!inputs.E) return { outputs: { Y0: 0, Y1: 0, Y2: 0, Y3: 0 } };
      const sel = (inputs.A1 << 1) | inputs.A0;
      return {
        outputs: {
          Y0: sel === 0 ? 1 : 0,
          Y1: sel === 1 ? 1 : 0,
          Y2: sel === 2 ? 1 : 0,
          Y3: sel === 3 ? 1 : 0
        }
      };
    },
    notesRef: 'sec-u3-4',
    videoRef: 81
  },

  // 13. 4-to-2 Priority Encoder
  {
    id: 'cir-priority-encoder',
    name: '4-to-2 Priority Encoder',
    category: 'Combinational',
    unitId: 'unit-3',
    description: 'Encodes the index of the highest active input line (D3 > D2 > D1 > D0) with Valid bit (V).',
    booleanExpression: "Y1 = D3 + D2,  Y0 = D3 + D2' · D1,  V = D3 + D2 + D1 + D0",
    booleanDetails: {
      standardForm: "Y1 = D3 + D2,  Y0 = D3 + D2' · D1,  Valid V = D3 + D2 + D1 + D0",
      wordDescription: 'Outputs 2-bit binary code of the highest priority active line. Valid line V indicates if any input is active.'
    },
    inputs: [
      { name: 'D3', label: 'Input D3 (Highest)', defaultVal: 0 },
      { name: 'D2', label: 'Input D2', defaultVal: 0 },
      { name: 'D1', label: 'Input D1', defaultVal: 0 },
      { name: 'D0', label: 'Input D0', defaultVal: 0 }
    ],
    outputs: [
      { name: 'Y1', label: 'Output Y1' },
      { name: 'Y0', label: 'Output Y0' },
      { name: 'V', label: 'Valid (V)' }
    ],
    truthTable: [
      { inputs: [0, 0, 0, 0], outputs: [0, 0, 0], state: 'No active inputs (V=0)' },
      { inputs: [0, 0, 0, 1], outputs: [0, 0, 1], state: 'D0 active -> Code 00' },
      { inputs: [0, 0, 1, 0], outputs: [0, 1, 1], state: 'D1 active -> Code 01' },
      { inputs: [0, 1, 0, 0], outputs: [1, 0, 1], state: 'D2 active -> Code 10' },
      { inputs: [1, 0, 0, 0], outputs: [1, 1, 1], state: 'D3 active -> Code 11' }
    ],
    computeOutput: inputs => {
      if (inputs.D3) return { outputs: { Y1: 1, Y0: 1, V: 1 } };
      if (inputs.D2) return { outputs: { Y1: 1, Y0: 0, V: 1 } };
      if (inputs.D1) return { outputs: { Y1: 0, Y0: 1, V: 1 } };
      if (inputs.D0) return { outputs: { Y1: 0, Y0: 0, V: 1 } };
      return { outputs: { Y1: 0, Y0: 0, V: 0 } };
    },
    notesRef: 'sec-u3-5',
    videoRef: 92
  },

  // 14. SR Latch
  {
    id: 'cir-sr-latch',
    name: 'SR Latch (NOR Based)',
    category: 'Sequential',
    unitId: 'unit-4',
    description: 'Bistable cross-coupled multivibrator with Set (S) and Reset (R) control inputs.',
    booleanExpression: "Q(next) = S + R' · Q  (Valid condition: S · R = 0)",
    booleanDetails: {
      standardForm: "Q(next) = S + R' · Q",
      characteristicEquation: 'Q(next) = S + R̄·Q  (Constraint: S · R = 0)',
      wordDescription: 'When S=1, R=0: SET (Q=1). When S=0, R=1: RESET (Q=0). When S=0, R=0: MEMORY (holds Q). When S=1, R=1: PROHIBITED (invalid state).'
    },
    inputs: [
      { name: 'S', label: 'Set (S)', defaultVal: 0 },
      { name: 'R', label: 'Reset (R)', defaultVal: 0 }
    ],
    outputs: [
      { name: 'Q', label: 'Output Q' },
      { name: 'Qbar', label: 'Output Q_bar' }
    ],
    initialState: { Q: 0, Qbar: 1 },
    truthTable: [
      { inputs: [0, 0], outputs: [0, 1], state: 'Memory (No Change)' },
      { inputs: [0, 1], outputs: [0, 1], state: 'Reset (Q=0, Qbar=1)' },
      { inputs: [1, 0], outputs: [1, 0], state: 'Set (Q=1, Qbar=0)' },
      { inputs: [1, 1], outputs: [0, 0], state: 'Prohibited / Invalid' }
    ],
    computeOutput: (inputs, state = { Q: 0, Qbar: 1 }) => {
      let nextQ = state.Q;
      let nextQbar = state.Qbar;

      if (inputs.S === 1 && inputs.R === 0) {
        nextQ = 1;
        nextQbar = 0;
      } else if (inputs.S === 0 && inputs.R === 1) {
        nextQ = 0;
        nextQbar = 1;
      } else if (inputs.S === 1 && inputs.R === 1) {
        nextQ = 0;
        nextQbar = 0; // Invalid race
      }
      return {
        outputs: { Q: nextQ, Qbar: nextQbar },
        nextState: { Q: nextQ, Qbar: nextQbar }
      };
    },
    notesRef: 'sec-u4-1',
    videoRef: 94
  },

  // 15. JK Flip-Flop
  {
    id: 'cir-jk-ff',
    name: 'JK Flip-Flop (Edge-Triggered)',
    category: 'Sequential',
    unitId: 'unit-4',
    description: 'Universal flip-flop with toggle behavior on J=1, K=1, eliminating SR latch forbidden states.',
    booleanExpression: "Q(next) = J · Q' + K' · Q",
    booleanDetails: {
      standardForm: "Q(next) = J · Q' + K' · Q",
      characteristicEquation: 'Q(next) = J·Q̄ + K̄·Q',
      wordDescription: 'Universal storage element: J=0, K=0 holds state; J=0, K=1 resets (Q=0); J=1, K=0 sets (Q=1); J=1, K=1 toggles output state on clock pulse.'
    },
    hasClock: true,
    inputs: [
      { name: 'J', label: 'Input J', defaultVal: 1 },
      { name: 'K', label: 'Input K', defaultVal: 1 }
    ],
    outputs: [
      { name: 'Q', label: 'Output Q' },
      { name: 'Qbar', label: 'Output Q_bar' }
    ],
    initialState: { Q: 0, Qbar: 1 },
    truthTable: [
      { inputs: [0, 0], outputs: [0, 1], state: 'Hold / Memory (No Change)' },
      { inputs: [0, 1], outputs: [0, 1], state: 'Reset (Q=0)' },
      { inputs: [1, 0], outputs: [1, 0], state: 'Set (Q=1)' },
      { inputs: [1, 1], outputs: [1, 0], state: 'Toggle (Q inverted)' }
    ],
    computeOutput: (inputs, state = { Q: 0, Qbar: 1 }) => {
      let nextQ = state.Q;
      if (inputs.J === 0 && inputs.K === 0) {
        nextQ = state.Q;
      } else if (inputs.J === 0 && inputs.K === 1) {
        nextQ = 0;
      } else if (inputs.J === 1 && inputs.K === 0) {
        nextQ = 1;
      } else if (inputs.J === 1 && inputs.K === 1) {
        nextQ = state.Q === 1 ? 0 : 1; // Toggle
      }

      return {
        outputs: { Q: nextQ, Qbar: nextQ ? 0 : 1 },
        nextState: { Q: nextQ, Qbar: nextQ ? 0 : 1 }
      };
    },
    notesRef: 'sec-u4-2',
    videoRef: 103
  },

  // 16. D Flip-Flop
  {
    id: 'cir-d-ff',
    name: 'D Flip-Flop (Data / Delay)',
    category: 'Sequential',
    unitId: 'unit-4',
    description: 'Transfers input D to output Q on the active clock transition: Q_next = D.',
    booleanExpression: 'Q(next) = D',
    booleanDetails: {
      standardForm: 'Q(next) = D',
      characteristicEquation: 'Q(next) = D',
      wordDescription: 'Data Latch/Delay: Output Q captures and stores the exact binary state of input D on the active clock edge.'
    },
    hasClock: true,
    inputs: [{ name: 'D', label: 'Data (D)', defaultVal: 1 }],
    outputs: [
      { name: 'Q', label: 'Output Q' },
      { name: 'Qbar', label: 'Output Q_bar' }
    ],
    initialState: { Q: 0, Qbar: 1 },
    truthTable: [
      { inputs: [0], outputs: [0, 1], state: 'Clock pulse -> Q = 0' },
      { inputs: [1], outputs: [1, 0], state: 'Clock pulse -> Q = 1' }
    ],
    computeOutput: (inputs, state = { Q: 0, Qbar: 1 }) => {
      const nextQ = inputs.D ? 1 : 0;
      return {
        outputs: { Q: nextQ, Qbar: nextQ ? 0 : 1 },
        nextState: { Q: nextQ, Qbar: nextQ ? 0 : 1 }
      };
    },
    notesRef: 'sec-u4-2',
    videoRef: 100
  },

  // 17. T Flip-Flop
  {
    id: 'cir-t-ff',
    name: 'T Flip-Flop (Toggle)',
    category: 'Sequential',
    unitId: 'unit-4',
    description: 'Toggles output state on each clock pulse when T=1; holds state when T=0.',
    booleanExpression: "Q(next) = T ⊕ Q = T · Q' + T' · Q",
    booleanDetails: {
      standardForm: 'Q(next) = T ⊕ Q',
      characteristicEquation: "Q(next) = T · Q' + T' · Q",
      wordDescription: 'Toggle Flip-Flop: When T=1, output Q complements (toggles) on each clock edge; when T=0, it holds its previous value.'
    },
    hasClock: true,
    inputs: [{ name: 'T', label: 'Toggle (T)', defaultVal: 1 }],
    outputs: [
      { name: 'Q', label: 'Output Q' },
      { name: 'Qbar', label: 'Output Q_bar' }
    ],
    initialState: { Q: 0, Qbar: 1 },
    truthTable: [
      { inputs: [0], outputs: [0, 1], state: 'T=0 -> Hold previous state' },
      { inputs: [1], outputs: [1, 0], state: 'T=1 -> Toggle state' }
    ],
    computeOutput: (inputs, state = { Q: 0, Qbar: 1 }) => {
      const nextQ = inputs.T ? (state.Q ? 0 : 1) : state.Q;
      return {
        outputs: { Q: nextQ, Qbar: nextQ ? 0 : 1 },
        nextState: { Q: nextQ, Qbar: nextQ ? 0 : 1 }
      };
    },
    notesRef: 'sec-u4-2',
    videoRef: 106
  },

  // 18. 4-bit Asynchronous Ripple Counter
  {
    id: 'cir-ripple-counter',
    name: '4-Bit Asynchronous Ripple Counter',
    category: 'Counters & Registers',
    unitId: 'unit-4',
    description: 'Cascade of 4 toggle flip-flops counting in binary from 0000 (0) to 1111 (15) with asynchronous reset.',
    booleanExpression: 'Count = Q3·2³ + Q2·2² + Q1·2¹ + Q0·2⁰  (Modulo-16: 0 to 15)',
    booleanDetails: {
      standardForm: "Q0(next) = Q0',  Qi(next) clocked by Qi-1",
      wordDescription: '4-stage binary counter cascading clock pulses through flip-flops, sequentially counting from 0000 to 1111.'
    },
    hasClock: true,
    inputs: [{ name: 'RST', label: 'Reset (Active High)', defaultVal: 0 }],
    outputs: [
      { name: 'Q3', label: 'Q3 (MSB)' },
      { name: 'Q2', label: 'Q2' },
      { name: 'Q1', label: 'Q1' },
      { name: 'Q0', label: 'Q0 (LSB)' }
    ],
    initialState: { count: 0 },
    truthTable: [
      { inputs: [0], outputs: [0, 0, 0, 0], state: 'State 0 (0000)' },
      { inputs: [0], outputs: [0, 0, 0, 1], state: 'State 1 (0001)' },
      { inputs: [0], outputs: [0, 0, 1, 0], state: 'State 2 (0010)' },
      { inputs: [0], outputs: [1, 1, 1, 1], state: 'State 15 (1111)' }
    ],
    computeOutput: (inputs, state = { count: 0 }) => {
      if (inputs.RST) {
        return {
          outputs: { Q3: 0, Q2: 0, Q1: 0, Q0: 0 },
          nextState: { count: 0 }
        };
      }
      const nextCount = (state.count + 1) % 16;
      return {
        outputs: {
          Q3: (nextCount >> 3) & 1,
          Q2: (nextCount >> 2) & 1,
          Q1: (nextCount >> 1) & 1,
          Q0: nextCount & 1
        },
        nextState: { count: nextCount }
      };
    },
    notesRef: 'sec-u4-5',
    videoRef: 128
  },

  // 19. 4-Bit Ring Counter
  {
    id: 'cir-ring-counter',
    name: '4-Bit Ring Counter',
    category: 'Counters & Registers',
    unitId: 'unit-4',
    description: 'Circulates a single High bit through four cascaded flip-flops: 1000 -> 0100 -> 0010 -> 0001.',
    booleanExpression: 'Pattern: Q3 → Q2 → Q1 → Q0 → Q3  (States: 1000, 0100, 0010, 0001)',
    booleanDetails: {
      standardForm: 'Q0(next)=Q3,  Q1(next)=Q0,  Q2(next)=Q1,  Q3(next)=Q2',
      wordDescription: 'Shift-register counter where the output of the last flip-flop feeds into the first, cycling a single active bit.'
    },
    hasClock: true,
    inputs: [{ name: 'RST', label: 'Reset to 1000', defaultVal: 0 }],
    outputs: [
      { name: 'Q3', label: 'Stage 3' },
      { name: 'Q2', label: 'Stage 2' },
      { name: 'Q1', label: 'Stage 1' },
      { name: 'Q0', label: 'Stage 0' }
    ],
    initialState: { state: [1, 0, 0, 0] },
    truthTable: [
      { inputs: [0], outputs: [1, 0, 0, 0], state: 'Pulse at Q3' },
      { inputs: [0], outputs: [0, 1, 0, 0], state: 'Pulse at Q2' },
      { inputs: [0], outputs: [0, 0, 1, 0], state: 'Pulse at Q1' },
      { inputs: [0], outputs: [0, 0, 0, 1], state: 'Pulse at Q0' }
    ],
    computeOutput: (inputs, state = { state: [1, 0, 0, 0] }) => {
      if (inputs.RST) {
        return {
          outputs: { Q3: 1, Q2: 0, Q1: 0, Q0: 0 },
          nextState: { state: [1, 0, 0, 0] }
        };
      }
      const s = state.state || [1, 0, 0, 0];
      const nextS = [s[3], s[0], s[1], s[2]];
      return {
        outputs: { Q3: nextS[0], Q2: nextS[1], Q1: nextS[2], Q0: nextS[3] },
        nextState: { state: nextS }
      };
    },
    notesRef: 'sec-u4-6',
    videoRef: 125
  },

  // 20. CMOS Inverter
  {
    id: 'cir-cmos-inverter',
    name: 'CMOS Inverter (PMOS/NMOS Pair)',
    category: 'Logic Families',
    unitId: 'unit-5',
    description: 'Complementary pair of p-channel pull-up and n-channel pull-down MOSFETs with near-zero static power dissipation.',
    booleanExpression: "Vout = Vin'  (Vin=0V -> Vout=5V,  Vin=5V -> Vout=0V)",
    booleanDetails: {
      standardForm: "Vout = Vin'",
      wordDescription: 'When Vin=0V (LOW), PMOS conducts and NMOS cuts off, pulling Vout to VDD (5V). When Vin=5V (HIGH), NMOS conducts and PMOS cuts off, pulling Vout to GND (0V).'
    },
    inputs: [{ name: 'Vin', label: 'Input Vin (0V / 5V)', defaultVal: 0 }],
    outputs: [
      { name: 'Vout', label: 'Output Vout' },
      { name: 'P_State', label: 'PMOS State' },
      { name: 'N_State', label: 'NMOS State' }
    ],
    truthTable: [
      { inputs: [0], outputs: [1, 1, 0], state: 'Vin=0V -> PMOS ON, NMOS OFF -> Vout=5V' },
      { inputs: [1], outputs: [0, 0, 1], state: 'Vin=5V -> PMOS OFF, NMOS ON -> Vout=0V' }
    ],
    computeOutput: inputs => {
      const isHigh = inputs.Vin === 1;
      return {
        outputs: {
          Vout: isHigh ? 0 : 1,
          P_State: isHigh ? 0 : 1, // PMOS is ON when Vin=0
          N_State: isHigh ? 1 : 0  // NMOS is ON when Vin=1
        }
      };
    },
    notesRef: 'sec-u5-5',
    videoRef: 181
  }
];
