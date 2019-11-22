import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { resetAllStuntDoubles } from "../../Store/Actions/actionTypes";

import Result from "./Result";
import { HOME_URL } from "../../Constants";
import { Header } from "../../Common/Styled/Typography.styles";
import { ResetLink, ResetButton } from "../../Common/Styled/Buttons.styles";
import { ResultsContainer, Container } from "./style";

class Results extends Component {
  render() {
    const {
      stuntDoublesList,
      superliked,
      liked,
      disliked,
      resetAllStuntDoubles
    } = this.props;

    return (
      <ResultsContainer>
        <Container>
          <Container>
            {stuntDoublesList.length > 0 ? (
              <Header>Keep swiping, you never know who you might meet!</Header>
            ) : (
              <Header>There's no one new around you</Header>
            )}
          </Container>
          <Container>
            <ResetLink to={HOME_URL} onClick={() => resetAllStuntDoubles()}>
              <ResetButton>Reset profiles and swipe again!</ResetButton>
            </ResetLink>
          </Container>
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
  disliked: PropTypes.array,
  resetAllStuntDoubles: PropTypes.func
};

const mapStateToProps = state => {
  return {
    stuntDoublesList: state.stuntDoubles,
    superliked: state.superliked,
    liked: state.liked,
    disliked: state.disliked
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ resetAllStuntDoubles }, dispatch);
};
export default connect(mapStateToProps, mapDispatchToProps)(Results);
