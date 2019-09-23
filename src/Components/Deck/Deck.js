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

  liked = (id) => {
    let liked = [...this.state.liked];
    let filtered = this.state.stuntDoubleList.find(stuntDouble => stuntDouble.id === id);
    liked.unshift(filtered)

    let stuntDoubleList = this.state.stuntDoubleList.filter(stuntDouble => stuntDouble.id !== id);
    
    this.setState({ stuntDoubleList, liked });
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
                liked={this.liked}
              />
            );
          })
        }
      </div>
    );
  }

}

export default Deck;
