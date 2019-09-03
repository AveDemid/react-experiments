import React, { useEffect } from "react";
import queryString from "query-string";
import { useStore } from "effector-react";
import { RouteComponentProps } from "react-router-dom";

import { Header } from "@features/common";
import {
  $issuesById,
  $issuesIdsByPage,
  $openIssuesCount,
  IssueList
} from "@features/github-issues";
import { Pagination } from "@features/pagination";

import { ContainerMedium, ParagraphExtraLarge } from "@ui/atoms";
import { MainTemplate } from "@ui/templates";

import { pageReady } from "./model";

interface IssuesUrl {
  owner: string;
  repo: string;
}

export const IssuesPage = ({
  match,
  location,
  history
}: RouteComponentProps<IssuesUrl>) => {
  const { search } = location;
  // eslint-disable-next-line
  const { params: { owner, repo }} = match;
  const currentPage = (queryString.parse(search).page as string) || "1";

  const issuesById = useStore($issuesById);
  const issuesIdsByPage = useStore($issuesIdsByPage);
  const openIssuesCount = useStore($openIssuesCount);
  const issuesIds = issuesIdsByPage && issuesIdsByPage[currentPage];
  const issuesList = issuesIds && issuesIds.map(issue => issuesById[issue]);

  useEffect(() => {
    pageReady({ owner, repo, page: currentPage });
  }, [currentPage, history, owner, repo, search]);

  const issuesPerPage = 25;
  const totalNumberPages = Math.ceil(openIssuesCount / issuesPerPage);
  const handlePageChange = (pageNumber: number) => {
    history.push({
      search: `?page=${pageNumber}`
    });
  };

  return (
    <MainTemplate header={<Header />}>
      <ContainerMedium>
        {!!openIssuesCount && (
          <ParagraphExtraLarge>
            {openIssuesCount} open issues for {owner} / {repo}
          </ParagraphExtraLarge>
        )}
        {issuesList && <IssueList list={issuesList} />}
        <Pagination
          totalNumberPages={totalNumberPages}
          onPageChange={handlePageChange}
          currentPage={currentPage}
        />
      </ContainerMedium>
    </MainTemplate>
  );
};
