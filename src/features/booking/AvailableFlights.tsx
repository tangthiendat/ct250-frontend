import React, { useState } from "react";
import Banner from "./components/Banner";
import CalendarFlights from "./components/Calendar/CalendarFlights";
import FlightCards from "./components/FlightCards/FlightCards";
import FlightRecap from "./components/FlightRecap";
import ModifySearchFlightsForm from "./components/ModifySearchFlightsForm";
import { useParams } from "react-router-dom";
import { useAppDispatch } from "../../redux/hooks";
import { clearBooking } from "../../redux/slices/bookingSlice";

const AvailableFlights: React.FC = () => {
  const [showModifyForm, setShowModifyForm] = useState<boolean>(false);
  const flightIndex: number = Number(
    useParams<{ flightIndex: string }>().flightIndex,
  );
  const dispatch = useAppDispatch();
  if (flightIndex === 0) {
    dispatch(clearBooking());
  }

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
