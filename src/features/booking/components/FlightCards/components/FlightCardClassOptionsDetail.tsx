import { MdExpandLess } from "react-icons/md";
import BusinessClassOptions from "./BusinessClassOptions";
import EconomyClassOptions from "./EconomyClassOptions";
import { IFlightSchedule } from "../../../../../interfaces";

interface FlightCardClassOptionsDetailProps {
  showDetailClass: boolean;
  showEconomyClass: boolean;
  showBusinessClass: boolean;
  handleCloseDetailClass: () => void;
  flightCardData: IFlightSchedule;
}

const FlightCardClassOptionsDetail: React.FC<
  FlightCardClassOptionsDetailProps
> = ({
  flightCardData,
  showDetailClass,
  showEconomyClass,
  showBusinessClass,
  handleCloseDetailClass,
}) => {
  return (
    <div
      className={`${showDetailClass ? "h-[590px] opacity-100" : "h-0 opacity-0"} relative flex flex-col overflow-hidden bg-slate-100 transition-all duration-500`}
    >
      <div className="relative">
        <EconomyClassOptions
          show={showEconomyClass}
          flightCardData={flightCardData}
        />
        <BusinessClassOptions
          show={showBusinessClass}
          flightCardData={flightCardData}
        />
      </div>

      <div
        className="absolute bottom-0 left-0 right-0 flex cursor-pointer items-center justify-center border-t-[1px] border-t-black/10 bg-slate-100 py-2 hover:bg-slate-200/40"
        onClick={handleCloseDetailClass}
      >
        <MdExpandLess />
      </div>
    </div>
  );
};

export default FlightCardClassOptionsDetail;
