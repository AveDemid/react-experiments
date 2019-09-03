/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useMemo } from "react";

import { usePromiseAll } from "./../hooks/use-promise-all";

export const ClinicalTables = () => {
  const urls = useMemo(
    () => [
      "https://clinicaltables.nlm.nih.gov/api/icd10cm/v3/search?terms=a",
      "https://clinicaltables.nlm.nih.gov/api/icd10cm/v3/search?terms=b",
      "https://clinicaltables.nlm.nih.gov/api/icd10cm/v3/search?terms=c"
    ],
    []
  );

  const result = usePromiseAll(urls);

  // Holy shit :DDD
  const renderResult = () =>
    result &&
    result.map((element: any) => {
      return element.map((element: any) => {
        if (Array.isArray(element)) {
          return element.map((element: any, index) => {
            if (Array.isArray(element)) {
              return <p key={index}>{element.join(" ")}</p>;
            }
          });
        }
      });
    });

  return <>{renderResult()}</>;
};
