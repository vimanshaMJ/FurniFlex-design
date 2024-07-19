import React, { useState } from "react";
import Slider from "react-slick";
import client1 from "../Images/client1.png";
import client2 from "../Images/client2.png";
import { Image } from "react-bootstrap";
import classes from "./CommentsSlider.module.css";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

export default function CommentsSlider() {
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

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1.35,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  const comments = [
    {
      id: 1,
      image: client1,
      comment:
        "I recently purchased a beautiful dining set from FurniFlex, and couldn't be happier! The quality is top-notch, and it looks even better in person than it did online. Plus, the customer service team was incredibly helpful throughout the entire process. Highly recommend",
      name: "Emily K.",
      address: "- New York, NY",
    },
    {
      id: 2,
      image: client2,
      comment:
        "I recently purchased a beautiful dining set from FurniFlex, and couldn't be happier! The quality is top-notch, and it looks even better in person than it did online. Plus, the customer service team was incredibly helpful throughout the entire process. Highly recommend",
      name: "Anne K.",
      address: "- New York, NY",
    },
  ];

  return (
    <div className="container">
      <div className="row">
        <h1 className={classes.commentsHeading}>
          Don't take our word, see what our clients say
        </h1>
      </div>

      <Slider {...settings} className={classes.slider}>
        {comments.map((comment, id) => (
          <div key={id} className={classes.comments}>
            <div className={`row ${classes.commentContainer}`}>
              <div className={`col-5 ${classes.clientImg}`}>
                <Image
                  src={comment.image}
                  alt="client"
                  className={classes.img}
                />
              </div>
              <div className={`col-7 ${classes.clientText}`}>
                <p> {comment.comment} </p>
                <hr />
                <p className={classes.clientName}>
                  {comment.name} <br />
                  <span className={classes.clientAddress}>
                    {comment.address}
                  </span>
                </p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
