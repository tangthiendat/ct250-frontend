import { AxiosInstance } from "axios";
import { ApiResponse, IChangePassword, IUser } from "../../interfaces";
import { createApiClient } from "../api-client";

interface IUserService {
  getLoggedInUser(): Promise<ApiResponse<IUser>>;
  changePassword(
    id: string,
    password: IChangePassword,
  ): Promise<ApiResponse<void>>;
}

const apiClient: AxiosInstance = createApiClient("users");
class UserService implements IUserService {
  changePassword(
    id: string,
    password: IChangePassword,
  ): Promise<ApiResponse<void>> {
    return apiClient.put(`/${id}/change-password`, password);
  }
  async getLoggedInUser(): Promise<ApiResponse<IUser>> {
    return (await apiClient.get("/logged-in")).data;
  }
}

export const userService = new UserService();
