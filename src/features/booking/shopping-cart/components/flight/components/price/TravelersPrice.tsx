import { Divider } from "antd";
import { useState } from "react";
import { useCalculatePrice } from "../../hooks/useCalculatePrice";
import Traveler from "./Traveler";
import { PassengerType } from "../../../../../../../interfaces";

const TravelersPrice: React.FC = () => {
  const [showAdultExpand, setShowAdultExpand] = useState<boolean>(false);
  const [showChildExpand, setShowChildExpand] = useState<boolean>(false);
  const [showInfantExpand, setShowInfantExpand] = useState<boolean>(false);

  const { adult, children, infant, adultPrice, childrenPrice, infantPrice } =
    useCalculatePrice();
  return (
    <>
      <Traveler
        type={PassengerType.ADULT}
        numberOfTraveler={adult}
        pricing={adultPrice}
        showExpand={showAdultExpand}
        setShowExpand={setShowAdultExpand}
      />

      {children > 0 && (
        <>
          <Divider type="horizontal" className="my-1 bg-slate-400" />
          <Traveler
            type={PassengerType.CHILD}
            numberOfTraveler={children}
            pricing={childrenPrice}
            showExpand={showChildExpand}
            setShowExpand={setShowChildExpand}
          />
        </>
      )}

      {infant > 0 && (
        <>
          <Divider type="horizontal" className="my-1 bg-slate-400" />
          <Traveler
            type={PassengerType.INFANT}
            numberOfTraveler={infant}
            pricing={infantPrice}
            showExpand={showInfantExpand}
            setShowExpand={setShowInfantExpand}
          />
        </>
      )}
    </>
  );
};

export default TravelersPrice;
