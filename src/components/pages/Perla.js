import React from "react";
import "../../App.css";

function Perla() {
  return (
    <div className="profile-container">
      <h1 className="profile">Perla Leutic</h1>
      <div className="profile-info">
        <div class="aboutus-info">
          <div class="row">
            <div class="column">
              <div class="profileimg">
                <img src="images/perla1.jpg" alt="Perla"></img>
              </div>
            </div>
            <div class="column">
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <ul>
                <li>Graduated Bachelor of Science in Community Development in Australia</li>
                <li>Bachelor of Science in Elementary Education in Philippines</li>
                <li>Founder of the Philippine Language School in Victoria  in 1995 and  granted 
                  VCE Provider of Language Other than English (LOTE) since 1999.</li>
                <li>President of Filipino Community Council of Victoria since 2013-2017 </li>
                <li>President of LUZVIMINDA  1989-1995 </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Perla;
