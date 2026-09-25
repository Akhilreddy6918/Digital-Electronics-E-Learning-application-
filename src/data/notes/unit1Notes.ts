import { NoteSection } from '../../types/digitalElectronics';

export const UNIT_1_NOTES: NoteSection[] = [
  {
    id: 'sec-u1-title',
    unitId: 'unit-1',
    unitTitle: 'Unit I – Number Systems & Boolean Algebra',
    title: 'Digital Electronics Lecture Notes – Title & Syllabus Overview',
    pageNumber: 1,
    summary: 'Course title page, complete 5-unit syllabus, prescribed textbooks, reference books, and course learning outcomes.',
    keyFormulas: [
      'Textbook 1: Digital Design – Morris Mano, PHI, 3rd Edition',
      'Textbook 2: Switching Theory and Logic Design – A. Anand Kumar, PHI, 2nd Edition',
      'Textbook 3: Switching and Finite Automata Theory – Zvi Kohavi & Niraj K. Jha, 3rd Edition'
    ],
    videoSequenceNos: [1, 2],
    content: `
======================================================================
                     DIGITAL ELECTRONICS NOTES
======================================================================

COURSE SYLLABUS (UNITS I TO V):

UNIT - I: Number System and Boolean Algebra
Number Systems, Base Conversion Methods, Complements of Numbers, Codes - Binary Codes, Binary Coded Decimal Code and its Properties, Unit Distance Codes, Error Detecting and Correcting Codes.
Digital Logic Gates (AND, NAND, OR, NOR, EX-OR, EX-NOR), Properties of XOR Gates, Universal Gates, Basic Theorems and Properties, Switching Functions, Canonical and Standard Form.

UNIT - II: Minimization Techniques
Introduction, The minimization with theorems, The Karnaugh Map Method, Three, Four and Five variable K-Maps, Prime and Essential Implicants, Don't Care Map Entries, Using the Maps for Simplifying, Quine-McCluskey Method, Multilevel NAND/NOR realizations.

UNIT - III: Combinational Circuits
Design Procedure – Half Adder, Full Adder, Half Subtractor, Full Subtractor, Parallel Binary Adder, Parallel binary subtractor, Binary Multiplier, Multiplexers/DeMultiplexers, decoder, Encoder, Code Converters, Magnitude Comparator.

UNIT - IV: Sequential Circuits
Introduction, Basic Architectural Distinctions between Combinational and Sequential circuits, Latches, Flip-Flops: SR, JK, D, T and Master slave, characteristic Tables and equations, Conversion from one type of Flip-Flop to another.
Counters – Design of Single Mode Counter, Ripple Counter, Ring Counter, Shift Register, Ring counter using Shift Register.

UNIT - V: Memory Devices
Classification of memories – ROM: ROM organization, PROM, EPROM, EEPROM, RAM: RAM organization, Write operation, Read operation, Static RAM, Dynamic RAM, Programmable Logic Devices: Programmable Logic Array (PLA), Programmable Array Logic (PAL), Implementation of Combinational Logic circuits using ROM, PLA, PAL.

----------------------------------------------------------------------
TEXT BOOKS:
1. Digital Design – Morris Mano, PHI, 3rd Edition.
2. Switching Theory and Logic Design – A. Anand Kumar, PHI, 2nd Edition.
3. Switching and Finite Automata Theory – Zvi Kohavi & Niraj K. Jha, 3rd Edition, Cambridge.

REFERENCE BOOKS:
1. Introduction to Switching Theory and Logic Design – Fredriac J. Hill, Gerald R. Peterson, 3rd Ed, John Wiley & Sons Inc.
2. Digital Fundamentals – A Systems Approach – Thomas L. Floyd, Pearson, 2013.
3. Switching Theory and Logic Design – Bhanu Bhaskara – Tata McGraw Hill Publication, 2012.
4. Fundamentals of Logic Design – Charles H. Roth, Cengage Learning, 5th Edition, 2004.
5. Digital Logic Applications and Design – John M. Yarbrough, Thomson Publications, 2006.
6. Digital Logic and State Machine Design – Comer, 3rd, Oxford, 2013.

COURSE OUTCOMES:
Upon completion of the course, the student should possess the following skills:
• Be able to manipulate numeric information in different forms.
• Be able to manipulate simple Boolean expressions using the theorems and postulates of Boolean algebra and to minimize combinational functions.
• Be able to design and analyze small combinational circuits and to use standard combinational functions to build larger more complex circuits.
• Be able to design and analyze small sequential circuits and to use standard sequential functions to build larger more complex circuits.
`
  },
  {
    id: 'sec-u1-1',
    unitId: 'unit-1',
    unitTitle: 'Unit I – Number Systems & Boolean Algebra',
    title: '1. Introduction to Digital Systems & Characteristics',
    pageNumber: 5,
    summary: 'Definition of digital systems, discrete information representation, analog vs digital comparison, advantages and disadvantages.',
    keyFormulas: [
      'Digital signal: Two discrete values 0 or 1 (bit)',
      'Analog: Continuous time-varying voltage or current'
    ],
    videoSequenceNos: [1, 2],
    content: `
DIGITAL LOGIC DESIGN - Page no. 1 & 2

INTRODUCTION ABOUT DIGITAL SYSTEM
A Digital system is an interconnection of digital modules and it is a system that manipulates discrete elements of information that is represented internally in the binary form.
Now a day's digital systems are used in wide variety of industrial and consumer products such as automated industrial machinery, pocket calculators, microprocessors, digital computers, digital watches, TV games and signal processing and so on.

Characteristics of Digital systems:
• Digital systems manipulate discrete elements of information.
• Discrete elements are nothing but the digits such as 10 decimal digits or 26 letters of alphabets and so on.
• Digital systems use physical quantities called signals to represent discrete elements.
• In digital systems, the signals have two discrete values and are therefore said to be binary.
• A signal in digital system represents one binary digit called a bit. The bit has a value either 0 or 1.

Analog systems vs Digital systems:
• Analog systems process information that varies continuously i.e.; they process time-varying signals that can take on any values across a continuous range of voltage, current or any physical parameter.
• Digital systems use digital circuits that can process digital signals which can take either 0 or 1 for binary system.

Advantages of Digital system over Analog system:
1. Ease of programmability:
   The digital systems can be used for different applications by simply changing the program without additional changes in hardware.
2. Reduction in cost of hardware:
   The cost of hardware gets reduced by use of digital components and this has been possible due to advances in IC technology. With ICs the number of components that can be placed in a given area of Silicon are increased which helps in cost reduction.
3. High speed:
   Digital processing of data ensures high speed of operation which is possible due to advances in Digital Signal Processing.
4. High Reliability:
   Digital systems are highly reliable; one of the reasons for that is use of error correction codes.
5. Design is easy:
   The design of digital systems which require use of Boolean algebra and other digital techniques is easier compared to analog designing.
6. Result can be reproduced easily:
   Since the output of digital systems unlike analog systems is independent of temperature, noise, humidity and other characteristics of components, the reproducibility of results is higher in digital systems than in analog systems.

Disadvantages of Digital Systems:
• Use more energy than analog circuits to accomplish the same tasks, thus producing more heat as well.
• Digital circuits are often fragile, in that if a single piece of digital data is lost or misinterpreted the meaning of large blocks of related data can completely change.
• Digital computer manipulates discrete elements of information by means of a binary code.
• Quantization error during analog signal sampling.
`
  },
  {
    id: 'sec-u1-2',
    unitId: 'unit-1',
    unitTitle: 'Unit I – Number Systems & Boolean Algebra',
    title: '2. Number Systems, Radix & Base Conversions with Solved Examples',
    pageNumber: 7,
    summary: 'Decimal, Binary, Octal, and Hexadecimal representations, radix rules, positional weights, MSB & LSB, and step-by-step conversion examples.',
    keyFormulas: [
      '1001.01_2 = [1*2^3] + [0*2^2] + [0*2^1] + [1*2^0] + [0*2^-1] + [1*2^-2] = 9.25_{10}',
      'Octal (base 8): digits 0 to 7 | Hexadecimal (base 16): digits 0-9, A-F',
      '4057.06_8 = 2095.0937_{10} | 378.93_{10} = 572.7341_8 | 5C7_{16} = 1479_{10}',
      '2598.675_{10} = A26.ACCC_{16} | 756.603_8 = 1EE.C18_{16} | B9F.AE_{16} = 5637.534_8'
    ],
    videoSequenceNos: [2, 3, 4, 5, 6, 7],
    content: `
DIGITAL LOGIC DESIGN - Page no. 3 to 7

NUMBER SYSTEM
Number system is a basis for counting various items. Modern computers communicate and operate with binary numbers which use only the digits 0 & 1. Basic number system used by humans is Decimal number system.
For Example: Let us consider decimal number 18. This number is represented in binary as 10010.
We observe that binary number system takes more digits to represent the decimal number. For large numbers we have to deal with very large binary strings. So this fact gave rise to three new number systems:
i) Octal number systems (base 8)
ii) Hexadecimal number system (base 16)
iii) Binary Coded Decimal number (BCD) system

To define any number system we have to specify:
• Base (radix r) of the number system such as 2, 8, 10 or 16.
• The base decides the total number of digits available in that number system.
• First digit in the number system is always zero and last digit in the number system is always base - 1.

Binary number system:
The binary number has a radix of 2 (r = 2). Only two digits are needed: 0 and 1. In binary system weight is expressed as power of 2.
The leftmost bit, which has the greatest weight, is called the Most Significant Bit (MSB).
The rightmost bit, which has the least weight, is called the Least Significant Bit (LSB).

Example:
1001.01_2 = [(1)*2^3] + [(0)*2^2] + [(0)*2^1] + [(1)*2^0] + [(0)*2^-1] + [(1)*2^-2]
          = [1*8] + [0*4] + [0*2] + [1*1] + [0*0.5] + [1*0.25]
          = 9.25_{10}

Equivalence Table (Decimal, Binary, Octal, Hexadecimal):
Decimal | Binary | Octal | Hexadecimal
   0    |  0000  |   0   |     0
   1    |  0001  |   1   |     1
   2    |  0010  |   2   |     2
   3    |  0011  |   3   |     3
   4    |  0100  |   4   |     4
   5    |  0101  |   5   |     5
   6    |  0110  |   6   |     6
   7    |  0111  |   7   |     7
   8    |  1000  |  10   |     8
   9    |  1001  |  11   |     9
  10    |  1010  |  12   |     A
  11    |  1011  |  13   |     B
  12    |  1100  |  14   |     C
  13    |  1101  |  15   |     D
  14    |  1110  |  16   |     E
  15    |  1111  |  17   |     F

SOLVED CONVERSION EXAMPLES:

1. Binary to Octal & Hexadecimal:
   Binary: 001 010 011 000 100 101 110 111_2 -> Octal: 1 2 3 0 4 5 6 7_8
   Binary: 0001 0010 0100 1000 1001 1010 1101 1111_2 -> Hex: 1 2 4 8 9 A D F_{16}

2. Octal to Binary:
   Convert 653_8 to binary: 6 -> 110, 5 -> 101, 3 -> 011 ==> 110101011_2

3. Octal to Decimal:
   Convert 4057.06_8 to decimal:
   = 4*8^3 + 0*8^2 + 5*8^1 + 7*8^0 + 0*8^-1 + 6*8^-2
   = 2048 + 0 + 40 + 7 + 0 + 0.09375 = 2095.09375_{10}

4. Decimal to Octal (Successive Division & Multiplication):
   Convert 378.93_{10} to octal:
   Integer part: 378 / 8 = 47 rem 2; 47 / 8 = 5 rem 7; 5 / 8 = 0 rem 5 ==> 572_8
   Fraction part: 0.93*8 = 7.44; 0.44*8 = 3.52; 0.52*8 = 4.16; 0.16*8 = 1.28 ==> .7341_8
   Result: 378.93_{10} = 572.7341_8

5. Hexadecimal to Decimal:
   Convert 5C7_{16} to decimal:
   = (5*16^2) + (C*16^1) + (7*16^0)
   = 5*256 + 12*16 + 7 = 1280 + 192 + 7 = 1479_{10}

6. Decimal to Hexadecimal:
   Convert 2598.675_{10} to Hexadecimal:
   Integer part: 2598 / 16 = 162 rem 6; 162 / 16 = 10 (A) rem 2; 10 / 16 = 0 rem 10 (A) ==> A26_{16}
   Fraction part: 0.675*16 = 10.8 (A); 0.8*16 = 12.8 (C); 0.8*16 = 12.8 (C) ==> .ACCC_{16}
   Result: 2598.675_{10} = A26.ACCC_{16}

7. Octal to Hexadecimal:
   Convert 756.603_8:
   Binary: 111 101 110 . 110 000 011
   Regroup by 4: 0001 1110 1110 . 1100 0001 1000 ==> 1EE.C18_{16}

8. Hexadecimal to Octal:
   Convert B9F.AE_{16}:
   Binary: 1011 1001 1111 . 1010 1110
   Regroup by 3: 101 110 011 111 . 101 011 100 ==> 5637.534_8
`
  },
  {
    id: 'sec-u1-3',
    unitId: 'unit-1',
    unitTitle: 'Unit I – Number Systems & Boolean Algebra',
    title: '3. Complements & Signed Binary Arithmetic (1\'s & 2\'s Complement)',
    pageNumber: 11,
    summary: 'Radix (r\'s) & diminished radix ((r-1)\'s) complements, signed numbers representation, 3 methods for 2\'s complement, and subtraction examples.',
    keyFormulas: [
      '2\'s comp = 1\'s comp + 1 = 2^n - N',
      'Special case: 1000 = -8, 10000 = -16 (value = -2^n)',
      'Subtract 14 from 46 (8-bit 2\'s comp): 00101110 + 11110010 = (1)00100000 (discard carry) -> +32',
      'Add -75 to +26 (8-bit 2\'s comp): 00011010 + 10110101 = 11001111 (no carry) -> -49'
    ],
    videoSequenceNos: [8, 9, 10, 11, 12],
    content: `
DIGITAL LOGIC DESIGN - Page no. 8 to 12

COMPLEMENTS OF NUMBERS
In digital computers to simplify the subtraction operation & for logical manipulation complements are used. There are two types of complements used in each radix system:
i) The radix complement or r's complement (e.g. 2's complement, 10's complement)
ii) The diminished radix complement or (r-1)'s complement (e.g. 1's complement, 9's complement)

Representation of signed numbers in computers:
1. Sign-Magnitude form: An additional bit called the sign bit is placed in front of the number.
   If sign bit is 0, number is positive (+). If sign bit is 1, number is negative (-).
   Example: 0 101001 = +41, 1 101001 = -41
2. Complemented forms:
   • 1's complement form
   • 2's complement form
Advantage of performing subtraction by the complement method is reduction in hardware: instead of separate adders and subtractors, only adder circuits are needed!

Representation of signed numbers:
If positive, magnitude is in true binary with sign bit 0.
If negative, magnitude is in 1's or 2's complement with sign bit 1.
Examples:
  01101   -> Sign-mag: +13 | 2's comp: +13 | 1's comp: +13
  010111  -> Sign-mag: +23 | 2's comp: +23 | 1's comp: +23
  10111   -> Sign-mag: -7  | 2's comp: -7  | 1's comp: -8
  1101010 -> Sign-mag: -42 | 2's comp: -22 | 1's comp: -21

Special case in 2's complement representation:
Whenever a signed number has a 1 in the sign bit & all 0's for magnitude bits, the decimal equivalent is -2^n (where n is number of magnitude bits).
Example: 1000 = -8, 10000 = -16.

Properties of 2's complement numbers:
1. There is one unique zero (00000000).
2. 2's complement of 0 is 0.
3. For an n-bit word including sign bit, range is -(2^{n-1}) to +(2^{n-1} - 1).

Three Methods of obtaining 2's complement:
Method 1: Obtain 1's complement (invert all bits) and add 1.
Method 2: Subtract the given n-bit number N from 2^n.
Method 3: Starting at the LSB, copy down each bit up to and including the first 1 bit encountered, and complement all remaining bits.

Example: Express -45 in 8-bit 2's complement:
+45 = 00101101
1's comp: 11010010
Add 1:    +1
Result:   11010011 (2's complement form)

Example: Express -73.75 in 12-bit 2's complement:
+73.75 = 01001001.1100
1's comp: 10110110.0011
Add 1:    +1
Result:   10110110.0100

2'S COMPLEMENT ARITHMETIC:
Add 2's complement of subtrahend to minuend:
• If carry occurs: Discard carry. MSB is 0 -> Result is positive and in normal binary form.
• If no carry: MSB is 1 -> Result is negative and in 2's complement form. Take 2's complement to find magnitude.

Solved Example 1: Subtract 14 from 46 using 8-bit 2's complement:
  +46 = 00101110
  -14 = 11110010 (2's comp of 14)
Sum   = (1) 00100000
Discard carry (1). MSB is 0 -> Result = +00100000 = +32.

Solved Example 2: Add -75 to +26 using 8-bit 2's complement:
  +26 = 00011010
  -75 = 10110101 (2's comp of 75)
Sum   = 11001111 (No carry)
MSB is 1 -> Result is negative.
Magnitude = 2's comp of 11001111 = 00110001 = 49 -> Result = -49.

1'S COMPLEMENT ARITHMETIC:
In 1's complement subtraction:
• If carry occurs: Add carry to the LSB (called End-Around Carry). MSB is 0 -> Result is positive.
• If no carry: MSB is 1 -> Result is negative in 1's comp form. Take 1's comp to get magnitude.
`
  },
  {
    id: 'sec-u1-4',
    unitId: 'unit-1',
    unitTitle: 'Unit I – Number Systems & Boolean Algebra',
    title: '4. Binary Codes, BCD, Excess-3, Gray Code & Error Detection/Correction',
    pageNumber: 13,
    summary: 'Weighted vs Non-weighted codes, reflective codes, Gray code reflection, BCD arithmetic, Excess-3 arithmetic, parity schemes, and Hamming codes.',
    keyFormulas: [
      'Reflective codes: 2421, 5211, Excess-3 (9\'s complement = 1\'s complement)',
      'BCD addition: If sum > 9 or carry generated, add 0110 (6) correction factor',
      'Hamming code: Parity bits at positions 2^{k-1} (P1, P2, P4, P8...)',
      '7-bit Hamming code format: P1 P2 D3 P4 D5 D6 D7 | Encode 1101 -> 1010101'
    ],
    videoSequenceNos: [13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
    content: `
DIGITAL LOGIC DESIGN - Page no. 13 to 25

BINARY CODES:
Codes represented in binary system with modification from original numbers:
1. Weighted Binary Codes: Obey positional weighting principles. Example: 8421 BCD, 2421, 5211, 8 4 -2 -1.
2. Non-Weighted Codes: Not positionally weighted. Example: Excess-3 code, Gray code.
3. Reflective Codes: Code for 9 is complement of code for 0, 8 is comp of 1, 7 of 2, 6 of 3, 5 of 4.
   Codes 2421, 5211, and Excess-3 are reflective, whereas 8421 is NOT.
4. Sequential Codes: Two subsequent codes differ by one in binary numerical value (8421 and Excess-3 are sequential).

GRAY CODE (Unit Distance / Reflective Code):
• Belongs to minimum change codes: only ONE bit changes between successive codewords.
• Non-weighted code, highly useful in shaft position encoders, input-output devices, and K-maps.
• Reflection method: An N-bit Gray code is obtained by reflecting the (N-1)-bit code about an axis, prefixing 0 above and 1 below.

Binary to Gray Code Conversion:
• Gray MSB = Binary MSB
• G_{N-1} = B_N XOR B_{N-1}
• Successive bits obtained by XORing adjacent binary bits.

8421 BCD CODE & ARITHMETIC:
• Each decimal digit 0-9 is represented by a 4-bit natural binary code.
• 6 illegal combinations: 1010, 1011, 1100, 1101, 1110, 1111 (not part of BCD system).
• BCD Addition Rule: Add 4-bit groups. If sum <= 9 and no carry, it is valid. If sum > 9 or carry is produced, ADD 0110 (6_{10}) to correct the sum!
  Example: 25 + 13 = 38 (0010 0101 + 0001 0011 = 0011 1000 = 38).
  Example: 679.6 + 536.8 = 1216.4 (Add 0110 to illegal groups and propagate carries).

EXCESS-3 (XS-3) CODE:
• Obtained by adding 0011 (3) to each 8421 BCD digit.
• Self-complementing: 9's complement of decimal digit equals 1's complement of its Excess-3 code!
• Excess-3 Addition Rule:
  - If carry is generated from a 4-bit group, ADD 0011 to that group.
  - If NO carry is generated, SUBTRACT 0011 from that group.
  Example: 37 + 28 = 65 (0110 1010 + 0101 1011 -> carry generated, correct by +0011 and -0011 -> 1001 1000 = 65_{10}).

ERROR-DETECTING CODES:
• Parity: Extra bit added to binary word.
  - Even Parity: Total number of 1s in codeword (including parity bit) is EVEN.
  - Odd Parity: Total number of 1s in codeword is ODD.
• Parity checking circuit detects single-bit errors.
• Checksums: 2-dimensional parity for data blocks in teleprocessing systems.

ERROR-CORRECTING CODES (HAMMING CODES):
• Invented by Richard Hamming. Single-bit error correction requires minimum distance d_{min} >= 3.
• Parity bits P1, P2, P4, P8... placed at bit positions that are powers of 2 (1, 2, 4, 8...).
• 7-Bit Hamming Code Format:
  Bit Position:  1   2   3   4   5   6   7
  Designation:  P1  P2  D3  P4  D5  D6  D7

Example: Encode data bits 1101 (D3=1, D5=1, D6=0, D7=1) into 7-bit even parity Hamming code:
• P1 checks bits 1, 3, 5, 7: P1 ^ 1 ^ 1 ^ 1 = even -> P1 = 1
• P2 checks bits 2, 3, 6, 7: P2 ^ 1 ^ 0 ^ 1 = even -> P2 = 0
• P4 checks bits 4, 5, 6, 7: P4 ^ 1 ^ 0 ^ 1 = even -> P4 = 0
Resulting Hamming Codeword: 1010101.

Error Detection:
If received word is 1001001:
• C1 (bits 1,3,5,7) = 1^0^0^1 = 0
• C2 (bits 2,3,6,7) = 0^0^0^1 = 1
• C4 (bits 4,5,6,7) = 1^0^0^1 = 0
Error word C4 C2 C1 = 0 1 0 = 2_{10} -> Bit position 2 is in error! Inverting bit 2 restores correct data.
`
  },
  {
    id: 'sec-u1-5',
    unitId: 'unit-1',
    unitTitle: 'Unit I – Number Systems & Boolean Algebra',
    title: '5. Digital Logic Gates, Properties of XOR & Universal Gates',
    pageNumber: 26,
    summary: 'AND, OR, NOT, NAND, NOR, XOR, XNOR truth tables, XOR algebraic identities, and universal gate implementations.',
    keyFormulas: [
      'XOR: X \\oplus Y = X\'Y + XY\' | X \\oplus 0 = X | X \\oplus 1 = X\' | X \\oplus X = 0 | X \\oplus X\' = 1',
      'NAND and NOR are Universal Gates (can realize NOT, AND, OR)',
      'NOT via NAND: (X*X)\' = X\' | AND via NAND: ((X*Y)\')\' = XY | OR via NAND: (X\'*Y\')\' = X + Y'
    ],
    videoSequenceNos: [26, 27, 28, 29, 30],
    circuitIds: ['gate-and', 'gate-or', 'gate-not', 'gate-nand', 'gate-nor', 'gate-xor'],
    content: `
DIGITAL LOGIC DESIGN - Page no. 26 & 27

DIGITAL LOGIC GATES:
Boolean functions are expressed in terms of AND, OR, and NOT operations.
1. AND Gate: F = x . y (Output 1 only when all inputs are 1)
2. OR Gate: F = x + y (Output 1 when any input is 1)
3. Inverter (NOT): F = x' (Inverts logic state)
4. Buffer: F = x (Passes logic state unchanged)
5. NAND Gate: F = (x . y)' (Universal gate, inverted AND)
6. NOR Gate: F = (x + y)' (Universal gate, inverted OR)
7. Exclusive-OR (XOR): F = x'y + xy' = x ⊕ y (Odd function: output 1 when inputs differ)
8. Exclusive-NOR (XNOR / Equivalence): F = xy + x'y' = (x ⊕ y)' (Output 1 when inputs are equal)

PROPERTIES OF XOR GATES:
• Definition: XOR represents the "not-equal" function.
• Identities:
  - X ⊕ 0 = X
  - X ⊕ 1 = X'
  - X ⊕ X = 0
  - X ⊕ X' = 1
• Properties:
  - Commutative: X ⊕ Y = Y ⊕ X
  - Associative: (X ⊕ Y) ⊕ W = X ⊕ (Y ⊕ W)

UNIVERSAL LOGIC GATES:
NAND and NOR gates are called Universal Gates because any digital circuit or fundamental logic gate (NOT, AND, OR) can be implemented using NAND gates alone or NOR gates alone.

NAND Realization of Basic Gates:
1. NOT Gate:
   Connect both inputs of NAND gate together:
   F = (X . X)' = X'
2. AND Gate:
   Follow NAND gate with a NAND inverter:
   F = ((X . Y)')' = X . Y
3. OR Gate:
   Apply inverted inputs to NAND gate (by DeMorgan's Law):
   F = (X' . Y')' = X'' + Y'' = X + Y
`
  },
  {
    id: 'sec-u1-6',
    unitId: 'unit-1',
    unitTitle: 'Unit I – Number Systems & Boolean Algebra',
    title: '6. Boolean Algebra, Huntington Postulates, Consensus Theorem & Canonical Forms',
    pageNumber: 28,
    summary: 'Boolean postulates, Huntington axioms (1904), duality principle, De Morgan theorems, Consensus theorem proof, canonical SOP and POS representations.',
    keyFormulas: [
      'DeMorgan: (A + B)\' = A\'B\' and (AB)\' = A\' + B\'',
      'Consensus Theorem: AB + A\'C + BC = AB + A\'C',
      'Canonical SOP: F = \\sum m(1, 2, 4, 6) | Canonical POS: F = \\prod M(0, 3, 5, 7)',
      'm_j = M_j\' (Minterm is complement of corresponding Maxterm)'
    ],
    videoSequenceNos: [31, 32, 33, 34, 35, 36, 37, 38],
    content: `
DIGITAL LOGIC DESIGN - Page no. 28 to 38

BOOLEAN ALGEBRA & HUNTINGTON POSTULATES:
In 1854, George Boole developed Boolean algebra. In 1938, Claude Shannon applied two-valued Boolean switching algebra to electrical switching circuits. Formal definition uses postulates formulated by E. V. Huntington in 1904.

Axioms and Laws of Boolean Algebra:
• Closure: Closed with respect to binary operators (+) and (.)
• Identity: A + 0 = A, A . 1 = A
• Null law: A + 1 = 1, A . 0 = 0
• Idempotent law: A + A = A, A . A = A
• Inversion: (A')' = A, A + A' = 1, A . A' = 0
• Commutative: A + B = B + A, A . B = B . A
• Associative: A + (B + C) = (A + B) + C, A(BC) = (AB)C
• Distributive: A . (B + C) = AB + AC, A + BC = (A + B)(A + C)
• Absorption: A + AB = A, A(A + B) = A
• Redundant Literal Rule: A + A'B = A + B, A(A' + B) = AB

DEMORGAN'S THEOREMS:
1. (A + B)' = A' . B' (Complement of sum equals product of complements)
2. (A . B)' = A' + B' (Complement of product equals sum of complements)
Generalized: (A + B + ... + Z)' = A' . B' ... Z'

CONSENSUS THEOREM & PROOF:
Theorem 1: AB + A'C + BC = AB + A'C
The BC term is the consensus term and is redundant.
Proof:
  AB + A'C + BC = AB + A'C + (A + A')BC
                = AB + A'C + ABC + A'BC
                = AB(1 + C) + A'C(1 + B)
                = AB(1) + A'C(1)
                = AB + A'C  (Q.E.D.)
Dual Form Theorem 2: (A + B)(A' + C)(B + C) = (A + B)(A' + C)

PRINCIPLE OF DUALITY:
Every Boolean expression remains valid if operators (+) and (.) are interchanged, and identity elements 0 and 1 are interchanged.
Example: Dual of A + AB = A is A . (A + B) = A.

CANONICAL AND STANDARD FORMS:
• Minterm (m_j): Product term containing every variable once (complemented if 0, uncomplemented if 1).
• Maxterm (M_j): Sum term containing every variable once (complemented if 1, uncomplemented if 0).
• Relationship: m_j = (M_j)'

Canonical Sum-of-Products (SOP):
  F(A,B,C) = \\sum m(1, 4, 5, 6, 7) = A'B'C + AB'C' + AB'C + ABC' + ABC
Canonical Product-of-Sums (POS):
  F(A,B,C) = \\prod M(0, 2, 3) = (A+B+C)(A+B'+C)(A+B'+C')

Conversion of Standard SOP to Canonical Form:
Example: F = A + B'C
Multiply A by (B + B')(C + C') and B'C by (A + A')
-> F = ABC + ABC' + AB'C + AB'C' + A'B'C
-> F = \\sum m(1, 4, 5, 6, 7)
`
  }
];
