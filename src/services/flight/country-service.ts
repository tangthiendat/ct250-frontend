import { AxiosInstance } from "axios";
import { ApiResponse, ICountry } from "../../interfaces";
import { createApiClient } from "../api-client";

interface ICountryService {
  getAllCountries(): Promise<ApiResponse<ICountry[]>>;
  getCountryById(id: number): Promise<ApiResponse<ICountry>>;
}

const apiClient: AxiosInstance = createApiClient("countries", { auth: false });

class CountryService implements ICountryService {
  async getAllCountries(): Promise<ApiResponse<ICountry[]>> {
    return (await apiClient.get("/all")).data;
  }

  async getCountryById(id: number): Promise<ApiResponse<ICountry>> {
    return (await apiClient.get(`/${id}`)).data;
  }
}

export const countryService = new CountryService();
