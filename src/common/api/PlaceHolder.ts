import axios from "axios";

export const placeHolder = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

placeHolder.interceptors.response.use((response) => {
  if (response.status === 204) {
    return { ...response, data: "Successful update" };
  }
  return response;
});
