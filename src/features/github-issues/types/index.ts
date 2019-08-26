export interface IssueRequestParams {
  owner: string;
  repo: string;
  page: string;
}

export interface IssueLabel {
  color: string;
  default: boolean;
  id: number;
  name: string;
  node_id: string;
  url: string;
}

export interface Issue {
  id: number;
  number: number;
  title: string;
  body: string;
  user: {
    avatar_url: string;
    login: string;
  };
  labels: IssueLabel[] | [];
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
