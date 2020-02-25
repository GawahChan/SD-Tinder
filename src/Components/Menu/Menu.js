import React, { useState } from "react";
import { MenuButton } from "../../Common/Styled/Icons.styles";
import { MainHeader, MenuText } from "../../Common/Styled/Typography.styles";
import { HOME_URL, DECK_URL, ABOUT_URL } from "../../Constants";
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
            <MenuLink
              to={HOME_URL}
              onClick={() => setDisplayMenu(!displayMenu)}
            >
              <MenuText>Home</MenuText>
            </MenuLink>
          </Container>
          <Container>
            <MenuLink
              to={DECK_URL}
              onClick={() => setDisplayMenu(!displayMenu)}
            >
              <MenuText>Discover</MenuText>
            </MenuLink>
          </Container>
          <Container>
            <MenuLink
              to={ABOUT_URL}
              onClick={() => setDisplayMenu(!displayMenu)}
            >
              <MenuText>About</MenuText>
            </MenuLink>
          </Container>
        </MenuPanel>
      </MenuPanelContainer>
    </MenuContainer>
  );
};

export default Menu;
