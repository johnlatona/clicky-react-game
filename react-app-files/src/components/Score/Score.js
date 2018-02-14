import React from "react";
import "./Score.css";

const Score = props => (
    <div id="score">
        <h3>Score: {props.score} || Top Score: {props.topScore}</h3>
    </div>
);

export default Score;