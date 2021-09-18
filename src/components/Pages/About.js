import React from "react";
import "../../App.css";
import "./About.css";
import founders from "../images/team/Founders.jpeg";
import mahnoor from "../images/team/Mahnoor-GS.jpg";
import maham from "../images/team/Maham- AC.jpg";
import shahrukh from "../images/team/shahrukh2.jpeg";

import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "../Footer";

export default function About() {
  return (
    <>
    {/* <HeroSection/> */}
    <div className='hero'>
    <h1 className="about"> Our Mission </h1>
      </div>
     
      <div className="container">
        <text className="mission">
          Our mission is to tackle gender-based violence prevalent in society
          that impacts the lives of millions of women each year. Our primary
          channels to remedy these issues include awareness through education,
          emotional support through counselling, financial assistance through
          fundraisers, and intermediary legal aid through pro-bono lawyers.
        </text>
        <div className="value-cont">
          <h1 className="values">    equality  .  diversity  .   inclusion   </h1>
        </div>
        <h1 className="about2"> The Team  </h1>
        <div className="section">
          <div className="founders">
            <img src={founders} alt="Founders" />
            <div className="About-text">
              <h1 className="heading-f">Founders</h1>
              <h5 className="names">
                Faryal Ashfaq <span> & Eisha Mehtab </span>
              </h5>
              <text>
                The Mirror was founded by Faryal Ashfaq and Eisha Mehtab in 2017
                out of courage and a collective sense of urgency to do something
                about the plight of women in our country. Our experiences in a
                patriarchal Pakistan made us recognise the need of a platform
                that allows femmes everywhere to feel empowered, mobilised, and
                safe.The Mirror serves and will always continue to serve as a
                symbol of reflection, not only for our community but for
                ourselves, where we strive to become better versions of
                ourselves every single day.
              </text>
            </div>
          </div>
        </div>
        <section class="bg-light mt-5" id="team">
          <div class="container">
            <div class="row text-center">
              <div class="col-sm-12 col-md-12 mb-4">
                {/* <h3 class="text-center mt-4 text-secondary">
                  Tourist Opinions
                </h3> */}
              </div>
              <div class="col-md-4">
                <div class="testimonial mb-5">
                  <div class="avatar mx-auto">
                    <img
                      src={shahrukh}
                      class="rounded-circle z-depth-1 img-fluid" alt="shahrukh"/>
                  </div>
                  <h4 class="font-weight-bold dark-grey-text mt-4">
                  Shahrukh Khan
                  </h4>
                  <h6 class="font-weight-bold blue-text my-3">Managing Director</h6>
                  <p class="font-weight-normal dark-grey-text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Quod eos id officiis hic tenetur quae quaerat ad velit ab
                    hic tenetur.
                  </p>
                </div>
              </div>

              <div class="col-md-4">
                <div class="testimonial mb-5">
                  <div class="avatar mx-auto">
                    <img
                      src={mahnoor}
                      class="rounded-circle z-depth-1 img-fluid"
                      alt="Mahnoor"
                    />
                  </div>
                  <h4 class="font-weight-bold dark-grey-text mt-4">Mahnoor Sarwar</h4>
                  <h6 class="font-weight-bold blue-text my-3">General Secretary </h6>
                  <p class="font-weight-normal dark-grey-text">
                    Ut enim ad minima veniam, quis nostrum exercitationem ullam
                    corporis suscipit laboriosam, nisi ut aliquid commodi.
                  </p>
                </div>
              </div>
              <div class="col-md-4">
                <div class="testimonial mb-5">
                  <div class="avatar mx-auto">
                    <img
                      src={maham}
                      class="rounded-circle z-depth-1 img-fluid"
                      alt="Maham"
                    />
                  </div>
                  <h4 class="font-weight-bold dark-grey-text mt-4">
                  Maham Fazal
                  </h4>
                  <h6 class="font-weight-bold blue-text my-3">Administrative Coordinator</h6>
                  <p class="font-weight-normal dark-grey-text">
                    At vero eos et accusamus et iusto odio dignissimos ducimus
                    qui blanditiis praesentium voluptatum deleniti atque
                    corrupti.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
      </div>
      <Footer/>
    </>
  );
}
