import React, { useState, useEffect } from "react";
import "./Home.css";
import IconDollarSign from "../../Assets/purple-icon_dollar-sign.png";
import IconFlag from "../../Assets/purple-icon_flag.png";
import IconKnifeAndFork from "../../Assets/purple-icon_knife-and-fork.png";
import IconTwoHands from "../../Assets/purple-icon_two-hands.png";
import IconHandsHeart from "../../Assets/purple-icon_hands-heart.png";
import IconHandWithCoin from "../../Assets/purple-icon_hand-with-coin.png";
import Hero from "../../Components/Hero/Hero";
import RainbowFlag from "../../Assets/hero_rainbow-flag.png";
import Layout from "../../Components/Shared/Layout/Layout";
import MissionCarousel from "../../Components/MissionCarousel/MissionCarousel";

const Home = () => {
  return (
    <>
      <Layout>
        <Hero className="hero" src={RainbowFlag} alt="rainbow flag" />
        <div className="purple-icons-first">
          <div className="icon">
            <div className="icon-image">
              <img src={IconDollarSign} alt="Icon: Dollar sign" />
            </div>
            <div className="icon-text">

              <h1>$500K</h1>
              <p>raised in one year</p>
            </div>
          </div>
          <div className="icon">
            <div className="icon-image">
              <img src={IconFlag} alt="Icon: Flag" />
            </div>
            <div className="icon-text">
              <h1>40%</h1>
              <p>of LGBTQ+ are<br/>homeless in NYC</p>
            </div>
          </div>
          <div className="icon">
            <div className="icon-image">
              <img src={IconKnifeAndFork} alt="Icon: Knife and fork" />
            </div>
            <div className="icon-text">
              <h1>10K</h1>
              <p>meals provided thus far</p>
            </div>
          </div>
        </div>
        <div className="who-we-help">
          <h1 className="who-we-help-h1">Who We Help</h1>
          <p className="who-we-help-p">
            We assist LGBTQ+ youth and young adults who are 16-30 years old and
            homeless or at risk of homelessness. We define homelessness broadly
            to include living on the street, in a shelter, in a transitional
            living program, or lacking permanent housing.
          </p>
        </div>
        <MissionCarousel />
        <div className="get-involved">
          <h1>Get Involved</h1>
          <div className="get-involved-icons">
            <div className="icon-card">
              <img src={IconTwoHands} alt="Icon: Two hands" />
              <h2>Get Help</h2>
            </div>
            <div className="icon-card">
              <img
                src={IconHandsHeart}
                alt="Icon: Hands in the shape of a heart"
              />
              <h2>Volunteer</h2>
            </div>
            <div className="icon-card">
            <img
              src={IconHandWithCoin}
              alt="Icon: Hand with coin in between index finger and thumb"
            />
            <h2>Donate</h2>
            </div>
            
          </div>
        </div>
      </Layout>
    </>
  );
};
export default Home;