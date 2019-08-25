import React from "react";
import styled, { css } from "styled-components";

interface Pagination {
  totalNumberPages: number;
  onPageChange(x: number): void;
  currentPage: string;
}

export const Pagination = ({
  totalNumberPages,
  onPageChange,
  currentPage
}: Pagination) => {
  if (totalNumberPages <= 1) return null;
  return (
    <PaginationBox>
      {new Array(totalNumberPages).fill(0).map((_, idx) => (
        <Button
          key={idx}
          onClick={() => {
            onPageChange(idx + 1);
          }}
          isActive={+currentPage === idx + 1}
        >
          {idx + 1}
        </Button>
      ))}
    </PaginationBox>
  );
};

interface ButtonProps {
  isActive: boolean;
}

export const Button = styled("button")<ButtonProps>`
  border: none;
  margin: 0 0.2rem;
  ${props =>
    props.isActive
      ? css`
          background-color: #ff3547;
          color: #fff;
        `
      : css`
          color: #000;
          background-color: transparent;
          &:hover {
            transition: all 0.3s linear;
            border-radius: 0.125rem;
            background-color: #eee;
          }
        `}
`;

export const PaginationBox = styled("div")`
  padding: 1.6rem 0;
  display: flex;
  overflow-y: scroll;
`;
