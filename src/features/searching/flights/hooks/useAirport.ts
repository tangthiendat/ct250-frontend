import { useQuery } from "@tanstack/react-query";
import { airportService } from "../../../../services/airport-service";

export const useAirport = (
  departureAirport: string,
  destinationAirport: string,
) => {
  const { data: airportOptionsData } = useQuery({
    queryKey: ["airports"],
    queryFn: airportService.getAll,
  });

  const airportOptions =
    airportOptionsData?.payload?.map((airport) => ({
      countryID: airport.country.countryId,
      label: airport.country.countryName,
      options: [
        {
          airportID: airport.airportId,
          label: `${airport.cityName} - ${airport.airportCode}`,
          // label: <AirportOption airport={airport} />,
          value: `${airport.cityName} - ${airport.airportCode}`,
        },
      ],
    })) || [];

  const airportsByCountry = airportOptions.reduce(
    (acc, group) => {
      const existingGroup = acc.find(
        (existing) => existing.countryID === group.countryID,
      );

      if (existingGroup) {
        existingGroup.options.push(...group.options);
      } else {
        acc.push(group);
      }

      return acc;
    },
    [] as typeof airportOptions,
  );

  const filteredDepartureOptions = airportsByCountry.map((group) => ({
    ...group,
    options: group.options.filter(
      (option) => option.value !== destinationAirport,
    ),
  }));

  const filteredDestinationOptions = airportsByCountry.map((group) => ({
    ...group,
    options: group.options.filter(
      (option) => option.value !== departureAirport,
    ),
  }));

  return {
    filteredDepartureOptions,
    filteredDestinationOptions,
  };
};

export default useAirport;
