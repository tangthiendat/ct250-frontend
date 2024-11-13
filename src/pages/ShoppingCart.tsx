import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import Banner from "../features/booking/available-flights/components/Banner";
import Flights from "../features/booking/shopping-cart/components/flights/Flights";
import Price from "../features/booking/shopping-cart/components/flights/components/price/Price";
import Passsengers from "../features/booking/shopping-cart/components/passengers/Passsengers";
import Services from "../features/booking/shopping-cart/components/services/Services";
import usePassengersData from "../features/booking/traveler/hooks/usePassengersData";
import { IPassenger } from "../interfaces";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { setBooking } from "../redux/slices/bookingSlice";
import { bookingService } from "../services";
import { getTotalTicketPrice } from "../utils";

const ShoppingCart: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const departData = useAppSelector((state) => state.booking.bookingFlights[0]);
  const returnData =
    useAppSelector((state) => state.booking.bookingFlights[1]) || null;
  const { passengers } = usePassengersData();
  const booking = useAppSelector((state) => state.booking);
  const flightSearch = useAppSelector((state) => state.flightSearch);
  const { mutate: createInitBooking } = useMutation({
    mutationFn: bookingService.createBooking,
    onSuccess: (data) => {
      if (data.payload && data.payload.bookingId) {
        dispatch(setBooking(data.payload));
      }
    },
  });

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

  function handlePaymentButtonClick() {
    const bookingPassengers = passengers.passengersInfo.map((passengerInfo) => {
      const passenger: IPassenger = {
        passengerType: passengerInfo.passengerType,
        firstName: passengerInfo.firstName,
        lastName: passengerInfo.lastName,
        dateOfBirth: passengerInfo.dateOfBirth,
        country: passengerInfo.country!,
        email: passengerInfo.email,
        phoneNumber: passengerInfo.phone,
        gender: passengerInfo.passengerGender,
      };
      return {
        passenger,
      };
    });

    // Create booking if there is no bookingId
    if (!booking?.bookingId) {
      createInitBooking({
        ...booking,
        totalPrice: totalBookingPrice,
        bookingFlights: booking.bookingFlights.map((flight) => ({
          ...flight,
          bookingPassengers,
        })),
      });
    }

    navigate("/book/payment");
  }

  return (
    <>
      <Banner title="Hành trình của bạn" />

      <div className="mx-auto my-5 max-w-screen-md px-2 transition-all duration-1000 xl:max-w-screen-lg">
        <Flights
          departData={departData}
          returnData={returnData}
          totalBookingPrice={totalBookingPrice}
        />

        {passengers.passengersInfo[0] && (
          <>
            <Passsengers />
            <Services />
          </>
        )}

        <Price returnData={returnData} />

        <div className="mt-5 flex justify-end">
          {passengers.passengersInfo[0] ? (
            <button
              className="text-heading-3 rounded-md bg-green-700 px-4 py-2 text-white transition-all duration-200 hover:bg-green-900"
              onClick={handlePaymentButtonClick}
            >
              Thanh toán
            </button>
          ) : (
            <button
              className="text-heading-3 rounded-md bg-green-700 px-4 py-2 text-white transition-all duration-200 hover:bg-green-900"
              onClick={() => navigate("/book/traveler/0")}
            >
              Điền thông tin hành khách để tiếp tục
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default ShoppingCart;