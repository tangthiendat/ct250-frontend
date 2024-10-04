import { ICountry } from "../country";

export interface IAirport {
  airportId: number;
  airportName: string;
  airportCode: string;
  cityName: string;
  cityCode: string;
  country: ICountry;
}
