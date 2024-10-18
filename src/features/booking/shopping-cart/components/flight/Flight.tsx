import { Divider } from "antd";
import { MdExpandLess } from "react-icons/md";
import { IBookingFlight } from "../../../../../interfaces";
import CityAndTime from "./components/CityAndTime";
import FlightIndicator from "./components/FlightIndicator";
import FlightInfo from "./components/FlightInfo";
import TicketClassDetails from "./components/ClassDetail";

interface FlightProps {
  data: IBookingFlight;
  showExpand: boolean;
  setShowExpand: React.Dispatch<React.SetStateAction<boolean>>;
}

const Flight: React.FC<FlightProps> = ({ data, showExpand, setShowExpand }) => {
  return (
    <>
      <div
        className={`${showExpand ? "h-[500px]" : "h-[150px]"} relative z-10 overflow-hidden rounded-lg p-2 shadow-[0px_0px_5px_1px_rgba(0,0,0,0.24)] transition-all duration-500`}
      >
        <CityAndTime data={data} />

        <Divider type="horizontal" className="mb-5 mt-3 bg-slate-300" />

        <div className="flex justify-between">
          <FlightInfo
            data={data}
            showExpand={showExpand}
            setShowExpand={setShowExpand}
          />
        </div>

        <div className="mt-2 flex h-[340px] items-start gap-3 py-6">
          <FlightIndicator data={data} />

          <Divider type="vertical" className="h-full bg-slate-400" />

          <TicketClassDetails data={data} />
        </div>

        <div
          className={`${showExpand ? "visible opacity-100" : "invisible opacity-0"} absolute bottom-0 left-0 right-0 flex cursor-pointer items-center justify-center border-t-[1px] border-t-black/10 bg-slate-100 py-2 transition-all duration-500 hover:bg-slate-200/40`}
          onClick={() => setShowExpand(false)}
        >
          <MdExpandLess />
        </div>
      </div>
    </>
  );
};

export default Flight;
