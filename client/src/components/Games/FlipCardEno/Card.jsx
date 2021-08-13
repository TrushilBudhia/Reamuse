import React from "react";
import "./styles.scss";

const Card = ({ id, name, flipped, matched, clicked }) => {
  return (
    <div
      onClick={() => (flipped ? undefined : clicked(name, id))}
      className={
        "card" + (flipped ? " flipped" : "") + (matched ? " matched" : "")
      }
    >
      <div className="back"><img src="/assets/images/backcard.png" alt={name} /></div>
      <div className="front">
        <img alt={name} src={"/assets/images/" + name + ".png"} />
      </div>
    </div>
  );
};

export default Card;
