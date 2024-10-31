import {
  BookingStatus,
  PassengerGender,
  PassengerTitle,
  PassengerType,
  RouteType,
} from "../common";
import { ICountry } from "../country";
import { IFlightSchedule, ISeat, TicketClass } from "../flight";

export interface IBooking {
  bookingId?: number;
  tripType: string;
  bookingFlights: IBookingFlight[];
  totalPrice: number;
  bookingStatus: BookingStatus;
}

export interface IBookingFlight {
  flight: IFlightSchedule;
  ticketClass: TicketClass;
  bookingPassengers: IBookingPassenger[];
}

export interface IBookingPassenger {
  bookingPassengerId?: number;
  passenger: IPassenger;
  baggage?: IBaggage;
  meals?: IMeal[];
  isPrimaryContact?: boolean;
  isSharedSeat?: boolean;
  passengerGroup?: string;
}

export interface IPassenger {
  passengerId?: number;
  passengerType: PassengerType;
  gender: PassengerGender;
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  email?: string;
  country: ICountry;
  phoneNumber?: string;
}

export interface IMeal {
  mealId: number;
  mealName: string;
  imgUrl?: string;
  mealPricing: IMealPricing[];
  createdAt: string;
  updatedAt?: string;
  createdBy?: string;
  updatedBy?: string;
}

export interface IMealPricing {
  mealPricingId: number;
  price: number;
  validFrom: string;
  validTo: string;
  isActive: boolean;
}

export interface IBaggage {
  baggageId: number;
  baggageWeight: number;
  baggagePricing: IBaggagePricing[];
  routeType: RouteType;
  createdAt: string;
  updatedAt?: string;
  createdBy?: string;
  updatedBy?: string;
}

export interface IBaggagePricing {
  baggagePricingId: number;
  price: number;
  validFrom: string;
  validTo: string;
  isActive: boolean;
}

export interface IPassengerData {
  passengerType: PassengerType;
  passengerTitle: PassengerTitle;
  passengerGender: PassengerGender;
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  email?: string;
  country?: ICountry;
  phone?: string;
  isEditing: boolean;
  services?: {
    depart: {
      baggage: IBaggage;
      meal: IMeal;
      seat: ISeat;
    };

    return: {
      baggage: IBaggage;
      meal: IMeal;
      seat: ISeat;
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
