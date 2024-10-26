import { useState } from "react";
import FlightRecap from "../available-flights/components/FlightRecap";
import ModifySearchFlightsForm from "../available-flights/components/ModifySearchFlightsForm";
import Banner from "./components/Banner";
import TravelerInfoCard from "./components/TravelerInfoCard";

const Traveler: React.FC = () => {
  const [showModifyForm, setShowModifyForm] = useState<boolean>(false);

  return (
    <div className="pb-10">
      <FlightRecap
        showModifyForm={showModifyForm}
        setShowModifyForm={setShowModifyForm}
      />
      <ModifySearchFlightsForm
        show={showModifyForm}
        setShow={setShowModifyForm}
      />
      <Banner />
      <TravelerInfoCard />
    </div>
  );
};

export default Traveler;
