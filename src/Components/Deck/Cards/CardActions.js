import React from 'react';

import {CardButtonContainer, CardLikedButton, CardDislikedButton, CardSuperlikedButton} from './style';

function CardActions({id, receiveAction}) {
    return (
        <CardButtonContainer>
            <CardDislikedButton onTap={() => receiveAction(id, 'disliked')}/>
            <CardSuperlikedButton onTap={() => receiveAction(id, 'superliked')} />
            <CardLikedButton onTap={() => receiveAction(id, 'liked')} />
        </CardButtonContainer>
    );
}

export default CardActions;