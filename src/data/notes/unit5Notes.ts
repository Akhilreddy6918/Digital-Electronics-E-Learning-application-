import { NoteSection } from '../../types/digitalElectronics';

export const UNIT_5_NOTES: NoteSection[] = [
  {
    id: 'sec-u5-1',
    unitId: 'unit-5',
    unitTitle: 'Unit V – Memory Devices & PLDs',
    title: '18. Memory Devices: ROM, PROM, EPROM, EEPROM, SRAM & DRAM',
    pageNumber: 123,
    summary: 'Memory organization, address bus, data bus, read/write cycles, volatile vs non-volatile, Static RAM latches vs Dynamic RAM capacitor storage.',
    keyFormulas: [
      'Memory capacity: 2^k \\times n (k address lines select 2^k words of n bits each)',
      'Byte = 8 bits | Word = 2 bytes (16 bits)',
      'SRAM: Internal cross-coupled latches, high speed, high power, cache memories',
      'DRAM: Charge stored on capacitor with MOS transistor, periodic refresh needed, high density'
    ],
    videoSequenceNos: [218, 219, 220, 221],
    content: `
DIGITAL LOGIC DESIGN - Page no. 123 to 125

UNIT - V: MEMORY DEVICES

MEMORY HIERARCHY & STRUCTURES:
Memory structures are crucial in digital system design: ROM, PROM, EPROM, EEPROM, RAM, SRAM, DRAM.
• All memory structures have:
  - Address Bus (k address lines select 2^k unique word locations)
  - Data Bus (n data lines for input/output transfer)
  - Control Signals (Read / Write, Chip Enable / Memory Enable)
• Definitions:
  - Byte = 8 bits
  - Word = 2 bytes (16 bits)

CLASSIFICATION OF MEMORIES:
1. Random-Access Memory (RAM):
   • Can perform both Read and Write operations.
   • Read/Write access time is identical for any word location (separated in space).
   • Volatile: Stored information is lost when electrical power is removed.
2. Read-Only Memory (ROM):
   • Performs Read operations only.
   • Non-Volatile: Retains binary data permanently even when powered off.
   • Types:
     - Mask ROM: Programmed during semiconductor fabrication.
     - PROM (Programmable ROM): Programmed once by blowing fusible links.
     - EPROM (Erasable PROM): Erased by exposing quartz window to ultraviolet (UV) light.
     - EEPROM (Electrically Erasable PROM): Erased electrically in-circuit byte-by-byte.
     - Flash Memory: Erased electrically in entire blocks at high speed.

STATIC RAM (SRAM) VS DYNAMIC RAM (DRAM):
• Static RAM (SRAM):
  - Cell consists of 4 to 6 transistors forming internal cross-coupled latches.
  - Stored information remains valid as long as power is applied (no refreshing needed).
  - Shorter access time (very high speed, 1-10 ns).
  - Used for CPU cache memories (L1, L2, L3).
  - Lower packing density, higher cost per bit, higher power consumption.

• Dynamic RAM (DRAM):
  - Stores binary information in the form of electric charges on tiny MOS capacitor gates.
  - Capacitors discharge over time due to leakage currents; requires PERIODIC REFRESHING (every few milliseconds).
  - Higher packing density (1 transistor + 1 capacitor per cell).
  - Low power consumption, lower cost per bit.
  - Used for main computer memory (DDR4, DDR5 RAM).
`
  },
  {
    id: 'sec-u5-2',
    unitId: 'unit-5',
    unitTitle: 'Unit V – Memory Devices & PLDs',
    title: '19. Memory Decoding & Binary Cell Architecture',
    pageNumber: 126,
    summary: 'Internal 2x4 address decoder matrix, memory cell selection, read/write operation with SR latch, and bus multiplexing.',
    keyFormulas: [
      '2 \\times 4 Address Decoder selects 1 of 4 word lines',
      'Read/Write = 0, Select = 1 -> Write input data into binary cell SR latch',
      'Read/Write = 1, Select = 1 -> Read stored bit out to output data bus'
    ],
    videoSequenceNos: [222, 223],
    circuitIds: ['ff-sr'],
    content: `
DIGITAL LOGIC DESIGN - Page no. 126

MEMORY DECODING:
To select a particular memory word, a decoder is utilized:
• For a memory with 2^k words, a k-to-2^k binary decoder is used.
• In the 2x4 decoder memory matrix:
  - 2 address lines (I1, I0) and Memory Enable (E) select one of 4 horizontal word rows.
  - 4 vertical bit lines carry input and output data.
  - Each intersection contains a Binary Cell (BC).

BINARY CELL (BC) INTERNAL LOGIC:
The elementary binary cell stores one bit of information using an internal SR latch:
• Control Inputs:
  1. Select line (from address decoder): Activates the cell.
  2. Read/Write control line:
     - Read/Write = 0 (Write Operation): Input data bit is routed into the S and R terminals of the latch. The new bit is stored.
     - Read/Write = 1 (Read Operation): The Q output of the SR latch is gated through a tristate buffer to the output data line.
`
  },
  {
    id: 'sec-u5-3',
    unitId: 'unit-5',
    unitTitle: 'Unit V – Memory Devices & PLDs',
    title: '20. Programmable Logic Devices (PLDs): PLA & PAL Architectures',
    pageNumber: 127,
    summary: 'Programmable Logic Array (PLA), Programmable Array Logic (PAL), FPGA, PLA programming tables, XOR polarity inversion, and solved implementation of F1 and F2.',
    keyFormulas: [
      'PLA: Programmable AND array + Programmable OR array (maximum design flexibility)',
      'PAL: Programmable AND array + FIXED OR array (faster and simpler)',
      'ROM: FIXED AND decoder + Programmable OR array',
      'XOR Polarity Control: x \\oplus 1 = x\' (inverted true/complement selection)',
      'Example: F1 = \\sum(0, 1, 2, 4) = (AB + AC + BC)\' | F2 = \\sum(0, 5, 6, 7) = AB + AC + A\'B\'C\''
    ],
    videoSequenceNos: [224, 225, 226, 227, 228],
    content: `
DIGITAL LOGIC DESIGN - Page no. 127 to 130

PROGRAMMABLE LOGIC DEVICES (PLDs):
Integrated circuits with configurable logic gates and flip-flops that can be customized by the designer:
1. PROM: Fixed AND array (decoder) + Programmable OR array.
2. PLA (Programmable Logic Array): Programmable AND array + Programmable OR array.
3. PAL (Programmable Array Logic): Programmable AND array + Fixed OR array.
4. FPGA (Field Programmable Gate Array): Configurable logic blocks (CLBs) with programmable interconnects.

PROGRAMMABLE LOGIC ARRAY (PLA) ARCHITECTURE:
• Replaces the fixed decoder of PROM with an array of programmable AND gates to generate ONLY the required product terms (rather than all 2^n minterms).
• Product terms are routed to programmable OR gates to generate sum of products.
• An XOR gate at each output provides programmable true/complement polarity:
  - Connect XOR to 0: Output is true (x ⊕ 0 = x).
  - Connect XOR to 1: Output is inverted / complement (x ⊕ 1 = x').

SOLVED IMPLEMENTATION EXAMPLE (PAGE 128-129 OF NOTES):
Implement the following two Boolean functions with a PLA:
  F1(A, B, C) = \\sum m(0, 1, 2, 4)
  F2(A, B, C) = \\sum m(0, 5, 6, 7)

Step 1: Simplify True and Complement on K-Maps:
• F1: 1s at 0, 1, 2, 4.
  F1' (grouping 0s at 3, 5, 6, 7):
  F1' = AB + AC + BC
  Therefore: F1 = (AB + AC + BC)'  [Utilizes 3 product terms!]
• F2: 1s at 0, 5, 6, 7.
  F2 = AB + AC + A'B'C'
  Notice that AB and AC are COMMON to both F1' and F2!

Total Unique Product Terms Required:
1. AB
2. AC
3. BC
4. A'B'C'

PLA Programming Table:
----------------------------------------------------------------
Product Term | Inputs (A B C) | Outputs (F1 [C] | F2 [T])
----------------------------------------------------------------
    AB       |   1  1  -      |       1         |    1
    AC       |   1  -  1      |       1         |    1
    BC       |   -  1  1      |       1         |    -
  A'B'C'     |   0  0  0      |       -         |    1
----------------------------------------------------------------
Where (C) indicates complement output via XOR=1, and (T) indicates true output via XOR=0.
This minimizes the hardware to only 4 AND gates and 2 OR gates!
`
  }
];
