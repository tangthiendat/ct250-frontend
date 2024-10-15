// <<<<<<< HEAD:src/features/booking/available-flights/components/FlightCards/FlightCards.tsx
// import { useQuery } from "@tanstack/react-query";
// import FlightCard from "./components/FlightCard";
// import useSearchData from "../../hooks/useSearchData";
// import { FlightSearchCriteria } from "../../../../../interfaces";
// import { flightScheduleService } from "../../../../../services";
// =======
import { useParams } from "react-router-dom";
import { FlightCardProvider } from "../../../../../context/FlightCardContext";
import { FlightSearchCriteria } from "../../../../../interfaces";
import { useFlights } from "../../hooks/useFlights";
import useSearchData from "../../hooks/useSearchData";
import FlightCard from "./components/FlightCard";
// >>>>>>> 1176c1239bb3e06be167d284acdc2860f24f6c9f:src/features/booking/components/FlightCards/FlightCards.tsx

const FlightCards: React.FC = () => {
  const { flightSearch } = useSearchData();
  const flightIndex: number = Number(
    useParams<{ flightIndex: string }>().flightIndex,
  );

  // <<<<<<< HEAD:src/features/booking/available-flights/components/FlightCards/FlightCards.tsx

  // console.log(flights);
  // =======
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
  };
  const { flights: tempFlights } = useFlights(criteria);
  // const flights = flightsData?.payload || [];
  // const tempFlights = flightsData?.payload || [];
  const flights = tempFlights.filter(
    (flight) =>
      flight.seatAvailability.filter((seat) => seat.status === "AVAILABLE")
        .length > 0,
  );
  // >>>>>>> 1176c1239bb3e06be167d284acdc2860f24f6c9f:src/features/booking/components/FlightCards/FlightCards.tsx

  return (
    <div className="mx-auto mt-10 max-w-screen-md transition-all duration-1000 xl:max-w-screen-lg">
      {flights.length === 0 && (
        <div className="text-heading-2 text-gray-500">
          😥Chuyến bay vào ngày bạn chọn đã hết chỗ. Vui lòng chọn ngày
          khác!!!😊
        </div>
      )}
      {flights?.map((flight) => (
        <div className="mt-8">
          <FlightCardProvider>
            <FlightCard key={flight.flightId} flightCardData={flight} />
          </FlightCardProvider>
        </div>
      ))}
    </div>
  );
};

export default FlightCards;
