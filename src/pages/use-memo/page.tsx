import React from "react";

import { Header } from "@features/common";
import { ClinicalTables } from "@features/use-memo";

import { Container } from "@ui/atoms";
import { MainTemplate } from "@ui/templates";

export const UseMemoPage = () => (
  <MainTemplate header={<Header />}>
    <Container>
      <ClinicalTables />
    </Container>
  </MainTemplate>
);
