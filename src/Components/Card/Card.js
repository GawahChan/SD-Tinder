import React from 'react';
import Dislike from '../../Common/Icons/Dislike.svg';
import Superlike from '../../Common/Icons/SuperLike.svg';
import Like from '../../Common/Icons/Like.svg';

import './Card.css';

function Card(props) {
    return (
        <div className='card' style={{ 'backgroundImage': `url(${require(`../../Common/Profile/${props.img}.jpg`)})` }}>
            <div className='card-content'>
                <div className='card-bio'>
                    <h1>{props.name}, {props.age}</h1>
                    <p>{props.location}</p>
                    <p>{props.bio}</p>
                </div>
                <div className='card-actions'>
                    <button>
                        <img src={Dislike} alt='Dislike' />
                    </button>
                    <button>
                        <img src={Superlike} alt='Superlike' />
                    </button>
                    <button onClick={() => props.liked(props.id)}>
                        <img src={Like} alt='Like' />
                    </button>
                </div>
            </div>

        </div>
    );
}

export default Card;