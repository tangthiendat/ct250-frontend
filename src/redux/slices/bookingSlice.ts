import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  BookingStatus,
  IBooking,
  IBookingPassenger,
  IFlightSchedule,
  TicketClass,
  TripType,
} from "../../interfaces";

const initialState: IBooking = {
  bookingFlights: [],
  tripType: TripType.ONE_WAY,
  totalPrice: 0,
  bookingStatus: BookingStatus.INIT,
};

const bookingSlice = createSlice({
  name: "booking",
  initialState,
  reducers: {
    addFlight: (
      state,
      action: PayloadAction<{
        newFlight: IFlightSchedule;
        flightIndex: number;
        ticketClass: TicketClass;
      }>,
    ) => {
      state.bookingFlights[action.payload.flightIndex] = {
        flight: action.payload.newFlight,
        ticketClass: action.payload.ticketClass,
        bookingPassengers: [],
      };
    },
    addBookingPassengers: (
      state,
      action: PayloadAction<IBookingPassenger[]>,
    ) => {
      state.bookingFlights = state.bookingFlights.map((flight) => {
        return {
          ...flight,
          bookingPassengers: action.payload,
        };
      });
    },
    setTotalPrice: (state, action: PayloadAction<number>) => {
      state.totalPrice = action.payload;
    },
    setBookingTripType: (state, action: PayloadAction<string>) => {
      state.tripType = action.payload;
    },
    setBooking(_, action: PayloadAction<IBooking>) {
      return action.payload;
    },
    setBookingId: (state, action: PayloadAction<number>) => {
      state.bookingId = action.payload;
    },
    clearBookingId: (state) => {
      state.bookingId = undefined;
    },
    clearBooking: (state) => {
      state.bookingFlights = [];
    },
  },
});

export const {
  addFlight,
  clearBooking,
  addBookingPassengers,
  setBooking,
  setTotalPrice,
  setBookingTripType,
  setBookingId,
  clearBookingId,
} = bookingSlice.actions;
export default bookingSlice;
