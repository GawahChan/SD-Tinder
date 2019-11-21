import styled from "styled-components";

export const ResultsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  min-height: 100vh;

  text-align: center;
  box-sizing: border-box;
  padding: 30px;
`;

export const ResultDisplay = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

export const ResultProfile = styled.div`
  background-image: ${props => {
    return `linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0), rgba(0,0,0,0.2), rgba(0,0,0,1)),
            url(${require(`../../Common/Profile/${props.img}.jpg`)})     `;
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
`;

export const Container = styled.div`
  box-sizing: border-box;
  padding: 10px;
`;
