import { useQuery } from "@tanstack/react-query";
import FlightCard from "./components/FlightCard";
import { flightScheduleService } from "../../../../services";
import useSearchData from "../../hooks/useSearchData";
import { FlightSearchCriteria } from "../../../../interfaces";

// const flightCardsData = [
//   {
//     id: 1,
//     departureTime: "10:00",
//     arrivalTime: "12:00",
//     departureAirportCode: "HAN",
//     destinationAirportCode: "SGN",
//     flightDuration: "2h",
//     departureTerminal: "Nhà ga 1",
//     destinationTerminal: "Nhà ga 1",
//   },
//   {
//     id: 2,
//     departureTime: "12:15",
//     arrivalTime: "14:15",
//     departureAirportCode: "HAN",
//     destinationAirportCode: "SGN",
//     flightDuration: "2h",
//     departureTerminal: "Nhà ga 1",
//     destinationTerminal: "Nhà ga 1",
//   },
//   {
//     id: 3,
//     departureTime: "13:10",
//     arrivalTime: "15:10",
//     departureAirportCode: "HAN",
//     destinationAirportCode: "SGN",
//     flightDuration: "2h",
//     departureTerminal: "Nhà ga 1",
//     destinationTerminal: "Nhà ga 1",
//   },
// ];

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
