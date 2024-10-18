import { RouteType, TicketClassName } from "../common";
import { ICountry } from "../country";

export interface IAirport {
  airportId: number;
  airportName: string;
  airportCode: string;
  cityName: string;
  cityCode: string;
  country: ICountry;
}

export interface IModel {
  modelID: number;
  modelName: string;
}

export interface IAirplane {
  airplaneID: number;
  registrationNumber: string;
  model: IModel;
  manufacturer: string;
  maxDistance: number;
  velocity: number;
  numberOfSeats: number;
  overallLength: number;
  wingspan: number;
  height: number;
  status: string;
}

export interface IRoute {
  routeId: number;
  departureAirport: IAirport;
  arrivalAirport: IAirport;
  routeType: RouteType;
  duration: number;
  createdAt: string;
  updatedAt?: string;
}

export interface TicketClass {
  ticketClassId: number;
  ticketClassName: string;
  luggageAllowance: string;
  checkedBaggageAllowance: string;
  refundFeeBefore: number;
  refundFeeAfter: number;
  changeFeeBefore: number;
  changeFeeAfter: number;
  isSeatSelectionFree: boolean;
}

export interface IFlightPricing {
  flightPricingId: number;
  ticketPrice: number;
  ticketClass: TicketClass;
  validFrom: string;
  validTo: string;
}

export interface ISeat {
  seatId: number;
  ticketClass: TicketClassName;
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
  flightStatus: string;
  route: IRoute;
  flightPricing: IFlightPricing[];
  seatAvailability: ISeatAvailability[];
  airplane: IAirplane;
}

export interface FlightSearchCriteria {
  departureLocation: number;
  arrivalLocation: number;
  departureDate: string;
  arrivalDate?: string;
}

export interface IFlightOverview {
  date: string;
  minPriceOfDay: number;
  hasFlight: boolean;
}
