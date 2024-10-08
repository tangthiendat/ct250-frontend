import { IFlightSchedule } from "../../../../../interfaces";
import useFlightCard from "../hooks/useFlightCard";
import FlightCardClassOptions from "./FlightCardClassOptions";
import FlightCardClassOptionsDetail from "./FlightCardClassOptionsDetail";
import FlightCardInfo from "./FlightCardInfo";

interface FlightCardProps {
  flightCardData: IFlightSchedule;
}

const FlightCard: React.FC<FlightCardProps> = ({ flightCardData }) => {
  const {
    showDetailClass,
    showEconomyClass,
    showBusinessClass,
    handleCloseDetailClass,
    handleShowBusinessClass,
    handleShowEconomyClass,
  } = useFlightCard();

  return (
    <div className="rounded-lg shadow-[0px_0px_5px_1px_rgba(0,0,0,0.24)] transition-all duration-1000">
      <div className="flex justify-between">
        <div className="flex w-[70%] flex-col items-center justify-center md:flex-row">
          <FlightCardInfo flightCardData={flightCardData} />
        </div>

        <div className="flex w-[30%]">
          <FlightCardClassOptions
            flightCardData={flightCardData}
            showEconomyClass={showEconomyClass}
            showBusinessClass={showBusinessClass}
            handleShowEconomyClass={handleShowEconomyClass}
            handleShowBusinessClass={handleShowBusinessClass}
            handleCloseDetailClass={handleCloseDetailClass}
          />
        </div>
      </div>

      <FlightCardClassOptionsDetail
        flightCardData={flightCardData}
        showDetailClass={showDetailClass}
        showEconomyClass={showEconomyClass}
        showBusinessClass={showBusinessClass}
        handleCloseDetailClass={handleCloseDetailClass}
      />
    </div>
  );
};

export default FlightCard;
