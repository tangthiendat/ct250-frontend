import { PassengerType } from "../../../../../../interfaces";
import { useAppSelector } from "../../../../../../redux/hooks";
// import { useFlightsData } from "./useFlightsData";

export function useCalculatePrice() {
  // const { departTicketPrice, returnTicketPrice } = useFlightsData();
  const departTicketPrice = 0;
  const returnTicketPrice = 0;

  const adult = useAppSelector(
    (state) => state.flightSearch.passengers[PassengerType.ADULT],
  );
  const children = useAppSelector(
    (state) => state.flightSearch.passengers[PassengerType.CHILD],
  );
  const infant = useAppSelector(
    (state) => state.flightSearch.passengers[PassengerType.INFANT],
  );

  const adultPriceDepart = departTicketPrice * adult;
  const adultPriceReturn = (returnTicketPrice || 0) * adult;
  const adultPrice = adultPriceDepart + adultPriceReturn;

  const childrenPriceDepart = 0.7 * adultPriceDepart * children;
  const childrenPriceReturn = 0.7 * adultPriceReturn * children;
  const childrenPrice = childrenPriceDepart + childrenPriceReturn;

  const infantPriceDepart = 100000 * infant;
  const infantPriceReturn = returnTicketPrice !== 0 ? 100000 * children : 0;
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
