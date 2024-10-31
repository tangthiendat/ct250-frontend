import { AxiosInstance } from "axios";
import { ApiResponse, IBaggage } from "../../interfaces";
import { createApiClient } from "../api-client";

interface IBaggageService {
  getAll(): Promise<ApiResponse<IBaggage[]>>;
}
const apiClient: AxiosInstance = createApiClient("baggage", { auth: false });

class BaggageService implements IBaggageService {
  async getAll(): Promise<ApiResponse<IBaggage[]>> {
    return (await apiClient.get("/all")).data;
  }
}

export const baggageService = new BaggageService();
