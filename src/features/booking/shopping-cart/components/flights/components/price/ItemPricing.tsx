import dayjs from "dayjs";
import {
  CouponType,
  IBookingFlight,
  ICoupon,
  IFee,
  PassengerType,
} from "../../../../../../../interfaces";
import {
  getFee,
  isInDateRange,
  isValidCoupon,
  roundToThousands,
} from "../../../../../../../utils";

interface ItemPricingProps {
  title: string;
  passengerType: string;
  feeList?: IFee[];
  totalFeeInGroup: number;
  bookingFlight: IBookingFlight;
  coupon?: ICoupon;
}

const ItemPricing: React.FC<ItemPricingProps> = ({
  title,
  passengerType,
  feeList,
  totalFeeInGroup,
  bookingFlight,
  coupon,
}) => {
  const hasCoupon = !!coupon && isValidCoupon(coupon);
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
            const originalFeePrice = [bookingFlight]
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
                          bookingFlight.flight.route.routeType &&
                        isInDateRange(
                          dayjs().format("YYYY-MM-DD"),
                          pricing.validFrom,
                          pricing.validTo,
                        ),
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

            const actualFeePrice = [bookingFlight]
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
                          bookingFlight.flight.route.routeType &&
                        isInDateRange(
                          dayjs().format("YYYY-MM-DD"),
                          pricing.validFrom,
                          pricing.validTo,
                        ),
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
                  coupon,
                );
              })
              .reduce((total, feePrice) => total + feePrice, 0);

            return actualFeePrice > 0 || originalFeePrice > 0 ? (
              <div className="flex justify-between">
                <p className="title-4">{fee.feeName}</p>
                {hasCoupon && fee.feeId === 1 ? (
                  <div className="flex items-center gap-1">
                    <div className="title-4 line-through">
                      {originalFeePrice.toLocaleString()} VND
                    </div>
                    <div className="title-4">
                      {actualFeePrice.toLocaleString()} VND
                    </div>
                    <div className="title-4 text-green-700">
                      {`-${coupon.couponType === CouponType.PERCENTAGE ? coupon.discountValue + "%" : coupon.discountValue.toLocaleString()} VND`}
                    </div>
                  </div>
                ) : (
                  <div className="title-4">
                    {originalFeePrice.toLocaleString()} VND
                  </div>
                )}
              </div>
            ) : null;
          })}
        </div>
      )}
    </>
  );
};

export default ItemPricing;
