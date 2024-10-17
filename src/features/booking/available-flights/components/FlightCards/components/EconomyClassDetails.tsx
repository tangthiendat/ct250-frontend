import { Button } from "antd";
import { useNavigate, useParams } from "react-router-dom";
import { useFlightCard } from "../../../../../../context/FlightCardContext";
import {
  IFlightSchedule,
  TicketClassName,
  TripType,
} from "../../../../../../interfaces";
import { useAppDispatch, useAppSelector } from "../../../../../../redux/hooks";
import { addFlight } from "../../../../../../redux/slices/bookingSlice";
import ClassDetailsCard from "./ClassDetailsCard";

interface EconomyClassDetailsProps {
  flightCardData: IFlightSchedule;
}

const EconomyClassDetails: React.FC<EconomyClassDetailsProps> = ({
  flightCardData,
}) => {
  const { selectedTicketClassOption, setSelectedTicketClassOption } =
    useFlightCard();
  const show: boolean = selectedTicketClassOption === TicketClassName.ECONOMY;
  const economyPricing = flightCardData.flightPricing.find(
    (pricing) =>
      pricing.ticketClass.ticketClassName === TicketClassName.ECONOMY,
  );

  const flightIndex: number = Number(
    useParams<{ flightIndex: string }>().flightIndex,
  );
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const flightSearch = useAppSelector((state) => state.flightSearch);

  function handleClick() {
    const currentPath = window.location.pathname;
    const pathParts = currentPath.split("/");
    if (flightSearch.typeTrip === TripType.ROUND_TRIP && flightIndex === 0) {
      dispatch(
        addFlight({
          newFlight: flightCardData,
          flightIndex,
          ticketClass: economyPricing!.ticketClass,
        }),
      );
      setSelectedTicketClassOption(undefined);
      pathParts[pathParts.length - 1] = `${flightIndex + 1}`;
      navigate(pathParts.join("/"));
    } else {
      dispatch(
        addFlight({
          newFlight: flightCardData,
          flightIndex,
          ticketClass: economyPricing!.ticketClass,
        }),
      );
      console.log("Navigate to SHOPPING CART");
    }
  }

  return (
    <div
      className={`${show ? "translate-y-0 opacity-100" : "invisible -translate-y-full opacity-0"} absolute left-0 right-0 flex flex-col items-center py-6 transition-all duration-500`}
    >
      <p className="text-xl text-green-800">Chi tiết hạng vé</p>
      <p className="text-green-800">Tiện ích với mỗi hành khách</p>

      <div className="my-4 flex gap-4">
        <ClassDetailsCard flightPricing={economyPricing!} />
      </div>

      <p className="text-green-700">Bạn đã chọn hạng vé Economy</p>

      <Button
        className="mt-5 bg-blue-600 p-5"
        type="primary"
        onClick={handleClick}
      >
        Xác nhận để tiếp tục
      </Button>
    </div>
  );
};

export default EconomyClassDetails;
