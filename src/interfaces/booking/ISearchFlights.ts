export interface ISearchFlights {
  typeTrip: string;
  departureAirport: string;
  destinationAirport: string;
  // dates: {
  //   departureDate: string;
  //   returnDate: string;
  // };
  departureDate: string;
  returnDate: string;
  passengers: {
    adult: number;
    children: number;
    infant: number;
  };
  couponCode: string;
  // cabinClass: string;
}
