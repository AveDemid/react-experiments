import React from "react";
import { ContainerFluid } from "@ui/atoms";
import { HeaderBox, Menu, MenuItem, MenuLink } from "./styled";

export const Header = () => (
  <HeaderBox>
    <ContainerFluid>
      <Menu>
        <MenuItem>
          <MenuLink to="/" exact>
            Home
          </MenuLink>
        </MenuItem>

        <MenuItem>
          <MenuLink to="/social-cards" exact>
            Social Cards
          </MenuLink>
        </MenuItem>
      </Menu>
    </ContainerFluid>
  </HeaderBox>
);
