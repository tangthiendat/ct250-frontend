import { useQuery } from "@tanstack/react-query";
import { countryService } from "../../../services/country-service";

export function useCountries() {
  const { data, error, isLoading } = useQuery({
    queryKey: ["countries"],
    queryFn: countryService.getCountries,
  });

  // // Ensure data is correctly structured and transform it to extract only country names
  // const countryNames = data?.map((country: ICountry) => country.countryName) || [];

  return { countries: data?.payload, error, isLoading };
}

export * from "./useCountries";
