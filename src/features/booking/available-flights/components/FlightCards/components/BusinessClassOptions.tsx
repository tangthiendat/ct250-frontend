import { useState } from "react";
import BusinessClass from "./BusinessClass";
import { Button } from "antd";
import { IFlightSchedule } from "../../../../../../interfaces";

interface BusinessClassOptionsProps {
  show: boolean;
  flightCardData: IFlightSchedule;
}

const detailsClassBusiness = [
  {
    price: 3565000,
    name: "Business",
    features: {
      handBaggagePiece: 2,
      handBaggage: 7,
      checkedBaggage: 40,
      refundBefore: 450000,
      refundAfter: 450000,
      changeBefore: 300000,
      changeAfter: 450000,
      freeSeatSelection: true,
    },
  },
  // {
  //   price: 6050000,
  //   name: "Business Flex",
  //   features: {
  //     handBaggagePiece: 2,
  //     handBaggage: 7,
  //     checkedBaggage: 40,
  //     refundBefore: 300000,
  //     refundAfter: 300000,
  //     changeBefore: 0,
  //     changeAfter: 0,
  //     freeSeatSelection: true,
  //   },
  // },
];

const BusinessClassOptions: React.FC<BusinessClassOptionsProps> = ({
  show,
  flightCardData,
}) => {
  const [choosenClass, setChoosenClass] = useState<string>("");

  return (
    <div
      className={`${show ? "translate-y-0 opacity-100" : "invisible -translate-y-full opacity-0"} absolute left-0 right-0 flex flex-col items-center py-6 transition-all duration-500`}
    >
      <p className="text-xl text-blue-800">Chọn hạng vé</p>
      <p className="text-blue-800">Tiện ích với mỗi hành khách</p>

      <div className="my-4 flex gap-4">
        {detailsClassBusiness.map((item, index) => (
          <BusinessClass
            key={index}
            price={flightCardData.flightPricing[1].ticketPrice}
            name={item.name}
            features={item.features}
            choosenClass={choosenClass}
            setChoosenClass={setChoosenClass}
          />
        ))}
      </div>

      <p className="text-blue-800">
        {choosenClass === "Business"
          ? "Bạn đã chọn hạng vé Business"
          : choosenClass === "Business Flex"
            ? "Bạn đã chọn hạng vé Business Flex"
            : "Vui lòng chọn giá vé để tiếp tục"}
      </p>

      <Button
        className="mt-5 bg-blue-600 p-5"
        type="primary"
        disabled={choosenClass === ""}
      >
        Xác nhận để tiếp tục
      </Button>
    </div>
  );
};

export default BusinessClassOptions;
