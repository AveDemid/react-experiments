import React from "react";
import styled from "styled-components";

export const TemperatureGraph = () => {
  return <TemperatureGraphBox></TemperatureGraphBox>;
};

export const TemperatureGraphBox = styled("div")`
  padding-bottom: 120px;
  border-top: 1px solid #dfe1e5;
  margin-left: -1.6rem;
  margin-right: -1.6rem;
  margin-top: 1.6rem;
`;
