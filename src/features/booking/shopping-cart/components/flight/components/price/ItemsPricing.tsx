import { Divider } from "antd";
import { IFee, PassengerType } from "../../../../../../../interfaces";
import { useAppSelector } from "../../../../../../../redux/hooks";
import {
  getFee,
  getPassengerTotalFee,
  groupBy,
  roundToThousands,
} from "../../../../../../../utils";
import ItemPricing from "./ItemPricing";

interface ItemsPricingProps {
  passengerType: string;
}

const ItemsPricing: React.FC<ItemsPricingProps> = ({ passengerType }) => {
  const booking = useAppSelector((state) => state.booking);
  const flightSearch = useAppSelector((state) => state.flightSearch);
  const feeGroupMap: Map<string, IFee[]> = groupBy(
    booking.bookingFlights[0].flight.fees,
    (fee) => fee.feeGroup.feeGroupName,
  );

  const totalPassengerPrice = booking.bookingFlights
    .map((bookingFlight) => {
      return getPassengerTotalFee(
        bookingFlight.flight,
        passengerType as PassengerType,
        bookingFlight.ticketClass.ticketClassName,
      );
    })
    .reduce((total, price) => total + price, 0);
  const passengerQuantity =
    flightSearch.passengers[passengerType as PassengerType];
  console.log("ItemsPricingProps", passengerType, passengerQuantity);

  return (
    <>
      {Array.from(feeGroupMap).map(([feeGroup, feeList], index) => {
        const totalFeeInGroup = booking.bookingFlights
          .map((bookingFlight) => {
            const basePrice: number = bookingFlight.flight.flightPricing.filter(
              (pricing) =>
                pricing.ticketClass.ticketClassName ===
                bookingFlight.ticketClass.ticketClassName,
            )[0].ticketPrice;

            if (!feeList) return 0;

            return feeList
              .map((fee) => {
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
              .reduce((totalFee, currFee) => totalFee + currFee, 0); //Tổng tất cả khoản phí của hành khách
          })
          .reduce((total, feePrice) => total + feePrice, 0);
        return feeList.length > 0 ? (
          <div>
            <ItemPricing
              key={index}
              title={feeGroup}
              passengerType={passengerType}
              feeList={feeList}
              totalFeeInGroup={totalFeeInGroup}
            />
            {index !== feeGroupMap.size - 1 && totalFeeInGroup > 0 && (
              <Divider type="horizontal" className="my-1 bg-slate-400" />
            )}
          </div>
        ) : null;
      })}

      <div className="mt-4">
        <ItemPricing
          key={`totalPricePerPassenger-${passengerType}`}
          title={`Tổng giá cho mỗi ${passengerType === PassengerType.ADULT ? "người lớn" : passengerType === PassengerType.CHILD ? "trẻ em" : "em bé"}`}
          totalFeeInGroup={totalPassengerPrice}
          passengerType={passengerType}
        />

        <ItemPricing
          key={`totalPricePassengerType-${passengerType}`}
          title={`x${passengerQuantity} ${passengerType === PassengerType.ADULT ? "người lớn" : passengerType === PassengerType.CHILD ? "trẻ em" : "em bé"}`}
          totalFeeInGroup={totalPassengerPrice * passengerQuantity}
          passengerType={passengerType}
        />
      </div>
    </>
  );
};

export default ItemsPricing;
