import "../App.css";
import "./Home.css";
// import mainSection from "../mainSection";
import React from "react";
import HeroSection from "../components/HeroSection";
import Cards from "../components/Cards";
import Footer from "../components/Footer";
import logo from "../images/mirror_Copy.png"
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";

import image1 from "../images/COUS1/one.jpg";
import image2 from "../images/COUS1/two.jpg";
import image3 from "../images/COUS1/three.jpg";
import image4 from "../images/COUS1/4.jpg";

function Home() {
  return (
    <>
      <HeroSection />
      {/* <Cards /> */}
      <div className="WhyLogo">
        <img src={logo} alt="Logo" />
        <div className="Why-text">
          <h3 className="heading-logo">The meaning behind our <span>name</span> and <span>logo</span></h3>
          <p>
            The Mirror's name and logo symbolises looking inside a mirror, quite literally, to really see who you are. It was named that because we wanted people to see their own reflections, question who they are and the choices they make. The name is supposed to inspire a sense of self-awareness to look within and do what's right. It can be seen in many perspectives, but we keep the lens focused on all the abusers and we command them to become human, see what their actions can cause and put an end to their henious acts once and for all. Its the power of the mind to realize problems and then fight to make it right.
          </p>
        </div>
      </div>
      <AliceCarousel autoPlay autoPlayInterval="3000" fadeOutAnimation={true}>
        <img src={image1} className="sliderimg" alt="" />
        <img src={image2} className="sliderimg" alt="" />
        <img src={image3} className="sliderimg" alt="" />
        <img src={image4} className="sliderimg" alt="" />
      </AliceCarousel>
      <Footer />
      {/* <mainSection /> */}
    </>
  );
}

export default Home;
