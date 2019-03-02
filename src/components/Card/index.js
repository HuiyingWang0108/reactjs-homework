import React from "react";
import "./style.css";

function Card(props) {
  return (
    // arrow function to bind this in React.Component
    <div className="card" onClick={() => props.clickCount(props.id)}>
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
    </div>
    );
}

export default Card;
