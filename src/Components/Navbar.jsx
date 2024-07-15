import React from "react";
import classes from "./Navbar.module.css";
import TopNavbar from "./TopNavbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Button, Image } from "react-bootstrap";
import logo1 from "../Images/logo1.png";

export default function MainNavbar() {
  return (
    <div className={classes.container}>
      <TopNavbar />

      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <div className="col-lg-2 col-md-4">
            <Navbar.Brand
              href=""
              className={classes.logoText}
              style={{ color: "white" }}
            >
              <span>
                <Image src={logo1} className={classes.logo1} />
              </span>
              FurniFlex<span className={classes.logoSpan}>.</span>
            </Navbar.Brand>
          </div>

          <div className="col-lg-8 col-md-4" style={{ textAlign: "center" }}>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mx-auto">
                <Nav.Link href="#home" className={classes.navLink}>
                  Home
                </Nav.Link>
                <Nav.Link href="#home" className={classes.navLink}>
                  Products
                </Nav.Link>
                <Nav.Link href="#home" className={classes.navLink}>
                  Categories
                </Nav.Link>
                <Nav.Link href="#home" className={classes.navLink}>
                  About Us
                </Nav.Link>
                <Nav.Link href="#home" className={classes.navLink}>
                  Contact Us
                </Nav.Link>
                <Nav.Link href="#home" className={classes.navLink}>
                  Blog
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </div>

          <div className="col-lg-2 col-md-4" style={{ textAlign: "right" }}>
            <Button className={classes.icon}>
              <span class="material-icons">search</span>
            </Button>
            <Button className={classes.icon}>
              <span class="material-icons">favorite_border</span>
            </Button>
            <Button className={classes.icon}>
              <span class="material-icons">shopping_bag</span>
            </Button>
            <Button className={classes.icon}>
              <span class="material-icons">person</span>
            </Button>
          </div>
        </Container>
      </Navbar>
    </div>
  );
}
