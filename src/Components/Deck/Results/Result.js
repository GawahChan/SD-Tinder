import React from 'react';
import ResultCard from './ResultCard';
import { ResultDisplay, ResultTitle, ResultSubTitle } from './style';

function Result(props) {
    return (
        <div>
            <ResultTitle>{props.title}</ResultTitle>
            <ResultDisplay>
                {props.stuntDouble.length > 0 ?
                    props.stuntDouble.map(stuntDouble => {
                        return (
                            <ResultCard
                                key={stuntDouble.id}
                                img={stuntDouble.img}
                                name={stuntDouble.name}
                            />
                        )
                    }) :
                    <ResultSubTitle>{props.subTitle}</ResultSubTitle>
                }
            </ResultDisplay>
        </div>
    );
}

export default Result;