import { ICountry } from "../country";

export interface IAirport {
  airportId: number;
  airportName: string;
  airportCode: string;
  cityName: string;
  cityCode: string;
  country: ICountry;
}

export interface IAirplane {
  airplaneID: number;
  modelName: string;
  airplaneType: string;
  manufacturer: string;
  maxDistance: number;
  velocity: number;
  numberOfSeats: number;
  length: number;
  height: number;
  wingspan: number;
  status: string;
}

export interface IRoutes {
  routeID: number;
  departureAirport: IAirport;
  arrivalAirport: IAirport;
  // distance: number;
  // duration: number;
  routeType: string;
}

export interface IFlightPrice {
  flightPricingId: number;
  ticketPrice: number;
  validFrom: string;
  validTo: string;
}

export interface ISeat {
  seatID: number;
  seatClass: string;
  seatCode: string;
  seatStatus: string;
  seatPosition: string;
}

export interface IAvailableSeats {
  // availableSeatsID: number;
  totalAvailableSeats: number;
  seats: ISeat[];
}

export interface IFlightSchedule {
  flightID: number;
  flightName: string;
  departureAirport: IAirport;
  arrivalAirport: IAirport;
  departureDateTime: string;
  arrivalDateTime: string;
  flightDuration: string;
  flightStatus: string;
  route: IRoutes;
  flightPricing: IFlightPrice[];
  seatAvailability: IAvailableSeats;
  airplane: IAirplane;
}
