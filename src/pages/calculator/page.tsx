import React from "react";

import { Container } from "@ui/atoms";
import { MainTemplate } from "@ui/templates";

import { Header } from "@features/common";
import { Calculator } from "@features/calculator";

export const CalculatorPage = () => (
  <MainTemplate header={<Header />}>
    <Container>
      <Calculator />
    </Container>
  </MainTemplate>
);
