import "../App.css";
import "./Home.css";
// import mainSection from "../mainSection";
import React from "react";
import HeroSection from "../components/HeroSection";
// import Cards from "../components/Cards";
import Footer from "../components/Footer";
import logo from "../images/mirror_Copy.png";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import YoutubeEmbed from "../components/YoutubeEmbed";

// import image1 from "../images/COUS1/one.jpg";
// import image2 from "../images/COUS1/two.jpg";
// import image3 from "../images/COUS1/three.jpg";
// import image4 from "../images/COUS1/4.jpg";

function Home() {
  return (
    <>
      <HeroSection />
      {/* <Cards /> */}
      <div className="WhyLogo">
        <img src={logo} alt="Logo" />
        <div className="Why-text">
          <h3 className="heading-logo">
            The meaning behind our <span>name</span> and <span>logo</span>
          </h3>
          <p>
            The Mirror's name is a metaphorical symbol that compels one to
            reflect: if they are a perpetrator, reflect on their heinous
            behavior, if they are a bystander, reflect on their complacency. The
            Mirror encourages just about everyone to critically think about
            their actions and how they influence the world around them. It
            demands self-awareness leading to social change.
          </p>
        </div>
      </div>
      <AliceCarousel
        autoPlay
        autoPlayInterval="3000"
        fadeOutAnimation={true}
        autoPlayStrategy="default"
      >
        <YoutubeEmbed embedId="V1xgIRKaG4Q" />
        <YoutubeEmbed embedId="39UrCckJSlQ" />
        <YoutubeEmbed embedId="7i-_gpPJmLU" />
        {/* <img src={image1} className="sliderimg" alt="" />
        <img src={image2} className="sliderimg" alt="" />
        <img src={image3} className="sliderimg" alt="" />
        <img src={image4} className="sliderimg" alt="" /> */}
      </AliceCarousel>
      <Footer />
      {/* <mainSection /> */}
    </>
  );
}

export default Home;
