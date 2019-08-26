import React from "react";

import { Label } from "@ui/atoms";

import { IssueLabel } from "./../types";

export const LabelList = ({ labels }: LabelList) => (
  <>
    {labels.map(label => (
      <Label color={label.color} key={label.node_id}>
        {label.name}
      </Label>
    ))}
  </>
);

interface LabelList {
  labels: IssueLabel[];
}
