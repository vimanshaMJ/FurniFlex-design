import React from "react";
import { Image } from "react-bootstrap";
import Slider from "react-slick";
import classes from "./ImageSlider.module.css";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import bedroom from "../Images/bedroom.jpg";
import livingroom from "../Images/livingroom.jpg";
import waitingroom from "../Images/waitingroom.png";

export default function ImageSlider() {
  const NextArrow = ({ onClick }) => {
    return (
      <div className={`${classes.arrow} ${classes.next}`} onClick={onClick}>
        <FaArrowRight />
      </div>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <div className={`${classes.arrow} ${classes.prev}`} onClick={onClick}>
        <FaArrowLeft />
      </div>
    );
  };

  const [rotateState, setRotateState] = React.useState(0);

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0",
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setRotateState(next),
  };

  return (
    <Slider {...settings} className={classes.slider}>
      <div
        className={rotateState === 0 ? classes.centerSlide : classes.sideSlide}
      >
        <Image src={bedroom} className={classes.img} />
      </div>
      <div
        className={rotateState === 1 ? classes.centerSlide : classes.sideSlide}
      >
        <Image src={livingroom} className={classes.img} />
      </div>
      <div
        className={rotateState === 2 ? classes.centerSlide : classes.sideSlide}
      >
        <Image src={waitingroom} className={classes.img} />
      </div>
    </Slider>
  );
}
