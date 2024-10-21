import { useState } from "react";
import { useAppSelector } from "../../../../../../../redux/hooks";
import { getTotalTicketPrice } from "../../../../../../../utils";
import PricingDetail from "./PricingDetail";

const Price: React.FC = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
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
      <div className="mt-3 flex flex-col items-end text-blue-700">
        <p className="title-4 text-blue-800">
          Tổng giá cho các chuyến bay: {totalBookingPrice.toLocaleString()} VND
        </p>

        <p className="text-heading-3 mt-4 text-blue-900">
          Tổng giá: {totalBookingPrice.toLocaleString()} VND
        </p>

        <p className="title-4">
          Giá khứ hồi cho tất cả các hành khách (đã bao gồm thuế, phí và chiết
          khấu).&nbsp;
          <span
            className="cursor-pointer text-blue-900 underline"
            onClick={() => setShowModal(true)}
          >
            Xem chi tiết giá.
          </span>
        </p>

        <PricingDetail
          showModal={showModal}
          setShowModal={setShowModal}
          totalBookingPrice={totalBookingPrice}
        />
      </div>
    </>
  );
};

export default Price;
