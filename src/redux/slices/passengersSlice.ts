import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IPassengersData, PassengerType } from "../../interfaces";

const initialState: IPassengersData = {
  inputtingTravelerType: PassengerType.ADULT,
  totalAdult: 1,
  totalChildren: 0,
  totalInfant: 0,
  currentAdultIndex: 0,
  currentChildIndex: 0,
  currentInfantIndex: 0,
  passengersInfo: [],
};

const passengersSlice = createSlice({
  name: "passengers",
  initialState,
  reducers: {
    setInputtingTravelerType: (state, action: PayloadAction<PassengerType>) => {
      state.inputtingTravelerType = action.payload;
    },
    setTotalAdult: (state, action: PayloadAction<number>) => {
      state.totalAdult = action.payload;
    },
    setTotalChildren: (state, action: PayloadAction<number>) => {
      state.totalChildren = action.payload;
    },
    setTotalInfant: (state, action: PayloadAction<number>) => {
      state.totalInfant = action.payload;
    },
    setCurrentAdultIndex: (state, action: PayloadAction<number>) => {
      state.currentAdultIndex = action.payload;
    },
    setCurrentChildIndex: (state, action: PayloadAction<number>) => {
      state.currentChildIndex = action.payload;
    },
    setCurrentInfantIndex: (state, action: PayloadAction<number>) => {
      state.currentInfantIndex = action.payload;
    },

    setPassengersInfo: (
      state,
      action: PayloadAction<IPassengersData["passengersInfo"]>,
    ) => {
      state.passengersInfo = action.payload;
    },
    setPassengerInfo: (
      state,
      action: PayloadAction<{
        index: number;
        passengerInfo: IPassengersData["passengersInfo"][0];
      }>,
    ) => {
      state.passengersInfo[action.payload.index] = action.payload.passengerInfo;
    },
    addPassengerInfo: (
      state,
      action: PayloadAction<IPassengersData["passengersInfo"][0]>,
    ) => {
      state.passengersInfo.push(action.payload);
    },
    // removePassengerInfo: (state, action: PayloadAction<number>) => {
    //   state.passengersInfo.splice(action.payload, 1);
    // },
  },
});

export const {
  setInputtingTravelerType,
  setTotalAdult,
  setTotalChildren,
  setTotalInfant,
  setCurrentAdultIndex,
  setCurrentChildIndex,
  setCurrentInfantIndex,
  setPassengersInfo,
  setPassengerInfo,
  addPassengerInfo,
  // removePassengerInfo,
} = passengersSlice.actions;

export default passengersSlice;
