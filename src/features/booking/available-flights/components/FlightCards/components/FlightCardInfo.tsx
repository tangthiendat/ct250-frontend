import { Divider } from "antd";
import dayjs from "dayjs";
import { FaRegClock } from "react-icons/fa";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { PiAirplaneInFlightFill } from "react-icons/pi";
import { IFlightSchedule } from "../../../../../../interfaces";
import DetailFlight from "./DetailFlight";
import { useState } from "react";

interface FlightCardInfoProps {
  flightCardData: IFlightSchedule;
}

const FlightCardInfo: React.FC<FlightCardInfoProps> = ({ flightCardData }) => {
  const durationInMinutes = dayjs(flightCardData.arrivalDateTime).diff(
    dayjs(flightCardData.departureDateTime),
    "minute",
  );
  const hours = Math.floor(durationInMinutes / 60);
  const minutes = durationInMinutes % 60;
  const formattedDuration =
    minutes === 0 ? `${hours} giờ` : `${hours} giờ ${minutes} phút`;
  const [showDetail, setShowDetail] = useState<boolean>(false);

  return (
    <>
      <div className="flex flex-1 flex-col items-center justify-center">
        <div className="flex flex-row items-center">
          <div>
            <p className="text-heading-3">
              {new Date(flightCardData.departureDateTime).toLocaleTimeString(
                "vi-VN",
                {
                  hour: "2-digit",
                  minute: "2-digit",
                },
              )}
            </p>
            <p className="text-heading-3">
              {flightCardData.route.departureAirport.cityName}
            </p>
          </div>

          <div className="mx-2 flex h-3 items-center">
            <div>
              <Divider
                type="horizontal"
                className="w-16 border-blue-800 md:w-20"
                dashed
                variant="dashed"
              />
            </div>
            <PiAirplaneInFlightFill className="text-blue-800" />
          </div>

          <div>
            <p className="text-heading-3">
              {new Date(flightCardData.arrivalDateTime).toLocaleTimeString(
                "vi-VN",
                {
                  hour: "2-digit",
                  minute: "2-digit",
                },
              )}
            </p>

            <p className="text-heading-3">
              {flightCardData.route.arrivalAirport.cityName}
            </p>
          </div>
        </div>
      </div>

      <Divider type="vertical" className="h-12 bg-black" />

      <div className="ml-4 flex flex-1 flex-col items-start text-sm">
        <p className="flex items-center justify-center">
          <div>
            <FaRegClock className="mr-2 text-xs text-blue-800" />
          </div>
          <p className="title-4">
            Thời gian bay:{" "}
            <span className="font-semibold">{formattedDuration}</span>
          </p>
        </p>

        <p className="flex items-center justify-center">
          <div>
            <PiAirplaneInFlightFill className="mr-2 text-xs text-blue-800" />
          </div>
          <p className="title-4">
            <span className="font-semibold">
              {flightCardData.airplane.model.modelName}
            </span>{" "}
            được vận hành bởi DaViKa Airways.
          </p>
        </p>

        <p className="flex cursor-pointer items-center justify-center">
          <div>
            <IoIosInformationCircleOutline className="mr-2 text-xs text-blue-800" />
          </div>
          <p className="title-4" onClick={() => setShowDetail(true)}>
            Xem chi tiết chuyến bay
          </p>
        </p>
      </div>

      <DetailFlight
        flightData={flightCardData}
        open={showDetail}
        setOpen={setShowDetail}
      />
    </>
  );
};

export default FlightCardInfo;
