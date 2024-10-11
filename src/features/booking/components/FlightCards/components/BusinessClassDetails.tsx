import { Button } from "antd";
import { useFlightCard } from "../../../../../context/FlightCardContext";
import { IFlightSchedule, TicketClass } from "../../../../../interfaces";
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
  const { selectedTicketClassOption } = useFlightCard();
  const show: boolean = selectedTicketClassOption === TicketClass.BUSINESS;
  const businessPrice = flightCardData.flightPricing.find(
    (pricing) => pricing.ticketClass === TicketClass.BUSINESS,
  )?.ticketPrice;

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

      <Button className="mt-5 bg-blue-600 p-5" type="primary">
        Xác nhận để tiếp tục
      </Button>
    </div>
  );
};

export default BusinessClassOptions;
