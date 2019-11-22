import styled from "styled-components";
import { Link } from "react-router-dom";

export const ResetLink = styled(Link)`
  text-decoration: none;
`;

export const ResetButton = styled.button`
  font-size: 1.5rem;

  box-sizing: border-box;
  padding: 10px 30px 10px 30px;

  border: 3px solid #f8ff9e;
  border-radius: 30px;
  color: #f8ff9e;
  background-color: transparent;
  cursor: pointer;
`;
