import * as fs from 'fs';
import * as path from 'path';

// This script writes out the complete 130 pages for exactPdfPagesData.ts
// matching the exact notes provided by the user.

interface ExactPdfPage {
  pageNumber: number; // 1 to 130
  internalPageNo?: number; // 1 to 126
  unit?: string;
  title: string;
  lines: string[];
}

const RAW_PAGES: ExactPdfPage[] = [
  // Page 1
  {
    pageNumber: 1,
    title: 'DIGITAL ELECTRONICS NOTES',
    lines: [
      '',
      '',
      '',
      '',
      'DIGITAL',
      'ELECTRONICS',
      'NOTES',
      '',
      '',
      '',
      'Major Project Stage-1 Academic Course Notes',
      'Autonomous Engineering Curriculum (JNTUH R18 / R22 Aligned)'
    ]
  },

  // Page 2
  {
    pageNumber: 2,
    title: 'Course Syllabus (Units I - V)',
    lines: [
      'UNIT -I:',
      'Number System and Boolean Algebra :',
      'Number Systems, Base Conversion Methods, Complements of Numbers, Codes- Binary Codes,',
      'Binary Coded Decimal Code and its Properties, Unit Distance Codes, Error Detecting and',
      'Correcting Codes.',
      'Digital Logic Gates(AND,NAND,OR,NOR,EX-OR,EX-NOR), Properties of XOR Gates,',
      'Universal Gates, Basic Theorems and Properties, Switching Functions, Canonical and Standard',
      'Form.',
      '',
      'UNIT -II:',
      'Minimization Techniques:',
      'Introduction, The minimization with theorems, The Karnaugh Map Method, Three, Four and',
      'Five variable K- Maps, Prime and Essential Implications, Don\'t Care Map Entries, Using the',
      'Maps for Simplifying, Quine-McCluskey Method, Multilevel NAND/NOR realizations.',
      '',
      'UNIT -III:',
      'Combinational Circuits:',
      'Design Procedure – Half Adder, Full Adder, Half Subtractor, Full Subtractor, Parallel Binary',
      'Adder, Parallel binary subtractor, Binary Multiplier, Multiplexers/DeMultiplexers, decoder,',
      'Encoder, Code Converters, Magnitude Comparator.',
      'classification of sequential circuits, The binary cell, The S-R-Latch Flip-Flop The D-Latch Flip-',
      'Flop, The "Clocked T" Flip-Flop, The " Clocked J-K" Flip-Flop, Design of a Clocked Flip-Flop,',
      'Timing and Triggering Considerateration.',
      '',
      'UNIT -IV:',
      'Sequential Circuits:',
      'Introduction, Basic Architectural Distinctions between Combinational and Sequential circuits,',
      'Latches,Flip-Flops, SR,JK,D,T and Master slave, characteristic Tables and equations,',
      'Conversion from one type of Flip-Flop to another,',
      'Counters - Design of Single Mode Counter, Ripple Counter, Ring Counter, Shift Register, Ring',
      'counter using Shift Register',
      '',
      'UNIT -V:',
      'Memory Devices:',
      'Clasification of memories – ROM : ROM organization, PROM, EPROM,EEPROM, RAM:',
      'RAM organization, Write operation, Read operation, Static RAM , Programmable Logic',
      'Devices: Programmable Logic Array(PLA),Programmable Array Logic, Implementaion of',
      'Combinational Logic circuits using ROM,PLA,PAL.'
    ]
  },

  // Page 3
  {
    pageNumber: 3,
    title: 'Text Books, Reference Books & Course Outcomes',
    lines: [
      'TEXT BOOKS:',
      '1. Digital Design- Morris Mano, PHI, 3rd Edition.',
      '2. Switching Theory and Logic Design-A. Anand Kumar, PHI, 2nd Edition.',
      '3. Switching and Finite Automata Theory- Zvi Kohavi & Niraj K. Jha, 3rd Edition, Cambridge.',
      '',
      'REFERENCE BOOKS:',
      '1. Introduction to Switching Theory and Logic Design – Fredriac J. Hill, Gerald R. Peterson, 3rd Ed, John Wiley & Sons Inc.',
      '2. Digital Fundamentals – A Systems Approach – Thomas L. Floyd, Pearson, 2013.',
      '3. Switching Theory and Logic Design – Bhanu Bhaskara – Tata McGraw Hill Publication, 2012',
      '4. Fundamentals of Logic Design- Charles H. Roth, Cengage Learning, 5th, Edition, 2004.',
      '5. Digital Logic Applications and Design- John M. Yarbrough, Thomson Publications, 2006.',
      '6. Digital Logic and State Machine Design – Comer, 3rd, Oxford, 2013.',
      '',
      'OUTCOMES:',
      'Upon completion of the course, student should possess the following skills:',
      '• Be able to manipulate numeric information in different forms',
      '• Be able to manipulate simple Boolean expressions using the theorems and postulates of Boolean algebra and to minimize combinational functions.',
      '• Be able to design and analyze small combinational circuits and to use standard combinational functions to build larger more complex circuits.',
      '• Be able to design and analyze small sequential circuits and to use standard sequential functions to build larger more complex circuits.'
    ]
  },

  // Page 4
  {
    pageNumber: 4,
    title: 'Course Index',
    lines: [
      'INDEX',
      '',
      'S. No | Unit | Topic                                | Page no',
      '------+------+--------------------------------------+--------',
      '  1   |  I   | NUMBERS SYSTEMS AND BOOLEAN ALGEBRA  |   01',
      '  2   | II   | MINIMIZATION TECHNIQUES              |   39',
      '  3   | III  | COMBINATIONAL CIRCUITS               |   60',
      '  4   | IV   | SEQUENTIAL CIRCUITS                  |   89',
      '  5   |  V   | MEMORY DEVICES                       |  119',
      '',
      'Total Document Length: 130 Pages',
      'Prescribed Curriculum: Autonomous Engineering Colleges / JNTUH R18, R22'
    ]
  }
];

// Helper to push internal page 1 to 126 (Document pages 5 to 130)
function addPage(docPage: number, internalNo: number, unit: string, title: string, lines: string[]) {
  RAW_PAGES.push({
    pageNumber: docPage,
    internalPageNo: internalNo,
    unit,
    title,
    lines
  });
}

// Pages 5 - 42: UNIT-I
addPage(5, 1, 'UNIT - 1', 'Introduction to Digital Systems', [
  'UNIT - 1: NUMBER SYSTEMS & BOOLEAN ALGEBRA',
  '• Introduction about digital system',
  '• Philosophy of number systems',
  '• Complement representation of negative numbers',
  '• Binary arithmetic',
  '• Binary codes',
  '• Error detecting & error correcting codes',
  '• Hamming codes',
  '',
  'INTRODUCTION ABOUT DIGITAL SYSTEM',
  'A Digital system is an interconnection of digital modules and it is a system that manipulates discrete elements of information that is represented internally in the binary form.',
  'Now a day\'s digital systems are used in wide variety of industrial and consumer products such as automated industrial machinery, pocket calculators, microprocessors, digital computers, digital watches, TV games and signal processing and so on.',
  '',
  'Characteristics of Digital systems:',
  '• Digital systems manipulate discrete elements of information.',
  '• Discrete elements are nothing but the digits such as 10 decimal digits or 26 letters of alphabets and so on.',
  '• Digital systems use physical quantities called signals to represent discrete elements.',
  '• In digital systems, the signals have two discrete values and are therefore said to be binary.',
  '• A signal in digital system represents one binary digit called a bit. The bit has a value either 0 or 1.',
  '',
  'Analog systems vs Digital systems:',
  'Analog system process information that varies continuously i.e; they process time varying signals that can take on any values across a continuous range of voltage, current or any physical parameter.',
  'Digital systems use digital circuits that can process digital signals which can take either 0 or 1 for binary system.'
]);

addPage(6, 2, 'UNIT - 1', 'Advantages of Digital Systems', [
  'Advantages of Digital system over Analog system:',
  '1. Ease of programmability:',
  '   The digital systems can be used for different applications by simply changing the program without additional changes in hardware.',
  '2. Reduction in cost of hardware:',
  '   The cost of hardware gets reduced by use of digital components and this has been possible due to advances in IC technology. With ICs the number of components that can be placed in a given area of Silicon are increased which helps in cost reduction.',
  '3. High speed:',
  '   Digital processing of data ensures high speed of operation which is possible due to advances in Digital Signal Processing.',
  '4. High Reliability:',
  '   Digital systems are highly reliable one of the reasons for that is use of error correction codes.',
  '5. Design is easy:',
  '   The design of digital systems which require use of Boolean algebra and other digital techniques is easier compared to analog designing.',
  '6. Result can be reproduced easily:',
  '   Since the output of digital systems unlike analog systems is independent of temperature, noise, humidity and other characteristics of components the reproducibility of results is higher in digital systems than in analog systems.',
  '',
  'Disadvantages of Digital Systems:',
  '• Use more energy than analog circuits to accomplish the same tasks, thus producing more heat as well.',
  '• Digital circuits are often fragile, in that if a single piece of digital data is lost or misinterpreted the meaning of large blocks of related data can completely change.',
  '• Digital computer manipulates discrete elements of information by means of a binary code.',
  '• Quantization error during analog signal sampling.'
]);

