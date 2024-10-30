import { useState } from "react";
import { useAppSelector } from "../../../redux/hooks";
import Banner from "../available-flights/components/Banner";
import Flight from "./components/flight/Flight";
import Price from "./components/flight/components/price/Price";
import { useNavigate } from "react-router-dom";
import { getTotalTicketPrice } from "../../../utils";
import Passsengers from "./components/passengers/Passsengers";
import usePassengersData from "../traveler/hooks/usePassengersData";
import Services from "./components/services/Services";

const ShoppingCart: React.FC = () => {
  const [showExpandDepart, setShowExpandDepart] = useState<boolean>(false);
  const [showExpandReturn, setShowExpandReturn] = useState<boolean>(false);
  const navigate = useNavigate();
  const departData = useAppSelector((state) => state.booking.bookingFlights[0]);
  const returnData =
    useAppSelector((state) => state.booking.bookingFlights[1]) || null;
  const { passengers } = usePassengersData();
  const booking = useAppSelector((state) => state.booking);
  const flightSearch = useAppSelector((state) => state.flightSearch);
  const totalBookingPrice = booking.bookingFlights
    .map((bookingFlight) =>
      getTotalTicketPrice(
        bookingFlight.flight,
        flightSearch.passengers,
        bookingFlight.ticketClass.ticketClassName,
      ),
    )
    .reduce(
      (bookingTotalPrice, flightTotalPrice) =>
        bookingTotalPrice + flightTotalPrice,
      0,
    );

  return (
    <>
      <Banner title="Hành trình của bạn" />

      <div className="mx-auto my-5 max-w-screen-md px-2 transition-all duration-1000 xl:max-w-screen-lg">
        <p className="text-heading-2 text-center text-blue-900">
          Chuyến bay của bạn
        </p>

        <div className="space-y-4">
          <Flight
            data={departData}
            showExpand={showExpandDepart}
            setShowExpand={setShowExpandDepart}
          />

          {returnData && (
            <Flight
              data={returnData}
              showExpand={showExpandReturn}
              setShowExpand={setShowExpandReturn}
            />
          )}

          <div className="mt-3 flex flex-col items-end">
            <p className="text-heading-3 text-sm text-blue-800">
              Tổng giá cho các chuyến bay:{" "}
              <span className="text-heading-3 text-blue-800">
                {totalBookingPrice.toLocaleString()} VND
              </span>
            </p>
          </div>
        </div>

        {passengers.passengersInfo[0] && (
          <>
            <Passsengers />
            <Services />
          </>
        )}

        <Price returnData={returnData} />

        <div className="mt-5 flex justify-end">
          <button
            className="text-heading-3 rounded-md bg-green-700 px-4 py-2 text-white transition-all duration-200 hover:bg-green-900"
            onClick={() => navigate("/book/traveler/0")}
          >
            Điền thông tin hành khách để tiếp tục
          </button>
        </div>
      </div>
    </>
  );
};

export default ShoppingCart;
