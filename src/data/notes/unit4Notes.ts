import { NoteSection } from '../../types/digitalElectronics';

export const UNIT_4_NOTES: NoteSection[] = [
  {
    id: 'sec-u4-1',
    unitId: 'unit-4',
    unitTitle: 'Unit IV – Sequential Circuits',
    title: '14. Latches, Flip-Flops (SR, JK, D, T, Master-Slave) & Excitation Tables',
    pageNumber: 93,
    summary: 'Basic vs gated latches, setup and hold times, Master-Slave JK flip-flop, race-around elimination, characteristic & excitation tables, and flip-flop conversions.',
    keyFormulas: [
      'Setup time t_{su}: Minimum time input must be stable prior to active clock edge',
      'Hold time t_h: Minimum time input must be stable after active clock edge',
      'JK Characteristic equation: Q(t+1) = J Q\' + K\' Q',
      'D Characteristic equation: Q(t+1) = D | T Characteristic: Q(t+1) = T \\oplus Q'
    ],
    videoSequenceNos: [93, 94, 95, 96, 97, 98],
    circuitIds: ['ff-sr', 'ff-d', 'ff-jk', 'ff-t'],
    content: `
DIGITAL LOGIC DESIGN - Page no. 93 to 98

UNIT - IV: SEQUENTIAL CIRCUITS

ARCHITECTURAL DISTINCTIONS:
• Combinational Circuit: Output depends purely on present inputs; no memory or clock.
• Sequential Circuit: Output depends on present inputs AND past outputs (present state); requires memory elements (latches/flip-flops) and feedback.

LATCHES VS FLIP-FLOPS:
1. Basic Latch: Cross-coupled feedback connection of two NOR gates or two NAND gates. Stores 1 bit.
   • S = 1 sets Q to 1; R = 1 resets Q to 0. (S=R=1 is forbidden in NOR latch).
2. Gated Latch: Adds clock/enable gating. Transparent while clock is HIGH.
3. Flip-Flop: Edge-triggered or master-slave storage element whose output changes ONLY at the active clock transition (rising or falling edge).

SETUP & HOLD TIMES:
• Setup Time (t_{su}): The minimum time that the data input signal must be stable prior to the active clock edge.
• Hold Time (t_h): The minimum time that the data input signal must remain stable after the active clock edge.

FLIP-FLOP TYPES:
1. SR Flip-Flop: Set and Reset. Forbidden condition S = R = 1 causes race condition.
2. D Flip-Flop (Data / Delay): Q(t+1) = D. Eliminates undefined state.
3. JK Flip-Flop: Universal flip-flop. Overcomes SR limitation by toggling when J = K = 1:
   Q(t+1) = J Q' + K' Q
4. Master-Slave JK Flip-Flop:
   Constructed with two cascaded gated latches (Master active during clock HIGH; Slave active during clock LOW).
   Completely eliminates the "race-around condition" (where output toggles uncontrollably when clock pulse width > propagation delay).
5. T Flip-Flop (Toggle): Made by connecting J and K together:
   Q(t+1) = T ⊕ Q. When T = 1, output toggles on every clock pulse.

EXCITATION TABLES (Essential for Sequential Counter Design):
Transition  | D | J   K | S   R | T
  0 -> 0    | 0 | 0   X | 0   X | 0
  0 -> 1    | 1 | 1   X | 1   0 | 1
  1 -> 0    | 0 | X   1 | 0   1 | 1
  1 -> 1    | 1 | X   0 | X   0 | 0

FLIP-FLOP CONVERSIONS (e.g. JK to D):
1. Write target D flip-flop truth table (D, Q, Q+).
2. Look up required JK excitations for each transition (0->0: J=0, K=X; 0->1: J=1, K=X; etc.).
3. Plot K-maps for J and K in terms of D and Q.
4. Result: J = D, K = D' (connect inverter from D to K).
`
  },
  {
    id: 'sec-u4-2',
    unitId: 'unit-4',
    unitTitle: 'Unit IV – Sequential Circuits',
    title: '15. Shift Registers: SISO, SIPO, PISO, PIPO & Universal Shift Register',
    pageNumber: 103,
    summary: 'Cascade of flip-flops, buffer registers, 4 serial/parallel transmission modes, bidirectional shift registers, and 4-bit Universal Shift Register (IC 74194) architecture.',
    keyFormulas: [
      '4 Basic types: SISO (Serial-In Serial-Out), SIPO, PISO, PIPO',
      'Bidirectional: Left/Right mode signal directs data forward or backward',
      'Universal Shift Register Mode Control: S1 S0 = 00 (No change), 01 (Shift Right), 10 (Shift Left), 11 (Parallel Load)'
    ],
    videoSequenceNos: [99, 100, 101, 102],
    circuitIds: ['shift-register'],
    content: `
DIGITAL LOGIC DESIGN - Page no. 103 to 108

SHIFT REGISTERS:
A cascade of n flip-flops sharing a common clock, where the output of each flip-flop is connected to the data input of the next stage.
Shifts the stored bit array by one position on each clock transition.

CLASSIFICATION:
1. Serial-In, Serial-Out (SISO):
   Data enters serially one bit at a time and leaves serially. Requires n clock pulses to load and n clock pulses to read an n-bit word.
2. Serial-In, Parallel-Out (SIPO):
   Data entered serially, but all n stored bits appear simultaneously on parallel outputs after n clock cycles.
3. Parallel-In, Serial-Out (PISO):
   Data loaded simultaneously using SHIFT/LOAD control, then shifted out serially.
4. Parallel-In, Parallel-Out (PIPO):
   Data loaded simultaneously and read out instantaneously. Used as high-speed buffer registers.

BIDIRECTIONAL SHIFT REGISTER:
Capable of shifting data either left or right under the command of a mode control signal (Right/Left):
• When Right/Left = 1: AND gates route Q of FF_n to D of FF_{n+1} (Shift Right).
• When Right/Left = 0: AND gates route Q of FF_{n+1} to D of FF_n (Shift Left).

4-BIT UNIVERSAL SHIFT REGISTER (IC 74194):
Contains 4 D flip-flops and 4 4-to-1 Multiplexers with select inputs S1 and S0:
Mode Control Table:
  S1  S0 | Register Operation
   0   0 | No Change (holds current data via feedback from Q to D)
   0   1 | Shift Right (serial input enters stage A4)
   1   0 | Shift Left (serial input enters stage A1)
   1   1 | Parallel Load (inputs I3, I2, I1, I0 loaded simultaneously)
`
  },
  {
    id: 'sec-u4-3',
    unitId: 'unit-4',
    unitTitle: 'Unit IV – Sequential Circuits',
    title: '16. Counters: Asynchronous (Ripple), Mod-6, Mod-10 Decade & Synchronous Counters',
    pageNumber: 109,
    summary: 'Ripple up/down counters, design of Mod-6 counter (R = Q3 Q2), Mod-10 BCD decade counter (R = Q4 Q2), synchronous counter design steps, and 3-bit JK up-down counter.',
    keyFormulas: [
      'Asynchronous / Ripple: Flip-flops clocked by previous output Q or Q\'',
      'Mod-6 Counter Reset logic: R = Q_3 Q_2 (feedback to active-low CLR resets state 110 to 000)',
      'Mod-10 Decade Counter Reset logic: R = Q_4 Q_2 (resets temporary state 1010 to 0000)',
      'Synchronous Counters: All flip-flops triggered simultaneously by common clock'
    ],
    videoSequenceNos: [103, 104, 105, 106, 107, 108, 109, 110],
    circuitIds: ['ripple-counter', 'ff-jk'],
    content: `
DIGITAL LOGIC DESIGN - Page no. 109 to 120

COUNTERS:
Sequential circuits that cycle through a predetermined sequence of states upon the application of clock pulses.
Used for event counting, frequency division, digital clocks, and timing control.

ASYNCHRONOUS (RIPPLE) COUNTERS:
• Flip-flops are NOT clocked simultaneously. The output of one stage serves as the clock for the next stage.
• Up-Counter: Clock triggered by Q' outputs (or negative edge on Q).
• Down-Counter: Clock triggered by Q outputs.
• Up/Down Ripple Counter: Mode signal M selects between Q (up) and Q' (down).

DESIGN OF MOD-6 ASYNCHRONOUS COUNTER USING T-FLIP-FLOPS:
• Counts states 000, 001, 010, 011, 100, 101 (6 stable states).
• Requires 3 flip-flops (2^3 = 8 states; 110 and 111 are invalid).
• When 6th pulse arrives, counter enters 110 temporarily.
• Feedback Reset Expression:
  R = Q_3 Q_2
  For active-low clear, R' = (Q_3 Q_2)' NAND gate resets all flip-flops to 000!

DESIGN OF MOD-10 (DECADE / BCD) ASYNCHRONOUS COUNTER:
• Counts 10 states: 0000 to 1001 (0 to 9 in decimal).
• Requires 4 flip-flops (2^4 = 16 states; 1010 to 1111 are invalid).
• State 1010 (Q4=1, Q3=0, Q2=1, Q1=0) is detected by NAND gate:
  R = Q_4 Q_2
  Connect (Q_4 Q_2)' to CLR inputs of all 4 flip-flops.

SYNCHRONOUS COUNTERS:
All flip-flops receive the clock pulse simultaneously, eliminating cumulative ripple delay and glitches!
Systematic Design Procedure:
1. State Diagram & State Table: Define sequence and number of states N.
2. Number of Flip-Flops: Smallest integer n such that 2^n >= N.
3. Excitation Table: Determine required flip-flop inputs (J-K, T, or D) for every state transition.
4. K-Map Minimization: Find minimal Boolean expressions for flip-flop inputs.
5. Logic Diagram: Implement using flip-flops and logic gates.

Example: Synchronous 3-Bit Up-Down Counter using JK Flip-Flops:
Mode M = 1 (Up-count), M = 0 (Down-count):
• Stage 1: J1 = 1, K1 = 1 (always toggles)
• Stage 2: J2 = K2 = Q1 M + Q1' M'
• Stage 3: J3 = K3 = Q2 Q1 M + Q2' Q1' M'
`
  },
  {
    id: 'sec-u4-4',
    unitId: 'unit-4',
    unitTitle: 'Unit IV – Sequential Circuits',
    title: '17. Ring Counters & Johnson (Twisted Ring) Counters',
    pageNumber: 120,
    summary: 'Circulating 1 ring counter, mobius / twisted feedback Johnson counter, decoding simplicity, state sequence, and timing diagrams.',
    keyFormulas: [
      'Ring Counter: Modulus = n (number of flip-flops) | Circulates single 1 (1000 -> 0100 -> 0010 -> 0001)',
      'Johnson (Twisted Ring) Counter: Modulus = 2n | Inverted feedback Q\' -> D_1',
      '4-bit Johnson sequence: 0000 -> 1000 -> 1100 -> 1110 -> 1111 -> 0111 -> 0011 -> 0001 -> 0000'
    ],
    videoSequenceNos: [111, 112, 113],
    circuitIds: ['shift-register'],
    content: `
DIGITAL LOGIC DESIGN - Page no. 120 to 122

RING COUNTERS:
A circular shift register with the output of the last flip-flop fed back to the D input of the first flip-flop:
• A single 1 is preset into the register (initial state = 1000).
• On each clock pulse, the 1 circulates:
  1000 -> 0100 -> 0010 -> 0001 -> 1000 ...
• An n-bit ring counter has exactly n distinct states (Modulus = n).
• Advantages: No decoder gates required! The active state is directly read by seeing which flip-flop is HIGH. Entirely synchronous and high speed.
• Disadvantage: Uneconomical in flip-flop utilization compared to binary counters (4 FFs yield 4 states instead of 16).

JOHNSON COUNTER (TWISTED RING / MOBIUS COUNTER):
Constructed by feeding back the inverted output (Q') of the last stage to the D input of the first stage:
• Modulus = 2n (A 4-bit Johnson counter produces 2*4 = 8 distinct states).
• State Sequence (starting from 0000):
  0000 -> 1000 -> 1100 -> 1110 -> 1111 -> 0111 -> 0011 -> 0001 -> 0000
• Advantages: Requires only 2-input AND gates for complete decoding, and produces twice as many states as a standard ring counter.
`
  }
];
