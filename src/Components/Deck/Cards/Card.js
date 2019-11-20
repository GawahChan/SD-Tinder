import React, { Component } from "react";
import PropTypes from "prop-types";
import { CardContainer } from "./style";
import CardDisplay from "./CardDisplay";

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      action: "",
      removeCard: false
    };
  }

  animateAction = (id, action) => {
    let handleCardAnimation =
      action === "liked"
        ? { x: 400, opacity: 0 }
        : action === "disliked"
        ? { x: -400, opacity: 0 }
        : action === "superliked"
        ? { y: -400, opacity: 0 }
        : { x: 0, y: 0 };

    this.setState({ action, removeCard: handleCardAnimation });

    this.props.handleAction(id, action);
  };

  handleDrag = info => {
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

    this.setState({ action });
  };

  handleDragEnd = (id, info) => {
    let xPosition = info.point.x;
    let yPosition = info.point.y;

    return xPosition > 80
      ? this.animateAction(id, "liked")
      : xPosition < -80
      ? this.animateAction(id, "disliked")
      : yPosition < -80
      ? this.animateAction(id, "superliked")
      : this.setState({ action: "" });
  };
  render() {
    return (
      <CardContainer
        drag
        dragElastic={0.8}
        dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0 }}
        onDrag={(e, info) => this.handleDrag(info)}
        onDragEnd={(e, info) =>
          this.handleDragEnd(this.props.stuntDouble.id, info)
        }
        animate={this.state.removeCard}
        actionColour={this.state.action}
      >
        <CardDisplay
          stuntDouble={this.props.stuntDouble}
          animateAction={this.animateAction}
          action={this.state.action}
        />
      </CardContainer>
    );
  }
}

Card.propTypes = {
  stuntDouble: PropTypes.object,
  handleAction: PropTypes.func
};

export default Card;
