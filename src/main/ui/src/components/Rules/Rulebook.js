import React, { useState } from 'react';
import RuleBook from '../assets/CFVGPlaybook.pdf';
import { Document, Page, pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const RuleBookViewer: React.FC = () => {
  const [numPages, setNumPages] = useState(0);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages);
  }

  function handlePreviousPage() {
    if (pageNumber > 1) {
      setPageNumber(pageNumber - 1);
    }
  }

  function handleNextPage() {
    if (pageNumber < numPages) {
      setPageNumber(pageNumber + 1);
    }
  }

  return (
    <div className="pdf-container">
      <div className="pdf-doc">
        <Document file={RuleBook} onLoadSuccess={onDocumentLoadSuccess}>
          <Page
            pageNumber={pageNumber}
            renderTextLayer={false}
            renderAnnotationLayer={false}
          />
        </Document>
      </div>
      <div className="pdf-explorer">
        <p>
          Page {pageNumber} of {numPages}
        </p>
        <button onClick={
          (e) => {
            e.preventDefault();
            handlePreviousPage();
          }
        } disabled={pageNumber === 1}>
          ←
        </button>
        <button onClick={
          (e) => {
            e.preventDefault();
            handleNextPage();
          }
        } disabled={pageNumber === numPages}>
          →
        </button>
      </div>
    </div>
  );
};

export default RuleBookViewer;
