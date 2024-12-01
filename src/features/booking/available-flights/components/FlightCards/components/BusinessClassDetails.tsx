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

interface BusinessClassOptionsProps {
  flightCardData: IFlightSchedule;
}

const BusinessClassOptions: React.FC<BusinessClassOptionsProps> = ({
  flightCardData,
}) => {
  const { selectedTicketClassOption, setSelectedTicketClassOption } =
    useFlightCard();
  const show: boolean = selectedTicketClassOption === TicketClassName.BUSINESS;
  const businessPricing = flightCardData.flightPricing.find(
    (pricing) =>
      pricing.ticketClass.ticketClassName === TicketClassName.BUSINESS,
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
          ticketClass: businessPricing!.ticketClass,
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
          ticketClass: flightCardData.flightPricing.find(
            (pricing) =>
              pricing.ticketClass.ticketClassName === TicketClassName.BUSINESS,
          )!.ticketClass,
        }),
      );
      navigate("/book/shopping-cart");
    }
  }

  return (
    <div
      className={`${show ? "translate-y-0 opacity-100" : "invisible -translate-y-full opacity-0"} absolute left-0 right-0 flex flex-col items-center py-6 transition-all duration-500`}
    >
      <p className="text-xl text-blue-800">Chi tiết hạng vé</p>
      <p className="text-blue-800">Tiện ích với mỗi hành khách</p>

      <div className="my-4 flex gap-4">
        <ClassDetailsCard
          flight={flightCardData}
          ticketClassName={TicketClassName.BUSINESS}
        />
      </div>

      <p className="text-blue-800">Bạn đã chọn hạng vé Business</p>

      <button
        className="mt-5 rounded-md bg-blue-700 px-3 py-2 font-medium text-white hover:bg-blue-800"
        onClick={handleClick}
      >
        Xác nhận để tiếp tục
      </button>
    </div>
  );
};

export default BusinessClassOptions;
