import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import logo from "../images/phillogo.ico";

function Footer() {
  return (
    <div className="footer-container">
      <div class="footer-links">
        <div className="footer-link-wrapper">
          <div class="footer-link-items">
          
            <Link to="/">Home</Link>
            <Link to="/about-us">About Us</Link>
            <Link to="/childsafety">Child Safety</Link>
             <Link to="/enrolment">Enrolment</Link>
             
            <Link to="/products">Staff Members</Link>
         
            
          </div>
        </div>
    
      </div>
      <div class="social-media">
        <div class="footer-logo">
          <Link to="/" className="social-logo">
            <i class="img">
              <img src={logo} width="80" height="60" alt="philippinelogo"></img>
            </i>
            <span>Philippine Language School of Victoria</span>
          </Link>
        </div>
        <small class="website-rights">© 2022</small>
        <div class="social-icons">
          <div class="social-icon-link facebook" aria-label="Facebook">
            <a href="https://www.facebook.com/PLSoV"><i class="fab fa-facebook-f"></i></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
