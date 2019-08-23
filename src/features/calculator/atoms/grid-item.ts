import { MouseEvent } from "react";
import styled, { css } from "styled-components";

interface GridItemProps {
  backgroundColor?: "#3e3e40" | "#505050" | "#6d6d6f" | "#ff9f09";

  gridColumnStart?: number;
  gridColumnEnd?: number;
  gridRowStart?: number;
  gridRowEnd?: number;

  borderTop?: string;
  borderRight?: string;
  borderBottom?: string;
  borderLeft?: string;

  borderTopLeftRadius?: number;
  borderTopRightRadius?: number;
  borderBottomRightRadius?: number;
  borderBottomLeftRadius?: number;

  onClick?(event: MouseEvent): void;
}

export const GridItem = styled("div")<GridItemProps>`
  border: 1px solid #3e3e40;

  ${({ gridColumnStart }) =>
    gridColumnStart &&
    css`
      grid-column-start: ${gridColumnStart};
    `}

  ${({ gridColumnEnd }) =>
    gridColumnEnd &&
    css`
      grid-column-end: ${gridColumnEnd};
    `}

  ${({ gridRowStart }) =>
    gridRowStart &&
    css`
      grid-row-start: ${gridRowStart};
    `}

  ${({ gridRowEnd }) =>
    gridRowEnd &&
    css`
      grid-row-end: ${gridRowEnd};
    `}

  ${({ backgroundColor }) =>
    backgroundColor
      ? css`
          background-color: ${backgroundColor};
        `
      : css`
          background-color: transparent;
        `}
        
  ${({ borderTop }) =>
    borderTop &&
    css`
      border-top: ${borderTop};
    `}

  ${({ borderRight }) =>
    borderRight &&
    css`
      border-right: ${borderRight};
    `}
    
  ${({ borderBottom }) =>
    borderBottom &&
    css`
      border-bottom: ${borderBottom};
    `}
    
  ${({ borderLeft }) =>
    borderLeft &&
    css`
      border-left: ${borderLeft};
    `}

  ${({ borderTopLeftRadius }) =>
    borderTopLeftRadius &&
    css`
      border-top-left-radius: ${borderTopLeftRadius}rem;
    `}

  ${({ borderTopRightRadius }) =>
    borderTopRightRadius &&
    css`
      border-top-right-radius: ${borderTopRightRadius}rem;
    `}

  ${({ borderBottomRightRadius }) =>
    borderBottomRightRadius &&
    css`
      border-bottom-right-radius: ${borderBottomRightRadius}rem;
    `}

  ${({ borderBottomLeftRadius }) =>
    borderBottomLeftRadius &&
    css`
      border-bottom-left-radius: ${borderBottomLeftRadius}rem;
    `}
`;
