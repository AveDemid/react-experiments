import React from "react";
import styled from "styled-components";
import { ParagraphLarge, ParagraphSmall } from "@ui/atoms";

interface WeatherHeaderProps {
  location: string;
  date: string;
  weather: string;
}

export const WeatherHeader = ({
  location,
  date,
  weather
}: WeatherHeaderProps) => (
  <WeatherHeaderBox>
    <ParagraphLarge as="div">{location}</ParagraphLarge>
    <ParagraphSmall as="div">{date}</ParagraphSmall>
    <ParagraphSmall as="div">{weather}</ParagraphSmall>
  </WeatherHeaderBox>
);

export const WeatherHeaderBox = styled("div")`
  color: #878787;
  padding: 0 0 20px;
`;
