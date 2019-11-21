import React, { useState } from "react";
import { MenuButton } from "../../Common/Styled/Icons.styles";
import { MainHeader, MenuText } from "../../Common/Styled/Typography.styles";
import {
  MenuContainer,
  MenuPanelContainer,
  MenuPanel,
  Container,
  MenuLink
} from "./style";

const Menu = () => {
  const [displayMenu, setDisplayMenu] = useState(false);

  return (
    <MenuContainer displayMenu={displayMenu}>
      <MenuButton onClick={() => setDisplayMenu(!displayMenu)} />
      <MenuPanelContainer displayMenu={displayMenu}>
        <MenuPanel>
          <Container>
            <MainHeader>SD-Tinder</MainHeader>
          </Container>
          <Container>
            <MenuLink to="/" onClick={() => setDisplayMenu(!displayMenu)}>
              <MenuText>Home</MenuText>
            </MenuLink>
          </Container>
          <Container>
            <MenuLink
              to="/results"
              onClick={() => setDisplayMenu(!displayMenu)}
            >
              <MenuText>Results</MenuText>
            </MenuLink>
          </Container>
        </MenuPanel>
      </MenuPanelContainer>
    </MenuContainer>
  );
};

export default Menu;