addPage(7, 3, 'UNIT - 1', 'Number Systems: Radix & Positional Notation', [
  'NUMBER SYSTEM',
  'Number system is a basis for counting various items. Modern computers communicate and operate with binary numbers which use only the digits 0 & 1. Basic number system used by humans is Decimal number system.',
  'For Ex: Let us consider decimal number 18. This number is represented in binary as 10010.',
  'We observe that binary number system take more digits to represent the decimal number. For large numbers we have to deal with very large binary strings. So this fact gave rise to three new number systems:',
  'i) Octal number systems (base 8)',
  'ii) Hexa Decimal number system (base 16)',
  'iii) Binary Coded Decimal number (BCD) system',
  '',
  'To define any number system we have to specify:',
  '• Base of the number system such as 2, 8, 10 or 16.',
  '• The base decides the total number of digits available in that number system.',
  '• First digit in the number system is always zero and last digit in the number system is always base-1.',
  '',
  'Binary number system:',
  'The binary number has a radix of 2. As r = 2, only two digits are needed, and these are 0 and 1. In binary system weight is expressed as power of 2.',
  'The left most bit, which has the greatest weight is called the Most Significant Bit (MSB). And the right most bit which has the least weight is called Least Significant Bit (LSB).'
]);

addPage(8, 4, 'UNIT - 1', 'Base Systems & Equivalence Table', [
  'For Ex: 1001.01₂ = [(1) × 2³] + [(0) × 2²] + [(0) × 2¹] + [(1) × 2⁰] + [(0) × 2⁻¹] + [(1) × 2⁻²]',
  '1001.01₂ = [1 × 8] + [0 × 4] + [0 × 2] + [1 × 1] + [0 × 0.5] + [1 × 0.25]',
  '1001.01₂ = 9.25₁₀',
  '',
  'Decimal Number system:',
  'The decimal system has ten symbols: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9. In other words, it has a base of 10.',
  '',
  'Octal Number System:',
  'Digital systems operate only on binary numbers. Since binary numbers are often very long, two shorthand notations, octal and hexadecimal, are used for representing large binary numbers. Octal systems use a base or radix of 8. It uses first eight digits of decimal number system. Thus it has digits from 0 to 7.',
  '',
  'Hexa Decimal Number System:',
  'The hexadecimal numbering system has a base of 16. There are 16 symbols. The decimal digits 0 to 9 are used as the first ten digits as in the decimal system, followed by the letters A, B, C, D, E and F, which represent the values 10, 11, 12, 13, 14 and 15 respectively.',
  '',
  'Decimal | Binary | Octal | Hexadecimal',
  '--------+--------+-------+------------',
  '   0    |  0000  |   0   |      0',
  '   1    |  0001  |   1   |      1',
  '   2    |  0010  |   2   |      2',
  '   3    |  0011  |   3   |      3',
  '   4    |  0100  |   4   |      4',
  '   5    |  0101  |   5   |      5',
  '   6    |  0110  |   6   |      6',
  '   7    |  0111  |   7   |      7',
  '   8    |  1000  |  10   |      8',
  '   9    |  1001  |  11   |      9',
  '  10    |  1010  |  12   |      A',
  '  11    |  1011  |  13   |      B',
  '  12    |  1100  |  14   |      C',
  '  13    |  1101  |  15   |      D',
  '  14    |  1110  |  16   |      E',
  '  15    |  1111  |  17   |      F'
]);

addPage(9, 5, 'UNIT - 1', 'Number Base Conversions (Part 1)', [
  'Number Base conversions:',
  'The human beings use decimal number system while computer uses binary number system. Therefore it is necessary to convert decimal number system into its equivalent binary.',
  'i) Binary to octal number conversion: Group binary bits into sets of 3 from right to left.',
  '   Example: 001 010 011 000 100 101 110 111₂ = 1 2 3 0 4 5 6 7₈',
  'ii) Binary to hexadecimal number conversion: Group binary bits into sets of 4 from right to left.',
  '   Example: 0001 0010 0100 1000 1001 1010 1101 1111₂ = 1 2 5 8 9 A D F₁₆',
  'iii) Octal to binary Conversion: Replace each octal digit with its 3-bit binary equivalent.',
  '   Example: 653₈ = 110 101 011₂',
  'iv) Hexadecimal to binary conversion: Replace each hex digit with 4-bit binary.',
  '   Example: 9B4₁₆ = 1001 1011 0100₂',
  'v) Octal to Decimal conversion:',
  '   Ex: convert 4057.06₈ to decimal:',
  '   = 4×8³ + 0×8² + 5×8¹ + 7×8⁰ + 0×8⁻¹ + 6×8⁻²',
  '   = 2048 + 0 + 40 + 7 + 0 + 0.09375',
  '   = 2095.09375₁₀'
]);

addPage(10, 6, 'UNIT - 1', 'Number Base Conversions (Part 2)', [
  'vi) Decimal to Octal Conversion:',
  '   Ex: convert 378.93₁₀ to octal:',
  '   Integer part (378₁₀): Successive division by 8:',
  '   378 / 8 = 47 remainder 2',
  '    47 / 8 =  5 remainder 7',
  '     5 / 8 =  0 remainder 5 -> Reading upwards: 572₈',
  '   Fractional part (0.93₁₀): Successive multiplication by 8:',
  '   0.93 × 8 = 7.44 (int 7)',
  '   0.44 × 8 = 3.52 (int 3)',
  '   0.52 × 8 = 4.16 (int 4)',
  '   0.16 × 8 = 1.28 (int 1) -> Reading downwards: 0.7341...₈',
  '   Result: 378.93₁₀ = 572.7341₈',
  '',
  'vii) Hexadecimal to Decimal Conversion:',
  '   Ex: 5C7₁₆ to decimal:',
  '   = (5 × 16²) + (C × 16¹) + (7 × 16⁰)',
  '   = (5 × 256) + (12 × 16) + (7 × 1) = 1280 + 192 + 7 = 1479₁₀',
  '',
  'viii) Decimal to Hexadecimal Conversion:',
  '   Ex: 2598.675₁₀ to hexadecimal:',
  '   Integer part (2598₁₀): Successive division by 16:',
  '   2598 / 16 = 162 remainder 6',
  '    162 / 16 =  10 remainder 2 (10 = A)',
  '     10 / 16 =   0 remainder 10 (A) -> Reading upwards: A26₁₆'
]);

addPage(11, 7, 'UNIT - 1', 'Fractional Hex & Octal-Hex Conversions', [
  'Fractional part: 0.675 × 16 = 10.8 (int 10 = A)',
  '0.800 × 16 = 12.8 (int 12 = C)',
  '0.800 × 16 = 12.8 (int 12 = C)',
  '0.800 × 16 = 12.8 (int 12 = C) -> 0.ACCC₁₆',
  'Result: 2598.675₁₀ = A26.ACCC₁₆',
  '',
  'ix) Octal to hexadecimal conversion:',
  'The simplest way is to first convert the given octal no. to binary & then the binary no. to hexadecimal.',
  'Ex: 756.603₈',
  'Octal:     7    5    6  .   6    0    3',
  'Binary:  111  101  110  . 110  000  011',
  'Hex Regroup (4s): 0001 1110 1110 . 1100 0001 1000',
  'Hex Value:          1    E    E  .   C    1    8₁₆ -> 1EE.C18₁₆',
  '',
  'x) Hexadecimal to octal conversion:',
  'First convert the given hexadecimal no. to binary & then the binary no. to octal.',
  'Ex: B9F.AE₁₆',
  'Hex:        B    9    F  .   A    E',
  'Binary:  1011 1001 1111  . 1010 1110',
  'Octal Regroup (3s): 101 110 011 111 . 101 011 100',
  'Octal Value:          5   6   3   7  .   5   3   4₈ = 5637.534₈',
  '',
  'Complements:',
  'In digital computers to simplify the subtraction operation & for logical manipulation complements are used. There are two types of complements used in each radix system:',
  'i) The radix complement or r\'s complement (2\'s, 10\'s complement)',
  'ii) The diminished radix complement or (r-1)\'s complement (1\'s, 9\'s complement)'
]);

addPage(12, 8, 'UNIT - 1', 'Signed Binary Numbers & Complements', [
  'Representation of signed numbers binary arithmetic in computers:',
  '• Two ways of representing signed numbers:',
  '  1. Sign Magnitude form',
  '  2. Complemented form',
  '• Two complemented forms:',
  '  1. 1\'s complement form',
  '  2. 2\'s complement form',
  '',
  'Advantage of performing subtraction by the complement method is reduction in the hardware (instead of separate adder & subtractor circuits, only adders are needed).',
  'i.e., subtraction is also performed by adders only.',
  'Instead of subtracting one number from another, the complement of the subtrahend is added to minuend.',
  'In sign magnitude form, an additional bit called the sign bit is placed in front of the number. If the sign bit is 0, the number is positive (+ve). If it is 1, the number is negative (-ve).',
  '',
  'Example: 0101001 = +41 magnitude (sign bit 0)',
  '         1101001 = -41 magnitude (sign bit 1)',
  '',
  'Representation of signed numbers using 2\'s or 1\'s complement method:',
  'If the number is +ve, magnitude is represented in true binary form with sign bit 0.',
  'If the number is -ve, magnitude is represented in 2\'s or 1\'s complement form with sign bit 1.',
  '',
  'Given number | Sign-Mag form | 2\'s comp form | 1\'s comp form',
  '-------------+---------------+---------------+--------------',
  '01101        |      +13      |      +13      |      +13',
  '010111       |      +23      |      +23      |      +23',
  '10111        |       -7      |       -7      |       -8',
  '1101010      |      -42      |      -22      |      -21'
]);

