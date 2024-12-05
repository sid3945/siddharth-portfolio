import React from 'react';

interface IPDF {
  
}

const PDFViewer: React.FC<IPDF> = () => {
  // Convert the sharing URL to embed URL
  const driveUrl = "https://drive.google.com/file/d/1FUAptfMCstPJxFXFAl4fr2IDvZrBj0Ju/preview";

  return (
    <div className="w-full max-w-3xl mx-auto p-4">
      <iframe
        src={driveUrl}
        className="w-full h-[800px] border-0"
        allow="autoplay"
      ></iframe>
    </div>
  );
};

export default PDFViewer;