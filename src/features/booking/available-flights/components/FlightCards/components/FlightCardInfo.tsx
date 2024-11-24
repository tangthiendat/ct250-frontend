import { Divider } from "antd";
import { useState } from "react";
import { IFlightSchedule } from "../../../../../../interfaces";
import FlightDetail from "./FlightDetail";
import FlightDetailOverview from "./FlightDetailOverview";
import FlightIndicator from "./FlightIndicator";

interface FlightCardInfoProps {
  flightCardData: IFlightSchedule;
}

const FlightCardInfo: React.FC<FlightCardInfoProps> = ({ flightCardData }) => {
  const [showDetail, setShowDetail] = useState<boolean>(false);

  return (
    <>
      <div className="flex flex-1 flex-col items-center justify-center">
        <div className="flex w-[90%] flex-row items-center justify-between">
          <FlightIndicator flightCardData={flightCardData} />
        </div>
      </div>

      <Divider type="vertical" className="h-[60%] bg-slate-400" />

      <div className="flex flex-1 items-center justify-center text-sm">
        <div className="flex w-[90%] flex-col items-start justify-between">
          <FlightDetail
            flightCardData={flightCardData}
            setShowDetail={setShowDetail}
          />
        </div>
      </div>

      <FlightDetailOverview
        flightData={flightCardData}
        open={showDetail}
        setOpen={setShowDetail}
      />
    </>
  );
};

export default FlightCardInfo;
