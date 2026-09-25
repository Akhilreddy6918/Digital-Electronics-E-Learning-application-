import { CircuitDefinition } from '../types/digitalElectronics';

export const CIRCUITS_DATA: CircuitDefinition[] = [
  // 1. AND Gate
  {
    id: 'gate-and',
    name: 'AND Gate (2-Input)',
    category: 'Gates',
    unitId: 'unit-1',
    description: 'Basic logic gate producing High (1) only when all inputs A and B are simultaneously High (1).',
    booleanExpression: 'Y = A \\cdot B',
    inputs: [
      { name: 'A', label: 'Input A', defaultVal: 0 },
      { name: 'B', label: 'Input B', defaultVal: 0 }
    ],
    outputs: [{ name: 'Y', label: 'Output Y' }],
    truthTable: [
      { inputs: [0, 0], outputs: [0] },
      { inputs: [0, 1], outputs: [0] },
      { inputs: [1, 0], outputs: [0] },
      { inputs: [1, 1], outputs: [1] }
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
    inputs: [
      { name: 'A', label: 'Input A', defaultVal: 0 },
      { name: 'B', label: 'Input B', defaultVal: 0 }
    ],
    outputs: [{ name: 'Y', label: 'Output Y' }],
    truthTable: [
      { inputs: [0, 0], outputs: [0] },
      { inputs: [0, 1], outputs: [1] },
      { inputs: [1, 0], outputs: [1] },
      { inputs: [1, 1], outputs: [1] }
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
    booleanExpression: 'Y = \\overline{A}',
    inputs: [{ name: 'A', label: 'Input A', defaultVal: 0 }],
    outputs: [{ name: 'Y', label: 'Output Y' }],
    truthTable: [
      { inputs: [0], outputs: [1] },
      { inputs: [1], outputs: [0] }
    ],
    computeOutput: inputs => ({
      outputs: { Y: inputs.A ? 0 : 1 }
    }),
    notesRef: 'sec-u1-4',
    videoRef: 31
  },

  // 4. NAND Gate (Universal Gate)
  {
    id: 'gate-nand',
    name: 'NAND Gate (Universal)',
    category: 'Gates',
    unitId: 'unit-1',
    description: 'Universal logic building block. Outputs 0 only when both inputs A and B are 1.',
    booleanExpression: 'Y = \\overline{A \\cdot B}',
    inputs: [
      { name: 'A', label: 'Input A', defaultVal: 1 },
      { name: 'B', label: 'Input B', defaultVal: 1 }
    ],
    outputs: [{ name: 'Y', label: 'Output Y' }],
    truthTable: [
      { inputs: [0, 0], outputs: [1] },
      { inputs: [0, 1], outputs: [1] },
      { inputs: [1, 0], outputs: [1] },
      { inputs: [1, 1], outputs: [0] }
    ],
    computeOutput: inputs => ({
      outputs: { Y: (inputs.A && inputs.B) ? 0 : 1 }
    }),
    notesRef: 'sec-u1-4',
    videoRef: 50
  },

  // 5. NOR Gate (Universal Gate)
  {
    id: 'gate-nor',
    name: 'NOR Gate (Universal)',
    category: 'Gates',
    unitId: 'unit-1',
    description: 'Universal gate producing High (1) strictly when all inputs are Low (0).',
    booleanExpression: 'Y = \\overline{A + B}',
    inputs: [
      { name: 'A', label: 'Input A', defaultVal: 0 },
      { name: 'B', label: 'Input B', defaultVal: 0 }
    ],
    outputs: [{ name: 'Y', label: 'Output Y' }],
    truthTable: [
      { inputs: [0, 0], outputs: [1] },
      { inputs: [0, 1], outputs: [0] },
      { inputs: [1, 0], outputs: [0] },
      { inputs: [1, 1], outputs: [0] }
    ],
    computeOutput: inputs => ({
      outputs: { Y: (inputs.A || inputs.B) ? 0 : 1 }
    }),
    notesRef: 'sec-u1-4',
    videoRef: 52
  },

  // 6. XOR Gate
  {
    id: 'gate-xor',
    name: 'XOR Gate (Exclusive OR)',
    category: 'Gates',
    unitId: 'unit-1',
    description: 'Outputs 1 when inputs are distinct (odd parity / controlled inverter).',
    booleanExpression: 'Y = A \\oplus B = A\\overline{B} + \\overline{A}B',
    inputs: [
      { name: 'A', label: 'Input A', defaultVal: 1 },
      { name: 'B', label: 'Input B', defaultVal: 0 }
    ],
    outputs: [{ name: 'Y', label: 'Output Y' }],
    truthTable: [
      { inputs: [0, 0], outputs: [0] },
      { inputs: [0, 1], outputs: [1] },
      { inputs: [1, 0], outputs: [1] },
      { inputs: [1, 1], outputs: [0] }
    ],
    computeOutput: inputs => ({
      outputs: { Y: inputs.A !== inputs.B ? 1 : 0 }
    }),
    notesRef: 'sec-u1-4',
    videoRef: 33
  },

  // 7. XNOR Gate
  {
    id: 'gate-xnor',
    name: 'XNOR Gate (Equivalence Gate)',
    category: 'Gates',
    unitId: 'unit-1',
    description: 'Outputs 1 when both inputs are identical (coincidence detector).',
    booleanExpression: 'Y = A \\odot B = AB + \\overline{A}\\overline{B}',
    inputs: [
      { name: 'A', label: 'Input A', defaultVal: 0 },
      { name: 'B', label: 'Input B', defaultVal: 0 }
    ],
    outputs: [{ name: 'Y', label: 'Output Y' }],
    truthTable: [
      { inputs: [0, 0], outputs: [1] },
      { inputs: [0, 1], outputs: [0] },
      { inputs: [1, 0], outputs: [0] },
      { inputs: [1, 1], outputs: [1] }
    ],
    computeOutput: inputs => ({
      outputs: { Y: inputs.A === inputs.B ? 1 : 0 }
    }),
    notesRef: 'sec-u1-4',
    videoRef: 33
  },

  // 8. Half Adder
  {
    id: 'cir-half-adder',
    name: 'Half Adder',
    category: 'Combinational',
    unitId: 'unit-3',
    description: 'Adds two single-bit binary inputs, generating Sum (S) and Carry (C).',
    booleanExpression: 'S = A \\oplus B, \\quad C = A \\cdot B',
    inputs: [
      { name: 'A', label: 'Augend A', defaultVal: 1 },
      { name: 'B', label: 'Addend B', defaultVal: 1 }
    ],
    outputs: [
      { name: 'S', label: 'Sum (S)' },
      { name: 'C', label: 'Carry (C)' }
    ],
    truthTable: [
      { inputs: [0, 0], outputs: [0, 0] },
      { inputs: [0, 1], outputs: [1, 0] },
      { inputs: [1, 0], outputs: [1, 0] },
      { inputs: [1, 1], outputs: [0, 1] }
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

  // 9. Full Adder
  {
    id: 'cir-full-adder',
    name: 'Full Adder (3-Input)',
    category: 'Combinational',
    unitId: 'unit-3',
    description: 'Adds three binary bits: A, B, and incoming Carry (Cin).',
    booleanExpression: 'S = A \\oplus B \\oplus C_{in}, \\quad C_{out} = AB + C_{in}(A \\oplus B)',
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
      { inputs: [0, 0, 0], outputs: [0, 0] },
      { inputs: [0, 0, 1], outputs: [1, 0] },
      { inputs: [0, 1, 0], outputs: [1, 0] },
      { inputs: [0, 1, 1], outputs: [0, 1] },
      { inputs: [1, 0, 0], outputs: [1, 0] },
      { inputs: [1, 0, 1], outputs: [0, 1] },
      { inputs: [1, 1, 0], outputs: [0, 1] },
      { inputs: [1, 1, 1], outputs: [1, 1] }
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

  // 10. 4:1 Multiplexer
  {
    id: 'cir-mux-4to1',
    name: '4:1 Multiplexer (MUX)',
    category: 'Combinational',
    unitId: 'unit-3',
    description: 'Routes one of four input data lines (I0-I3) to output Y based on select lines S1, S0.',
    booleanExpression: 'Y = I_0\\overline{S_1}\\overline{S_0} + I_1\\overline{S_1}S_0 + I_2 S_1\\overline{S_0} + I_3 S_1 S_0',
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
      { inputs: [0, 0], outputs: [1], state: 'Select I0' },
      { inputs: [0, 1], outputs: [0], state: 'Select I1' },
      { inputs: [1, 0], outputs: [1], state: 'Select I2' },
      { inputs: [1, 1], outputs: [0], state: 'Select I3' }
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

  // 11. 2-to-4 Decoder
  {
    id: 'cir-decoder-2to4',
    name: '2-to-4 Line Decoder',
    category: 'Combinational',
    unitId: 'unit-3',
    description: 'Decodes a 2-bit binary address into 1 of 4 active-high output lines with active-high Enable.',
    booleanExpression: 'Y_i = E \\cdot m_i',
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
      { inputs: [0, 0, 0], outputs: [0, 0, 0, 0], state: 'Disabled' },
      { inputs: [1, 0, 0], outputs: [1, 0, 0, 0], state: 'Active Y0' },
      { inputs: [1, 0, 1], outputs: [0, 1, 0, 0], state: 'Active Y1' },
      { inputs: [1, 1, 0], outputs: [0, 0, 1, 0], state: 'Active Y2' },
      { inputs: [1, 1, 1], outputs: [0, 0, 0, 1], state: 'Active Y3' }
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

  // 12. 4-to-2 Priority Encoder
  {
    id: 'cir-priority-encoder',
    name: '4-to-2 Priority Encoder',
    category: 'Combinational',
    unitId: 'unit-3',
    description: 'Encodes the index of the highest active input line (D3 > D2 > D1 > D0) with Valid bit (V).',
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
      { inputs: [0, 0, 0, 1], outputs: [0, 0, 1], state: 'D0 active -> code 00' },
      { inputs: [0, 0, 1, 0], outputs: [0, 1, 1], state: 'D1 active -> code 01' },
      { inputs: [0, 1, 0, 0], outputs: [1, 0, 1], state: 'D2 active -> code 10' },
      { inputs: [1, 0, 0, 0], outputs: [1, 1, 1], state: 'D3 active -> code 11' }
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

  // 13. SR Latch
  {
    id: 'cir-sr-latch',
    name: 'SR Latch (NOR Based)',
    category: 'Sequential',
    unitId: 'unit-4',
    description: 'Bistable cross-coupled multivibrator with Set (S) and Reset (R) control inputs.',
    booleanExpression: 'Q_{next} = S + \\overline{R}Q',
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
      { inputs: [0, 0], outputs: [0, 1], state: 'Memory / No Change' },
      { inputs: [0, 1], outputs: [0, 1], state: 'Reset (Q=0)' },
      { inputs: [1, 0], outputs: [1, 0], state: 'Set (Q=1)' },
      { inputs: [1, 1], outputs: [0, 0], state: 'Invalid / Prohibited' }
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

  // 14. JK Flip-Flop
  {
    id: 'cir-jk-ff',
    name: 'JK Flip-Flop (Edge-Triggered)',
    category: 'Sequential',
    unitId: 'unit-4',
    description: 'Universal flip-flop with toggle behavior on J=1, K=1, eliminating SR latch forbidden states.',
    booleanExpression: 'Q_{next} = J\\overline{Q} + \\overline{K}Q',
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
      { inputs: [0, 0], outputs: [0, 1], state: 'Hold / Memory' },
      { inputs: [0, 1], outputs: [0, 1], state: 'Reset (Q=0)' },
      { inputs: [1, 0], outputs: [1, 0], state: 'Set (Q=1)' },
      { inputs: [1, 1], outputs: [1, 0], state: 'Toggle (Complement)' }
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

  // 15. D Flip-Flop
  {
    id: 'cir-d-ff',
    name: 'D Flip-Flop (Data / Delay)',
    category: 'Sequential',
    unitId: 'unit-4',
    description: 'Transfers input D to output Q on the active clock transition: Q_next = D.',
    booleanExpression: 'Q_{next} = D',
    hasClock: true,
    inputs: [{ name: 'D', label: 'Data (D)', defaultVal: 1 }],
    outputs: [
      { name: 'Q', label: 'Output Q' },
      { name: 'Qbar', label: 'Output Q_bar' }
    ],
    initialState: { Q: 0, Qbar: 1 },
    truthTable: [
      { inputs: [0], outputs: [0, 1], state: 'Next state Q = 0' },
      { inputs: [1], outputs: [1, 0], state: 'Next state Q = 1' }
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

  // 16. T Flip-Flop
  {
    id: 'cir-t-ff',
    name: 'T Flip-Flop (Toggle)',
    category: 'Sequential',
    unitId: 'unit-4',
    description: 'Toggles output state on each clock pulse when T=1; holds state when T=0.',
    booleanExpression: 'Q_{next} = T \\oplus Q',
    hasClock: true,
    inputs: [{ name: 'T', label: 'Toggle (T)', defaultVal: 1 }],
    outputs: [
      { name: 'Q', label: 'Output Q' },
      { name: 'Qbar', label: 'Output Q_bar' }
    ],
    initialState: { Q: 0, Qbar: 1 },
    truthTable: [
      { inputs: [0], outputs: [0, 1], state: 'Hold state (T=0)' },
      { inputs: [1], outputs: [1, 0], state: 'Toggle state (T=1)' }
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

  // 17. 4-bit Asynchronous Ripple Counter
  {
    id: 'cir-ripple-counter',
    name: '4-Bit Asynchronous Ripple Counter',
    category: 'Counters & Registers',
    unitId: 'unit-4',
    description: 'Cascade of 4 toggle flip-flops counting in binary from 0000 (0) to 1111 (15) with asynchronous reset.',
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

  // 18. 4-Bit Ring Counter
  {
    id: 'cir-ring-counter',
    name: '4-Bit Ring Counter',
    category: 'Counters & Registers',
    unitId: 'unit-4',
    description: 'Circulates a single High bit through four cascaded flip-flops: 1000 -> 0100 -> 0010 -> 0001.',
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

  // 19. CMOS Inverter
  {
    id: 'cir-cmos-inverter',
    name: 'CMOS Inverter (PMOS/NMOS Pair)',
    category: 'Logic Families',
    unitId: 'unit-5',
    description: 'Complementary pair of p-channel pull-up and n-channel pull-down MOSFETs with near-zero static power dissipation.',
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
