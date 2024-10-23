import { Dayjs } from "dayjs";
import { PassengerTitle, PassengerType } from "../common";
import { ICountry } from "../country";
import { IFlightSchedule, TicketClass } from "../flight";

export interface IBooking {
  bookingFlights: IBookingFlight[];
}

export interface IBookingFlight {
  flight: IFlightSchedule;
  ticketClass: TicketClass;
}

export interface IPassengerData {
  passengerType: PassengerType;
  passengerTitle: PassengerTitle;
  firstName: string;
  lastName: string;
  dateOfBirth: string | Dayjs;
  email?: string;
  country?: ICountry;
  phone?: string;
}

export interface IPassengersData {
  inputtingTravelerType: PassengerType;
  totalAdult: number;
  totalChildren: number;
  totalInfant: number;
  currentAdultIndex: number;
  currentChildIndex: number;
  currentInfantIndex: number;
  passengersInfo: IPassengerData[];
}
