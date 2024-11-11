import React, { useEffect } from "react";
import Banner from "../common/home/Banner";
import Destinations from "../common/home/Destinations";
import FlightRoutes from "../common/home/FlightRoutes";
import Services from "../common/home/Services";
import SearchPanel from "../features/searching/SearchPanel";
import { useAppDispatch } from "../redux/hooks";
import { clearBookingId } from "../redux/slices/bookingSlice";

const Home: React.FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(clearBookingId());
    localStorage.removeItem("booking");
    localStorage.removeItem("flightSearch");
  }, [dispatch]);

  return (
    <div className="relative flex min-h-full flex-col justify-center">
      <Banner />
      <SearchPanel />
      <FlightRoutes />
      <Destinations />
      <Services />
    </div>
  );
};

export default Home;
