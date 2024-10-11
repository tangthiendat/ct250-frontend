import { TicketClass } from "../common";
import { IFlightSchedule } from "../flight";

export interface IBooking {
  bookingFlights: IBookingFlight[];
}

export interface IBookingFlight {
  flight: IFlightSchedule;
  ticketClass: TicketClass;
}
