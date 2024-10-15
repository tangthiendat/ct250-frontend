import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import { TicketClass } from "../../../../../../interfaces";

interface ClassDetailsCardProps {
  price: number;
  ticketClass: TicketClass;
  features: {
    handBaggage: number;
    checkedBaggage: number;
    refundBefore: number;
    refundAfter: number;
    changeBefore: number;
    changeAfter: number;
    freeSeatSelection: boolean;
  };
}

const ClassDetailsCard: React.FC<ClassDetailsCardProps> = ({
  price,
  ticketClass,
  features,
}) => {
  return (
    <div
      className={`${ticketClass === TicketClass.ECONOMY && "border-x-green-700 border-y-green-700 hover:border-green-700"} ${ticketClass === TicketClass.BUSINESS && "border-x-blue-700 border-y-blue-700 hover:border-blue-700"} flex cursor-pointer flex-col overflow-hidden rounded-lg border-4 border-transparent bg-white shadow-[0px_0px_5px_1px_rgba(0,0,0,0.24)] transition-all duration-200`}
    >
      <div
        className={`${ticketClass === TicketClass.ECONOMY && "bg-green-700"} ${ticketClass === TicketClass.BUSINESS && "bg-blue-700"} rounded-b-[40%] pb-2 pt-4 text-center text-white shadow-md transition-all duration-200`}
      >
        <p className="text-xl font-bold">{price.toLocaleString()} VND</p>
        <p className="font-bold">{ticketClass}</p>
      </div>

      <div className="space-y-4 p-4 text-sm">
        <div className="flex items-center">
          <FaCheckCircle className="mr-2 inline-block text-sm text-green-700" />
          <p>Hành lý xách tay: {features.handBaggage}kg</p>
        </div>

        {features.checkedBaggage > 0 ? (
          <div className="flex items-center">
            <FaCheckCircle className="mr-2 inline-block text-sm text-green-700" />
            <p>Hành lý ký gửi: {features.checkedBaggage}kg</p>
          </div>
        ) : (
          <div className="flex items-center">
            <FaTimesCircle className="mr-2 inline-block text-sm text-red-700" />
            <p>Không bao gồm hành lý ký gửi.</p>
          </div>
        )}

        <div className="flex items-center">
          <FaCheckCircle className="mr-2 inline-block text-sm text-green-700" />
          <p>
            Hoàn/huỷ trước giờ khởi hành:{" "}
            {features.refundBefore.toLocaleString()} VND
          </p>
        </div>

        <div className="flex items-center">
          <FaCheckCircle className="mr-2 inline-block text-sm text-green-700" />
          <p>
            Hoàn/huỷ sau giờ khởi hành: {features.refundAfter.toLocaleString()}{" "}
            VND
          </p>
        </div>

        {features.changeBefore > 0 && features.changeAfter > 0 ? (
          <>
            <div className="flex items-center">
              <FaCheckCircle className="mr-2 inline-block text-sm text-green-700" />
              <p>
                Thay đổi trước giờ khởi hành:{" "}
                {features.changeBefore.toLocaleString()} VND
              </p>
            </div>

            <div className="flex items-center">
              <FaCheckCircle className="mr-2 inline-block text-sm text-green-700" />
              <p>
                Thay đổi sau giờ khởi hành:{" "}
                {features.changeAfter.toLocaleString()} VND
              </p>
            </div>
          </>
        ) : (
          <div className="flex items-center">
            <FaCheckCircle className="mr-2 inline-block text-sm text-green-700" />
            <p>Thay đổi trước/sau giờ khởi hành miễn phí.</p>
          </div>
        )}

        {features.freeSeatSelection ? (
          <div className="flex items-center">
            <FaCheckCircle className="mr-2 inline-block text-sm text-green-700" />
            <p>Chọn ghế ngồi miễn phí</p>
          </div>
        ) : (
          <div className="flex items-center">
            <FaTimesCircle className="mr-2 inline-block text-sm text-red-700" />
            <p>Chọn ghế ngồi mất phí</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ClassDetailsCard;
