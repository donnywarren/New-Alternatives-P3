import React, {useEffect, useState} from "react";
import { CarouselProvider, Slider, Slide, DotGroup } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import "./MissionCarousel.css";
import Educate from "../../Assets/exist-educate.png";
import EducateText from "../../Assets/exist-educate-text.png"
import Food from "../../Assets/exist-food.png";
import FoodText from "../../Assets/exist-food-text.png"
import Testing from "../../Assets/exist-testing.png";
import TestingText from "../../Assets/exist-testing-text.png"

function MissionCarousel(props) {
  const [missionImage, setMissionImage] = useState("")
  const testimonials = props.content;

  useEffect(() => {
    function handleResize() {
      window.innerWidth < 700 ? 
        setMissionImage("mobile") :
        setMissionImage("")
    }
    handleResize()
  })

  return (
    <div className="complete-mission-carousel">
      <CarouselProvider
        className="mission-carousel"
        
        totalSlides={3}
        isIntrinsicHeight={true}
        interval={5000}
        isPlaying={true}
      >
        <Slider className="slider-container">
          <Slide>
            <img
              className="mission-image"
              src={missionImage !== "mobile" ? Educate  : EducateText }
            />
          </Slide>
          <Slide>
            <img
              className="mission-image"
              src={missionImage !== "mobile" ? Food : FoodText}
            />
          </Slide>
          <Slide>
            <img
              className="mission-image"
              src={missionImage !== "mobile" ? Testing : TestingText} />
          </Slide>
        </Slider>
        <DotGroup className="dot-group" />
      </CarouselProvider>
    </div>
  );
}

export default MissionCarousel;