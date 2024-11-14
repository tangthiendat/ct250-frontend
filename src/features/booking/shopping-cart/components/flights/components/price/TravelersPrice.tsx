import { TravelerProvider } from "../../../../../../../context/TravelerContext";
import { PassengerType } from "../../../../../../../interfaces";
import { useAppSelector } from "../../../../../../../redux/hooks";
import {
  getFlightBaggagePrice,
  getPassengerTotalFee,
  getTotalTicketPrice,
} from "../../../../../../../utils";
import AdditionalServices from "./AdditionalServices";
import Traveler from "./Traveler";

const TravelersPrice: React.FC = () => {
  const flightSearch = useAppSelector((state) => state.flightSearch);

  const passengers = useAppSelector((state) => state.passengers);
  const booking = useAppSelector((state) => state.booking);
  const coupon = useAppSelector((state) => state.coupon);

  const departureBookingFlight = booking.bookingFlights[0];
  const returnBookingFlight = booking.bookingFlights[1];

  const departureBaggagePrice = getFlightBaggagePrice(
    passengers.passengersInfo,
    0,
  );
  const totalDepartPrice =
    getTotalTicketPrice(
      departureBookingFlight.flight,
      flightSearch.passengers,
      departureBookingFlight.ticketClass.ticketClassName,
      coupon,
    ) + departureBaggagePrice;

  const returnBaggagePrice = getFlightBaggagePrice(
    passengers.passengersInfo,
    1,
  );
  const totalReturnPrice =
    returnBookingFlight &&
    getTotalTicketPrice(
      returnBookingFlight.flight,
      flightSearch.passengers,
      returnBookingFlight.ticketClass.ticketClassName,
      coupon,
    ) + returnBaggagePrice;

  return (
    <>
      {departureBookingFlight && (
        <div className="pb-4">
          <div className="text-heading-3 flex items-center justify-between text-blue-800">
            <p>
              Chuyến đi (
              {departureBookingFlight.flight.route.departureAirport.airportCode}{" "}
              &rarr;{" "}
              {departureBookingFlight.flight.route.arrivalAirport.airportCode})
            </p>
            <p>{totalDepartPrice.toLocaleString()} VND</p>
          </div>

          <div>
            {Object.entries(flightSearch.passengers).map(
              ([passengerType, quantity]) => {
                const passengerTotalFee =
                  getPassengerTotalFee(
                    departureBookingFlight.flight,
                    passengerType as PassengerType,
                    departureBookingFlight.ticketClass.ticketClassName,
                    coupon,
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
            {departureBaggagePrice > 0 && (
              <AdditionalServices
                pricing={departureBaggagePrice}
                flightIndex={0}
              />
            )}
          </div>
        </div>
      )}

      {returnBookingFlight && (
        <>
          <div className="text-heading-3 flex items-center justify-between text-blue-800">
            <p>
              Chuyến về (
              {returnBookingFlight.flight.route.departureAirport.airportCode}{" "}
              &rarr;{" "}
              {returnBookingFlight.flight.route.arrivalAirport.airportCode})
            </p>
            <p>{totalReturnPrice.toLocaleString()} VND</p>
          </div>

          <div>
            {Object.entries(flightSearch.passengers).map(
              ([passengerType, quantity]) => {
                const passengerTotalFee =
                  getPassengerTotalFee(
                    returnBookingFlight.flight,
                    passengerType as PassengerType,
                    returnBookingFlight.ticketClass.ticketClassName,
                    coupon,
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
            {returnBaggagePrice > 0 && (
              <AdditionalServices
                pricing={returnBaggagePrice}
                flightIndex={1}
              />
            )}
          </div>
        </>
      )}
    </>
  );
};

export default TravelersPrice;
