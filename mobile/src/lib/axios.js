import axios from "axios";

const isDevelopment = import.meta.env.MODE === "development";

export const axiosInstance = axios.create({
  // In production the frontend and backend are served by the same Express app.
  // In development Vite runs on :5173 and the API runs on :3000.
  baseURL: isDevelopment ? "http://localhost:3000/api" : "/api",
  withCredentials: true,
});
