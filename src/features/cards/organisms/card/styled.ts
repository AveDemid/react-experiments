import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const CardBox = styled("div")`
  display: flex;
  border-bottom: 1px solid rgb(230, 236, 240);
  padding-top: 1rem;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  max-width: 640px;
  &:hover {
    background-color: rgb(245, 248, 250);
  }
`;

export const LeftCardArea = styled("div")`
  flex-grow: 1;
  max-width: 5rem;
  margin-right: 0.5rem;
  margin-left: 0.5rem;
  padding-bottom: 1rem;
  min-width: 5rem;
`;

export const RightCardArea = styled("div")`
  flex-grow: 2;
  margin-right: 0.5rem;
  margin-left: 0.5rem;
  padding-bottom: 1rem;
`;

export const Avatar = styled("div")`
  width: 100%;
  padding-bottom: 100%;
  background-color: yellowgreen;
  border-radius: 50%;
  background-size: cover;
  background-position: center;
`;

export const CardHeader = styled("div")`
  display: flex;
  justify-content: space-between;
  font-size: 1.3rem;
  line-height: 1.7rem;
  margin-bottom: 0.8rem;
`;

export const LeftCardHeaderArea = styled("div")`
  flex-shrink: 1;
  display: flex;
`;
export const RightCardHeaderArea = styled("div")`
  margin-left: 2rem;
`;

export const ProfileName = styled("span")`
  color: rgb(20, 23, 26);
  font-weight: 600;
  margin-right: 0.8rem;
`;

export const ProfileUserName = styled("span")`
  font-weight: 600;
  color: rgb(101, 119, 134);
  min-width: 0px;
  max-width: 100%;
`;

export const ProfileLink = styled(NavLink)`
  &:hover {
    text-decoration: none;
    ${ProfileName} {
      text-decoration: underline;
    }
  }
`;

export const DoteSeparator = styled("span")`
  color: rgb(101, 119, 134);
  font-weight: 600;
  margin-left: 0.8rem;
  margin-right: 0.8rem;
`;

export const DateLink = styled(NavLink)`
  color: rgb(101, 119, 134);
  font-weight: 600;
  &:hover {
    color: rgb(101, 119, 134);
  }
`;

export const IconContainer = styled("div")`
  position: relative;
  color: #657786;
  &:hover {
    color: rgb(29, 161, 242);
  }
`;

export const IconBackground = styled("div")`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin-left: -5px;
  margin-right: -5px;
  margin-top: -5px;
  margin-bottom: -5px;
  border-radius: 50%;
  &:hover {
    cursor: pointer;
    background-color: rgba(29, 161, 242, 0.1);
  }
`;

export const CardContent = styled("div")`
  display: inline;
`;

export const CardText = styled("div")`
  font-size: 1.4rem;
  margin-bottom: 1.4rem;
`;

export const CardOGContent = styled("div")`
  border-radius: 1.4rem;
  overflow: hidden;
  border: 1px solid rgb(204, 214, 221);
  &:hover {
    background-color: rgba(0, 0, 0, 0.03);
  }
`;
export const CardOGImageArea = styled("div")`
  background-size: cover;
  background-position: center center;
  padding-bottom: 52.356%;
`;

export const CardOGTextArea = styled("div")`
  padding: 0.9rem;
`;

export const CardOGTitle = styled("div")`
  font-size: 14px;
  line-height: 1.3125;
  margin-bottom: 0.4rem;
`;

export const CardOGDescription = styled("div")`
  font-size: 14px;
  line-height: 1.3125;
  color: rgb(101, 119, 134);
  font-size: 14px;
  line-height: 1.3125;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  -webkit-line-clamp: 2;
  margin-bottom: 0.4rem;
`;
export const CardOGLink = styled("div")`
  color: rgb(101, 119, 134);
  font-size: 14px;
  line-height: 1.3125;
`;
