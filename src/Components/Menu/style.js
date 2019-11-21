import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export const MenuContainer = styled.div`
  position: fixed;
  z-index: 1;
  background-color: none;

  ${props =>
    props.displayMenu &&
    css`
      background-color: rgba(250, 250, 250, 0.5);
      height: 100%;
      width: 100%;
    `}
`;

export const MenuPanelContainer = styled(motion.div)`
  position: absolute;
  height: 100vh;
  width: 320px;

  background-color: rgba(250, 250, 250, 0.9);
  left: -350px;

  ${props =>
    props.displayMenu &&
    css`
      left: 0px;
    `}

  transition: left 1s;
`;

export const MenuPanel = styled.div`
  box-sizing: border-box;

  padding: 75px 5px 10px 5px;
`;

export const MenuLink = styled(Link)`
  text-decoration: none;
`;

export const Container = styled.div`
  box-sizing: border-box;
  padding: 5px;
`;
