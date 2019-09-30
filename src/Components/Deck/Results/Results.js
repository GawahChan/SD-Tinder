import React from 'react';
import Result from './Result';

import { ResultsContainer, ResultHeader } from './style';

function Results(props) {
    return (
        <ResultsContainer>
            <ResultHeader>There's no one new around you</ResultHeader>
            <Result
                title={"People you superliked!"}
                stuntDouble={props.superliked}
                subTitle={"You didn't superlike anyone"}
            />
            <Result
                title={"People you liked... let's hope they like you too!"}
                stuntDouble={props.liked}
                subTitle={"You didn't like anyone"}
            />
            <Result 
                title={"People you disliked"}
                stuntDouble={props.disliked}
                subTitle={"Cast a wide net they said..."}
                />
        </ResultsContainer>
    );
}

export default Results;