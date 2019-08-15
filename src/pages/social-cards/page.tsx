import React from "react";

import { Header } from "@features/common";
import { Card } from "@features/cards";

import { Container } from "@ui/atoms";
import { MainTemplate } from "@ui/templates";

export const SocialCardsPage = () => (
  <MainTemplate header={<Header />}>
    <Container>
      <Card />
    </Container>
  </MainTemplate>
);
