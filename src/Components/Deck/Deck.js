import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
  removeStuntDouble,
  addStuntDouble
} from "../../Store/Actions/actionTypes";

import Card from "./Card";
import { HOME_URL } from "../../Constants";

import { AnimatePresence } from "framer-motion";
import { CardsContainer } from "./style";

class Deck extends Component {
  handleAction = (id, action) => {
    this.props.addStuntDouble(id, action);
    this.props.removeStuntDouble(id);
  };

  render() {
    const { stuntDoublesList } = this.props;
    return (
      <div>
        {stuntDoublesList.length > 0 ? (
          <CardsContainer>
            <AnimatePresence>
              {stuntDoublesList.map(stuntDouble => {
                return (
                  <Card
                    key={stuntDouble.id}
                    stuntDouble={stuntDouble}
                    handleAction={this.handleAction}
                  />
                );
              })}
            </AnimatePresence>
          </CardsContainer>
        ) : (
          <Redirect to={HOME_URL} />
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
