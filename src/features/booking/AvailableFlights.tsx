import React, { useState } from "react";
import BodyLayout from "../../layouts/BodyLayout";
import Banner from "./components/Banner";
import CalendarFlights from "./components/CalendarFlights";
import FlightRecap from "./components/FlightRecap";
import ModifySearchFlightsForm from "./components/ModifySearchFlightsForm";
import useSearchData from "./hooks/useSearchData";

const AvailableFlights: React.FC = () => {
  const searchData = useSearchData();
  const [showModifyForm, setShowModifyForm] = useState<boolean>(false);

  return (
    <>
      <FlightRecap
        data={searchData}
        showModifyForm={showModifyForm}
        setShowModifyForm={setShowModifyForm}
      />
      <ModifySearchFlightsForm show={showModifyForm} />
      <Banner data={searchData} />

      <CalendarFlights data={searchData} />

      <BodyLayout>
        <div>
          {/* <h1>Booking Layout</h1> */}
          <p>Type of Trip: {searchData.typeTrip}</p>
          <p>Departure Airport: {searchData.departAirport}</p>
          <p>Destination Airport: {searchData.destAirport}</p>
          <p>Departure Date: {searchData.departureDate}</p>
          {searchData.returnDate && <p>Return Date: {searchData.returnDate}</p>}
          <p>
            Passengers:{" "}
            {`Adults: ${searchData.passengers.adult}, Children: ${searchData.passengers.children}, Infants: ${searchData.passengers.infant}`}
          </p>
          {searchData.couponCode && <p>Coupon Code: {searchData.couponCode}</p>}
        </div>
        <div>
          {/* <h1>Booking Layout</h1> */}
          <p>Type of Trip: {searchData.typeTrip}</p>
          <p>Departure Airport: {searchData.departAirport}</p>
          <p>Destination Airport: {searchData.destAirport}</p>
          <p>Departure Date: {searchData.departureDate}</p>
          {searchData.returnDate && <p>Return Date: {searchData.returnDate}</p>}
          <p>
            Passengers:{" "}
            {`Adults: ${searchData.passengers.adult}, Children: ${searchData.passengers.children}, Infants: ${searchData.passengers.infant}`}
          </p>
          {searchData.couponCode && <p>Coupon Code: {searchData.couponCode}</p>}
        </div>
        <div>
          {/* <h1>Booking Layout</h1> */}
          <p>Type of Trip: {searchData.typeTrip}</p>
          <p>Departure Airport: {searchData.departAirport}</p>
          <p>Destination Airport: {searchData.destAirport}</p>
          <p>Departure Date: {searchData.departureDate}</p>
          {searchData.returnDate && <p>Return Date: {searchData.returnDate}</p>}
          <p>
            Passengers:{" "}
            {`Adults: ${searchData.passengers.adult}, Children: ${searchData.passengers.children}, Infants: ${searchData.passengers.infant}`}
          </p>
          {searchData.couponCode && <p>Coupon Code: {searchData.couponCode}</p>}
        </div>
        <div>
          {/* <h1>Booking Layout</h1> */}
          <p>Type of Trip: {searchData.typeTrip}</p>
          <p>Departure Airport: {searchData.departAirport}</p>
          <p>Destination Airport: {searchData.destAirport}</p>
          <p>Departure Date: {searchData.departureDate}</p>
          {searchData.returnDate && <p>Return Date: {searchData.returnDate}</p>}
          <p>
            Passengers:{" "}
            {`Adults: ${searchData.passengers.adult}, Children: ${searchData.passengers.children}, Infants: ${searchData.passengers.infant}`}
          </p>
          {searchData.couponCode && <p>Coupon Code: {searchData.couponCode}</p>}
        </div>
        <div>
          {/* <h1>Booking Layout</h1> */}
          <p>Type of Trip: {searchData.typeTrip}</p>
          <p>Departure Airport: {searchData.departAirport}</p>
          <p>Destination Airport: {searchData.destAirport}</p>
          <p>Departure Date: {searchData.departureDate}</p>
          {searchData.returnDate && <p>Return Date: {searchData.returnDate}</p>}
          <p>
            Passengers:{" "}
            {`Adults: ${searchData.passengers.adult}, Children: ${searchData.passengers.children}, Infants: ${searchData.passengers.infant}`}
          </p>
          {searchData.couponCode && <p>Coupon Code: {searchData.couponCode}</p>}
        </div>
        <div>
          {/* <h1>Booking Layout</h1> */}
          <p>Type of Trip: {searchData.typeTrip}</p>
          <p>Departure Airport: {searchData.departAirport}</p>
          <p>Destination Airport: {searchData.destAirport}</p>
          <p>Departure Date: {searchData.departureDate}</p>
          {searchData.returnDate && <p>Return Date: {searchData.returnDate}</p>}
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
