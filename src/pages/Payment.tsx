import { useState } from "react";
import Banner from "../features/booking/payment/components/Banner";
import PaymentDetail from "../features/booking/payment/components/PaymentDetail";
import FlightRecap from "../features/common/FlightRecap";
import { useAppSelector } from "../redux/hooks";
import { RootState } from "../redux/store";
import { getTotalTicketPrice } from "../utils";

const Payment: React.FC = () => {
  const [showModifyForm, setShowModifyForm] = useState<boolean>(false);
  const booking = useAppSelector((state: RootState) => state.booking);
  const flightSearch = useAppSelector((state: RootState) => state.flightSearch);
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
    <div className="pb-10">
      <FlightRecap
        showModifyForm={showModifyForm}
        setShowModifyForm={setShowModifyForm}
        totalBookingPrice={totalBookingPrice}
      />
      <Banner title="Thanh toán" />
      <PaymentDetail totalBookingPrice={totalBookingPrice} />
    </div>
  );
};

export default Payment;
