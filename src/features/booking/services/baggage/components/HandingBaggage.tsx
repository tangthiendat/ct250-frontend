import { MdLuggage } from "react-icons/md";
import {
  IBookingFlight,
  IPassengersData,
  PassengerTitle,
  PassengerType,
} from "../../../../../interfaces";

interface HandingBaggageProps {
  flightData: IBookingFlight;
  passengers: IPassengersData;
}

const HandingBaggage: React.FC<HandingBaggageProps> = ({
  flightData,
  passengers,
}) => {
  return (
    <>
      <div className="flex items-center gap-2 py-2">
        <MdLuggage className="text-2xl text-blue-900" />
        <div className="text-heading-3 text-blue-900">Hành lý xách tay</div>
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
            {passenger.passengerType !== PassengerType.INFANT ? (
              <p>
                1 hành lý xách tay: {flightData.ticketClass.luggageAllowance}
              </p>
            ) : (
              <p className="text-red-500">
                Không bao gồm hành lý xách tay trong giá vé
              </p>
            )}
          </div>
        </div>
      ))}
    </>
  );
};

export default HandingBaggage;
