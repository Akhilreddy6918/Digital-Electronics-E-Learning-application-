export interface ExactPdfPage {
  pageNumber: number; // 1 to 130
  internalPageNo?: number; // 1 to 126 as printed on the PDF
  unit?: string;
  title: string;
  lines: string[];
}

export const EXACT_PDF_PAGES: ExactPdfPage[] = [
  // Page 1: Cover Page
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

  // Page 2: Syllabus
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
      'Flop, The "Clocked T" Flip-Flop, The "Clocked J-K" Flip-Flop, Design of a Clocked Flip-Flop,',
      'Timing and Triggering Consideration.',
      '',
      'UNIT -IV:',
      'Sequential Circuits:',
      'Introduction, Basic Architectural Distinctions between Combinational and Sequential circuits,',
      'Latches, Flip-Flops, SR,JK,D,T and Master slave, characteristic Tables and equations,',
      'Conversion from one type of Flip-Flop to another,',
      'Counters - Design of Single Mode Counter, Ripple Counter, Ring Counter, Shift Register, Ring',
      'counter using Shift Register',
      '',
      'UNIT -V:',
      'Memory Devices:',
      'Classification of memories – ROM : ROM organization, PROM, EPROM,EEPROM, RAM:',
      'RAM organization, Write operation, Read operation, Static RAM , Programmable Logic',
      'Devices: Programmable Logic Array(PLA),Programmable Array Logic, Implementation of',
      'Combinational Logic circuits using ROM,PLA,PAL.'
    ]
  },

  // Page 3: Textbooks & Outcomes
  {
    pageNumber: 3,
    title: 'Textbooks, Reference Books & Course Outcomes',
    lines: [
      'TEXT BOOKS:',
      '1. Digital Design - Morris Mano, PHI, 3rd Edition.',
      '2. Switching Theory and Logic Design - A. Anand Kumar, PHI, 2nd Edition.',
      '3. Switching and Finite Automata Theory - Zvi Kohavi & Niraj K. Jha, 3rd Edition, Cambridge.',
      '',
      'REFERENCE BOOKS:',
      '1. Introduction to Switching Theory and Logic Design – Fredriac J. Hill, Gerald R. Peterson, 3rd Ed, John Wiley & Sons Inc.',
      '2. Digital Fundamentals – A Systems Approach – Thomas L. Floyd, Pearson, 2013.',
      '3. Switching Theory and Logic Design – Bhanu Bhaskara – Tata McGraw Hill Publication, 2012',
      '4. Fundamentals of Logic Design - Charles H. Roth, Cengage Learning, 5th Edition, 2004.',
      '5. Digital Logic Applications and Design - John M. Yarbrough, Thomson Publications, 2006.',
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

  // Page 4: Index
  {
    pageNumber: 4,
    title: 'INDEX',
    lines: [
      '======================================================================',
      '                                INDEX',
      '======================================================================',
      '',
      'S. No | Unit | Topic                                    | Page no',
      '------+------+------------------------------------------+--------',
      '  1   |  I   | NUMBERS SYSTEMS AND BOOLEAN ALGEBRA      |   01',
      '  2   |  II  | MINIMIZATION TECHNIQUES                  |   39',
      '  3   |  III | COMBINATIONAL CIRCUITS                   |   60',
      '  4   |  IV  | SEQUENTIAL CIRCUITS                      |   89',
      '  5   |  V   | MEMORY DEVICES                           |  119',
      '',
      '======================================================================'
    ]
  },

  // Page 5 (Internal Page 1)
  {
    pageNumber: 5,
    internalPageNo: 1,
    unit: 'UNIT - 1',
    title: 'Introduction about Digital System',
    lines: [
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
    ]
  },

  // Page 6 (Internal Page 2)
  {
    pageNumber: 6,
    internalPageNo: 2,
    unit: 'UNIT - 1',
    title: 'Advantages and Disadvantages of Digital Systems',
    lines: [
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
    ]
  },

  // Page 7 (Internal Page 3)
  {
    pageNumber: 7,
    internalPageNo: 3,
    unit: 'UNIT - 1',
    title: 'Number Systems (Binary, Octal, Hex, Radix)',
    lines: [
      'NUMBER SYSTEM',
      'Number system is a basis for counting varies items. Modern computers communicate and operate with binary numbers which use only the digits 0 & 1. Basic number system used by humans is Decimal number system.',
      'For Ex: Let us consider decimal number 18. This number is represented in binary as 10010.',
      'We observe that binary number system take more digits to represent the decimal number. For large numbers we have to deal with very large binary strings. So this fact gave rise to three new number systems:',
      'i) Octal number systems (base 8)',
      'ii) Hexa Decimal number system (base 16)',
      'iii) Binary Coded Decimal number (BCD) system',
      '',
      'To define any number system we have to specify:',
      '• Base of the number system such as 2, 8, 10 or 16.',
      '• The base decides the total number of digits available in that number system.',
      '• First digit in the number system is always zero and last digit in the number system is always base - 1.',
      '',
      'Binary number system:',
      'The binary number has a radix of 2. As r = 2, only two digits are needed, and these are 0 and 1. In binary system weight is expressed as power of 2.',
      'The left most bit, which has the greatest weight is called the Most Significant Bit (MSB). And the right most bit which has the least weight is called Least Significant Bit (LSB).'
    ]
  },

  // Page 8 (Internal Page 4)
  {
    pageNumber: 8,
    internalPageNo: 4,
    unit: 'UNIT - 1',
    title: 'Binary to Decimal Example & Radix Equivalences',
    lines: [
      'For Ex: 1001.01_2 = [ ( 1 ) × 2^3 ] + [ ( 0 ) × 2^2 ] + [ ( 0 ) × 2^1 ] + [ ( 1 ) × 2^0 ] + [ ( 0 ) × 2^-1 ] + [ ( 1 ) × 2^-2 ]',
      '        1001.01_2 = [ 1 × 8 ] + [ 0 × 4 ] + [ 0 × 2 ] + [ 1 × 1 ] + [ 0 × 0.5 ] + [ 1 × 0.25 ]',
      '        1001.01_2 = 9.25_{10}',
      '',
      'Decimal Number system:',
      'The decimal system has ten symbols: 0,1,2,3,4,5,6,7,8,9. In other words, it has a base of 10.',
      '',
      'Octal Number System:',
      'Digital systems operate only on binary numbers. Since binary numbers are often very long, two shorthand notations, octal and hexadecimal, are used for representing large binary numbers. Octal systems use a base or radix of 8. It uses first eight digits of decimal number system. Thus it has digits from 0 to 7.',
      '',
      'Hexa Decimal Number System:',
      'The hexadecimal numbering system has a base of 16. There are 16 symbols. The decimal digits 0 to 9 are used as the first ten digits as in the decimal system, followed by the letters A, B, C, D, E and F, which represent the values 10, 11, 12, 13, 14 and 15 respectively.',
      '',
      'Table: Decimal | Binary | Octal | Hexadecimal',
      '----------------------------------------------',
      '   0           | 0000   |   0   |      0',
      '   1           | 0001   |   1   |      1',
      '   2           | 0010   |   2   |      2',
      '   3           | 0011   |   3   |      3',
      '   4           | 0100   |   4   |      4',
      '   5           | 0101   |   5   |      5',
      '   6           | 0110   |   6   |      6',
      '   7           | 0111   |   7   |      7',
      '   8           | 1000   |  10   |      8',
      '   9           | 1001   |  11   |      9',
      '  10           | 1010   |  12   |      A',
      '  11           | 1011   |  13   |      B',
      '  12           | 1100   |  14   |      C',
      '  13           | 1101   |  15   |      D',
      '  14           | 1110   |  16   |      E',
      '  15           | 1111   |  17   |      F'
    ]
  },

  // Page 9 (Internal Page 5)
  {
    pageNumber: 9,
    internalPageNo: 5,
    unit: 'UNIT - 1',
    title: 'Base Conversions: Binary, Octal, Hexadecimal & Decimal',
    lines: [
      'Number Base conversions:',
      'The human beings use decimal number system while computer uses binary number system.',
      'Therefore it is necessary to convert decimal number system into its equivalent binary.',
      'i) Binary to octal number conversion',
      '   The binary number: 001 010 011 000 100 101 110 111',
      '   The octal number:   1   2   3   0   4   5   6   7',
      '',
      'ii) Binary to hexa decimal number conversion',
      '   The binary number: 0001 0010 0100 1000 1001 1010 1101 1111',
      '   The hex number:     1    2    4    8    9    A    D    F',
      '',
      'iii) Octal to binary Conversion: Each octal number converts to 3 binary digits',
      '   To convert 653_8 to binary, just substitute code: 6 -> 110, 5 -> 101, 3 -> 011 ==> 110 101 011_2',
      '',
      'iv) Hexa to binary conversion: 0100 1111 -> 1101 0111',
      '',
      'v) Octal to Decimal conversion:',
      '   Ex: convert 4057.06_8 to decimal:',
      '   = 4x8^3 + 0x8^2 + 5x8^1 + 7x8^0 + 0x8^-1 + 6x8^-2',
      '   = 2048 + 0 + 40 + 7 + 0 + 0.09375 = 2095.09375_{10}'
    ]
  },

  // Page 10 (Internal Page 6)
  {
    pageNumber: 10,
    internalPageNo: 6,
    unit: 'UNIT - 1',
    title: 'Decimal to Octal, Hex to Decimal, Decimal to Hex',
    lines: [
      'vi) Decimal to Octal Conversion:',
      '   Ex: convert 378.93_{10} to octal',
      '   378_{10} to octal: Successive division:',
      '   8 | 378',
      '   8 | 47 --- 2',
      '   8 |  5 --- 7 ↑',
      '        0 --- 5',
      '   = 572_8',
      '   0.93_{10} to octal:',
      '   0.93 x 8 = 7.44',
      '   0.44 x 8 = 3.52 ↓',
      '   0.53 x 8 = 4.16',
      '   0.16 x 8 = 1.28',
      '   = 0.7341_8',
      '   Result: 378.93_{10} = 572.7341_8',
      '',
      'vii) Hexadecimal to Decimal Conversion:',
      '   Ex: 5C7_{16} to decimal',
      '   = (5 x 16^2) + (C x 16^1) + (7 x 16^0)',
      '   = 1280 + 192 + 7 = 1479_{10}',
      '',
      'viii) Decimal to Hexadecimal Conversion:',
      '   Ex: 2598.675_{10}',
      '   16 | 2598',
      '   16 |  162 --- 6',
      '          10 --- 2 (A)',
      '   = A26_{16}'
    ]
  },

  // Page 11 (Internal Page 7)
  {
    pageNumber: 11,
    internalPageNo: 7,
    unit: 'UNIT - 1',
    title: 'Octal to Hex, Hex to Octal & Complements Definition',
    lines: [
      '0.675_{10} = 0.675 x 16 = 10.8 (A)',
      '= 0.800 x 16 = 12.8 (C) ↓',
      '= 0.800 x 16 = 12.8 (C)',
      '= 0.800 x 16 = 12.8 (C)',
      '= 0.ACCC_{16}',
      'Result: 2598.675_{10} = A26.ACCC_{16}',
      '',
      'ix) Octal to hexadecimal conversion:',
      '   The simplest way is to first convert given octal to binary & then binary to hex.',
      '   Ex: 756.603_8',
      '   Octal:   7    5    6  .   6    0    3',
      '   Binary: 111  101  110 .  110  000  011',
      '   Regroup:0001 1110 1110. 1100 0001 1000',
      '   Hex:     1    E    E  .   C    1    8  ==> 1EE.C18_{16}',
      '',
      'x) Hexadecimal to octal conversion:',
      '   Ex: B9F.AE_{16}',
      '   Hex:     B    9    F  .   A    E',
      '   Binary: 1011 1001 1111. 1010 1110',
      '   Regroup: 101 110 011 111. 101 011 100',
      '   Octal:    5   6   3   7 .  5   3   4  ==> 5637.534_8',
      '',
      'Complements:',
      'In digital computers to simplify the subtraction operation & for logical manipulation complements are used. There are two types of complements used in each radix system:',
      'i) The radix complement or r\'s complement',
      'ii) The diminished radix complement or (r-1)\'s complement'
    ]
  },

  // Page 12 (Internal Page 8)
  {
    pageNumber: 12,
    internalPageNo: 8,
    unit: 'UNIT - 1',
    title: 'Representation of Signed Numbers & Complemented Forms',
    lines: [
      'Representation of signed numbers binary arithmetic in computers:',
      '• Two ways of representing signed numbers:',
      '  1. Sign Magnitude form',
      '  2. Complemented form',
      '• Two complemented forms:',
      '  1. 1\'s complement form',
      '  2. 2\'s complement form',
      'Advantage of performing subtraction by the complement method is reduction in hardware.',
      '(instead of addition & subtraction, only adding circuits are needed. i.e., subtraction is also performed by adders only.)',
      'Instead of subtracting one number from another, the complement of the subtrahend is added to minuend.',
      'In sign magnitude form, an additional bit called the sign bit is placed in front of the number. If sign bit is 0, number is +ve. If it is 1, number is -ve.',
      '',
      'Ex:  0 101001  -> Sign bit 0: = +41 magnitude',
      '     1 101001  -> Sign bit 1: = -41 magnitude',
      '',
      'Representation of signed numbers using 2\'s or 1\'s complement method:',
      'If positive: magnitude in true binary, sign bit 0 in front of MSB.',
      'If negative: magnitude in 2\'s or 1\'s complement form, sign bit 1 in front of MSB.',
      '',
      'Ex Table: Given no. | Sign mag form | 2\'s comp form | 1\'s comp form',
      '  01101             | +13           | +13           | +13',
      '  010111            | +23           | +23           | +23',
      '  10111             | -7            | -7            | -8',
      '  1101010           | -42           | -22           | -21'
    ]
  },

  // Page 13 (Internal Page 9)
  {
    pageNumber: 13,
    internalPageNo: 9,
    unit: 'UNIT - 1',
    title: 'Special Case in 2\'s Complement & Signed Binary Numbers Table',
    lines: [
      'Special case in 2\'s comp representation:',
      'Whenever a signed no. has a 1 in the sign bit & all 0\'s for the magnitude bits, the decimal equivalent is -2^n, where n is the no of bits in the magnitude.',
      'Ex: 1000 = -8 & 10000 = -16',
      '',
      'Characteristics of 2\'s complement numbers:',
      'Properties:',
      '1. There is one unique zero',
      '2. 2\'s comp of 0 is 0',
      '3. The leftmost bit can\'t be used to express a quantity. If it is 0 no. is +ve.',
      '4. For an n-bit word which includes the sign bit there are (2^{n-1} - 1) +ve integers, 2^{n-1} -ve integers & one 0, for a total of 2^n unique states.',
      '5. Significant information is contained in the 1\'s of the +ve numbers & 0\'s of the -ve numbers.',
      '6. A -ve no. may be converted into a +ve no. by finding its 2\'s comp.',
      '',
      'Signed binary numbers table (+7 to -7, +0, -0, -8):',
      'Decimal | Sign 2\'s comp form | Sign 1\'s comp form | Sign mag form',
      '   +7   | 0111               | 0111               | 0111',
      '   +6   | 0110               | 0110               | 0110',
      '   +5   | 0101               | 0101               | 0101',
      '   +4   | 0100               | 0100               | 0100',
      '   +3   | 0011               | 0011               | 0011',
      '   +2   | 0010               | 0010               | 0010',
      '   +1   | 0001               | 0001               | 0001',
      '   +0   | 0000               | 0000               | 0000',
      '   -0   | --                 | 1111               | 1000',
      '   -1   | 1111               | 1110               | 1001',
      '   -2   | 1110               | 1101               | 1010',
      '   -3   | 1101               | 1100               | 1011',
      '   -4   | 1100               | 1011               | 1100',
      '   -5   | 1011               | 1010               | 1101',
      '   -6   | 1010               | 1001               | 1110',
      '   -7   | 1001               | 1000               | 1111',
      '   -8   | 1000               | --                 | --'
    ]
  },

  // Page 14 (Internal Page 10)
  {
    pageNumber: 14,
    internalPageNo: 10,
    unit: 'UNIT - 1',
    title: '3 Methods of Obtaining 2\'s Complement with Examples',
    lines: [
      'Methods of obtaining 2\'s comp of a no:',
      '• In 3 ways:',
      '  1. By obtaining the 1\'s comp of the given no. (by changing all 0\'s to 1\'s & 1\'s to 0\'s) & then adding 1.',
      '  2. By subtracting the given n bit no N from 2^n.',
      '  3. Starting at the LSB, copying down each bit up to & including the first 1 bit encountered, and complimenting the remaining bits.',
      '',
      'Ex: Express -45 in 8 bit 2\'s comp form:',
      '+45 in 8 bit form is 00101101',
      '',
      'I method:',
      '  1\'s comp of 00101101: 11010010',
      '  Add 1:                     + 1',
      '  ------------------------------',
      '  Result:               11010011 is 2\'s comp form',
      '',
      'II method:',
      '  Subtract given no. N from 2^n:',
      '  2^8 = 100000000',
      '  Subtract 45 = -00101101',
      '  Result: 11010011 is 2\'s comp',
      '',
      'III method:',
      '  Original no:           00101101',
      '  Copy up to first 1 bit:       1',
      '  Complement remaining: 1101001',
      '  Resulting bits:       11010011'
    ]
  },

  // Page 15 (Internal Page 11)
  {
    pageNumber: 15,
    internalPageNo: 11,
    unit: 'UNIT - 1',
    title: 'Fractional 2\'s Complement & 2\'s Complement Arithmetic',
    lines: [
      '-73.75 in 12 bit 2\'s comp form:',
      'I method:',
      '  +73.75 = 01001001.1100',
      '  1\'s comp:10110110.0011',
      '  Add 1:            + 1',
      '  Result:  10110110.0100 is 2\'s comp',
      '',
      'II method: 2^8 = 100000000.0000; Sub 73.75 = -01001001.1100 -> 10110110.0100',
      'III method: Original: 01001001.1100; Copy to 1st bit: 100; Comp remaining: 10110110.0 -> 10110110.0100',
      '',
      '2\'s compliment Arithmetic:',
      '• The 2\'s comp system is used to represent -ve numbers using modulus arithmetic. The word length of a computer is fixed.',
      '• In 2\'s comp subtraction, add the 2\'s comp of subtrahend to minuend. If there is a carry out, IGNORE IT. Look at the sign bit (MSB):',
      '  - If MSB is 0, result is positive and in true binary form.',
      '  - If MSB is 1 (no carry), result is negative and in 2\'s comp form. Take 2\'s comp to find magnitude.',
      '',
      'Ex: Subtract 14 from 46 using 8 bit 2\'s comp arithmetic:',
      '  +14 = 00001110 -> 2\'s comp = 11110010',
      '  +46 = 00101110',
      '  -14 = 11110010',
      '  Sum = (1) 00100000 (ignore carry)',
      '  MSB is 0 -> Result is +ve: +00100000 = +32.'
    ]
  },

  // Page 16 (Internal Page 12)
  {
    pageNumber: 16,
    internalPageNo: 12,
    unit: 'UNIT - 1',
    title: 'Solved Arithmetic Problems & 1\'s Complement Arithmetic',
    lines: [
      'EX: Add -75 to +26 using 8 bit 2\'s comp arithmetic:',
      '  +75 = 01001011 -> 2\'s comp = 10110101',
      '  +26 = 00011010',
      '  -75 = 10110101',
      '  Sum = 11001111 (No carry)',
      '  No carry, MSB is 1 -> result is -ve & is in 2\'s comp.',
      '  Magnitude is 2\'s comp of 11001111 = 00110001 = 49. Result = -49.',
      '',
      'Ex: Add -45.75 to +87.5 using 12 bit arithmetic:',
      '  +87.5  = 01010111.1000',
      '  -45.75 = 11010010.0100 (2\'s comp)',
      '  Sum    = (1) 00101001.1100 (ignore carry)',
      '  MSB is 0 -> Result is +ve: +41.75.',
      '',
      '1\'s compliment of a number:',
      '• Obtained by simply complementing each bit of the number (subtracting each bit from 1).',
      '• Difficulties of 1\'s comp: two representations of zero (+0 is 00000000, -0 is 11111111).',
      '',
      '1\'s compliment arithmetic:',
      'In 1\'s comp subtraction, add 1\'s comp of subtrahend to minuend.',
      '• If carryout occurs, bring carry around and add to LSB (called END AROUND CARRY). Result is +ve.',
      '• If no carry, result is -ve and in 1\'s comp form.'
    ]
  },

  // Page 17 (Internal Page 13)
  {
    pageNumber: 17,
    internalPageNo: 13,
    unit: 'UNIT - 1',
    title: '1\'s Comp Subtraction & Weighted vs Non-Weighted Codes',
    lines: [
      'Ex: Subtract 14 from 25 using 8 bit 1\'s comp:',
      '   25 = 00011001',
      '  -14 = 11110001 (1\'s comp of 14)',
      '  Sum = (1) 00001010',
      '        +          1  (End around carry)',
      '  ------------------',
      '  Result: 00001011 = +11_{10}',
      '',
      'EX: ADD -25 to +14 in 1\'s comp:',
      '  +14 = 00001110',
      '  -25 = 11100110',
      '  Sum = 11110100 (No carry)',
      '  MSB = 1 -> Result is -ve = -(1\'s comp of 11110100) = -00001011 = -11_{10}',
      '',
      'Binary codes:',
      'Binary codes are codes which are represented in binary system with modification from the original ones.',
      '• Weighted Binary codes: Obey positional weighting principles (each position has specific weight).',
      '• Non Weighted Codes: Not positionally weighted.',
      '',
      'Table of Codes (BCD 8421, Excess-3, 84-2-1, 2421, 5211, Bi-Quinary 5043210):',
      'Decimal | BCD 8421 | Excess-3 | 84-2-1 | 2421 | 5211 | Bi-Quinary',
      '   0    |   0000   |   0011   |  0000  | 0000 | 0000 | 0100001',
      '   1    |   0001   |   0100   |  0111  | 0001 | 0001 | 0100010',
      '   2    |   0010   |   0101   |  0110  | 0010 | 0011 | 0100100',
      '   3    |   0011   |   0110   |  0101  | 0011 | 0101 | 0101000',
      '   4    |   0100   |   0111   |  0100  | 0100 | 0111 | 0110000',
      '   5    |   0101   |   1000   |  1011  | 1011 | 1000 | 1000001',
      '   6    |   0110   |   1001   |  1010  | 1100 | 1010 | 1000010',
      '   7    |   0111   |   1010   |  1001  | 1101 | 1100 | 1000100',
      '   8    |   1000   |   1011   |  1000  | 1110 | 1110 | 1001000',
      '   9    |   1001   |   1100   |  1111  | 1111 | 1111 | 1010000'
    ]
  },

  // Page 18 (Internal Page 14)
  {
    pageNumber: 18,
    internalPageNo: 14,
    unit: 'UNIT - 1',
    title: 'Reflective Codes, Sequential Codes & Gray Code Properties',
    lines: [
      'Reflective Code:',
      'A code is said to be reflective when code for 9 is complement for the code for 0, and so is for 8 and 1, 7 and 2, 6 and 3, 5 and 4.',
      'Codes 2421, 5211, and excess-3 are reflective, whereas the 8421 code is not.',
      '',
      'Sequential Codes:',
      'A code is said to be sequential when two subsequent codes, seen as numbers in binary representation, differ by one. This greatly aids mathematical manipulation of data. The 8421 and Excess-3 codes are sequential, whereas the 2421 and 5211 codes are not.',
      '',
      'Non weighted codes: Codes not positionally weighted. Ex: Excess-3 code, Gray code.',
      'Excess-3 Code: Derived from 8421 code plus 0011(3).',
      '',
      'Gray Code (Unit-Distance Code):',
      'The gray code belongs to a class of codes called minimum change codes, in which only one bit in the code changes when moving from one code to the next. The Gray code is non-weighted and reflective. Any two subsequent codes differ by only one bit.',
      '',
      'Gray Code Table (0 to 15):',
      'Dec | 4-bit Binary | Gray Code  || Dec | 4-bit Binary | Gray Code',
      ' 0  |    0000      |   0000     ||  8  |    1000      |   1100',
      ' 1  |    0001      |   0001     ||  9  |    1001      |   1101',
      ' 2  |    0010      |   0011     || 10  |    1010      |   1111',
      ' 3  |    0011      |   0010     || 11  |    1011      |   1110',
      ' 4  |    0100      |   0110     || 12  |    1100      |   1010',
      ' 5  |    0101      |   0111     || 13  |    1101      |   1011',
      ' 6  |    0110      |   0101     || 14  |    1110      |   1001',
      ' 7  |    0111      |   0100     || 15  |    1111      |   1000'
    ]
  },

  // Page 19 (Internal Page 15)
  {
    pageNumber: 19,
    internalPageNo: 15,
    unit: 'UNIT - 1',
    title: 'Binary to Gray Conversion & BCD Addition',
    lines: [
      'Binary to Gray Conversion:',
      '• Gray Code MSB is binary code MSB.',
      '• Gray Code MSB-1 is the XOR of binary code MSB and MSB-1.',
      '• MSB-2 bit of gray code is XOR of MSB-1 and MSB-2 bit of binary code.',
      '• MSB-N bit of gray code is XOR of MSB-N-1 and MSB-N bit of binary code.',
      '',
      '8421 BCD code (Natural BCD code):',
      'Each decimal digit 0 through 9 is coded by a 4 bit binary no. called natural binary codes.',
      'Because of 8,4,2,1 weights attached, it is weighted & sequential.',
      'Disadvantage: 6 illegal combinations 1010, 1011, 1100, 1101, 1110, 1111 (not part of 8421 BCD).',
      '',
      'BCD Addition:',
      'Individually add the corresponding digits in 4 bit binary groups starting from LSD.',
      '• If no carry & sum is not illegal, no correction needed.',
      '• If carry out or sum is an illegal code, 6_{10} (0110) is added to the sum term of that group & resulting carry is added to next group.',
      '',
      'Ex: Perform decimal additions in 8421 code: (a) 25 + 13',
      '  25 in BCD:  0010 0101',
      ' +13 in BCD: +0001 0011',
      '  ---------------------',
      '  Sum:        0011 1000 = 38 (No carry, no illegal code. Corrected sum).'
    ]
  },

  // Page 20 (Internal Page 16)
  {
    pageNumber: 20,
    internalPageNo: 16,
    unit: 'UNIT - 1',
    title: 'BCD Addition with Illegal Codes & BCD Subtraction',
    lines: [
      '(b) 679.6 + 536.8 in BCD:',
      '   679.6 = 0110 0111 1001 . 0110 in BCD',
      '  +536.8 = 0101 0011 0010 . 1000 in BCD',
      '  --------------------------------------',
      '           1011 1010 1011 . 1110 (all illegal codes > 9)',
      '          +0110 +0110 +0110.+0110 (add 0110 to each)',
      '  Carries:  +1    +1    +1    +1',
      '  Result:  0001 0010 0001 0110 . 0100 = 1216.4',
      '',
      'BCD Subtraction:',
      'Performed by subtracting digits of each 4 bit group. If there is a borrow from the next group, then 6_{10} (0110) is subtracted from the difference term of this group.',
      '',
      '(a) 38 - 15 in BCD:',
      '   38 = 0011 1000',
      '  -15 = 0001 0101',
      '  ----------------',
      '   23 = 0010 0011 (No borrow, correct difference).',
      '',
      '(b) 206.7 - 147.8 in BCD:',
      '   206.7 = 0010 0000 0110 . 0111',
      '  -147.8 = 0001 0100 0111 . 0110',
      '  ------------------------------',
      '    58.9 = 0000 1011 1110 . 1111 (borrows present, subtract 0110) -> 0101 1000 . 1001 = 58.9'
    ]
  },

  // Page 21 (Internal Page 17)
  {
    pageNumber: 21,
    internalPageNo: 17,
    unit: 'UNIT - 1',
    title: 'BCD Subtraction via 9\'s Comp & Excess-3 Addition',
    lines: [
      'BCD Subtraction using 9\'s & 10\'s complement methods:',
      'Form 9\'s complement of decimal subtrahend & encode in 8421 code. Resulting BCD numbers are added.',
      'EX: 305.5 - 168.8',
      '  9\'s comp of 168.8 = 831.1',
      '  305.5 + 831.1 = (1) 136.6 + 1 (end around carry) = 136.7',
      '',
      'Excess three (xs-3) code:',
      'Non-weighted BCD code. Each codeword is 8421 codeword + 0011(3).',
      'Self-complementing code: subtraction by complement addition is direct in xs-3.',
      'Six invalid states: 0000, 0001, 0010, 1101, 1110, 1111.',
      '',
      'Excess-3 Addition Rules:',
      'Add xs-3 numbers in 4-bit groups:',
      '• If NO carry from group: SUBTRACT 0011 from sum term of that group.',
      '• If CARRY generated: ADD 0011 to sum term of that group.'
    ]
  },

  // Page 22 (Internal Page 18)
  {
    pageNumber: 22,
    internalPageNo: 18,
    unit: 'UNIT - 1',
    title: 'Excess-3 Addition & Subtraction Solved Examples',
    lines: [
      'EX: 37 + 28 in XS-3:',
      '   37 = 0110 1010',
      '  +28 = 0101 1011',
      '  ---------------',
      '   65 = 1011 (1)0101 (carry generated)',
      '        +1 propagate carry',
      '        1100 0101',
      '       -0011 +0011 (subtract 0011 to correct 1100; add 0011 to correct 0101)',
      '       -----------',
      '       1001 1000 = 65_{10}',
      '',
      'Excess -3 (XS-3) Subtraction:',
      'Subtract each 4 bit group of subtrahend from minuend starting from LSD.',
      '• If no borrow from next group: ADD 0011 to difference.',
      '• If borrow occurs: SUBTRACT 0011 from difference term.',
      '',
      'Ex: 267 - 175 in XS-3:',
      '   267 = 0101 1001 1010',
      '  -175 = 0100 1010 1000',
      '  ---------------------',
      '         0000 1111 0010',
      '        +0011 -0011 +0011',
      '  -----------------------',
      '         0011 1100 +0011 = 92_{10}'
    ]
  },

  // Page 23 (Internal Page 19)
  {
    pageNumber: 23,
    internalPageNo: 19,
    unit: 'UNIT - 1',
    title: 'XS-3 Subtraction using 9\'s Complement Method',
    lines: [
      'Xs-3 subtraction using 9\'s & 10\'s complement methods:',
      'Ex: 687 - 348',
      '  9\'s comp of 348 = 651',
      '  Xs-3 code of 348 = 0110 0111 1011',
      '  1\'s comp of 348 in xs-3 = 1001 1000 0100',
      '  Add in decimal: 687 + 651 = (1) 338 + 1 (end around carry) = 339',
      '  Add in XS-3: 1001 1011 1010 + 1001 1000 0100',
      '  Propagate carry, add end-around carry, correct with +/- 0011',
      '  Corrected difference in XS-3: 0110 0110 1100 = 339_{10}'
    ]
  },

  // Page 24 (Internal Page 20)
  {
    pageNumber: 24,
    internalPageNo: 20,
    unit: 'UNIT - 1',
    title: 'Reflection of Gray Codes (1-bit to 4-bit Generation)',
    lines: [
      'The Gray code (reflective -code):',
      'Gray code is a non-weighted cyclic code because successive codewords differ in one bit position only (unit distance code).',
      'The n least significant bits for 2^n through 2^{n+1} - 1 are mirror images of those for 0 through 2^n - 1.',
      'An N-bit Gray code is obtained by reflecting an (N-1)-bit code about an axis at the end, putting MSB 0 above and MSB 1 below.',
      '',
      'Reflection Generation Table:',
      '1 bit -> 2 bit -> 3 bit -> 4 bit Gray Code',
      '  0   |   00   |  000  |   0000   (0)',
      '  1   |   01   |  001  |   0001   (1)',
      '      |   11   |  011  |   0011   (2)',
      '      |   10   |  010  |   0010   (3)',
      '      |        |  110  |   0110   (4)',
      '      |        |  111  |   0111   (5)',
      '      |        |  101  |   0101   (6)',
      '      |        |  100  |   0100   (7)',
      '------------------ Mirror Axis ------------------',
      '               |  1100 |   1100   (8)',
      '               |  1101 |   1101   (9)',
      '               |  1111 |   1111   (10)',
      '               |  1110 |   1110   (11)',
      '               |  1010 |   1010   (12)',
      '               |  1011 |   1011   (13)',
      '               |  1001 |   1001   (14)',
      '               |  1000 |   1000   (15)'
    ]
  },

  // Page 25 (Internal Page 21)
  {
    pageNumber: 25,
    internalPageNo: 21,
    unit: 'UNIT - 1',
    title: 'Binary Codes Block Diagram & Parity Error Detection',
    lines: [
      'Binary codes block diagram:',
      'Codes -> Weighted (8421, 2421, 5211), Non-weighted (Excess-3, Gray), Reflective, Sequential, Alphanumeric (ASCII, EBCDIC), Error detecting & correcting (Parity, Hamming).',
      '',
      'Error - Detecting codes:',
      'When binary data is transmitted, noise can alter 1\'s to 0\'s or 0\'s to 1\'s. Several schemes detect single-bit errors.',
      '',
      'Parity: Adding an extra bit (parity bit) to each transmitted word:',
      '• Odd Parity: Parity bit set so total count of 1\'s in word (including parity bit) is ODD.',
      '• Even Parity: Parity bit set so total count of 1\'s in word is EVEN.',
      '',
      'Parity Table for 8421 BCD:',
      'Decimal | 8421 code | Odd parity | Even parity',
      '   0    |   0000    |     1      |      0',
      '   1    |   0001    |     0      |      1',
      '   2    |   0010    |     0      |      1',
      '   3    |   0011    |     1      |      0',
      '   4    |   0100    |     0      |      1',
      '   5    |   0101    |     1      |      0',
      '   6    |   0110    |     1      |      0',
      '   7    |   0111    |     0      |      1',
      '   8    |   1000    |     0      |      1',
      '   9    |   1001    |     1      |      0'
    ]
  },

  // Page 26 (Internal Page 22)
  {
    pageNumber: 26,
    internalPageNo: 22,
    unit: 'UNIT - 1',
    title: 'Parity Checking Schemes, Checksums & Block Parity',
    lines: [
      'Parity Checking Circuit:',
      'Generates error signal if total no of 1\'s is even in odd parity system, or odd in even parity system.',
      '',
      'Ex: Even parity scheme:',
      '  (a) 10101010 -> 4 ones (even) -> No error',
      '  (b) 11110110 -> 6 ones (even) -> No error',
      '  (c) 10111001 -> 5 ones (odd)  -> ERROR detected!',
      '',
      'Ex: Odd parity scheme:',
      '  (a) 10110111 -> 6 ones (even) -> ERROR detected!',
      '  (b) 10011010 -> 4 ones (even) -> ERROR detected!',
      '  (c) 11101010 -> 5 ones (odd)  -> No error',
      '',
      'Checksums (2-Dimensional Parity):',
      'Simple parity cannot detect 2 errors in same word. Checksums add words together at transmitter and send the sum with data.',
      '',
      'Block parity:',
      'Row and column parity bits are computed for each data block to locate and correct single-bit errors.'
    ]
  },

  // Page 27 (Internal Page 23)
  {
    pageNumber: 27,
    internalPageNo: 23,
    unit: 'UNIT - 1',
    title: 'Error-Correcting Codes & Hamming Code Principle',
    lines: [
      'Error - Correcting Codes (Hamming Codes):',
      'A code is said to be error-correcting if the correct codeword can always be deduced from an erroneous word.',
      'For single-bit error correction, the minimum distance must be at least 3 (d_{min} >= 3).',
      'Key: Locate the error bit position. Complementing the erroneous bit corrects the message!',
      '',
      'Parity Bit Positions:',
      'In a message of m data bits, k parity bits P1, P2, ..., Pk are inserted at positions that are powers of 2 (positions 2^{k-1}: 1, 2, 4, 8, 16...).',
      'Total codeword length = m + k bits.'
    ]
  },

  // Page 28 (Internal Page 24)
  {
    pageNumber: 28,
    internalPageNo: 24,
    unit: 'UNIT - 1',
    title: '7-Bit, 12-Bit, 15-Bit Hamming Code Formats & Error Positions',
    lines: [
      '7-bit Hamming code Format:',
      'To transmit four data bits (D3, D5, D6, D7), 3 parity bits (P1, P2, P4) are placed at positions 1, 2, 4:',
      'Bit Position:  1   2   3   4   5   6   7',
      'Format:       P1  P2  D3  P4  D5  D6  D7',
      '',
      'Codeword Table for BCD and Excess-3 (Digits 0-9):',
      'Digit | BCD Hamming (P1 P2 D3 P4 D5 D6 D7) | Excess-3 Hamming',
      '  0   |            0  0  0  0  0  0  0     |  1 0 0 0 0 1 1',
      '  1   |            1  1  0  1  0  0  1     |  1 0 0 1 1 0 0',
      '  2   |            0  1  0  1  0  1  0     |  1 1 0 1 0 0 1',
      '  3   |            1  0  0  0  0  1  1     |  1 1 0 0 1 1 0',
      '  4   |            1  0  0  1  1  0  0     |  0 0 0 1 1 1 1',
      '  5   |            0  1  0  0  1  0  1     |  1 1 1 0 0 0 0',
      '  6   |            1  1  0  0  1  1  0     |  0 0 1 1 0 0 1',
      '  7   |            0  0  0  1  1  1  1     |  1 0 1 1 0 1 0',
      '  8   |            1  1  1  0  0  0  0     |  0 1 1 0 0 1 1',
      '  9   |            0  0  1  1  0  0  1     |  0 1 1 1 1 0 0'
    ]
  },

  // Page 29 (Internal Page 25)
  {
    pageNumber: 29,
    internalPageNo: 25,
    unit: 'UNIT - 1',
    title: 'Hamming Code Encoding, Error Detection & Alphanumeric Codes',
    lines: [
      'Ex: Encode data bits 1101 into 7-bit even parity Hamming Code:',
      'Bit positions: P1 P2 D3 P4 D5 D6 D7',
      'Data bits:           1     1  0  1',
      '• Bits 1,3,5,7 (P1, 1, 1, 1) must have even parity -> P1 = 1',
      '• Bits 2,3,6,7 (P2, 1, 0, 1) must have even parity -> P2 = 0',
      '• Bits 4,5,6,7 (P4, 1, 0, 1) must have even parity -> P4 = 0',
      'Final Codeword: 1010101',
      '',
      'EX: Detect error in received codeword 1001001:',
      '• C1 (bits 1,3,5,7): 1^0^0^1 = 0 (no error) -> C1 = 0',
      '• C2 (bits 2,3,6,7): 0^0^0^1 = 1 (error)    -> C2 = 1',
      '• C4 (bits 4,5,6,7): 1^0^0^1 = 0 (no error) -> C3 = 0',
      'Syndrome word C4 C2 C1 = 0 1 0 = 2_{10} -> Bit 2 is in error! Complement bit 2 to correct.',
      '',
      'Alphanumeric Codes:',
      'Used to encode letters of alphabet in addition to digits. Modern alphanumeric codes: ASCII (7-bit/8-bit) & EBCDIC (8-bit).'
    ]
  },

  // Page 30 (Internal Page 26)
  {
    pageNumber: 30,
    internalPageNo: 26,
    unit: 'UNIT - 1',
    title: 'Digital Logic Gates (Symbols, Functions & Truth Tables)',
    lines: [
      'Digital Logic Gates:',
      'Boolean functions are expressed in terms of AND, OR, and NOT operations.',
      '',
      'Gate Name | Graphic Symbol | Algebraic Function | Truth Table (x, y -> F)',
      '----------+----------------+--------------------+-------------------------',
      'AND       | standard D-gate| F = x . y          | 0 0 -> 0; 0 1 -> 0; 1 0 -> 0; 1 1 -> 1',
      'OR        | curved arrowhead|F = x + y          | 0 0 -> 0; 0 1 -> 1; 1 0 -> 1; 1 1 -> 1',
      'Inverter  | triangle+bubble| F = x\'             | 0 -> 1; 1 -> 0',
      'Buffer    | triangle       | F = x              | 0 -> 0; 1 -> 1',
      'NAND      | AND + bubble   | F = (x . y)\'       | 0 0 -> 1; 0 1 -> 1; 1 0 -> 1; 1 1 -> 0',
      'NOR       | OR + bubble    | F = (x + y)\'       | 0 0 -> 1; 0 1 -> 0; 1 0 -> 0; 1 1 -> 0',
      'XOR       | double curve OR| F = x\'y + xy\'      | 0 0 -> 0; 0 1 -> 1; 1 0 -> 1; 1 1 -> 0',
      'XNOR      | XOR + bubble   | F = xy + x\'y\'     | 0 0 -> 1; 0 1 -> 0; 1 0 -> 0; 1 1 -> 1'
    ]
  },

  // Page 31 (Internal Page 27)
  {
    pageNumber: 31,
    internalPageNo: 27,
    unit: 'UNIT - 1',
    title: 'Properties of XOR Gates & Universal NAND Gate Realizations',
    lines: [
      'Properties of XOR Gates:',
      '• XOR (also ⊕): the "not-equal" function',
      '• XOR(X,Y) = X ⊕ Y = X\'Y + XY\'',
      '• Identities:',
      '  - X ⊕ 0 = X',
      '  - X ⊕ 1 = X\'',
      '  - X ⊕ X = 0',
      '  - X ⊕ X\' = 1',
      '• Properties:',
      '  - X ⊕ Y = Y ⊕ X (Commutative)',
      '  - (X ⊕ Y) ⊕ W = X ⊕ (Y ⊕ W) (Associative)',
      '',
      'Universal Logic Gates:',
      'NAND and NOR gates are called Universal gates. All fundamental gates (NOT, AND, OR) can be realized by using either only NAND or only NOR gates.',
      '',
      'NAND as a Universal Gate:',
      '• NOT Gate: F = (X . X)\' = X\'',
      '• AND Gate: F = ((X . Y)\')\' = X . Y (NAND followed by NAND inverter)',
      '• OR Gate:  F = (X\' . Y\')\' = X + Y (Invert inputs with NAND, then NAND together)'
    ]
  },

  // Page 32 (Internal Page 28)
  {
    pageNumber: 32,
    internalPageNo: 28,
    unit: 'UNIT - 1',
    title: 'Boolean Algebra Axioms, Huntington Postulates & Laws',
    lines: [
      'Boolean Algebra:',
      'In 1854, George Boole developed Boolean algebra. In 1938, Claude E. Shannon introduced two-valued Boolean switching algebra. Postulates formulated by E. V. Huntington in 1904.',
      'Boolean algebra is a mathematical system of logic consisting of set of elements (0, 1), two binary operators OR (+), AND (.), and one unary operator NOT (\').',
      '',
      'Axioms and laws of Boolean algebra:',
      'AND Operation | OR Operation  | NOT Operation',
      '0 . 0 = 0     | 0 + 0 = 0     | 0\' = 1',
      '0 . 1 = 0     | 0 + 1 = 1     | 1\' = 0',
      '1 . 0 = 0     | 1 + 0 = 1',
      '1 . 1 = 1     | 1 + 1 = 1',
      '',
      'AND Law               | OR Law',
      'A . 0 = 0 (Null law)  | A + 0 = A (Identity law)',
      'A . 1 = A (Identity)  | A + 1 = 1 (Null law)',
      'A . A = A (Idempotent)| A + A = A (Idempotent)',
      '',
      'CLOSURE: The Boolean system is closed with respect to binary operators (+) and (.).'
    ]
  },

  // Page 33 (Internal Page 29)
  {
    pageNumber: 33,
    internalPageNo: 29,
    unit: 'UNIT - 1',
    title: 'Associative, Commutative, Distributive & Basic Identities',
    lines: [
      'ASSOCIATIVE LAW: (x * y) * z = x * (y * z)',
      'COMMUTATIVE LAW: x * y = y * x',
      'IDENTITY ELEMENT: e * x = x * e = x',
      '',
      'BASIC IDENTITIES OF BOOLEAN ALGEBRA:',
      '• x + 0 = x',
      '• x . 0 = 0',
      '• x + 1 = 1',
      '• x . 1 = 1',
      '• x + x = x',
      '• x . x = x',
      '• x + x\' = 1',
      '• x . x\' = 0',
      '• x + y = y + x',
      '• xy = yx',
      '• x + (y + z) = (x + y) + z',
      '• x(yz) = (xy)z',
      '• x(y + z) = xy + xz',
      '• x + yz = (x + y)(x + z)   [Second Distributive Law]',
      '• (x + y)\' = x\' y\'',
      '• (xy)\' = x\' + y\''
    ]
  },

  // Page 34 (Internal Page 30)
  {
    pageNumber: 34,
    internalPageNo: 30,
    unit: 'UNIT - 1',
    title: 'DeMorgan\'s Theorem, Absorption & Consensus Theorem Proof',
    lines: [
      '• (x\')\' = x (Involution / Double Inversion)',
      '',
      'DeMorgan\'s Theorem:',
      '(a) (a + b)\' = a\'b\'',
      '(b) (ab)\' = a\' + b\'',
      'Generalized: (a + b + ... + z)\' = a\' b\' ... z\'',
      '',
      'Absorption law:',
      'Law 1: A + AB = A [Proof: A(1 + B) = A(1) = A]',
      'Law 2: A(A + B) = A [Proof: AA + AB = A + AB = A]',
      '',
      'Consensus Theorem:',
      'Theorem 1: AB + A\'C + BC = AB + A\'C',
      'Theorem 2: (A + B)(A\' + C)(B + C) = (A + B)(A\' + C)',
      'The BC term is called the consensus term and is redundant.',
      '',
      'Consensus Theorem 1 Proof:',
      '  AB + A\'C + BC = AB + A\'C + (A + A\')BC',
      '                = AB + A\'C + ABC + A\'BC',
      '                = AB(1 + C) + A\'C(1 + B)',
      '                = AB(1) + A\'C(1)',
      '                = AB + A\'C (Q.E.D.)'
    ]
  },

  // Page 35 (Internal Page 31)
  {
    pageNumber: 35,
    internalPageNo: 31,
    unit: 'UNIT - 1',
    title: 'Principle of Duality & Huntington Postulates Table',
    lines: [
      'Principle of Duality:',
      'Each postulate consists of two dual expressions. One expression is transformed into the other by interchanging (+) and (.) as well as identity elements 0 and 1.',
      'If an equivalence is proved, its dual is also immediately true!',
      '',
      'Table for Postulates and Theorems of Boolean Algebra:',
      'Part-A (OR form)              | Part-B (Dual AND form)',
      '------------------------------+---------------------------',
      'A + 0 = A                     | A . 1 = A',
      'A + 1 = 1                     | A . 0 = 0',
      'A + A = A                     | A . A = A',
      'A + A\' = 1                    | A . A\' = 0',
      '(A\')\' = A                     | --',
      'A + B = B + A                 | A . B = B . A',
      'A + (B + C) = (A + B) + C     | A(BC) = (AB)C',
      'A(B + C) = AB + AC            | A + BC = (A + B)(A + C)',
      'A + AB = A                    | A(A + B) = A',
      '(A + B)\' = A\' B\'              | (AB)\' = A\' + B\'',
      'A + A\'B = A + B              | A(A\' + B) = AB',
      'AB + A\'C + BC = AB + A\'C      | (A+B)(A\'+C)(B+C) = (A+B)(A\'+C)'
    ]
  },

  // Page 36 (Internal Page 32)
  {
    pageNumber: 36,
    internalPageNo: 32,
    unit: 'UNIT - 1',
    title: 'Boolean Functions & Truth Tables (F1 = x + y\'z)',
    lines: [
      'Boolean Function:',
      'A Boolean function described by an algebraic expression consists of binary variables, constants 0 and 1, and logic operation symbols.',
      'For n variables, there are 2^n possible rows in the truth table.',
      '',
      'Consider Boolean function: F1 = x + y\'z',
      'F1 = 1 if x = 1 or if both y = 0 and z = 1.',
      '',
      'Truth Table for F1:',
      'x | y | z | F1',
      '--+---+---+---',
      '0 | 0 | 0 |  0',
      '0 | 0 | 1 |  1',
      '0 | 1 | 0 |  0',
      '0 | 1 | 1 |  0',
      '1 | 0 | 0 |  1',
      '1 | 0 | 1 |  1',
      '1 | 1 | 0 |  1',
      '1 | 1 | 1 |  1',
      '',
      'Logic gate implementation: AND gate with y\' and z, feeding into OR gate with x.'
    ]
  },

  // Page 37 (Internal Page 33)
  {
    pageNumber: 37,
    internalPageNo: 33,
    unit: 'UNIT - 1',
    title: 'Non-Uniqueness of Boolean Expressions & Algebraic Minimization',
    lines: [
      'Boolean expressions - NOT unique:',
      'Unlike truth tables, algebraic expressions representing a Boolean function are NOT unique.',
      'Example: F(x,y,z) = x\'y\'z\' + x\'yz\' + xyz\' is identical to G(x,y,z) = x\'y\'z\' + yz\'. Both have identical truth tables!',
      '',
      'Algebraic Manipulation (Minimization of Boolean function):',
      'Why minimize? Simpler means cheaper, smaller, and faster digital circuits.',
      '',
      'Example: Simplify F = x\'yz + x\'yz\' + xz',
      '  F = x\'y(z + z\') + xz',
      '    = x\'y(1) + xz',
      '    = x\'y + xz'
    ]
  },

  // Page 38 (Internal Page 34)
  {
    pageNumber: 38,
    internalPageNo: 34,
    unit: 'UNIT - 1',
    title: 'Algebraic Proofs, Function Complements & Canonical Form Definitions',
    lines: [
      'Example: Prove x\'y\'z\' + x\'yz\' + xyz\' = x\'z\' + yz\'',
      'Proof:',
      '  x\'y\'z\' + x\'yz\' + xyz\'',
      '  = x\'y\'z\' + x\'yz\' + x\'yz\' + xyz\'  (since x + x = x)',
      '  = x\'z\'(y\' + y) + yz\'(x\' + x)',
      '  = x\'z\'(1) + yz\'(1)',
      '  = x\'z\' + yz\' (Q.E.D.)',
      '',
      'Complement of a Function:',
      'Derived by interchanging (. and +), (1 and 0), and complementing each variable (or by DeMorgan\'s theorems).',
      'The complement of a function IS NOT THE SAME as the dual of a function!',
      'Example: Find complement of F = xy\'z\' + x\'yz',
      '  F\' = (xy\'z\' + x\'yz)\' = (xy\'z\')\' . (x\'yz)\' = (x\' + y + z)(x + y\' + z\')',
      '',
      'Definitions:',
      '• Literal: A variable or its complement (e.g. A, A\').',
      '• Product term: Literals connected by AND (.).',
      '• Sum term: Literals connected by OR (+).',
      '• Minterm: A product term in which ALL variables appear exactly once.',
      '• Maxterm: A sum term in which ALL variables appear exactly once.'
    ]
  }
];
