// const html2pdf = require('html2pdf.js');
// const PDF = require('../models/PDFModel');

// exports.generatePDF = async (req, res) => {
//   const { content } = req.body; // HTML content for PDF

//   const opt = {
//     margin: 10,
//     filename: "dashboard_report.pdf",
//     image: { type: "jpeg", quality: 0.98 },
//     html2canvas: { scale: 2 },
//     jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
//   };

//   try {
//     const pdf = await html2pdf().from(content).set(opt).outputPdf();
//     const newPDF = new PDF({ /* Add any relevant fields if needed */ });
//     await newPDF.save(); // Save the PDF data to the database

//     res.set('Content-Type', 'application/pdf');
//     res.send(pdf);
//   } catch (error) {
//     console.error('Error generating PDF:', error);
//     res.status(500).json({ error: 'Internal server error' });
//   }
// };
