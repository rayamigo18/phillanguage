import React from "react";
import "../Cards.css";
import CardItem from "../CardItem";

function Products(props) {
  console.log(props);
  return (
    <div className="cards">
      <h1>Staff Members</h1>
      <p>We have years of teaching experience helping our students learn to speak, read and write in Filipino language. We offer Filipino Language from Beginners and Adults to VCE Level.
      </p>
      <p>We are proud to be a recognised VCE provider school in Melbourne, Australia with excellent results. Our students of various ages and backgrounds, all interested in learning the Filipino language and culture. 
        We are a non-profit organisation. We aim to foster unity among Filipino-Australian as a multi-cultural society.
      </p>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/perla1.jpg"
              text="Director and Founder of the Philippine Language of Victoria"
              label="Perla Leutic"
              path="/products"
            />
            <CardItem
              src="images/maria4.jpg"
              text="Assistant Director and VCE Teacher"
              label="Maria Violeta Binuya"
              path="/products"
            />
            <CardItem
              src="images/julie.jpg"
              text="Teacher"
              label="Julie Uy"
              path="/products"
            />
            
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/catherine.jpg"
              text="Teacher and Child Safety Officer"
              label="Catherine Yap"
              path="/products"
            />
            <CardItem
              src="images/roel.jpg"
              text="Teacher and in charge of Arts and Culture"
              label="Roel Paje"
              path="/products"
            />
            <CardItem
              src="images/rosanna.jpg"
              text="Teacher and Assistant Child Safety Officer"
              label="Rosanna Balod"
              path="/products"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Products;
