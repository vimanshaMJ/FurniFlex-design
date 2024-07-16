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
import table from "../Images/table.png";
import chair from "../Images/chair.png";
import lamp from "../Images/lamp.png";

const HomePage = () => {
  return (
    <div className={classes.mainContainer}>
      <MainNavbar />

      <div className={classes.heroSection}>
        <div className="container">
          <div className={`row ${classes.herofirstRow}`}>
            <div className={`col-md-6 ${classes.textCol}`}>
              <SecondaryButton
                buttonText="FURNITURE DESIGN IDEAS"
                className={classes.heroButton}
              />
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

          <div
            className="row"
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "50px",
            }}
          >
            <div className="col-md-7" style={{ width: "60%" }}>
              <div className={`row ${classes.tableRow}`}>
                <div className={`col-6 ${classes.tableTextCol}`}>
                  <SecondaryButton
                    buttonText="NEW COLLECTIONS"
                    className={classes.tableBtn}
                  />
                  <h3 className={classes.tableHeading}>Center Table</h3>
                  <p>
                    Square table <br />
                    Round table <br />
                    Wooden table <br />
                    Glass table
                  </p>

                  <div style={{ width: "fit-content" }}>
                    <Link className={classes.viewLink}>
                      View All
                      <span
                        className={`material-symbols-outlined ${classes.viewIcon}`}
                      >
                        line_end_arrow
                      </span>
                    </Link>
                  </div>
                </div>

                <div className={`col-6 ${classes.tableCol}`}>
                  <Image src={table} className={classes.tableImg} />
                </div>
              </div>

              <div className={`row ${classes.lampRow}`}>
                <div className={`col-6 ${classes.lampCol}`}>
                  <SecondaryButton
                    buttonText="NEW COLLECTIONS"
                    className={classes.lampBtn}
                  />

                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "flex-end",
                    }}
                  >
                    <div>
                      <h4 className={classes.lapmHeading}>Lightning Lamp</h4>
                      <p>
                        Flore lamps <br />
                        Tripod lamps <br />
                        Table lamps <br />
                        Study lamps
                      </p>

                      <div style={{ width: "fit-content" }}>
                        <Link className={classes.viewLink}>
                          View All
                          <span
                            className={`material-symbols-outlined ${classes.viewIcon}`}
                          >
                            line_end_arrow
                          </span>
                        </Link>
                      </div>
                    </div>

                    <div>
                      <Image src={lamp} className={classes.lampImg} />
                    </div>
                  </div>
                </div>

                <div className={`col-5 ${classes.discountCol}`}>
                  <PrimaryButton
                    buttonText="GET DISCOUNT"
                    className={classes.discountBtn}
                  />

                  <h1 className={classes.discountText}>20% OFFER</h1>
                </div>
              </div>
            </div>

            <div className={`col-md-5 ${classes.chairCol}`}>
              <SecondaryButton
                buttonText="NEW COLLECTIONS"
                className={classes.chairBtn}
              />

              <h3 className={classes.chairHeading}>Accent Chairs</h3>
              <p>
                Arm chair <br />
                Wing chair <br />
                Cafe chair <br />
                Wheels chair
              </p>

              <div style={{ width: "fit-content" }}>
                <Link className={classes.viewLink}>
                  View All
                  <span
                    className={`material-symbols-outlined ${classes.viewIcon}`}
                  >
                    line_end_arrow
                  </span>
                </Link>
              </div>

              <Image src={chair} className={classes.chairImg} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
