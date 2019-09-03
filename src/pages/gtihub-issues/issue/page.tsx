import React from "react";
import { RouteComponentProps } from "react-router-dom";

import { Header } from "@features/common";

import { Container } from "@ui/atoms";
import { MainTemplate } from "@ui/templates";

interface IssueUrl {
  owner: string;
  repo: string;
  number: string;
}

export const IssuePage = ({
  match,
  location,
  history
}: RouteComponentProps<IssueUrl>) => {
  console.log(match, location, history);

  return (
    <MainTemplate header={<Header />}>
      <Container>Issue</Container>
    </MainTemplate>
  );
};
