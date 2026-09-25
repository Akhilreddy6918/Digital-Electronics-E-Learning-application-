import { NoteSection, UnitId } from '../types/digitalElectronics';
import { UNIT_1_NOTES } from './notes/unit1Notes';
import { UNIT_2_NOTES } from './notes/unit2Notes';
import { UNIT_3_NOTES } from './notes/unit3Notes';
import { UNIT_4_NOTES } from './notes/unit4Notes';
import { UNIT_5_NOTES } from './notes/unit5Notes';

export interface UnitOverview {
  id: UnitId;
  number: string;
  title: string;
  scope: string;
  sectionsCount: number;
}

export const UNIT_OVERVIEWS: UnitOverview[] = [
  {
    id: 'unit-1',
    number: 'Unit I',
    title: 'Number Systems & Boolean Algebra',
    scope: 'Number systems, base conversions, 1s/2s complements, signed binary arithmetic, weighted/non-weighted codes, Gray code reflection, BCD arithmetic, Excess-3 arithmetic, Hamming codes, Logic gates, Boolean laws, and canonical forms.',
    sectionsCount: UNIT_1_NOTES.length
  },
  {
    id: 'unit-2',
    number: 'Unit II',
    title: 'Minimization Techniques',
    scope: 'Boolean minimization with theorems, 2, 3, 4, 5-variable Karnaugh Maps (K-maps), Prime & Essential Prime Implicants, Don\'t-Care conditions, Quine–McCluskey tabular method with solved examples, and multilevel NAND/NOR realizations.',
    sectionsCount: UNIT_2_NOTES.length
  },
  {
    id: 'unit-3',
    number: 'Unit III',
    title: 'Combinational Circuits',
    scope: 'Half & Full Adders, Half & Full Subtractors, Parallel Binary Adder, Ripple Carry Adder, Parallel Subtractor, Binary Adder-Subtractor, Carry Look-Ahead Adder, BCD Adder, Excess-3 Adder, Multipliers, Code Converters, Comparators, and Encoders.',
    sectionsCount: UNIT_3_NOTES.length
  },
  {
    id: 'unit-4',
    number: 'Unit IV',
    title: 'Sequential Circuits',
    scope: 'Architectural distinctions, Latches (SR, D), Flip-Flops (SR, JK, D, T, Master-Slave), Setup & Hold times, Excitation tables, Conversions, Shift Registers (SISO, SIPO, PISO, PIPO, Universal 74194), Asynchronous (Mod-6, Mod-10) & Synchronous Counters, Ring and Johnson Counters.',
    sectionsCount: UNIT_4_NOTES.length
  },
  {
    id: 'unit-5',
    number: 'Unit V',
    title: 'Memory Devices',
    scope: 'Classification of memories (ROM, PROM, EPROM, EEPROM, RAM: SRAM vs DRAM), Memory decoding with 2x4 decoder and binary cell SR latch, Programmable Logic Devices (PLA, PAL, FPGA), PLA programming tables and implementation of Boolean functions.',
    sectionsCount: UNIT_5_NOTES.length
  }
];

export const NOTE_SECTIONS: NoteSection[] = [
  ...UNIT_1_NOTES,
  ...UNIT_2_NOTES,
  ...UNIT_3_NOTES,
  ...UNIT_4_NOTES,
  ...UNIT_5_NOTES
];
