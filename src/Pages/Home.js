import "../App.css";
// import mainSection from "../mainSection";
import React from "react";
import HeroSection from "../components/HeroSection";
import Cards from "../components/Cards";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <HeroSection />
      <Cards />
      <Footer />
      {/* <mainSection /> */}
    </>
  );
}

export default Home;
