import { FaRegClock } from "react-icons/fa";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { PiAirplaneInFlightFill } from "react-icons/pi";
import { IFlightSchedule } from "../../../../../../interfaces";
import { getFormattedDuration } from "../../../../../../utils";

interface FlightDetailProps {
  flightCardData: IFlightSchedule;
  setShowDetail: (showDetail: boolean) => void;
}

const FlightDetail: React.FC<FlightDetailProps> = ({
  flightCardData,
  setShowDetail,
}) => {
  const formattedDuration = getFormattedDuration(flightCardData.route.duration);

  return (
    <>
      <p className="flex items-center justify-center">
        <div>
          <FaRegClock className="mr-2 text-xs text-blue-800" />
        </div>
        <p className="title-4">
          Thời gian bay:{" "}
          <span className="font-semibold">{formattedDuration}</span>
        </p>
      </p>

      <p className="flex items-center justify-center">
        <div>
          <PiAirplaneInFlightFill className="mr-2 text-xs text-blue-800" />
        </div>
        <p className="title-4">
          <span className="font-semibold">{flightCardData.flightId}</span> được
          vận hành bởi DaViKa Airways.
        </p>
      </p>

      <p className="flex cursor-pointer items-center justify-center">
        <div>
          <IoIosInformationCircleOutline className="mr-2 text-xs text-blue-800" />
        </div>
        <p className="title-4 underline" onClick={() => setShowDetail(true)}>
          Xem chi tiết chuyến bay
        </p>
      </p>
    </>
  );
};

export default FlightDetail;
