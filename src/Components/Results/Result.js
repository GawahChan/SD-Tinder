import React from "react";
import PropTypes from "prop-types";
import { ThemeProvider } from "styled-components";
import { theme } from "../../Theme";
import ResultCard from "./ResultCard";
import { Title, Subtitle } from "../../Common/Styled/Typography.styles";
import { ResultDisplay, ResultContainer } from "./style";

function Result({ id, title, stuntDouble, subTitle }) {
  return (
    <ThemeProvider theme={theme[id]}>
      <ResultContainer>
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
      </ResultContainer>
    </ThemeProvider>
  );
}

Result.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  stuntDouble: PropTypes.array,
  subTitle: PropTypes.string
};

export default Result;
