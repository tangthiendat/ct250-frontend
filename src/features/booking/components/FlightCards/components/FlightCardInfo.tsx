import { Divider } from "antd";
import { FaRegClock } from "react-icons/fa";
import { PiAirplaneInFlightFill } from "react-icons/pi";
import { IFlightCard } from "../../../../../interfaces";

const FlightCardInfo: React.FC<IFlightCard> = ({ flightCardData }) => {
  return (
    <>
      <div className="flex flex-col justify-center">
        <div className="flex flex-row items-center">
          <div>
            <p>{flightCardData.departureTime}</p>
            <p>{flightCardData.departureAirportCode}</p>
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
            <p>{flightCardData.arrivalTime}</p>
            <p className="text-right">
              {flightCardData.destinationAirportCode}
            </p>
          </div>
        </div>

        <div className="flex flex-row justify-between">
          <p>{flightCardData.departureTerminal}</p>
          <p>{flightCardData.destinationTerminal}</p>
        </div>
      </div>

      <Divider type="vertical" className="h-12 bg-black" />

      <div>
        <p className="flex items-center justify-center">
          <FaRegClock className="mr-2 text-xs" /> Thời gian bay{" "}
          {flightCardData.flightDuration}
        </p>
        <p>Xem chi tiết chuyến bay</p>
      </div>
    </>
  );
};

export default FlightCardInfo;
