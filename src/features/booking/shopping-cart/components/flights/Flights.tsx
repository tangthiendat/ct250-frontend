import { useState } from "react";
import Flight from "./Flight";
import { IBookingFlight } from "../../../../../interfaces";

interface FlightsProps {
  departData: IBookingFlight;
  returnData?: IBookingFlight;
  totalBookingPrice: number;
}

const Flights: React.FC<FlightsProps> = ({
  departData,
  returnData,
  totalBookingPrice,
}) => {
  const [showExpandDepart, setShowExpandDepart] = useState<boolean>(false);
  const [showExpandReturn, setShowExpandReturn] = useState<boolean>(false);

  return (
    <>
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

        <div className="mt-3 flex flex-col items-end">
          <p className="text-heading-3 text-sm text-blue-800">
            Tổng giá cho các chuyến bay:{" "}
            <span className="text-heading-3 text-blue-800">
              {totalBookingPrice.toLocaleString()} VND
            </span>
          </p>
        </div>
      </div>
    </>
  );
};

export default Flights;
