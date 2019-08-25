import { createStore } from "effector";
import { Issue } from "./../types";
import { fetchRepoDetail, fetchRepoIssues } from "./registry.events";

export const issuesToObject = (issuesList: Issue[]) =>
  issuesList.reduce(
    (previesValue, currentValue) => {
      previesValue[currentValue.id] = currentValue;
      return previesValue;
    },
    {} as { [key: string]: Issue }
  );

export const $issueIds = createStore<number[]>([]);
export const $issuesById = createStore<{ [key: string]: Issue }>({});
export const $issuesIdsByPage = createStore<{ [key: string]: number[] }>({});
export const $openIssuesCount = createStore<number>(0);

$issueIds.on(fetchRepoIssues.done, (_, { result }) =>
  result.map(issue => issue.id)
);

$issuesById.on(fetchRepoIssues.done, (state, { result }) => ({
  ...state,
  ...issuesToObject(result)
}));

$issuesIdsByPage.on(fetchRepoIssues.done, (state, { result, params }) => ({
  ...state,
  [params.page]: result.map(issue => issue.id)
}));

$openIssuesCount.on(
  fetchRepoDetail.done,
  (_, { result }) => result.open_issues_count
);
