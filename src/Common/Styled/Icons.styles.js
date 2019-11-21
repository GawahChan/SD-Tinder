import styled from "styled-components";
import { motion } from "framer-motion";

export const BasicIcon = styled(motion.div)`
  background-size: cover;
  height: 50px;
  width: 50px;
  margin: 10px;
  cursor: pointer;
  outline: 0;
`;

export const CardInfoButton = styled(BasicIcon)`
  background-image: url(${require(`../Icons/info.svg`)});

  height: 25px;
  width: 25px;
`;

export const CardLikedButton = styled(BasicIcon)`
  background-image: url(${require(`../Icons/liked.svg`)});
`;

export const CardDislikedButton = styled(BasicIcon)`
  background-image: url(${require(`../Icons/disliked.svg`)});
`;

export const CardSuperlikedButton = styled(BasicIcon)`
  background-image: url(${require(`../Icons/superliked.svg`)});
`;

export const MenuButton = styled(BasicIcon)`
  background-image: url(${require(`../Icons/menu.svg`)});
  position: absolute;
  z-index: 1;
`;
