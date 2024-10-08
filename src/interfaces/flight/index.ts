import { RouteType, TicketClass } from "../common";
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

export interface IRoute {
  routeId: number;
  departureAirport: IAirport;
  arrivalAirport: IAirport;
  routeType: RouteType;
}

export interface IFlightPrice {
  flightPricingId: number;
  ticketPrice: number;
  validFrom: string;
  validTo: string;
}

export interface ISeat {
  seatId: number;
  ticketClass: TicketClass;
  seatCode: string;
}

export interface ISeatAvailability {
  seatAvailabilityId: number;
  seat: ISeat;
  status: string;
}

export interface IFlightSchedule {
  flightId: string;
  departureDateTime: string;
  arrivalDateTime: string;
  flightDuration: string;
  flightStatus: string;
  route: IRoute;
  flightPricing: IFlightPrice[];
  seatAvailability: ISeatAvailability[];
  airplane: IAirplane;
}

export interface FlightSearchCriteria {
  departureLocation: number;
  arrivalLocation: number;
  departureDate: string;
  arrivalDate?: string;
}
