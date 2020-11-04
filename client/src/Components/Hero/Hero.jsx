import React from "react"
import { NavLink } from "react-router-dom";
import "./Hero.css"

export default function Hero(props) {

  const { src, alt } = props

  return (
    <div>
      <div className="hero">
        <img className="hero-image"
          src={src}
          alt={alt}
        />
        <div className="shadow-box">
          <h2>New Alternatives for LGBTQ+ Homeless Youth</h2>
          <p>New Alternatives increases the self-sufficiency of LGBTQ+ homeless youth by enabling them to transition out of the shelter system to stable adult lives.</p>
          <NavLink className="learn-link" to="/coming-soon">
            {` Learn more >`}
          </NavLink>
        </div>
       </div>
      </div>
  )
}