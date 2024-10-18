import { useState } from "react";
import { useCalculatePrice } from "../../hooks/useCalculatePrice";
import PricingDetail from "./PricingDetail";

const Price: React.FC = () => {
  const { totalPrice } = useCalculatePrice();
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

        <PricingDetail showModal={showModal} setShowModal={setShowModal} />
      </div>
    </>
  );
};

export default Price;
