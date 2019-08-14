import React from "react";
import { MainTemplate } from "@ui/templates";
import { Header } from "@features/common";
import { Container } from "@ui/atoms";

export const HomePage = () => (
  <MainTemplate header={<Header />}>
    <Container>
      <h1>Hello from Home Page</h1>
    </Container>
  </MainTemplate>
);
