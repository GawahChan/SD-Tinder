import React from 'react';

import {CardButtonContainer, CardLikedButton, CardDislikedButton, CardSuperlikedButton} from './style';

function CardActions({id, receiveAction}) {
    return (
        <CardButtonContainer>
            <CardDislikedButton onClick={() => receiveAction(id, 'disliked')}/>
            <CardSuperlikedButton onClick={() => receiveAction(id, 'superliked')} />
            <CardLikedButton onClick={() => receiveAction(id, 'liked')} />
        </CardButtonContainer>
    );
}

export default CardActions;