import axios, { AxiosInstance } from "axios";



const API_URL = import.meta.env.VITE_API_URL; // Ensure API_URL is defined before use

interface ApiOptions {
  auth: boolean;
}

export function createApiClient(
  resourceUrl: string,
  options: ApiOptions = { auth: true }
): AxiosInstance {
  const axiosInstance = axios.create({
    baseURL: `${API_URL}/${resourceUrl}`,
    withCredentials: true,
  });

  if (options.auth) {
    axiosInstance.interceptors.request.use((config) => {
      const accessToken = localStorage.getItem("access_token");
      if (accessToken) {
        config.headers.Authorization = `Bearer ${accessToken}`;
      }
      return config;
    });
  }

  return axiosInstance;
}


