import { jsPDF } from 'jspdf';
import * as fs from 'fs';
import * as path from 'path';
import { EXACT_PDF_PAGES } from '../src/data/exactPdfPagesData';

async function generatePdf() {
  console.log(`Generating 130-page PDF document from EXACT_PDF_PAGES (${EXACT_PDF_PAGES.length} pages)...`);

  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'pt',
    format: 'a4'
  });

  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  const margin = 36; // 0.5 inch margin

  EXACT_PDF_PAGES.forEach((page, index) => {
    if (index > 0) {
      doc.addPage();
    }

    // Draw Outer Double Border (matching textbook pages in screenshots)
    doc.setDrawColor(15, 23, 42); // slate-900
    doc.setLineWidth(1.8);
    doc.rect(margin, margin, pageWidth - margin * 2, pageHeight - margin * 2);
    doc.setLineWidth(0.6);
    doc.rect(margin + 4, margin + 4, pageWidth - (margin + 4) * 2, pageHeight - (margin + 4) * 2);

    // Page 1: Cover Page
    if (page.pageNumber === 1) {
      doc.setFont('times', 'bold');
      doc.setFontSize(36);
      doc.setTextColor(15, 23, 42);
      doc.text('DIGITAL', pageWidth / 2, 280, { align: 'center' });
      doc.text('ELECTRONICS', pageWidth / 2, 330, { align: 'center' });
      doc.text('NOTES', pageWidth / 2, 380, { align: 'center' });

      doc.setFontSize(11);
      doc.setFont('helvetica', 'normal');
      doc.setTextColor(71, 85, 105);
      doc.text('Major Project Stage-1 Academic Course Notes', pageWidth / 2, 530, { align: 'center' });
      doc.text('Autonomous Engineering Curriculum (JNTUH R18 / R22 Aligned)', pageWidth / 2, 550, { align: 'center' });
      doc.text('Complete 130-Page E-Learning Reference Material', pageWidth / 2, 570, { align: 'center' });
      return;
    }

    // Header (for internal pages >= 5)
    if (page.pageNumber > 4 && page.internalPageNo) {
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(10);
      doc.setTextColor(30, 41, 59);
      doc.text('DIGITAL LOGIC DESIGN', margin + 14, margin + 22);

      doc.setFont('helvetica', 'normal');
      doc.text(`Page no. ${page.internalPageNo}`, pageWidth - margin - 75, margin + 22);

      // Subtle rule under header
      doc.setDrawColor(203, 213, 225);
      doc.line(margin + 14, margin + 28, pageWidth - margin - 14, margin + 28);
    } else if (page.pageNumber > 1) {
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(11);
      doc.setTextColor(14, 116, 144);
      doc.text(page.title, margin + 14, margin + 22);

      doc.setDrawColor(203, 213, 225);
      doc.line(margin + 14, margin + 28, pageWidth - margin - 14, margin + 28);
    }

    // Content Body
    let y = page.pageNumber <= 4 ? margin + 46 : margin + 46;

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(9.5);
    doc.setTextColor(30, 41, 59);

    page.lines.forEach(line => {
      if (y > pageHeight - margin - 26) {
        return; // Avoid overflowing bottom border
      }

      if (!line) {
        y += 8;
        return;
      }

      // Check for headings or main section titles
      const isHeading =
        line.startsWith('UNIT') ||
        line.startsWith('TEXT BOOKS:') ||
        line.startsWith('REFERENCE BOOKS:') ||
        line.startsWith('OUTCOMES') ||
        line.startsWith('INDEX') ||
        line.startsWith('NUMBER SYSTEM') ||
        line.startsWith('INTRODUCTION') ||
        line.startsWith('Advantages') ||
        line.startsWith('Disadvantages') ||
        line.startsWith('Binary number') ||
        line.startsWith('Decimal Number') ||
        line.startsWith('Octal Number') ||
        line.startsWith('Hexa Decimal') ||
        line.startsWith('Number Base') ||
        line.startsWith('Complements:') ||
        line.startsWith('Representation') ||
        line.startsWith('Special case') ||
        line.startsWith('Characteristics') ||
        line.startsWith('Signed binary') ||
        line.startsWith('Methods of') ||
        line.startsWith('Binary codes') ||
        line.startsWith('Reflective Code') ||
        line.startsWith('Sequential Codes') ||
        line.startsWith('Gray Code') ||
        line.startsWith('Excess-3') ||
        line.startsWith('8421 BCD') ||
        line.startsWith('BCD Addition') ||
        line.startsWith('BCD Subtraction') ||
        line.startsWith('Error –') ||
        line.startsWith('Parity:') ||
        line.startsWith('Checksums:') ||
        line.startsWith('Block parity:') ||
        line.startsWith('Digital Logic Gates') ||
        line.startsWith('Properties of XOR') ||
        line.startsWith('Universal Logic') ||
        line.startsWith('NAND as a Universal') ||
        line.startsWith('Boolean Algebra:') ||
        line.startsWith('Axioms and laws') ||
        line.startsWith('BASIC IDENTITIES') ||
        line.startsWith('DeMorgan') ||
        line.startsWith('Consensus Theorem') ||
        line.startsWith('Principle of Duality') ||
        line.startsWith('Boolean Function') ||
        line.startsWith('Truth Table') ||
        line.startsWith('Algebraic Manipulation') ||
        line.startsWith('Canonical and Standard') ||
        line.startsWith('Minterm') ||
        line.startsWith('Maxterm') ||
        line.startsWith('Two-variable k-map') ||
        line.startsWith('Three-variable K-map') ||
        line.startsWith('Four variable k-maps') ||
        line.startsWith('Five variable k-map') ||
        line.startsWith('Six variable k-map') ||
        line.startsWith('Quine-Mccluskey') ||
        line.startsWith('Combinational Logic') ||
        line.startsWith('Adders:') ||
        line.startsWith('The Half Adder') ||
        line.startsWith('The Full Adder') ||
        line.startsWith('Subtractors:') ||
        line.startsWith('The Half-Subtractor') ||
        line.startsWith('The Full-Subtractor') ||
        line.startsWith('Binary Parallel Adder') ||
        line.startsWith('Ripple carry adder') ||
        line.startsWith('The Look-Ahead') ||
        line.startsWith('Serial Adder') ||
        line.startsWith('BCD Adder') ||
        line.startsWith('Binary Multipliers') ||
        line.startsWith('Code converters') ||
        line.startsWith('Comparators') ||
        line.startsWith('Magnitude Comparator') ||
        line.startsWith('ENCODERS') ||
        line.startsWith('Tristate bus') ||
        line.startsWith('The Basic Latch') ||
        line.startsWith('The Gated Latch') ||
        line.startsWith('Flip-Flops') ||
        line.startsWith('Setup and Hold') ||
        line.startsWith('Excitation Tables') ||
        line.startsWith('Conversions of flip-flops') ||
        line.startsWith('Sequential Circuit Design') ||
        line.startsWith('Registers and Counters') ||
        line.startsWith('Shift registers') ||
        line.startsWith('Counters:') ||
        line.startsWith('Asynchronous counters') ||
        line.startsWith('Synchronous counters') ||
        line.startsWith('MEMORY') ||
        line.startsWith('Random-Access Memory') ||
        line.startsWith('Static RAM') ||
        line.startsWith('Dynamic RAM') ||
        line.startsWith('Memory decoding') ||
        line.startsWith('Programmable Logic Array');

      if (isHeading) {
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(10.5);
        doc.setTextColor(14, 116, 144); // cyan-700
        doc.text(line, margin + 16, y);
        doc.setFont('helvetica', 'normal');
        doc.setFontSize(9.5);
        doc.setTextColor(30, 41, 59);
        y += 16;
      } else if (line.startsWith('•') || line.startsWith('1.') || line.startsWith('2.') || line.startsWith('3.') || line.startsWith('4.') || line.startsWith('5.') || line.startsWith('6.')) {
        doc.setFont('helvetica', 'bold');
        doc.text(line, margin + 20, y);
        doc.setFont('helvetica', 'normal');
        y += 13.5;
      } else if (line.includes('|') || line.startsWith('---')) {
        doc.setFont('courier', 'normal');
        doc.setFontSize(8.5);
        doc.text(line, margin + 16, y);
        doc.setFont('helvetica', 'normal');
        doc.setFontSize(9.5);
        y += 12.5;
      } else {
        doc.text(line, margin + 16, y);
        y += 13.5;
      }
    });

    // Footer with total page counter
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8);
    doc.setTextColor(148, 163, 184);
    doc.text(`Page ${page.pageNumber} of 130`, pageWidth / 2, pageHeight - margin + 18, { align: 'center' });
  });

  const publicDir = path.resolve(process.cwd(), 'public');
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }

  const outputPath = path.join(publicDir, 'digital-electronics-notes-130-pages.pdf');
  const pdfBytes = doc.output('arraybuffer');
  fs.writeFileSync(outputPath, Buffer.from(pdfBytes));
  console.log(`Successfully generated authentic 130-page PDF: ${outputPath} (${EXACT_PDF_PAGES.length} pages, ${pdfBytes.byteLength} bytes)`);
}

generatePdf().catch(err => {
  console.error('Error generating PDF:', err);
  process.exit(1);
});
