import useSearchData from "../available-flights/hooks/useSearchData";
import { useParams } from "react-router-dom";

const Banner: React.FC<{ title: string }> = ({ title }) => {
  const { flightSearch: data } = useSearchData();
  const flightIndex: number = Number(
    useParams<{ flightIndex: string }>().flightIndex,
  );
  let departureCityName, arrivalCityName, arrivalCityCode;
  if (flightIndex === 0) {
    departureCityName = data.departureAirport?.cityName || "";
    arrivalCityName = data.arrivalAirport?.cityName || "";
    arrivalCityCode = data.arrivalAirport?.airportCode || "";
  } else if (flightIndex === 1) {
    departureCityName = data.arrivalAirport?.cityName || "";
    arrivalCityName = data.departureAirport?.cityName || "";
    arrivalCityCode = data.departureAirport?.airportCode || "";
  }

  return (
    <div className="relative">
      <img
        src={`/flight-routes/${arrivalCityCode}.jpg`}
        alt={arrivalCityName}
        className="-z-10 h-[400px] w-full object-cover"
      />

      <div className="absolute left-1/2 top-1/3 flex -translate-x-1/2 transform flex-col items-center justify-center text-balance rounded-md bg-white px-12 py-4 text-center">
        <p className="text-heading-2 text-blue-700">{title}</p>

        <p className="text-heading-2 text-green-700">
          {departureCityName} - {arrivalCityName}
        </p>
      </div>
    </div>
  );
};

export default Banner;
