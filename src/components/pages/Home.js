import React from "react";
import HeroSection from "../HeroSection";
import Products from "./Products";
import ContactUs from "./ContactUs";
import AboutUs from "./AboutUs";

function Home() {
  return (
    <>
      <HeroSection />
      <AboutUs />
    

      <Products />
     
      <ContactUs />
    </>
  );
}

export default Home;
