import React from "react";
import "../../App.css";

function Rosanna() {
  return (
    <div className="profile-container">
      <h1 className="profile">Rosanna Balod</h1>
      <div className="profile-info">
        <div class="aboutus-info">
          <div class="row">
            <div class="column">
              <div class="profileimg">
                <img src="images/rosanna.jpg" alt="Rosanna"></img>
              </div>
            </div>
            <div class="column">
              <br></br>
              <br></br>
              <br></br>
              <h2>Rosanna was a teacher in the Philippines for 21 years prior to her migration to Australia in
2000. She taught English and Filipino. She completed Certificate IV in Community Languages
here in Australia and has been with the Philippine Language School of Victoria since 2007.
Currently, she works as an Education Support in a government school at Caroline Springs.</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Rosanna;
