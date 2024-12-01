import { PassengerType } from "./../../interfaces/common/enums/index";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ISearchFlights, IAirport, TripType } from "../../interfaces";

const initialState: ISearchFlights = {
  typeTrip: TripType.ROUND_TRIP,
  departureDate: "",
  flightRange: [],
  passengers: {
    [PassengerType.ADULT]: 1,
    [PassengerType.CHILD]: 0,
    [PassengerType.INFANT]: 0,
  },
  couponCode: "",
  cabinClass: "",
};

const flightSearchSlice = createSlice({
  name: "flightSearch",
  initialState,
  reducers: {
    setFlightSearchInfo: (state, action: PayloadAction<ISearchFlights>) => {
      return { ...state, ...action.payload };
    },
    setTripType: (state, action: PayloadAction<string>) => {
      state.typeTrip = action.payload;
    },
    setDepartureAirport: (state, action: PayloadAction<IAirport>) => {
      state.departureAirport = action.payload;
    },
    setArrivalAirport: (state, action: PayloadAction<IAirport>) => {
      state.arrivalAirport = action.payload;
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
        [PassengerType.ADULT]: number;
        [PassengerType.CHILD]: number;
        [PassengerType.INFANT]: number;
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
  setArrivalAirport,
  setDepartureDate,
  setReturnDate,
  setPassengers,
  setCouponCode,
} = flightSearchSlice.actions;

export default flightSearchSlice;
