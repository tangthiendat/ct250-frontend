import { AxiosInstance } from "axios";
import {
  ApiResponse,
  FlightSearchCriteria,
  IFlightOverview,
  IFlightSchedule,
} from "../../interfaces";
import { createApiClient } from "../api-client";

interface IFlightScheduleService {
  getAll(): Promise<ApiResponse<IFlightSchedule[]>>;
  search(
    criteria: FlightSearchCriteria,
  ): Promise<ApiResponse<IFlightSchedule[]>>;
  getOverview(
    criteria: FlightSearchCriteria,
  ): Promise<ApiResponse<IFlightOverview[]>>;
}

const apiClient: AxiosInstance = createApiClient("flights", {
  auth: true,
});

class FlightScheduleService implements IFlightScheduleService {
  async getAll(): Promise<ApiResponse<IFlightSchedule[]>> {
    return (await apiClient.get("/all")).data;
  }

  async search(
    criteria: FlightSearchCriteria,
  ): Promise<ApiResponse<IFlightSchedule[]>> {
    return (
      await apiClient.get("/search", {
        params: criteria,
      })
    ).data;
  }
  async getOverview(
    criteria: FlightSearchCriteria,
  ): Promise<ApiResponse<IFlightOverview[]>> {
    return (
      await apiClient.get("/overview", {
        params: criteria,
      })
    ).data;
  }
}

export const flightScheduleService = new FlightScheduleService();
