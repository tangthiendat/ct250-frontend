import { Modal } from "antd";
import { IBookingFlight } from "../../../../../../interfaces";
import { useCalculatePrice } from "../hooks/useCalculatePrice";
import { useState } from "react";
import { set } from "date-fns";

interface PriceProps {
  departData: IBookingFlight;
  returnData?: IBookingFlight;
}

const Price: React.FC<PriceProps> = ({ departData, returnData }) => {
  const { totalPrice } = useCalculatePrice(departData, returnData);
  const [showModal, setShowModal] = useState<boolean>(false);

  return (
    <>
      <div className="mt-3 flex flex-col items-end text-blue-700">
        <p className="title-4 text-blue-800">
          Tổng giá cho các chuyến bay: {totalPrice.toLocaleString()} VND
        </p>

        <p className="text-heading-3 mt-4 text-blue-900">
          Tổng giá: {totalPrice.toLocaleString()} VND
        </p>

        <p className="title-4">
          Giá khứ hồi cho tất cả các hành khách (đã bao gồm thuế, phí và chiết
          khấu).&nbsp;
          <span
            className="cursor-pointer text-blue-900 underline"
            onClick={() => setShowModal(true)}
          >
            Xem chi tiết giá.
          </span>
        </p>

        <Modal
          title="Chi tiết giá"
          open={showModal}
          onCancel={() => setShowModal(false)}
          footer={null}
        >
          <p>Content</p>
        </Modal>
      </div>
    </>
  );
};

export default Price;
