import { useQuery } from "@tanstack/react-query";
import { ICountry } from "../../../interfaces";
import { countryService } from "../../../services/country-service";

export function useCountries() {
    const { data, error, isLoading } = useQuery({
        queryKey: ["countries"],
        queryFn: countryService.getCountries,
    });

    // Ensure data is correctly structured and transform it to extract only country names
    const countryNames = data?.map((country: ICountry) => country.countryName) || [];

    return { countryNames, error, isLoading };
}

export * from "./useCountries";
