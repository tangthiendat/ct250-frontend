import { MdExpandLess } from "react-icons/md";
import BusinessClassDetails from "./BusinessClassDetails";
import EconomyClassDetails from "./EconomyClassDetails";
import { IFlightSchedule } from "../../../../../interfaces";
import { useFlightCard } from "../../../../../context/FlightCardContext";

interface FlightCardClassOptionsDetailProps {
  flightCardData: IFlightSchedule;
}

const FlightCardClassOptionsDetail: React.FC<
  FlightCardClassOptionsDetailProps
> = ({ flightCardData }) => {
  const { selectedTicketClassOption, setSelectedTicketClassOption } =
    useFlightCard();
  const showDetailClass = selectedTicketClassOption !== undefined;

  return (
    <div
      className={`${showDetailClass ? "h-[590px] opacity-100" : "h-0 opacity-0"} relative flex flex-col overflow-hidden bg-slate-100 transition-all duration-500`}
    >
      <div className="relative">
        <EconomyClassDetails flightCardData={flightCardData} />
        <BusinessClassDetails flightCardData={flightCardData} />
      </div>

      <div
        className="absolute bottom-0 left-0 right-0 flex cursor-pointer items-center justify-center border-t-[1px] border-t-black/10 bg-slate-100 py-2 hover:bg-slate-200/40"
        onClick={() => setSelectedTicketClassOption(undefined)}
      >
        <MdExpandLess />
      </div>
    </div>
  );
};

export default FlightCardClassOptionsDetail;
