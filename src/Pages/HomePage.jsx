import React from "react";
import classes from "./HomePage.module.css";
import MainNavbar from "../Components/Navbar";

const HomePage = () => {
  return (
    <div className={classes.navbarContainer}>
      <MainNavbar />
    </div>
  );
};

export default HomePage;
