import { useQuery } from "@tanstack/react-query";
import { countryService } from "../../../services/country-service";

export function useCountries() {
  const { data, error, isLoading } = useQuery({
    queryKey: ["countries"],
    queryFn: countryService.getAllCountries,
  });

  return { countries: data?.payload, error, isLoading };
}

export * from "./useCountries";
