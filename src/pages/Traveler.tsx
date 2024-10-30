import { useState } from "react";
import FlightRecap from "../features/common/FlightRecap";
import ModifySearchFlightsForm from "../features/common/ModifySearchFlightsForm";
import Banner from "../features/booking/traveler/components/Banner";
import TravelerInfoCard from "../features/booking/traveler/components/TravelerInfoCard";

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
