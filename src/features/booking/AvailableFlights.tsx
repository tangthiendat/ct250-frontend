import React, { useState } from "react";
import BodyLayout from "../../layouts/BodyLayout";
import FlightRecap from "./components/FlightRecap";
import ModifySearchFlightsForm from "./components/ModifySearchFlightsForm";
import useSearchData from "./hooks/useSearchData";
import Banner from "./components/Banner";
import CalendarFlights from "./components/CalendarFlights";
import FlightCards from "./components/FlightCards/FlightCards";

const AvailableFlights: React.FC = () => {
  const { flightSearch: searchData } = useSearchData();
  const [showModifyForm, setShowModifyForm] = useState<boolean>(false);

  return (
    <>
      <FlightRecap
        showModifyForm={showModifyForm}
        setShowModifyForm={setShowModifyForm}
      />
      <ModifySearchFlightsForm show={showModifyForm} />
      <Banner />
      {/* logic kiểm tra chuyến bay có sẵn hay không */}
      <CalendarFlights /> {/* nếu có */}
      <FlightCards /> {/* nếu có */}
      <BodyLayout>
        <div>
          <p>Type of Trip: {searchData.typeTrip}</p>
          <p>Departure Airport: {searchData.departureAirport}</p>
          <p>Destination Airport: {searchData.destinationAirport}</p>
          <p>Departure Date: {searchData.departureDate}</p>
          {searchData.flightRange[0] && (
            <p>Return Date: {searchData.flightRange[1]}</p>
          )}
          <p>
            Passengers:{" "}
            {`Adults: ${searchData.passengers.adult}, Children: ${searchData.passengers.children}, Infants: ${searchData.passengers.infant}`}
          </p>
          {searchData.couponCode && <p>Coupon Code: {searchData.couponCode}</p>}
        </div>
      </BodyLayout>
    </>
  );
};

export default AvailableFlights;
