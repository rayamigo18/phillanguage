import React from "react";
import "../../App.css";

function Rosanna() {
  return (
    <div className="aboutus-container">
      <h1 className="about-us">Rosanna Balod</h1>
        <div class="aboutus-info">
          <div class="row">
            <div class="column">
              <div class="profileimg">
                <img src="images/rosanna.jpg" alt="Rosanna"></img>
              </div>
            </div>
            <div class="column">
            <div class="aboutus-offer">
              <p><h2>Rosanna was a teacher in the Philippines for 21 years prior to her migration to Australia in
2000. She taught English and Filipino. She completed Certificate IV in Community Languages
here in Australia and has been with the Philippine Language School of Victoria since 2007.
Currently, she works as an Education Support in a government school at Caroline Springs.</h2></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Rosanna;
