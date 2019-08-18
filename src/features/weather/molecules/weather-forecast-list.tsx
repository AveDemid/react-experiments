import React from "react";
import styled, { css } from "styled-components";

import { WeatherIcon } from "@ui/atoms";
import { ParagraphExtraSmall } from "@ui/atoms";

import { WeatherIconType } from "./../types";
import { getTempByScale } from "./../lib/get-temp-by-scale";

interface WeatherForecastListProps {
  arrOfMaxTemp: number[];
  arrOfMinTemp: number[];
  arrOfIcons: WeatherIconType[];
  handleSetCurrentDay: React.Dispatch<React.SetStateAction<number>>;
  currentDay: number;
  currentScale: "F" | "C";
}

export const WeatherForecastList = ({
  arrOfMaxTemp,
  arrOfMinTemp,
  arrOfIcons,
  handleSetCurrentDay,
  currentDay,
  currentScale
}: WeatherForecastListProps) => (
  <WeatherForecastBox>
    {arrOfMaxTemp.map((_, index) => {
      const minTemp = `${getTempByScale(arrOfMaxTemp[index], currentScale)}°`;
      const maxTemp = `${getTempByScale(arrOfMinTemp[index], currentScale)}°`;

      return (
        <WeatherDayWeek
          isActive={currentDay === index}
          key={index}
          onClick={() => handleSetCurrentDay(index)}
        >
          <ParagraphExtraSmall as="div">Monday</ParagraphExtraSmall>
          <WeatherIcon icon={arrOfIcons[index]} />
          <ParagraphExtraSmall as="div">
            {maxTemp} {minTemp}
          </ParagraphExtraSmall>
        </WeatherDayWeek>
      );
    })}
  </WeatherForecastBox>
);

export const WeatherForecastBox = styled("div")`
  display: flex;
  justify-content: space-between;
  padding-top: 2.4rem;
  margin-top: 2.4rem;
  margin-left: -1.6rem;
  margin-right: -1.6rem;
  padding-left: 1.6rem;
  padding-right: 1.6rem;
  border-top: 1px;
  border-top: 1px solid #dfe1e5;
  color: #878787;
  user-select: none;
`;

interface WeatherDayWeek {
  isActive: boolean;
}

export const WeatherDayWeek = styled("div")<WeatherDayWeek>`
  width: 20%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 0.8rem;
  padding: 0.8rem 0;
  border-radius: 0.8rem;
  transition: box-shadow 0.5s ease-in;
  ${props =>
    props.isActive &&
    css`
      box-shadow: 0 0px 10px -7px black;
    `}

  &:hover {
    cursor: pointer;
  }
`;
