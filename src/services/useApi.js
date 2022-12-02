import axios from "axios";

export function api() {
  return axios.create({
    baseURL: import.meta.env.VITE_APP_API_URL,
  });
}

export const apiKey = () => {
  return import.meta.env.VITE_APP_API_KEY;
};
