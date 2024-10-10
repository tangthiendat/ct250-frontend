import { configureStore } from "@reduxjs/toolkit";
import flightSearchSlice from "./slices/flightSearchSlice";
import bookingSlice from "./slices/bookingSlice";

export const store = configureStore({
  reducer: {
    flightSearch: flightSearchSlice.reducer,
    booking: bookingSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