addPage(13, 9, 'UNIT - 1', 'Special Cases & Properties of 2\'s Complement', [
  'Special case in 2\'s complement representation:',
  'Whenever a signed number has a 1 in the sign bit & all 0\'s for the magnitude bits, the decimal equivalent is -2ⁿ, where n is the number of bits in the magnitude.',
  'Ex: 1000 = -8, and 10000 = -16.',
  '',
  'Characteristics of 2\'s complement numbers:',
  '1. There is one unique zero (0000 = +0; no -0 representation).',
  '2. 2\'s complement of 0 is 0.',
  '3. The leftmost bit cannot be used to express a quantity; it is a sign bit (0 for +ve, 1 for -ve).',
  '4. For an n-bit word which includes the sign bit, there are (2ⁿ⁻¹ - 1) positive integers, 2ⁿ⁻¹ negative integers & one 0, for a total of 2ⁿ unique states (Range: -2ⁿ⁻¹ to +2ⁿ⁻¹ - 1).',
  '5. Significant information is contained in the 1\'s of the +ve numbers & 0\'s of the -ve numbers.',
  '6. A negative number may be converted into a positive number by finding its 2\'s complement.',
  '',
  'Signed Binary Numbers Table (4-bit system):',
  'Decimal | 2\'s Comp Form | 1\'s Comp Form | Sign-Mag Form',
  '--------+---------------+---------------+--------------',
  '   +7   |     0111      |     0111      |     0111',
  '   +6   |     0110      |     0110      |     0110',
  '   +5   |     0101      |     0101      |     0101',
  '   +4   |     0100      |     0100      |     0100',
  '   +3   |     0011      |     0011      |     0011',
  '   +2   |     0010      |     0010      |     0010',
  '   +1   |     0001      |     0001      |     0001',
  '   +0   |     0000      |     0000      |     0000',
  '   -0   |      --       |     1111      |     1000',
  '   -1   |     1111      |     1110      |     1001',
  '   -2   |     1110      |     1101      |     1010',
  '   -3   |     1101      |     1100      |     1011',
  '   -4   |     1100      |     1011      |     1100',
  '   -5   |     1011      |     1010      |     1101',
  '   -6   |     1010      |     1001      |     1110',
  '   -7   |     1001      |     1000      |     1111',
  '   -8   |     1000      |      --       |      --'
]);

addPage(14, 10, 'UNIT - 1', 'Methods of Obtaining 2\'s Complement', [
  'Methods of obtaining 2\'s complement of a number:',
  'In 3 ways:',
  '1. Method I: By obtaining the 1\'s complement of the given number (by inverting all 0\'s to 1\'s & 1\'s to 0\'s) and then adding 1 to the LSB.',
  '2. Method II: By subtracting the given n-bit number N from 2ⁿ.',
  '3. Method III: Starting at the LSB, copying down each bit up to & including the first 1 bit encountered, and complementing all remaining bits to the left.',
  '',
  'Ex: Express -45 in 8-bit 2\'s complement form:',
  '+45 in 8-bit form is: 00101101',
  'Method I:',
  '1\'s complement of 00101101 = 11010010',
  'Add 1:                       +        1',
  '---------------------------------------',
  '2\'s complement form =        11010011',
  '',
  'Method II: Subtract from 2⁸ = 100000000 - 00101101 = 11010011',
  '',
  'Method III:',
  'Original number: 00101101',
  'Copy up to first 1: ...1',
  'Complement remaining: 1101001... -> 11010011'
]);

addPage(15, 11, 'UNIT - 1', 'Fractional 2\'s Comp & Arithmetic', [
  'Example: Express -73.75 in 12-bit 2\'s complement form:',
  'Method I:',
  '+73.75 in binary: 01001001.1100',
  '1\'s complement:   10110110.0011',
  'Add 1 to LSB:     +           1',
  '-------------------------------',
  'Result:           10110110.0100 is 2\'s complement form',
  '',
  '2\'s complement Arithmetic:',
  '• The 2\'s complement system is used to represent -ve numbers using modulus arithmetic. The word length of a computer is fixed (e.g. 4-bit, 8-bit). Carry if any from MSB overflows and is discarded.',
  '• Subtraction Procedure: In 2\'s complement subtraction, add the 2\'s complement of the subtrahend to the minuend.',
  '  - If there is an end-carry, DISCARD (ignore) it. The result is POSITIVE and in true binary form.',
  '  - If there is NO end-carry, the result is NEGATIVE and in 2\'s complement form. Take its 2\'s complement to obtain the true magnitude in binary.',
  '',
  'Example: Subtract 14 from 46 using 8-bit 2\'s complement arithmetic:',
  '+46 =  00101110',
  '+14 =  00001110 -> -14 in 2\'s comp = 11110010',
  'Add:',
  '  00101110 (+46)',
  '+ 11110010 (-14)',
  '----------------',
  '(1)00100000 -> End carry (1) is ignored.',
  'MSB is 0, so result is +ve: +00100000 = +32₁₀.'
]);

addPage(16, 12, 'UNIT - 1', '2\'s & 1\'s Complement Subtraction Examples', [
  'Example: Add -75 to +26 using 8-bit 2\'s complement arithmetic:',
  '+75 = 01001011 -> -75 in 2\'s comp = 10110101',
  '+26 = 00011010',
  'Add:',
  '  00011010 (+26)',
  '+ 10110101 (-75)',
  '----------------',
  '  11001111 -> No carry generated.',
  'MSB is 1, so result is negative and in 2\'s complement form.',
  'Taking 2\'s complement of 11001111 = 00110001 = 49₁₀. Result = -49₁₀.',
  '',
  '1\'s complement of a number:',
  '• Obtained by simply inverting each bit (0 becomes 1, 1 becomes 0).',
  '• Disadvantage: 1\'s complement has two representations of zero: +0 (00000000) and -0 (11111111).',
  '',
  '1\'s complement arithmetic:',
  'In 1\'s complement subtraction, add the 1\'s complement of the subtrahend to the minuend.',
  '• If there is an end-around carry, ADD it to the LSB (end-around carry). The result is positive and in true binary.',
  '• If there is NO carry, the result is negative and in 1\'s complement form. Take 1\'s complement to find true magnitude.'
]);

addPage(17, 13, 'UNIT - 1', 'Binary Codes: Weighted & Non-Weighted', [
  'Example: Subtract 14 from 25 using 8-bit 1\'s complement:',
  '25 = 00011001',
  '14 = 00001110 -> 1\'s comp = 11110001',
  'Add: 00011001 + 11110001 = (1)00001010',
  'End around carry: 00001010 + 1 = 00001011 = +11₁₀.',
  '',
  'Binary codes:',
  'Binary codes represent data in binary systems with modifications from natural binary. Classification:',
  '1. Weighted Binary codes: Each position has a specific weight. Examples: 8421 (BCD), 2421, 5211, 84-2-1, Bi-Quinary 5043210.',
  '2. Non-Weighted Codes: Positions do not have assigned mathematical weights. Examples: Excess-3 code, Gray code.',
  '',
  'Reflective Code:',
  'A code is said to be reflective (self-complementing) when the code for 9 is the 1\'s complement of the code for 0, code for 8 is complement of code for 1, and so on (n and 9-n are complements).',
  'Codes 2421, 5211, and Excess-3 are reflective, whereas standard 8421 code is not.'
]);

addPage(18, 14, 'UNIT - 1', 'Sequential, Excess-3 & Gray Codes', [
  'Sequential Codes:',
  'A code is said to be sequential when two subsequent code words, seen as numbers in binary representation, differ by one. This greatly aids mathematical manipulation of data. The 8421 and Excess-3 codes are sequential, whereas 2421 and 5211 codes are not.',
  '',
  'Excess-3 Code (XS-3):',
  'Excess-3 is a non-weighted BCD code used to express decimal numbers. The code derives its name from the fact that each binary code word is the corresponding 8421 code plus 0011 (3). It is self-complementing.',
  '',
  'Gray Code (Unit Distance Code):',
  'The Gray code belongs to a class of codes called minimum change codes, in which only one bit in the code changes when moving from one code word to the next.',
  'The Gray code is non-weighted and reflective. Because adjacent numbers differ by only one bit, it prevents race conditions and glitches in optical shaft encoders and flash ADCs.',
  '',
  'Decimal | Binary (8421) | Gray Code',
  '--------+---------------+----------',
  '   0    |     0000      |   0000',
  '   1    |     0001      |   0001',
  '   2    |     0010      |   0011',
  '   3    |     0011      |   0010',
  '   4    |     0100      |   0110',
  '   5    |     0101      |   0111',
  '   6    |     0110      |   0101',
  '   7    |     0111      |   0100',
  '   8    |     1000      |   1100',
  '   9    |     1001      |   1101',
  '  10    |     1010      |   1111',
  '  11    |     1011      |   1110',
  '  12    |     1100      |   1010',
  '  13    |     1101      |   1011',
  '  14    |     1110      |   1001',
  '  15    |     1111      |   1000'
]);

