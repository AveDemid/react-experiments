import React from "react";
import styled from "styled-components";

import { Button } from "@ui/atoms";

export const DualSwitch = () => (
  <DialSwitchBox>
    <Button buttonType="link" isActive={true} disabled={true}>
      °C
    </Button>{" "}
    |{" "}
    <Button buttonType="link" isActive={false}>
      °F
    </Button>
  </DialSwitchBox>
);

export const DialSwitchBox = styled("div")`
  color: #878787;
  padding-top: 8px;
  padding-left: 8px;
  user-select: none;
`;
