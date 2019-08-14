import React from "react";
import { MainTemplate } from "@ui/templates";
import { Header } from "@features/common";
import { Container } from "@ui/atoms";

export const SocialCardsPage = () => (
  <MainTemplate header={<Header />}>
    <Container>
      <h1>Hello from Social Cards Page</h1>
    </Container>
  </MainTemplate>
);
