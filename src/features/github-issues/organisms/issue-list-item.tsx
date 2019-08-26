import React from "react";
import styled from "styled-components";
import useReactRouter from "use-react-router";
import { NavLink } from "react-router-dom";

import { ParagraphSmall } from "@ui/atoms";
import { shorten } from "@lib/index";

import { Issue } from "./../types";
import { LabelList } from "./label-list";

interface IssueListItemProps {
  issue: Issue;
}

interface IssuesPageUrl {
  owner: string;
  repo: string;
}

export const IssueListItem = ({ issue }: IssueListItemProps) => {
  const { match } = useReactRouter<IssuesPageUrl>();

  const {
    params: { owner, repo }
  } = match;

  return (
    <IssueBox>
      <IssueUser>
        <UserAvatar
          style={{
            backgroundImage: `url("${issue.user.avatar_url}")`
          }}
        ></UserAvatar>
        <UserName>{issue.user.login}</UserName>
      </IssueUser>
      <IssueBody>
        <Link to={`/${owner}/${repo}/issues/${issue.number}`}>
          <IssueNumber>#{issue.number}</IssueNumber>
          <IssueTitle>{issue.title}</IssueTitle>
        </Link>

        <ParagraphSmall>{shorten(issue.body, 380)}</ParagraphSmall>

        <LabelList labels={issue.labels} />
      </IssueBody>
    </IssueBox>
  );
};

export const IssueBox = styled("div")`
  display: flex;
  padding: 3.2rem 0;
  border-bottom: 1px solid #ddd;
`;

export const IssueUser = styled("div")`
  width: 160px;
  text-align: center;
  padding: 0 1.6rem;
  flex-shrink: 0;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const UserAvatar = styled("div")`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  border: 1px solid #f2f2f2;
  background-size: cover;
  margin: 0 auto 1.6rem auto;
`;

export const UserName = styled("span")`
  white-space: nowrap;
`;

export const IssueBody = styled("div")`
  overflow: hidden;
  text-overflow: ellipsis;
  color: #444;
`;

export const Link = styled(NavLink)`
  color: #444;
  white-space: nowrap;
  margin-bottom: 0.8rem;
  display: inline-block;
  &:hover {
    text-decoration: none;
  }
`;

export const IssueNumber = styled("span")`
  color: #999;
  margin-right: 0.8rem;
`;

export const IssueTitle = styled("span")`
  font-weight: bold;
  font-size: 1.4rem;
  color: #444;
`;
