export interface IssueRequestParams {
  owner: string;
  repo: string;
  page: string;
}

export interface Issue {
  id: number;
  title: string;
}

export interface RepoDetailParams {
  owner: string;
  repo: string;
}

export interface RepoDetail {
  id: number;
  open_issues: number;
  open_issues_count: number;
}
