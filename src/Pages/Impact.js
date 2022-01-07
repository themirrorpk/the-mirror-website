import React from "react";
import "../App.css";
import "./Impact.css";

import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import Footer from "../components/Footer";
import image from "../images/impact.png";
import Header from "../components/Header_impact";
export default function Impact() {
  return (
    <>
      {/* <HeroSection/> */}

      {/* <div className="hero">
        <h1 className="about"> Impact </h1>
      </div> */}
      <Header></Header>
      <div className="row-text-center">
        <div className="container-impact">
          {/* <div> */}
          <img className="headerim" src={image} alt="" />
          {/* <img src="../images"></img> */}
          {/* </div> */}
          {/* <div>
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
          <div></div> */}
        </div>

        <div class="grid">
          <Container style={{ "overflow-x": "hidden" }} >
            <Row md={4}>
              <Col>
                {" "}
                <div>
                  <text className="title"> Physical </text>{" "}
                </div>
                <div>
                  <text className="contact">
                    Self defense training and online sessions with Pretty Deadly{" "}
                  </text>{" "}
                </div>
              </Col>
              <Col xs={6}>
                <div>
                  <text className="title"> Emotional </text>{" "}
                </div>
                <div>
                  <text className="contact">
                    BGSP - Successful group therapy sessions with 25 women{" "}
                  </text>{" "}
                </div>
              </Col>
              <Col>
                <div>
                  <text className="title"> Social </text>{" "}
                </div>
                <div>
                  <text className="contact">
                    {" "}
                    #MaiMazboot Campaign with Mind Matters, 2 Art Therapy
                    Events, 2 Successful social Internships
                  </text>{" "}
                </div>
              </Col>
            </Row>
          </Container>
          <div className="row-text-center">
          <Container style={{ "overflow-x": "hidden" }}>
            <Row md={4}>
              <Col>
                {" "}
                <div>
                  <text className="title"> Financial </text>{" "}
                </div>
                <div>
                  <text className="contact">
                    Project Hayat: 2 successful cases so far
                  </text>{" "}
                </div>
              </Col>
              <Col xs={6}>
                <div>
                  <text className="title"> Legal </text>{" "}
                </div>
                <div>
                  <text className="contact">
                    Pro Bono Legal Aid (In development), Harassment Hotline (In
                    development)
                  </text>{" "}
                </div>
              </Col>
              <Col>
                <div>
                  <text className="title"> Educational </text>{" "}
                </div>
                <div>
                  <text className="contact">
                    {" "}
                    Aurat Beyond the Bar, Video Campaigns, School Awareness
                    sessions, Consent Education Curriculum (In development){" "}
                  </text>{" "}
                </div>
              </Col>
            </Row>
          </Container>
          </div>
          
        </div>
      </div>
      <Footer />
    </>
  );
}
