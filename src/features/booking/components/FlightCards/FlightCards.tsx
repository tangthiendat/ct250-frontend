import { useQuery } from "@tanstack/react-query";
import FlightCard from "./components/FlightCard";
import { flightScheduleService } from "../../../../services";
import useSearchData from "../../hooks/useSearchData";
import { FlightSearchCriteria } from "../../../../interfaces";

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

  const flights = flightsData?.payload || [];
  console.log(flights);

  return (
    <div className="mx-auto mt-10 max-w-screen-md transition-all duration-1000 xl:max-w-screen-lg">
      {flights?.map((flight) => (
        <div className="mt-8">
          <FlightCard key={flight.flightId} flightCardData={flight} />
        </div>
      ))}
    </div>
  );
};

export default FlightCards;
