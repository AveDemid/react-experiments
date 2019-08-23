import React from "react";
import { GridItem, Output, darkGray } from "./../atoms";

interface DisplayProps {
  output: string;
}

export const Display = ({ output }: DisplayProps) => (
  <GridItem gridColumnStart={1} gridColumnEnd={5} backgroundColor={darkGray}>
    <Output>{output}</Output>
  </GridItem>
);
