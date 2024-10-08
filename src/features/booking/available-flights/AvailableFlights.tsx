import React, { useState } from "react";
import FlightRecap from "./components/FlightRecap";
import ModifySearchFlightsForm from "./components/ModifySearchFlightsForm";
import Banner from "./components/Banner";
import CalendarFlights from "./components/Calendar/CalendarFlights";
import FlightCards from "./components/FlightCards/FlightCards";

const AvailableFlights: React.FC = () => {
  const [showModifyForm, setShowModifyForm] = useState<boolean>(false);

  return (
    <div className="pb-10">
      <FlightRecap
        showModifyForm={showModifyForm}
        setShowModifyForm={setShowModifyForm}
      />
      <ModifySearchFlightsForm show={showModifyForm} />
      <Banner />
      {/* logic kiểm tra chuyến bay có sẵn hay không */}
      <CalendarFlights /> {/* nếu có */}
      <FlightCards /> {/* nếu có */}
    </div>
  );
};

export default AvailableFlights;
