import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IBooking, IFlightSchedule, TicketClass } from "../../interfaces";

const initialState: IBooking = {
  bookingFlights: [],
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
      };
    },
    clearBooking: (state) => {
      state.bookingFlights = [];
    },
  },
});

export const { addFlight, clearBooking } = bookingSlice.actions;
export default bookingSlice;
