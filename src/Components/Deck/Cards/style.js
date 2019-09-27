import styled from 'styled-components';
import { motion } from 'framer-motion';

export const CardsContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const CardContainer = styled(motion.div)`
    position: absolute;

    border-radius: 10px;
    overflow: hidden;

    width: 320px;
    height: 500px;

    box-shadow: ${props => {
        return (
            props.actionColour === 'liked' ? '0px 0px 20px #15ff00' :
                props.actionColour === 'disliked' ? '0px 0px 20px #ff0000' :
                    props.actionColour === 'superliked' ? '0 0 20px #02fdfd' : '0px 0px 10px #080808'
        )
    }};
        
    border: ${ props => {
        return (
            props.actionColour === 'liked' ? '1px solid #15ff00' :
                props.actionColour === 'disliked' ? '1px solid #ff0000' :
                    props.actionColour === 'superliked' ? '1px solid #02fdfd' : 'none'
        )
    }};

    transition: box-shadow 0.5s, border 0.5s;
    will-change: transform;
`

export const CardContents = styled(motion.div)`
    width: 100%;
    height: 100%;
    
    display: flex;
    flex-direction: column;
    justify-content: flex-end; 

    background-image: ${props => {
        return (
            `linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0), rgba(0,0,0,0.7), rgba(0,0,0,1)),
            url(${require(`../../../Common/Profile/${props.img}.jpg`)})`
        )

    }};
    background-position: top;
    background-size: cover;

    transition: box-shadow 0.5s;
    will-change: transform;
`

export const CardContent = styled.div`
    padding: 1rem;
    color: #DDDDDD;
`

export const CardOverlay = styled.h1`
    height: 30%;
    width: 100%;

    display: flex;
    justify-content: center;
    align-items: center;

    font-size: 3rem;
    font-weight: 500;

    color: ${props => {
        return (
            props.actionColour === 'LIKED' ? '#15ff00' :
                props.actionColour === 'DISLIKED' ? '#ff0000' :
                    props.actionColour === 'SUPERLIKED' ? '#02fdfd' : ''
        )
    }};
`
export const CardTitle = styled.h1`
    margin: 0;
    font-weight: 400;
    font-size: 2rem;
`

export const CardSubtitle = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const CardInfoButton = styled(motion.div)`
    background-image: url(${require(`../../../Common/Icons/info.svg`)});
    background-size: cover;

    height: 25px;
    width: 25px;
    cursor: pointer;
    outline: 0;
`

export const CardButtonContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 5px; 
`

export const CardLikedButton = styled(motion.div)`
    background-image: url(${require(`../../../Common/Icons/liked.svg`)});
    background-size: cover;
    height: 50px;
    width: 50px;
    margin: 10px;
    cursor: pointer;
    outline: 0;
`

export const CardDislikedButton = styled(CardLikedButton)`
    background-image: url(${require(`../../../Common/Icons/disliked.svg`)});

`

export const CardSuperlikedButton = styled(CardLikedButton)`
    background-image: url(${require(`../../../Common/Icons/superliked.svg`)});

`