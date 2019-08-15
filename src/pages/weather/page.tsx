import React from "react";
import { Container } from "@ui/atoms";
import { MainTemplate } from "@ui/templates";
import { Header } from "@features/common";
import { Weather } from "@features/weather";

export const WeatherPage = () => (
  <MainTemplate header={<Header />}>
    <Container>
      <Weather />
    </Container>
  </MainTemplate>
);
