import React, { useState } from "react";
import PropTypes from "prop-types";
import { CardContainer } from "./style";
import CardDisplay from "./CardDisplay";

import {
  INITIAL_CARD_POSITION,
  REMOVE_LIKED_ANIMATION,
  REMOVE_DISLIKED_ANIMATION,
  REMOVE_SUPERLIKED_ANIMATION,
  DISPLAY_SUPERLIKED_BOUNDARY,
  DISPLAY_LIKED_BOUNDARY,
  DISPLAY_DISLIKED_BOUNDARY,
  REMOVE_SUPERLIKED_BOUNDARY,
  REMOVE_LIKED_BOUNDARY,
  REMOVE_DISLIKED_BOUNDARY
} from "../../Constants";

const Card = ({ stuntDouble, handleAction }) => {
  const [action, setAction] = useState("");
  const [removeCard, setRemoveCard] = useState(INITIAL_CARD_POSITION);

  const animateAction = (id, action) => {
    let removeCard =
      action === "liked"
        ? REMOVE_LIKED_ANIMATION
        : action === "disliked"
        ? REMOVE_DISLIKED_ANIMATION
        : action === "superliked"
        ? REMOVE_SUPERLIKED_ANIMATION
        : INITIAL_CARD_POSITION;

    setAction(action);
    setRemoveCard(removeCard);

    handleAction(id, action);
  };

  const handleDrag = info => {
    let xPosition = info.point.x;
    let yPosition = info.point.y;

    let action =
      xPosition > DISPLAY_LIKED_BOUNDARY
        ? "liked"
        : xPosition < DISPLAY_DISLIKED_BOUNDARY
        ? "disliked"
        : yPosition < DISPLAY_SUPERLIKED_BOUNDARY
        ? "superliked"
        : "";

    setAction(action);
  };

  const handleDragEnd = (id, info) => {
    let xPosition = info.point.x;
    let yPosition = info.point.y;

    return xPosition > REMOVE_LIKED_BOUNDARY
      ? animateAction(id, "liked")
      : xPosition < REMOVE_DISLIKED_BOUNDARY
      ? animateAction(id, "disliked")
      : yPosition < REMOVE_SUPERLIKED_BOUNDARY
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
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={removeCard}
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
