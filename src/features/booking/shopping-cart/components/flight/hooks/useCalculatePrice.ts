import { TicketClassName } from "../../../../../../interfaces";
import { useAppSelector } from "../../../../../../redux/hooks";

export function useCalculatePrice() {
  const departData = useAppSelector((state) => state.booking.bookingFlights[0]);
  const returnData =
    useAppSelector((state) => state.booking.bookingFlights[1]) || null;

  const classDepart =
    departData.ticketClass.ticketClassName === TicketClassName.ECONOMY ? 0 : 1;
  const classReturn =
    returnData?.ticketClass.ticketClassName === TicketClassName.ECONOMY ? 0 : 1;

  const departTicketPrice =
    departData.flight.flightPricing[classDepart].ticketPrice;
  const returnTicketPrice =
    returnData?.flight.flightPricing[classReturn].ticketPrice;

  const adult = useAppSelector((state) => state.flightSearch.passengers.adult);
  const children = useAppSelector(
    (state) => state.flightSearch.passengers.children,
  );
  const infant = useAppSelector(
    (state) => state.flightSearch.passengers.infant,
  );

  const adultPriceDepart = departTicketPrice * adult;
  const adultPriceReturn = (returnTicketPrice || 0) * adult;
  const adultPrice = adultPriceDepart + adultPriceReturn;

  const childrenPriceDepart = 0.7 * adultPriceDepart * children;
  const childrenPriceReturn = 0.7 * adultPriceReturn * children;
  const childrenPrice = childrenPriceDepart + childrenPriceReturn;

  const infantPriceDepart = 100000 * infant;
  const infantPriceReturn = returnData ? 100000 * children : 0;
  const infantPrice = infantPriceDepart + infantPriceReturn;

  const totalPrice = adultPrice + childrenPrice + infantPrice;

  return {
    totalPrice,
    adult,
    adultPrice,
    adultPriceDepart,
    adultPriceReturn,
    children,
    childrenPrice,
    childrenPriceDepart,
    childrenPriceReturn,
    infant,
    infantPrice,
    infantPriceDepart,
    infantPriceReturn,
  };
}
