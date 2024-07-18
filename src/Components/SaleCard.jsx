import React from "react";
import classes from "./SaleCard.module.css";
import { Image } from "react-bootstrap";
import sale2 from "../Images/sale2.png";
import sale3 from "../Images/sale3.png";
import PrimaryButton from "./PrimaryButton";

export default function SaleCard() {
  const saleItems = [
    {
      id: 1,
      image: sale2,
      title: "Rustic Coffee Table",
      image: sale2,
    },
    {
      id: 2,
      image: sale3,
      title: "Modern Bookshelf",
      image: sale3,
    },
  ];

  return (
    <div className={`col ${classes.saleCard}`}>
      {saleItems.map((item) => (
        <div className={`row ${classes.saleCardRow}`}>
          <div className={`col ${classes.saleCardcol1}`}>
            <Image src={item.image} className={classes.saleImg2} />
          </div>

          <div className={`col ${classes.saleCardcol2}`}>
            <h4 className={classes.saleCardTitle}>{item.title}</h4>
            <PrimaryButton
              buttonIcon={
                <span
                  className={`material-symbols-outlined ${classes.buttonIcon}`}
                >
                  line_end_arrow
                </span>
              }
              className={classes.saleCardButton}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
