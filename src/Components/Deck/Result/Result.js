import React from 'react';
import ResultCard from './ResultCard.js';
import './Result.css';

function Result(props) {
    return (
        <div className='result'>
            <h1>There's no one new around you</h1>
            <div className='result-superliked'>
                <h2>People you Superliked!</h2>
                <div className='result-profiles superliked'>
                    {
                        props.superliked.length > 0 ?
                            props.superliked.map(stuntDouble => {
                                return (
                                    <ResultCard
                                        key={stuntDouble.id}
                                        img={stuntDouble.img}
                                        name={stuntDouble.name}
                                    />
                                )
                            }) :
                            <h3>You didn't superlike any profiles</h3>
                    }
                </div>
            </div>
            <div className='result-liked'>
                <h2>People you liked... let's hope they like you too!</h2>
                <div className='result-profiles liked'>
                    {
                        props.liked.length > 0 ?
                            props.liked.map(stuntDouble => {
                                return (
                                    <ResultCard
                                        key={stuntDouble.id}
                                        img={stuntDouble.img}
                                        name={stuntDouble.name}
                                    />
                                )
                            }) :
                            <h3>You didn't like any profiles</h3>
                    }
                </div>
            </div>
            <div className='result-disliked'>
                <h2>People you disliked</h2>
                <div className='result-profiles disliked'>
                    {
                        props.disliked.length > 0 ?
                            props.disliked.map(stuntDouble => {
                                return (
                                    <ResultCard
                                        key={stuntDouble.id}
                                        img={stuntDouble.img}
                                        name={stuntDouble.name}
                                    />
                                )
                            }) :
                            <h3>Cast a wide net they said...</h3>
                    }
                </div>
            </div >
        </div>
    );
}

export default Result;