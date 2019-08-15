import React from "react";
import styled, { css } from "styled-components";

import { WeatherIcon } from "@ui/atoms";
import { ParagraphExtraSmall } from "@ui/atoms";

export const WeatherForecast = () => {
  return (
    <WeatherForecastBox>
      <WeatherDayWeek isActive={true}>
        <ParagraphExtraSmall as="div">Monday</ParagraphExtraSmall>
        <WeatherIcon icon="01d" />
        <ParagraphExtraSmall as="div">18° 12°</ParagraphExtraSmall>
      </WeatherDayWeek>
      <WeatherDayWeek isActive={false}>
        <ParagraphExtraSmall as="div">Tuesday</ParagraphExtraSmall>
        <WeatherIcon icon="02d" />
        <ParagraphExtraSmall as="div">18° 12°</ParagraphExtraSmall>
      </WeatherDayWeek>
      <WeatherDayWeek isActive={false}>
        <ParagraphExtraSmall as="div">Wednesday</ParagraphExtraSmall>
        <WeatherIcon icon="03d" />
        <ParagraphExtraSmall as="div">18° 12°</ParagraphExtraSmall>
      </WeatherDayWeek>
      <WeatherDayWeek isActive={false}>
        <ParagraphExtraSmall as="div">Thursday</ParagraphExtraSmall>
        <WeatherIcon icon="04d" />
        <ParagraphExtraSmall as="div">18° 12°</ParagraphExtraSmall>
      </WeatherDayWeek>
      <WeatherDayWeek isActive={false}>
        <ParagraphExtraSmall as="div">Friday</ParagraphExtraSmall>
        <WeatherIcon icon="09d" />
        <ParagraphExtraSmall as="div">18° 12°</ParagraphExtraSmall>
      </WeatherDayWeek>
    </WeatherForecastBox>
  );
};

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
  ${props =>
    props.isActive &&
    css`
      border: 1px solid #dfe1e5;
    `}

  &:hover {
    cursor: pointer;
  }
`;
