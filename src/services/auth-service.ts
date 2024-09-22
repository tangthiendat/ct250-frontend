import { AxiosInstance, AxiosResponse } from "axios";
import { ApiResponse, IAuthRequest, IAuthResponse, IUser } from "../interfaces";
import { createApiClient } from "./api-client";

const apiClient: AxiosInstance = createApiClient("auth", { auth: false });

interface IAuthService {
  login(authRequest: IAuthRequest): Promise<ApiResponse<IAuthResponse>>;
  register(user: Omit<IUser, "userId">, siteUrl: string): Promise<ApiResponse<IUser>>;
  logout(): Promise<ApiResponse<null>>;
  refreshToken(): Promise<void>;
  verifyEmail(token: string): Promise<ApiResponse<IUser>>;
  forgotPassword(email: string, siteUrl: string): Promise<ApiResponse<void>>;
  resetPassword(token: string, newPassword: string): Promise<ApiResponse<void>>;
  verifyResetToken(token: string): Promise<ApiResponse<void>>;
}

class AuthService implements IAuthService {
  async register(userRequest: Omit<IUser, "userId">, siteUrl: string): Promise<ApiResponse<IUser>> {

    return (await apiClient.post("/register", userRequest, {
      headers: {
        siteUrl: siteUrl,
      },
    })).data;
  }

  async login(authRequest: IAuthRequest): Promise<ApiResponse<IAuthResponse>> {
    const response = await apiClient.post<ApiResponse<IAuthResponse>>("/login", authRequest);
    if (response.data.status === 200) {
      const { accessToken } = response.data.payload;
      localStorage.setItem("access_token", accessToken);
    }
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
  async verifyEmail(token: string): Promise<ApiResponse<IUser>> {
    try {
      const response = await apiClient.get<ApiResponse<IUser>>(`/verify?token=${token}`);
      return response.data;
    } catch (error: any) {
      throw new Error(error.response?.data?.message || "Email verification failed");
    }
  }

  async forgotPassword(email: string, siteUrl: string): Promise<ApiResponse<void>> {
    return (await apiClient.post("/forgot-password", null, {
      params: { email, siteUrl },
    })).data;
  }

  async resetPassword(token: string, newPassword: string): Promise<ApiResponse<void>> {
    return (await apiClient.post('/reset-password', null, {
      params: { token, newPassword },
    })).data;
  }

  async verifyResetToken(token: string): Promise<ApiResponse<void>> {
    return (await apiClient.get(`/verify-reset-token`, {
      params: { token },
    })).data;
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
