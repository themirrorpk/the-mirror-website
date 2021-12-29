import React from "react";
import "../App.css";
import "./Contact.css";
import Header from "../components/Header_contact";

import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "../components/Footer";

export default function Contact() {
  return (
    <>
      {/* <HeroSection/> */}
      {/* <div className="hero">
        <h1 className="about"> Contact Us </h1>
      </div> */}
      <Header />
      <div class="row text-center">
        <div className="container">
          <div>
            <text className="title"> Presidents </text>{" "}
          </div>
          <div>
            <text className="contact"> themirrorpakistan@gmail.com </text>{" "}
          </div>
          <div>
            {" "}
            <text className="title">Managing Director </text>{" "}
          </div>
          <div>
            <text className="contact">shahrukh.mirror@gmail.com</text>{" "}
          </div>
          <div>
            {" "}
            <text className="title">Administrative Coordinator</text>{" "}
          </div>
          <div>
            <text className="contact">maham.mirror@gmail.com</text>
          </div>
          <div>
            {" "}
            <text className="title">General Secretary </text>{" "}
          </div>
          <div>
            <text className="contact">mahnoor.mirror@gmail.com </text>
          </div>
          <div></div>
        </div>
      </div>
      <Footer />
    </>
  );
}
