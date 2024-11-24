import { Divider } from "antd";
import { PiAirplaneInFlightFill } from "react-icons/pi";
import { IFlightSchedule } from "../../../../../../interfaces";

interface FlightIndicatorProps {
  flightCardData: IFlightSchedule;
}

const FlightIndicator: React.FC<FlightIndicatorProps> = ({
  flightCardData,
}) => {
  return (
    <>
      <div>
        <p className="text-heading-3 text-blue-800">
          {new Date(flightCardData.departureDateTime).toLocaleTimeString(
            "vi-VN",
            {
              hour: "2-digit",
              minute: "2-digit",
            },
          )}
        </p>
        <p className="text-heading-3 text-blue-800">
          {flightCardData.route.departureAirport.airportCode}
        </p>
      </div>

      <div className="mx-2 flex w-full items-center">
        <Divider
          type="horizontal"
          // className="w-full border-blue-800"
          style={{ width: "100%", borderColor: "#1e40af" }}
          dashed
          variant="dashed"
          orientation="right"
          orientationMargin={0}
        >
          <PiAirplaneInFlightFill className="-ml-3 text-blue-800" />
        </Divider>
      </div>

      <div>
        <p className="text-heading-3 text-right text-blue-800">
          {new Date(flightCardData.arrivalDateTime).toLocaleTimeString(
            "vi-VN",
            {
              hour: "2-digit",
              minute: "2-digit",
            },
          )}
        </p>

        <p className="text-heading-3 text-right text-blue-800">
          {flightCardData.route.arrivalAirport.airportCode}
        </p>
      </div>
    </>
  );
};

export default FlightIndicator;
