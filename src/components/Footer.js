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
            <h2>About Us</h2>
            <Link to="/">Home</Link>
            <Link to="/about-us">About Us</Link>
            <Link to="/products">Staff Members</Link>
            <Link to="/photogallery">Photo Gallery</Link>
            <a href="https://www.facebook.com/groups/philippinelanguage">Facebook</a>
            
          </div>
        </div>
        <div className="footer-link-wrapper">
          <div class="footer-link-items">
            <h2>Links</h2>
            <Link to="/enrolment">Enrolment</Link>
            <Link to="/terms">Code of Conduct</Link>
            <Link to="/cop">Code of Practice</Link>
            <Link to="/dp">Discipline Policy</Link>
            <Link to="/criteria">Criteria on Assessing</Link>
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
            <a href="https://www.facebook.com/groups/philippinelanguage"><i class="fab fa-facebook-f"></i></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
