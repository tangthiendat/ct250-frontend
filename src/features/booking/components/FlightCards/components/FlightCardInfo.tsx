import { Divider } from "antd";
import { FaRegClock } from "react-icons/fa";
import { PiAirplaneInFlightFill } from "react-icons/pi";
import { IFlightSchedule } from "../../../../../interfaces";
import { IoIosInformationCircleOutline } from "react-icons/io";

interface FlightCardInfoProps {
  flightCardData: IFlightSchedule;
}

const FlightCardInfo: React.FC<FlightCardInfoProps> = ({ flightCardData }) => {
  return (
    <>
      <div className="flex flex-1 flex-col items-center justify-center">
        <div className="flex flex-row items-center">
          <div>
            <p>
              {new Date(flightCardData.departureDateTime).toLocaleTimeString(
                "vi-VN",
                {
                  hour: "2-digit",
                  minute: "2-digit",
                },
              )}
            </p>
            <p>{flightCardData.route.departureAirport.cityName}</p>
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
            <p className="text-right">
              {new Date(flightCardData.arrivalDateTime).toLocaleTimeString(
                "vi-VN",
                {
                  hour: "2-digit",
                  minute: "2-digit",
                },
              )}
            </p>
            <p className="text-right">
              {flightCardData.route.arrivalAirport.cityName}
            </p>
          </div>
        </div>

        {/* <div className="flex flex-row justify-between">
          <p>{flightCardData.departureTerminal}</p>
          <p>{flightCardData.destinationTerminal}</p>
        </div> */}
      </div>

      <Divider type="vertical" className="h-12 bg-black" />

      <div className="ml-4 flex flex-1 flex-col items-start text-sm">
        <p className="flex items-center justify-center">
          <div>
            <FaRegClock className="mr-2 text-xs text-blue-800" />
          </div>
          <p>
            Thời gian bay:{" "}
            <span className="text font-semibold">
              {flightCardData.flightDuration}
            </span>
          </p>
        </p>

        <p className="flex items-center justify-center">
          <div>
            <PiAirplaneInFlightFill className="mr-2 text-xs text-blue-800" />
          </div>
          <p>
            <span className="text font-semibold">
              {/* {flightCardData.flightName} */}
            </span>{" "}
            được vận hành bởi DaViKa Airways.
          </p>
        </p>

        <p className="flex cursor-pointer items-center justify-center">
          <div>
            <IoIosInformationCircleOutline className="mr-2 text-xs text-blue-800" />
          </div>
          <p>Xem chi tiết chuyến bay</p>
        </p>
      </div>
    </>
  );
};

export default FlightCardInfo;
