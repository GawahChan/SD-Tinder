import React, { Component } from 'react';
import Card from '../Card/Card';
import Data from '../../Data.js';

import './Deck.css';
class Deck extends Component {
  constructor() {
    super();
    this.state = {
      stuntDoubleList: Data,
      disliked: [],
      superliked:  [],
      liked: []
    }
  }

  handleAction = (id, action) => {

    let actionState = [...this.state[action]];
    let filtered = this.state.stuntDoubleList.find(stuntDouble => stuntDouble.id === id);
    actionState.unshift(filtered)

    let stuntDoubleList = this.state.stuntDoubleList.filter(stuntDouble => stuntDouble.id !== id); 
    
    this.setState({
      [action]: actionState,
      stuntDoubleList
    });
  }

  render() {
    return (
      <div className="deck">
        {
          this.state.stuntDoubleList.map(stuntDouble => {
            return (
              <Card
                key={stuntDouble.id}
                id={stuntDouble.id}
                name={stuntDouble.name}
                img={stuntDouble.img}
                age={stuntDouble.age}
                location={stuntDouble.location}
                bio={stuntDouble.bio}
                handleAction={this.handleAction}
              />
            );
          })
        }
      </div>
    );
  }

}

export default Deck;
