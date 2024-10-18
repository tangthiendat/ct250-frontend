import { IFlightSchedule, TicketClass } from "../flight";

export interface IBooking {
  bookingFlights: IBookingFlight[];
}

export interface IBookingFlight {
  flight: IFlightSchedule;
  ticketClass: TicketClass;
}
