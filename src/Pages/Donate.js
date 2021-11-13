import React from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "../components/Footer";
export default  function Donate() {
  return (
    <>
      {/* <HeroSection/> */}
      <div className="hero">
        <h1 className="about"> Donate </h1>
      </div>
      <div class="row text-center">
        <div className="container">
          <div>
            <text className="title"> Bank Details </text>{" "}
          </div>
          <div>
            <text className="contact"> Bank: HBL </text>{" "}</div><div>
            <text className="contact"> Account Title: Faryal Ashfaq </text>{" "}</div><div>
            <text className="contact"> Bank Account Number: 25367000052099 </text>{" "}</div><div>
            <text className="contact"> IBAN: PK25HABB0025367000052099 </text>{" "}</div><div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
