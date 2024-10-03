export interface ISearchFlights {
  typeTrip: string;
  departureAirport: string;
  destinationAirport: string;
  departureDate: string;
  flightRange: string[];
  passengers: {
    adult: number;
    children: number;
    infant: number;
  };
  couponCode?: string;
  cabinClass: string;
}

export interface ISearchTicket {
  ticketNumber: string;
  fullName: string;
}

export interface ICheckin {
  reservationCode?: string;
  ticketNumber?: string;
  fullName: string;
}
