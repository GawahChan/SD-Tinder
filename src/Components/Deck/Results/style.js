import styled from 'styled-components';

export const ResultsContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    min-height: 100vh;

    text-align: center;
    margin: 30px;
`

export const ResultDisplay = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
`

export const ResultHeader = styled.h1`
    color: white;
    font-weight: 400;
    font-size: 2.5rem;
`

export const ResultTitle = styled(ResultHeader)`
    font-size: 1.5rem;
`

export const ResultSubTitle = styled(ResultHeader)`
    font-size: 1rem;
    margin: 0;
`

export const ResultProfile = styled.div`
    background-image: ${props => {
        return (
            `linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0), rgba(0,0,0,0.6), rgba(0,0,0,1)),
            url(${require(`../../../Common/Profile/${props.img}.jpg`)})     `
        )
    }};
    
    border-radius: 10px;
    box-shadow: 1px 1px 8px #333;
    margin: 10px;

    background-size: cover;
    background-position: top;
    overflow: hidden;

    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    
    min-width: 250px;
    min-height: 250px;
`