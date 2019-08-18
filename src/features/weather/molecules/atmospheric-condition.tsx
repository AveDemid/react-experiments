import React from "react";
import styled from "styled-components";

import { ParagraphExtraSmall } from "@ui/atoms/paragraph";

interface AtmosphericConditionProps {
  humidity: number;
  wind: number;
  windDeg: number;
}

export const AtmosphericCondition = ({
  humidity,
  wind,
  windDeg
}: AtmosphericConditionProps) => (
  <>
    <ParagraphExtraSmall as="div">Humidity: {humidity}%</ParagraphExtraSmall>
    <ParagraphExtraSmall as="div">
      Wind: <Arrow rotate={windDeg}>&#8595;</Arrow> | {wind} m/s
    </ParagraphExtraSmall>
  </>
);

interface Arrow {
  rotate: number;
}

const Arrow = styled("span")<Arrow>`
  display: inline-block;
  transition: transform 0.5s;
  transform: ${props => `rotate(${props.rotate}deg)`};
`;
