import { useLocation } from "react-router-dom";

const useSearchData = () => {
  const location = useLocation();
  const searchData = location.state as {
    typeTrip: string;
    departAirport: string;
    destAirport: string;
    departureDate: string;
    returnDate?: string;
    passengers: {
      adult: number;
      children: number;
      infant: number;
    };
    couponCode?: string;
  };

  return searchData;
};

export default useSearchData;
