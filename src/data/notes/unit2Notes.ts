import { NoteSection } from '../../types/digitalElectronics';

export const UNIT_2_NOTES: NoteSection[] = [
  {
    id: 'sec-u2-1',
    unitId: 'unit-2',
    unitTitle: 'Unit II – Minimization Techniques',
    title: '7. Two & Three-Variable Karnaugh Maps (K-Maps) in SOP & POS Form',
    pageNumber: 39,
    summary: 'Minterm/maxterm map coordinates, Gray code column ordering, adjacency criteria (differ by power of 2), pairs, quads, and AOI/NAND implementations.',
    keyFormulas: [
      '2-variable K-map: 2^2 = 4 cells | 3-variable K-map: 2^3 = 8 cells',
      'Gray code ordering for columns: 00, 01, 11, 10 (ensures single-bit adjacency)',
      '2-square (pair) eliminates 1 variable | 4-square (quad) eliminates 2 variables | 8-square (octet) eliminates 3 variables'
    ],
    videoSequenceNos: [58, 59, 60, 61],
    circuitIds: ['gate-and', 'gate-or', 'gate-nand'],
    content: `
DIGITAL LOGIC DESIGN - Page no. 39 to 47

UNIT - II: MINIMIZATION TECHNIQUES

TWO-VARIABLE K-MAP:
A two-variable K-map has 2^2 = 4 possible combinations of input variables A and B:
• m0 = A'B' (cell 0,0)
• m1 = A'B  (cell 0,1)
• m2 = AB'  (cell 1,0)
• m3 = AB   (cell 1,1)
Assuming A is MSB. The presence of 1 indicates the minterm is included; 0 indicates absence (or maxterm).

Minimization of SOP Expressions:
Two squares are adjacent if their minterm designations differ by a power of 2.
• m0 and m1 combine to yield: f1 = A'B' + A'B = A'(B' + B) = A'
• m0 and m2 combine to yield: f2 = A'B' + AB' = B'(A' + A) = B'
• m1 and m3 combine to yield: f3 = A'B + AB = B(A' + A) = B
• m2 and m3 combine to yield: f4 = AB' + AB = A(B' + B) = A
• All 4 squares m0, m1, m2, m3 combine to yield: f5 = 1 (tautology)

Example: Minimize f = A'B' + AB' + AB:
Minterms: m0, m2, m3 = \\sum m(0, 2, 3).
Pair (m0, m2) yields B'.
Pair (m2, m3) yields A.
Minimized expression: f = A + B'

MAPPING OF POS EXPRESSIONS:
Each sum term in standard POS is a maxterm: M0 = A+B, M1 = A+B', M2 = A'+B, M3 = A'+B'.
• 0s on the map represent maxterms present in POS.
• 1s on the map represent absent maxterms (which equal minterms in SOP).
Example: Reduce f = (A + B)(A + B')(A' + B') = \\prod M(0, 1, 3):
Pair of 0s at M0 and M1 yields A.
Pair of 0s at M1 and M3 yields B'.
Minimized POS form: f = A . B' (Dual: same as SOP realization).

THREE-VARIABLE K-MAP:
Has 2^3 = 8 cells. Variable A represents row (0 or 1), variables BC represent columns.
Columns are arranged in Gray Code order: 00, 01, 11, 10.
This ensures physically adjacent squares differ by only one variable!
Cells can also wrap around horizontally: cell 0 (000) is adjacent to cell 2 (010), and cell 4 (100) is adjacent to cell 6 (110).

General Procedure to Simplify Boolean Expressions on K-Map:
1. Plot the K-map and place 1s (for minterms) or 0s (for maxterms).
2. Check for isolated cells (have no adjacencies) -> must be included as individual literals.
3. Check for cells with only one adjacency -> form 2-squares (pairs).
4. Check for 4-squares (quads) and 8-squares (octets), including wrap-around adjacencies.
5. Combine any uncombined cells into largest possible groups.
6. Write minimal sum of products (or product of sums).
`
  },
  {
    id: 'sec-u2-2',
    unitId: 'unit-2',
    unitTitle: 'Unit II – Minimization Techniques',
    title: '8. Four, Five & Six-Variable K-Maps, Don\'t-Care Conditions & Prime Implicants',
    pageNumber: 48,
    summary: '16-cell, 32-cell (2 blocks of 16), and 64-cell maps, don\'t-care (d/X) terms, definitions and identification of PIs, EPIs, RPIs, SPIs, and False PIs.',
    keyFormulas: [
      '4-variable K-map: 16 cells (rows AB: 00, 01, 11, 10; cols CD: 00, 01, 11, 10)',
      '5-variable K-map: 32 cells (Block A=0: m0-m15, Block A=1: m16-m31)',
      'Don\'t care condition: Output unspecified, treated as 1 or 0 to form larger groups',
      'PI = Prime Implicant | EPI = Essential Prime Implicant (covers at least one minterm uniquely)'
    ],
    videoSequenceNos: [62, 63, 64, 65],
    circuitIds: ['gate-and', 'gate-or', 'gate-not'],
    content: `
DIGITAL LOGIC DESIGN - Page no. 48 to 54

FOUR-VARIABLE K-MAPS:
Has 2^4 = 16 cells. Rows represent AB (00, 01, 11, 10), columns represent CD (00, 01, 11, 10).
Notice adjacency ordering: row 10 is adjacent to row 00 (wrap-around), column 10 is adjacent to column 00 (wrap-around). Corner cells (0, 2, 8, 10) form a valid 4-square quad!

Solved Example:
Reduce f = \\sum m(2, 3, 6, 7, 8, 10, 11, 13, 14)
- m13 has no adjacency -> isolated literal = A B C' D
- Quad (m2, m3, m6, m7) yields A' C
- Quad (m2, m6, m10, m14) yields C D'
- Quad (m3, m7, m11, m15 if 15 existed) or pair (m10, m11) with (m2, m3) yields B' C
Result: f_{min} = A'C + CD' + AB'C + ABCD'

FIVE-VARIABLE K-MAPS:
Has 2^5 = 32 cells divided into 2 blocks of 16 squares each:
• Left Block: A = 0 (minterms m0 to m15)
• Right Block: A = 1 (minterms m16 to m31)
Squares are adjacent if they coincide when superimposing the right block onto the left block!

DON'T CARE COMBINATIONS:
• For certain input combinations, output is unspecified because inputs are invalid (e.g. in BCD, states 1010 to 1111 never occur).
• Denoted by 'X' or 'd' or 'φ'.
• In minimization, don't cares may be assumed as 1 to enlarge groupings, or ignored as 0 if they do not help.

PRIME IMPLICANTS (PI) & ESSENTIAL PRIME IMPLICANTS (EPI):
• Prime Implicant (PI): A subcube (product term) obtained by combining maximum possible adjacent squares. Cannot be combined into any larger group.
• Essential Prime Implicant (EPI): A prime implicant that contains at least one minterm '1' that is NOT covered by any other prime implicant. Every EPI MUST be present in the minimal expression!
• Redundant Prime Implicant (RPI): A prime implicant whose 1s are already completely covered by EPIs. Can be omitted.
• Selective Prime Implicant (SPI): A PI that is neither an EPI nor an RPI. Selected to cover remaining minterms with minimum cost.
• False Prime Implicants (FPI): Prime implicants formed by grouping 0s (maxterms) for POS minimization.
`
  },
  {
    id: 'sec-u2-3',
    unitId: 'unit-2',
    unitTitle: 'Unit II – Minimization Techniques',
    title: '9. Quine–McCluskey (Tabular) Minimization Method with Solved Examples',
    pageNumber: 55,
    summary: 'Systematic algorithmic minimization for large variables, grouping by number of 1s, matching adjacent terms, prime implicant table, and row/column dominance.',
    keyFormulas: [
      'Theorem: PA + PA\' = P (eliminates variable differing by single bit)',
      'Example 3.29: f = \\sum m(0, 1, 6, 7, 8, 9, 13, 14, 15)',
      'Example 3.30: f = \\sum m(1, 2, 3, 5, 6, 7, 8, 9, 12, 13, 15) -> f_{min} = BD + AC\' + A\'C + C\'D'
    ],
    videoSequenceNos: [66, 67, 68],
    content: `
DIGITAL LOGIC DESIGN - Page no. 55 to 59

QUINE-MCCLUSKEY (TABULAR) METHOD:
Also known as the Tabular Method. A systematic algorithmic procedure based on repeated application of the combining theorem:
  PA + PA' = P (where P is a set of literals)
Unlike K-maps which become unwieldy beyond 5 or 6 variables, the Quine-McCluskey method is suitable for any number of variables and can be directly programmed into computers/CAD tools.

Procedure:
1. Group all minterms into index groups according to the number of 1s in their binary representations.
2. Compare each minterm in group i with every minterm in group (i+1). If they differ by exactly one bit, combine them, place a hyphen '-' in that position, and place a checkmark (✓) against both terms.
3. Repeat step 2 for 2-term groups to form 4-term groups, etc., until no further combinations are possible.
4. All unchecked terms are PRIME IMPLICANTS (PIs).
5. Construct Prime Implicant Chart:
   - Rows represent PIs; columns represent original minterms.
   - Place an 'X' at intersections where a PI covers a minterm.
   - If a column has only ONE 'X', the corresponding PI is an ESSENTIAL PRIME IMPLICANT (EPI).
   - Check off all minterms covered by EPIs.
   - If minterms remain, use Row/Column Dominance or Branching Method (Petrick's Method) to select minimum additional PIs.

SOLVED EXAMPLE (EXAMPLE 3.30 FROM NOTES):
Minimize f = \\sum m(1, 2, 3, 5, 6, 7, 8, 9, 12, 13, 15):

Step 1: Group by 1s:
  Index 1: m1(0001), m2(0010), m8(1000)
  Index 2: m3(0011), m5(0101), m6(0110), m9(1001), m12(1100)
  Index 3: m7(0111), m13(1101)
  Index 4: m15(1111)

Step 2: Combine pairs (differ by 1 bit):
  (1,3), (1,5), (1,9), (2,3), (2,6), (8,9), (8,12), (3,7), (5,7), (5,13), (6,7), (9,13), (12,13), (7,15), (13,15)

Step 3: Combine quads:
  (1, 3, 5, 7)    -> 0 - - 1  -> A'D  = T
  (1, 5, 9, 13)   -> - - 0 1  -> C'D  = S
  (2, 3, 6, 7)    -> 0 0 1 -  -> A'C  = R
  (8, 9, 12, 13)  -> 1 - 0 -  -> AC'  = Q
  (5, 7, 13, 15)  -> - 1 - 1  -> BD   = P

Non-combinable Prime Implicants:
• P = (5, 7, 13, 15) = BD
• Q = (8, 9, 12, 13) = AC'
• R = (2, 3, 6, 7)   = A'C
• S = (1, 5, 9, 13)  = C'D
• T = (1, 3, 5, 7)   = A'D

From PI Chart:
• m2 and m6 are covered only by R -> R is ESSENTIAL.
• m8 and m12 are covered only by Q -> Q is ESSENTIAL.
• m15 is covered only by P -> P is ESSENTIAL.
All covered except m1. Minterm 1 can be covered by S or T.
Two minimal expressions exist:
  f_{min1} = P + Q + R + S = BD + AC' + A'C + C'D
  f_{min2} = P + Q + R + T = BD + AC' + A'C + A'D
`
  }
];
