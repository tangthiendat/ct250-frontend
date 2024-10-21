import { TravelerProvider } from "../../../../../../../context/TravelerContext";
import { PassengerType } from "../../../../../../../interfaces";
import { useAppSelector } from "../../../../../../../redux/hooks";
import { getPassengerTotalFee } from "../../../../../../../utils";
import Traveler from "./Traveler";

const TravelersPrice: React.FC = () => {
  const { flightSearch, booking } = useAppSelector((state) => state);

  return (
    <>
      {Object.entries(flightSearch.passengers).map(
        ([passengerType, quantity]) => {
          const passengerTotalFee = booking.bookingFlights
            .map(
              (bookingFlight) =>
                getPassengerTotalFee(
                  bookingFlight.flight,
                  passengerType as PassengerType,
                  bookingFlight.ticketClass.ticketClassName,
                ) * quantity,
            )
            .reduce((totalFee, currFee) => totalFee + currFee, 0);
          return quantity > 0 ? (
            <TravelerProvider>
              <Traveler
                key={passengerType}
                passengerType={passengerType}
                numberOfTraveler={quantity}
                pricing={passengerTotalFee}
              />
            </TravelerProvider>
          ) : null;
        },
      )}
    </>
  );
};

export default TravelersPrice;
