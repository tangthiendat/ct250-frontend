import { Button } from "antd";
import { useFlightCard } from "../../../../../context/FlightCardContext";
import { IFlightSchedule, TicketClass } from "../../../../../interfaces";
import ClassDetailsCard from "./ClassDetailsCard";

interface EconomyClassDetailsProps {
  flightCardData: IFlightSchedule;
}

const features = {
  handBaggage: 7,
  checkedBaggage: 0,
  refundBefore: 450000,
  refundAfter: 600000,
  changeBefore: 450000,
  changeAfter: 600000,
  freeSeatSelection: false,
};

const EconomyClassDetails: React.FC<EconomyClassDetailsProps> = ({
  flightCardData,
}) => {
  const { selectedTicketClassOption } = useFlightCard();
  const show: boolean = selectedTicketClassOption === TicketClass.ECONOMY;
  const economyPrice = flightCardData.flightPricing.find(
    (pricing) => pricing.ticketClass === TicketClass.ECONOMY,
  )?.ticketPrice;

  return (
    <div
      className={`${show ? "translate-y-0 opacity-100" : "invisible -translate-y-full opacity-0"} absolute left-0 right-0 flex flex-col items-center py-6 transition-all duration-500`}
    >
      <p className="text-xl text-green-800">Chi tiết hạng vé</p>
      <p className="text-green-800">Tiện ích với mỗi hành khách</p>

      <div className="my-4 flex gap-4">
        <ClassDetailsCard
          price={economyPrice!}
          ticketClass={TicketClass.ECONOMY}
          features={features}
        />
      </div>

      <p className="text-green-700">Bạn đã chọn hạng vé Economy</p>

      <Button className="mt-5 bg-blue-600 p-5" type="primary">
        Xác nhận để tiếp tục
      </Button>
    </div>
  );
};

export default EconomyClassDetails;
