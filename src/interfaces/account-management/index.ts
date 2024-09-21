export interface ITransaction {
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
