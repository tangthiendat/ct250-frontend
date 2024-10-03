import { IFlightCard } from "../../../../../interfaces";
import useFlightCard from "../hooks/useFlightCard";
import FlightCardClassOptionsDetail from "./FlightCardClassOptionsDetail";
import FlightCardInfo from "./FlightCardInfo";
import FlightCardClassOptions from "./FlightCardClassOptions";

const FlightCard: React.FC<IFlightCard> = ({ flightCardData }) => {
  const {
    showDetailClass,
    showEconomyClass,
    showBusinessClass,
    handleCloseDetailClass,
    handleShowBusinessClass,
    handleShowEconomyClass,
  } = useFlightCard();

  return (
    <div className="overflow-hidden rounded-lg shadow-[0px_0px_5px_1px_rgba(0,0,0,0.24)] transition-all duration-1000">
      <div className="flex justify-between">
        <div className="flex w-[70%] flex-col items-center justify-center gap-14 md:flex-row">
          <FlightCardInfo flightCardData={flightCardData} />
        </div>

        <div className="flex w-[30%]">
          <FlightCardClassOptions
            showEconomyClass={showEconomyClass}
            showBusinessClass={showBusinessClass}
            handleShowEconomyClass={handleShowEconomyClass}
            handleShowBusinessClass={handleShowBusinessClass}
            handleCloseDetailClass={handleCloseDetailClass}
          />
        </div>
      </div>

      <FlightCardClassOptionsDetail
        showDetailClass={showDetailClass}
        showEconomyClass={showEconomyClass}
        showBusinessClass={showBusinessClass}
        handleCloseDetailClass={handleCloseDetailClass}
      />
    </div>
  );
};

export default FlightCard;