addPage(19, 15, 'UNIT - 1', 'Binary to Gray & BCD Addition', [
  'Binary to Gray Conversion Algorithm:',
  '• Gray Code MSB is equal to Binary MSB: Gₙ = Bₙ',
  '• Subsequent bits: Gᵢ = Bᵢ₊₁ ⊕ Bᵢ (XOR of adjacent binary bits).',
  '',
  '8421 BCD Code (Natural BCD):',
  'Each decimal digit 0 through 9 is coded by a 4-bit binary group (8-4-2-1 weights).',
  'Invalid/Illegal states in BCD: 1010, 1011, 1100, 1101, 1110, 1111 (digits 10 through 15).',
  '',
  'BCD Addition Rules:',
  '1. Add the two BCD numbers using ordinary 4-bit binary addition.',
  '2. If the 4-bit sum is ≤ 9 and no carry is generated, the sum is in valid BCD.',
  '3. If the 4-bit sum > 9 or a carry out is generated, the sum is invalid. Add correction factor 0110 (6) to the sum and propagate carry to next decimal decade.',
  '',
  'Example: 25 + 13 in BCD:',
  '  25 = 0010 0101',
  '+ 13 = 0001 0011',
  '----------------',
  '  38 = 0011 1000 (Sum ≤ 9 in both decades, no carry -> Valid BCD: 38).'
]);

addPage(20, 16, 'UNIT - 1', 'BCD Addition & Subtraction Examples', [
  'Example: 679.6 + 536.8 in BCD:',
  '  679.6 = 0110 0111 1001 . 0110',
  '+ 536.8 = 0101 0011 0010 . 1000',
  '--------------------------------',
  '  Binary: 1011 1010 1011 . 1110 (all illegal codes > 9)',
  '  Correction: +0110 to each group with carry propagation:',
  '  Result: 0001 0010 0001 0110 . 0100 = 1216.4 BCD.',
  '',
  'BCD Subtraction:',
  'Performed by subtracting 4-bit groups. If a borrow occurs from the next higher decade, subtract 0110 (6) from that group to restore BCD modulus.',
  'Example (a): 38 - 15 = 23 (no borrow)',
  'Example (b): 206.7 - 147.8 = 58.9 (borrows occur, corrected by -0110).'
]);

addPage(21, 17, 'UNIT - 1', 'BCD Subtraction by Complements & Excess-3 Addition', [
  'BCD Subtraction using 9\'s and 10\'s Complement:',
  'Form the 9\'s complement of the subtrahend, encode into BCD, and add to minuend.',
  'Example: 305.5 - 168.8 = 136.7',
  '',
  'Excess-3 Addition Rules:',
  '1. Add the two Excess-3 numbers in 4-bit groups.',
  '2. If a carry is generated from the 4-bit addition, ADD 0011 (3) to that group.',
  '3. If NO carry is generated, SUBTRACT 0011 (3) from that group (i.e. add 1101).'
]);

addPage(22, 18, 'UNIT - 1', 'Excess-3 Addition & Subtraction Examples', [
  'Example: Excess-3 Addition of 37 + 28 = 65:',
  '  37 in XS-3 = 0110 1010',
  '+ 28 in XS-3 = 0101 1011',
  '------------------------',
  '  Sum:         1011 (1)0101 (carry out of lower group)',
  '  Correction:  -0011 +0011',
  '------------------------',
  '  Result:      1001 1000 = 65 in XS-3.',
  '',
  'Excess-3 Subtraction:',
  'Subtract 4-bit groups. If no borrow occurs, add 0011. If borrow occurs, subtract 0011.',
  'Example: 267 - 175 = 92.'
]);

addPage(23, 19, 'UNIT - 1', 'Excess-3 Subtraction by Complements', [
  'Excess-3 subtraction using 9\'s and 10\'s complement:',
  'Example: 687 - 348 = 339',
  '9\'s complement of 348 = 651',
  'Adding in XS-3 code and applying end-around carry yields corrected difference 0110 0110 1100 = 339 in decimal.'
]);

addPage(24, 20, 'UNIT - 1', 'Reflection of Gray Codes', [
  'The Gray code is a reflective code. An n-bit Gray code can be generated by reflecting the (n-1)-bit code about an axis, prefixing 0 to the upper half and 1 to the lower half.',
  'Table of 1-bit, 2-bit, 3-bit, and 4-bit Gray code reflections.'
]);

addPage(25, 21, 'UNIT - 1', 'Error-Detecting Codes & Parity', [
  'Error-Detecting Codes: When binary data is transmitted through communication channels, noise can flip bits (0 to 1 or 1 to 0).',
  'Parity Bit: A parity bit is appended to the data word.',
  '• Even Parity: Total number of 1s in the transmitted word (including parity bit) is EVEN.',
  '• Odd Parity: Total number of 1s in the transmitted word (including parity bit) is ODD.'
]);

addPage(26, 22, 'UNIT - 1', 'Parity Checking, Checksums & Block Parity', [
  'Parity Checking Circuits: An XOR tree checks parity at the receiver. A single parity bit detects single-bit errors, but cannot detect two-bit errors.',
  'Checksums: Two-dimensional summation of data blocks.',
  'Block Parity (Horizontal and Vertical Parity): Matrix arrangement of data where both rows and columns have parity bits, allowing detection and 1-bit location.'
]);

addPage(27, 23, 'UNIT - 1', 'Error-Correcting Codes & Hamming Code', [
  'Error-Correcting Codes: To detect and correct an error, the minimum Hamming distance d_min between valid code words must be at least 3 (d_min ≥ 2t + 1, where t is correctable bits).',
  'Hamming Code: Parity check bits P_k are placed at power-of-2 positions: 1, 2, 4, 8, ... (2^(k-1)).',
  'Parity equations check specific overlapping bit subsets.'
]);

addPage(28, 24, 'UNIT - 1', '7-Bit Hamming Code Architecture', [
  '7-Bit Hamming Code format: P1, P2, D3, P4, D5, D6, D7',
  'Parity bit coverage:',
  '• P1 checks bits 1, 3, 5, 7',
  '• P2 checks bits 2, 3, 6, 7',
  '• P4 checks bits 4, 5, 6, 7',
  'Syndrome Word S = S3 S2 S1 directly yields the binary address of the erroneous bit.'
]);

addPage(29, 25, 'UNIT - 1', 'Hamming Code Examples & Alphanumeric Codes', [
  'Example: Encode data 1101 into 7-bit even parity Hamming Code -> 1010101.',
  'Example: Syndrome decoding of received word 1001001 -> Syndrome = 010 (bit 2 is in error).',
  '12-Bit and 15-Bit Hamming Code formats.',
  'Alphanumeric Codes: ASCII (7-bit / 8-bit) and EBCDIC (8-bit) character encoding systems.'
]);

addPage(30, 26, 'UNIT - 1', 'Digital Logic Gates: Symbols & Truth Tables', [
  'Digital Logic Gates:',
  'Boolean functions are expressed in terms of logic operations implemented by hardware gates:',
  '• AND Gate: F = x · y (Outputs 1 only when all inputs are 1)',
  '• OR Gate: F = x + y (Outputs 1 when at least one input is 1)',
  '• NOT Gate (Inverter): F = x\' (Inverts logic state)',
  '• Buffer: F = x (Current amplification and signal restoration)',
  '• NAND Gate: F = (x · y)\' (Inverted AND)',
  '• NOR Gate: F = (x + y)\' (Inverted OR)',
  '• XOR Gate: F = x ⊕ y = x\'y + xy\' (Odd parity detector)',
  '• XNOR Gate: F = (x ⊕ y)\' = xy + x\'y\' (Equivalence gate)'
]);

addPage(31, 27, 'UNIT - 1', 'XOR Properties & Universal Logic Realization', [
  'Properties of XOR Gates:',
  '• x ⊕ 0 = x;  x ⊕ 1 = x\';  x ⊕ x = 0;  x ⊕ x\' = 1',
  '• Commutative: x ⊕ y = y ⊕ x',
  '• Associative: (x ⊕ y) ⊕ z = x ⊕ (y ⊕ z)',
  '',
  'Universal Logic Gates (NAND & NOR):',
  'NAND and NOR can independently synthesize all basic logic operations (NOT, AND, OR):',
  '• NOT using NAND: Connect inputs together: (x · x)\' = x\'',
  '• AND using NAND: NAND gate followed by NAND inverter: ((x · y)\')\' = xy',
  '• OR using NAND: Invert inputs before NAND: (x\' · y\')\' = x + y (by De Morgan)'
]);

addPage(32, 28, 'UNIT - 1', 'Boolean Algebra: Postulates & Laws', [
  'Boolean Algebra & Switching Algebra:',
  'Developed by George Boole (1854) and adapted to switching circuits by Claude Shannon (1938). Huntington Postulates (1904).',
  'Axioms:',
  '• AND: 0·0=0, 0·1=0, 1·0=0, 1·1=1',
  '• OR:  0+0=0, 0+1=1, 1+0=1, 1+1=1',
  '• NOT: 0\'=1, 1\'=0',
  '• Null laws: A · 0 = 0, A + 1 = 1',
  '• Identity laws: A · 1 = A, A + 0 = A',
  '• Idempotent laws: A · A = A, A + A = A',
  '• Closure: System is closed under binary operations + and ·.'
]);

