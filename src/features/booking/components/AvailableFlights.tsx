import React from "react";
import { useLocation } from "react-router-dom";
import FlightRecap from "./FlightRecap";

const AvailableFlights: React.FC = () => {
  const location = useLocation();
  const searchData = location.state as {
    typeTrip: string;
    departAirport: string;
    destAirport: string;
    departureDate: string;
    returnDate?: string;
    passengers: {
      adult: number;
      children: number;
      infant: number;
    };
    couponCode?: string;
  };

  if (!searchData) {
    return <div>No search data available</div>;
  }

  return (
    <>
      <FlightRecap data={searchData} />

      <div className="relative">
        <img
          src={`/flight-routes/${searchData.destAirport.split(" - ")[1]}.jpg`}
          alt="flight route"
          className="absolute -z-10 h-[400px] w-full object-cover"
        />
        <div className="h-[400px]">kjbb</div>
      </div>

      <div>
        <h1>Booking Layout</h1>
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
    </>
  );
};

export default AvailableFlights;