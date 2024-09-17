
import { AxiosInstance } from 'axios';
import { ApiResponse, ICountry } from '../interfaces';
import { createApiClient } from './api-client';

interface ICountryService {
    getCountries(): Promise<ApiResponse<ICountry[]>>;
}

const apiClient: AxiosInstance = createApiClient('countries');

class CountryService implements ICountryService {
    public async getCountries(): Promise<ApiResponse<ICountry[]>> {
        return (await apiClient.get('')).data;
    }
}

export const countryService = new CountryService();

