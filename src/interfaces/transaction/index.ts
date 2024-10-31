import { IBooking } from "../booking";
import { TransactionStatus, TransactionType } from "../common";

export interface IPaymentMethod {
  paymentMethodId: number;
  paymentMethodName?: string;
  paymentUrl?: string;
}

export interface ITransaction {
  transactionId?: number;
  booking: IBooking;
  paymentMethod: IPaymentMethod;
  transactionType: TransactionType;
  status: TransactionStatus;
  amount: number;
}
