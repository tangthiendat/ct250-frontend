import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import { IFlightSchedule, TicketClassName } from "../../../../../../interfaces";
import useSearchData from "../../../hooks/useSearchData";
import { getTotalTicketPrice } from "../../../../../../utils";

interface ClassDetailsCardProps {
  flight: IFlightSchedule;
  ticketClassName: TicketClassName;
}

const ClassDetailsCard: React.FC<ClassDetailsCardProps> = ({
  flight,
  ticketClassName,
}) => {
  const ticketClass = flight.flightPricing.find(
    (pricing) => pricing.ticketClass.ticketClassName === ticketClassName,
  )!.ticketClass;
  const { flightSearch } = useSearchData();
  const ticketPrice = getTotalTicketPrice(
    flight,
    flightSearch.passengers,
    ticketClassName,
  );
  return (
    <div
      className={`${ticketClass.ticketClassName === TicketClassName.ECONOMY && "border-x-green-700 border-y-green-700 hover:border-green-700"} ${ticketClass.ticketClassName === TicketClassName.BUSINESS && "border-x-blue-700 border-y-blue-700 hover:border-blue-700"} flex cursor-pointer flex-col overflow-hidden rounded-lg border-4 border-transparent bg-white shadow-[0px_0px_5px_1px_rgba(0,0,0,0.24)] transition-all duration-200`}
    >
      <div
        className={`${ticketClass.ticketClassName === TicketClassName.ECONOMY && "bg-green-700"} ${ticketClass.ticketClassName === TicketClassName.BUSINESS && "bg-blue-700"} rounded-b-[40%] pb-2 pt-4 text-center text-white shadow-md transition-all duration-200`}
      >
        <p className="text-xl font-bold">{ticketPrice.toLocaleString()} VND</p>
        <p className="font-bold">{ticketClass.ticketClassName}</p>
      </div>

      <div className="title-4 space-y-4 p-4 font-medium">
        <div className="flex items-center">
          <FaCheckCircle className="mr-2 inline-block font-medium text-green-700" />
          <p>Hành lý xách tay: {ticketClass.luggageAllowance}</p>
        </div>

        {ticketClass.checkedBaggageAllowance !== "PAY FEE" ? (
          <div className="flex items-center">
            <FaCheckCircle className="mr-2 inline-block font-medium text-green-700" />
            <p>Hành lý ký gửi: {ticketClass.checkedBaggageAllowance}</p>
          </div>
        ) : (
          <div className="flex items-center">
            <FaTimesCircle className="mr-2 inline-block font-medium text-red-700" />
            <p>Không bao gồm hành lý ký gửi</p>
          </div>
        )}

        <div className="flex items-center">
          <FaCheckCircle className="mr-2 inline-block font-medium text-green-700" />
          <p>
            Hoàn/huỷ trước giờ khởi hành:{" "}
            {(ticketClass.refundFeeBefore * 1000).toLocaleString()} VND
          </p>
        </div>

        <div className="flex items-center">
          <FaCheckCircle className="mr-2 inline-block font-medium text-green-700" />
          <p>
            Hoàn/huỷ sau giờ khởi hành:{" "}
            {(ticketClass.refundFeeAfter * 1000).toLocaleString()} VND
          </p>
        </div>

        {ticketClass.changeFeeBefore > 0 && ticketClass.changeFeeAfter > 0 ? (
          <>
            <div className="flex items-center">
              <FaCheckCircle className="mr-2 inline-block font-medium text-green-700" />
              <p>
                Thay đổi trước giờ khởi hành:{" "}
                {(ticketClass.changeFeeBefore * 1000).toLocaleString()} VND
              </p>
            </div>

            <div className="flex items-center">
              <FaCheckCircle className="mr-2 inline-block font-medium text-green-700" />
              <p>
                Thay đổi sau giờ khởi hành:{" "}
                {(ticketClass.changeFeeAfter * 1000).toLocaleString()} VND
              </p>
            </div>
          </>
        ) : (
          <div className="flex items-center">
            <FaCheckCircle className="mr-2 inline-block font-medium text-green-700" />
            <p>Thay đổi trước/sau giờ khởi hành miễn phí.</p>
          </div>
        )}

        {ticketClass.isSeatSelectionFree ? (
          <div className="flex items-center">
            <FaCheckCircle className="mr-2 inline-block font-medium text-green-700" />
            <p>Chọn ghế ngồi miễn phí</p>
          </div>
        ) : (
          <div className="flex items-center">
            <FaTimesCircle className="mr-2 inline-block font-medium text-red-700" />
            <p>Chọn ghế ngồi mất phí</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ClassDetailsCard;
