import React from "react";
import Banner from "../common/home/Banner";
import Destinations from "../common/home/Destinations";
import Services from "../common/home/Services";
import SearchPanel from "../features/searching/SearchPanel";

const Home: React.FC = () => {
  return (
    <div className="relative top-6 flex min-h-full flex-col justify-center">
      <Banner />
      <SearchPanel />
      <Destinations />
      <Services />
    </div>
  );
};

export default Home;
