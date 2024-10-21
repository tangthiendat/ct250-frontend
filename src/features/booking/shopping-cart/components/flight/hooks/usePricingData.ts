import { TicketClassName } from "../../../../../../interfaces";
import { useAppSelector } from "../../../../../../redux/hooks";

export function usePricingData() {
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

  return {
    departTicketPrice,
    returnTicketPrice,
  };
}
