import React, { useState, useEffect } from "react";
import { Button } from "./Button";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../images/phillogo.ico";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link
            to="/"
            className="navbar-logo--flexbox"
            onClick={closeMobileMenu}
          >
            
            <i class="img">
              <img src={logo} width="80" height="60" alt="philippinelogo"></img>
            </i>
            <span>Philippine Language School of Victoria</span>
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/contact-us"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Contact Us
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/enrolment"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Enrolment
              </Link>
            </li>

            <li>
              <Link
                to="/about-us"
                className="nav-links-mobile"
                onClick={closeMobileMenu}
              >
                About Us
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle="btn--menu">About Us</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
