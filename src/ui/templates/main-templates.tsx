import React from "react";
import styled from "styled-components";

interface MainTemplateProps {
  header?: JSX.Element;
  children: JSX.Element[] | JSX.Element;
}

export const MainTemplate = ({ header, children }: MainTemplateProps) => (
  <Layout>
    {header && <Header>{header}</Header>}
    {children && <Content>{children}</Content>}
  </Layout>
);

export const Layout = styled("div")`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export const Header = styled("div")``;

export const Content = styled("div")`
  flex-grow: 1;
  overflow-y: scroll;
`;