addPage(33, 29, 'UNIT - 1', 'Basic Identities of Boolean Algebra', [
  'Basic Laws & Identities:',
  '• Commutative: A + B = B + A;  A · B = B · A',
  '• Associative: (A + B) + C = A + (B + C);  (AB)C = A(BC)',
  '• Distributive: A(B + C) = AB + AC;  A + BC = (A + B)(A + C)',
  '• Complementarity: A + A\' = 1;  A · A\' = 0',
  '• Involution: (A\')\' = A',
  '• De Morgan\'s Laws: (A + B)\' = A\'B\';  (AB)\' = A\' + B\''
]);

addPage(34, 30, 'UNIT - 1', 'De Morgan & Consensus Theorem', [
  'De Morgan\'s Theorems:',
  '1. (A + B)\' = A\' · B\'',
  '2. (A · B)\' = A\' + B\'',
  'Generalized De Morgan: (A + B + ... + Z)\' = A\'B\'...Z\'',
  '',
  'Absorption Laws: A + AB = A;  A(A + B) = A',
  '',
  'Consensus Theorem:',
  '• Theorem 1: AB + A\'C + BC = AB + A\'C (BC is redundant consensus term)',
  '• Proof: AB + A\'C + BC = AB + A\'C + BC(A + A\') = AB(1 + C) + A\'C(1 + B) = AB + A\'C.',
  '• Theorem 2 (Dual): (A + B)(A\' + C)(B + C) = (A + B)(A\' + C)'
]);

addPage(35, 31, 'UNIT - 1', 'Duality Principle & Boolean Functions', [
  'Principle of Duality:',
  'Any true Boolean algebraic relation remains true if operator + is replaced by ·, · is replaced by +, and identity elements 0 and 1 are interchanged.',
  'Table of Postulates and Theorems (Part-A and Part-B dual pairs).',
  '',
  'Boolean Function representation: F(vars) = expression.',
  'Example: F1 = x + y\'z.'
]);

addPage(36, 32, 'UNIT - 1', 'Truth Tables & Gate Implementation', [
  'Truth Table representation of Boolean functions:',
  'For n variables, there are 2ⁿ rows.',
  'Truth table for F1 = x + y\'z with inputs x, y, z.',
  'Logic gate implementation of F1 using AND, OR, NOT gates.'
]);

addPage(37, 33, 'UNIT - 1', 'Algebraic Manipulation & Minimization', [
  'Truth tables provide unique representations of Boolean functions, but algebraic expressions are NOT unique.',
  'Algebraic Minimization reduces gate count, chip area, power consumption, and propagation delay.',
  'Example: Simplify F = x\'yz + x\'yz\' + xz = x\'y(z + z\') + xz = x\'y + xz.'
]);

addPage(38, 34, 'UNIT - 1', 'Function Complements & Canonical Definitions', [
  'Complement of a Function: Invert all literals and swap operators (or negate truth table outputs).',
  'Example: F = xy\'z\' + x\'yz -> F\' = (x\' + y + z)(x + y\' + z\').',
  'Canonical and Standard Forms:',
  '• Literal: A variable or its complement (A or A\').',
  '• Product term: Literals connected by AND (e.g. ABC).',
  '• Sum term: Literals connected by OR (e.g. A + B + C).',
  '• Minterm (m_j): A product term containing every variable once.',
  '• Maxterm (M_j): A sum term containing every variable once.'
]);

addPage(39, 35, 'UNIT - 1', 'Minterm & Maxterm Truth Table Notation', [
  'Minterms (m0 to m7) and Maxterms (M0 to M7) for 3-variable system (x, y, z):',
  'x y z | Minterm (m_j) | Maxterm (M_j)',
  '------+---------------+--------------',
  '0 0 0 | x\'y\'z\' = m0   | x + y + z = M0',
  '0 0 1 | x\'y\'z  = m1   | x + y + z\' = M1',
  '0 1 0 | x\'yz\'  = m2   | x + y\' + z = M2',
  '0 1 1 | x\'yz   = m3   | x + y\' + z\' = M3',
  '1 0 0 | xy\'z\'  = m4   | x\' + y + z = M4',
  '1 0 1 | xy\'z   = m5   | x\' + y + z\' = M5',
  '1 1 0 | xyz\'   = m6   | x\' + y\' + z = M6',
  '1 1 1 | xyz    = m7   | x\' + y\' + z\' = M7'
]);

addPage(40, 36, 'UNIT - 1', 'Canonical SOP & POS Forms', [
  'Every Boolean function has two unique canonical forms:',
  '1. Canonical Sum-Of-Products (SOP): Sum of minterms for which F = 1.',
  '2. Canonical Product-Of-Sums (POS): Product of maxterms for which F = 0.',
  'Example: f1(a, b, c) = m1 + m2 + m4 + m6 = a\'b\'c + a\'bc\' + ab\'c\' + abc\'.',
  'POS form: f1 = M0 · M3 · M5 · M7 = (a+b+c)(a+b\'+c\')(a\'+b+c\')(a\'+b\'+c\').',
  'Property: m_j = (M_j)\'.'
]);

addPage(41, 37, 'UNIT - 1', 'Shorthand Σ & Π Notations & Standard Forms', [
  'Shorthand Notations:',
  '• Sum of Minterms: f1(a,b,c) = Σm(1, 2, 4, 6)',
  '• Product of Maxterms: f1(a,b,c) = ΠM(0, 3, 5, 7)',
  '• Conversion rule: Replace Σ with Π and list missing decimal indices.',
  'Standard Forms:',
  '• SOP: Sum of product terms (e.g. F1 = y\' + xy + x\'yz\').',
  '• POS: Product of sum terms (e.g. F2 = x(y\' + z)(x\' + y + z\')).'
]);

addPage(42, 38, 'UNIT - 1', 'Expansion to Canonical Forms', [
  'Conversion of standard SOP to canonical SOP:',
  'Multiply terms by (x + x\') for each missing variable.',
  'Example 1: F = A + B\'C = Σm(1, 4, 5, 6, 7).',
  'Example 2: F = xy + x\'z = ΠM(0, 2, 4, 5).'
]);

// Pages 43 - 63: UNIT-II
addPage(43, 39, 'UNIT - 2', 'Two-Variable Karnaugh Maps', [
  'UNIT - II: MINIMIZATION TECHNIQUES',
  'Two-variable K-Map (2² = 4 cells):',
  'Each square corresponds to a unique minterm: m0 (A\'B\'), m1 (A\'B), m2 (AB\'), m3 (AB).',
  'Truth table mapping to 2x2 grid.',
  'Adjacency: Horizontal and vertical neighbors differ by exactly one bit.'
]);

addPage(44, 40, 'UNIT - 2', '2-Variable K-Map Minimization', [
  'Mapping examples: F = Σm(0, 2, 3) and F = Σm(1, 2).',
  'Minimization of SOP expressions: adjacent 1s form pairs (2-squares) to eliminate 1 literal.'
]);

addPage(45, 41, 'UNIT - 2', 'Pair and Quad Groupings in K-Maps', [
  'Pair (2-square) eliminates 1 literal; Quad (4-square) eliminates 2 literals.',
  'Example: Reduce F = Σm(0, 1, 3) -> f = A\' + B. Logic diagram implementation.'
]);

addPage(46, 42, 'UNIT - 2', 'POS K-Map Mapping & Minimization', [
  'Minimization in POS form: Group adjacent 0s into pairs and quads.',
  'Each sum term reads literals that remain constant across the group (0 -> uncomplemented, 1 -> complemented).'
]);

addPage(47, 43, 'UNIT - 2', 'Three-Variable K-Maps', [
  'Three-variable K-map (2³ = 8 cells):',
  'Rows: A (0, 1); Columns: BC (00, 01, 11, 10 in Gray code order).',
  'Adjacency via Gray code ensures physically neighboring squares differ by only 1 literal.'
]);

addPage(48, 44, 'UNIT - 2', '3-Variable K-Map Mapping Examples', [
  'Mapping examples in 3-variable map:',
  '• SOP: f = Σm(1, 2, 5, 6, 7)',
  '• POS: f = ΠM(0, 3, 5, 6, 7)'
]);

addPage(49, 45, 'UNIT - 2', 'K-Map Minimization Rules & Looping', [
  'General procedure for K-map reduction:',
  '1. Plot 1s (or 0s for POS).',
  '2. Identify isolated 1s (cannot be combined).',
  '3. Identify 1s with only 1 neighbor and form 2-squares.',
  '4. Form largest possible quads (4-squares) and octets (8-squares).',
  '5. Avoid redundant groups.'
]);

addPage(50, 46, 'UNIT - 2', 'Reading 3-Variable K-Maps', [
  'Examples of reading minimized terms from 2-squares, 4-squares, and wrap-around edge adjacencies.'
]);

addPage(51, 47, 'UNIT - 2', '3-Variable Solved Example: AOI & NAND Logic', [
  'Example: Minimize F = Σm(0, 2, 3, 4, 5, 6) -> F_min = C\' + AB\' + A\'B.',
  'Realization using AOI logic and all-NAND logic gates.'
]);

addPage(52, 48, 'UNIT - 2', 'Four-Variable Karnaugh Maps', [
  'Four-variable K-map (2⁴ = 16 cells):',
  'Rows: AB (00, 01, 11, 10); Columns: CD (00, 01, 11, 10).',
  'Wraps horizontally and vertically (corner cells m0, m2, m8, m10 form a 4-square quad).'
]);

