import React from "react";
import "./Nav.css";

const Nav = props => (
    <nav className="navbar">
        <ul>
            <li className="brand"><a className="navbar-brand" id="reset-link" onClick={props.reset}>Clicky Game</a></li>
            <li className={props.message === "You chose correctly!" ? "green" : "red shake"}>{props.message}</li>
            <li>Score: {props.score} || Top Score:{props.topScore}</li>
        </ul>
    </nav>
)

export default Nav;