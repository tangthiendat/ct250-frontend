import { PassengerType, RouteType } from "../common";

export interface IFeePricing {
  feePricingId: number;
  passengerType: PassengerType;
  feeAmount: number;
  isPercentage: boolean;
  isActive: boolean;
  routeType: RouteType;
}

export interface IFeeGroup {
  feeGroupId: number;
  feeGroupName: string;
}

export interface IFee {
  feeId: number;
  feeName: string;
  feePricing: IFeePricing[];
  feeGroup: IFeeGroup;
}

export interface IFees {
  fees: IFee[];
}
