import { Divider } from "antd";
import { FaShoppingCart, FaUsers } from "react-icons/fa";
import { PiAirplaneInFlightFill } from "react-icons/pi";

interface FlightRecapProps {
  data: {
    typeTrip: string;
    departAirport: string;
    destAirport: string;
    departureDate: string;
    returnDate?: string;
    passengers: {
      adult: number;
      children: number;
      infant: number;
    };
    couponCode?: string;
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

                <div>
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

                  {data.typeTrip === "round-trip" && (
                    <div className="mx-2 flex h-3 items-center">
                      <PiAirplaneInFlightFill className="scale-x-[-1] transform text-blue-800" />
                      <div>
                        <Divider
                          type="horizontal"
                          className="w-16 border-blue-800 md:w-20"
                          dashed
                          variant="dashed"
                        />
                      </div>
                    </div>
                  )}
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

            <Divider type="vertical" className="h-7 bg-black" />

            <div className="text-center">
              <p className="text-flights_recap_heading text-lg font-bold">
                Ngày khởi hành
              </p>
              <p className="text-sm text-gray-500">{data.departureDate}</p>
            </div>

            {data.typeTrip === "round-trip" && (
              <>
                <Divider type="vertical" className="h-7 bg-black" />

                <div className="text-center">
                  <p className="text-flights_recap_heading text-lg font-bold">
                    Ngày về
                  </p>
                  <p className="text-sm text-gray-500">{data.returnDate}</p>
                </div>
              </>
            )}

            <Divider type="vertical" className="h-7 bg-black" />

            <div className="text-center">
              <p className="text-flights_recap_heading text-lg font-bold">
                Hành khách
              </p>
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

          <button className="m-1 flex items-center gap-2 rounded-lg bg-blue-800 px-4 py-2 text-white hover:bg-blue-600">
            <FaShoppingCart className="text-2xl" />
            Your booking
          </button>
        </div>
      </div>
    </div>
  );
};

export default FlightRecap;
