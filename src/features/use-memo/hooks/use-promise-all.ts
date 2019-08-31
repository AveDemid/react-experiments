import { useState, useEffect, useMemo } from "react";

export const usePromiseAll = (urls: string[]) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [result, setResult] = useState<any | null>(null);

  const promises = useMemo(
    () => urls.map(url => fetch(url).then(response => response.json())),
    [urls]
  );

  useEffect(() => {
    Promise.all(promises).then(response => {
      setResult(response);
    });
  }, [promises]);

  return result;
};
