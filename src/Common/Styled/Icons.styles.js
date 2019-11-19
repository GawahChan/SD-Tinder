import styled from "styled-components";
import { motion } from "framer-motion";

export const CardInfoButton = styled(motion.div)`
  background-image: url(${require(`../Icons/info.svg`)});
  background-size: cover;

  height: 25px;
  width: 25px;
  cursor: pointer;
  outline: 0;
`;

export const CardLikedButton = styled(motion.div)`
  background-image: url(${require(`../Icons/liked.svg`)});
  background-size: cover;
  height: 50px;
  width: 50px;
  margin: 10px;
  cursor: pointer;
  outline: 0;
`;

export const CardDislikedButton = styled(CardLikedButton)`
  background-image: url(${require(`../Icons/disliked.svg`)});
`;

export const CardSuperlikedButton = styled(CardLikedButton)`
  background-image: url(${require(`../Icons/superliked.svg`)});
`;
