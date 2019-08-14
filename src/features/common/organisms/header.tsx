import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { ContainerFluid } from "@ui/atoms";

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

const HeaderBox = styled("div")`
  padding: 1.6rem 0;
  background-color: #24292e;
`;

const Menu = styled("ul")`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
`;

const MenuItem = styled("li")`
  margin: 0 0.8rem;
  &:first-child {
    margin-left: 0;
  }
  &:last-child {
    margin-right: 0;
  }
`;

const MenuLink = styled(NavLink)`
  color: #fff;
  font-weight: 600;
  &:hover {
    color: hsla(0, 0%, 100%, 0.7);
    text-decoration: none;
  }
  &.active {
    color: hsla(0, 0%, 100%, 0.7);
  }
`;
