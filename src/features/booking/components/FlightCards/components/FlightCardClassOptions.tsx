import { MdExpandMore } from "react-icons/md";
import { useFlightCard } from "../../../../../context/FlightCardContext";
import { IFlightSchedule, TicketClass } from "../../../../../interfaces";

interface FlightCardClassOptionsProps {
  flightCardData: IFlightSchedule;
}

const FlightCardClassOptions: React.FC<FlightCardClassOptionsProps> = ({
  flightCardData,
}) => {
  const availableEconomySeats = flightCardData.seatAvailability.filter(
    (seatAvailability) =>
      seatAvailability.seat.ticketClass === TicketClass.ECONOMY &&
      seatAvailability.status === "AVAILABLE",
  ).length;
  const availableBusinessSeats = flightCardData.seatAvailability.filter(
    (seatAvailability) =>
      seatAvailability.seat.ticketClass === TicketClass.BUSINESS &&
      seatAvailability.status === "AVAILABLE",
  ).length;

  const { selectedTicketClassOption, setSelectedTicketClassOption } =
    useFlightCard();

  const showEconomyClass = selectedTicketClassOption === TicketClass.ECONOMY;
  const showBusinessClass = selectedTicketClassOption === TicketClass.BUSINESS;

  return (
    <>
      <div
        className="relative flex-1 cursor-pointer bg-green-700"
        onClick={() => {
          if (!showEconomyClass) {
            setSelectedTicketClassOption(TicketClass.ECONOMY);
          } else {
            setSelectedTicketClassOption(undefined);
          }
        }}
      >
        <div className="flex flex-col items-center py-2 text-white">
          <div className="absolute -top-[24px] rounded-t-md bg-green-900 px-2 py-1">
            <p className="text-xs">{`Còn ${availableEconomySeats} chỗ`}</p>
          </div>

          <p className="font-bold">Economy</p>

          <div className="my-2 flex flex-col items-center">
            <p>từ</p>
            <p className="text-xl font-bold">
              {flightCardData.flightPricing[0].ticketPrice.toLocaleString()}
            </p>
            <p>VND</p>
          </div>

          <MdExpandMore
            className={`${showEconomyClass ? "rotate-180 text-3xl" : "rotate-0"} transform text-white duration-500`}
          />
        </div>
      </div>

      <div
        className={`${showBusinessClass || showEconomyClass ? "rounded-tr-lg" : "rounded-r-lg"} relative flex-1 cursor-pointer bg-blue-800 transition-all duration-500`}
        onClick={() => {
          if (!showBusinessClass) {
            setSelectedTicketClassOption(TicketClass.BUSINESS);
          } else {
            setSelectedTicketClassOption(undefined);
          }
        }}
      >
        <div className="flex flex-col items-center py-2 text-white">
          <div className="absolute -top-[24px] rounded-t-md bg-blue-900 px-2 py-1">
            <p className="text-xs">{`Còn ${availableBusinessSeats} chỗ`}</p>
          </div>
          <p className="font-bold">Business</p>

          <div className="my-2 flex flex-col items-center">
            <p>từ</p>
            {/* props */}
            <p className="text-xl font-bold">
              {flightCardData.flightPricing[1].ticketPrice.toLocaleString()}
            </p>
            <p>VND</p>
          </div>

          <MdExpandMore
            className={`${showBusinessClass ? "rotate-180 text-3xl" : "rotate-0"} transform text-white duration-500`}
          />
        </div>
      </div>
    </>
  );
};

export default FlightCardClassOptions;
