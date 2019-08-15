import styled, { css } from "styled-components";

interface ButtonProps {
  buttonType: "link";
  isActive: boolean;
}

export const Button = styled("button")<ButtonProps>`
  font-size: 1.6rem;
  line-height: 1.6rem;
  padding: 0;
  ${props =>
    props.buttonType === "link" &&
    css`
      border: none;
      background-color: transparent;
      color: ${props.isActive ? "inherit" : "#1a0dab"};
    `};
  &:focus {
    outline: none;
  }
`;
