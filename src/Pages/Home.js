import "../App.css";
import "./Home.css";
// import mainSection from "../mainSection";
import React, { Component } from "react";
import HeroSection from "../components/HeroSection";
import Cards from "../components/Cards";
import Footer from "../components/Footer";
import logo from "../images/mirror_Copy.png"
import { ThumbDownSharp } from "@material-ui/icons";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: ""
    }
  }
  handleOnChangeEmail = email =>{
    this.setState({
      email: email
    })
  }

  handleSendEmail = email =>{
    console.log(email);
  }
  render() {
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
        <Footer email={this.state.email} handleOnChangeEmail={this.handleOnChangeEmail} handleSendEmail={this.handleSendEmail} />
        {/* <mainSection /> */}
      </>
    );
  }
}

export default Home;
