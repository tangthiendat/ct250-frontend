import { AxiosInstance } from "axios";
import { ApiResponse, User, } from "../interfaces";
import { createApiClient } from "./api-client";

interface IUserService {
    getLoggedInUser(): Promise<ApiResponse<User>>;
}

const apiClient: AxiosInstance = createApiClient("users");
class UserService implements IUserService {
    async getLoggedInUser(): Promise<ApiResponse<User>> {
        return (await apiClient.get("/logged-in")).data;
    }
}

export const userService = new UserService();
