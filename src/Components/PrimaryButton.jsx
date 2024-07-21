import React from "react";
import classes from "./PrimaryButton.module.css";
import { Button } from "react-bootstrap";

export default function PrimaryButton({ buttonText, buttonIcon, className }) {
  return (
    <div>
      <Button
        variant="warning"
        className={`${classes.primaryButton} ${className}`}
      >
        {buttonText}
        {buttonIcon && (
          <span className={`material-symbols-outlined ${classes.buttonIcon}`}>
            line_end_arrow
          </span>
        )}
      </Button>
    </div>
  );
}
