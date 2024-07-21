import React from "react";
import classes from "./PostCard.module.css";
import blogimg1 from "../Images/blogimg1.png";
import blogimg2 from "../Images/blogimg2.png";
import blogimg3 from "../Images/blogimg3.png";

export default function PostCard() {
  const posts = [
    {
      id: 1,
      image: blogimg1,
      title: "First Time Home Owner Ideas",
      author: "Kristin Watson",
      date: "Apr 19,24",
    },
    {
      id: 2,
      image: blogimg2,
      title: "How To Keep Your furniture Clean",
      author: "Robert Fox",
      date: "Apr 20,24",
    },
    {
      id: 3,
      image: blogimg3,
      title: "Small Space Furniture Apartment Ideas",
      author: "Kristin Watson",
      date: "Dec 20,24",
    },
  ];

  return (
    <div className="row">
      {posts.map((post) => (
        <div className="col-md-4" key={post.id}>
          <div className={`card ${classes.postCard}`}>
            <img src={post.image} className={classes.postImg} alt="" />
            <div className="card-body">
              <h5 className="card-title">{post.title}</h5>
              <p className={`card-text ${classes.cardText}`}>
                by <span className={classes.author}>{post.author}</span> on {""}
                <span className={classes.date}>{post.date}</span>
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
