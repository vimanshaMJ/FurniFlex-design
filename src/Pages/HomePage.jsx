import React from "react";
import classes from "./HomePage.module.css";
import MainNavbar from "../Components/Navbar";
import SecondaryButton from "../Components/SecondaryButton";

const HomePage = () => {
  return (
    <div className={classes.mainContainer}>
      <MainNavbar />

      <div className={classes.heroSection}>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <SecondaryButton buttonText="FURNITURE DESIGNS IDEAS" />
            </div>
            <div className="col-md-6"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
