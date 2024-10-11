import { useQuery } from "@tanstack/react-query";
import { FlightSearchCriteria } from "../../../interfaces";
import { flightScheduleService } from "../../../services";

export function useFlights(criteria: FlightSearchCriteria) {
  const { data, isLoading } = useQuery({
    queryKey: ["flights", criteria],
    queryFn: () => flightScheduleService.search(criteria),
  });

  return { flights: data?.payload || [], isLoading };
}
