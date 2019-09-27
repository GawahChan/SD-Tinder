import React from 'react';
import Card from './Card';

import { CardsContainer } from './style';

function Cards(props) {
    return (
        <CardsContainer>
            {
                props.stuntDoubleList.map(stuntDouble => {
                    return (
                        <Card
                            key={stuntDouble.id}
                            stuntDouble={stuntDouble}
                            handleAction={props.handleAction}
                        />
                    );
                })
            }
        </CardsContainer>
    );
}

export default Cards;