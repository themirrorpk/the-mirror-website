import React, { useState, useEffect } from "react";
import { Button } from "./Button";
import { Link } from "react-router-dom";
import "./HeroSection.css";
import "../App.css";
import vid from "../images/mirrorTrailer2.mp4";

function HeroSection() {

  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  return (
    <div className="hero-container">
      {/* <image src="logo512.png"/> */}
      <video src={vid} autoPlay loop muted />

      <h1> OUR STORY</h1>
      <p>What are you waiting for</p>
      <div className="hero-btns">
      
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
            <Link to="/donate" className="linked"  onClick={closeMobileMenu}>
                 Donate
              </Link>
        </Button>
        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
           onClick={console.log('hey')}
        >
          YouTube <i className="far fa-play-circle" />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
