import React from "react";
import "./Card.css";

const Card = (props) => {
  let cardClass = "card"; // Default card class

  // Determine the appropriate card class based on the type
  switch (props.type) {
    case "position":
      cardClass += " position";
      break;
    case "donate":
      cardClass += " donate";
      break;
    case "health":
      cardClass += " health";
      break;
    case "chat":
      cardClass += " chat";
      break;
    default:
      break;
  }

  return (
    <div className={cardClass}>
      <img src={props.image} alt="" width="60px" height="90px" />
      <h2>{props.text1}</h2>
      <h4>{props.text2}</h4>
    </div>
  );
};

export default Card;
