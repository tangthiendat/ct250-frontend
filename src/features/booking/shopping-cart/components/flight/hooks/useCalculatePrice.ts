import { IBookingFlight, TicketClassName } from "../../../../../../interfaces";
import { useAppSelector } from "../../../../../../redux/hooks";

export function useCalculatePrice(
  departData: IBookingFlight,
  returnData?: IBookingFlight,
) {
  const classDepart =
    departData.ticketClass.ticketClassName === TicketClassName.ECONOMY ? 0 : 1;
  const classReturn =
    returnData?.ticketClass.ticketClassName === TicketClassName.ECONOMY ? 0 : 1;

  const priceDepart = departData.flight.flightPricing[classDepart].ticketPrice;
  const priceReturn = returnData?.flight.flightPricing[classReturn].ticketPrice;

  const adult = useAppSelector((state) => state.flightSearch.passengers.adult);
  const children = useAppSelector(
    (state) => state.flightSearch.passengers.children,
  );
  const infants = useAppSelector(
    (state) => state.flightSearch.passengers.infant,
  );

  const adultPriceDepart = priceDepart * adult;
  const adultPriceReturn = (priceReturn || 0) * adult;
  const adultPrice = adultPriceDepart + adultPriceReturn;

  const childrenPriceDepart = 0.7 * adultPriceDepart * children;
  const childrenPriceReturn = 0.7 * adultPriceReturn * children;
  const childrenPrice = childrenPriceDepart + childrenPriceReturn;

  const infantsPriceDepart = 100000 * infants;
  const infantsPriceReturn = returnData ? 100000 * children : 0;
  const infantsPrice = infantsPriceDepart + infantsPriceReturn;

  const totalPrice = adultPrice + childrenPrice + infantsPrice;

  return { totalPrice };
}
