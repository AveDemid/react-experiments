import React, { MouseEvent } from "react";
import { GridItem, Char, mediumGray, orange, lightGray } from "./../atoms";

interface ButtonsProps {
  onDigitClick(event: MouseEvent): void;
  onOperatorClick(event: MouseEvent): void;
  onDecimalClick(event: MouseEvent): void;
  onEqualClick(event: MouseEvent): void;
  onClearClick(event: MouseEvent): void;
}

export const Buttons = ({
  onDigitClick,
  onOperatorClick,
  onDecimalClick,
  onEqualClick,
  onClearClick
}: ButtonsProps) => {
  return (
    <>
      <GridItem
        backgroundColor={mediumGray}
        borderLeft="none"
        onClick={onClearClick}
        gridColumnStart={1}
        gridColumnEnd={4}
      >
        <Char>AC</Char>
      </GridItem>
      <GridItem
        backgroundColor={orange}
        borderRight="none"
        onClick={onOperatorClick}
      >
        <Char>/</Char>
      </GridItem>

      <GridItem
        backgroundColor={lightGray}
        borderLeft="none"
        onClick={onDigitClick}
      >
        <Char>7</Char>
      </GridItem>
      <GridItem backgroundColor={lightGray} onClick={onDigitClick}>
        <Char>8</Char>
      </GridItem>
      <GridItem backgroundColor={lightGray} onClick={onDigitClick}>
        <Char>9</Char>
      </GridItem>
      <GridItem
        backgroundColor={orange}
        borderRight="none"
        onClick={onOperatorClick}
      >
        <Char>*</Char>
      </GridItem>

      <GridItem
        backgroundColor={lightGray}
        borderLeft="none"
        onClick={onDigitClick}
      >
        <Char>4</Char>
      </GridItem>
      <GridItem backgroundColor={lightGray} onClick={onDigitClick}>
        <Char>5</Char>
      </GridItem>
      <GridItem backgroundColor={lightGray} onClick={onDigitClick}>
        <Char>6</Char>
      </GridItem>
      <GridItem
        backgroundColor={orange}
        borderRight="none"
        onClick={onOperatorClick}
      >
        <Char>-</Char>
      </GridItem>

      <GridItem
        backgroundColor={lightGray}
        borderLeft="none"
        onClick={onDigitClick}
      >
        <Char>1</Char>
      </GridItem>
      <GridItem backgroundColor={lightGray} onClick={onDigitClick}>
        <Char>2</Char>
      </GridItem>
      <GridItem backgroundColor={lightGray} onClick={onDigitClick}>
        <Char>3</Char>
      </GridItem>
      <GridItem
        backgroundColor={orange}
        borderRight="none"
        onClick={onOperatorClick}
      >
        <Char>+</Char>
      </GridItem>

      <GridItem
        gridColumnStart={1}
        gridColumnEnd={3}
        backgroundColor={lightGray}
        borderBottomLeftRadius={0.6}
        borderLeft="none"
        borderBottom="none"
        onClick={onDigitClick}
      >
        <Char>0</Char>
      </GridItem>

      <GridItem
        backgroundColor={lightGray}
        borderBottom="none"
        onClick={onDecimalClick}
      >
        <Char>.</Char>
      </GridItem>
      <GridItem
        backgroundColor={orange}
        borderBottomRightRadius={0.6}
        borderRight="none"
        borderBottom="none"
        onClick={onEqualClick}
      >
        <Char>=</Char>
      </GridItem>
    </>
  );
};
