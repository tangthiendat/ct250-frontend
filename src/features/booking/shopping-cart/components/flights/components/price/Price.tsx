import { useState } from "react";
import { useAppSelector } from "../../../../../../../redux/hooks";
import { getTotalTicketPrice } from "../../../../../../../utils";
import PricingDetail from "./PricingDetail";
import { IBookingFlight } from "../../../../../../../interfaces";

interface PriceProps {
  returnData: IBookingFlight;
}

const Price: React.FC<PriceProps> = ({ returnData }) => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const booking = useAppSelector((state) => state.booking);
  const flightSearch = useAppSelector((state) => state.flightSearch);
  const coupon = useAppSelector((state) => state.coupon);
  const totalBookingPrice = booking.bookingFlights
    .map((bookingFlight) =>
      getTotalTicketPrice(
        bookingFlight.flight,
        flightSearch.passengers,
        bookingFlight.ticketClass.ticketClassName,
        coupon,
      ),
    )
    .reduce(
      (bookingTotalPrice, flightTotalPrice) =>
        bookingTotalPrice + flightTotalPrice,
      0,
    );

  return (
    <>
      <div className="flex flex-col items-end text-blue-700">
        <p className="text-heading-3 mt-4 text-blue-900">
          Tổng giá: {totalBookingPrice.toLocaleString()} VND
        </p>

        <p className="title-4">
          Giá {returnData ? "khứ hồi" : "một chiều"} cho tất cả các hành khách
          (đã bao gồm thuế, phí và chiết khấu).&nbsp;
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
