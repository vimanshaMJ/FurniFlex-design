import React from "react";
import classes from "../Components/ProductCard.module.css";
import LikeButton from "../Components/LikeButton";
import Image from "react-bootstrap/Image";
import cart from "../Images/cart.png";
import product1 from "../Images/product1.png";
import product2 from "../Images/product2.png";
import product3 from "../Images/product3.png";
import product4 from "../Images/product4.png";
import product5 from "../Images/product5.png";
import product6 from "../Images/product6.png";

export default function ProductCard() {
  const products = [
    {
      key: 1,
      discount: "-20%",
      image: product1,
      title: "Luxe Lounge Sofa",
      price: "$235.99",
    },
    {
      key: 2,
      discount: "-10%",
      image: product2,
      title: "Comfort Haven Sofa",
      price: "$250.99",
    },
    {
      key: 3,
      discount: "-25%",
      image: product3,
      title: "Round Wicker chair",
      price: "$180.99",
    },
    {
      key: 4,
      discount: "-10%",
      image: product4,
      title: "Teal ottoman",
      price: "$125.99",
    },
    {
      key: 5,
      discount: "-30%",
      image: product5,
      title: "White fleece throw pillow",
      price: "$99.99",
    },
    {
      key: 6,
      discount: "-20%",
      image: product6,
      title: "Pillows on bed set",
      price: "$235.99",
    },
  ];

  return (
    <div className={`row ${classes.productCardRow}`}>
      {products.map((product) => (
        <div className={`col-4 ${classes.productCardCol}`}>
          <div className={classes.cardHeader}>
            <p className={classes.productDiscount}>{product.discount}</p>
            <LikeButton />
          </div>

          <div className={classes.cardBody}>
            <Image src={product.image} className={classes.productImg} />
          </div>

          <div className={classes.cardFooter}>
            <p className={classes.productTitle}>
              {product.title} <br /> {product.price}
            </p>
            <Image src={cart} className={classes.cartIcon} />
          </div>
        </div>
      ))}
    </div>
  );
}
