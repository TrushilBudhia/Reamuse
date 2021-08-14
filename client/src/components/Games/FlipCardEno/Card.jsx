import React from "react";
import { CardItem, Back, BackImage, Front, FrontImage } from './FlipCardEno.styles'

const Card = ({ id, name, flipped, matched, clicked }) => {
  return (
    <CardItem
      onClick={() => (flipped ? undefined : clicked(name, id))}
      className={
        "card" + (flipped ? " flipped" : "") + (matched ? " matched" : "")
      }
    >
      <Back>
        <BackImage src="/assets/images/backcard.png" alt={name} />
      </Back>
      <Front className="front">
        <FrontImage alt={name} src={"/assets/images/" + name + ".png"} />
      </Front>
    </CardItem>
  );
};

export default Card;
