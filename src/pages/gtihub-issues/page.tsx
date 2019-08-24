import React, { useEffect } from "react";
import { RouteComponentProps } from "react-router-dom";
import { useStore } from "effector-react";
import queryString from "query-string";

import { Header } from "@features/common";
import {
  $issueIds,
  $issuesById,
  $openIssuesCount
} from "@features/github-issues";

import { Container } from "@ui/atoms";
import { MainTemplate } from "@ui/templates";

import { pageReady } from "./model";

export const GithubIssuesPage = ({
  match: {
    params: { owner, repo }
  },
  location: { search }
}: RouteComponentProps<{ owner: string; repo: string; page: string }>) => {
  const issueIds = useStore($issueIds);
  const issuesById = useStore($issuesById);
  const openIssuesCount = useStore($openIssuesCount);

  useEffect(() => {
    let page: string;
    const parsedNumberPage = queryString.parse(search).page;

    if (parsedNumberPage && typeof parsedNumberPage === "string") {
      page = parsedNumberPage;
    } else {
      page = "1";
    }

    pageReady({ owner, repo, page });
  }, [owner, repo, search]);

  return (
    <MainTemplate header={<Header />}>
      <Container>
        {issueIds.map(id => (
          <div key={id}>{issuesById[id].title}</div>
        ))}

        <div>Open issues count = {openIssuesCount}</div>
      </Container>
    </MainTemplate>
  );
};
