import React from "react";
import "./Nav.css";

const Nav = props => (
    <nav className="navbar">
        <ul>
            <li className="brand"><a className="navbar-brand" id="reset-link" onClick={props.reset}>Clicky Game</a></li>

            {/*if the message = "You chose correctly!" it will apply the green class, which turns the text green. Otherwise it will apply the red and shake classes, which turns the text red and applies the shake animation, respectively*/}
            <li className={props.message === "You chose correctly!" ? "green" : "red shake"}>{props.message}</li>
            {/*displays props.score, which is being passed in from App.js and is referencing the score and topScore properties in the state object.*/}
            <li>Score: {props.score} || Top Score:{props.topScore}</li>
        </ul>
    </nav>
)

export default Nav;