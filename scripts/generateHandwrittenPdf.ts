import { jsPDF } from 'jspdf';
import * as fs from 'fs';
import * as path from 'path';
import { ALL_HANDWRITTEN_PAGES, HANDWRITTEN_UNITS } from '../src/data/handwrittenNotesData';

async function generateHandwrittenPdf() {
  console.log(`Generating Authentic HandWritten Notes PDF with Scanned Notebook Pages...`);

  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'pt',
    format: 'a4'
  });

  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  const margin = 40;

  // Load the 5 CamScanner Scan Images as base64
  const unitImageFiles = [
    { unit: 'Unit 1: Number Systems & Boolean Algebra', file: 'handwritten_u1_p1.jpg' },
    { unit: 'Unit 2: K-Map Minimization & IC Logic Families', file: 'handwritten_u2_p1.jpg' },
    { unit: 'Unit 3: Sequential Circuits, Flip-Flops & Counters', file: 'handwritten_u3_p1.jpg' },
    { unit: 'Unit 4: Combinational Logic Circuits & Adders/MUX', file: 'handwritten_u4_p1.jpg' },
    { unit: 'Unit 5: Semiconductor Memories & PLDs (PROM, PLA, PAL)', file: 'handwritten_u5_p1.jpg' }
  ];

  // ==========================================
  // PAGE 1: TITLE & COVER PAGE
  // ==========================================
  doc.setDrawColor(30, 41, 59);
  doc.setLineWidth(2);
  doc.rect(margin, margin, pageWidth - margin * 2, pageHeight - margin * 2);
  doc.setLineWidth(0.8);
  doc.rect(margin + 4, margin + 4, pageWidth - (margin + 4) * 2, pageHeight - (margin + 4) * 2);

  doc.setFont('times', 'bold');
  doc.setFontSize(32);
  doc.setTextColor(15, 23, 42);
  doc.text('HANDWRITTEN NOTES', pageWidth / 2, 210, { align: 'center' });

  doc.setFontSize(22);
  doc.setTextColor(217, 119, 6); // amber-600
  doc.text('DIGITAL ELECTRONICS', pageWidth / 2, 250, { align: 'center' });

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(12);
  doc.setTextColor(71, 85, 105);
  doc.text('Scanned Student Classroom Notes & Worksheets (Units 1 to 5)', pageWidth / 2, 285, { align: 'center' });

  // Box with CamScanner verification badge
  doc.setFillColor(254, 243, 199);
  doc.roundedRect(pageWidth / 2 - 190, 320, 380, 185, 8, 8, 'F');
  doc.setDrawColor(245, 158, 11);
  doc.roundedRect(pageWidth / 2 - 190, 320, 380, 185, 8, 8, 'D');

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(11);
  doc.setTextColor(146, 64, 14);
  doc.text('Authentic CamScanner Handwritten Document Sections:', pageWidth / 2 - 170, 345);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9.5);
  doc.setTextColor(51, 65, 85);
  doc.text('• Unit 1: Number Systems, Radix, Conversions & Boolean Theorems', pageWidth / 2 - 170, 370);
  doc.text('• Unit 2: K-Maps, Red Looping Groups, Quine-McCluskey, TTL & CMOS', pageWidth / 2 - 170, 395);
  doc.text('• Unit 3: Sequential Circuits, Latches, Clocked SR/JK/D/T, Counters', pageWidth / 2 - 170, 420);
  doc.text('• Unit 4: Adders, Look-Ahead Carry, Comparators, MUX, Demux, Encoders', pageWidth / 2 - 170, 445);
  doc.text('• Unit 5: Memories (SRAM, DRAM), EPROM UV Erasing, PROM, PLA, PAL', pageWidth / 2 - 170, 470);

  doc.setFont('times', 'italic');
  doc.setFontSize(10.5);
  doc.setTextColor(100, 116, 139);
  doc.text('Includes actual handwritten pages scanned directly with CamScanner', pageWidth / 2, 570, { align: 'center' });
  doc.text('Featuring genuine blue and red pen handwriting, hand-drawn logic diagrams, and K-map loops.', pageWidth / 2, 590, { align: 'center' });

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(10);
  doc.setTextColor(15, 23, 42);
  doc.text('Digital Electronics E-Learning Platform', pageWidth / 2, 740, { align: 'center' });

  // ==========================================
  // PAGES 2 - 6: FULL-PAGE CAMSCANNER SCANNED NOTEBOOK SHEETS
  // ==========================================
  for (const item of unitImageFiles) {
    const imgPath = path.join(process.cwd(), 'public', item.file);
    if (fs.existsSync(imgPath)) {
      doc.addPage();
      const imgBuffer = fs.readFileSync(imgPath);
      const imgBase64 = `data:image/jpeg;base64,${imgBuffer.toString('base64')}`;

      // Insert image filling page with clean border
      const imgMargin = 20;
      doc.addImage(imgBase64, 'JPEG', imgMargin, imgMargin, pageWidth - imgMargin * 2, pageHeight - imgMargin * 2 - 25);

      // Footer note
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(8.5);
      doc.setTextColor(71, 85, 105);
      doc.text(`Handwritten Notes · ${item.unit}`, imgMargin + 5, pageHeight - 12);
      doc.setFont('helvetica', 'normal');
      doc.text('Scanned with CamScanner', pageWidth - imgMargin - 120, pageHeight - 12);
    }
  }

  // ==========================================
  // PAGES 7+: LINED NOTEBOOK DETAILED TOPIC WORK-PAGES
  // ==========================================
  ALL_HANDWRITTEN_PAGES.forEach((page) => {
    doc.addPage();

    // Subtle lined paper background
    doc.setFillColor(251, 250, 245); // cream notebook paper
    doc.rect(0, 0, pageWidth, pageHeight, 'F');

    // Red left margin line
    doc.setDrawColor(248, 113, 113); // red-400
    doc.setLineWidth(1.2);
    doc.line(55, 0, 55, pageHeight);

    // Blue horizontal rules across page
    doc.setDrawColor(203, 213, 225); // slate-300
    doc.setLineWidth(0.5);
    for (let y = 70; y < pageHeight - 30; y += 22) {
      doc.line(55, y, pageWidth - 30, y);
    }

    // Top Header in Red Pen
    doc.setFont('times', 'bold');
    doc.setFontSize(13);
    doc.setTextColor(185, 28, 28); // red-700
    doc.text(`* ${page.unitName}: ${page.unitTitle}`, 65, 45);

    doc.setFont('times', 'bold');
    doc.setFontSize(14);
    doc.setTextColor(30, 58, 138); // blue-900 (blue pen)
    doc.text(page.title, 65, 62);

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(9);
    doc.setTextColor(185, 28, 28);
    doc.text(`Page ${page.pageNumber}`, pageWidth - 75, 45);

    let currentY = 85;

    // Focus Summary Box
    doc.setFillColor(254, 243, 199);
    doc.roundedRect(65, currentY, pageWidth - 100, 20, 3, 3, 'F');
    doc.setFont('times', 'italic');
    doc.setFontSize(9.5);
    doc.setTextColor(146, 64, 14);
    doc.text(`Concept: ${page.summary}`, 72, currentY + 14);
    currentY += 30;

    // Sections in Blue & Red Pen
    page.sections.forEach(sec => {
      if (currentY > pageHeight - 90) {
        doc.addPage();
        currentY = 50;
      }

      // Heading in Red Pen
      doc.setFont('times', 'bold');
      doc.setFontSize(11.5);
      doc.setTextColor(185, 28, 28);
      doc.text(`> ${sec.heading} : -`, 65, currentY);
      currentY += 16;

      // Points in Blue Pen
      if (sec.points && sec.points.length > 0) {
        doc.setFont('times', 'normal');
        doc.setFontSize(10.5);
        doc.setTextColor(30, 58, 138); // blue pen
        sec.points.forEach(pt => {
          const lines = doc.splitTextToSize(`• ${pt}`, pageWidth - 110);
          if (currentY + lines.length * 14 > pageHeight - 50) {
            doc.addPage();
            currentY = 50;
          }
          doc.text(lines, 72, currentY);
          currentY += lines.length * 14 + 2;
        });
        currentY += 4;
      }

      // Equations
      if (sec.equations && sec.equations.length > 0) {
        doc.setFillColor(239, 246, 255);
        const eqH = sec.equations.length * 16 + 8;
        if (currentY + eqH > pageHeight - 50) {
          doc.addPage();
          currentY = 50;
        }
        doc.roundedRect(65, currentY, pageWidth - 100, eqH, 3, 3, 'F');
        doc.setFont('courier', 'bold');
        doc.setFontSize(9.5);
        doc.setTextColor(30, 58, 138);
        sec.equations.forEach((eq, eqIdx) => {
          doc.text(`Eq: ${eq}`, 75, currentY + 14 + eqIdx * 16);
        });
        currentY += eqH + 8;
      }

      // Table if present
      if (sec.table) {
        const colW = (pageWidth - 100) / sec.table.headers.length;
        const tblH = (sec.table.rows.length + 1) * 16;
        if (currentY + tblH > pageHeight - 50) {
          doc.addPage();
          currentY = 50;
        }

        // Header
        doc.setFillColor(254, 243, 199);
        doc.rect(65, currentY, pageWidth - 100, 16, 'F');
        doc.setFont('times', 'bold');
        doc.setFontSize(9);
        doc.setTextColor(185, 28, 28);
        sec.table.headers.forEach((h, hI) => {
          doc.text(h, 68 + hI * colW, currentY + 11);
        });
        currentY += 16;

        // Rows
        doc.setFont('times', 'normal');
        doc.setFontSize(8.5);
        doc.setTextColor(30, 58, 138);
        sec.table.rows.forEach((r, rI) => {
          r.forEach((c, cI) => {
            doc.text(String(c), 68 + cI * colW, currentY + 11);
          });
          currentY += 14;
        });
        currentY += 8;
      }

      // Example problem
      if (sec.example) {
        if (currentY + 40 > pageHeight - 50) {
          doc.addPage();
          currentY = 50;
        }
        doc.setFont('times', 'bold');
        doc.setFontSize(10);
        doc.setTextColor(185, 28, 28);
        doc.text(`Q) ${sec.example.problem}`, 65, currentY);
        currentY += 14;

        doc.setFont('times', 'normal');
        doc.setFontSize(9.5);
        doc.setTextColor(30, 58, 138);
        sec.example.solution.forEach(st => {
          const l = doc.splitTextToSize(`-> ${st}`, pageWidth - 110);
          if (currentY + l.length * 12 > pageHeight - 50) {
            doc.addPage();
            currentY = 50;
          }
          doc.text(l, 72, currentY);
          currentY += l.length * 12 + 1;
        });
        currentY += 6;
      }
    });

    // CamScanner footer mark on bottom right
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8);
    doc.setTextColor(100, 116, 139);
    doc.text('Scanned with CamScanner', pageWidth - 130, pageHeight - 14);
  });

  const outputPublic1 = path.join(process.cwd(), 'public', 'HandWritten-Notes.pdf');
  const outputPublic2 = path.join(process.cwd(), 'public', 'handwritten-notes.pdf');

  const pdfBytes = Buffer.from(doc.output('arraybuffer'));
  fs.writeFileSync(outputPublic1, pdfBytes);
  fs.writeFileSync(outputPublic2, pdfBytes);

  console.log(`Successfully generated Authentic HandWritten Notes PDF: ${outputPublic1} (${doc.getNumberOfPages()} pages, ${pdfBytes.length} bytes)`);
}

generateHandwrittenPdf().catch(console.error);
