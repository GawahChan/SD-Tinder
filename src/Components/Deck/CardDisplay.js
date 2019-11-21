import React, { useState } from "react";
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
} from "../../Common/Styled/Icons.styles";
import { Header, Subtitle } from "../../Common/Styled/Typography.styles";

const CardDisplay = ({ stuntDouble, animateAction, action }) => {
  const [actionType, setActionType] = useState("");
  const [displayBio, setDisplayBio] = useState(false);

  const receiveAction = (id, actionType) => {
    animateAction(id, actionType);
    setActionType(actionType);
  };

  const toggleBio = () => setDisplayBio(!displayBio);

  const overlay = actionType ? actionType.toUpperCase() : action.toUpperCase();

  return (
    <CardContents actionColour={overlay} img={stuntDouble.img}>
      <CardOverlay actionColour={overlay}>{overlay}</CardOverlay>
      <CardContent>
        <Container>
          <Header>
            {stuntDouble.name}, {stuntDouble.age}
          </Header>
          <CardSubtitleContainer>
            <Subtitle>{stuntDouble.location}</Subtitle>
            <CardInfoButton onTap={toggleBio} />
          </CardSubtitleContainer>
          {displayBio && <Subtitle>{stuntDouble.bio}</Subtitle>}
        </Container>
        <Container>
          <CardButtonContainer>
            <CardDislikedButton
              onClick={() => receiveAction(stuntDouble.id, "disliked")}
            />
            <CardSuperlikedButton
              onClick={() => receiveAction(stuntDouble.id, "superliked")}
            />
            <CardLikedButton
              onClick={() => receiveAction(stuntDouble.id, "liked")}
            />
          </CardButtonContainer>
        </Container>
      </CardContent>
    </CardContents>
  );
};

CardDisplay.propTypes = {
  stuntDouble: PropTypes.object,
  animateAction: PropTypes.func,
  action: PropTypes.string
};
export default CardDisplay;
