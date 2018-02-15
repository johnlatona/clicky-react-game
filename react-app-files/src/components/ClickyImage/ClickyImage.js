import React from "react";
import "./ClickyImage.css";

//creates component ClickyImage
const ClickyImage = props => (
  //if the message equals "You chose incorrectly!", it applies the shake class to the component which will produce a shaking animation
  <div className={props.message === "You chose incorrectly!" ? "card shake" : "card"}>
  {/*passes props from App.js to display the image and assign the onClick function*/}
    <div className="img-container" onClick={props.onClick}>
      <img alt={props.name} src={props.image} />
      {props.children}
    </div>
  </div>
);

export default ClickyImage;
