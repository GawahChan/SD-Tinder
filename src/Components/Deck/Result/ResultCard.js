import React from 'react';
import './ResultCard.css';

function ResultCard(props) {
    return (
        <div className='result-card' style={{ 'backgroundImage': `url(${require(`../../../Common/Profile/${props.img}.jpg`)})` }}>
            <div className='result-card-title'>
                <h2>{props.name}</h2>
            </div>
        </div>
    );
}

export default ResultCard;