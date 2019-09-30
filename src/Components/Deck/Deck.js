import React, { Component } from 'react';
import Results from './Results/Results';
import Cards from './Cards/Cards';
import Data from '../../Data.js';

class Deck extends Component {
  constructor() {
    super();
    this.state = {
      stuntDoubleList: Data,
      disliked: [],
      superliked: [],
      liked: []
    }
  }

  handleAction = (id, action) => {
    let actionState = [...this.state[action]];
    let filtered = this.state.stuntDoubleList.find(stuntDouble => stuntDouble.id === id);
    actionState.unshift(filtered)

    let stuntDoubleList = this.state.stuntDoubleList.filter(stuntDouble => stuntDouble.id !== id);

    setTimeout(() => {
      this.setState({ [action]: actionState, stuntDoubleList });
    }, 500);
  }
  
  render() {
    const { stuntDoubleList, liked, superliked, disliked } = this.state;
    return (
      <div>
        {
          stuntDoubleList.length > 0 ?
            <Cards
              stuntDoubleList={stuntDoubleList}
              handleAction={this.handleAction}
            /> :
            <Results
              liked={liked}
              superliked={superliked}
              disliked={disliked}
            />
        }
      </div>
    );
  }
}

export default Deck;
