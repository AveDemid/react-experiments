import React from "react";
import styled from "styled-components";

import { Issue } from "./../types";
import { IssueListItem } from "./issue-list-item";

interface IssueList {
  list: Issue[];
}

export const IssueList = ({ list }: IssueList) => (
  <IssueListBox>
    {list.map(issue => (
      <IssueListItem key={issue.id} issue={issue} />
    ))}
  </IssueListBox>
);

export const IssueListBox = styled("div")``;
