import React from "react";
import "./Review.css";

// Review - format the reviews
function Review(props) {
  return (
    <div className="review">
      <a
        href={"/profile/" + props.uid}
        style={{ textDecoration: "none", color: "white" }}
      >
        <h5>@{props.username}</h5>
      </a>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-start",
          alignItems: "center",
          gap: "1vw",
        }}
      >
        <p
          style={{
            fontWeight: "500",
            fontSize: "1rem",
            margin: "0 0 1vh 0",
          }}
          class="service-preview-rating"
        >
          ⭐ {props.rating.toFixed(1)}
        </p>
      </div>

      <p>{props.comment}</p>
    </div>
  );
}

export default Review;
