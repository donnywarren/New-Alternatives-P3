import React, {useState} from "react"
import "./MobileNavBar.css"

const MobileNavBar = () => {
  const [displayVisible, updateDisplayVisible] = useState("")


  const handleClick = () => {
    displayVisible === "" ?
      updateDisplayVisible("drop-down-container-display") :
      updateDisplayVisible("")
  }

  return (
    <div className=".nav-bar">
      <div className="position-container">
        <a className="donate"
          href="https://fundraise.newalternativesnyc.org/give/157653/#!/donation/checkout"
          target="_blank"
        >
          Donate
        </a>
        <div className="hamburger" onClick={handleClick}>
          <div className="black-bar top"></div>
          <div className="black-bar middle"></div>
          <div className="black-bar bottom"></div>
        </div>
        <div className={`drop-down-container ${displayVisible}`}>
        </div>
      </div>
    </div>
  )
}


export default MobileNavBar