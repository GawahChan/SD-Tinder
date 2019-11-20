import React from "react";
import PropTypes from "prop-types";
import { Title } from "../../../Common/Styled/Typography.styles";
import { ResultProfile, Container } from "./style";

function ResultCard({ img, name }) {
  return (
    <ResultProfile img={img}>
      <Container>
        <Title>{name}</Title>
      </Container>
    </ResultProfile>
  );
}

ResultCard.propTypes = {
  img: PropTypes.string,
  name: PropTypes.string
};

export default ResultCard;
