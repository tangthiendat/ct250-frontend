import { AxiosInstance } from "axios";
import { ApiResponse, IAirport } from "../interfaces";
import { createApiClient } from "./api-client";

interface IAirportService {
  getAll(): Promise<ApiResponse<IAirport[]>>;
}

const apiClient: AxiosInstance = createApiClient("airports");

class AirportService implements IAirportService {
  async getAll(): Promise<ApiResponse<IAirport[]>> {
    return (await apiClient.get("/all")).data;
  }
}

export const airportService = new AirportService();
