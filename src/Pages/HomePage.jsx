import React from "react";
import classes from "./HomePage.module.css";
import MainNavbar from "../Components/Navbar";
import SecondaryButton from "../Components/SecondaryButton";
import PrimaryButton from "../Components/PrimaryButton";

const HomePage = () => {
  return (
    <div className={classes.mainContainer}>
      <MainNavbar />

      <div className={classes.heroSection}>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
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
            </div>
            <div className="col-md-6"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
