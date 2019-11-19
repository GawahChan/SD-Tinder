import React from "react";
import ResultCard from "./ResultCard";
import { Title, Subtitle } from "../../../Common/Styled/Typography.styles";
import { ResultDisplay, Container } from "./style";

function Result(props) {
  return (
    <Container>
      <Title>{props.title}</Title>
      <ResultDisplay>
        {props.stuntDouble.length > 0 ? (
          props.stuntDouble.map(stuntDouble => {
            return (
              <ResultCard
                key={stuntDouble.id}
                img={stuntDouble.img}
                name={stuntDouble.name}
              />
            );
          })
        ) : (
          <Subtitle>{props.subTitle}</Subtitle>
        )}
      </ResultDisplay>
    </Container>
  );
}

export default Result;
