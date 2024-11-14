import { useState } from "react";
import { IBookingFlight } from "../../../../../../../interfaces";
import PricingDetail from "./PricingDetail";

interface PriceProps {
  returnData: IBookingFlight;
  totalBookingPrice: number;
}

const Price: React.FC<PriceProps> = ({ returnData, totalBookingPrice }) => {
  const [showModal, setShowModal] = useState<boolean>(false);

  return (
    <>
      <div className="flex flex-col items-end text-blue-700">
        <p className="text-heading-3 mt-4 text-blue-900">
          Tổng giá: {totalBookingPrice.toLocaleString()} VND
        </p>

        <p className="title-4">
          Giá {returnData ? "khứ hồi" : "một chiều"} cho tất cả các hành khách
          (đã bao gồm thuế, phí và chiết khấu).&nbsp;
          <span
            className="cursor-pointer text-blue-900 underline"
            onClick={() => setShowModal(true)}
          >
            Xem chi tiết giá.
          </span>
        </p>

        <PricingDetail
          showModal={showModal}
          setShowModal={setShowModal}
          totalBookingPrice={totalBookingPrice}
        />
      </div>
    </>
  );
};

export default Price;
