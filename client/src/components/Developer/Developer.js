import React from "react";
import "./Developer.css";
import Julian from "../../static/julian.jpg";
import Simon from "../../static/simon.jpg";
import Alvin from "../../static/alvin.jpg";
import Manjot from "../../static/manjot.jpg";

// Developer - for About Page
function Developer(props) {
  const images = {
    0: Julian,
    1: Simon,
    2: Alvin,
    3: Manjot,
  };

  return (
    <div className="developer">
      <img
        className="developer-img"
        src={images[props.image]}
        alt={props.name}
      ></img>

      <h4>{props.name}</h4>
      <h6>{props.title}</h6>
    </div>
  );
}

export default Developer;
