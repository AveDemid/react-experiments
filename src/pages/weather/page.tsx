import React, { useEffect } from "react";

import { useStore } from "effector-react";

import { Container } from "@ui/atoms";
import { MainTemplate } from "@ui/templates";

import { Header } from "@features/common";
import { Weather } from "@features/weather";
import { loadWeather, $weather } from "@features/weather/model";

export const WeatherPage = () => {
  const weatherForecast = useStore($weather);

  useEffect(() => {
    loadWeather();
  }, []);

  return (
    <MainTemplate header={<Header />}>
      <Container>
        {weatherForecast ? (
          <Weather weatherForecast={weatherForecast} />
        ) : (
          <h1>Loading...</h1>
        )}
      </Container>
    </MainTemplate>
  );
};
