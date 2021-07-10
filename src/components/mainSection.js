import React from "react";
import { Button } from "./Button";
import "./mainSection.css";
import "../App.css";

function mainSection() {
  return (
    <div className="main-container">
      {/* THE MADE BG IMAGE OR VIDEO GOES HERE */}
      <h1>ADVENTURE AWAITS</h1>
      <p>What are you waiting for?</p>
      <div className="main-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          GET STARTED
        </Button>
      </div>
    </div>
  );
}

export default mainSection;