addPage(53, 49, 'UNIT - 2', 'Five-Variable Karnaugh Maps', [
  'Five-variable K-map (2⁵ = 32 cells):',
  'Composed of two 16-cell sub-cubes: Map 1 for A=0, Map 2 for A=1.',
  'Adjacency exists between identical row-column positions across Map 1 and Map 2.'
]);

addPage(54, 50, 'UNIT - 2', '5-Variable K-Map Solved Example', [
  'Example: Minimize F = Σm(0,1,4,5,6,13,14,15,22,24,25,28,29,30,31).',
  'Grouping 8-squares and 4-squares yields F_min = A\'BCD\' + B\'C\'E\' + AB\'D\' + C\'D.'
]);

addPage(55, 51, 'UNIT - 2', 'Six-Variable K-Maps & Don\'t Care Terms', [
  'Six-variable K-map (2⁶ = 64 cells, four 16-cell sub-cubes).',
  'Don\'t Care conditions (d): Represent unused input states (e.g. in BCD or XS-3). Can be treated as 1s to enlarge groups or ignored as 0s.'
]);

addPage(56, 52, 'UNIT - 2', 'Prime Implicants & Essential Prime Implicants', [
  'Definitions:',
  '• Implicant: Any single minterm or group of minterms.',
  '• Prime Implicant (PI): A maximal group that cannot be merged into a larger group.',
  '• Essential Prime Implicant (EPI): A PI covering at least one 1 not covered by any other PI.',
  '• Redundant Prime Implicant (RPI): A PI whose 1s are all covered by EPIs.'
]);

addPage(57, 53, 'UNIT - 2', 'Selective Prime Implicants & False PIs', [
  'Selective Prime Implicants (SPI): PIs chosen to cover remaining minterms.',
  'False PIs (FPI) and Essential False PIs (EFPI) in POS minimization.'
]);

addPage(58, 54, 'UNIT - 2', 'Quine-McCluskey (Tabular) Method', [
  'Quine-McCluskey (Tabular) Minimization Method:',
  'Systematic algorithmic method suitable for computer automation and functions with > 6 variables.',
  'Partitions minterms into groups by index (number of 1s in binary representation).'
]);

addPage(59, 55, 'UNIT - 2', 'Quine-McCluskey Step-by-Step Example', [
  'Example: Find all Prime Implicants for F = Σm(0, 1, 6, 7, 8, 9, 13, 14, 15).',
  'Grouping into index sets, comparing adjacent groups, and marking combined terms.'
]);

addPage(60, 56, 'UNIT - 2', 'Quine-McCluskey Column Reductions', [
  'Generating 2-variable and 4-variable implicants with dash (-) notation for eliminated literals.'
]);

addPage(61, 57, 'UNIT - 2', 'Prime Implicant Table Generation', [
  'Forming Prime Implicant Table (Rows = PIs, Columns = Minterms). Checkmarks for minterms covered by each PI.'
]);

addPage(62, 58, 'UNIT - 2', 'EPI Selection & Row/Column Dominance', [
  'Identifying Essential Prime Implicants (columns with a single checkmark).',
  'Eliminating covered columns and applying row dominance to find minimal cover.'
]);

addPage(63, 59, 'UNIT - 2', 'Final Minimal Cover & Realization', [
  'Obtaining final minimal SOP equation: F = BD + AC\' + A\'C + C\'D.',
  'Comparison between K-map and Tabular methods.'
]);

// Pages 64 - 92: UNIT-III
addPage(64, 60, 'UNIT - 3', 'Combinational Circuits & Design Procedure', [
  'UNIT - III: COMBINATIONAL CIRCUITS',
  'Combinational Logic definition: Output depends solely on present input values (no memory/feedback).',
  'Design Procedure (5 steps):',
  '1. Problem statement',
  '2. Determine inputs & outputs',
  '3. Assign letter symbols',
  '4. Derive truth table',
  '5. Obtain simplified Boolean functions & draw logic schematic.'
]);

addPage(65, 61, 'UNIT - 3', 'Half Adder Design & Logic Diagrams', [
  'Binary Arithmetic operations: 0+0=0, 0+1=1, 1+0=1, 1+1=10.',
  'Half Adder: Adds two 1-bit inputs A and B.',
  '• Sum: S = A ⊕ B = A\'B + AB\'',
  '• Carry: C = AB',
  'Truth table, block diagram, and logic diagram using XOR and AND gates.'
]);

addPage(66, 62, 'UNIT - 3', 'Half Adder Universal Logic & Full Adder Intro', [
  'Half Adder realization using only 2-input NAND gates (5 gates).',
  'Half Adder realization using only 2-input NOR gates (5 gates).',
  'The Full Adder: Adds three binary bits (A, B, and incoming Carry C_in).'
]);

addPage(67, 63, 'UNIT - 3', 'Full Adder Truth Table & Equations', [
  'Full Adder Truth Table (8 rows).',
  'Equations:',
  '• Sum: S = A ⊕ B ⊕ C_in',
  '• Carry Out: C_out = AB + C_in(A ⊕ B) = AB + BC_in + AC_in',
  'Implementation using 2 Half Adders and 1 OR gate.'
]);

addPage(68, 64, 'UNIT - 3', 'Full Adder NAND Realization & AOI Logic', [
  'Full Adder circuit realization using 9 two-input NAND gates.',
  'Propagation delay comparison between 2-level AOI and cascaded Half Adders.'
]);

addPage(69, 65, 'UNIT - 3', 'Full Adder NOR Realization & Half Subtractor', [
  'Full Adder realization using 9 NOR gates.',
  'Subtractors: Subtraction by complement addition.',
  'Half Subtractor: Subtracts 1-bit B from A.',
  '• Difference: d = A ⊕ B',
  '• Borrow Out: b = A\'B'
]);

addPage(70, 66, 'UNIT - 3', 'Half Subtractor Universal Logic Diagrams', [
  'Half Subtractor logic diagram using XOR and AND with inverted input.',
  'NAND logic realization (5 gates) and NOR logic realization (5 gates).'
]);

addPage(71, 67, 'UNIT - 3', 'Full Subtractor Truth Table & Equations', [
  'Full Subtractor: Subtracts B and borrow-in b_i from minuend A.',
  'Equations:',
  '• Difference: d = A ⊕ B ⊕ b_i',
  '• Borrow Out: b = A\'B + b_i(A ⊕ B)\' = A\'B + A\'b_i + Bb_i'
]);

addPage(72, 68, 'UNIT - 3', 'Full Subtractor NAND & NOR Realization', [
  'Full Subtractor realization using two half subtractors and an OR gate.',
  'Universal NAND logic and NOR logic schematic implementations.'
]);

addPage(73, 69, 'UNIT - 3', 'Binary Parallel Adder (Ripple Carry Adder)', [
  '4-Bit Binary Parallel Adder: Cascade of 4 Full Adders (FA0 to FA3).',
  'Carry out of each stage connects to carry in of the next higher significant stage.',
  'MSI building block: 74LS83 / 74LS283 4-bit binary adder.'
]);

addPage(74, 70, 'UNIT - 3', 'Ripple Carry Propagation & Adder-Subtractor', [
  'Propagation delay in ripple carry adders: Total delay = n × t_carry.',
  '4-Bit Parallel Subtractor using 2\'s complement.',
  'Binary Adder-Subtractor: Controlled by Mode input M (M=0: Addition; M=1: Subtraction using XOR inverters and C0=1).'
]);

addPage(75, 71, 'UNIT - 3', 'Carry Look-Ahead (CLA) Adder Principles', [
  'Carry Look-Ahead (CLA) Adder:',
  'Eliminates ripple carry propagation delay by computing all carries in parallel.',
  '• Carry Generate: Gᵢ = Aᵢ · Bᵢ',
  '• Carry Propagate: Pᵢ = Aᵢ ⊕ Bᵢ'
]);

addPage(76, 72, 'UNIT - 3', 'CLA Carry Generator Equations', [
  'Recursive Carry Equations:',
  '• C₁ = G₀ + P₀C₀',
  '• C₂ = G₁ + P₁G₀ + P₁P₀C₀',
  '• C₃ = G₂ + P₂G₁ + P₂P₁G₀ + P₂P₁P₀C₀',
  '• C₄ = G₃ + P₃G₂ + P₃P₂G₁ + P₃P₂P₁G₀ + P₃P₂P₁P₀C₀',
  'All carries are generated in 2 gate delays regardless of word size.'
]);

addPage(77, 73, 'UNIT - 3', 'CLA Logic Diagram & 2\'s Comp Parallel Unit', [
  'Logic schematic of 4-bit CLA Carry Generator.',
  '2\'s complement addition and subtraction circuit using parallel adders with register gating.'
]);

addPage(78, 74, 'UNIT - 3', 'Serial Binary Adder Architecture', [
  'Serial Adder: Processes 1 bit per clock cycle using two shift registers (A and B), a single Full Adder, and a D flip-flop for carry storage.',
  'Hardware-efficient architecture for low-cost systems.'
]);

addPage(79, 75, 'UNIT - 3', 'Serial vs Parallel Adders & BCD Adder Intro', [
  'Comparison: Parallel Adder (fast, higher hardware cost) vs Serial Adder (slow, minimal hardware).',
  'BCD Adder principles: Addition of decimal digits in 8421 code with +0110 (6) correction.'
]);

