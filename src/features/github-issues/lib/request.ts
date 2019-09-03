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

export const request = async <T>(method: Method, url: string): Promise<T> => {
  // :)))))))
  const user = "AveDemid";
  const token = "1783c02002a2a594c03659ccaa4b97f23068e2d8";

  const creds = `${user}:${token}`;
  const auth = btoa(creds);

  const baseUri = "https://api.github.com";
  const response = await fetch(`${baseUri}${url}`, {
    method,
    mode: "cors",
    headers: {
      Authorization: `Basic ${auth}`
    }
  });
  return await response.json();
};
