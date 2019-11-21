import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
  removeStuntDouble,
  addStuntDouble
} from "../../Store/Actions/actionTypes";

import Results from "./Results/Results";
import Card from "./Cards/Card";

import { CardsContainer } from "./Cards/style";

class Deck extends Component {
  handleAction = (id, action) => {
    setTimeout(() => {
      this.props.addStuntDouble(id, action);
      this.props.removeStuntDouble(id);
    }, 500);
  };

  render() {
    const { stuntDoublesList } = this.props;
    return (
      <div>
        {stuntDoublesList.length > 0 ? (
          <CardsContainer>
            {stuntDoublesList.map(stuntDouble => {
              return (
                <Card
                  key={stuntDouble.id}
                  stuntDouble={stuntDouble}
                  handleAction={this.handleAction}
                />
              );
            })}
          </CardsContainer>
        ) : (
          <Results />
        )}
      </div>
    );
  }
}

Deck.propTypes = {
  stuntDoublesList: PropTypes.array,
  removeStuntDouble: PropTypes.func,
  addStuntDOuble: PropTypes.func
};

const mapStateToProps = state => {
  return {
    stuntDoublesList: state.stuntDoubles
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ removeStuntDouble, addStuntDouble }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Deck);
