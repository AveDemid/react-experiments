import React, { useState } from "react";
import styled from "styled-components";

import { Card, ParagraphExtraLarge, WeatherIcon } from "@ui/atoms";

import { DualSwitch } from "./../molecules/dual-switch";
import { AtmosphericCondition } from "./../molecules/atmospheric-condition";
import { WeatherHeader } from "./../molecules/weather-header";
import { WeatherForecastList } from "./../molecules/weather-forecast-list";

import {
  getWeatherByDay,
  getArrayOfMaxTemp,
  getArrayOfMinTemp,
  getArrayOfIcons,
  getTempByScale
} from "./../lib";

// TODO REMOVE LATTER
import { WeatherForecast, Weather as WeatherType } from "./../types";

const getHumidity = (list: WeatherType[]) => list[0].main.humidity;

interface WeatherProps {
  weatherForecast: WeatherForecast;
}

export const Weather = ({ weatherForecast: { list, city } }: WeatherProps) => {
  const [currentDayNumber, setCurrentDayNumber] = useState<number>(0);
  const [currentScale, setCurrentScale] = useState<"F" | "C">("C");

  const weatherByDay = getWeatherByDay(list);
  const currentDay = weatherByDay[currentDayNumber];

  const location = city.name;

  const arrOfMaxTemp = getArrayOfMaxTemp(weatherByDay);
  const arrOfMinTemp = getArrayOfMinTemp(weatherByDay);
  const arrOfIcons = getArrayOfIcons(weatherByDay);

  const currentTemp = getTempByScale(currentDay[0].main.temp, currentScale);
  const currentIcon = currentDay[0].weather[0].icon;
  const currentHumidity = getHumidity(currentDay);
  const currentWind = currentDay[0].wind.speed;
  const currentWindDeg = currentDay[0].wind.deg;
  const currentWeather = currentDay[0].weather[0].description;

  return (
    <WeatherBox>
      <Card>
        <WeatherHeader
          location={location}
          date="Thursday 20:00"
          weather={currentWeather}
        />
        <WeatherDay>
          <LeftArea>
            <WeatherIcon icon={currentIcon}></WeatherIcon>
            <Temperature>
              <ParagraphExtraLarge as="div">{currentTemp}</ParagraphExtraLarge>
              <DualSwitch
                setCurrentScale={setCurrentScale}
                currentScale={currentScale}
              ></DualSwitch>
            </Temperature>
          </LeftArea>
          <RightArea>
            <AtmosphericCondition
              humidity={currentHumidity}
              wind={currentWind}
              windDeg={currentWindDeg}
            />
          </RightArea>
        </WeatherDay>
        <WeatherForecastList
          handleSetCurrentDay={setCurrentDayNumber}
          arrOfMaxTemp={arrOfMaxTemp}
          arrOfMinTemp={arrOfMinTemp}
          arrOfIcons={arrOfIcons}
          currentDay={currentDayNumber}
          currentScale={currentScale}
        />
      </Card>
    </WeatherBox>
  );
};

export const WeatherBox = styled("div")`
  width: 63.4rem;
  margin-top: 2rem;
  box-shadow: 0 0px 10px -7px black;
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
