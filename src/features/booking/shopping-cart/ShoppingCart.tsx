import { useState } from "react";
import { useAppSelector } from "../../../redux/hooks";
import Banner from "../common/Banner";
import Flight from "./components/flight/Flight";
import Price from "./components/flight/components/price/Price";

const ShoppingCart: React.FC = () => {
  const departData = useAppSelector((state) => state.booking.bookingFlights[0]);
  const returnData =
    useAppSelector((state) => state.booking.bookingFlights[1]) || null;

  const [showExpandDepart, setShowExpandDepart] = useState<boolean>(false);
  const [showExpandReturn, setShowExpandReturn] = useState<boolean>(false);

  return (
    <>
      <Banner title="Hành trình của bạn" />

      <div className="mx-auto mt-5 max-w-screen-md px-2 transition-all duration-1000 xl:max-w-screen-lg">
        <p className="text-heading-2 text-center text-blue-900">
          Chuyến bay của bạn
        </p>

        <div className="space-y-4">
          <Flight
            data={departData}
            showExpand={showExpandDepart}
            setShowExpand={setShowExpandDepart}
          />

          {returnData && (
            <Flight
              data={returnData}
              showExpand={showExpandReturn}
              setShowExpand={setShowExpandReturn}
            />
          )}
        </div>

        <Price />
      </div>
    </>
  );
};

export default ShoppingCart;
