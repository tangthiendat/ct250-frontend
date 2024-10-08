import { Button } from "antd";
import { useState } from "react";
import ClassOption from "./EconomyClass";
import { IFlightSchedule } from "../../../../../../interfaces";

interface EconomyClassOptionsProps {
  show: boolean;
  flightCardData: IFlightSchedule;
}

const detailsClassEconomy = [
  {
    price: 1565000,
    name: "Economy",
    features: {
      handBaggage: 7,
      checkedBaggage: 0,
      refundBefore: 450000,
      refundAfter: 600000,
      changeBefore: 450000,
      changeAfter: 600000,
      freeSeatSelection: false,
    },
  },
  // {
  //   price: 3050000,
  //   name: "Economy Flex",
  //   features: {
  //     handBaggage: 7,
  //     checkedBaggage: 20,
  //     refundBefore: 300000,
  //     refundAfter: 300000,
  //     changeBefore: 0,
  //     changeAfter: 0,
  //     freeSeatSelection: true,
  //   },
  // },
];

const EconomyClassOptions: React.FC<EconomyClassOptionsProps> = ({
  show,
  flightCardData,
}) => {
  const [choosenClass, setChoosenClass] = useState<string>("");

  return (
    <div
      className={`${show ? "translate-y-0 opacity-100" : "invisible -translate-y-full opacity-0"} absolute left-0 right-0 flex flex-col items-center py-6 transition-all duration-500`}
    >
      <p className="text-xl text-green-800">Chọn hạng vé</p>
      <p className="text-green-800">Tiện ích với mỗi hành khách</p>

      <div className="my-4 flex gap-4">
        {detailsClassEconomy.map((item, index) => (
          <ClassOption
            key={index}
            price={flightCardData.flightPricing[0].ticketPrice}
            name={item.name}
            features={item.features}
            choosenClass={choosenClass}
            setChoosenClass={setChoosenClass}
          />
        ))}
      </div>

      <p className="text-green-700">
        {choosenClass === "Economy"
          ? "Bạn đã chọn hạng vé Economy"
          : choosenClass === "Economy Flex"
            ? "Bạn đã chọn hạng vé Economy Flex"
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

export default EconomyClassOptions;
