import { IFlightSchedule } from "../../../../../../interfaces";
import FlightCardClassOptions from "./FlightCardClassOptions";
import FlightCardClassOptionsDetail from "./FlightCardClassOptionsDetail";
import FlightCardInfo from "./FlightCardInfo";

interface FlightCardProps {
  flightCardData: IFlightSchedule;
}

const FlightCard: React.FC<FlightCardProps> = ({ flightCardData }) => {
  return (
    <div className="rounded-lg shadow-[0px_0px_5px_1px_rgba(0,0,0,0.24)] transition-all duration-1000">
      <div className="flex justify-between">
        <div className="flex w-[70%] flex-col items-center justify-center md:flex-row">
          <FlightCardInfo flightCardData={flightCardData} />
        </div>

        <div className="flex w-[30%]">
          <FlightCardClassOptions flightCardData={flightCardData} />
        </div>
      </div>

      <FlightCardClassOptionsDetail flightCardData={flightCardData} />
    </div>
  );
};

export default FlightCard;
