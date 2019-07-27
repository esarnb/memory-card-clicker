import React from "react";
import "./style.css";

/**
 * 
 * @param {Component} props : a list of card components 
 * 
 * Function inserts all cards into a div with class "wrapper"
 */
function Wrapper(props) {
  return <div className="wrapper">{props.children}</div>;
}

export default Wrapper;
