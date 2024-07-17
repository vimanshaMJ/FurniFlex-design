import React from "react";
import Slider from "react-slick";
import cat1 from "../Images/cat1.png";
import cat2 from "../Images/cat2.png";
import cat3 from "../Images/cat3.png";
import cat4 from "../Images/cat4.png";
import cat5 from "../Images/cat5.png";
import { Image } from "react-bootstrap";
import classes from "./CategoriesSlider.module.css";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import "./SlickDots.css";

export default function CategoriesSlider() {
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
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 3,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  const categories = [
    {
      title: "Side Table",
      products: 120,
      image: cat1,
    },
    {
      title: "Arm Chair",
      products: 45,
      image: cat2,
    },
    {
      title: "Dinner Table",
      products: 120,
      image: cat3,
    },
    {
      title: "Pillow",
      products: 150,
      image: cat4,
    },
    {
      title: "Wall Clock",
      products: 40,
      image: cat5,
    },
    {
      title: "Side Table",
      products: 120,
      image: cat1,
    },
    {
      title: "Arm Chair",
      products: 45,
      image: cat2,
    },
    {
      title: "Dinner Table",
      products: 120,
      image: cat3,
    },
    {
      title: "Pillow",
      products: 150,
      image: cat4,
    },
    {
      title: "Wall Clock",
      products: 40,
      image: cat5,
    },
    {
      title: "Side Table",
      products: 120,
      image: cat1,
    },
    {
      title: "Arm Chair",
      products: 45,
      image: cat2,
    },
    {
      title: "Dinner Table",
      products: 120,
      image: cat3,
    },
    {
      title: "Pillow",
      products: 150,
      image: cat4,
    },
    {
      title: "Wall Clock",
      products: 40,
      image: cat5,
    },
  ];

  return (
    <div className="container">
      <div className="row">
        <h1 className={classes.categoryTitle}>Featured Categories</h1>
      </div>

      <div className="row">
        <Slider {...settings} className={classes.slider}>
          {categories.map((category, index) => (
            <div key={index} className={classes.category}>
              <div className={`col ${classes.categoryCol}`}>
                <div className={`row ${classes.imageRow}`}>
                  <Image src={category.image} className={classes.img} />
                </div>
                <div className={`row ${classes.textRow}`}>
                  <p className={classes.title}>
                    {category.title} <br />
                    <span className={classes.products}>
                      {category.products} Products
                    </span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
