import React, { useState } from "react";
import FlightRecap from "../features/common/FlightRecap";
import ModifySearchFlightsForm from "../features/common/ModifySearchFlightsForm";
import Banner from "../features/booking/available-flights/components/Banner";
import CalendarFlights from "../features/booking/available-flights/components/Calendar/CalendarFlights";
import FlightCards from "../features/booking/available-flights/components/FlightCards/FlightCards";
import { useParams } from "react-router-dom";
import { useAppDispatch } from "../redux/hooks";
import { clearBooking } from "../redux/slices/bookingSlice";

const AvailableFlights: React.FC = () => {
  const [showModifyForm, setShowModifyForm] = useState<boolean>(false);
  const flightIndex: number = Number(
    useParams<{ flightIndex: string }>().flightIndex,
  );
  const dispatch = useAppDispatch();
  if (flightIndex === 0) {
    dispatch(clearBooking());
  }

  let title = "";
  if (flightIndex === 0) {
    title = "Vui lòng chọn chuyến bay đi";
  } else if (flightIndex === 1) {
    title = "Vui lòng chọn chuyến bay về";
  }

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
      <Banner title={title} />
      <CalendarFlights />
      <FlightCards />
    </div>
  );
};

export default AvailableFlights;
