import { Button } from "antd";
import { useNavigate, useParams } from "react-router-dom";
import { useFlightCard } from "../../../../../../context/FlightCardContext";
import {
  IFlightSchedule,
  TicketClass,
  TripType,
} from "../../../../../../interfaces";
import { useAppDispatch, useAppSelector } from "../../../../../../redux/hooks";
import { addFlight } from "../../../../../../redux/slices/bookingSlice";
import ClassDetailsCard from "./ClassDetailsCard";

interface BusinessClassOptionsProps {
  flightCardData: IFlightSchedule;
}

const features = {
  handBaggagePiece: 2,
  handBaggage: 7,
  checkedBaggage: 40,
  refundBefore: 450000,
  refundAfter: 450000,
  changeBefore: 300000,
  changeAfter: 450000,
  freeSeatSelection: true,
};

const BusinessClassOptions: React.FC<BusinessClassOptionsProps> = ({
  flightCardData,
}) => {
  const { selectedTicketClassOption, setSelectedTicketClassOption } =
    useFlightCard();
  const show: boolean = selectedTicketClassOption === TicketClass.BUSINESS;
  const businessPrice = flightCardData.flightPricing.find(
    (pricing) => pricing.ticketClass === TicketClass.BUSINESS,
  )?.ticketPrice;
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
          ticketClass: TicketClass.BUSINESS,
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
          ticketClass: TicketClass.BUSINESS,
        }),
      );
      console.log("Navigate to SHOPPING CART");
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
          price={businessPrice!}
          ticketClass={TicketClass.BUSINESS}
          features={features}
        />
      </div>

      <p className="text-blue-800">Bạn đã chọn hạng vé Business</p>

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

export default BusinessClassOptions;
