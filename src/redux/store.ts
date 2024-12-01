import { configureStore } from "@reduxjs/toolkit";
import bookingSlice from "./slices/bookingSlice";
import flightSearchSlice from "./slices/flightSearchSlice";
import passengersSlice from "./slices/passengersSlice";
import couponSlice from "./slices/couponSlice";

export const store = configureStore({
  reducer: {
    passengers: passengersSlice.reducer,
    flightSearch: flightSearchSlice.reducer,
    booking: bookingSlice.reducer,
    coupon: couponSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
