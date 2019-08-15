import React from "react";
import { ParagraphExtraSmall } from "@ui/atoms/paragraph";

interface AtmosphericConditionProps {
  precipitation: number;
  humidity: number;
  wind: number;
}

export const AtmosphericCondition = ({
  precipitation,
  humidity,
  wind
}: AtmosphericConditionProps) => (
  <>
    <ParagraphExtraSmall as="div">
      Precipitation: {precipitation}%
    </ParagraphExtraSmall>
    <ParagraphExtraSmall as="div">Humidity: {humidity}%</ParagraphExtraSmall>
    <ParagraphExtraSmall as="div">Wind: ${wind} m/s</ParagraphExtraSmall>
  </>
);
