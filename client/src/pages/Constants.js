export const ENDPOINT_URL = "http://127.0.0.1:8000/api";

export const EMPTY_SERVICE = {
  user: 0,
  username: "unknown",
  image: "",
  title: "Loading...",
  location: "Other",
  spec_location: "Unknown",
  pricing: "0.00",
  description: "Loading...",
  category: "Miscellaneous",
  ratings: [],
};

export const EMPTY_USER = {
  user: {
    id: 0,
    username: "unknown",
  },
  phone: "N/A",
  first_name: "Loading...",
  last_name: "",
  email: "Unknown",
  services: [],
};
