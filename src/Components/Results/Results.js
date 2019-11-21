import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import Result from "./Result";
import { Header } from "../../Common/Styled/Typography.styles";
import { ResultsContainer, Container } from "./style";

class Results extends Component {
  render() {
    const { stuntDoublesList, superliked, liked, disliked } = this.props;

    return (
      <ResultsContainer>
        <Container>
          {stuntDoublesList.length > 0 ? (
            <Header>Keep swiping, you never know who you might meet!</Header>
          ) : (
            <Header>There's no one new around you</Header>
          )}
        </Container>
        <Result
          title={"People you superliked!"}
          stuntDouble={superliked}
          subTitle={"You didn't superlike anyone..."}
        />
        <Result
          title={"People you liked... let's hope they like you too!"}
          stuntDouble={liked}
          subTitle={"You didn't like anyone..."}
        />
        <Result
          title={"People you disliked"}
          stuntDouble={disliked}
          subTitle={"Cast a wide net they said..."}
        />
      </ResultsContainer>
    );
  }
}

Results.propTypes = {
  stuntDoubleList: PropTypes.array,
  superliked: PropTypes.array,
  liked: PropTypes.array,
  disliked: PropTypes.array
};

const mapStateToProps = state => {
  return {
    stuntDoublesList: state.stuntDoubles,
    superliked: state.superliked,
    liked: state.liked,
    disliked: state.disliked
  };
};

export default connect(mapStateToProps)(Results);
