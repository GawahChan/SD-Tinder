import React from 'react';
import {ResultProfile, ResultTitle} from './style';

function ResultCard(props) {
    return (
        <ResultProfile img={props.img}>
            <ResultTitle>{props.name}</ResultTitle>
        </ResultProfile>
    );
}

export default ResultCard;