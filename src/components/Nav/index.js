import React from "react";
import "./style.css";

function Nav(props) {
  return (

    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="/">Navbar w/ text</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarText">
        <span className="navbar-text">
        Points: {props.currentScore} | High Score: {props.highScore} 
        </span>
      </div>
    </nav>

    // <nav className="navbar navbar-expand-lg navbar-light bg-light">
    //   <a className="navbar-brand" href="/">Memory Card Clicker</a>
    //   <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
    //     <span className="navbar-toggler-icon"></span>
    //   </button>
    //   <div className="collapse navbar-collapse" id="navbarText">
    //     <span className="navbar-text">
    //       Points: {props.points} | High Score: {props.highscore} 
    //     </span>
    //   </div>
    // </nav>
  )
}


export default Nav;
