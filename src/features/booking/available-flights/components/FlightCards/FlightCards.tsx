import { useParams } from "react-router-dom";
import { FlightCardProvider } from "../../../../../context/FlightCardContext";
import {
  FlightSearchCriteria,
  TicketClassName,
} from "../../../../../interfaces";
import { useFlights } from "../../hooks/useFlights";
import useSearchData from "../../hooks/useSearchData";
import FlightCard from "./components/FlightCard";
import Loading from "../../../../../common/Loading";

const FlightCards: React.FC = () => {
  const { flightSearch } = useSearchData();
  const flightIndex: number = Number(
    useParams<{ flightIndex: string }>().flightIndex,
  );

  let departureLocation: number = 0,
    arrivalLocation: number = 0,
    departureDate: string = "";
  if (flightIndex === 0) {
    departureLocation = flightSearch.departureAirport!.airportId;
    arrivalLocation = flightSearch.arrivalAirport!.airportId;
    departureDate = flightSearch.departureDate;
  } else if (flightIndex === 1) {
    departureLocation = flightSearch.arrivalAirport!.airportId;
    arrivalLocation = flightSearch.departureAirport!.airportId;
    departureDate = flightSearch.flightRange[1];
  }
  const criteria: FlightSearchCriteria = {
    departureLocation,
    arrivalLocation,
    departureDate,
    passengerTypeQuantityRequests: Object.entries(flightSearch.passengers)
      .map(([key, value]) => ({
        passengerType: key,
        quantity: value,
      }))
      .filter((passenger) => passenger.quantity > 0),
  };

  const totalPassengers = Object.values(flightSearch.passengers).reduce(
    (totalPassenger, quantity) => totalPassenger + quantity,
    0,
  );
  const { flights: tempFlights, isLoading } = useFlights(criteria);
  const flights = tempFlights.filter((flight) => {
    const availableEconomySeats = flight.seatAvailability.filter(
      (seatAvailability) =>
        seatAvailability.seat.ticketClass === TicketClassName.ECONOMY &&
        seatAvailability.status === "AVAILABLE",
    ).length;
    const availableBusinessSeats = flight.seatAvailability.filter(
      (seatAvailability) =>
        seatAvailability.seat.ticketClass === TicketClassName.BUSINESS &&
        seatAvailability.status === "AVAILABLE",
    ).length;
    return (
      flight.seatAvailability.filter((seat) => seat.status === "AVAILABLE")
        .length > 0 &&
      (availableEconomySeats >= totalPassengers ||
        availableBusinessSeats >= totalPassengers)
    );
  });

  return (
    <div className="mx-auto mt-10 max-w-screen-md transition-all duration-1000 xl:max-w-screen-lg">
      {isLoading ? (
        <Loading message="Đang tìm chuyến bay phù hợp..." />
      ) : (
        <>
          {flights.length === 0 && (
            <p className="text-heading-2 text-center text-gray-500">
              😥Chuyến bay vào ngày bạn chọn đã hết chỗ. Vui lòng chọn ngày
              khác!!!😊
            </p>
          )}
          {flights?.map((flight) => (
            <div className="mt-8">
              <FlightCardProvider>
                <FlightCard key={flight.flightId} flightCardData={flight} />
              </FlightCardProvider>
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default FlightCards;
