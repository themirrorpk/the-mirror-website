import React from "react";
import { Link } from "react-router-dom";
import { Button } from "./Button";
import "./Footer.css";
function Footer() {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        {/* <p className="footer-subscription-heading">
          Join the Adventure newsletter to receive our best vacation deals
        </p> */}
        <p className="footer-subscription-text">
          Subscribe to our special newsletter 'Reflections' today and <br />
          get to know about the major projects The Mirror is working on.
        </p>
        <div className="input-areas">
          <form>
            <input
              className="footer-input"
              name="email"
              type="email"
              placeholder="Your Email"
            />
            <a target="_blank" rel="noreferrer" href="https://www.youtube.com/channel/UClxfoeNh4uL3ghBRtJMJABA" className='yt'>
              <button type="button" class="btn btn-outline-light">
                Subscribe
              </button>
            </a>

            {/* <Button buttonStyle="btn--outline">Subscribe</Button> */}
          </form>
        </div>
      </section>
      <div className="footer-links">
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>About Us</h2>
            <Link to="/about">How it works</Link>
            <Link to="/">Testimonials</Link>
            <Link to="/">Careers</Link>
            <Link to="/">Investors</Link>
            <Link to="/">Terms of Service</Link>
          </div>
          <div className="footer-link-items">
            <h2>Contact Us</h2>
            <Link to="/">Contact</Link>
            <Link to="/">Support</Link>
            <Link to="/">Destinations</Link>
            <Link to="/">Sponsorships</Link>
          </div>
        </div>
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>Videos</h2>
            <Link to="/">Submit Video</Link>
            <Link to="/">Ambassadors</Link>
            <Link to="/">Agency</Link>
            <Link to="/">Influencer</Link>
          </div>
          <div className="footer-link-items">
            <h2>Social Media</h2>

            <a target="_blank" rel="noreferrer" href="https://instagram.com/themirrorpk/" >Instagram</a>
            <a target="_blank" rel="noreferrer" href="https://www.facebook.com/themirrorpk/" >Facebook</a>
            <a target="_blank" rel="noreferrer" href="https://www.youtube.com/channel/UClxfoeNh4uL3ghBRtJMJABA" >Youtube</a>
            <a target="_blank" rel="noreferrer" href="https://www.twitter.com/themirrorpk" >Twitter</a>
            <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/company/the-mirror-pk" >Linked-In</a>

          </div>
        </div>
      </div>
      <section className="social-media">
        <div className="social-media-wrap">
          <div className="footer-logo">
            <Link to="/" className="social-logo">
              The Mirror
              {/* <i class="fab fa-typo3" /> */}
            </Link>
          </div>
          <small className="website-rights">The Mirror © 2021</small>
        </div>
      </section>
    </div>
  );
}

export default Footer;
