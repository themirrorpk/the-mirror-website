import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "./Button";
import "./Navbar.css";
import companyLogo from "../images/logoimage.jpg";

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
        <div class="navbar-container">
          <Link to="/" className="navbar-logo">
            <img
              className="image"
              src={companyLogo}
              height={60}
              width={100}
              style={{
                paddingRight: "25px",
                overflow: "hidden",
                marginTop: "-20px",
              }}
              alt="MirrorPK Logo"
            />
            <div> The Mirror </div>

            {/* <i class="fab fa-typo3"></i> */}
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/about" className="nav-links" onClick={closeMobileMenu}>
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/blogs" className="nav-links" onClick={closeMobileMenu}>
                Blogs
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/impact"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Our Impact
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="/gallery"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Event Gallery
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="/contact"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
