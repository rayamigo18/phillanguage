import React from "react";
import "../Cards.css";
import CardItem from "../CardItem";

function Products(props) {
  console.log(props);
  return (
    <div className="cards">
      <h1>Staff Members</h1>
      <p>The Philippine Language School of Victoria has many years of experience supporting students in developing their Filipino language skills in speaking, reading and 
        writing. We offer Filipino language programs for beginners, adults and students undertaking VCE.</p>
      <p>As a recognised VCE provider in Melbourne, Australia, we are proud of our strong record of achievement. Our students come from diverse ages and backgrounds, united 
        by their interest in learning the Filipino language and culture. As a nonprofit organisation, we are committed tofostering unity within the Filipino Australian 
        community and contributing to a vibrant multicultural society.
      </p>
       <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/perla1.jpg"
              text="Director and Founder of the Philippine Language of Victoria"
              label="Perla Leutic"
              path="/perla"
            />
            <CardItem
              src="images/maria.jpg"
              text="Assistant Director, VCE Teacher and VASS Administrator"
              label="Maria Violeta Binuya"
              path="/maria"
            />
            
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/catherine.jpg"
              text="Teacher and Child Safety Officer"
              label="Catherine Yap"
              path="/catherine"
            />
            <CardItem
              src="images/rosanna.jpg"
              text="Teacher and Assistant Child Safety Officer"
              label="Rosanna Balod"
              path="/rosanna"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Products;
