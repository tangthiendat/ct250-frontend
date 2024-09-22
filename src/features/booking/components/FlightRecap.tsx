import { Divider } from "antd";
import { FaShoppingCart, FaUsers } from "react-icons/fa";
import { PiAirplaneInFlightFill } from "react-icons/pi";

interface FlightRecapProps {
  data: {
    departAirport: string;
    destAirport: string;
    departureDate: string;
    passengers: {
      adult: number;
      children: number;
      infant: number;
    };
  };
}

const FlightRecap: React.FC<FlightRecapProps> = ({ data }) => {
  return (
    <div className="sticky top-0 bg-white shadow">
      <div className="mx-auto lg:max-w-screen-xl">
        <div className="flex w-full items-center justify-between bg-white p-2">
          <div className="flex items-center gap-4">
            <div className="flex flex-col items-center">
              <div className="flex items-center">
                <p className="text-lg font-bold">
                  {data.departAirport.split(" - ")[1]}
                </p>

                <div className="flex items-center gap-1 px-4">
                  <div className="font-bold text-blue-500">
                    --------------------
                  </div>
                  <PiAirplaneInFlightFill />
                </div>

                <p className="text-lg font-bold">
                  {data.destAirport.split(" - ")[1]}
                </p>
              </div>

              <div className="flex w-full justify-between">
                <p className="max-w-20 text-left text-sm text-gray-500">
                  {data.departAirport.split(" - ")[0]}
                </p>
                <p className="max-w-20 text-right text-sm text-gray-500">
                  {data.destAirport.split(" - ")[0]}
                </p>
              </div>
            </div>

            <Divider type="vertical" className="h-10 bg-black" />

            <div className="text-center">
              <p className="text-lg font-bold">Ngày khởi hành</p>
              <p className="text-sm text-gray-500">{data.departureDate}</p>
            </div>

            <Divider type="vertical" className="h-10 bg-black" />

            <div className="text-center">
              <p className="text-lg font-bold">Hành khách</p>
              <p className="text-sm text-gray-500">
                <div className="flex items-center justify-center">
                  <FaUsers />
                  {data.passengers.adult +
                    data.passengers.children +
                    data.passengers.infant}
                </div>
              </p>
            </div>
          </div>

          <button className="m-1 flex items-center gap-2 rounded-lg bg-blue-500 px-4 py-2 text-white hover:bg-blue-600">
            <FaShoppingCart className="text-2xl" />
            Your booking
          </button>
        </div>
      </div>
    </div>
  );
};

export default FlightRecap;
