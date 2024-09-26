import { configureStore } from "@reduxjs/toolkit";
import flightSearchReducer from "./slices/flightSearchSlice";

export const store = configureStore({
  reducer: {
    flightSearch: flightSearchReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
