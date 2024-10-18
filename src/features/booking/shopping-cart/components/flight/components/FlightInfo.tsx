import { MdExpandMore } from "react-icons/md";
import { IBookingFlight, TicketClassName } from "../../../../../../interfaces";
import FlightCardInfo from "../../../../available-flights/components/FlightCards/components/FlightCardInfo";

interface FlightInfoProps {
  data: IBookingFlight;
  showExpand: boolean;
  setShowExpand: React.Dispatch<React.SetStateAction<boolean>>;
}

const FlightInfo: React.FC<FlightInfoProps> = ({
  data,
  showExpand,
  setShowExpand,
}) => {
  return (
    <>
      <div className="flex w-[60%] flex-col items-center justify-center md:flex-row">
        <FlightCardInfo flightCardData={data.flight} />
      </div>

      <div className="text-heading-3 self-center">
        {data.ticketClass.ticketClassName === TicketClassName.ECONOMY ? (
          <p className="text-green-800">{data.ticketClass.ticketClassName}</p>
        ) : (
          <p className="text-blue-800">{data.ticketClass.ticketClassName}</p>
        )}
      </div>

      <div
        className="flex cursor-pointer items-center"
        onClick={() => {
          setShowExpand(!showExpand);
        }}
      >
        <MdExpandMore
          className={`${
            data.ticketClass.ticketClassName === TicketClassName.ECONOMY
              ? "text-green-700"
              : "text-blue-700"
          } ${showExpand ? "rotate-0 text-3xl" : "-rotate-90"} w-7 transform duration-500`}
        />
      </div>
    </>
  );
};

export default FlightInfo;
