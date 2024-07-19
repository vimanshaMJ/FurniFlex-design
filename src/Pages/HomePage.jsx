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
import CategoriesSlider from "../Components/CategoriesSlider";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import ProductCard from "../Components/ProductCard";
import CountdownTimer from "../Components/CountdownTimer";
import sale1 from "../Images/sale1.png";
import SaleCard from "../Components/SaleCard";
import CommentsSlider from "../Components/CommentsSlider";
import PostCard from "../Components/PostCard";

const HomePage = ({ products }) => {
  return (
    // Navbar section
    <div className={classes.mainContainer}>
      <MainNavbar />

      {/* Hero Section */}
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
                <PrimaryButton buttonText="Shop Now" buttonIcon={true} />
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

      {/* First Section */}
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

      {/* Category Section */}
      <div className={classes.categorySection}>
        <CategoriesSlider />
      </div>

      {/* Products Section */}
      <div className={classes.productSection}>
        <div className="container">
          <div className={`row ${classes.productsTitleRow}`}>
            <div className={`col-4 ${classes.titleCol}`}>
              <h1>Trending products for you!</h1>
            </div>
            <div className={`col-4 ${classes.btnCol}`}>
              <PrimaryButton
                buttonText="View All Product"
                buttonIcon={true}
                className={classes.viewAllBtn}
              />
            </div>
          </div>

          <div className="row">
            <Navbar
              expand="lg"
              className={`bg-body-tertiary ${classes.productsBar}`}
            >
              <Container style={{ padding: "0" }}>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="me-auto">
                    <Nav.Link href="#bedroom" className={classes.navLink}>
                      Bed Room
                    </Nav.Link>
                    <Nav.Link href="#livingroom" className={classes.navLink}>
                      Living Room
                    </Nav.Link>
                    <Nav.Link href="#diningroom" className={classes.navLink}>
                      Dining Room
                    </Nav.Link>
                    <Nav.Link href="#outdoor" className={classes.navLink}>
                      Outdoor
                    </Nav.Link>
                    <Nav.Link href="#indoor" className={classes.navLink}>
                      Indoor
                    </Nav.Link>
                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>
          </div>

          <ProductCard products={products} />
        </div>
      </div>

      {/* Sale section */}
      <div className={classes.saleSection}>
        <div className="container">
          <div className={`row ${classes.salesRow}`}>
            <div className={`col-lg-8 col-md-12 ${classes.saleCol1}`}>
              <div className={`row ${classes.saleRow1}`}>
                <div className={`col-7 ${classes.saleTitleCol}`}>
                  <h1 className={classes.saleTitle}>Flash Sale!</h1>
                  <p className={classes.saleDesc}>
                    Act fast to grab incredible deals on select furniture pieces
                    in our limited-time flash sale.
                  </p>
                </div>

                <div className={`col-5 ${classes.saleTimeCol}`}>
                  <p className={classes.timerTitle}>
                    <span
                      class="material-symbols-outlined"
                      style={{ marginRight: "5px" }}
                    >
                      timer
                    </span>
                    End Time
                  </p>
                  <CountdownTimer hours={24} minutes={0} seconds={0} />
                </div>
              </div>

              <div className={`row ${classes.saleRow2}`}>
                <div className={`col-6 ${classes.saleImgCol}`}>
                  <Image src={sale1} className={classes.saleImg1} />
                  <h3 style={{ display: "flex", alignItems: "center" }}>
                    $599 <span className={classes.crossedPrice}>$799</span>
                  </h3>
                </div>

                <div className={`col-6 ${classes.saleChairCol}`}>
                  <h3 className={classes.saleChairTitle}>
                    Vintage Leather Armchair
                  </h3>
                  <p className={classes.saleChairDesc}>
                    Bring a touch of retro charm to your home with this vintage
                    leather armchair. Sturdy construction ensures durability.
                  </p>
                  <PrimaryButton
                    buttonText="Shop Now"
                    buttonIcon={true}
                    className={classes.shopNowBtn}
                  />
                </div>
              </div>
            </div>

            <div className={`col-lg-4 col-md-8 ${classes.saleCol2}`}>
              <SaleCard />
            </div>
          </div>
        </div>
      </div>

      {/* Offer section */}
      <div className={classes.offerSection}>
        <div className="container">
          <div className="row" style={{ justifyContent: "space-between" }}>
            <div className={`col-md-6 ${classes.offerCol1}`}>
              <div className={`row ${classes.offerRow1}`}>
                <p className={classes.offerTxt}>Exclusive Offer</p>
                <SecondaryButton
                  buttonText="15% OFF"
                  className={classes.offerBtn}
                />
              </div>

              <div className={`row ${classes.offerRow2}`}>
                <h1 className={classes.offerHeading}>
                  Best Online Deals, Free Stuff
                </h1>
                <p className={classes.offerTxt}>
                  Only on this week... Don't Miss
                </p>
                <PrimaryButton
                  buttonText="Get Best Deal"
                  buttonIcon={true}
                  className={classes.bestDealBtn}
                />
              </div>
            </div>

            <div className={`col-md-6 ${classes.offerCol2}`}>
              <p className={classes.regularText}>Regular Offer</p>
              <h1 className={classes.offerHeading}>
                10% cash-back on personal care
              </h1>
              <p className={classes.codeText}>
                Max cashback: $12. Code: CADHL837
              </p>
              <PrimaryButton
                buttonText="Shop Now"
                buttonIcon={true}
                className={classes.RegOfferBtn}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Comments section */}
      <div className={classes.commentSection}>
        <CommentsSlider />
      </div>

      {/* Blog section */}
      <div className={classes.blogSection}>
        <div className="container">
          <div className={`row ${classes.blogHeading}`}>
            <div className={`col-6 ${classes.headCol}`}>
              <h1>Explore Our Latest Blog</h1>
            </div>
            <div className={`col-6 ${classes.btnCol}`}>
              <PrimaryButton
                buttonText="View All Posts"
                buttonIcon={true}
                className={classes.viewAllBtn}
              />
            </div>
          </div>

          <PostCard />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
