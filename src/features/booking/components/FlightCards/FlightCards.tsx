import { useQuery } from "@tanstack/react-query";
import FlightCard from "./components/FlightCard";
import { flightScheduleService } from "../../../../services";
import useSearchData from "../../hooks/useSearchData";
import { FlightSearchCriteria } from "../../../../interfaces";
import { useParams } from "react-router-dom";
import { FlightCardProvider } from "../../../../context/FlightCardContext";

const FlightCards: React.FC = () => {
  const { flightSearch } = useSearchData();
  const flightIndex: number = Number(
    useParams<{ flightIndex: string }>().flightIndex,
  );
  const criteria: FlightSearchCriteria = {
    departureLocation:
      flightIndex === 0
        ? flightSearch.departureAirport!.airportId
        : flightSearch.arrivalAirport!.airportId,
    arrivalLocation:
      flightIndex === 0
        ? flightSearch.arrivalAirport!.airportId
        : flightSearch.departureAirport!.airportId,
    departureDate:
      flightIndex === 0
        ? flightSearch.departureDate
        : flightSearch.flightRange[1],
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
          <FlightCardProvider>
            <FlightCard key={flight.flightId} flightCardData={flight} />
          </FlightCardProvider>
        </div>
      ))}
    </div>
  );
};

export default FlightCards;