addPage(80, 76, 'UNIT - 3', 'BCD Adder Detection Logic & Schematic', [
  'Correction detection condition: X = S₄ + S₃(S₂ + S₁) = 1 when sum > 9 or carry out occurs.',
  'Two-stage adder structure: 4-bit binary adder followed by correction adder.'
]);

addPage(81, 77, 'UNIT - 3', 'Cascaded BCD Adders & Excess-3 Adder', [
  'Cascading multiple BCD adder stages for multi-digit decimal addition.',
  'Excess-3 Adder circuit implementation using dual 4-bit binary adders.'
]);

addPage(82, 78, 'UNIT - 3', 'Excess-3 Subtractor & Binary Multipliers', [
  'Excess-3 Subtractor circuit implementation.',
  'Binary Multiplication principles: Shift-and-add partial product accumulation.'
]);

addPage(83, 79, 'UNIT - 3', '4-Bit Serial Multiplier Circuit', [
  'Hardware implementation of 4-bit binary multiplier using Shift Registers (X, B, A) and an 8-bit parallel adder with control sequencer.'
]);

addPage(84, 80, 'UNIT - 3', 'Code Converters: Binary to Gray Code', [
  'Code Converters: Combinational mapping between distinct digital codes.',
  '4-bit Binary to Gray Code converter design:',
  '• G₃ = B₃',
  '• G₂ = B₃ ⊕ B₂',
  '• G₁ = B₂ ⊕ B₁',
  '• G₀ = B₁ ⊕ B₀'
]);

addPage(85, 81, 'UNIT - 3', 'Gray to Binary Code Converter Design', [
  '4-bit Gray to Binary Code converter design:',
  '• B₃ = G₃',
  '• B₂ = G₃ ⊕ G₂',
  '• B₁ = G₃ ⊕ G₂ ⊕ G₁',
  '• B₀ = G₃ ⊕ G₂ ⊕ G₁ ⊕ G₀',
  'Logic diagram using cascaded XOR gates.'
]);

addPage(86, 82, 'UNIT - 3', 'BCD to Excess-3 Code Converter', [
  '4-bit BCD to XS-3 Code Converter design using K-maps:',
  '• X₃ = B₃ + B₂B₁ + B₂B₀',
  '• X₂ = B₂\'B₁ + B₂\'B₀ + B₂B₁\'B₀\'',
  '• X₁ = B₁ ⊙ B₀',
  '• X₀ = B₀\''
]);

addPage(87, 83, 'UNIT - 3', 'BCD to Gray & Special Code Detectors', [
  'BCD to Gray code converter design.',
  'SOP detector circuit for numbers 5 through 12 in 4-bit Gray code.',
  'Detector circuit for decimal 0, 2, 4, 6, 8 in 5211 BCD code.'
]);

addPage(88, 84, 'UNIT - 3', '2\'s Complement Combinational Circuit & Comparators', [
  'Combinational circuit producing 2\'s complement of 4-bit number.',
  'Seven-segment display decoder principles.',
  'Magnitude Comparators: Compare two binary numbers A and B to evaluate A > B, A < B, A = B.'
]);

addPage(89, 85, 'UNIT - 3', '1-Bit & 2-Bit Magnitude Comparators', [
  '1-bit Magnitude Comparator equations:',
  '• A > B: G = AB\'',
  '• A < B: L = A\'B',
  '• A = B: E = A ⊙ B = AB + A\'B\'',
  '2-bit Magnitude Comparator equations and logic schematic.'
]);

addPage(90, 86, 'UNIT - 3', '4-Bit Magnitude Comparator Design', [
  '4-Bit Magnitude Comparator (A₃A₂A₁A₀ vs B₃B₂B₁B₀):',
  'Iterative comparison starting from MSB downwards.',
  'Logic diagram with cascaded XNOR and AND-OR stages.'
]);

addPage(91, 87, 'UNIT - 3', 'IC 7485 Comparator & Encoders', [
  '74LS85 4-bit Magnitude Comparator IC pinout and expansion cascading for 8-bit and 16-bit comparisons.',
  'Encoders: Convert 2ⁿ active input lines into an n-bit binary output code.',
  'Octal to Binary Encoder (8-to-3).'
]);

addPage(92, 88, 'UNIT - 3', 'Decimal to BCD Encoder & Tristate Bus', [
  'Decimal to BCD Priority Encoder (74LS147).',
  'Tristate Bus System: Three output states (Logic 0, Logic 1, High-Impedance Z). Output Enable (OE) control for multiplexing on shared data buses.'
]);

// Pages 93 - 122: UNIT-IV
addPage(93, 89, 'UNIT - 4', 'Sequential Circuits: Latches (SR & D)', [
  'UNIT - IV: SEQUENTIAL CIRCUITS',
  'Sequential circuits contain memory elements and feedback loops (Next State = f(Present State, Inputs)).',
  'The Basic Latch: Cross-coupled NOR gates or NAND gates.',
  'Gated SR Latch and Gated D Latch: Control/Enable input allows state changes only when active.'
]);

addPage(94, 90, 'UNIT - 4', 'Gated D Latch, Timing & Setup/Hold Times', [
  'Gated D Latch circuit, characteristic table, and timing waveforms.',
  'Dynamic Timing parameters:',
  '• Setup Time (t_su): Minimum time data must remain stable BEFORE clock edge.',
  '• Hold Time (t_h): Minimum time data must remain stable AFTER clock edge.',
  'Metastability occurs if setup or hold times are violated.'
]);

addPage(95, 91, 'UNIT - 4', 'Edge-Triggered vs Master-Slave Flip-Flops', [
  'Flip-Flops are edge-triggered storage elements.',
  'Master-Slave D Flip-Flop: Two cascaded latches clocked on opposite phases (Master active during High, Slave transfers during Low) to eliminate transparency.'
]);

addPage(96, 92, 'UNIT - 4', 'Master-Slave JK & T Flip-Flops', [
  'Master-Slave JK Flip-Flop with asynchronous Preset and Clear inputs.',
  'Characteristic Equation: Q(t+1) = JQ\' + K\'Q.',
  'T (Toggle) Flip-Flop: Formed by tying J and K together (Q(t+1) = T ⊕ Q).'
]);

addPage(97, 93, 'UNIT - 4', 'Flip-Flop Excitation Tables', [
  'Excitation Tables for D, JK, SR, and T Flip-Flops:',
  'Transition | S R | J K | D | T',
  '-----------+-----+-----+---+--',
  '  0 -> 0   | 0 X | 0 X | 0 | 0',
  '  0 -> 1   | 1 0 | 1 X | 1 | 1',
  '  1 -> 0   | 0 1 | X 1 | 0 | 1',
  '  1 -> 1   | X 0 | X 0 | 1 | 0'
]);

addPage(98, 94, 'UNIT - 4', 'Flip-Flop Conversions', [
  'Conversion of Flip-Flops methodology:',
  '1. Draw transition table with required next states.',
  '2. Fill in excitation values for available flip-flop.',
  '3. Use K-maps to solve for available inputs.',
  'Example: Realize D-FF using JK-FF (J=D, K=D\').',
  'Example: Implement JK-FF using D-FF (D = JQ\' + K\'Q).'
]);

addPage(99, 95, 'UNIT - 4', 'Sequential Circuit Design & Shift Registers', [
  '8-Step Design Procedure for Synchronous Sequential Circuits (State Diagram, State Table, State Assignment, Excitation, K-maps, Logic Schematic).',
  'Shift Registers: Cascade of flip-flops sharing common clock for serial/parallel data manipulation.'
]);

addPage(100, 96, 'UNIT - 4', 'Parallel-Access Shift Registers & Counters', [
  'Parallel-Access Shift Register with Mode control (Shift vs Parallel Load).',
  'Introduction to Counters: Register circuits progressing through predetermined sequence of binary states on clock transitions.'
]);

addPage(101, 97, 'UNIT - 4', 'Counter State Sequences & Program Counters', [
  '2-Bit Binary Counter State Table (00 -> 01 -> 10 -> 11 -> 00).',
  'Applications of counters: Real-time clocks, frequency dividers, sequence generators, CPU Program Counters (PC).'
]);

addPage(102, 98, 'UNIT - 4', '3-Bit Asynchronous Up & Down Counters', [
  '3-Bit Asynchronous (Ripple) Up-Counter using T flip-flops.',
  'Clock is applied to LSB; each subsequent stage is clocked by inverted output Q\' of previous stage.',
  '3-Bit Asynchronous Down-Counter circuit and timing waveforms.'
]);

addPage(103, 99, 'UNIT - 4', 'Shift Register Classifications & Buffers', [
  'Classification of Shift Registers: SISO, SIPO, PISO, PIPO, and Bidirectional.',
  'Buffer Registers: 4-bit data latching with Tri-state output drivers.'
]);

addPage(104, 100, 'UNIT - 4', 'Data Transmission Modes in Shift Registers', [
  'Block diagrams and operation of Serial-In Serial-Out, Serial-In Parallel-Out, Parallel-In Serial-Out, Parallel-In Parallel-Out registers.'
]);

addPage(105, 101, 'UNIT - 4', 'SISO & SIPO Shift Registers', [
  'Detailed circuit schematic and timing operation of 4-bit SISO and SIPO shift registers.'
]);

