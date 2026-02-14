
import React from "react";

import "../../App.css";
//import "./HeroSection.css";


function Childsafety() {
    
  const openPDF1 = () => {
     //Local PDF in public folder
    const pdfUrl = "/ChildSafetyCode.pdf"; 
    window.open(pdfUrl, "_blank", "noopener,noreferrer");
     
  };

    const openPDF2 = () => {
     //Local PDF in public folder
    const pdfUrl = "/ChildSafetyPolicy.pdf"; 
    window.open(pdfUrl, "_blank", "noopener,noreferrer");
     
  };

  
    const openPDF3 = () => {
     //Local PDF in public folder
    const pdfUrl = "/CyberSafety.pdf"; 
    window.open(pdfUrl, "_blank", "noopener,noreferrer");
     
  };

  return (
    <div className="childsafety-container">
    <h1 classname="childsafety">Child Safety</h1>
    <div className="childsafety-info">
      <h2>We are a Child Safe Organization</h2>
      <p><button onClick={openPDF1}>PLSV Child Safety Code of Conduct</button> </p>
      <p><button onClick={openPDF2}>PLSV Child Safety Policy &amp; Procedures</button> </p>
      <p><button onClick={openPDF3}>PLSV Cyber Safety Use Agreement</button></p>
    </div>
    </div>
   
  
  );
}

export default Childsafety;
