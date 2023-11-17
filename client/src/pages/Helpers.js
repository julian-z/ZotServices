import { ENDPOINT_URL } from "./Constants";

export async function fetchFromDjango(endpoint) {
  const response = await fetch(`${ENDPOINT_URL}${endpoint}`, {
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,POST,PATCH,OPTIONS",
    },
  });

  if (!response.ok) {
    throw response;
  }

  return response.json();
}
