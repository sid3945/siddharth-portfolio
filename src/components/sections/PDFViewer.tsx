import React from 'react';

interface IPDF {

}

const PDFViewer: React.FC<IPDF> = () => {
  const driveUrl = "https://drive.google.com/file/d/1FUAptfMCstPJxFXFAl4fr2IDvZrBj0Ju/preview";

  return (
      <iframe
        src={driveUrl}
        className="w-full shadow-lg shadow-blue-500/50 h-[800px] border-0"
        allow="autoplay"
      ></iframe>
    
  );
};

export default PDFViewer;