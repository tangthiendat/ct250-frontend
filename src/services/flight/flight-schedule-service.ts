import { AxiosInstance } from "axios";
import { ApiResponse, IFlightSchedule } from "../../interfaces";
import { createApiClient } from "../api-client";

interface IFlightScheduleService {
  getAll(): Promise<ApiResponse<IFlightSchedule[]>>;
}

const apiClient: AxiosInstance = createApiClient("flights", {
  auth: true,
});

class FlightScheduleService implements IFlightScheduleService {
  async getAll(): Promise<ApiResponse<IFlightSchedule[]>> {
    return (await apiClient.get("/all")).data;
  }
}

export const flightScheduleService = new FlightScheduleService();
