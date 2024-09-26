import { Divider } from "antd";
import { FaRegClock } from "react-icons/fa";
import { MdExpandMore } from "react-icons/md";
import { PiAirplaneInFlightFill } from "react-icons/pi";

interface FlightCardProps {
  flightCardData: {
    id: number;
    departureTime: string;
    arrivalTime: string;
    departureAirportCode: string;
    destinationAirportCode: string;
    flightDuration: string;
    departureTerminal: string;
    destinationTerminal: string;
  };
}

const FlightCard: React.FC<FlightCardProps> = ({ flightCardData }) => {
  return (
    <div className="flex justify-between overflow-hidden rounded-lg shadow-[0px_0px_5px_1px_rgba(0,0,0,0.24)]">
      <div className="bg-red-00 flex w-[70%] flex-col items-center justify-center gap-14 md:flex-row">
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
      </div>

      <div className="flex w-[30%]">
        <div className="flex-1 cursor-pointer bg-green-700">
          <div className="flex flex-col items-center py-2 text-white">
            <p className="font-bold">Economy</p>
            <div className="my-2 flex flex-col items-center">
              <p>từ</p>
              <p className="text-xl font-bold">1.565.000</p>
              <p>VND</p>
            </div>
            <MdExpandMore className="text-white" />
          </div>
        </div>
        <div className="flex-1 cursor-pointer bg-blue-800">
          <div className="flex flex-col items-center py-2 text-white">
            <p className="font-bold">Business</p>
            <div className="my-2 flex flex-col items-center">
              <p>từ</p>
              <p className="text-xl font-bold">3.565.000</p>
              <p>VND</p>
            </div>
            <MdExpandMore className="text-white" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlightCard;
