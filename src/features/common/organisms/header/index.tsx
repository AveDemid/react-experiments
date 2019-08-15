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
          <MenuLink to="/weather" exact>
            Weather
          </MenuLink>
        </MenuItem>
      </Menu>
    </ContainerFluid>
  </HeaderBox>
);
