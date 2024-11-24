import { MdOutlineMail, MdWatchLater } from "react-icons/md";
import { useAppSelector } from "../../../../redux/hooks";
import { RootState } from "../../../../redux/store";
import { getTotalTicketPrice } from "../../../../utils";
import Flights from "../../shopping-cart/components/flights/Flights";
import Banner from "./Banner";
import { useNavigate } from "react-router-dom";

const BookingConfirmation: React.FC = () => {
  const booking = useAppSelector((state: RootState) => state.booking);
  const flightSearch = useAppSelector((state: RootState) => state.flightSearch);
  const totalFlightsPrice = booking.bookingFlights
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
  const timeToPay = new Date(
    new Date(booking.paymentDeadline!.toString()),
  ).toLocaleDateString("vi-VN", {
    weekday: "long",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });
  const navigate = useNavigate();

  return (
    <div className="pb-10">
      <Banner title="Quản lý đặt chỗ" />

      <div className="mx-auto mt-5 flex max-w-screen-md flex-col gap-4 px-2 transition-all duration-1000 md:gap-8 xl:max-w-screen-lg">
        <div className="overflow-hidden rounded-lg bg-white px-20 py-2 text-center shadow-[0px_0px_5px_1px_rgba(0,0,0,0.24)]">
          <div>
            <p>Mã đặt chỗ của quý khách là:</p>
            <p className="text-heading-3 text-blue-900">
              {booking.bookingCode}
            </p>
          </div>

          <div className="my-2 flex items-center justify-center space-x-2 bg-green-100/50 py-4">
            <MdWatchLater className="text-4xl text-green-700" />

            <div>
              <p>
                Để giữ đặt chỗ của Quý khách, vui lòng hoàn thành thanh toán
                trước{" "}
                <p className="text-heading-3 text-green-800">{timeToPay}.</p>
              </p>

              <p className="text-red-500">
                Nếu không xác nhận và thanh toán, đặt chỗ của Quý khách sẽ bị
                huỷ sau thời gian này!!!
              </p>
            </div>
          </div>

          <div className="my-2 flex items-center justify-center">
            <button
              className="rounded-md bg-green-800 px-4 py-2 text-white transition-all duration-200 hover:bg-green-900"
              onClick={() => navigate("/book/payment")}
            >
              Xác nhận và thanh toán
            </button>
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
        </div>
      </div>
    </div>
  );
};

export default BookingConfirmation;
