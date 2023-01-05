import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

const makePDF = () => {
  const convertToImg = async () => {
    // html to imageFile
    const paper = document.querySelector('#root');

    const canvas = await html2canvas(paper, { scale: 2 });
    const imageFile = canvas.toDataURL('image/png', 1.0);

    return imageFile;
  };

  const convertToPdf = (imageFile) => {
    // imageFile to pdf

    const doc = new jsPDF('p', 'px', 'a4', true);

    const pageWidth = doc.internal.pageSize.getWidth();
    const pageHeight = doc.internal.pageSize.getHeight();

    doc.addImage(imageFile, 'JPEG', 0, 0, pageWidth, pageHeight);

    // doc.save("test.pdf")

    window.open(doc.output('bloburl'));

    const pdf = new File([doc.output('blob')], 'test.pdf', {
      type: 'application/pdf',
    });

    return pdf;
  };

  return {
    viewWithPdf: async () => {
      // html to imageFile
      const imageFile = await convertToImg();

      // imageFile to Pdf
      convertToPdf(imageFile);
    },
  };
};

export default makePDF;
