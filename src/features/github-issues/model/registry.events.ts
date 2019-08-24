import { createEffect } from "effector";

import {
  Issue,
  IssueRequestParams,
  RepoDetailParams,
  RepoDetail
} from "./../types";

export const fetchRepoIssues = createEffect<IssueRequestParams, Issue[]>();
fetchRepoIssues.use(async ({ owner, repo, page = "1" }) => {
  const url = `https://api.github.com/repos/${owner}/${repo}/issues?per_page=25&page=${page}`;

  const response = await fetch(url);

  return await response.json();
});

export const fetchRepoDetail = createEffect<RepoDetailParams, RepoDetail>();
fetchRepoDetail.use(async ({ owner, repo }) => {
  const url = `https://api.github.com/repos/${owner}/${repo}`;

  const response = await fetch(url);

  return await response.json();
});
