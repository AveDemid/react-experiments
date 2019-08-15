import React from "react";
import styled from "styled-components";

import { Card, ParagraphExtraLarge, WeatherIcon } from "@ui/atoms";

import { DualSwitch } from "./../molecules/dual-switch";
import { AtmosphericCondition } from "./../molecules/atmospheric-condition";
import { WeatherHeader } from "./../molecules/weather-header";
import { WeatherForecast } from "./../molecules/weather-forecast";
import { TemperatureGraph } from "./../molecules/temperature-graph";

export const Weather = () => {
  return (
    <WeatherBox>
      <Card>
        <WeatherHeader
          location="Primorskiy, Saint Petersburg"
          date="Thursday 20:00"
          weather="Mostly Sunny"
        />
        <WeatherDay>
          <LeftArea>
            <WeatherIcon icon="01d"></WeatherIcon>
            <Temperature>
              <ParagraphExtraLarge as="div">16</ParagraphExtraLarge>
              <DualSwitch></DualSwitch>
            </Temperature>
          </LeftArea>
          <RightArea>
            <AtmosphericCondition precipitation={0} humidity={82} wind={2} />
          </RightArea>
        </WeatherDay>

        <TemperatureGraph />

        <WeatherForecast />
      </Card>
    </WeatherBox>
  );
};

export const WeatherBox = styled("div")`
  width: 63.4rem;
  padding-top: 2rem;
`;

export const WeatherDay = styled("div")`
  display: flex;
  justify-content: space-between;
  color: #878787;
`;

export const LeftArea = styled("div")`
  display: flex;
`;

export const RightArea = styled("div")`
  min-width: 45%;
`;

export const Temperature = styled("div")`
  display: flex;
  align-items: flex-start;
  user-select: none;
`;
