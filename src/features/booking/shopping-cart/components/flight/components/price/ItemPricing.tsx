import { IFee, PassengerType } from "../../../../../../../interfaces";
import { useAppSelector } from "../../../../../../../redux/hooks";
import { getFee, roundToThousands } from "../../../../../../../utils";

interface ItemPricingProps {
  title: string;
  passengerType: string;
  feeList?: IFee[];
  totalFeeInGroup: number;
}

const ItemPricing: React.FC<ItemPricingProps> = ({
  title,
  passengerType,
  feeList,
  totalFeeInGroup,
}) => {
  const booking = useAppSelector((state) => state.booking);

  return (
    <>
      {totalFeeInGroup > 0 && (
        <div className="flex justify-between">
          <p className="text-base font-semibold text-green-800">{title}</p>
          <p className="text-base font-semibold text-green-800">
            {totalFeeInGroup.toLocaleString()} VND
          </p>
        </div>
      )}

      {feeList && feeList.length > 0 && (
        <div className="pl-4 pr-0">
          {feeList.map((fee) => {
            const feePrice = booking.bookingFlights
              .map((bookingFlight) => {
                const basePrice: number =
                  bookingFlight.flight.flightPricing.filter(
                    (pricing) =>
                      pricing.ticketClass.ticketClassName ===
                      bookingFlight.ticketClass.ticketClassName,
                  )[0].ticketPrice;
                //Thuế VAT
                if (fee.feeId === 5) {
                  const ticketFeePricing = bookingFlight.flight.fees
                    .find((fee) => fee.feeId === 1)! //Giá vé cơ bản theo từng loại hành khách
                    .feePricing.find(
                      (pricing) =>
                        pricing.passengerType === passengerType &&
                        pricing.routeType ===
                          bookingFlight.flight.route.routeType,
                    )!;
                  if (ticketFeePricing.isPercentage) {
                    return getFee(
                      fee,
                      passengerType as PassengerType,
                      bookingFlight.flight.route.routeType,
                      roundToThousands(
                        basePrice * (ticketFeePricing.feeAmount / 100),
                      ),
                    );
                  } else {
                    return getFee(
                      fee,
                      passengerType as PassengerType,
                      bookingFlight.flight.route.routeType,
                      ticketFeePricing.feeAmount,
                    );
                  }
                }
                return getFee(
                  fee,
                  passengerType as PassengerType,
                  bookingFlight.flight.route.routeType,
                  basePrice,
                );
              })
              .reduce((total, feePrice) => total + feePrice, 0);
            return feePrice > 0 ? (
              <div className="flex justify-between">
                <p className="title-4">{fee.feeName}</p>
                <p className="title-4">{feePrice.toLocaleString()} VND</p>
              </div>
            ) : null;
          })}
        </div>
      )}
    </>
  );
};

export default ItemPricing;