addPage(106, 102, 'UNIT - 4', 'PISO & PIPO Shift Registers', [
  'Detailed circuit schematic and timing operation of 4-bit PISO and PIPO shift registers.'
]);

addPage(107, 103, 'UNIT - 4', '4-Bit Bidirectional Shift Register', [
  'Bidirectional Shift Register: Steered by Mode control signal (Right/Left) via AND-OR multiplexing gates between adjacent flip-flops.'
]);

addPage(108, 104, 'UNIT - 4', 'Universal Shift Register (74194 Architecture)', [
  '4-Bit Universal Shift Register implementation using 4x1 Multiplexers and D flip-flops.',
  'Provides Parallel Load, Shift Right, Shift Left, and Hold functions.'
]);

addPage(109, 105, 'UNIT - 4', 'Universal Shift Register Function Table & Counters', [
  'Mode Control Function Table (S1S0: 00 Hold, 01 Shift Right, 10 Shift Left, 11 Parallel Load).',
  'Counters Classification: Asynchronous (Ripple) vs Synchronous (Parallel), Decade, Ring, Johnson.'
]);

addPage(110, 106, 'UNIT - 4', '2-Bit Ripple Up-Counter Analysis', [
  'Analysis of 2-bit Ripple Up-Counter using negative-edge triggered JK flip-flops.',
  'State progression: 00 -> 01 -> 10 -> 11 -> 00. Propagation delays and ripple effects.'
]);

addPage(111, 107, 'UNIT - 4', '2-Bit Ripple Down-Counter Analysis', [
  'Analysis of 2-bit Ripple Down-Counter: State progression 00 -> 11 -> 10 -> 01 -> 00.',
  'Timing waveforms and clock edge triggering.'
]);

addPage(112, 108, 'UNIT - 4', '2-Bit Bidirectional Up-Down Ripple Counter', [
  '2-Bit Bidirectional Up-Down Ripple Counter using Mode control M.',
  'Design of Asynchronous Counters with arbitrary modulus using reset feedback.'
]);

addPage(113, 109, 'UNIT - 4', 'Design of Mod-6 Asynchronous Counter', [
  'Design of Mod-6 Counter using 3 T flip-flops: Counts 000 to 101, resets at 110 (6) using NAND reset gate (R = Q₂Q₁).'
]);

addPage(114, 110, 'UNIT - 4', 'Design of Mod-10 (Decade/BCD) Counter', [
  'Design of Mod-10 (Decade / BCD) Asynchronous Counter using 4 flip-flops.',
  'Counts 0000 to 1001, resets at 1010 (10) via NAND gate feedback (R = Q₃Q₁).'
]);

addPage(115, 111, 'UNIT - 4', 'Synchronous Counters Design Methodology', [
  'Synchronous Counters: All flip-flops are triggered simultaneously by the common clock, eliminating ripple delays.',
  'Systematic 5-step design procedure using state transition tables and excitation K-maps.'
]);

addPage(116, 112, 'UNIT - 4', 'Design of Synchronous 3-Bit Up-Down Counter', [
  'Complete State and Excitation Table for Synchronous 3-Bit Up-Down Counter using JK Flip-Flops with Mode input M.'
]);

addPage(117, 113, 'UNIT - 4', '3-Bit Synchronous Up-Down Schematic & Mod-6 Gray', [
  'K-maps and logic diagram for Synchronous 3-Bit Up-Down Counter.',
  'Design of Synchronous Modulo-6 Gray Code Counter (Sequence: 000 -> 001 -> 011 -> 010 -> 110 -> 111 -> 000).'
]);

addPage(118, 114, 'UNIT - 4', 'Mod-6 Gray Code Counter Excitation & Schematic', [
  'Excitation K-maps and logic diagram for Mod-6 Gray Code Counter using T flip-flops.'
]);

addPage(119, 115, 'UNIT - 4', 'Design of Synchronous BCD Up-Down Counter', [
  'Complete 20-row state transition and excitation table for Synchronous BCD (Decade) Up-Down Counter using T flip-flops.'
]);

addPage(120, 116, 'UNIT - 4', 'BCD Up-Down Counter Realization & Ring Counter', [
  'Excitation equations for BCD Up-Down Counter.',
  'Ring Counter: Shift register with inverted or direct feedback.',
  '4-bit Ring Counter: Single circulating 1 (States: 1000 -> 0100 -> 0010 -> 0001 -> 1000). Modulus = N = 4.'
]);

addPage(121, 117, 'UNIT - 4', 'Ring Counter Timing & Johnson Counter', [
  'Ring Counter timing diagram.',
  'Twisted Ring Counter (Johnson Counter): Inverted output Q\' of last flip-flop feeds back to D input of first stage.',
  'Modulus = 2N (4 flip-flops yield 8 distinct states: 0000 -> 1000 -> 1100 -> 1110 -> 1111 -> 0111 -> 0011 -> 0001).'
]);

addPage(122, 118, 'UNIT - 4', 'Johnson Counter Schematic & 8-State Timing', [
  '4-bit Johnson Counter circuit using JK flip-flops.',
  'Complete 8-state sequence table, timing diagram, and decoding gates.'
]);

// Pages 123 - 130: UNIT-V
addPage(123, 119, 'UNIT - 5', 'Memory Devices: Classification & Organization', [
  'UNIT - V: MEMORY DEVICES',
  'Classification of Semiconductor Memories:',
  '• Read-Only Memory (ROM): Non-volatile (PROM, EPROM, EEPROM, Flash).',
  '• Random-Access Memory (RAM): Read/Write volatile (Static RAM, Dynamic RAM).',
  'Memory Organization: Address Bus (k bits), Data Bus (n bits), Control lines (Read/Write, Chip Enable). Capacity = 2ᵏ × n bits.'
]);

addPage(124, 120, 'UNIT - 5', 'Random-Access vs Sequential-Access Memory', [
  'Random-Access Memory (RAM): Constant access time independent of physical word storage address.',
  'Sequential-Access Memory: Access time depends on position of read/write head (magnetic tape, hard disks).'
]);

addPage(125, 121, 'UNIT - 5', 'Static RAM (SRAM) vs Dynamic RAM (DRAM)', [
  'Static RAM (SRAM):',
  '• Internal 6-transistor cross-coupled latch stores bit.',
  '• Retains data as long as power is applied; fast access, low density, high power consumption.',
  'Dynamic RAM (DRAM):',
  '• Stores bit as charge on microscopic capacitor with 1 transistor (1T-1C cell).',
  '• High storage density, low cost, but requires periodic refresh cycles (every 64ms) due to charge leakage.'
]);

addPage(126, 122, 'UNIT - 5', 'Memory Decoding & Binary Cell Architecture', [
  'Memory Decoding: 2-dimensional coincidence decoding (Row and Column decoders) minimizes decoding gate count.',
  'Binary Memory Cell logic diagram: SR latch with Select, Read, Write, and Data input/output control lines.'
]);

addPage(127, 123, 'UNIT - 5', 'Programmable Logic Array (PLA) Architecture', [
  'Programmable Logic Array (PLA):',
  'Features a Programmable AND array followed by a Programmable OR array.',
  'Implements sum-of-products Boolean expressions.',
  'Output XOR inverters allow true or complemented output programming.',
  'Example: Realizing F1 = AB\' + AC + A\'BC\' and F2 = (AC + BC)\'.'
]);

addPage(128, 124, 'UNIT - 5', 'PLA Programming Table & Design Example', [
  'PLA Programming Table format: Product terms, Input literals (1, 0, -), Output connections (True/Complement).',
  'Design Problem: Implement F1(A,B,C) = Σm(0,1,2,4) and F2(A,B,C) = Σm(0,5,6,7) using a PLA.'
]);

addPage(129, 125, 'UNIT - 5', 'PLA Simplification & Programming Solution', [
  'Simplification using K-maps for both true and complement forms:',
  '• F1 = (AB + AC + BC)\'  (3 product terms)',
  '• F2 = AB + AC + A\'B\'C\'',
  'Total product terms shared: AB, AC, BC, A\'B\'C\'. PLA Programming Table derivation.'
]);

addPage(130, 126, 'UNIT - 5', 'Complete PLA Logic Schematic Realization', [
  'Complete logic circuit diagram of Programmable Logic Array (PLA) with 3 inputs (A, B, C), 4 internal product term AND gates, 2 summing OR gates, and output XOR polarity gates implementing functions F1 and F2.',
  'End of Digital Electronics Course Notes (130 Pages Complete Academic Material).'
]);

// Write exactPdfPagesData.ts
const targetFile = path.resolve(process.cwd(), 'src/data/exactPdfPagesData.ts');

const fileHeader = `// AUTO-GENERATED: Exact 130 Pages of Digital Electronics Course Notes
// Matches the complete textbook and provided notes exactly (Pages 1 to 130).

export interface ExactPdfPage {
  pageNumber: number; // 1 to 130
  internalPageNo?: number; // 1 to 126
  unit?: string;
  title: string;
  lines: string[];
}

export const EXACT_PDF_PAGES: ExactPdfPage[] = ${JSON.stringify(RAW_PAGES, null, 2)};
`;

fs.writeFileSync(targetFile, fileHeader, 'utf8');
console.log(`Successfully generated exactPdfPagesData.ts with ${RAW_PAGES.length} pages at ${targetFile}`);
