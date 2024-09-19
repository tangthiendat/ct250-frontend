import React from "react";
import Banner from "../common/home/Banner";
import Destinations from "../common/home/Destinations";
import FlightRoutes from "../common/home/FlightRoutes";
import Services from "../common/home/Services";
import SearchPanel from "../features/searching/SearchPanel";

const Home: React.FC = () => {
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
