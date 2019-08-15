import React from "react";

import {
  CardBox,
  LeftCardArea,
  RightCardArea,
  Avatar,
  CardHeader,
  LeftCardHeaderArea,
  RightCardHeaderArea,
  ProfileLink,
  ProfileName,
  ProfileUserName,
  DoteSeparator,
  DateLink,
  IconContainer,
  IconBackground,
  CardContent,
  CardText,
  CardOGContent,
  CardOGDescription,
  CardOGImageArea,
  CardOGLink,
  CardOGTextArea,
  CardOGTitle
} from "./styled";

import { ArrowDown } from "@ui/atoms";

export const Card = () => (
  <CardBox>
    <LeftCardArea>
      <Avatar
        style={{
          backgroundImage:
            "url(https://pbs.twimg.com/profile_images/692531829287567360/ytP7U362_x96.png)"
        }}
      ></Avatar>
    </LeftCardArea>

    <RightCardArea>
      <CardHeader>
        <LeftCardHeaderArea>
          <ProfileLink to="/social-cards">
            <ProfileName>The Partical Dev</ProfileName>
            <ProfileUserName>@TheParticalDev</ProfileUserName>
          </ProfileLink>
          <DoteSeparator>·</DoteSeparator>
          <DateLink to="/social-cards">Sep 10</DateLink>
        </LeftCardHeaderArea>

        <RightCardHeaderArea>
          <IconContainer>
            <IconBackground></IconBackground>
            <ArrowDown width={1.3} height={1.3}></ArrowDown>
          </IconContainer>
        </RightCardHeaderArea>
      </CardHeader>

      <CardContent>
        <CardText>
          Think you have learned all the tricks to make Gatsby work well for
          you?
        </CardText>
        <CardText>
          This article by @weibenfalk will show you how to keep state between
          pages with local state in Gatsby.js - so you will have one more trick
          up your sleeve.
        </CardText>
      </CardContent>

      <CardOGContent>
        <CardOGImageArea
          style={{
            backgroundImage:
              "url(https://pbs.twimg.com/card_img/1161608716371709952/Q6bPYy6a?format=jpg&name=medium)"
          }}
        ></CardOGImageArea>
        <CardOGTextArea>
          <CardOGTitle>
            How to keep state between pages with local state in Gatsby.js
          </CardOGTitle>
          <CardOGDescription>
            When using the static site generator Gatsby you don’t have a base
            “App” component to play with. That said, there’s no component that
            wraps around your whole application where you can put your state...
          </CardOGDescription>
          <CardOGLink>freecodecamp.org</CardOGLink>
        </CardOGTextArea>
      </CardOGContent>
    </RightCardArea>
  </CardBox>
);
