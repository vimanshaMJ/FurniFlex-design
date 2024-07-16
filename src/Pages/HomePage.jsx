import React from "react";
import classes from "./HomePage.module.css";
import MainNavbar from "../Components/Navbar";
import SecondaryButton from "../Components/SecondaryButton";
import PrimaryButton from "../Components/PrimaryButton";
import { Link } from "react-router-dom";
import { Image } from "react-bootstrap";
import truck from "../Images/truck.png";
import bag from "../Images/bag.png";
import wheel from "../Images/wheel.png";
import returns from "../Images/returns.png";
import ImageSlider from "../Components/ImageSlider";

const HomePage = () => {
  return (
    <div className={classes.mainContainer}>
      <MainNavbar />

      <div className={classes.heroSection}>
        <div className="container">
          <div className={`row ${classes.herofirstRow}`}>
            <div className={`col-md-6 ${classes.textCol}`}>
              <SecondaryButton buttonText="FURNITURE DESIGN IDEAS" />
              <h1 className={classes.heroTitle}>
                Modern Interior Design Studio
              </h1>

              <p className={classes.heroDescription}>
                Choosing the right furniture for your home online will add
                elegence and functionality to your interior while also being
                cost effective and long lasting.
              </p>

              <div className={classes.btnRow}>
                <PrimaryButton
                  buttonText="Shop Now"
                  buttonIcon={
                    <span
                      className={`material-symbols-outlined ${classes.buttonIcon}`}
                    >
                      line_end_arrow
                    </span>
                  }
                />
                <Link className={classes.heroLink}>Follow Instagram </Link>
              </div>

              <div className={`row ${classes.HeroLastRow}`}>
                <div className="col-4">
                  <h3>2500+</h3>
                  <p className={classes.HeorLastText}>Unique Styles</p>
                </div>
                <div className="col-4">
                  <h3>5000+</h3>
                  <p className={classes.HeorLastText}>Happy Customer</p>
                </div>
                <div className="col-4">
                  <h3>300+</h3>
                  <p className={classes.HeorLastText}>Certified Outlets</p>
                </div>
              </div>
            </div>

            <div className={`col-md-6 ${classes.imgCol}`}>
              <ImageSlider />
            </div>
          </div>
        </div>
      </div>

      <div className={classes.firstSection}>
        <div className="container">
          <div className="row">
            <div className={`col-md-3 col-sm-6 ${classes.firstCardCol}`}>
              <Image src={truck} className={classes.firstCardIcon} />
              <h2>Fast & Free Shipping</h2>
            </div>
            <div className={`col-md-3 col-sm-6 ${classes.firstCardCol}`}>
              <Image src={bag} className={classes.firstCardIcon} />
              <h2>Easy to Shop</h2>
            </div>
            <div className={`col-md-3 col-sm-6 ${classes.firstCardCol}`}>
              <Image src={wheel} className={classes.firstCardIcon} />
              <h2>24/7 Support</h2>
            </div>
            <div className={`col-md-3 col-sm-6 ${classes.firstCardCol}`}>
              <Image src={returns} className={classes.firstCardIcon} />
              <h2>Hassle Free Returns</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
