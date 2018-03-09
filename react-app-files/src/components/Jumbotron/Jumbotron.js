import React from "react";
import "./Jumbotron.css";

//create the Jumbotron component
const Jumbotron = props => (
    <div className="jumbotron" id="jumbotron">
        <h1>Clicky Game</h1>
        <p>Test your memory! Click each image only once. After you click an image, the images will reshuffle. Can you remember all the images you clicked?!</p>
    </div>
)

export default Jumbotron;