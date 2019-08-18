import React from "react";
import styled from "styled-components";

import { Button } from "@ui/atoms";

interface DualSwitchProps {
  setCurrentScale: React.Dispatch<React.SetStateAction<"F" | "C">>;
  currentScale: "F" | "C";
}

export const DualSwitch = ({
  setCurrentScale,
  currentScale
}: DualSwitchProps) => (
  <DialSwitchBox>
    <Button
      buttonType="link"
      isActive={currentScale === "C"}
      onClick={() => setCurrentScale("C")}
    >
      °C
    </Button>{" "}
    |{" "}
    <Button
      buttonType="link"
      isActive={currentScale === "F"}
      onClick={() => setCurrentScale("F")}
    >
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
