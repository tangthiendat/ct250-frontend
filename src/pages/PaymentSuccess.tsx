import { useQuery } from "@tanstack/react-query";
import { MdOutlineMail } from "react-icons/md";
import { useSearchParams } from "react-router-dom";
import Loading from "../common/Loading";
import Banner from "../features/booking/payment-success/components/Banner";
import Flights from "../features/booking/shopping-cart/components/flights/Flights";
import {
  IBooking,
  ICoupon,
  IPassengersData,
  ISearchFlights,
} from "../interfaces";
import { transactionService } from "../services/transaction/transaction-service";
import { getTotalBaggagePrice, getTotalTicketPrice } from "../utils";

const PaymentSuccess: React.FC = () => {
  const [searchParams] = useSearchParams();
  const booking: IBooking = JSON.parse(localStorage.getItem("booking")!);
  const flightSearch: ISearchFlights = JSON.parse(
    localStorage.getItem("flightSearch")!,
  );
  const passengers: IPassengersData = JSON.parse(
    localStorage.getItem("passengers")!,
  );
  const coupon: ICoupon = JSON.parse(localStorage.getItem("coupon")!);
  const totalFlightsPrice = booking.bookingFlights
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

  const totalBaggagePrice = getTotalBaggagePrice(
    booking.bookingFlights,
    passengers.passengersInfo,
  );

  const totalBookingPrice = totalFlightsPrice + totalBaggagePrice;

  const transactionId = Number(searchParams.get("transactionId"));

  const { data: transaction, isLoading } = useQuery({
    queryKey: ["transactions", transactionId],
    queryFn: () => transactionService.getById(transactionId),
    enabled: !!transactionId,
    select: (data) => data.payload,
  });

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="pb-10">
      <Banner />

      <div className="mx-auto mt-5 flex max-w-screen-md flex-col gap-4 px-2 transition-all duration-1000 md:gap-8 xl:max-w-screen-lg">
        <div className="overflow-hidden rounded-lg bg-white px-20 py-2 text-center shadow-[0px_0px_5px_1px_rgba(0,0,0,0.24)]">
          <div>
            <p>Mã đặt chỗ của quý khách là:</p>
            <p className="text-heading-3 text-blue-900">
              {transaction?.booking.bookingCode}
            </p>
          </div>

          <div className="flex items-center justify-center">
            <button className="flex items-center gap-2 rounded-md bg-slate-200 px-4 py-2 text-green-800 transition-all duration-200 hover:bg-green-800 hover:text-white">
              <MdOutlineMail />
              <p>Gửi email đặt chỗ của bạn</p>
            </button>
          </div>
        </div>

        <div>
          <Flights
            departData={booking.bookingFlights[0]}
            returnData={booking.bookingFlights[1]}
            totalFlightsPrice={totalFlightsPrice}
          />
          <p className="text-heading-2 mt-4 text-right text-blue-900">
            Tổng giá: {totalBookingPrice.toLocaleString()} VND
          </p>
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccess;
