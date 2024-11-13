import { useState } from "react";
import { MdExpandMore } from "react-icons/md";
import {
  IBookingFlight,
  IPassengerData,
  PassengerType,
} from "../../../../../../../../interfaces";
import usePassengersData from "../../../../../../traveler/hooks/usePassengersData";
import { Divider } from "antd";

interface FlightProps {
  type: string;
  flightData: IBookingFlight;
}

const Flight: React.FC<FlightProps> = ({ type, flightData }) => {
  const [showExpand, setShowExpand] = useState<boolean>(false);
  const { totalPassenger, passengers, numOfAdult, numOfChild } =
    usePassengersData();
  const totalNumOfBaggage = numOfAdult + numOfChild;

  const extraBaggageCount = (type: string) => {
    if (type === "departure") {
      return passengers.passengersInfo.filter(
        (passenger) => passenger.services?.depart?.baggage !== undefined,
      ).length;
    } else {
      return passengers.passengersInfo.filter(
        (passenger) => passenger.services?.return?.baggage !== undefined,
      ).length;
    }
  };

  const extraBaggageWeightByPassenger = (
    type: string,
    passenger: IPassengerData,
  ) => {
    if (type === "departure") {
      return passenger.services?.depart?.baggage?.baggageWeight;
    } else if (type === "arrival") {
      return passenger.services?.return?.baggage?.baggageWeight;
    }
    return 0;
  };

  const calculateHeight = () => {
    // const heightNumber = 60 * numOfBaggage;
    // const heightString = `h-[${heightNumber.toString() + "px"}]`;

    // return heightString;

    switch (totalPassenger) {
      case 1:
        return "h-[56px]";
      case 2:
        return "h-[112px]";
      case 3:
        return "h-[168px]";
      case 4:
        return "h-[224px]";
      case 5:
        return "h-[280px]";
      case 6:
        return "h-[336px]";
      case 7:
        return "h-[392px]";
      case 8:
        return "h-[448px]";
    }
  };

  return (
    <div className="overflow-hidden rounded-md bg-slate-100">
      <div
        className={`${showExpand ? "bg-slate-200" : "bg-slate-50"} flex cursor-pointer justify-between p-2 transition-all duration-200 hover:bg-slate-200`}
        onClick={() => setShowExpand(!showExpand)}
      >
        <div className="title-4 flex w-full items-center gap-20">
          <p className="text-heading-3 text-nowrap text-base text-green-800">
            {flightData.flight.route.departureAirport.cityName}
            <span className="title-4 text-black"> đến </span>
            {flightData.flight.route.arrivalAirport.cityName}
          </p>

          <div className="flex w-full">
            <p className="w-[33%]">{totalNumOfBaggage} Hành lí xách tay</p>

            {flightData.ticketClass.checkedBaggageAllowance !== "PAY FEE" ? (
              <p className="w-[33%]">{totalNumOfBaggage} Hành lí ký gửi</p>
            ) : (
              <p className="w-[33%] text-red-500">
                Không bao gồm hành lý ký gửi
              </p>
            )}

            {extraBaggageCount(type) !== 0 && (
              <p className="w-[33%] font-semibold text-green-700">
                {extraBaggageCount(type)} Hành lí mua thêm
              </p>
            )}
          </div>
        </div>

        <div className="flex items-center">
          <MdExpandMore
            className={`${showExpand ? "rotate-0" : "-rotate-90"} transform text-green-800 duration-200`}
          />
        </div>
      </div>

      <div
        className={`${showExpand ? calculateHeight() : "h-0"} px-4 transition-all duration-200`}
      >
        {passengers.passengersInfo.map((passenger, index) => (
          <div key={index}>
            {index !== 0 && (
              <Divider type="horizontal" className="m-0 bg-slate-500" />
            )}

            <div className="text-heading-3 flex justify-between py-2">
              <p className="w-[20%] pr-2 text-blue-800">
                {passenger.lastName} {passenger.firstName}
              </p>

              <div className="flex w-[80%] text-sm">
                {passenger.passengerType !== PassengerType.INFANT ? (
                  <>
                    <p className="w-[33%] pr-2">
                      1 Hành lí xách tay:{" "}
                      {flightData.ticketClass.luggageAllowance}
                    </p>

                    {flightData.ticketClass.checkedBaggageAllowance !==
                    "PAY FEE" ? (
                      <p className="w-[33%] pr-2">
                        1 Hành lí ký gửi:{" "}
                        {flightData.ticketClass.checkedBaggageAllowance}
                      </p>
                    ) : (
                      <p className="w-[33%] pr-2 text-red-500">
                        Không bao gồm hành lý ký gửi
                      </p>
                    )}

                    {extraBaggageWeightByPassenger(type, passenger) !== 0 && (
                      <p className="w-[33%] pr-2">
                        1 Hành lí mua thêm:{" "}
                        {extraBaggageWeightByPassenger(type, passenger)} kg
                      </p>
                    )}
                  </>
                ) : (
                  <>
                    <p className="w-[33%] pr-2 text-red-500">
                      Không bao gồm hành lý xách tay trong giá vé
                    </p>
                    <p className="w-[33%] pr-2 text-red-500">
                      Không bao gồm hành lý ký gửi trong giá vé
                    </p>
                  </>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Flight;
