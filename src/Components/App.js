import React from 'react';
import Card from './Card/Card.js';
import Data from '../Data.js';
import './App.css';

function App() {
  return (
    <div className="app">
      <h1>Stunt Double App</h1>
        {
          Data.map(stuntDouble => {
            return (
              <Card 
                key={stuntDouble.id}
                name={stuntDouble.name}
                age={stuntDouble.age}
                location={stuntDouble.location}
                bio={stuntDouble.bio}
              />
            );
          })
        }
    </div>
  );
}

export default App;
