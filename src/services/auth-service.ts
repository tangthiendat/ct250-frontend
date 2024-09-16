import { AxiosInstance } from "axios";
import { ApiResponse, IAuthRequest, IAuthResponse, IUser } from "../interfaces";
import { createApiClient } from "./api-client";

interface IAuthService {
    login(authRequest: IAuthRequest): Promise<ApiResponse<IAuthResponse>>;
    register(userRequest: Omit<IUser, "userId">): Promise<ApiResponse<IUser>>;
    logout(): Promise<ApiResponse<null>>;
}

const apiClient: AxiosInstance = createApiClient("auth", { auth: false });
class AuthService implements IAuthService {
    async register(userRequest: Omit<IUser, "userId">): Promise<ApiResponse<IUser>> {
        return (await (apiClient.post("/register", userRequest))).data;
    }
    async login(authRequest: IAuthRequest): Promise<ApiResponse<IAuthResponse>> {
        return (await apiClient.post("/login", authRequest)).data;
    }
    async logout(): Promise<ApiResponse<null>> {
        return (await apiClient.post("/logout")).data;
    }
}

export const authService = new AuthService();