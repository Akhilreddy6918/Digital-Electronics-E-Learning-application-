import { HandwrittenPage } from './handwrittenNotesData';

export const HANDWRITTEN_PAGES_345: HandwrittenPage[] = [
  // ==========================================
  // UNIT 3: SEQUENTIAL CIRCUITS, FLIP-FLOPS & COUNTERS
  // ==========================================
  {
    id: 'hw-u3-p1',
    unitId: 'unit-3',
    unitName: 'Unit 3',
    unitTitle: 'Sequential Circuits, Flip-Flops & Counters',
    pageNumber: 1,
    globalPage: 53,
    title: 'Combinational vs Sequential Circuits',
    category: 'Theory',
    summary: 'Core comparison between combinational logic and sequential circuits with memory elements.',
    sections: [
      {
        heading: 'Fundamental Differences',
        table: {
          headers: ['Combinational Circuit', 'Sequential Circuit'],
          rows: [
            ['Present output depends ONLY on present inputs', 'Present output depends on present inputs AND past history (previous output)'],
            ['No memory element required', 'Memory element (latch/flip-flop) is required'],
            ['Faster in speed (no feedback delay)', 'Slower than combinational due to propagation delays'],
            ['Easy to design', 'Comparatively harder to design'],
            ['Examples: Adders, MUX, Demux, Encoders', 'Examples: Counters, Shift Registers, Serial Adders']
          ]
        }
      }
    ],
    keyTakeaways: ['Sequential circuits require feedback loop and memory storage elements']
  },
  {
    id: 'hw-u3-p2',
    unitId: 'unit-3',
    unitName: 'Unit 3',
    unitTitle: 'Sequential Circuits, Flip-Flops & Counters',
    pageNumber: 2,
    globalPage: 54,
    title: 'Clock Signals & Latches vs Flip-Flops',
    category: 'Theory',
    summary: 'Level-triggered vs edge-triggered clocks, 1-bit memory cell, and latch vs flip-flop distinction.',
    sections: [
      {
        heading: 'Clock Pulses',
        points: [
          'Level-triggered clock: Circuit responds as long as clock is active HIGH (+ve level) or active LOW (-ve level).',
          'Edge-triggered clock: Circuit transitions ONLY during the instantaneous transition from 0 to 1 (+ve edge) or 1 to 0 (-ve edge).'
        ]
      },
      {
        heading: 'Latch vs Flip-Flop',
        points: [
          'Latch: Controlled by clock LEVEL. Transparent to inputs while enable signal is active.',
          'Flip-Flop: Controlled by clock EDGE. Samples inputs and updates output strictly at the triggering edge.'
        ]
      }
    ],
    keyTakeaways: ['Latches are level-sensitive; Flip-flops are edge-sensitive']
  },
  {
    id: 'hw-u3-p3',
    unitId: 'unit-3',
    unitName: 'Unit 3',
    unitTitle: 'Sequential Circuits, Flip-Flops & Counters',
    pageNumber: 3,
    globalPage: 55,
    title: 'Basic SR Latch using NOR Gates',
    category: 'Circuit',
    summary: 'Cross-coupled NOR gate latch, truth table, and derivation of Set, Reset, No-change, and Invalid states.',
    sections: [
      {
        heading: 'Truth Table & Operation',
        table: {
          headers: ['S', 'R', 'Q(t+1)', 'Q̄(t+1)', 'State of Operation'],
          rows: [
            ['0', '0', 'Q(t)', 'Q̄(t)', 'No Change (Memory)'],
            ['0', '1', '0', '1', 'Reset'],
            ['1', '0', '1', '0', 'Set'],
            ['1', '1', '0', '0', 'Invalid / Forbidden State']
          ]
        },
        points: [
          'S=1, R=1 produces Q=0 and Q̄=0 simultaneously, violating the complementary nature of outputs.'
        ]
      }
    ],
    keyTakeaways: ['S=R=0 retains state in NOR latch', 'S=R=1 is forbidden']
  },
  {
    id: 'hw-u3-p4',
    unitId: 'unit-3',
    unitName: 'Unit 3',
    unitTitle: 'Sequential Circuits, Flip-Flops & Counters',
    pageNumber: 4,
    globalPage: 56,
    title: 'Basic SR Latch using NAND Gates',
    category: 'Circuit',
    summary: 'Active-low cross-coupled NAND latch schematic, truth table, and operating conditions.',
    sections: [
      {
        heading: 'NAND Latch Truth Table',
        table: {
          headers: ['S', 'R', 'Q(t+1)', 'Q̄(t+1)', 'State of Operation'],
          rows: [
            ['0', '0', '1', '1', 'Indeterminate / Forbidden'],
            ['0', '1', '1', '0', 'Set'],
            ['1', '0', '0', '1', 'Reset'],
            ['1', '1', 'Q(t)', 'Q̄(t)', 'No Change (Memory)']
          ]
        }
      }
    ],
    keyTakeaways: ['NAND latch is active-low: S=0 sets, R=0 resets, S=R=1 holds']
  },
  {
    id: 'hw-u3-p5',
    unitId: 'unit-3',
    unitName: 'Unit 3',
    unitTitle: 'Sequential Circuits, Flip-Flops & Counters',
    pageNumber: 5,
    globalPage: 57,
    title: 'Clocked SR Flip-Flop',
    category: 'Circuit',
    summary: 'Clock gating using steering NAND gates, timing behavior, and characteristic derivation.',
    sections: [
      {
        heading: 'Clocked SR Flip-Flop Truth Table',
        table: {
          headers: ['Clock', 'S', 'R', 'Q(t+1)', 'State'],
          rows: [
            ['0', 'X', 'X', 'Q(t)', 'No Change'],
            ['↑', '0', '0', 'Q(t)', 'No Change'],
            ['↑', '0', '1', '0', 'Reset'],
            ['↑', '1', '0', '1', 'Set'],
            ['↑', '1', '1', '?', 'Undetermined / Forbidden']
          ]
        }
      }
    ],
    keyTakeaways: ['Clock pulse enables input steering only at active transition']
  },
  {
    id: 'hw-u3-p7',
    unitId: 'unit-3',
    unitName: 'Unit 3',
    unitTitle: 'Sequential Circuits, Flip-Flops & Counters',
    pageNumber: 7,
    globalPage: 58,
    title: 'SR Characteristic Equation & Excitation Table',
    category: 'Derivation',
    summary: 'K-map derivation of Q(t+1) = S + R̄Q and excitation table required for counter synthesis.',
    sections: [
      {
        heading: 'Characteristic Equation',
        equations: [
          'Q(t+1) = S + R̄·Q (with condition S·R = 0)'
        ]
      },
      {
        heading: 'SR Flip-Flop Excitation Table',
        table: {
          headers: ['Q(t)', 'Q(t+1)', 'S', 'R'],
          rows: [
            ['0', '0', '0', 'X (don\'t care)'],
            ['0', '1', '1', '0'],
            ['1', '0', '0', '1'],
            ['1', '1', 'X', '0']
          ]
        }
      }
    ],
    keyTakeaways: ['Excitation table answers: what inputs produce desired state transition?']
  },
  {
    id: 'hw-u3-p8',
    unitId: 'unit-3',
    unitName: 'Unit 3',
    unitTitle: 'Sequential Circuits, Flip-Flops & Counters',
    pageNumber: 8,
    globalPage: 59,
    title: 'Clocked D Flip-Flop (Delay / Data)',
    category: 'Circuit',
    summary: 'Single data line with inverter to eliminate forbidden state, characteristic equation Q(t+1) = D.',
    sections: [
      {
        heading: 'D Flip-Flop Equations & Excitation',
        equations: ['Q(t+1) = D', 'D = Q(t+1)'],
        table: {
          headers: ['Q(t)', 'Q(t+1)', 'D (Excitation)'],
          rows: [
            ['0', '0', '0'],
            ['0', '1', '1'],
            ['1', '0', '0'],
            ['1', '1', '1']
          ]
        }
      }
    ],
    keyTakeaways: ['Output simply follows D input at triggering clock edge']
  },
  {
    id: 'hw-u3-p9',
    unitId: 'unit-3',
    unitName: 'Unit 3',
    unitTitle: 'Sequential Circuits, Flip-Flops & Counters',
    pageNumber: 9,
    globalPage: 60,
    title: 'Clocked JK Flip-Flop (Jack Kilby)',
    category: 'Circuit',
    summary: 'Cross-coupled feedback from outputs to inputs eliminating the forbidden state and enabling toggle.',
    sections: [
      {
        heading: 'JK Truth Table',
        table: {
          headers: ['Clock', 'J', 'K', 'Q(t+1)', 'State of Operation'],
          rows: [
            ['0', 'X', 'X', 'Q(t)', 'No Change'],
            ['↑', '0', '0', 'Q(t)', 'No Change'],
            ['↑', '0', '1', '0', 'Reset'],
            ['↑', '1', '0', '1', 'Set'],
            ['↑', '1', '1', 'Q̄(t)', 'Toggle (Complements State)']
          ]
        }
      }
    ],
    keyTakeaways: ['J=K=1 produces toggle state, overcoming SR invalid condition']
  },
  {
    id: 'hw-u3-p10',
    unitId: 'unit-3',
    unitName: 'Unit 3',
    unitTitle: 'Sequential Circuits, Flip-Flops & Counters',
    pageNumber: 10,
    globalPage: 61,
    title: 'JK Characteristic Equation & Excitation Table',
    category: 'Derivation',
    summary: 'K-map derivation of Q(t+1) = J·Q̄ + K̄·Q and JK excitation table.',
    sections: [
      {
        heading: 'Characteristic Equation',
        equations: ['Q(t+1) = J·Q̄(t) + K̄·Q(t)']
      },
      {
        heading: 'JK Excitation Table',
        table: {
          headers: ['Q(t)', 'Q(t+1)', 'J', 'K'],
          rows: [
            ['0', '0', '0', 'X'],
            ['0', '1', '1', 'X'],
            ['1', '0', 'X', '1'],
            ['1', '1', 'X', '0']
          ]
        }
      }
    ],
    keyTakeaways: ['JK excitation features two don\'t cares, maximizing synthesis simplification']
  },
  {
    id: 'hw-u3-p11',
    unitId: 'unit-3',
    unitName: 'Unit 3',
    unitTitle: 'Sequential Circuits, Flip-Flops & Counters',
    pageNumber: 11,
    globalPage: 62,
    title: 'Clocked T Flip-Flop (Toggle Flip-Flop)',
    category: 'Circuit',
    summary: 'Formed by tying J and K inputs together; toggles output when T=1.',
    sections: [
      {
        heading: 'T Flip-Flop Equations',
        equations: [
          'Q(t+1) = T ⊕ Q(t) = T·Q̄ + T̄·Q',
          'T = Q(t) ⊕ Q(t+1)'
        ],
        table: {
          headers: ['Q(t)', 'Q(t+1)', 'T (Excitation)'],
          rows: [
            ['0', '0', '0'],
            ['0', '1', '1'],
            ['1', '0', '1'],
            ['1', '1', '0']
          ]
        }
      }
    ],
    keyTakeaways: ['T flip-flop is a natural frequency divider by 2']
  },
  {
    id: 'hw-u3-p15',
    unitId: 'unit-3',
    unitName: 'Unit 3',
    unitTitle: 'Sequential Circuits, Flip-Flops & Counters',
    pageNumber: 15,
    globalPage: 63,
    title: 'Asynchronous (Ripple) vs Synchronous Counters',
    category: 'Theory',
    summary: 'Ripple clock chaining versus simultaneous common clock distribution.',
    sections: [
      {
        heading: 'Counter Classification',
        points: [
          'Asynchronous (Ripple) Counter: Clock signal is applied ONLY to first flip-flop. Subsequent flip-flops are clocked by output of preceding stage.',
          'Synchronous Counter: Common clock is applied SIMULTANEOUSLY to all flip-flops. State transitions happen in lockstep.',
          'MOD-N Counter: Counts N distinct states. Number of flip-flops n satisfies: 2ⁿ ≥ N.'
        ]
      }
    ],
    keyTakeaways: ['Synchronous counters eliminate cumulative ripple propagation delay']
  },
  {
    id: 'hw-u3-p18',
    unitId: 'unit-3',
    unitName: 'Unit 3',
    unitTitle: 'Sequential Circuits, Flip-Flops & Counters',
    pageNumber: 18,
    globalPage: 64,
    title: 'MOD-10 (Decade / BCD) Ripple Counter',
    category: 'Circuit',
    summary: '4-stage JK ripple counter with NAND reset gate triggering on count 10 (1010_2 = Q_D Q_B).',
    sections: [
      {
        heading: 'Design Details',
        points: [
          'Total counts: 0 to 9 (10 states). Requires n=4 flip-flops (2⁴ = 16 > 10).',
          'At the 10th count (1010₂), QD=1 and QB=1.',
          'Feed QD and QB into a 2-input NAND gate connected to the active-low CLEAR inputs of all flip-flops.',
          'Instantaneous reset occurs, forcing counter back to 0000.'
        ]
      }
    ],
    keyTakeaways: ['NAND reset logic forces decade recycling at count 1010']
  },
  {
    id: 'hw-u3-p23',
    unitId: 'unit-3',
    unitName: 'Unit 3',
    unitTitle: 'Sequential Circuits, Flip-Flops & Counters',
    pageNumber: 23,
    globalPage: 65,
    title: 'Shift Registers: SISO, SIPO, PIPO, PISO Architecture',
    category: 'Circuit',
    summary: '4-bit bidirectional shift register modes, serial input/output timing waveforms.',
    sections: [
      {
        heading: 'Shift Register Modes',
        points: [
          'SISO (Serial In Serial Out): Requires n clock cycles to load and n-1 cycles to retrieve.',
          'SIPO (Serial In Parallel Out): Serial loading in n clock cycles, all bits available simultaneously.',
          'PIPO (Parallel In Parallel Out): Instantaneous 1-clock parallel load and parallel read.',
          'PISO (Parallel In Serial Out): Uses multiplexing steer logic for parallel load / serial shift.'
        ]
      }
    ],
    keyTakeaways: ['PIPO is fastest; SISO requires fewest pins']
  },
  {
    id: 'hw-u3-p26',
    unitId: 'unit-3',
    unitName: 'Unit 3',
    unitTitle: 'Sequential Circuits, Flip-Flops & Counters',
    pageNumber: 26,
    globalPage: 66,
    title: 'Ring Counter & Johnson (Twisted Ring) Counter',
    category: 'Circuit',
    summary: 'Circulating single 1 counter (MOD-N) vs inverted feedback Johnson counter (MOD-2N).',
    sections: [
      {
        heading: 'Ring vs Johnson Counter',
        table: {
          headers: ['Feature', 'Ring Counter', 'Johnson (Twisted Ring) Counter'],
          rows: [
            ['Feedback', 'Output Q of last stage to D of first stage', 'Inverted output Q̄ of last stage to D of first stage'],
            ['Total States for n FFs', 'n states (e.g. 4 states for 4 FFs)', '2n states (e.g. 8 states for 4 FFs)'],
            ['State Sequence (4 FFs)', '1000 -> 0100 -> 0010 -> 0001', '0000 -> 1000 -> 1100 -> 1110 -> 1111 -> 0111 -> 0011 -> 0001'],
            ['Self-Starting Requirement', 'Requires preset/clear initialization', 'Easier self-recovery with feedback decoding']
          ]
        }
      }
    ],
    keyTakeaways: ['Johnson counter doubles the count capacity with same number of flip-flops']
  },

  // ==========================================
  // UNIT 4: COMBINATIONAL LOGIC CIRCUITS & MSI DEVICES
  // ==========================================
  {
    id: 'hw-u4-p1',
    unitId: 'unit-4',
    unitName: 'Unit 4',
    unitTitle: 'Combinational Logic Circuits',
    pageNumber: 1,
    globalPage: 67,
    title: 'Half Adder Circuit & Implementation',
    category: 'Circuit',
    summary: 'Two-operand addition, truth table, Sum = A ⊕ B, Carry = A·B, and XOR/AND implementation.',
    sections: [
      {
        heading: 'Equations & Truth Table',
        equations: [
          'Sum = ĀB + AB̄ = A ⊕ B',
          'Carry = A · B'
        ],
        table: {
          headers: ['A', 'B', 'Sum (S)', 'Carry (C)'],
          rows: [
            ['0', '0', '0', '0'],
            ['0', '1', '1', '0'],
            ['1', '0', '1', '0'],
            ['1', '1', '0', '1']
          ]
        }
      }
    ],
    keyTakeaways: ['Half adder has no carry-in input']
  },
  {
    id: 'hw-u4-p2',
    unitId: 'unit-4',
    unitName: 'Unit 4',
    unitTitle: 'Combinational Logic Circuits',
    pageNumber: 2,
    globalPage: 68,
    title: 'Full Adder Circuit & K-Map Derivation',
    category: 'Circuit',
    summary: 'Three-input addition (A, B, Cin) with K-map simplification for Sum and Carry.',
    sections: [
      {
        heading: 'Full Adder Equations',
        equations: [
          'Sum = A ⊕ B ⊕ Cin',
          'Carry (Cout) = AB + BCin + ACin = AB + Cin(A ⊕ B)'
        ]
      }
    ],
    keyTakeaways: ['Full adder can be constructed using two Half Adders and one OR gate']
  },
  {
    id: 'hw-u4-p4',
    unitId: 'unit-4',
    unitName: 'Unit 4',
    unitTitle: 'Combinational Logic Circuits',
    pageNumber: 4,
    globalPage: 69,
    title: 'Look-Ahead Carry Adder (CLA) Principles',
    category: 'Derivation',
    summary: 'Eliminating ripple carry propagation delay using Carry Generate (Gi) and Carry Propagate (Pi).',
    sections: [
      {
        heading: 'Carry Generate & Propagate Equations',
        equations: [
          'Generate: Gi = Ai · Bi',
          'Propagate: Pi = Ai ⊕ Bi',
          'C₁ = G₀ + P₀·C₀',
          'C₂ = G₁ + P₁G₀ + P₁P₀C₀',
          'C₃ = G₂ + P₂G₁ + P₂P₁G₀ + P₂P₁P₀C₀',
          'C₄ = G₃ + P₃G₂ + P₃P₂G₁ + P₃P₂P₁G₀ + P₃P₂P₁P₀C₀'
        ],
        points: [
          'All carries are generated simultaneously in 2 gate levels directly from initial carry C₀!',
          'Eliminates ripple delay: addition time is independent of the number of bits.'
        ]
      }
    ],
    keyTakeaways: ['Look-ahead carry generates all carries in parallel in O(1) gate delays']
  },
  {
    id: 'hw-u4-p10',
    unitId: 'unit-4',
    unitName: 'Unit 4',
    unitTitle: 'Combinational Logic Circuits',
    pageNumber: 10,
    globalPage: 70,
    title: 'BCD Addition Rules & +6 Correction Factor',
    category: 'Conversion',
    summary: 'Handling invalid sums > 9 or carry generated by adding 0110 (6) to the nibble.',
    sections: [
      {
        heading: 'BCD Addition Algorithm',
        points: [
          '1. Add two 4-bit BCD numbers using binary addition.',
          '2. If the 4-bit sum is ≤ 9 (1001) and Cout = 0, the sum is a valid BCD number.',
          '3. If the sum > 9 OR a carry Cout = 1 is generated, the result is INVALID BCD.',
          '4. To correct: ADD 0110₂ (6₁₀) to the 4-bit sum group.'
        ],
        example: {
          problem: 'Add (45)₁₀ + (26)₁₀ in BCD',
          solution: [
            'Group 1 (units): 0101 + 0110 = 1011 (11₁₀ > 9 -> INVALID).',
            'Add 0110: 1011 + 0110 = (1) 0001 -> Sum digit = 1, Carry = 1.',
            'Group 2 (tens): 0100 + 0010 + 1(carry) = 0111 (7₁₀ ≤ 9 -> VALID).',
            'Final BCD: 0111 0001 = (71)₁₀.'
          ]
        }
      }
    ],
    keyTakeaways: ['Adding 6 (0110) skips the 6 invalid 4-bit combinations 1010 through 1111']
  },
  {
    id: 'hw-u4-p13',
    unitId: 'unit-4',
    unitName: 'Unit 4',
    unitTitle: 'Combinational Logic Circuits',
    pageNumber: 13,
    globalPage: 71,
    title: 'Magnitude Comparators (1-bit & 2-bit)',
    category: 'Circuit',
    summary: 'Hardware comparison for A > B, A < B, and A = B using XOR, XNOR, and AND gates.',
    sections: [
      {
        heading: '1-Bit Comparator Equations',
        equations: [
          'A > B (Greater): G = A · B̄',
          'A < B (Lesser): L = Ā · B',
          'A = B (Equal): E = A ⊙ B = ĀB̄ + AB'
        ]
      },
      {
        heading: '2-Bit Comparator Logic',
        equations: [
          'E = (A₁ ⊙ B₁)(A₀ ⊙ B₀)',
          'G = A₁B̄₁ + (A₁ ⊙ B₁)·A₀B̄₀',
          'L = Ā₁B₁ + (A₁ ⊙ B₁)·Ā₀B₀'
        ]
      }
    ],
    keyTakeaways: ['Equality is tested with XNOR; inequality priority moves from MSB to LSB']
  },
  {
    id: 'hw-u4-p21',
    unitId: 'unit-4',
    unitName: 'Unit 4',
    unitTitle: 'Combinational Logic Circuits',
    pageNumber: 21,
    globalPage: 72,
    title: 'Multiplexers (2x1, 4x1, 8x1 MUX Architecture)',
    category: 'Circuit',
    summary: 'Data selectors with 2^n inputs, n select lines, and 1 output.',
    sections: [
      {
        heading: 'General Formula',
        equations: [
          '2x1 MUX: Y = S̄·I₀ + S·I₁',
          '4x1 MUX: Y = S̄₁S̄₀I₀ + S̄₁S₀I₁ + S₁S̄₀I₂ + S₁S₀I₃'
        ]
      }
    ],
    keyTakeaways: ['Multiplexers act as universal combinational logic generators']
  },
  {
    id: 'hw-u4-p30',
    unitId: 'unit-4',
    unitName: 'Unit 4',
    unitTitle: 'Combinational Logic Circuits',
    pageNumber: 30,
    globalPage: 73,
    title: 'Decoders (3 to 8 Line Decoder IC 74138)',
    category: 'Circuit',
    summary: 'Active-high and active-low decoders with enable pins, generating all 2^n minterms.',
    sections: [
      {
        heading: 'Equations',
        equations: [
          'Y₀ = E · ĀB̄C̄',
          'Y₁ = E · ĀB̄C',
          '...',
          'Y₇ = E · ABC'
        ]
      }
    ],
    keyTakeaways: ['Decoders generate every minterm of the input variables simultaneously']
  },
  {
    id: 'hw-u4-p34',
    unitId: 'unit-4',
    unitName: 'Unit 4',
    unitTitle: 'Combinational Logic Circuits',
    pageNumber: 34,
    globalPage: 74,
    title: 'Priority Encoders (4 to 2 Line)',
    category: 'Circuit',
    summary: 'Resolving simultaneous inputs where highest index input takes priority, using don\'t cares.',
    sections: [
      {
        heading: 'Priority Encoder Equations',
        equations: [
          'A = D₂ + D₃',
          'B = D₃ + D̄₂·D₁'
        ]
      }
    ],
    keyTakeaways: ['Priority encoders handle multiple simultaneous active interrupts in CPUs']
  },

  // ==========================================
  // UNIT 5: SEMICONDUCTOR MEMORIES & PLDS (PROM, PLA, PAL)
  // ==========================================
  {
    id: 'hw-u5-p1',
    unitId: 'unit-5',
    unitName: 'Unit 5',
    unitTitle: 'Semiconductor Memories & PLDs',
    pageNumber: 1,
    globalPage: 75,
    title: 'Memory Organization, Capacity & Block Diagram',
    category: 'Theory',
    summary: 'K address lines for 2^K memory words, n-bit word length, memory capacity, read/write timing.',
    sections: [
      {
        heading: 'Core Memory Principles',
        points: [
          '1-bit memory cell stores 1 bit (0 or 1).',
          'Registers are made of flip-flops to store word data.',
          'Memory is an array of registers, each identified by a unique address.',
          'Capacity = 2^K × n bits (K address lines, n data lines). Example: 10 address lines can access 2¹⁰ = 1024 (1K) words.'
        ]
      }
    ],
    keyTakeaways: ['K address lines decode 2^K storage locations']
  },
  {
    id: 'hw-u5-p2',
    unitId: 'unit-5',
    unitName: 'Unit 5',
    unitTitle: 'Semiconductor Memories & PLDs',
    pageNumber: 2,
    globalPage: 76,
    title: 'Classification of Semiconductor Memories',
    category: 'Theory',
    summary: 'Hierarchy: Volatile (RAM - SRAM, DRAM) vs Non-Volatile (ROM - Masked, PROM, EPROM, EEPROM, Flash).',
    sections: [
      {
        heading: 'Memory Classification Tree',
        points: [
          'RAM (Random Access / Read-Write, Volatile): Loses data when power is off. Subdivided into Static RAM (SRAM) and Dynamic RAM (DRAM).',
          'ROM (Read Only Memory, Non-Volatile): Retains data permanently even when power is removed.',
          'CAM (Content Addressable Memory): Accesses data by value rather than address.'
        ]
      }
    ],
    keyTakeaways: ['RAM is volatile; ROM is non-volatile']
  },
  {
    id: 'hw-u5-p4',
    unitId: 'unit-5',
    unitName: 'Unit 5',
    unitTitle: 'Semiconductor Memories & PLDs',
    pageNumber: 4,
    globalPage: 77,
    title: 'Comparison: Static RAM (SRAM) vs Dynamic RAM (DRAM)',
    category: 'Table',
    summary: 'Definitive side-by-side comparison table between 6T SRAM and 1T-1C DRAM.',
    sections: [
      {
        heading: 'SRAM vs DRAM Comparison Table',
        table: {
          headers: ['Parameter', 'SRAM (Static RAM)', 'DRAM (Dynamic RAM)'],
          rows: [
            ['1. Storage Element', 'Cross-coupled Flip-Flops (4 to 6 transistors)', 'MOSFET + Storage Capacitor (1T-1C cell)'],
            ['2. Refreshing', 'NO refreshing required', 'Requires continuous periodic refreshing (every 2-4 ms)'],
            ['3. Speed / Access Time', 'Faster (10 to 30 ns access time)', 'Slower (50 to 100 ns access time)'],
            ['4. Packing Density', 'Low density (fewer bits per unit chip area)', 'High density (millions of bits per chip)'],
            ['5. Power Consumption', 'Higher power consumption', 'Lower power consumption'],
            ['6. Cost', 'More expensive per bit', 'Significantly cheaper per bit'],
            ['7. Application', 'CPU Cache memory (L1, L2, L3)', 'Main computer system memory (DIMMs)']
          ]
        }
      }
    ],
    keyTakeaways: ['SRAM uses flip-flops (cache); DRAM uses capacitor charges (main RAM)']
  },
  {
    id: 'hw-u5-p5',
    unitId: 'unit-5',
    unitName: 'Unit 5',
    unitTitle: 'Semiconductor Memories & PLDs',
    pageNumber: 5,
    globalPage: 78,
    title: 'ROM Types: PROM, EPROM, EEPROM & Flash Memory',
    category: 'Table',
    summary: 'Comparison of programming and erasing methods across non-volatile semiconductor memory technologies.',
    sections: [
      {
        heading: 'ROM Family Comparison',
        table: {
          headers: ['Type', 'Programming Method', 'Erasing Method', 'Re-writability'],
          rows: [
            ['Masked ROM', 'Hardwired during fabrication', 'Cannot be erased', 'No (read only)'],
            ['PROM', 'Electrically by burning fusible links', 'Cannot be erased', 'Once only (OTP)'],
            ['EPROM', 'Hot electron injection by programmer', 'UV light exposure through quartz window (15-20 min)', 'Multiple times (entire chip erased)'],
            ['EEPROM', 'Fowler-Nordheim electrical tunneling', 'Electrically byte-by-byte in circuit', '100,000+ cycles'],
            ['Flash Memory', 'Electrical Fowler-Nordheim tunneling', 'Electrically block-by-block (sector)', 'Fast & high density']
          ]
        }
      }
    ],
    keyTakeaways: ['EPROM requires UV light; EEPROM and Flash are in-circuit electrically erasable']
  },
  {
    id: 'hw-u5-p13',
    unitId: 'unit-5',
    unitName: 'Unit 5',
    unitTitle: 'Semiconductor Memories & PLDs',
    pageNumber: 13,
    globalPage: 79,
    title: 'PLD Architectures: PROM vs PAL vs PLA',
    category: 'Theory',
    summary: 'Programmable Logic Devices comparison: fixed vs programmable AND and OR array matrices.',
    sections: [
      {
        heading: 'Three Major Types of Combinational PLDs',
        points: [
          '1. PROM: Fixed AND array (decoder) + Programmable OR array.',
          '2. PAL (Programmable Array Logic): Programmable AND array + Fixed OR array (easier to program, highly popular).',
          '3. PLA (Programmable Logic Array): Programmable AND array + Programmable OR array (most flexible, both arrays programmable).'
        ]
      }
    ],
    keyTakeaways: ['PROM = Fixed AND, Prog OR; PAL = Prog AND, Fixed OR; PLA = Prog AND, Prog OR']
  },
  {
    id: 'hw-u5-p18',
    unitId: 'unit-5',
    unitName: 'Unit 5',
    unitTitle: 'Semiconductor Memories & PLDs',
    pageNumber: 18,
    globalPage: 80,
    title: 'PLD Comparison Table & Realization Examples',
    category: 'Table',
    summary: 'Comprehensive comparison table and worked realization examples for Full Adder using PLA and PAL.',
    sections: [
      {
        heading: 'Architectural Comparison',
        table: {
          headers: ['Feature', 'PROM', 'PLA', 'PAL'],
          rows: [
            ['AND Array', 'Fixed (decoder)', 'Programmable', 'Programmable'],
            ['OR Array', 'Programmable', 'Programmable', 'Fixed'],
            ['Cost & Complexity', 'Cheapest & simplest', 'Costliest and most complex', 'Moderate cost, simpler than PLA'],
            ['Minterms generated', 'ALL 2ⁿ minterms decoded', 'Only required product terms', 'Only required product terms'],
            ['Flexibility', 'Standard SOP only', 'Highest flexibility', 'High speed, fixed OR connections']
          ]
        }
      }
    ],
    keyTakeaways: ['Crucial summary table for all university and competitive examinations']
  }
];
