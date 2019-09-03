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

        <MenuItem>
          <MenuLink to="/calculator" exact>
            Calculator
          </MenuLink>
        </MenuItem>

        <MenuItem>
          <MenuLink to="/facebook/react/issues">Github Issues</MenuLink>
        </MenuItem>

        <MenuItem>
          <MenuLink to="/use-memo">Use Memo</MenuLink>
        </MenuItem>
      </Menu>
    </ContainerFluid>
  </HeaderBox>
);
