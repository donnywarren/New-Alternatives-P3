import React, { useState, useEffect } from "react";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import "./VideoCarousel.css";
import LeftArrow from "../../Assets/left-arrow.png";
import RightArrow from "../../Assets/right-arrow.png";
import Purple from "../../Assets/Videos/Purple.mp4";
import purplePic from "../../Assets/Videos/purplePic.jpg"
import Blue from "../../Assets/Videos/Blue.mp4";
import bluePic from "../../Assets/Videos/bluePic.jpg"
import Green from "../../Assets/Videos/Green.mp4";
import greenPic from "../../Assets/Videos/greenPic.jpg"
import Red from "../../Assets/Videos/Red.mp4";
import redPic from "../../Assets/Videos/redPic.jpg"
import Yellow from "../../Assets/Videos/Yellow.mp4";
import yellowPic from "../../Assets/Videos/yellowPic.jpg"

const VideoCarousel = () => {
  const [numOfSlides, updateNumOfSlides] = useState(3);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 415) {
        updateNumOfSlides(1)
        console.log(numOfSlides)
      } else {
        updateNumOfSlides(Math.floor(window.innerWidth / 415));
      }
      

      window.addEventListener("resize", handleResize);
    }
    handleResize();
  });

  return (
    <div className="video-wrapper">
      <CarouselProvider
        className="carousel-complete"
        naturalSlideWidth={400}
        naturalSlideHeight={250}
        totalSlides={5}
        visibleSlides={numOfSlides}
        infinite={true}
      >
        <h3 className="video-header">#WhatAboutUs</h3>
        <ButtonBack className="video-back-btn btn">
          <img className="back-arrow" src={LeftArrow} alt="back arrow" />
        </ButtonBack>
        <Slider className="video-container">
          <Slide>
            <div className="c-video">
              <video
                className="video"
                width="100%"
                height="100%"
                poster={bluePic}
                controls>
                <source src={Blue} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </Slide>

          <Slide>
            <div className="c-video">
              <video
                className="video"
                width="100%"
                height="100%"
                poster={greenPic}
                controls>
                <source src={Green} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </Slide>

          <Slide>
            <div className="c-video">
              <video
                className="video"
                width="100%"
                height="100%"
                poster={redPic}
                controls>
                <source src={Red} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </Slide>

          <Slide>
            <div className="c-video">
              <video
                className="video"
                width="100%"
                height="100%"
                poster={yellowPic}
                controls>
                <source src={Yellow} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </Slide>

          <Slide>
            <div className="c-video">
              <video
                className="video"
                width="100%"
                height="100%"
                poster={purplePic}
                controls>
                <source src={Purple} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </Slide>
        </Slider>
        <ButtonNext className="video-forward-btn btn">
          <img className="forward-arrow" src={RightArrow} alt="right arrow" />
        </ButtonNext>
      </CarouselProvider>
    </div>
  );
};

export default VideoCarousel;

/* CITED 
//https://github.com/express-labs/pure-react-carousel 
*/
