import React, { useState } from "react";
import classes from "./LikeButton.module.css";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";

export default function LikeButton() {
  const [isLiked, setIsLiked] = useState(false);

  const handleButtonClick = () => {
    setIsLiked(!isLiked);
  };

  return (
    <div>
      <button className={classes.likeBtn} onClick={handleButtonClick}>
        {isLiked ? (
          <FavoriteIcon className={classes.filledIcon} />
        ) : (
          <FavoriteBorderIcon className={classes.icon} />
        )}
      </button>
    </div>
  );
}
