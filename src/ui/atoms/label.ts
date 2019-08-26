import styled, { css } from "styled-components";

interface Label {
  color: string;
}

export const Label = styled("span")<Label>`
  display: inline-block;
  border-radius: 0.4rem;
  padding: 0.2rem 0.4rem;
  font-size: 10px;
  font-weight: 300;
  margin-right: 0.8rem;
  margin-bottom: 0.4rem;
  ${props =>
    css`
      border: 1px solid #${props.color};
    `};
`;
