import { AxiosInstance } from "axios";
import { ApiResponse, IMeal } from "../../interfaces";
import { createApiClient } from "../api-client";

interface IMealService {
  getAll(): Promise<ApiResponse<IMeal[]>>;
}
const apiClient: AxiosInstance = createApiClient("meals", { auth: false });

class MealService implements IMealService {
  async getAll(): Promise<ApiResponse<IMeal[]>> {
    return (await apiClient.get("/all")).data;
  }
}

export const mealService = new MealService();
