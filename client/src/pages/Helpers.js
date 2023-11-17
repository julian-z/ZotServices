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

export function calculateRating(service) {
  if (service["ratings"].length === 0) {
    return 0.0;
  }

  var totalStars = 0.0;
  for (let rating of service["ratings"]) {
    totalStars += parseFloat(rating["rating"]);
  }
  return totalStars / service["ratings"].length;
}

export function formatCategory(category) {
  return category.charAt(0).toUpperCase() + category.slice(1).toLowerCase();
}
