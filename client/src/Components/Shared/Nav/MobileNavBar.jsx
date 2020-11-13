import React, {useState} from "react"
import { NavLink } from "react-router-dom";
import "./MobileNavBar.css"

const MobileNavBar = (props) => {
  
  const [displayVisible, updateDisplayVisible] = useState("")
  const [curtain, updateCurtain] = useState("")
  const [top, updateTop] = useState("")
  const [middle, updateMiddle] = useState("")
  const [bottom, updateBottom] = useState("")

  const updateWhiteOut = props.updateWhiteOut


  const handleClick = (e) => {
    if (displayVisible === "") {
      updateDisplayVisible("drop-down-container-visible");
      updateCurtain("mobile-nav-link-curtain-visable");
      updateTop("top");
      updateMiddle("middle");
      updateBottom("bottom");
      updateWhiteOut("white-out-screen-active")
    } else {
      updateDisplayVisible("");
      updateCurtain("");
      updateTop("");
      updateMiddle("");
      updateBottom("");
      updateWhiteOut("")
    }
  
  }

  return (
    <div className="nav-bar">
      <div className="position-container">
        <div className="donate-burger-container">
          <a className="mobile-donate"
            href="https://fundraise.newalternativesnyc.org/give/157653/#!/donation/checkout"
            target="_blank" rel="noopener noreferrer"
          >
            Donate
          </a>
          <div className="hamburger" onClick={handleClick}>
            <div className={`black-bar ${top}`}></div>
            <div className={`black-bar ${middle}`}></div>
            <div className={`black-bar ${bottom}`}></div>
          </div>
        </div>

        <div className={`drop-down-container ${displayVisible}`}>
          <div className="drop-down-selector-box">
            <div className={`mobile-nav-link-curtain ${curtain}`}>
              <NavLink onClick={handleClick} className="mobile-nav-links" to="/">
                  Home
              </NavLink>
            </div>
          </div>
          <div className="drop-down-selector-box">
            <div className={`mobile-nav-link-curtain ${curtain}`}>
              <NavLink onClick={handleClick} className="mobile-nav-links" to="/coming-soon">
                  About Us
              </NavLink>
            </div>
          </div>
          <div className="drop-down-selector-box">
            <div className={`mobile-nav-link-curtain ${curtain}`}>
              <NavLink onClick={handleClick} className="mobile-nav-links" to="/our-stories">
                  Our Stories
              </NavLink>
            </div>
          </div>
          <div className="drop-down-selector-box">
            <div className={`mobile-nav-link-curtain ${curtain}`}>
              <NavLink onClick={handleClick} className="mobile-nav-links" to="/coming-soon">
                  Get Help
              </NavLink>
            </div>
          </div>
          <div className="drop-down-selector-box">
            <div className={`mobile-nav-link-curtain ${curtain}`}>
              <NavLink onClick={handleClick} className="mobile-nav-links" to="/coming-soon">
                  Get Involved
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


export default MobileNavBar