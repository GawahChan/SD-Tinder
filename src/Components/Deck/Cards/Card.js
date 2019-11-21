import React, { useState } from "react";
import PropTypes from "prop-types";

import { CardContainer } from "./style";
import CardDisplay from "./CardDisplay";

const Card = ({ stuntDouble, handleAction }) => {
  const [action, setAction] = useState("");
  const [removeCard, setRemoveCard] = useState(false);

  const animateAction = (id, action) => {
    let removeCard =
      action === "liked"
        ? { x: 400, opacity: 0 }
        : action === "disliked"
        ? { x: -400, opacity: 0 }
        : action === "superliked"
        ? { y: -400, opacity: 0 }
        : { x: 0, y: 0 };

    setAction(action);
    setRemoveCard(removeCard);

    handleAction(id, action);
  };

  const handleDrag = info => {
    let xPosition = info.point.x;
    let yPosition = info.point.y;

    let action =
      xPosition > 50
        ? "liked"
        : xPosition < -50
        ? "disliked"
        : yPosition < -50
        ? "superliked"
        : "";

    setAction(action);
  };

  const handleDragEnd = (id, info) => {
    let xPosition = info.point.x;
    let yPosition = info.point.y;

    return xPosition > 80
      ? animateAction(id, "liked")
      : xPosition < -80
      ? animateAction(id, "disliked")
      : yPosition < -80
      ? animateAction(id, "superliked")
      : setAction("");
  };

  return (
    <CardContainer
      drag
      dragElastic={0.8}
      dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0 }}
      onDrag={(e, info) => handleDrag(info)}
      onDragEnd={(e, info) => handleDragEnd(stuntDouble.id, info)}
      animate={removeCard}
      actionColour={action}
    >
      <CardDisplay
        stuntDouble={stuntDouble}
        animateAction={animateAction}
        action={action}
      />
    </CardContainer>
  );
};

Card.propTypes = {
  stuntDouble: PropTypes.object,
  handleAction: PropTypes.func
};

export default Card;
