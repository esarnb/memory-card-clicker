import React from "react";
import "./style.css";

function Card(props) {
  return (
    <div className="card">
      <span className="" onClick={() => {
        props.selectedCard(props.id);
      }}>
        <div className="img-container">
        <img alt={props.name} src={props.image ? props.image : "none"} className = {props.image ? "img" : "fa fa-spinner fa-spin"}/>
        </div>
      </span>
    </div>
  )
}


export default Card;
