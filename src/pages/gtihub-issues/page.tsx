import React, { useEffect } from "react";
import queryString from "query-string";
import { useStore } from "effector-react";
import { RouteComponentProps } from "react-router-dom";

import { Header } from "@features/common";
import {
  $issuesById,
  $issuesIdsByPage,
  $openIssuesCount
} from "@features/github-issues";
import { Pagination } from "@features/pagination";

import { Container } from "@ui/atoms";
import { MainTemplate } from "@ui/templates";

import { pageReady } from "./model";

interface GithubIssuesLocation {
  owner: string;
  repo: string;
}

export const GithubIssuesPage = ({
  match,
  location,
  history
}: RouteComponentProps<GithubIssuesLocation>) => {
  const { search } = location;
  // eslint-disable-next-line
  const { params: { owner, repo }} = match;
  const currentPage = (queryString.parse(search).page as string) || "1";

  const issuesById = useStore($issuesById);
  const issuesIdsByPage = useStore($issuesIdsByPage);
  const openIssuesCount = useStore($openIssuesCount);

  useEffect(() => {
    pageReady({ owner, repo, page: currentPage });
  }, [currentPage, history, owner, repo, search]);

  const issues =
    currentPage && issuesIdsByPage[currentPage] ? (
      <div>
        {issuesIdsByPage[currentPage].map(id => (
          <div key={id}>
            <h2>{issuesById[id].title}</h2>
          </div>
        ))}
      </div>
    ) : (
      <div>
        <h2>Loading...</h2>
      </div>
    );

  const issuesPerPage = 25;
  const totalNumberPages = Math.ceil(openIssuesCount / issuesPerPage);
  const handlePageChange = (pageNumber: number) => {
    history.push({
      search: `?page=${pageNumber}`
    });
  };

  return (
    <MainTemplate header={<Header />}>
      <Container>
        {issues}
        <Pagination
          totalNumberPages={totalNumberPages}
          onPageChange={handlePageChange}
          currentPage={currentPage}
        />
      </Container>
    </MainTemplate>
  );
};
