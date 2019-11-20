import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  CardContents,
  CardOverlay,
  CardContent,
  CardButtonContainer,
  CardSubtitleContainer,
  Container
} from "./style";

import {
  CardInfoButton,
  CardLikedButton,
  CardDislikedButton,
  CardSuperlikedButton
} from "../../../Common/Styled/Icons.styles";
import { Header, Subtitle } from "../../../Common/Styled/Typography.styles";

class CardDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      actionType: "",
      displayBio: false
    };
  }

  receiveAction = (id, actionType) => {
    this.props.animateAction(id, actionType);
    this.setState({ actionType });
  };

  toggleBio = () => this.setState({ displayBio: !this.state.displayBio });

  render() {
    const overlay = this.state.actionType
      ? this.state.actionType.toUpperCase()
      : this.props.action.toUpperCase();

    return (
      <CardContents actionColour={overlay} img={this.props.stuntDouble.img}>
        <CardOverlay actionColour={overlay}>{overlay}</CardOverlay>
        <CardContent>
          <Container>
            <Header>
              {this.props.stuntDouble.name}, {this.props.stuntDouble.age}
            </Header>
            <CardSubtitleContainer>
              <Subtitle>{this.props.stuntDouble.location}</Subtitle>
              <CardInfoButton onTap={this.toggleBio} />
            </CardSubtitleContainer>
            {this.state.displayBio && (
              <Subtitle>{this.props.stuntDouble.bio}</Subtitle>
            )}
          </Container>
          <Container>
            <CardButtonContainer>
              <CardDislikedButton
                onClick={() =>
                  this.receiveAction(this.props.stuntDouble.id, "disliked")
                }
              />
              <CardSuperlikedButton
                onClick={() =>
                  this.receiveAction(this.props.stuntDouble.id, "superliked")
                }
              />
              <CardLikedButton
                onClick={() =>
                  this.receiveAction(this.props.stuntDouble.id, "liked")
                }
              />
            </CardButtonContainer>
          </Container>
        </CardContent>
      </CardContents>
    );
  }
}

CardDisplay.propTypes = {
  stuntDouble: PropTypes.object,
  animateAction: PropTypes.func,
  action: PropTypes.string
};
export default CardDisplay;
