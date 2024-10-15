import { useQuery } from "@tanstack/react-query";
import FlightCard from "./components/FlightCard";
import useSearchData from "../../hooks/useSearchData";
import { FlightSearchCriteria } from "../../../../../interfaces";
import { flightScheduleService } from "../../../../../services";

const FlightCards: React.FC = () => {
  const { flightSearch } = useSearchData();
  const criteria: FlightSearchCriteria = {
    departureLocation: flightSearch.departureAirport!.airportId,
    arrivalLocation: flightSearch.arrivalAirport!.airportId,
    departureDate: flightSearch.departureDate,
  };
  const { data: flightsData } = useQuery({
    queryKey: ["flights", criteria],
    queryFn: () => flightScheduleService.search(criteria),
  });

  // const flights = flightsData?.payload || [];
  const tempFlights = flightsData?.payload || [];
  const flights = tempFlights.filter(
    (flight) =>
      flight.seatAvailability.filter((seat) => seat.status === "AVAILABLE")
        .length > 0,
  );

  // console.log(flights);

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
          <FlightCard key={flight.flightId} flightCardData={flight} />
        </div>
      ))}
    </div>
  );
};

export default FlightCards;
