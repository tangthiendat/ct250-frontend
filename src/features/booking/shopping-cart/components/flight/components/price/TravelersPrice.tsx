import { Divider } from "antd";
import { useState } from "react";
import { useCalculatePrice } from "../../hooks/useCalculatePrice";
import Traveler from "./Traveler";

const TravelersPrice: React.FC = () => {
  const [showAdultExpand, setShowAdultExpand] = useState<boolean>(false);
  const [showChildExpand, setShowChildExpand] = useState<boolean>(false);
  const [showInfantExpand, setShowInfantExpand] = useState<boolean>(false);

  const { adult, children, infant, adultPrice, childrenPrice, infantPrice } =
    useCalculatePrice();
  return (
    <>
      <Traveler
        type="adult"
        numberOfTraveler={adult}
        pricing={adultPrice}
        showExpand={showAdultExpand}
        setShowExpand={setShowAdultExpand}
      />

      {children > 0 && (
        <>
          <Divider type="horizontal" className="my-1 bg-slate-400" />
          <Traveler
            type="children"
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
            type="infant"
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
