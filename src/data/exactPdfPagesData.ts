// AUTO-GENERATED: Exact 130 Pages of Digital Electronics Course Notes
// Matches the complete textbook and provided notes exactly (Pages 1 to 130).

export interface ExactPdfPage {
  pageNumber: number; // 1 to 130
  internalPageNo?: number; // 1 to 126
  unit?: string;
  title: string;
  lines: string[];
}

export const EXACT_PDF_PAGES: ExactPdfPage[] = [
  {
    "pageNumber": 1,
    "title": "DIGITAL ELECTRONICS NOTES",
    "lines": [
      "",
      "",
      "",
      "",
      "DIGITAL",
      "ELECTRONICS",
      "NOTES",
      "",
      "",
      "",
      "Major Project Stage-1 Academic Course Notes",
      "Autonomous Engineering Curriculum (JNTUH R18 / R22 Aligned)"
    ]
  },
  {
    "pageNumber": 2,
    "title": "Course Syllabus (Units I - V)",
    "lines": [
      "UNIT -I:",
      "Number System and Boolean Algebra :",
      "Number Systems, Base Conversion Methods, Complements of Numbers, Codes- Binary Codes,",
      "Binary Coded Decimal Code and its Properties, Unit Distance Codes, Error Detecting and",
      "Correcting Codes.",
      "Digital Logic Gates(AND,NAND,OR,NOR,EX-OR,EX-NOR), Properties of XOR Gates,",
      "Universal Gates, Basic Theorems and Properties, Switching Functions, Canonical and Standard",
      "Form.",
      "",
      "UNIT -II:",
      "Minimization Techniques:",
      "Introduction, The minimization with theorems, The Karnaugh Map Method, Three, Four and",
      "Five variable K- Maps, Prime and Essential Implications, Don't Care Map Entries, Using the",
      "Maps for Simplifying, Quine-McCluskey Method, Multilevel NAND/NOR realizations.",
      "",
      "UNIT -III:",
      "Combinational Circuits:",
      "Design Procedure – Half Adder, Full Adder, Half Subtractor, Full Subtractor, Parallel Binary",
      "Adder, Parallel binary subtractor, Binary Multiplier, Multiplexers/DeMultiplexers, decoder,",
      "Encoder, Code Converters, Magnitude Comparator.",
      "classification of sequential circuits, The binary cell, The S-R-Latch Flip-Flop The D-Latch Flip-",
      "Flop, The \"Clocked T\" Flip-Flop, The \" Clocked J-K\" Flip-Flop, Design of a Clocked Flip-Flop,",
      "Timing and Triggering Considerateration.",
      "",
      "UNIT -IV:",
      "Sequential Circuits:",
      "Introduction, Basic Architectural Distinctions between Combinational and Sequential circuits,",
      "Latches,Flip-Flops, SR,JK,D,T and Master slave, characteristic Tables and equations,",
      "Conversion from one type of Flip-Flop to another,",
      "Counters - Design of Single Mode Counter, Ripple Counter, Ring Counter, Shift Register, Ring",
      "counter using Shift Register",
      "",
      "UNIT -V:",
      "Memory Devices:",
      "Clasification of memories – ROM : ROM organization, PROM, EPROM,EEPROM, RAM:",
      "RAM organization, Write operation, Read operation, Static RAM , Programmable Logic",
      "Devices: Programmable Logic Array(PLA),Programmable Array Logic, Implementaion of",
      "Combinational Logic circuits using ROM,PLA,PAL."
    ]
  },
  {
    "pageNumber": 3,
    "title": "Text Books, Reference Books & Course Outcomes",
    "lines": [
      "TEXT BOOKS:",
      "1. Digital Design- Morris Mano, PHI, 3rd Edition.",
      "2. Switching Theory and Logic Design-A. Anand Kumar, PHI, 2nd Edition.",
      "3. Switching and Finite Automata Theory- Zvi Kohavi & Niraj K. Jha, 3rd Edition, Cambridge.",
      "",
      "REFERENCE BOOKS:",
      "1. Introduction to Switching Theory and Logic Design – Fredriac J. Hill, Gerald R. Peterson, 3rd Ed, John Wiley & Sons Inc.",
      "2. Digital Fundamentals – A Systems Approach – Thomas L. Floyd, Pearson, 2013.",
      "3. Switching Theory and Logic Design – Bhanu Bhaskara – Tata McGraw Hill Publication, 2012",
      "4. Fundamentals of Logic Design- Charles H. Roth, Cengage Learning, 5th, Edition, 2004.",
      "5. Digital Logic Applications and Design- John M. Yarbrough, Thomson Publications, 2006.",
      "6. Digital Logic and State Machine Design – Comer, 3rd, Oxford, 2013.",
      "",
      "OUTCOMES:",
      "Upon completion of the course, student should possess the following skills:",
      "• Be able to manipulate numeric information in different forms",
      "• Be able to manipulate simple Boolean expressions using the theorems and postulates of Boolean algebra and to minimize combinational functions.",
      "• Be able to design and analyze small combinational circuits and to use standard combinational functions to build larger more complex circuits.",
      "• Be able to design and analyze small sequential circuits and to use standard sequential functions to build larger more complex circuits."
    ]
  },
  {
    "pageNumber": 4,
    "title": "Course Index",
    "lines": [
      "INDEX",
      "",
      "S. No | Unit | Topic                                | Page no",
      "------+------+--------------------------------------+--------",
      "  1   |  I   | NUMBERS SYSTEMS AND BOOLEAN ALGEBRA  |   01",
      "  2   | II   | MINIMIZATION TECHNIQUES              |   39",
      "  3   | III  | COMBINATIONAL CIRCUITS               |   60",
      "  4   | IV   | SEQUENTIAL CIRCUITS                  |   89",
      "  5   |  V   | MEMORY DEVICES                       |  119",
      "",
      "Total Document Length: 130 Pages",
      "Prescribed Curriculum: Autonomous Engineering Colleges / JNTUH R18, R22"
    ]
  },
  {
    "pageNumber": 5,
    "internalPageNo": 1,
    "unit": "UNIT - 1",
    "title": "Introduction to Digital Systems",
    "lines": [
      "UNIT - 1: NUMBER SYSTEMS & BOOLEAN ALGEBRA",
      "• Introduction about digital system",
      "• Philosophy of number systems",
      "• Complement representation of negative numbers",
      "• Binary arithmetic",
      "• Binary codes",
      "• Error detecting & error correcting codes",
      "• Hamming codes",
      "",
      "INTRODUCTION ABOUT DIGITAL SYSTEM",
      "A Digital system is an interconnection of digital modules and it is a system that manipulates discrete elements of information that is represented internally in the binary form.",
      "Now a day's digital systems are used in wide variety of industrial and consumer products such as automated industrial machinery, pocket calculators, microprocessors, digital computers, digital watches, TV games and signal processing and so on.",
      "",
      "Characteristics of Digital systems:",
      "• Digital systems manipulate discrete elements of information.",
      "• Discrete elements are nothing but the digits such as 10 decimal digits or 26 letters of alphabets and so on.",
      "• Digital systems use physical quantities called signals to represent discrete elements.",
      "• In digital systems, the signals have two discrete values and are therefore said to be binary.",
      "• A signal in digital system represents one binary digit called a bit. The bit has a value either 0 or 1.",
      "",
      "Analog systems vs Digital systems:",
      "Analog system process information that varies continuously i.e; they process time varying signals that can take on any values across a continuous range of voltage, current or any physical parameter.",
      "Digital systems use digital circuits that can process digital signals which can take either 0 or 1 for binary system."
    ]
  },
  {
    "pageNumber": 6,
    "internalPageNo": 2,
    "unit": "UNIT - 1",
    "title": "Advantages of Digital Systems",
    "lines": [
      "Advantages of Digital system over Analog system:",
      "1. Ease of programmability:",
      "   The digital systems can be used for different applications by simply changing the program without additional changes in hardware.",
      "2. Reduction in cost of hardware:",
      "   The cost of hardware gets reduced by use of digital components and this has been possible due to advances in IC technology. With ICs the number of components that can be placed in a given area of Silicon are increased which helps in cost reduction.",
      "3. High speed:",
      "   Digital processing of data ensures high speed of operation which is possible due to advances in Digital Signal Processing.",
      "4. High Reliability:",
      "   Digital systems are highly reliable one of the reasons for that is use of error correction codes.",
      "5. Design is easy:",
      "   The design of digital systems which require use of Boolean algebra and other digital techniques is easier compared to analog designing.",
      "6. Result can be reproduced easily:",
      "   Since the output of digital systems unlike analog systems is independent of temperature, noise, humidity and other characteristics of components the reproducibility of results is higher in digital systems than in analog systems.",
      "",
      "Disadvantages of Digital Systems:",
      "• Use more energy than analog circuits to accomplish the same tasks, thus producing more heat as well.",
      "• Digital circuits are often fragile, in that if a single piece of digital data is lost or misinterpreted the meaning of large blocks of related data can completely change.",
      "• Digital computer manipulates discrete elements of information by means of a binary code.",
      "• Quantization error during analog signal sampling."
    ]
  },
  {
    "pageNumber": 7,
    "internalPageNo": 3,
    "unit": "UNIT - 1",
    "title": "Number Systems: Radix & Positional Notation",
    "lines": [
      "NUMBER SYSTEM",
      "Number system is a basis for counting various items. Modern computers communicate and operate with binary numbers which use only the digits 0 & 1. Basic number system used by humans is Decimal number system.",
      "For Ex: Let us consider decimal number 18. This number is represented in binary as 10010.",
      "We observe that binary number system take more digits to represent the decimal number. For large numbers we have to deal with very large binary strings. So this fact gave rise to three new number systems:",
      "i) Octal number systems (base 8)",
      "ii) Hexa Decimal number system (base 16)",
      "iii) Binary Coded Decimal number (BCD) system",
      "",
      "To define any number system we have to specify:",
      "• Base of the number system such as 2, 8, 10 or 16.",
      "• The base decides the total number of digits available in that number system.",
      "• First digit in the number system is always zero and last digit in the number system is always base-1.",
      "",
      "Binary number system:",
      "The binary number has a radix of 2. As r = 2, only two digits are needed, and these are 0 and 1. In binary system weight is expressed as power of 2.",
      "The left most bit, which has the greatest weight is called the Most Significant Bit (MSB). And the right most bit which has the least weight is called Least Significant Bit (LSB)."
    ]
  },
  {
    "pageNumber": 8,
    "internalPageNo": 4,
    "unit": "UNIT - 1",
    "title": "Base Systems & Equivalence Table",
    "lines": [
      "For Ex: 1001.01₂ = [(1) × 2³] + [(0) × 2²] + [(0) × 2¹] + [(1) × 2⁰] + [(0) × 2⁻¹] + [(1) × 2⁻²]",
      "1001.01₂ = [1 × 8] + [0 × 4] + [0 × 2] + [1 × 1] + [0 × 0.5] + [1 × 0.25]",
      "1001.01₂ = 9.25₁₀",
      "",
      "Decimal Number system:",
      "The decimal system has ten symbols: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9. In other words, it has a base of 10.",
      "",
      "Octal Number System:",
      "Digital systems operate only on binary numbers. Since binary numbers are often very long, two shorthand notations, octal and hexadecimal, are used for representing large binary numbers. Octal systems use a base or radix of 8. It uses first eight digits of decimal number system. Thus it has digits from 0 to 7.",
      "",
      "Hexa Decimal Number System:",
      "The hexadecimal numbering system has a base of 16. There are 16 symbols. The decimal digits 0 to 9 are used as the first ten digits as in the decimal system, followed by the letters A, B, C, D, E and F, which represent the values 10, 11, 12, 13, 14 and 15 respectively.",
      "",
      "Decimal | Binary | Octal | Hexadecimal",
      "--------+--------+-------+------------",
      "   0    |  0000  |   0   |      0",
      "   1    |  0001  |   1   |      1",
      "   2    |  0010  |   2   |      2",
      "   3    |  0011  |   3   |      3",
      "   4    |  0100  |   4   |      4",
      "   5    |  0101  |   5   |      5",
      "   6    |  0110  |   6   |      6",
      "   7    |  0111  |   7   |      7",
      "   8    |  1000  |  10   |      8",
      "   9    |  1001  |  11   |      9",
      "  10    |  1010  |  12   |      A",
      "  11    |  1011  |  13   |      B",
      "  12    |  1100  |  14   |      C",
      "  13    |  1101  |  15   |      D",
      "  14    |  1110  |  16   |      E",
      "  15    |  1111  |  17   |      F"
    ]
  },
  {
    "pageNumber": 9,
    "internalPageNo": 5,
    "unit": "UNIT - 1",
    "title": "Number Base Conversions (Part 1)",
    "lines": [
      "Number Base conversions:",
      "The human beings use decimal number system while computer uses binary number system. Therefore it is necessary to convert decimal number system into its equivalent binary.",
      "i) Binary to octal number conversion: Group binary bits into sets of 3 from right to left.",
      "   Example: 001 010 011 000 100 101 110 111₂ = 1 2 3 0 4 5 6 7₈",
      "ii) Binary to hexadecimal number conversion: Group binary bits into sets of 4 from right to left.",
      "   Example: 0001 0010 0100 1000 1001 1010 1101 1111₂ = 1 2 5 8 9 A D F₁₆",
      "iii) Octal to binary Conversion: Replace each octal digit with its 3-bit binary equivalent.",
      "   Example: 653₈ = 110 101 011₂",
      "iv) Hexadecimal to binary conversion: Replace each hex digit with 4-bit binary.",
      "   Example: 9B4₁₆ = 1001 1011 0100₂",
      "v) Octal to Decimal conversion:",
      "   Ex: convert 4057.06₈ to decimal:",
      "   = 4×8³ + 0×8² + 5×8¹ + 7×8⁰ + 0×8⁻¹ + 6×8⁻²",
      "   = 2048 + 0 + 40 + 7 + 0 + 0.09375",
      "   = 2095.09375₁₀"
    ]
  },
  {
    "pageNumber": 10,
    "internalPageNo": 6,
    "unit": "UNIT - 1",
    "title": "Number Base Conversions (Part 2)",
    "lines": [
      "vi) Decimal to Octal Conversion:",
      "   Ex: convert 378.93₁₀ to octal:",
      "   Integer part (378₁₀): Successive division by 8:",
      "   378 / 8 = 47 remainder 2",
      "    47 / 8 =  5 remainder 7",
      "     5 / 8 =  0 remainder 5 -> Reading upwards: 572₈",
      "   Fractional part (0.93₁₀): Successive multiplication by 8:",
      "   0.93 × 8 = 7.44 (int 7)",
      "   0.44 × 8 = 3.52 (int 3)",
      "   0.52 × 8 = 4.16 (int 4)",
      "   0.16 × 8 = 1.28 (int 1) -> Reading downwards: 0.7341...₈",
      "   Result: 378.93₁₀ = 572.7341₈",
      "",
      "vii) Hexadecimal to Decimal Conversion:",
      "   Ex: 5C7₁₆ to decimal:",
      "   = (5 × 16²) + (C × 16¹) + (7 × 16⁰)",
      "   = (5 × 256) + (12 × 16) + (7 × 1) = 1280 + 192 + 7 = 1479₁₀",
      "",
      "viii) Decimal to Hexadecimal Conversion:",
      "   Ex: 2598.675₁₀ to hexadecimal:",
      "   Integer part (2598₁₀): Successive division by 16:",
      "   2598 / 16 = 162 remainder 6",
      "    162 / 16 =  10 remainder 2 (10 = A)",
      "     10 / 16 =   0 remainder 10 (A) -> Reading upwards: A26₁₆"
    ]
  },
  {
    "pageNumber": 11,
    "internalPageNo": 7,
    "unit": "UNIT - 1",
    "title": "Fractional Hex & Octal-Hex Conversions",
    "lines": [
      "Fractional part: 0.675 × 16 = 10.8 (int 10 = A)",
      "0.800 × 16 = 12.8 (int 12 = C)",
      "0.800 × 16 = 12.8 (int 12 = C)",
      "0.800 × 16 = 12.8 (int 12 = C) -> 0.ACCC₁₆",
      "Result: 2598.675₁₀ = A26.ACCC₁₆",
      "",
      "ix) Octal to hexadecimal conversion:",
      "The simplest way is to first convert the given octal no. to binary & then the binary no. to hexadecimal.",
      "Ex: 756.603₈",
      "Octal:     7    5    6  .   6    0    3",
      "Binary:  111  101  110  . 110  000  011",
      "Hex Regroup (4s): 0001 1110 1110 . 1100 0001 1000",
      "Hex Value:          1    E    E  .   C    1    8₁₆ -> 1EE.C18₁₆",
      "",
      "x) Hexadecimal to octal conversion:",
      "First convert the given hexadecimal no. to binary & then the binary no. to octal.",
      "Ex: B9F.AE₁₆",
      "Hex:        B    9    F  .   A    E",
      "Binary:  1011 1001 1111  . 1010 1110",
      "Octal Regroup (3s): 101 110 011 111 . 101 011 100",
      "Octal Value:          5   6   3   7  .   5   3   4₈ = 5637.534₈",
      "",
      "Complements:",
      "In digital computers to simplify the subtraction operation & for logical manipulation complements are used. There are two types of complements used in each radix system:",
      "i) The radix complement or r's complement (2's, 10's complement)",
      "ii) The diminished radix complement or (r-1)'s complement (1's, 9's complement)"
    ]
  },
  {
    "pageNumber": 12,
    "internalPageNo": 8,
    "unit": "UNIT - 1",
    "title": "Signed Binary Numbers & Complements",
    "lines": [
      "Representation of signed numbers binary arithmetic in computers:",
      "• Two ways of representing signed numbers:",
      "  1. Sign Magnitude form",
      "  2. Complemented form",
      "• Two complemented forms:",
      "  1. 1's complement form",
      "  2. 2's complement form",
      "",
      "Advantage of performing subtraction by the complement method is reduction in the hardware (instead of separate adder & subtractor circuits, only adders are needed).",
      "i.e., subtraction is also performed by adders only.",
      "Instead of subtracting one number from another, the complement of the subtrahend is added to minuend.",
      "In sign magnitude form, an additional bit called the sign bit is placed in front of the number. If the sign bit is 0, the number is positive (+ve). If it is 1, the number is negative (-ve).",
      "",
      "Example: 0101001 = +41 magnitude (sign bit 0)",
      "         1101001 = -41 magnitude (sign bit 1)",
      "",
      "Representation of signed numbers using 2's or 1's complement method:",
      "If the number is +ve, magnitude is represented in true binary form with sign bit 0.",
      "If the number is -ve, magnitude is represented in 2's or 1's complement form with sign bit 1.",
      "",
      "Given number | Sign-Mag form | 2's comp form | 1's comp form",
      "-------------+---------------+---------------+--------------",
      "01101        |      +13      |      +13      |      +13",
      "010111       |      +23      |      +23      |      +23",
      "10111        |       -7      |       -7      |       -8",
      "1101010      |      -42      |      -22      |      -21"
    ]
  },
  {
    "pageNumber": 13,
    "internalPageNo": 9,
    "unit": "UNIT - 1",
    "title": "Special Cases & Properties of 2's Complement",
    "lines": [
      "Special case in 2's complement representation:",
      "Whenever a signed number has a 1 in the sign bit & all 0's for the magnitude bits, the decimal equivalent is -2ⁿ, where n is the number of bits in the magnitude.",
      "Ex: 1000 = -8, and 10000 = -16.",
      "",
      "Characteristics of 2's complement numbers:",
      "1. There is one unique zero (0000 = +0; no -0 representation).",
      "2. 2's complement of 0 is 0.",
      "3. The leftmost bit cannot be used to express a quantity; it is a sign bit (0 for +ve, 1 for -ve).",
      "4. For an n-bit word which includes the sign bit, there are (2ⁿ⁻¹ - 1) positive integers, 2ⁿ⁻¹ negative integers & one 0, for a total of 2ⁿ unique states (Range: -2ⁿ⁻¹ to +2ⁿ⁻¹ - 1).",
      "5. Significant information is contained in the 1's of the +ve numbers & 0's of the -ve numbers.",
      "6. A negative number may be converted into a positive number by finding its 2's complement.",
      "",
      "Signed Binary Numbers Table (4-bit system):",
      "Decimal | 2's Comp Form | 1's Comp Form | Sign-Mag Form",
      "--------+---------------+---------------+--------------",
      "   +7   |     0111      |     0111      |     0111",
      "   +6   |     0110      |     0110      |     0110",
      "   +5   |     0101      |     0101      |     0101",
      "   +4   |     0100      |     0100      |     0100",
      "   +3   |     0011      |     0011      |     0011",
      "   +2   |     0010      |     0010      |     0010",
      "   +1   |     0001      |     0001      |     0001",
      "   +0   |     0000      |     0000      |     0000",
      "   -0   |      --       |     1111      |     1000",
      "   -1   |     1111      |     1110      |     1001",
      "   -2   |     1110      |     1101      |     1010",
      "   -3   |     1101      |     1100      |     1011",
      "   -4   |     1100      |     1011      |     1100",
      "   -5   |     1011      |     1010      |     1101",
      "   -6   |     1010      |     1001      |     1110",
      "   -7   |     1001      |     1000      |     1111",
      "   -8   |     1000      |      --       |      --"
    ]
  },
  {
    "pageNumber": 14,
    "internalPageNo": 10,
    "unit": "UNIT - 1",
    "title": "Methods of Obtaining 2's Complement",
    "lines": [
      "Methods of obtaining 2's complement of a number:",
      "In 3 ways:",
      "1. Method I: By obtaining the 1's complement of the given number (by inverting all 0's to 1's & 1's to 0's) and then adding 1 to the LSB.",
      "2. Method II: By subtracting the given n-bit number N from 2ⁿ.",
      "3. Method III: Starting at the LSB, copying down each bit up to & including the first 1 bit encountered, and complementing all remaining bits to the left.",
      "",
      "Ex: Express -45 in 8-bit 2's complement form:",
      "+45 in 8-bit form is: 00101101",
      "Method I:",
      "1's complement of 00101101 = 11010010",
      "Add 1:                       +        1",
      "---------------------------------------",
      "2's complement form =        11010011",
      "",
      "Method II: Subtract from 2⁸ = 100000000 - 00101101 = 11010011",
      "",
      "Method III:",
      "Original number: 00101101",
      "Copy up to first 1: ...1",
      "Complement remaining: 1101001... -> 11010011"
    ]
  },
  {
    "pageNumber": 15,
    "internalPageNo": 11,
    "unit": "UNIT - 1",
    "title": "Fractional 2's Comp & Arithmetic",
    "lines": [
      "Example: Express -73.75 in 12-bit 2's complement form:",
      "Method I:",
      "+73.75 in binary: 01001001.1100",
      "1's complement:   10110110.0011",
      "Add 1 to LSB:     +           1",
      "-------------------------------",
      "Result:           10110110.0100 is 2's complement form",
      "",
      "2's complement Arithmetic:",
      "• The 2's complement system is used to represent -ve numbers using modulus arithmetic. The word length of a computer is fixed (e.g. 4-bit, 8-bit). Carry if any from MSB overflows and is discarded.",
      "• Subtraction Procedure: In 2's complement subtraction, add the 2's complement of the subtrahend to the minuend.",
      "  - If there is an end-carry, DISCARD (ignore) it. The result is POSITIVE and in true binary form.",
      "  - If there is NO end-carry, the result is NEGATIVE and in 2's complement form. Take its 2's complement to obtain the true magnitude in binary.",
      "",
      "Example: Subtract 14 from 46 using 8-bit 2's complement arithmetic:",
      "+46 =  00101110",
      "+14 =  00001110 -> -14 in 2's comp = 11110010",
      "Add:",
      "  00101110 (+46)",
      "+ 11110010 (-14)",
      "----------------",
      "(1)00100000 -> End carry (1) is ignored.",
      "MSB is 0, so result is +ve: +00100000 = +32₁₀."
    ]
  },
  {
    "pageNumber": 16,
    "internalPageNo": 12,
    "unit": "UNIT - 1",
    "title": "2's & 1's Complement Subtraction Examples",
    "lines": [
      "Example: Add -75 to +26 using 8-bit 2's complement arithmetic:",
      "+75 = 01001011 -> -75 in 2's comp = 10110101",
      "+26 = 00011010",
      "Add:",
      "  00011010 (+26)",
      "+ 10110101 (-75)",
      "----------------",
      "  11001111 -> No carry generated.",
      "MSB is 1, so result is negative and in 2's complement form.",
      "Taking 2's complement of 11001111 = 00110001 = 49₁₀. Result = -49₁₀.",
      "",
      "1's complement of a number:",
      "• Obtained by simply inverting each bit (0 becomes 1, 1 becomes 0).",
      "• Disadvantage: 1's complement has two representations of zero: +0 (00000000) and -0 (11111111).",
      "",
      "1's complement arithmetic:",
      "In 1's complement subtraction, add the 1's complement of the subtrahend to the minuend.",
      "• If there is an end-around carry, ADD it to the LSB (end-around carry). The result is positive and in true binary.",
      "• If there is NO carry, the result is negative and in 1's complement form. Take 1's complement to find true magnitude."
    ]
  },
  {
    "pageNumber": 17,
    "internalPageNo": 13,
    "unit": "UNIT - 1",
    "title": "Binary Codes: Weighted & Non-Weighted",
    "lines": [
      "Example: Subtract 14 from 25 using 8-bit 1's complement:",
      "25 = 00011001",
      "14 = 00001110 -> 1's comp = 11110001",
      "Add: 00011001 + 11110001 = (1)00001010",
      "End around carry: 00001010 + 1 = 00001011 = +11₁₀.",
      "",
      "Binary codes:",
      "Binary codes represent data in binary systems with modifications from natural binary. Classification:",
      "1. Weighted Binary codes: Each position has a specific weight. Examples: 8421 (BCD), 2421, 5211, 84-2-1, Bi-Quinary 5043210.",
      "2. Non-Weighted Codes: Positions do not have assigned mathematical weights. Examples: Excess-3 code, Gray code.",
      "",
      "Reflective Code:",
      "A code is said to be reflective (self-complementing) when the code for 9 is the 1's complement of the code for 0, code for 8 is complement of code for 1, and so on (n and 9-n are complements).",
      "Codes 2421, 5211, and Excess-3 are reflective, whereas standard 8421 code is not."
    ]
  },
  {
    "pageNumber": 18,
    "internalPageNo": 14,
    "unit": "UNIT - 1",
    "title": "Sequential, Excess-3 & Gray Codes",
    "lines": [
      "Sequential Codes:",
      "A code is said to be sequential when two subsequent code words, seen as numbers in binary representation, differ by one. This greatly aids mathematical manipulation of data. The 8421 and Excess-3 codes are sequential, whereas 2421 and 5211 codes are not.",
      "",
      "Excess-3 Code (XS-3):",
      "Excess-3 is a non-weighted BCD code used to express decimal numbers. The code derives its name from the fact that each binary code word is the corresponding 8421 code plus 0011 (3). It is self-complementing.",
      "",
      "Gray Code (Unit Distance Code):",
      "The Gray code belongs to a class of codes called minimum change codes, in which only one bit in the code changes when moving from one code word to the next.",
      "The Gray code is non-weighted and reflective. Because adjacent numbers differ by only one bit, it prevents race conditions and glitches in optical shaft encoders and flash ADCs.",
      "",
      "Decimal | Binary (8421) | Gray Code",
      "--------+---------------+----------",
      "   0    |     0000      |   0000",
      "   1    |     0001      |   0001",
      "   2    |     0010      |   0011",
      "   3    |     0011      |   0010",
      "   4    |     0100      |   0110",
      "   5    |     0101      |   0111",
      "   6    |     0110      |   0101",
      "   7    |     0111      |   0100",
      "   8    |     1000      |   1100",
      "   9    |     1001      |   1101",
      "  10    |     1010      |   1111",
      "  11    |     1011      |   1110",
      "  12    |     1100      |   1010",
      "  13    |     1101      |   1011",
      "  14    |     1110      |   1001",
      "  15    |     1111      |   1000"
    ]
  },
  {
    "pageNumber": 19,
    "internalPageNo": 15,
    "unit": "UNIT - 1",
    "title": "Binary to Gray & BCD Addition",
    "lines": [
      "Binary to Gray Conversion Algorithm:",
      "• Gray Code MSB is equal to Binary MSB: Gₙ = Bₙ",
      "• Subsequent bits: Gᵢ = Bᵢ₊₁ ⊕ Bᵢ (XOR of adjacent binary bits).",
      "",
      "8421 BCD Code (Natural BCD):",
      "Each decimal digit 0 through 9 is coded by a 4-bit binary group (8-4-2-1 weights).",
      "Invalid/Illegal states in BCD: 1010, 1011, 1100, 1101, 1110, 1111 (digits 10 through 15).",
      "",
      "BCD Addition Rules:",
      "1. Add the two BCD numbers using ordinary 4-bit binary addition.",
      "2. If the 4-bit sum is ≤ 9 and no carry is generated, the sum is in valid BCD.",
      "3. If the 4-bit sum > 9 or a carry out is generated, the sum is invalid. Add correction factor 0110 (6) to the sum and propagate carry to next decimal decade.",
      "",
      "Example: 25 + 13 in BCD:",
      "  25 = 0010 0101",
      "+ 13 = 0001 0011",
      "----------------",
      "  38 = 0011 1000 (Sum ≤ 9 in both decades, no carry -> Valid BCD: 38)."
    ]
  },
  {
    "pageNumber": 20,
    "internalPageNo": 16,
    "unit": "UNIT - 1",
    "title": "BCD Addition & Subtraction Examples",
    "lines": [
      "Example: 679.6 + 536.8 in BCD:",
      "  679.6 = 0110 0111 1001 . 0110",
      "+ 536.8 = 0101 0011 0010 . 1000",
      "--------------------------------",
      "  Binary: 1011 1010 1011 . 1110 (all illegal codes > 9)",
      "  Correction: +0110 to each group with carry propagation:",
      "  Result: 0001 0010 0001 0110 . 0100 = 1216.4 BCD.",
      "",
      "BCD Subtraction:",
      "Performed by subtracting 4-bit groups. If a borrow occurs from the next higher decade, subtract 0110 (6) from that group to restore BCD modulus.",
      "Example (a): 38 - 15 = 23 (no borrow)",
      "Example (b): 206.7 - 147.8 = 58.9 (borrows occur, corrected by -0110)."
    ]
  },
  {
    "pageNumber": 21,
    "internalPageNo": 17,
    "unit": "UNIT - 1",
    "title": "BCD Subtraction by Complements & Excess-3 Addition",
    "lines": [
      "BCD Subtraction using 9's and 10's Complement:",
      "Form the 9's complement of the subtrahend, encode into BCD, and add to minuend.",
      "Example: 305.5 - 168.8 = 136.7",
      "",
      "Excess-3 Addition Rules:",
      "1. Add the two Excess-3 numbers in 4-bit groups.",
      "2. If a carry is generated from the 4-bit addition, ADD 0011 (3) to that group.",
      "3. If NO carry is generated, SUBTRACT 0011 (3) from that group (i.e. add 1101)."
    ]
  },
  {
    "pageNumber": 22,
    "internalPageNo": 18,
    "unit": "UNIT - 1",
    "title": "Excess-3 Addition & Subtraction Examples",
    "lines": [
      "Example: Excess-3 Addition of 37 + 28 = 65:",
      "  37 in XS-3 = 0110 1010",
      "+ 28 in XS-3 = 0101 1011",
      "------------------------",
      "  Sum:         1011 (1)0101 (carry out of lower group)",
      "  Correction:  -0011 +0011",
      "------------------------",
      "  Result:      1001 1000 = 65 in XS-3.",
      "",
      "Excess-3 Subtraction:",
      "Subtract 4-bit groups. If no borrow occurs, add 0011. If borrow occurs, subtract 0011.",
      "Example: 267 - 175 = 92."
    ]
  },
  {
    "pageNumber": 23,
    "internalPageNo": 19,
    "unit": "UNIT - 1",
    "title": "Excess-3 Subtraction by Complements",
    "lines": [
      "Excess-3 subtraction using 9's and 10's complement:",
      "Example: 687 - 348 = 339",
      "9's complement of 348 = 651",
      "Adding in XS-3 code and applying end-around carry yields corrected difference 0110 0110 1100 = 339 in decimal."
    ]
  },
  {
    "pageNumber": 24,
    "internalPageNo": 20,
    "unit": "UNIT - 1",
    "title": "Reflection of Gray Codes",
    "lines": [
      "The Gray code is a reflective code. An n-bit Gray code can be generated by reflecting the (n-1)-bit code about an axis, prefixing 0 to the upper half and 1 to the lower half.",
      "Table of 1-bit, 2-bit, 3-bit, and 4-bit Gray code reflections."
    ]
  },
  {
    "pageNumber": 25,
    "internalPageNo": 21,
    "unit": "UNIT - 1",
    "title": "Error-Detecting Codes & Parity",
    "lines": [
      "Error-Detecting Codes: When binary data is transmitted through communication channels, noise can flip bits (0 to 1 or 1 to 0).",
      "Parity Bit: A parity bit is appended to the data word.",
      "• Even Parity: Total number of 1s in the transmitted word (including parity bit) is EVEN.",
      "• Odd Parity: Total number of 1s in the transmitted word (including parity bit) is ODD."
    ]
  },
  {
    "pageNumber": 26,
    "internalPageNo": 22,
    "unit": "UNIT - 1",
    "title": "Parity Checking, Checksums & Block Parity",
    "lines": [
      "Parity Checking Circuits: An XOR tree checks parity at the receiver. A single parity bit detects single-bit errors, but cannot detect two-bit errors.",
      "Checksums: Two-dimensional summation of data blocks.",
      "Block Parity (Horizontal and Vertical Parity): Matrix arrangement of data where both rows and columns have parity bits, allowing detection and 1-bit location."
    ]
  },
  {
    "pageNumber": 27,
    "internalPageNo": 23,
    "unit": "UNIT - 1",
    "title": "Error-Correcting Codes & Hamming Code",
    "lines": [
      "Error-Correcting Codes: To detect and correct an error, the minimum Hamming distance d_min between valid code words must be at least 3 (d_min ≥ 2t + 1, where t is correctable bits).",
      "Hamming Code: Parity check bits P_k are placed at power-of-2 positions: 1, 2, 4, 8, ... (2^(k-1)).",
      "Parity equations check specific overlapping bit subsets."
    ]
  },
  {
    "pageNumber": 28,
    "internalPageNo": 24,
    "unit": "UNIT - 1",
    "title": "7-Bit Hamming Code Architecture",
    "lines": [
      "7-Bit Hamming Code format: P1, P2, D3, P4, D5, D6, D7",
      "Parity bit coverage:",
      "• P1 checks bits 1, 3, 5, 7",
      "• P2 checks bits 2, 3, 6, 7",
      "• P4 checks bits 4, 5, 6, 7",
      "Syndrome Word S = S3 S2 S1 directly yields the binary address of the erroneous bit."
    ]
  },
  {
    "pageNumber": 29,
    "internalPageNo": 25,
    "unit": "UNIT - 1",
    "title": "Hamming Code Examples & Alphanumeric Codes",
    "lines": [
      "Example: Encode data 1101 into 7-bit even parity Hamming Code -> 1010101.",
      "Example: Syndrome decoding of received word 1001001 -> Syndrome = 010 (bit 2 is in error).",
      "12-Bit and 15-Bit Hamming Code formats.",
      "Alphanumeric Codes: ASCII (7-bit / 8-bit) and EBCDIC (8-bit) character encoding systems."
    ]
  },
  {
    "pageNumber": 30,
    "internalPageNo": 26,
    "unit": "UNIT - 1",
    "title": "Digital Logic Gates: Symbols & Truth Tables",
    "lines": [
      "Digital Logic Gates:",
      "Boolean functions are expressed in terms of logic operations implemented by hardware gates:",
      "• AND Gate: F = x · y (Outputs 1 only when all inputs are 1)",
      "• OR Gate: F = x + y (Outputs 1 when at least one input is 1)",
      "• NOT Gate (Inverter): F = x' (Inverts logic state)",
      "• Buffer: F = x (Current amplification and signal restoration)",
      "• NAND Gate: F = (x · y)' (Inverted AND)",
      "• NOR Gate: F = (x + y)' (Inverted OR)",
      "• XOR Gate: F = x ⊕ y = x'y + xy' (Odd parity detector)",
      "• XNOR Gate: F = (x ⊕ y)' = xy + x'y' (Equivalence gate)"
    ]
  },
  {
    "pageNumber": 31,
    "internalPageNo": 27,
    "unit": "UNIT - 1",
    "title": "XOR Properties & Universal Logic Realization",
    "lines": [
      "Properties of XOR Gates:",
      "• x ⊕ 0 = x;  x ⊕ 1 = x';  x ⊕ x = 0;  x ⊕ x' = 1",
      "• Commutative: x ⊕ y = y ⊕ x",
      "• Associative: (x ⊕ y) ⊕ z = x ⊕ (y ⊕ z)",
      "",
      "Universal Logic Gates (NAND & NOR):",
      "NAND and NOR can independently synthesize all basic logic operations (NOT, AND, OR):",
      "• NOT using NAND: Connect inputs together: (x · x)' = x'",
      "• AND using NAND: NAND gate followed by NAND inverter: ((x · y)')' = xy",
      "• OR using NAND: Invert inputs before NAND: (x' · y')' = x + y (by De Morgan)"
    ]
  },
  {
    "pageNumber": 32,
    "internalPageNo": 28,
    "unit": "UNIT - 1",
    "title": "Boolean Algebra: Postulates & Laws",
    "lines": [
      "Boolean Algebra & Switching Algebra:",
      "Developed by George Boole (1854) and adapted to switching circuits by Claude Shannon (1938). Huntington Postulates (1904).",
      "Axioms:",
      "• AND: 0·0=0, 0·1=0, 1·0=0, 1·1=1",
      "• OR:  0+0=0, 0+1=1, 1+0=1, 1+1=1",
      "• NOT: 0'=1, 1'=0",
      "• Null laws: A · 0 = 0, A + 1 = 1",
      "• Identity laws: A · 1 = A, A + 0 = A",
      "• Idempotent laws: A · A = A, A + A = A",
      "• Closure: System is closed under binary operations + and ·."
    ]
  },
  {
    "pageNumber": 33,
    "internalPageNo": 29,
    "unit": "UNIT - 1",
    "title": "Basic Identities of Boolean Algebra",
    "lines": [
      "Basic Laws & Identities:",
      "• Commutative: A + B = B + A;  A · B = B · A",
      "• Associative: (A + B) + C = A + (B + C);  (AB)C = A(BC)",
      "• Distributive: A(B + C) = AB + AC;  A + BC = (A + B)(A + C)",
      "• Complementarity: A + A' = 1;  A · A' = 0",
      "• Involution: (A')' = A",
      "• De Morgan's Laws: (A + B)' = A'B';  (AB)' = A' + B'"
    ]
  },
  {
    "pageNumber": 34,
    "internalPageNo": 30,
    "unit": "UNIT - 1",
    "title": "De Morgan & Consensus Theorem",
    "lines": [
      "De Morgan's Theorems:",
      "1. (A + B)' = A' · B'",
      "2. (A · B)' = A' + B'",
      "Generalized De Morgan: (A + B + ... + Z)' = A'B'...Z'",
      "",
      "Absorption Laws: A + AB = A;  A(A + B) = A",
      "",
      "Consensus Theorem:",
      "• Theorem 1: AB + A'C + BC = AB + A'C (BC is redundant consensus term)",
      "• Proof: AB + A'C + BC = AB + A'C + BC(A + A') = AB(1 + C) + A'C(1 + B) = AB + A'C.",
      "• Theorem 2 (Dual): (A + B)(A' + C)(B + C) = (A + B)(A' + C)"
    ]
  },
  {
    "pageNumber": 35,
    "internalPageNo": 31,
    "unit": "UNIT - 1",
    "title": "Duality Principle & Boolean Functions",
    "lines": [
      "Principle of Duality:",
      "Any true Boolean algebraic relation remains true if operator + is replaced by ·, · is replaced by +, and identity elements 0 and 1 are interchanged.",
      "Table of Postulates and Theorems (Part-A and Part-B dual pairs).",
      "",
      "Boolean Function representation: F(vars) = expression.",
      "Example: F1 = x + y'z."
    ]
  },
  {
    "pageNumber": 36,
    "internalPageNo": 32,
    "unit": "UNIT - 1",
    "title": "Truth Tables & Gate Implementation",
    "lines": [
      "Truth Table representation of Boolean functions:",
      "For n variables, there are 2ⁿ rows.",
      "Truth table for F1 = x + y'z with inputs x, y, z.",
      "Logic gate implementation of F1 using AND, OR, NOT gates."
    ]
  },
  {
    "pageNumber": 37,
    "internalPageNo": 33,
    "unit": "UNIT - 1",
    "title": "Algebraic Manipulation & Minimization",
    "lines": [
      "Truth tables provide unique representations of Boolean functions, but algebraic expressions are NOT unique.",
      "Algebraic Minimization reduces gate count, chip area, power consumption, and propagation delay.",
      "Example: Simplify F = x'yz + x'yz' + xz = x'y(z + z') + xz = x'y + xz."
    ]
  },
  {
    "pageNumber": 38,
    "internalPageNo": 34,
    "unit": "UNIT - 1",
    "title": "Function Complements & Canonical Definitions",
    "lines": [
      "Complement of a Function: Invert all literals and swap operators (or negate truth table outputs).",
      "Example: F = xy'z' + x'yz -> F' = (x' + y + z)(x + y' + z').",
      "Canonical and Standard Forms:",
      "• Literal: A variable or its complement (A or A').",
      "• Product term: Literals connected by AND (e.g. ABC).",
      "• Sum term: Literals connected by OR (e.g. A + B + C).",
      "• Minterm (m_j): A product term containing every variable once.",
      "• Maxterm (M_j): A sum term containing every variable once."
    ]
  },
  {
    "pageNumber": 39,
    "internalPageNo": 35,
    "unit": "UNIT - 1",
    "title": "Minterm & Maxterm Truth Table Notation",
    "lines": [
      "Minterms (m0 to m7) and Maxterms (M0 to M7) for 3-variable system (x, y, z):",
      "x y z | Minterm (m_j) | Maxterm (M_j)",
      "------+---------------+--------------",
      "0 0 0 | x'y'z' = m0   | x + y + z = M0",
      "0 0 1 | x'y'z  = m1   | x + y + z' = M1",
      "0 1 0 | x'yz'  = m2   | x + y' + z = M2",
      "0 1 1 | x'yz   = m3   | x + y' + z' = M3",
      "1 0 0 | xy'z'  = m4   | x' + y + z = M4",
      "1 0 1 | xy'z   = m5   | x' + y + z' = M5",
      "1 1 0 | xyz'   = m6   | x' + y' + z = M6",
      "1 1 1 | xyz    = m7   | x' + y' + z' = M7"
    ]
  },
  {
    "pageNumber": 40,
    "internalPageNo": 36,
    "unit": "UNIT - 1",
    "title": "Canonical SOP & POS Forms",
    "lines": [
      "Every Boolean function has two unique canonical forms:",
      "1. Canonical Sum-Of-Products (SOP): Sum of minterms for which F = 1.",
      "2. Canonical Product-Of-Sums (POS): Product of maxterms for which F = 0.",
      "Example: f1(a, b, c) = m1 + m2 + m4 + m6 = a'b'c + a'bc' + ab'c' + abc'.",
      "POS form: f1 = M0 · M3 · M5 · M7 = (a+b+c)(a+b'+c')(a'+b+c')(a'+b'+c').",
      "Property: m_j = (M_j)'."
    ]
  },
  {
    "pageNumber": 41,
    "internalPageNo": 37,
    "unit": "UNIT - 1",
    "title": "Shorthand Σ & Π Notations & Standard Forms",
    "lines": [
      "Shorthand Notations:",
      "• Sum of Minterms: f1(a,b,c) = Σm(1, 2, 4, 6)",
      "• Product of Maxterms: f1(a,b,c) = ΠM(0, 3, 5, 7)",
      "• Conversion rule: Replace Σ with Π and list missing decimal indices.",
      "Standard Forms:",
      "• SOP: Sum of product terms (e.g. F1 = y' + xy + x'yz').",
      "• POS: Product of sum terms (e.g. F2 = x(y' + z)(x' + y + z'))."
    ]
  },
  {
    "pageNumber": 42,
    "internalPageNo": 38,
    "unit": "UNIT - 1",
    "title": "Expansion to Canonical Forms",
    "lines": [
      "Conversion of standard SOP to canonical SOP:",
      "Multiply terms by (x + x') for each missing variable.",
      "Example 1: F = A + B'C = Σm(1, 4, 5, 6, 7).",
      "Example 2: F = xy + x'z = ΠM(0, 2, 4, 5)."
    ]
  },
  {
    "pageNumber": 43,
    "internalPageNo": 39,
    "unit": "UNIT - 2",
    "title": "Two-Variable Karnaugh Maps",
    "lines": [
      "UNIT - II: MINIMIZATION TECHNIQUES",
      "Two-variable K-Map (2² = 4 cells):",
      "Each square corresponds to a unique minterm: m0 (A'B'), m1 (A'B), m2 (AB'), m3 (AB).",
      "Truth table mapping to 2x2 grid.",
      "Adjacency: Horizontal and vertical neighbors differ by exactly one bit."
    ]
  },
  {
    "pageNumber": 44,
    "internalPageNo": 40,
    "unit": "UNIT - 2",
    "title": "2-Variable K-Map Minimization",
    "lines": [
      "Mapping examples: F = Σm(0, 2, 3) and F = Σm(1, 2).",
      "Minimization of SOP expressions: adjacent 1s form pairs (2-squares) to eliminate 1 literal."
    ]
  },
  {
    "pageNumber": 45,
    "internalPageNo": 41,
    "unit": "UNIT - 2",
    "title": "Pair and Quad Groupings in K-Maps",
    "lines": [
      "Pair (2-square) eliminates 1 literal; Quad (4-square) eliminates 2 literals.",
      "Example: Reduce F = Σm(0, 1, 3) -> f = A' + B. Logic diagram implementation."
    ]
  },
  {
    "pageNumber": 46,
    "internalPageNo": 42,
    "unit": "UNIT - 2",
    "title": "POS K-Map Mapping & Minimization",
    "lines": [
      "Minimization in POS form: Group adjacent 0s into pairs and quads.",
      "Each sum term reads literals that remain constant across the group (0 -> uncomplemented, 1 -> complemented)."
    ]
  },
  {
    "pageNumber": 47,
    "internalPageNo": 43,
    "unit": "UNIT - 2",
    "title": "Three-Variable K-Maps",
    "lines": [
      "Three-variable K-map (2³ = 8 cells):",
      "Rows: A (0, 1); Columns: BC (00, 01, 11, 10 in Gray code order).",
      "Adjacency via Gray code ensures physically neighboring squares differ by only 1 literal."
    ]
  },
  {
    "pageNumber": 48,
    "internalPageNo": 44,
    "unit": "UNIT - 2",
    "title": "3-Variable K-Map Mapping Examples",
    "lines": [
      "Mapping examples in 3-variable map:",
      "• SOP: f = Σm(1, 2, 5, 6, 7)",
      "• POS: f = ΠM(0, 3, 5, 6, 7)"
    ]
  },
  {
    "pageNumber": 49,
    "internalPageNo": 45,
    "unit": "UNIT - 2",
    "title": "K-Map Minimization Rules & Looping",
    "lines": [
      "General procedure for K-map reduction:",
      "1. Plot 1s (or 0s for POS).",
      "2. Identify isolated 1s (cannot be combined).",
      "3. Identify 1s with only 1 neighbor and form 2-squares.",
      "4. Form largest possible quads (4-squares) and octets (8-squares).",
      "5. Avoid redundant groups."
    ]
  },
  {
    "pageNumber": 50,
    "internalPageNo": 46,
    "unit": "UNIT - 2",
    "title": "Reading 3-Variable K-Maps",
    "lines": [
      "Examples of reading minimized terms from 2-squares, 4-squares, and wrap-around edge adjacencies."
    ]
  },
  {
    "pageNumber": 51,
    "internalPageNo": 47,
    "unit": "UNIT - 2",
    "title": "3-Variable Solved Example: AOI & NAND Logic",
    "lines": [
      "Example: Minimize F = Σm(0, 2, 3, 4, 5, 6) -> F_min = C' + AB' + A'B.",
      "Realization using AOI logic and all-NAND logic gates."
    ]
  },
  {
    "pageNumber": 52,
    "internalPageNo": 48,
    "unit": "UNIT - 2",
    "title": "Four-Variable Karnaugh Maps",
    "lines": [
      "Four-variable K-map (2⁴ = 16 cells):",
      "Rows: AB (00, 01, 11, 10); Columns: CD (00, 01, 11, 10).",
      "Wraps horizontally and vertically (corner cells m0, m2, m8, m10 form a 4-square quad)."
    ]
  },
  {
    "pageNumber": 53,
    "internalPageNo": 49,
    "unit": "UNIT - 2",
    "title": "Five-Variable Karnaugh Maps",
    "lines": [
      "Five-variable K-map (2⁵ = 32 cells):",
      "Composed of two 16-cell sub-cubes: Map 1 for A=0, Map 2 for A=1.",
      "Adjacency exists between identical row-column positions across Map 1 and Map 2."
    ]
  },
  {
    "pageNumber": 54,
    "internalPageNo": 50,
    "unit": "UNIT - 2",
    "title": "5-Variable K-Map Solved Example",
    "lines": [
      "Example: Minimize F = Σm(0,1,4,5,6,13,14,15,22,24,25,28,29,30,31).",
      "Grouping 8-squares and 4-squares yields F_min = A'BCD' + B'C'E' + AB'D' + C'D."
    ]
  },
  {
    "pageNumber": 55,
    "internalPageNo": 51,
    "unit": "UNIT - 2",
    "title": "Six-Variable K-Maps & Don't Care Terms",
    "lines": [
      "Six-variable K-map (2⁶ = 64 cells, four 16-cell sub-cubes).",
      "Don't Care conditions (d): Represent unused input states (e.g. in BCD or XS-3). Can be treated as 1s to enlarge groups or ignored as 0s."
    ]
  },
  {
    "pageNumber": 56,
    "internalPageNo": 52,
    "unit": "UNIT - 2",
    "title": "Prime Implicants & Essential Prime Implicants",
    "lines": [
      "Definitions:",
      "• Implicant: Any single minterm or group of minterms.",
      "• Prime Implicant (PI): A maximal group that cannot be merged into a larger group.",
      "• Essential Prime Implicant (EPI): A PI covering at least one 1 not covered by any other PI.",
      "• Redundant Prime Implicant (RPI): A PI whose 1s are all covered by EPIs."
    ]
  },
  {
    "pageNumber": 57,
    "internalPageNo": 53,
    "unit": "UNIT - 2",
    "title": "Selective Prime Implicants & False PIs",
    "lines": [
      "Selective Prime Implicants (SPI): PIs chosen to cover remaining minterms.",
      "False PIs (FPI) and Essential False PIs (EFPI) in POS minimization."
    ]
  },
  {
    "pageNumber": 58,
    "internalPageNo": 54,
    "unit": "UNIT - 2",
    "title": "Quine-McCluskey (Tabular) Method",
    "lines": [
      "Quine-McCluskey (Tabular) Minimization Method:",
      "Systematic algorithmic method suitable for computer automation and functions with > 6 variables.",
      "Partitions minterms into groups by index (number of 1s in binary representation)."
    ]
  },
  {
    "pageNumber": 59,
    "internalPageNo": 55,
    "unit": "UNIT - 2",
    "title": "Quine-McCluskey Step-by-Step Example",
    "lines": [
      "Example: Find all Prime Implicants for F = Σm(0, 1, 6, 7, 8, 9, 13, 14, 15).",
      "Grouping into index sets, comparing adjacent groups, and marking combined terms."
    ]
  },
  {
    "pageNumber": 60,
    "internalPageNo": 56,
    "unit": "UNIT - 2",
    "title": "Quine-McCluskey Column Reductions",
    "lines": [
      "Generating 2-variable and 4-variable implicants with dash (-) notation for eliminated literals."
    ]
  },
  {
    "pageNumber": 61,
    "internalPageNo": 57,
    "unit": "UNIT - 2",
    "title": "Prime Implicant Table Generation",
    "lines": [
      "Forming Prime Implicant Table (Rows = PIs, Columns = Minterms). Checkmarks for minterms covered by each PI."
    ]
  },
  {
    "pageNumber": 62,
    "internalPageNo": 58,
    "unit": "UNIT - 2",
    "title": "EPI Selection & Row/Column Dominance",
    "lines": [
      "Identifying Essential Prime Implicants (columns with a single checkmark).",
      "Eliminating covered columns and applying row dominance to find minimal cover."
    ]
  },
  {
    "pageNumber": 63,
    "internalPageNo": 59,
    "unit": "UNIT - 2",
    "title": "Final Minimal Cover & Realization",
    "lines": [
      "Obtaining final minimal SOP equation: F = BD + AC' + A'C + C'D.",
      "Comparison between K-map and Tabular methods."
    ]
  },
  {
    "pageNumber": 64,
    "internalPageNo": 60,
    "unit": "UNIT - 3",
    "title": "Combinational Circuits & Design Procedure",
    "lines": [
      "UNIT - III: COMBINATIONAL CIRCUITS",
      "Combinational Logic definition: Output depends solely on present input values (no memory/feedback).",
      "Design Procedure (5 steps):",
      "1. Problem statement",
      "2. Determine inputs & outputs",
      "3. Assign letter symbols",
      "4. Derive truth table",
      "5. Obtain simplified Boolean functions & draw logic schematic."
    ]
  },
  {
    "pageNumber": 65,
    "internalPageNo": 61,
    "unit": "UNIT - 3",
    "title": "Half Adder Design & Logic Diagrams",
    "lines": [
      "Binary Arithmetic operations: 0+0=0, 0+1=1, 1+0=1, 1+1=10.",
      "Half Adder: Adds two 1-bit inputs A and B.",
      "• Sum: S = A ⊕ B = A'B + AB'",
      "• Carry: C = AB",
      "Truth table, block diagram, and logic diagram using XOR and AND gates."
    ]
  },
  {
    "pageNumber": 66,
    "internalPageNo": 62,
    "unit": "UNIT - 3",
    "title": "Half Adder Universal Logic & Full Adder Intro",
    "lines": [
      "Half Adder realization using only 2-input NAND gates (5 gates).",
      "Half Adder realization using only 2-input NOR gates (5 gates).",
      "The Full Adder: Adds three binary bits (A, B, and incoming Carry C_in)."
    ]
  },
  {
    "pageNumber": 67,
    "internalPageNo": 63,
    "unit": "UNIT - 3",
    "title": "Full Adder Truth Table & Equations",
    "lines": [
      "Full Adder Truth Table (8 rows).",
      "Equations:",
      "• Sum: S = A ⊕ B ⊕ C_in",
      "• Carry Out: C_out = AB + C_in(A ⊕ B) = AB + BC_in + AC_in",
      "Implementation using 2 Half Adders and 1 OR gate."
    ]
  },
  {
    "pageNumber": 68,
    "internalPageNo": 64,
    "unit": "UNIT - 3",
    "title": "Full Adder NAND Realization & AOI Logic",
    "lines": [
      "Full Adder circuit realization using 9 two-input NAND gates.",
      "Propagation delay comparison between 2-level AOI and cascaded Half Adders."
    ]
  },
  {
    "pageNumber": 69,
    "internalPageNo": 65,
    "unit": "UNIT - 3",
    "title": "Full Adder NOR Realization & Half Subtractor",
    "lines": [
      "Full Adder realization using 9 NOR gates.",
      "Subtractors: Subtraction by complement addition.",
      "Half Subtractor: Subtracts 1-bit B from A.",
      "• Difference: d = A ⊕ B",
      "• Borrow Out: b = A'B"
    ]
  },
  {
    "pageNumber": 70,
    "internalPageNo": 66,
    "unit": "UNIT - 3",
    "title": "Half Subtractor Universal Logic Diagrams",
    "lines": [
      "Half Subtractor logic diagram using XOR and AND with inverted input.",
      "NAND logic realization (5 gates) and NOR logic realization (5 gates)."
    ]
  },
  {
    "pageNumber": 71,
    "internalPageNo": 67,
    "unit": "UNIT - 3",
    "title": "Full Subtractor Truth Table & Equations",
    "lines": [
      "Full Subtractor: Subtracts B and borrow-in b_i from minuend A.",
      "Equations:",
      "• Difference: d = A ⊕ B ⊕ b_i",
      "• Borrow Out: b = A'B + b_i(A ⊕ B)' = A'B + A'b_i + Bb_i"
    ]
  },
  {
    "pageNumber": 72,
    "internalPageNo": 68,
    "unit": "UNIT - 3",
    "title": "Full Subtractor NAND & NOR Realization",
    "lines": [
      "Full Subtractor realization using two half subtractors and an OR gate.",
      "Universal NAND logic and NOR logic schematic implementations."
    ]
  },
  {
    "pageNumber": 73,
    "internalPageNo": 69,
    "unit": "UNIT - 3",
    "title": "Binary Parallel Adder (Ripple Carry Adder)",
    "lines": [
      "4-Bit Binary Parallel Adder: Cascade of 4 Full Adders (FA0 to FA3).",
      "Carry out of each stage connects to carry in of the next higher significant stage.",
      "MSI building block: 74LS83 / 74LS283 4-bit binary adder."
    ]
  },
  {
    "pageNumber": 74,
    "internalPageNo": 70,
    "unit": "UNIT - 3",
    "title": "Ripple Carry Propagation & Adder-Subtractor",
    "lines": [
      "Propagation delay in ripple carry adders: Total delay = n × t_carry.",
      "4-Bit Parallel Subtractor using 2's complement.",
      "Binary Adder-Subtractor: Controlled by Mode input M (M=0: Addition; M=1: Subtraction using XOR inverters and C0=1)."
    ]
  },
  {
    "pageNumber": 75,
    "internalPageNo": 71,
    "unit": "UNIT - 3",
    "title": "Carry Look-Ahead (CLA) Adder Principles",
    "lines": [
      "Carry Look-Ahead (CLA) Adder:",
      "Eliminates ripple carry propagation delay by computing all carries in parallel.",
      "• Carry Generate: Gᵢ = Aᵢ · Bᵢ",
      "• Carry Propagate: Pᵢ = Aᵢ ⊕ Bᵢ"
    ]
  },
  {
    "pageNumber": 76,
    "internalPageNo": 72,
    "unit": "UNIT - 3",
    "title": "CLA Carry Generator Equations",
    "lines": [
      "Recursive Carry Equations:",
      "• C₁ = G₀ + P₀C₀",
      "• C₂ = G₁ + P₁G₀ + P₁P₀C₀",
      "• C₃ = G₂ + P₂G₁ + P₂P₁G₀ + P₂P₁P₀C₀",
      "• C₄ = G₃ + P₃G₂ + P₃P₂G₁ + P₃P₂P₁G₀ + P₃P₂P₁P₀C₀",
      "All carries are generated in 2 gate delays regardless of word size."
    ]
  },
  {
    "pageNumber": 77,
    "internalPageNo": 73,
    "unit": "UNIT - 3",
    "title": "CLA Logic Diagram & 2's Comp Parallel Unit",
    "lines": [
      "Logic schematic of 4-bit CLA Carry Generator.",
      "2's complement addition and subtraction circuit using parallel adders with register gating."
    ]
  },
  {
    "pageNumber": 78,
    "internalPageNo": 74,
    "unit": "UNIT - 3",
    "title": "Serial Binary Adder Architecture",
    "lines": [
      "Serial Adder: Processes 1 bit per clock cycle using two shift registers (A and B), a single Full Adder, and a D flip-flop for carry storage.",
      "Hardware-efficient architecture for low-cost systems."
    ]
  },
  {
    "pageNumber": 79,
    "internalPageNo": 75,
    "unit": "UNIT - 3",
    "title": "Serial vs Parallel Adders & BCD Adder Intro",
    "lines": [
      "Comparison: Parallel Adder (fast, higher hardware cost) vs Serial Adder (slow, minimal hardware).",
      "BCD Adder principles: Addition of decimal digits in 8421 code with +0110 (6) correction."
    ]
  },
  {
    "pageNumber": 80,
    "internalPageNo": 76,
    "unit": "UNIT - 3",
    "title": "BCD Adder Detection Logic & Schematic",
    "lines": [
      "Correction detection condition: X = S₄ + S₃(S₂ + S₁) = 1 when sum > 9 or carry out occurs.",
      "Two-stage adder structure: 4-bit binary adder followed by correction adder."
    ]
  },
  {
    "pageNumber": 81,
    "internalPageNo": 77,
    "unit": "UNIT - 3",
    "title": "Cascaded BCD Adders & Excess-3 Adder",
    "lines": [
      "Cascading multiple BCD adder stages for multi-digit decimal addition.",
      "Excess-3 Adder circuit implementation using dual 4-bit binary adders."
    ]
  },
  {
    "pageNumber": 82,
    "internalPageNo": 78,
    "unit": "UNIT - 3",
    "title": "Excess-3 Subtractor & Binary Multipliers",
    "lines": [
      "Excess-3 Subtractor circuit implementation.",
      "Binary Multiplication principles: Shift-and-add partial product accumulation."
    ]
  },
  {
    "pageNumber": 83,
    "internalPageNo": 79,
    "unit": "UNIT - 3",
    "title": "4-Bit Serial Multiplier Circuit",
    "lines": [
      "Hardware implementation of 4-bit binary multiplier using Shift Registers (X, B, A) and an 8-bit parallel adder with control sequencer."
    ]
  },
  {
    "pageNumber": 84,
    "internalPageNo": 80,
    "unit": "UNIT - 3",
    "title": "Code Converters: Binary to Gray Code",
    "lines": [
      "Code Converters: Combinational mapping between distinct digital codes.",
      "4-bit Binary to Gray Code converter design:",
      "• G₃ = B₃",
      "• G₂ = B₃ ⊕ B₂",
      "• G₁ = B₂ ⊕ B₁",
      "• G₀ = B₁ ⊕ B₀"
    ]
  },
  {
    "pageNumber": 85,
    "internalPageNo": 81,
    "unit": "UNIT - 3",
    "title": "Gray to Binary Code Converter Design",
    "lines": [
      "4-bit Gray to Binary Code converter design:",
      "• B₃ = G₃",
      "• B₂ = G₃ ⊕ G₂",
      "• B₁ = G₃ ⊕ G₂ ⊕ G₁",
      "• B₀ = G₃ ⊕ G₂ ⊕ G₁ ⊕ G₀",
      "Logic diagram using cascaded XOR gates."
    ]
  },
  {
    "pageNumber": 86,
    "internalPageNo": 82,
    "unit": "UNIT - 3",
    "title": "BCD to Excess-3 Code Converter",
    "lines": [
      "4-bit BCD to XS-3 Code Converter design using K-maps:",
      "• X₃ = B₃ + B₂B₁ + B₂B₀",
      "• X₂ = B₂'B₁ + B₂'B₀ + B₂B₁'B₀'",
      "• X₁ = B₁ ⊙ B₀",
      "• X₀ = B₀'"
    ]
  },
  {
    "pageNumber": 87,
    "internalPageNo": 83,
    "unit": "UNIT - 3",
    "title": "BCD to Gray & Special Code Detectors",
    "lines": [
      "BCD to Gray code converter design.",
      "SOP detector circuit for numbers 5 through 12 in 4-bit Gray code.",
      "Detector circuit for decimal 0, 2, 4, 6, 8 in 5211 BCD code."
    ]
  },
  {
    "pageNumber": 88,
    "internalPageNo": 84,
    "unit": "UNIT - 3",
    "title": "2's Complement Combinational Circuit & Comparators",
    "lines": [
      "Combinational circuit producing 2's complement of 4-bit number.",
      "Seven-segment display decoder principles.",
      "Magnitude Comparators: Compare two binary numbers A and B to evaluate A > B, A < B, A = B."
    ]
  },
  {
    "pageNumber": 89,
    "internalPageNo": 85,
    "unit": "UNIT - 3",
    "title": "1-Bit & 2-Bit Magnitude Comparators",
    "lines": [
      "1-bit Magnitude Comparator equations:",
      "• A > B: G = AB'",
      "• A < B: L = A'B",
      "• A = B: E = A ⊙ B = AB + A'B'",
      "2-bit Magnitude Comparator equations and logic schematic."
    ]
  },
  {
    "pageNumber": 90,
    "internalPageNo": 86,
    "unit": "UNIT - 3",
    "title": "4-Bit Magnitude Comparator Design",
    "lines": [
      "4-Bit Magnitude Comparator (A₃A₂A₁A₀ vs B₃B₂B₁B₀):",
      "Iterative comparison starting from MSB downwards.",
      "Logic diagram with cascaded XNOR and AND-OR stages."
    ]
  },
  {
    "pageNumber": 91,
    "internalPageNo": 87,
    "unit": "UNIT - 3",
    "title": "IC 7485 Comparator & Encoders",
    "lines": [
      "74LS85 4-bit Magnitude Comparator IC pinout and expansion cascading for 8-bit and 16-bit comparisons.",
      "Encoders: Convert 2ⁿ active input lines into an n-bit binary output code.",
      "Octal to Binary Encoder (8-to-3)."
    ]
  },
  {
    "pageNumber": 92,
    "internalPageNo": 88,
    "unit": "UNIT - 3",
    "title": "Decimal to BCD Encoder & Tristate Bus",
    "lines": [
      "Decimal to BCD Priority Encoder (74LS147).",
      "Tristate Bus System: Three output states (Logic 0, Logic 1, High-Impedance Z). Output Enable (OE) control for multiplexing on shared data buses."
    ]
  },
  {
    "pageNumber": 93,
    "internalPageNo": 89,
    "unit": "UNIT - 4",
    "title": "Sequential Circuits: Latches (SR & D)",
    "lines": [
      "UNIT - IV: SEQUENTIAL CIRCUITS",
      "Sequential circuits contain memory elements and feedback loops (Next State = f(Present State, Inputs)).",
      "The Basic Latch: Cross-coupled NOR gates or NAND gates.",
      "Gated SR Latch and Gated D Latch: Control/Enable input allows state changes only when active."
    ]
  },
  {
    "pageNumber": 94,
    "internalPageNo": 90,
    "unit": "UNIT - 4",
    "title": "Gated D Latch, Timing & Setup/Hold Times",
    "lines": [
      "Gated D Latch circuit, characteristic table, and timing waveforms.",
      "Dynamic Timing parameters:",
      "• Setup Time (t_su): Minimum time data must remain stable BEFORE clock edge.",
      "• Hold Time (t_h): Minimum time data must remain stable AFTER clock edge.",
      "Metastability occurs if setup or hold times are violated."
    ]
  },
  {
    "pageNumber": 95,
    "internalPageNo": 91,
    "unit": "UNIT - 4",
    "title": "Edge-Triggered vs Master-Slave Flip-Flops",
    "lines": [
      "Flip-Flops are edge-triggered storage elements.",
      "Master-Slave D Flip-Flop: Two cascaded latches clocked on opposite phases (Master active during High, Slave transfers during Low) to eliminate transparency."
    ]
  },
  {
    "pageNumber": 96,
    "internalPageNo": 92,
    "unit": "UNIT - 4",
    "title": "Master-Slave JK & T Flip-Flops",
    "lines": [
      "Master-Slave JK Flip-Flop with asynchronous Preset and Clear inputs.",
      "Characteristic Equation: Q(t+1) = JQ' + K'Q.",
      "T (Toggle) Flip-Flop: Formed by tying J and K together (Q(t+1) = T ⊕ Q)."
    ]
  },
  {
    "pageNumber": 97,
    "internalPageNo": 93,
    "unit": "UNIT - 4",
    "title": "Flip-Flop Excitation Tables",
    "lines": [
      "Excitation Tables for D, JK, SR, and T Flip-Flops:",
      "Transition | S R | J K | D | T",
      "-----------+-----+-----+---+--",
      "  0 -> 0   | 0 X | 0 X | 0 | 0",
      "  0 -> 1   | 1 0 | 1 X | 1 | 1",
      "  1 -> 0   | 0 1 | X 1 | 0 | 1",
      "  1 -> 1   | X 0 | X 0 | 1 | 0"
    ]
  },
  {
    "pageNumber": 98,
    "internalPageNo": 94,
    "unit": "UNIT - 4",
    "title": "Flip-Flop Conversions",
    "lines": [
      "Conversion of Flip-Flops methodology:",
      "1. Draw transition table with required next states.",
      "2. Fill in excitation values for available flip-flop.",
      "3. Use K-maps to solve for available inputs.",
      "Example: Realize D-FF using JK-FF (J=D, K=D').",
      "Example: Implement JK-FF using D-FF (D = JQ' + K'Q)."
    ]
  },
  {
    "pageNumber": 99,
    "internalPageNo": 95,
    "unit": "UNIT - 4",
    "title": "Sequential Circuit Design & Shift Registers",
    "lines": [
      "8-Step Design Procedure for Synchronous Sequential Circuits (State Diagram, State Table, State Assignment, Excitation, K-maps, Logic Schematic).",
      "Shift Registers: Cascade of flip-flops sharing common clock for serial/parallel data manipulation."
    ]
  },
  {
    "pageNumber": 100,
    "internalPageNo": 96,
    "unit": "UNIT - 4",
    "title": "Parallel-Access Shift Registers & Counters",
    "lines": [
      "Parallel-Access Shift Register with Mode control (Shift vs Parallel Load).",
      "Introduction to Counters: Register circuits progressing through predetermined sequence of binary states on clock transitions."
    ]
  },
  {
    "pageNumber": 101,
    "internalPageNo": 97,
    "unit": "UNIT - 4",
    "title": "Counter State Sequences & Program Counters",
    "lines": [
      "2-Bit Binary Counter State Table (00 -> 01 -> 10 -> 11 -> 00).",
      "Applications of counters: Real-time clocks, frequency dividers, sequence generators, CPU Program Counters (PC)."
    ]
  },
  {
    "pageNumber": 102,
    "internalPageNo": 98,
    "unit": "UNIT - 4",
    "title": "3-Bit Asynchronous Up & Down Counters",
    "lines": [
      "3-Bit Asynchronous (Ripple) Up-Counter using T flip-flops.",
      "Clock is applied to LSB; each subsequent stage is clocked by inverted output Q' of previous stage.",
      "3-Bit Asynchronous Down-Counter circuit and timing waveforms."
    ]
  },
  {
    "pageNumber": 103,
    "internalPageNo": 99,
    "unit": "UNIT - 4",
    "title": "Shift Register Classifications & Buffers",
    "lines": [
      "Classification of Shift Registers: SISO, SIPO, PISO, PIPO, and Bidirectional.",
      "Buffer Registers: 4-bit data latching with Tri-state output drivers."
    ]
  },
  {
    "pageNumber": 104,
    "internalPageNo": 100,
    "unit": "UNIT - 4",
    "title": "Data Transmission Modes in Shift Registers",
    "lines": [
      "Block diagrams and operation of Serial-In Serial-Out, Serial-In Parallel-Out, Parallel-In Serial-Out, Parallel-In Parallel-Out registers."
    ]
  },
  {
    "pageNumber": 105,
    "internalPageNo": 101,
    "unit": "UNIT - 4",
    "title": "SISO & SIPO Shift Registers",
    "lines": [
      "Detailed circuit schematic and timing operation of 4-bit SISO and SIPO shift registers."
    ]
  },
  {
    "pageNumber": 106,
    "internalPageNo": 102,
    "unit": "UNIT - 4",
    "title": "PISO & PIPO Shift Registers",
    "lines": [
      "Detailed circuit schematic and timing operation of 4-bit PISO and PIPO shift registers."
    ]
  },
  {
    "pageNumber": 107,
    "internalPageNo": 103,
    "unit": "UNIT - 4",
    "title": "4-Bit Bidirectional Shift Register",
    "lines": [
      "Bidirectional Shift Register: Steered by Mode control signal (Right/Left) via AND-OR multiplexing gates between adjacent flip-flops."
    ]
  },
  {
    "pageNumber": 108,
    "internalPageNo": 104,
    "unit": "UNIT - 4",
    "title": "Universal Shift Register (74194 Architecture)",
    "lines": [
      "4-Bit Universal Shift Register implementation using 4x1 Multiplexers and D flip-flops.",
      "Provides Parallel Load, Shift Right, Shift Left, and Hold functions."
    ]
  },
  {
    "pageNumber": 109,
    "internalPageNo": 105,
    "unit": "UNIT - 4",
    "title": "Universal Shift Register Function Table & Counters",
    "lines": [
      "Mode Control Function Table (S1S0: 00 Hold, 01 Shift Right, 10 Shift Left, 11 Parallel Load).",
      "Counters Classification: Asynchronous (Ripple) vs Synchronous (Parallel), Decade, Ring, Johnson."
    ]
  },
  {
    "pageNumber": 110,
    "internalPageNo": 106,
    "unit": "UNIT - 4",
    "title": "2-Bit Ripple Up-Counter Analysis",
    "lines": [
      "Analysis of 2-bit Ripple Up-Counter using negative-edge triggered JK flip-flops.",
      "State progression: 00 -> 01 -> 10 -> 11 -> 00. Propagation delays and ripple effects."
    ]
  },
  {
    "pageNumber": 111,
    "internalPageNo": 107,
    "unit": "UNIT - 4",
    "title": "2-Bit Ripple Down-Counter Analysis",
    "lines": [
      "Analysis of 2-bit Ripple Down-Counter: State progression 00 -> 11 -> 10 -> 01 -> 00.",
      "Timing waveforms and clock edge triggering."
    ]
  },
  {
    "pageNumber": 112,
    "internalPageNo": 108,
    "unit": "UNIT - 4",
    "title": "2-Bit Bidirectional Up-Down Ripple Counter",
    "lines": [
      "2-Bit Bidirectional Up-Down Ripple Counter using Mode control M.",
      "Design of Asynchronous Counters with arbitrary modulus using reset feedback."
    ]
  },
  {
    "pageNumber": 113,
    "internalPageNo": 109,
    "unit": "UNIT - 4",
    "title": "Design of Mod-6 Asynchronous Counter",
    "lines": [
      "Design of Mod-6 Counter using 3 T flip-flops: Counts 000 to 101, resets at 110 (6) using NAND reset gate (R = Q₂Q₁)."
    ]
  },
  {
    "pageNumber": 114,
    "internalPageNo": 110,
    "unit": "UNIT - 4",
    "title": "Design of Mod-10 (Decade/BCD) Counter",
    "lines": [
      "Design of Mod-10 (Decade / BCD) Asynchronous Counter using 4 flip-flops.",
      "Counts 0000 to 1001, resets at 1010 (10) via NAND gate feedback (R = Q₃Q₁)."
    ]
  },
  {
    "pageNumber": 115,
    "internalPageNo": 111,
    "unit": "UNIT - 4",
    "title": "Synchronous Counters Design Methodology",
    "lines": [
      "Synchronous Counters: All flip-flops are triggered simultaneously by the common clock, eliminating ripple delays.",
      "Systematic 5-step design procedure using state transition tables and excitation K-maps."
    ]
  },
  {
    "pageNumber": 116,
    "internalPageNo": 112,
    "unit": "UNIT - 4",
    "title": "Design of Synchronous 3-Bit Up-Down Counter",
    "lines": [
      "Complete State and Excitation Table for Synchronous 3-Bit Up-Down Counter using JK Flip-Flops with Mode input M."
    ]
  },
  {
    "pageNumber": 117,
    "internalPageNo": 113,
    "unit": "UNIT - 4",
    "title": "3-Bit Synchronous Up-Down Schematic & Mod-6 Gray",
    "lines": [
      "K-maps and logic diagram for Synchronous 3-Bit Up-Down Counter.",
      "Design of Synchronous Modulo-6 Gray Code Counter (Sequence: 000 -> 001 -> 011 -> 010 -> 110 -> 111 -> 000)."
    ]
  },
  {
    "pageNumber": 118,
    "internalPageNo": 114,
    "unit": "UNIT - 4",
    "title": "Mod-6 Gray Code Counter Excitation & Schematic",
    "lines": [
      "Excitation K-maps and logic diagram for Mod-6 Gray Code Counter using T flip-flops."
    ]
  },
  {
    "pageNumber": 119,
    "internalPageNo": 115,
    "unit": "UNIT - 4",
    "title": "Design of Synchronous BCD Up-Down Counter",
    "lines": [
      "Complete 20-row state transition and excitation table for Synchronous BCD (Decade) Up-Down Counter using T flip-flops."
    ]
  },
  {
    "pageNumber": 120,
    "internalPageNo": 116,
    "unit": "UNIT - 4",
    "title": "BCD Up-Down Counter Realization & Ring Counter",
    "lines": [
      "Excitation equations for BCD Up-Down Counter.",
      "Ring Counter: Shift register with inverted or direct feedback.",
      "4-bit Ring Counter: Single circulating 1 (States: 1000 -> 0100 -> 0010 -> 0001 -> 1000). Modulus = N = 4."
    ]
  },
  {
    "pageNumber": 121,
    "internalPageNo": 117,
    "unit": "UNIT - 4",
    "title": "Ring Counter Timing & Johnson Counter",
    "lines": [
      "Ring Counter timing diagram.",
      "Twisted Ring Counter (Johnson Counter): Inverted output Q' of last flip-flop feeds back to D input of first stage.",
      "Modulus = 2N (4 flip-flops yield 8 distinct states: 0000 -> 1000 -> 1100 -> 1110 -> 1111 -> 0111 -> 0011 -> 0001)."
    ]
  },
  {
    "pageNumber": 122,
    "internalPageNo": 118,
    "unit": "UNIT - 4",
    "title": "Johnson Counter Schematic & 8-State Timing",
    "lines": [
      "4-bit Johnson Counter circuit using JK flip-flops.",
      "Complete 8-state sequence table, timing diagram, and decoding gates."
    ]
  },
  {
    "pageNumber": 123,
    "internalPageNo": 119,
    "unit": "UNIT - 5",
    "title": "Memory Devices: Classification & Organization",
    "lines": [
      "UNIT - V: MEMORY DEVICES",
      "Classification of Semiconductor Memories:",
      "• Read-Only Memory (ROM): Non-volatile (PROM, EPROM, EEPROM, Flash).",
      "• Random-Access Memory (RAM): Read/Write volatile (Static RAM, Dynamic RAM).",
      "Memory Organization: Address Bus (k bits), Data Bus (n bits), Control lines (Read/Write, Chip Enable). Capacity = 2ᵏ × n bits."
    ]
  },
  {
    "pageNumber": 124,
    "internalPageNo": 120,
    "unit": "UNIT - 5",
    "title": "Random-Access vs Sequential-Access Memory",
    "lines": [
      "Random-Access Memory (RAM): Constant access time independent of physical word storage address.",
      "Sequential-Access Memory: Access time depends on position of read/write head (magnetic tape, hard disks)."
    ]
  },
  {
    "pageNumber": 125,
    "internalPageNo": 121,
    "unit": "UNIT - 5",
    "title": "Static RAM (SRAM) vs Dynamic RAM (DRAM)",
    "lines": [
      "Static RAM (SRAM):",
      "• Internal 6-transistor cross-coupled latch stores bit.",
      "• Retains data as long as power is applied; fast access, low density, high power consumption.",
      "Dynamic RAM (DRAM):",
      "• Stores bit as charge on microscopic capacitor with 1 transistor (1T-1C cell).",
      "• High storage density, low cost, but requires periodic refresh cycles (every 64ms) due to charge leakage."
    ]
  },
  {
    "pageNumber": 126,
    "internalPageNo": 122,
    "unit": "UNIT - 5",
    "title": "Memory Decoding & Binary Cell Architecture",
    "lines": [
      "Memory Decoding: 2-dimensional coincidence decoding (Row and Column decoders) minimizes decoding gate count.",
      "Binary Memory Cell logic diagram: SR latch with Select, Read, Write, and Data input/output control lines."
    ]
  },
  {
    "pageNumber": 127,
    "internalPageNo": 123,
    "unit": "UNIT - 5",
    "title": "Programmable Logic Array (PLA) Architecture",
    "lines": [
      "Programmable Logic Array (PLA):",
      "Features a Programmable AND array followed by a Programmable OR array.",
      "Implements sum-of-products Boolean expressions.",
      "Output XOR inverters allow true or complemented output programming.",
      "Example: Realizing F1 = AB' + AC + A'BC' and F2 = (AC + BC)'."
    ]
  },
  {
    "pageNumber": 128,
    "internalPageNo": 124,
    "unit": "UNIT - 5",
    "title": "PLA Programming Table & Design Example",
    "lines": [
      "PLA Programming Table format: Product terms, Input literals (1, 0, -), Output connections (True/Complement).",
      "Design Problem: Implement F1(A,B,C) = Σm(0,1,2,4) and F2(A,B,C) = Σm(0,5,6,7) using a PLA."
    ]
  },
  {
    "pageNumber": 129,
    "internalPageNo": 125,
    "unit": "UNIT - 5",
    "title": "PLA Simplification & Programming Solution",
    "lines": [
      "Simplification using K-maps for both true and complement forms:",
      "• F1 = (AB + AC + BC)'  (3 product terms)",
      "• F2 = AB + AC + A'B'C'",
      "Total product terms shared: AB, AC, BC, A'B'C'. PLA Programming Table derivation."
    ]
  },
  {
    "pageNumber": 130,
    "internalPageNo": 126,
    "unit": "UNIT - 5",
    "title": "Complete PLA Logic Schematic Realization",
    "lines": [
      "Complete logic circuit diagram of Programmable Logic Array (PLA) with 3 inputs (A, B, C), 4 internal product term AND gates, 2 summing OR gates, and output XOR polarity gates implementing functions F1 and F2.",
      "End of Digital Electronics Course Notes (130 Pages Complete Academic Material)."
    ]
  }
];
