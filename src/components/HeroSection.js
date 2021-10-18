import React from "react";
import { Button } from "./Button";
import "./HeroSection.css";
import "../App.css";
import vid from "../images/mirrorTrailer2.mp4";

function HeroSection() {
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
          Donate
        </Button>
        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
        >
          YouTube <i className="far fa-play-circle" />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
