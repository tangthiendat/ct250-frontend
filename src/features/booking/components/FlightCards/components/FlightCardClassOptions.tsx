import { MdExpandMore } from "react-icons/md";
import { IFlightSchedule, TicketClass } from "../../../../../interfaces";
import { formatVietnameseCurrency } from "../../../../../utils";

interface FlightCardClassOptionsProps {
  flightCardData: IFlightSchedule;
  showEconomyClass: boolean;
  showBusinessClass: boolean;
  handleShowEconomyClass: () => void;
  handleShowBusinessClass: () => void;
  handleCloseDetailClass: () => void;
}

const FlightCardClassOptions: React.FC<FlightCardClassOptionsProps> = ({
  flightCardData,
  showEconomyClass,
  showBusinessClass,
  handleShowEconomyClass,
  handleShowBusinessClass,
  handleCloseDetailClass,
}) => {
  console.log(flightCardData.seatAvailability);
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
  return (
    <>
      <div
        className="relative flex-1 cursor-pointer bg-green-700"
        onClick={() => {
          if (showEconomyClass === false) {
            handleShowEconomyClass();
          } else {
            handleCloseDetailClass();
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
              {formatVietnameseCurrency(
                flightCardData.flightPricing[0].ticketPrice,
              )}
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
          if (showBusinessClass === false) {
            handleShowBusinessClass();
          } else {
            handleCloseDetailClass();
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
              {formatVietnameseCurrency(
                flightCardData.flightPricing[1].ticketPrice,
              )}
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
