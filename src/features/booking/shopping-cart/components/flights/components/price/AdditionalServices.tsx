import { Divider } from "antd";
import { useState } from "react";
import { MdExpandMore } from "react-icons/md";
import usePassengersData from "../../../../../traveler/hooks/usePassengersData";
import { PassengerTitle, PassengerType } from "../../../../../../../interfaces";
import { isInDateRange } from "../../../../../../../utils";
import dayjs from "dayjs";

interface AdditionalServicesProps {
  pricing: number;
  flightIndex: number;
}

const AdditionalServices: React.FC<AdditionalServicesProps> = ({
  pricing,
  flightIndex,
}) => {
  const [showExpand, setShowExpand] = useState<boolean>(false);
  const { passengers, totalPassenger, numOfAdult, numOfChild } =
    usePassengersData();

  const handleTitleOfPassenger = (passengerTitle: PassengerTitle) => {
    return passengerTitle === PassengerTitle.MR_valueOf
      ? PassengerTitle.MR
      : passengerTitle === PassengerTitle.MRS_valueOf
        ? PassengerTitle.MRS
        : passengerTitle === PassengerTitle.MS_valueOf
          ? PassengerTitle.MS
          : passengerTitle === PassengerTitle.MSTR_valueOf
            ? PassengerTitle.MSTR
            : PassengerTitle.MISS;
  };

  const handleGoWith = (
    passengerType: PassengerType,
    passengerIndex: number,
  ) => {
    if (passengerType === PassengerType.ADULT) {
      const infant =
        passengers.passengersInfo[numOfAdult + numOfChild + passengerIndex];

      if (infant === undefined) return "";

      return (
        handleTitleOfPassenger(infant.passengerTitle) +
        " " +
        infant.lastName +
        " " +
        infant.firstName
      );
    } else if (passengerType === PassengerType.INFANT) {
      const adult =
        passengers.passengersInfo[passengerIndex - (numOfAdult + numOfChild)];

      return (
        handleTitleOfPassenger(adult.passengerTitle) +
        " " +
        adult.lastName +
        " " +
        adult.firstName
      );
    }
  };

  return (
    <div
      className={`${showExpand ? "h-auto" : "h-10"} mb-1 overflow-hidden transition-all duration-200`}
    >
      <div
        className={`${showExpand ? "bg-gray-200" : "bg-gray-100"} text-heading-3 flex cursor-pointer justify-between rounded-sm p-2 transition-all duration-200 hover:bg-gray-300`}
        onClick={() => setShowExpand(!showExpand)}
      >
        <p className="text-blue-900">Các dịch vụ bổ sung</p>

        <div className="flex items-center">
          <p className="text-blue-900">{pricing.toLocaleString()} VND</p>
          <div>
            <MdExpandMore
              className={`${showExpand ? "rotate-0" : "-rotate-90"} transform duration-200`}
            />
          </div>
        </div>
      </div>

      <div className={`${showExpand && "bg-gray-100"} rounded-b-sm px-7`}>
        <div className="flex justify-between">
          <p className="text-base font-semibold text-green-800">
            Mua thêm hành lý
          </p>
          <p className="text-base font-semibold text-green-800">
            {pricing.toLocaleString()} VND
          </p>
        </div>
        <div className="pl-4 pr-0">
          {passengers.passengersInfo
            .filter((passengerInfo) => {
              if (flightIndex === 0) {
                return passengerInfo.services?.depart?.baggage !== undefined;
              }
              return passengerInfo.services?.return?.baggage !== undefined;
            })
            .map((passengerInfo, passengerIndex) => {
              let baggage = passengerInfo.services?.depart?.baggage;
              if (flightIndex === 1) {
                baggage = passengerInfo.services?.return?.baggage;
              }
              const baggagePrice =
                baggage?.baggagePricing.find((pricing) =>
                  isInDateRange(
                    dayjs().format("YYYY-MM-DD"),
                    pricing.validFrom,
                    pricing.validTo,
                  ),
                )?.price || 0;

              return (
                <div key={passengerIndex}>
                  <div className="title-4 mt-1 flex flex-col gap-1">
                    <div>
                      {handleTitleOfPassenger(passengerInfo.passengerTitle)}{" "}
                      <span className="font-semibold text-green-800">{`${passengerInfo.lastName} ${passengerInfo.firstName}`}</span>{" "}
                      {totalPassenger > 1 &&
                        passengerInfo.email &&
                        handleGoWith(
                          passengerInfo.passengerType,
                          passengerIndex,
                        ) && (
                          <>
                            {"(với "}
                            <span className="font-semibold">
                              {handleGoWith(
                                passengerInfo.passengerType,
                                passengerIndex,
                              )}
                            </span>
                            {")"}
                          </>
                        )}
                    </div>
                    <div className="flex items-center justify-between">
                      <div>{`1 hành lý mua thêm: ${baggage?.baggageWeight} kg`}</div>
                      <div>{baggagePrice.toLocaleString()} VND</div>
                    </div>
                  </div>
                  {passengerIndex !== passengers.passengersInfo.length - 1 && (
                    <Divider type="horizontal" className="my-1 bg-slate-400" />
                  )}
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default AdditionalServices;
