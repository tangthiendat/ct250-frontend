import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CouponType, ICoupon } from "../../interfaces";

const initialState: ICoupon = {
  couponCode: "",
  discountValue: 0,
  couponType: CouponType.PERCENTAGE,
  validFrom: "",
  validTo: "",
};

const couponSlice = createSlice({
  name: "coupon",
  initialState,
  reducers: {
    setCoupon: (state, action: PayloadAction<ICoupon>) => {
      return action.payload;
    },
    clearCoupon: () => {
      return initialState;
    },
  },
});

export const { setCoupon, clearCoupon } = couponSlice.actions;
export default couponSlice;
