type Method =
  | "GET"
  | "HEAD"
  | "POST"
  | "PUT"
  | "DELETE"
  | "CONNECT"
  | "OPTIONS"
  | "TRACE"
  | "PATCH";

export const request = <T>(method: string, url: string): Promise<T> =>
  fetch(url, {
    method: method
  }).then(response => response.json());
