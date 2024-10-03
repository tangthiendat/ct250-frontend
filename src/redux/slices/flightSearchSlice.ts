import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ISearchFlights } from "../../interfaces";

const initialState: ISearchFlights = {
  typeTrip: "round-trip",
  departureAirport: "",
  destinationAirport: "",
  departureDate: "",
  flightRange: [],
  passengers: {
    adult: 1,
    children: 0,
    infant: 0,
  },
  couponCode: "",
  cabinClass: "",
};

const flightSearchSlice = createSlice({
  name: "flightSearch",
  initialState,
  reducers: {
    setFlightSearchInfo: (state, action: PayloadAction<ISearchFlights>) => {
      return action.payload;
    },
    setTripType: (state, action: PayloadAction<string>) => {
      state.typeTrip = action.payload;
    },
    setDepartureAirport: (state, action: PayloadAction<string>) => {
      state.departureAirport = action.payload;
    },
    setDestinationAirport: (state, action: PayloadAction<string>) => {
      state.destinationAirport = action.payload;
    },
    setDepartureDate: (state, action: PayloadAction<string>) => {
      state.departureDate = action.payload;
      state.flightRange[0] = action.payload;
    },
    setReturnDate: (state, action: PayloadAction<string>) => {
      state.flightRange[1] = action.payload;
    },
    setPassengers: (
      state,
      action: PayloadAction<{
        adult: number;
        children: number;
        infant: number;
      }>,
    ) => {
      state.passengers = action.payload;
    },
    setCouponCode: (state, action: PayloadAction<string>) => {
      state.couponCode = action.payload;
    },
  },
});

export const {
  setFlightSearchInfo,
  setTripType,
  setDepartureAirport,
  setDestinationAirport,
  setDepartureDate,
  setReturnDate,
  setPassengers,
  setCouponCode,
} = flightSearchSlice.actions;

export default flightSearchSlice.reducer;
