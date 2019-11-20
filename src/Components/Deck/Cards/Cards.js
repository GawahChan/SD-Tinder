import React from "react";
import PropTypes from "prop-types";
import Card from "./Card";

import { CardsContainer } from "./style";

function Cards({ stuntDoubleList, handleAction }) {
  return (
    <CardsContainer>
      {stuntDoubleList.map(stuntDouble => {
        return (
          <Card
            key={stuntDouble.id}
            stuntDouble={stuntDouble}
            handleAction={handleAction}
          />
        );
      })}
    </CardsContainer>
  );
}

Cards.propTypes = {
  stuntDoubleList: PropTypes.array,
  handleAction: PropTypes.func
};

export default Cards;
