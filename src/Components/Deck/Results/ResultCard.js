import React from "react";
import { Title } from "../../../Common/Styled/Typography.styles";
import { ResultProfile, Container } from "./style";

function ResultCard(props) {
  return (
    <ResultProfile img={props.img}>
      <Container>
        <Title>{props.name}</Title>
      </Container>
    </ResultProfile>
  );
}

export default ResultCard;
