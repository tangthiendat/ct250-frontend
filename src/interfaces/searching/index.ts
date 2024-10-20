import { PassengerType } from "../common";
import { IAirport } from "../flight";

export interface ISearchFlights {
  typeTrip: string;
  departureAirport?: IAirport;
  arrivalAirport?: IAirport;
  departureDate: string;
  flightRange: string[];
  passengers: {
    [PassengerType.ADULT]: number;
    [PassengerType.CHILD]: number;
    [PassengerType.INFANT]: number;
  };
  couponCode?: string;
  cabinClass: string;
}

export interface ISearchTicket {
  ticketNumber: string;
  fullName: string;
}

export interface ICheckin {
  reservationCode?: string;
  ticketNumber?: string;
  fullName: string;
}
