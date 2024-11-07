import { Dayjs } from "dayjs";
import {
  PassengerGender,
  PassengerTitle,
  PassengerType,
  RouteType,
} from "../common";
import { ICountry } from "../country";
import { IFlightSchedule, ISeat, TicketClass } from "../flight";

export interface IBooking {
  bookingFlights: IBookingFlight[];
}

export interface IBookingFlight {
  flight: IFlightSchedule;
  ticketClass: TicketClass;
}

export interface IBaggagePricing {
  baggagePricingId: number;
  price: number;
}

export interface IBaggage {
  baggageId: number;
  baggageWeight: number;
  routeType: RouteType;
  baggagePricing: IBaggagePricing[];
}

export interface IMeal {
  mealID: number;
  mealName: string;
  mealPrice: number;
}

export interface IPassengerData {
  passengerType: PassengerType;
  passengerTitle: PassengerTitle;
  passengerGender: PassengerGender;
  firstName: string;
  lastName: string;
  dateOfBirth: string | Dayjs;
  email?: string;
  country?: ICountry;
  phone?: string;
  isEditing: boolean;
  services?: {
    depart?: {
      baggage?: IBaggage;
      meal?: IMeal;
      seat?: ISeat;
    };
    return?: {
      baggage?: IBaggage;
      meal?: IMeal;
      seat?: ISeat;
    };
  };
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
