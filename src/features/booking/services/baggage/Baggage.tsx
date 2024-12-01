import { useState } from "react";
import FlightRecap from "../../../common/FlightRecap";
import ModifySearchFlightsForm from "../../../common/ModifySearchFlightsForm";
import Banner from "../common/Banner";
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
      <Banner type="baggage" />
      <Flights />
    </div>
  );
};

export default Baggage;
