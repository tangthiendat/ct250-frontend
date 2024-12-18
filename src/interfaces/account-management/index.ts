export interface ITransactionHistory {
  key: React.Key;
  transactionId: string;
  transactionDate: string;
  flightType: string;
  originAirport: string;
  departureDate: string;
  destinationAirport: string;
  returnDate: string;
  numberOfTickets: number;
  additionalServices: string[];
  totalPrice: number;
}

export interface IChangePassword {
  currentPassword: string;
  newPassword: string;
}
