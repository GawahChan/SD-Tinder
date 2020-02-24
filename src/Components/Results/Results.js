import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { resetAllStuntDoubles } from "../../Store/Actions/actionTypes";

import Result from "./Result";
import { DECK_URL } from "../../Constants";
import { Header } from "../../Common/Styled/Typography.styles";
import { HomeLink, ResultButton } from "../../Common/Styled/Buttons.styles";
import { ResultsPageContainer, ResultsContainer, Container } from "./style";

class Results extends Component {
  render() {
    const {
      stuntDoublesList,
      superliked,
      liked,
      disliked,
      resetAllStuntDoubles
    } = this.props;

    const showResult =
      superliked.length > 0 || liked.length > 0 || disliked.length > 0;

    const HeaderText =
      stuntDoublesList.length > 0
        ? `You never know who you might meet...`
        : `There's no one new around you`;

    const ButtonText =
      stuntDoublesList.length === 0
        ? `Reset all profiles`
        : showResult
        ? "Carry on swiping"
        : `Start swiping now!`;

    return (
      <ResultsPageContainer>
        <Container>
          <Header>{HeaderText}</Header>
          <Container>
            {stuntDoublesList.length > 0 ? (
              <HomeLink to={DECK_URL}>
                <ResultButton>{ButtonText}</ResultButton>
              </HomeLink>
            ) : (
              <HomeLink to={DECK_URL} onClick={() => resetAllStuntDoubles()}>
                <ResultButton>{ButtonText}</ResultButton>
              </HomeLink>
            )}
          </Container>
        </Container>
        {showResult && (
          <ResultsContainer>
            <Result
              id="superliked"
              title={"People you superliked!"}
              stuntDouble={superliked}
              subTitle={"You didn't superlike anyone..."}
            />
            <Result
              id="liked"
              title={"People you liked... let's hope they like you too!"}
              stuntDouble={liked}
              subTitle={"You didn't like anyone..."}
            />
            <Result
              id="disliked"
              title={"People you disliked"}
              stuntDouble={disliked}
              subTitle={"Cast a wide net they said..."}
            />
          </ResultsContainer>
        )}
      </ResultsPageContainer>
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
