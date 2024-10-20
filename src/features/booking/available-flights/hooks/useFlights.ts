import { useQuery } from "@tanstack/react-query";
import { FlightSearchCriteria } from "../../../../interfaces";
import { flightScheduleService } from "../../../../services";
import { getFlightSearchFormData } from "../../../../utils";

export function useFlights(criteria: FlightSearchCriteria) {
  const criteriaFormData = getFlightSearchFormData(criteria);
  const { data, isLoading } = useQuery({
    queryKey: ["flights", criteria],
    queryFn: () => flightScheduleService.search(criteriaFormData),
  });

  return { flights: data?.payload || [], isLoading };
}
