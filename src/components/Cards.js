import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";

//import Products from "./pages/Products";

function Cards() {
  return (

      
      
    <div className="cards">
    <h1>Philippine Language School of Victoria</h1>
      <p>Learn to speak, read and write in Filipino language</p>
      <h2>Filipino Language Offered from Beginners and Adults to VCE Level </h2>
      <h2>We are proud to be a recognised VCE provider school in Melbourne, Australia with excellent results. Our students of various ages and backgrounds, all interested in learning the Filipino language and culture. 
        We are a non-profit organisation. We aim to foster unity among Filipino-Australian as a multi-cultural society.
      </h2>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/cash.png"
              text="C- Competitive Rates"
              label="C"
            />
            <CardItem
              src="images/approval.png"
              text="A - Approval in 60 Minutes"
              label="A"
            />
            <CardItem
              src="images/time.png"
              text="S - Same day disbursement"
              label="S"
            />
            <CardItem
              src="images/hasslefree.png"
              text="H - Hassle free application"
              label="H"
            />
          </ul>
        </div>
      </div>
    </div>
    
  );
}

export default Cards;
