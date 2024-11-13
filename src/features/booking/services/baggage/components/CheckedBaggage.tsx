import { IoBag } from "react-icons/io5";
import {
  IBookingFlight,
  IPassengersData,
  PassengerTitle,
  PassengerType,
} from "../../../../../interfaces";

interface CheckedBaggageProps {
  flightData: IBookingFlight;
  passengers: IPassengersData;
}

const CheckedBaggage: React.FC<CheckedBaggageProps> = ({
  flightData,
  passengers,
}) => {
  return (
    <>
      <div className="flex items-center gap-2 py-2">
        <IoBag className="text-2xl text-blue-900" />
        <div className="text-heading-3 text-blue-900">Hành lý ký gửi</div>
      </div>

      {passengers.passengersInfo.map((passenger, index) => (
        <div
          key={index}
          className="text-heading-3 text-heading-3 flex items-center border-t border-gray-300 px-6 py-2 text-base text-green-700"
        >
          <div className="w-[40%]">
            {passenger.passengerTitle === PassengerTitle.MR_valueOf
              ? PassengerTitle.MR
              : passenger.passengerTitle === PassengerTitle.MRS_valueOf
                ? PassengerTitle.MRS
                : passenger.passengerTitle === PassengerTitle.MS_valueOf
                  ? PassengerTitle.MS
                  : passenger.passengerTitle === PassengerTitle.MSTR_valueOf
                    ? PassengerTitle.MSTR
                    : passenger.passengerTitle ===
                        PassengerTitle.MISS_valueOf && PassengerTitle.MISS}{" "}
            {passenger.lastName} {passenger.firstName}
          </div>

          <div className="w-[60%]">
            {passenger.passengerType === PassengerType.INFANT ||
            flightData.ticketClass.checkedBaggageAllowance === "PAY FEE" ? (
              <p className="text-red-500">
                Không bao gồm hành lý ký gửi trong giá vé
              </p>
            ) : (
              `1 hành lý xách tay: ${flightData.ticketClass.checkedBaggageAllowance}`
            )}
          </div>
        </div>
      ))}
    </>
  );
};

export default CheckedBaggage;
