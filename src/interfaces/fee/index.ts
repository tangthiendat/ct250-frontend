import { PassengerType } from "../common";

export interface IFeePricing {
  feePricingID: number;
  passengerType: PassengerType;
}

export interface IFee {
  feeID: number;
  feeName: string;
  feeAmount: number;
  isPercentage: boolean;
  feePricing: IFeePricing[];
}

export interface IFees {
  fees: IFee[];
}
