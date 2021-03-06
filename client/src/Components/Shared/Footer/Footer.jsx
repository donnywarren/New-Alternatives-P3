import React from "react";
import { NavLink } from "react-router-dom";
import "./Footer.css";
import Subscribe from "../../Subscribe/Subscribe";
import Seal from "../../../Assets/seal-of-transparency.png";
import Facebook from "../../../Assets/facebook-white.png";
import Twitter from "../../../Assets/twitter-white.png";
import Instagram from "../../../Assets/instagram-white.png";

const Footer = () => {
  return (
    <>
      <div className="footer-component">
        <div className="top-footer">
          <div className="top-footer-link-row">
            <NavLink className="links" to="/coming-soon">
              About Us
            </NavLink>
            <NavLink className="links" to="/our-stories">
              Our Stories
            </NavLink>
            <NavLink className="links" to="/coming-soon">
              Get Help
            </NavLink>
            <NavLink className="links" to="/coming-soon">
              Get Involved
            </NavLink>
            <a
              href="https://c8f5851f-9831-4bab-aa48-25c2b4f1b185.filesusr.com/ugd/9bb66f_f663ee9dc031481db99d551d043c6ae2.pdf"
              className="links"
              target="_blank" rel="noopener noreferrer"
            >
              Financial Report
            </a>
            <NavLink className="links" to="/coming-soon">
              Contact Us
            </NavLink>
          </div>
        </div>
        <div className="email-subscribe">
          <h5 className="mailing-list">Join Our Mailing List</h5>
          <Subscribe />
        </div>
        <div className="social-media">
          <div className="social-icon" alt="Facebook Logo">
            <a href="https://www.facebook.com/NewAlternatives/">
              <img src={Facebook} />
            </a>
          </div>
          <div className="social-icon">
            <a href="https://twitter.com/NewAlternatives">
              <img src={Twitter} alt="Twitter Logo" />
            </a>
          </div>
          <div className="social-icon">
            <a href="https://www.instagram.com/new_alternatives_nyc/">
              <img src={Instagram} alt="Instagram Logo" />
            </a>
          </div>
        </div>

        <div className="bottom-footer">
          <h6 className="copyright">
            © 2020 by New Alternatives | 410 West 40th Street, New York, NY
            10018 | <span>info@newalternativesnyc.org</span>
          </h6>
          <img className="seal" src={Seal} />
        </div>
      </div>
    </>
  );
};

export default Footer;
