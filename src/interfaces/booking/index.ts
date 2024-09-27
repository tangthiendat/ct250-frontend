export interface IFlightCard {
  flightCardData: {
    id: number;
    departureTime: string;
    arrivalTime: string;
    departureAirportCode: string;
    destinationAirportCode: string;
    flightDuration: string;
    departureTerminal: string;
    destinationTerminal: string;
  };
}
