import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IFlightSchedule } from "../../interfaces";

interface IBookingSlice {
  flights: IFlightSchedule[];
}

const initialState: IBookingSlice = {
  flights: [],
};

const bookingSlice = createSlice({
  name: "booking",
  initialState,
  reducers: {
    addFlight: (
      state,
      action: PayloadAction<{ newFlight: IFlightSchedule; index: number }>,
    ) => {
      state.flights[action.payload.index] = action.payload.newFlight;
    },
  },
});

export const { addFlight } = bookingSlice.actions;
export default bookingSlice;
