import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PassengerType } from "../../interfaces";

interface IPassenger {
  inputtingTravelerType: PassengerType;
  totalAdult: number;
  totalChildren: number;
  totalInfant: number;
  currentAdultIndex: number;
  currentChildIndex: number;
  currentInfantIndex: number;
}

const initialState: IPassenger = {
  inputtingTravelerType: PassengerType.ADULT,
  totalAdult: 1,
  totalChildren: 0,
  totalInfant: 0,
  currentAdultIndex: 0,
  currentChildIndex: 0,
  currentInfantIndex: 0,
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
} = passengersSlice.actions;

export default passengersSlice;
