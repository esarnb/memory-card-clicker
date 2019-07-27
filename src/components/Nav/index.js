import React from "react";
import "./style.css";

function Nav(props) {
  return (

    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="/">Memory Card Clicker</a>
      <span className="navbar-text">Points: {props.currentScore} | High Score: {props.highScore} </span>
    </nav>
  )
}


export default Nav;
