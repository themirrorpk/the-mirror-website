// import React, { useState, useEffect } from "react";
// import { Button } from "./Button";
import { Link } from "react-router-dom";
import "./HeroSection.css";
import "../App.css";
import vid from "../images/mirrorTrailer2.mp4";

function HeroSection() {
  // const [click, setClick] = useState(false);
  // const [button, setButton] = useState(true);

  // const handleClick = () => setClick(!click);
  // const closeMobileMenu = () => setClick(false);
  return (
    <div className="hero-container">
      <video src={vid} autoPlay loop muted />

      <h1> THE MIRROR PK </h1>
      <p>Non-Governmental Organization</p>
      <div className="hero-btns">
        {/* <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
            <Link to="/donate" className="linked"  onClick={closeMobileMenu}>
                 Donate
              </Link>
        </Button> */}

        <div>
          <Link to="/donate">
            <button
              type="button"
              class="btn btn-light"
              style={{ width: "150px", height: "60px" }}
            >
              Donate
            </button>
          </Link>

          {/* <Link to="/donate" className='yt'> */}
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.youtube.com/channel/UClxfoeNh4uL3ghBRtJMJABA"
            className="yt"
          >
            {/* <br /> */}
            <button
              style={{ width: "150px", height: "60px" }}
              type="button"
              class="btn btn-outline-light"
            >
              YouTube <i className="far fa-play-circle" />
            </button>
          </a>
          {/* </Link> */}
        </div>

        {/* <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
           onClick={console.log('hey')}
        >
          YouTube <i className="far fa-play-circle" />
        </Button> */}
      </div>
    </div>
  );
}

export default HeroSection;
