import { TravelerProvider } from "../../../../../../../context/TravelerContext";
import { PassengerType } from "../../../../../../../interfaces";
import { useAppSelector } from "../../../../../../../redux/hooks";
import {
  getPassengerTotalFee,
  getTotalTicketPrice,
} from "../../../../../../../utils";
import Traveler from "./Traveler";

const TravelersPrice: React.FC = () => {
  const { flightSearch, booking } = useAppSelector((state) => state);

  const departureBookingFlight = booking.bookingFlights[0];
  const returnBookingFlight = booking.bookingFlights[1];

  const totalDepartPrice = getTotalTicketPrice(
    departureBookingFlight.flight,
    flightSearch.passengers,
    departureBookingFlight.ticketClass.ticketClassName,
  ).toLocaleString();
  const totalReturnPrice =
    returnBookingFlight &&
    getTotalTicketPrice(
      returnBookingFlight.flight,
      flightSearch.passengers,
      returnBookingFlight.ticketClass.ticketClassName,
    ).toLocaleString();

  return (
    <>
      {departureBookingFlight && (
        <div className="pb-4">
          <div className="text-heading-3 flex items-center justify-between text-blue-800">
            <p>Chuyến đi</p>
            <p>{totalDepartPrice} VND</p>
          </div>

          <div>
            {Object.entries(flightSearch.passengers).map(
              ([passengerType, quantity]) => {
                const passengerTotalFee =
                  getPassengerTotalFee(
                    departureBookingFlight.flight,
                    passengerType as PassengerType,
                    departureBookingFlight.ticketClass.ticketClassName,
                  ) * quantity;
                return quantity > 0 ? (
                  <TravelerProvider>
                    <Traveler
                      key={passengerType}
                      passengerType={passengerType}
                      numberOfTraveler={quantity}
                      pricing={passengerTotalFee}
                      bookingFlight={departureBookingFlight}
                    />
                  </TravelerProvider>
                ) : null;
              },
            )}
          </div>
        </div>
      )}

      {returnBookingFlight && (
        <>
          <div className="text-heading-3 flex items-center justify-between text-blue-800">
            <p>Chuyến về</p>
            <p>{totalReturnPrice} VND</p>
          </div>

          <div>
            {Object.entries(flightSearch.passengers).map(
              ([passengerType, quantity]) => {
                const passengerTotalFee =
                  getPassengerTotalFee(
                    returnBookingFlight.flight,
                    passengerType as PassengerType,
                    returnBookingFlight.ticketClass.ticketClassName,
                  ) * quantity;
                return quantity > 0 ? (
                  <TravelerProvider>
                    <Traveler
                      key={passengerType}
                      passengerType={passengerType}
                      numberOfTraveler={quantity}
                      pricing={passengerTotalFee}
                      bookingFlight={returnBookingFlight}
                    />
                  </TravelerProvider>
                ) : null;
              },
            )}
          </div>
        </>
      )}
    </>
  );
};

export default TravelersPrice;