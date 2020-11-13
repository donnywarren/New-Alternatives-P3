import React, {useState, useEffect} from "react";
import { NavLink } from "react-router-dom";
import "./Nav.css";
import MobileNavBar from "./MobileNavBar"
import Social from "../../Social/Social";
import Logo from "../../../Assets/new-alternatives-title.png";

const Nav = () => {
  const [screenSize, updateScreenSize] = useState("")
  const [whiteOut, updateWhiteOut] = useState("")

  useEffect(() => {
    handleResize()
  })

  const handleResize = () => {
    let size = window.innerWidth
    size < 700 ?
      updateScreenSize("mobile") : 
      updateScreenSize("")
  }

  window.addEventListener("resize", handleResize)

  
  return (
    <>
      <div className={`white-out-screen ${whiteOut}`}>

      </div>
      <div className={"nav-component"}>
        <div className="title" alt="new alternatives">
          <div>
            <NavLink className="nav-links-logo" to="/">
              <img className="logo" src={Logo} alt="New Alternatives Logo" />
            </NavLink>
          </div>
        </div>
        {screenSize !== "mobile" ? 
        
          <div className="nav-bar">
            <div className="top-nav-bar">
              <div>
                <NavLink className="contact-us nav-links" to="/coming-soon">
                  Contact Us
              </NavLink>
              </div>
              <div className="social-media-box">
                <Social />
              </div>
              <a className="donate"
                href="https://fundraise.newalternativesnyc.org/give/157653/#!/donation/checkout"
                target="_blank" rel="noopener noreferrer"
              >
                Donate
              </a>
            </div>
            <div className="nav-menu" alt="navigation menu">
              <NavLink className="nav-links" to="/">
                Home
              </NavLink>
              <NavLink className="nav-links" to="/coming-soon">
                About Us
              </NavLink>
              <NavLink className="nav-links" to="/our-stories">
                Our Stories
              </NavLink>
              <NavLink className="nav-links" to="/coming-soon">
                Get Help
              </NavLink>
              <NavLink className="nav-links" to="/coming-soon">
                Get Involved
              </NavLink>
            </div>
          </div> :

          <MobileNavBar updateWhiteOut={updateWhiteOut}/> 
        }
      </div>
    </>
  );
};
export default Nav;