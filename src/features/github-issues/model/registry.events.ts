import { createEffect } from "effector";
import { request } from "./../lib/request";

import {
  Issue,
  IssueRequestParams,
  RepoDetailParams,
  RepoDetail
} from "./../types";

export const fetchRepoIssues = createEffect<IssueRequestParams, Issue[]>();
fetchRepoIssues.use(({ owner, repo, page }) => {
  const url = `/repos/${owner}/${repo}/issues?per_page=25&page=${page}`;

  return request("GET", url);
});

export const fetchRepoDetail = createEffect<RepoDetailParams, RepoDetail>();
fetchRepoDetail.use(({ owner, repo }) => {
  const url = `/repos/${owner}/${repo}`;

  return request("GET", url);
});
