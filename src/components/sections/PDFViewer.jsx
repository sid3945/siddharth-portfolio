import React from 'react';

const SimplePDFViewer = ({ pdfFile }) => {
  return (
    <div className="w-full h-screen max-w-5xl mx-auto p-4">
      {/* Option 1: Using iframe */}
      <iframe
        src={pdfFile}
        className="w-full h-full border-0 shadow-lg"
        title="PDF Viewer"
      />

      {/* Option 2: Using object tag (uncomment to use) */}
      {/* <object
        data={pdfFile}
        type="application/pdf"
        className="w-full h-full"
      >
        <p>Your browser does not support PDF viewing. Please download the PDF to view it: 
          <a href={pdfFile}>Download PDF</a>
        </p>
      </object> */}
    </div>
  );
};

export default SimplePDFViewer;