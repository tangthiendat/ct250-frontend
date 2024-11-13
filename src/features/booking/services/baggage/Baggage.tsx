import { useState } from "react";
import FlightRecap from "../../available-flights/components/FlightRecap";
import ModifySearchFlightsForm from "../../available-flights/components/ModifySearchFlightsForm";
import Banner from "./components/Banner";
import Flights from "./components/Flights";

const Baggage: React.FC = () => {
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
      <Flights />
    </div>
  );
};

export default Baggage;
