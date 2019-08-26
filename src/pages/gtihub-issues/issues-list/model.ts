import { createEvent } from "effector";
import { Event } from "effector";

import {
  IssueRequestParams,
  fetchRepoDetail,
  fetchRepoIssues
} from "@features/github-issues";

export const pageReady: Event<IssueRequestParams> = createEvent();

pageReady.watch(payload => {
  fetchRepoDetail(payload);
  fetchRepoIssues(payload);
});
