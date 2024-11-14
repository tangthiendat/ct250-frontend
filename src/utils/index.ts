import { format } from "date-fns";
import {
  CouponType,
  ICoupon,
  IFee,
  IFlightSchedule,
  ISearchFlights,
  PassengerType,
  RouteType,
  TicketClassName,
} from "../interfaces";
import dayjs from "dayjs";
export function formatISODate(date: string) {
  return format(new Date(date), "yyyy-MM-dd");
}

export function nonAccentVietnamese(str: string) {
  str = str.replace(/A|Á|À|Ã|Ạ|Â|Ấ|Ầ|Ẫ|Ậ|Ă|Ắ|Ằ|Ẵ|Ặ/g, "A");
  str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
  str = str.replace(/E|É|È|Ẽ|Ẹ|Ê|Ế|Ề|Ễ|Ệ/, "E");
  str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
  str = str.replace(/I|Í|Ì|Ĩ|Ị/g, "I");
  str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
  str = str.replace(/O|Ó|Ò|Õ|Ọ|Ô|Ố|Ồ|Ỗ|Ộ|Ơ|Ớ|Ờ|Ỡ|Ợ/g, "O");
  str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
  str = str.replace(/U|Ú|Ù|Ũ|Ụ|Ư|Ứ|Ừ|Ữ|Ự/g, "U");
  str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
  str = str.replace(/Y|Ý|Ỳ|Ỹ|Ỵ/g, "Y");
  str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
  str = str.replace(/Đ/g, "D");
  str = str.replace(/đ/g, "d");
  // Some system encode vietnamese combining accent as individual utf-8 characters
  str = str.replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g, ""); // Huyền sắc hỏi ngã nặng
  str = str.replace(/\u02C6|\u0306|\u031B/g, ""); // Â, Ê, Ă, Ơ, Ư
  return str;
}

export function groupBy<T, K>(
  list: T[],
  keyGetter: (item: T) => K,
): Map<K, T[]> {
  const map = new Map<K, T[]>();
  list.forEach((item) => {
    const key = keyGetter(item);
    const collection = map.get(key);
    if (!collection) {
      map.set(key, [item]);
    } else {
      collection.push(item);
    }
  });
  return map;
}

export function getFormattedDuration(durationInMinutes: number): string {
  const hours = Math.floor(durationInMinutes / 60);
  const minutes = durationInMinutes % 60;
  return minutes === 0 ? `${hours} giờ` : `${hours} giờ ${minutes} phút`;
}

//Làm tròn giá tiền theo hàng nghìn
export function roundToThousands(num: number): number {
  return Math.round(num / 1000) * 1000;
}

//Tính giá tiền của một loại hành khách theo hạng vé (vé + phí)
export function getPassengerTotalFee(
  flight: IFlightSchedule,
  passengerType: PassengerType,
  ticketClassName: TicketClassName,
  coupon?: ICoupon,
): number {
  const basePrice: number = flight.flightPricing.filter(
    (pricing) => pricing.ticketClass.ticketClassName === ticketClassName,
  )[0].ticketPrice;
  return flight.fees
    .map((fee) => {
      //Thuế VAT
      if (fee.feeId === 5) {
        const ticketFeePricing = flight.fees
          .find((fee) => fee.feeId === 1)! //Giá vé cơ bản theo từng loại hành khách
          .feePricing.find(
            (pricing) =>
              pricing.passengerType === passengerType &&
              pricing.routeType === flight.route.routeType &&
              isInDateRange(
                dayjs().format("YYYY-MM-DD"),
                pricing.validFrom,
                pricing.validTo,
              ),
          )!;
        if (ticketFeePricing.isPercentage) {
          return getFee(
            fee,
            passengerType,
            flight.route.routeType,
            roundToThousands(basePrice * (ticketFeePricing.feeAmount / 100)),
          );
        } else {
          return getFee(
            fee,
            passengerType,
            flight.route.routeType,
            ticketFeePricing.feeAmount,
          );
        }
      }
      return getFee(
        fee,
        passengerType,
        flight.route.routeType,
        basePrice,
        coupon,
      );
    })
    .reduce((totalFee, currFee) => totalFee + currFee, 0); //Tổng tất cả khoản phí của hành khách
}

export function isValidCoupon(coupon: ICoupon): boolean {
  return (
    coupon.discountValue > 0 &&
    isInDateRange(
      dayjs().format("YYYY-MM-DD"),
      coupon.validFrom,
      coupon.validTo,
    )
  );
}

//Tính giá tiền dựa trên giá gốc và mã giảm giá
export function getActualPrice(
  originalPrice: number,
  coupon?: ICoupon,
): number {
  if (coupon && isValidCoupon(coupon)) {
    if (coupon.couponType === CouponType.PERCENTAGE) {
      return roundToThousands(
        originalPrice - (originalPrice * coupon.discountValue) / 100,
      );
    }
    return roundToThousands(originalPrice - coupon.discountValue);
  }
  return originalPrice;
}

//Tinh giá phí của một loại hành khách
export function getFee(
  fee: IFee,
  passengerType: PassengerType,
  routeType: RouteType,
  basePrice: number,
  coupon?: ICoupon,
): number {
  return fee.feePricing
    .filter(
      (pricing) =>
        pricing.passengerType === passengerType &&
        pricing.routeType === routeType &&
        isInDateRange(
          dayjs().format("YYYY-MM-DD"),
          pricing.validFrom,
          pricing.validTo,
        ),
    )
    .map((pricing) => {
      if (pricing.isPercentage) {
        //Gia ve co ban
        if (fee.feeId === 1) {
          return roundToThousands(
            getActualPrice(basePrice * (pricing.feeAmount / 100), coupon),
          );
        }
        return roundToThousands(basePrice * (pricing.feeAmount / 100));
      }

      //FEE PRICING IS AMOUNT
      if (fee.feeId === 1) {
        return roundToThousands(getActualPrice(pricing.feeAmount, coupon));
      }

      return roundToThousands(pricing.feeAmount);
    })
    .reduce(
      (totalFeePricing, currFeePricing) => totalFeePricing + currFeePricing,
      0,
    );
}

//Tổng giá tiền phải trả cho các loại hành khách
export function getTotalTicketPrice(
  flight: IFlightSchedule,
  passengers: ISearchFlights["passengers"],
  ticketClassName: TicketClassName,
  coupon?: ICoupon,
): number {
  return Object.entries(passengers)
    .map(([passengerType, quantity]) => {
      return (
        getPassengerTotalFee(
          flight,
          passengerType as PassengerType,
          ticketClassName,
          coupon,
        ) * quantity
      );
    })
    .reduce((totalPrice, currPrice) => totalPrice + currPrice, 0);
}

export function isInDateRange(
  date: string,
  startDate: string,
  endDate: string,
): boolean {
  return dayjs(date).tz().isBetween(startDate, endDate, null, "[]");
}
