import React from "react";
import PropTypes from "prop-types";
import ResultCard from "./ResultCard";
import { Title, Subtitle } from "../../../Common/Styled/Typography.styles";
import { ResultDisplay, Container } from "./style";

function Result({ title, stuntDouble, subTitle }) {
  return (
    <Container>
      <Title>{title}</Title>
      <ResultDisplay>
        {stuntDouble.length > 0 ? (
          stuntDouble.map(stuntDouble => {
            return (
              <ResultCard
                key={stuntDouble.id}
                img={stuntDouble.img}
                name={stuntDouble.name}
              />
            );
          })
        ) : (
          <Subtitle>{subTitle}</Subtitle>
        )}
      </ResultDisplay>
    </Container>
  );
}

Result.propTypes = {
  title: PropTypes.string,
  stuntDouble: PropTypes.array,
  subTitle: PropTypes.string
};

export default Result;
