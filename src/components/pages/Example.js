import React from "react";
import "../../App.css";
import Example from "./PLSV.pdf";
import PdfViewer from "./components/PDFViewer";


export default function Example() {
  return (
    <div>
        <h1 className="example">Sample PDF</h1>
      <h1>React PDF Viewer</h1>
      <PdfViewer fileUrl="/PLSV.pdf" /> 
      {/* Place sample.pdf in public/ folder */}
    </div>
  );
}