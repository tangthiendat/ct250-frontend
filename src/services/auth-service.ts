import { AxiosInstance, AxiosResponse } from "axios";
import { ApiResponse, IAuthRequest, IAuthResponse, IUser } from "../interfaces";
import { createApiClient } from "./api-client";

const apiClient: AxiosInstance = createApiClient("auth", { auth: false });

interface IAuthService {
  login(authRequest: IAuthRequest): Promise<ApiResponse<IAuthResponse>>;
  register(user: Omit<IUser, "userId">): Promise<ApiResponse<IUser>>;
  logout(): Promise<ApiResponse<null>>;
  refreshToken(): Promise<void>;
}

class AuthService implements IAuthService {
  async register(
    userRequest: Omit<IUser, "userId">,
  ): Promise<ApiResponse<IUser>> {
    return (await apiClient.post("/register", userRequest)).data;
  }

  async login(authRequest: IAuthRequest): Promise<ApiResponse<IAuthResponse>> {
    const response = await apiClient.post<ApiResponse<IAuthResponse>>(
      "/login",
      authRequest,
    );
    return response.data;
  }

  async logout(): Promise<ApiResponse<null>> {
    localStorage.removeItem("access_token");
    return (await apiClient.post("/logout")).data;
  }

  async refreshToken(): Promise<void> {
    const response = await apiClient.post("/refresh-token");
    if (response.data.status === 200) {
      const { accessToken } = response.data.payload;
      localStorage.setItem("access_token", accessToken);
    }
  }
}

apiClient.interceptors.response.use(
  (response: AxiosResponse) => response,
  async (error) => {
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      await authService.refreshToken();
      const newAccessToken = localStorage.getItem("access_token");
      originalRequest.headers["Authorization"] = `Bearer ${newAccessToken}`;
      return apiClient(originalRequest);
    }
    return Promise.reject(error);
  },
);

export const authService = new AuthService();
