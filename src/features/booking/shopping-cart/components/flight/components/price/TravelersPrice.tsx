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

  return (
    <>
      {departureBookingFlight && (
        <>
          <div className="flex items-center justify-between text-lg font-semibold">
            <div>CHUYẾN ĐI</div>
            <div>
              {getTotalTicketPrice(
                departureBookingFlight.flight,
                flightSearch.passengers,
                departureBookingFlight.ticketClass.ticketClassName,
              ).toLocaleString()}{" "}
              VND
            </div>
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
        </>
      )}

      {returnBookingFlight && (
        <>
          <div className="flex items-center justify-between text-lg font-semibold">
            <div>CHUYẾN VỀ</div>
            <div>
              {getTotalTicketPrice(
                returnBookingFlight.flight,
                flightSearch.passengers,
                returnBookingFlight.ticketClass.ticketClassName,
              ).toLocaleString()}{" "}
              VND
            </div>
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
