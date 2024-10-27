// const apiUrl = process.env.NEXT_PUBLIC_API_URL;
import { apiUrl } from "../config";

export const fetchData = async (endpoint, method = "GET", body = null) => {
  const options = {
    method,
    headers: { "Content-Type": "application/json" },
  };

  if (body) options.body = JSON.stringify(body);

  const response = await fetch(`${apiUrl}/${endpoint}`, options);
  return await response.json();
};
