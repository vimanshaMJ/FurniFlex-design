import React from "react";
import classes from "./TopNavbar.module.css";
import instagram from "../Images/instagram.png";
import twitter from "../Images/twitter.png";
import facebook from "../Images/facebook.png";
import { Image } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function TopNavbar() {
  return (
    <div className={classes.topNavbarContainer}>
      <div className="container">
        <div className={`row ${classes.topRow}`}>
          <div className={`col-lg-3 ${classes.firstCol}`}>
            <p className={classes.followUp}>Follow Us</p>
            <div className={classes.imagesRow}>
              <Link to="https://www.instagram.com/">
                <Image src={instagram} className={classes.socielIcon} />
              </Link>
              <Link to="https://www.instagram.com/">
                <Image src={twitter} className={classes.socielIcon} />
              </Link>
              <Link to="https://www.instagram.com/">
                <Image src={facebook} className={classes.socielIcon} />
              </Link>
            </div>
          </div>

          <div className="col-lg-6">
            <p className={classes.text}>
              Sign up get 20% Off for all collection
            </p>
          </div>

          <div className="col-lg-3">
            <p className={classes.text}>1(100)234-5678 </p>
          </div>
        </div>
      </div>
    </div>
  );
}
