import styled from "styled-components";
import { motion } from "framer-motion";

export const CardsContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  flex: 1;
`;
// eslint-disable-next-line
export const CardContainer = styled(motion.div).attrs(props => ({
  style: {
    boxShadow:
      props.actionColour === "liked"
        ? "0px 0px 20px #15ff00"
        : props.actionColour === "disliked"
        ? "0px 0px 20px #ff0000"
        : props.actionColour === "superliked"
        ? "0 0 20px #02fdfd"
        : "0px 0px 10px #080808",

    border:
      props.actionColour === "liked"
        ? "1px solid #15ff00"
        : props.actionColour === "disliked"
        ? "1px solid #ff0000"
        : props.actionColour === "superliked"
        ? "1px solid #02fdfd"
        : "none"
  }
}))`
  position: absolute;
  border-radius: 10px;
  overflow: hidden;
  cursor: pointer;

  width: 320px;
  height: 480px;

  transition: box-shadow 0.5s, border 0.5s;
  will-change: transform;
`;

export const CardContents = styled(motion.div)`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  background-image: ${props =>
    `url(${require(`../../Common/Profile/${props.img}.jpg`)})`};
  background-position: top;
  background-size: cover;

  transition: box-shadow 0.5s;
  will-change: transform;
`;

export const CardContent = styled.div`
  padding: 10px;
  box-sizing: border-box;
  color: #dddddd;
  background: linear-gradient(
    rgba(0, 0, 0, 0),
    rgba(0, 0, 0, 0.7),
    rgba(0, 0, 0, 0.8),
    rgba(0, 0, 0, 1)
  );
`;

// eslint-disable-next-line
export const CardOverlay = styled.h1.attrs(props => ({
  style: {
    color:
      props.actionColour === "LIKED"
        ? "#15ff00"
        : props.actionColour === "DISLIKED"
        ? "#ff0000"
        : props.actionColour === "SUPERLIKED"
        ? "#02fdfd"
        : "black"
  }
}))`
  height: 30%;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 3rem;
  font-weight: 500;
`;

export const CardSubtitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  padding-top: 5px;
  padding-bottom: 5px;
`;

export const CardButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Container = styled.div`
  box-sizing: border-box;
  padding: 5px;
`;
