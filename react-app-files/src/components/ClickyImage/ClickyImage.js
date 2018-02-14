import React from "react";
import "./ClickyImage.css";

const ClickyImage = props => (
  <div className={props.message === "You chose incorrectly!" ? "card shake" : "card"}>
    <div className="img-container" onClick={props.onClick}>
      <img alt={props.name} src={props.image} />
      {props.children}
    </div>
  </div>
);

export default ClickyImage;
