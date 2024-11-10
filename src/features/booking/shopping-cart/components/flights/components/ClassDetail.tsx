import React from "react";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import { IBookingFlight, TicketClassName } from "../../../../../../interfaces";

interface TicketClassDetailsProps {
  data: IBookingFlight;
}

const TicketClassDetails: React.FC<TicketClassDetailsProps> = ({ data }) => {
  const ticketClassName = data.ticketClass.ticketClassName;

  return (
    <div className="flex flex-1 flex-col items-center">
      <p className="title-4 font-semibold">Điều kiện kiện giá vé</p>

      <div className="title-4 mt-3 font-semibold">
        {ticketClassName === TicketClassName.ECONOMY ? (
          <p className="text-green-800">{ticketClassName}</p>
        ) : (
          <p className="text-blue-800">{ticketClassName}</p>
        )}
      </div>

      <div className="title-4 space-y-4 p-4">
        <div className="flex items-center">
          <FaCheckCircle className="mr-2 inline-block text-green-700" />
          <p>Hành lý xách tay: {data.ticketClass.luggageAllowance}</p>
        </div>

        {data.ticketClass.checkedBaggageAllowance !== "PAY FEE" ? (
          <div className="flex items-center">
            <FaCheckCircle className="mr-2 inline-block text-green-700" />
            <p>Hành lý ký gửi: {data.ticketClass.checkedBaggageAllowance}</p>
          </div>
        ) : (
          <div className="flex items-center">
            <FaTimesCircle className="mr-2 inline-block text-red-700" />
            <p>Không bao gồm hành lý ký gửi</p>
          </div>
        )}

        <div className="flex items-center">
          <FaCheckCircle className="mr-2 inline-block text-green-700" />
          <p>
            Hoàn/huỷ trước giờ khởi hành:{" "}
            {(data.ticketClass.refundFeeBefore * 1000).toLocaleString()} VND
          </p>
        </div>

        <div className="flex items-center">
          <FaCheckCircle className="mr-2 inline-block text-green-700" />
          <p>
            Hoàn/huỷ sau giờ khởi hành:{" "}
            {(data.ticketClass.refundFeeAfter * 1000).toLocaleString()} VND
          </p>
        </div>

        {data.ticketClass.changeFeeBefore > 0 &&
        data.ticketClass.changeFeeAfter > 0 ? (
          <>
            <div className="flex items-center">
              <FaCheckCircle className="mr-2 inline-block text-green-700" />
              <p>
                Thay đổi trước giờ khởi hành:{" "}
                {(data.ticketClass.changeFeeBefore * 1000).toLocaleString()} VND
              </p>
            </div>

            <div className="flex items-center">
              <FaCheckCircle className="mr-2 inline-block text-green-700" />
              <p>
                Thay đổi sau giờ khởi hành:{" "}
                {(data.ticketClass.changeFeeAfter * 1000).toLocaleString()} VND
              </p>
            </div>
          </>
        ) : (
          <div className="flex items-center">
            <FaCheckCircle className="mr-2 inline-block text-green-700" />
            <p>Thay đổi trước/sau giờ khởi hành miễn phí.</p>
          </div>
        )}

        {data.ticketClass.isSeatSelectionFree ? (
          <div className="flex items-center">
            <FaCheckCircle className="mr-2 inline-block text-green-700" />
            <p>Chọn ghế ngồi miễn phí</p>
          </div>
        ) : (
          <div className="flex items-center">
            <FaTimesCircle className="mr-2 inline-block text-red-700" />
            <p>Chọn ghế ngồi mất phí</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default TicketClassDetails;
