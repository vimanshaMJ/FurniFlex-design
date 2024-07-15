import React from "react";
import classes from "./SecondaryButton.module.css";
import { Button } from "react-bootstrap";

export default function SecondaryButton({ buttonText, buttonIcon, className }) {
  return (
    <div>
      <Button
        variant="outline-light"
        className={`${classes.secondaryButton} ${className}`}
      >
        {buttonIcon && <span>{buttonIcon}</span>}
        {buttonText}
      </Button>
    </div>
  );
}
