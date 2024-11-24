import { MdExpandMore, MdNotInterested } from "react-icons/md";
import { useFlightCard } from "../../../../../../context/FlightCardContext";
import { IFlightSchedule, TicketClassName } from "../../../../../../interfaces";
import useSearchData from "../../../hooks/useSearchData";
import { getTotalTicketPrice, isValidCoupon } from "../../../../../../utils";
import { useAppSelector } from "../../../../../../redux/hooks";

interface FlightCardClassOptionsProps {
  flightCardData: IFlightSchedule;
}

const FlightCardClassOptions: React.FC<FlightCardClassOptionsProps> = ({
  flightCardData,
}) => {
  const { flightSearch } = useSearchData();
  const coupon = useAppSelector((state) => state.coupon);
  const totalPassengers = Object.values(flightSearch.passengers).reduce(
    (totalPassenger, quantity) => totalPassenger + quantity,
    0,
  );
  const availableEconomySeats = flightCardData.seatAvailability.filter(
    (seatAvailability) =>
      seatAvailability.seat.ticketClass === TicketClassName.ECONOMY &&
      seatAvailability.status === "AVAILABLE",
  ).length;
  const availableBusinessSeats = flightCardData.seatAvailability.filter(
    (seatAvailability) =>
      seatAvailability.seat.ticketClass === TicketClassName.BUSINESS &&
      seatAvailability.status === "AVAILABLE",
  ).length;

  const { selectedTicketClassOption, setSelectedTicketClassOption } =
    useFlightCard();

  const hasCoupon: boolean = !!coupon && isValidCoupon(coupon);
  const economyTicketPrice = getTotalTicketPrice(
    flightCardData,
    flightSearch.passengers,
    TicketClassName.ECONOMY,
  );
  const actualEconomyTicketPrice = getTotalTicketPrice(
    flightCardData,
    flightSearch.passengers,
    TicketClassName.ECONOMY,
    coupon,
  );

  const businessTicketPrice = getTotalTicketPrice(
    flightCardData,
    flightSearch.passengers,
    TicketClassName.BUSINESS,
  );
  const actualBusinessTicketPrice = getTotalTicketPrice(
    flightCardData,
    flightSearch.passengers,
    TicketClassName.BUSINESS,
    coupon,
  );

  const showEconomyClass =
    selectedTicketClassOption === TicketClassName.ECONOMY;
  const showBusinessClass =
    selectedTicketClassOption === TicketClassName.BUSINESS;

  return (
    <>
      {availableEconomySeats > 0 && availableEconomySeats >= totalPassengers ? (
        <div
          className="relative flex-1 cursor-pointer bg-green-700"
          onClick={() => {
            if (!showEconomyClass) {
              setSelectedTicketClassOption(TicketClassName.ECONOMY);
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
              <p
                className={`text-xl font-bold ${hasCoupon ? "line-through" : ""}`}
              >
                {economyTicketPrice.toLocaleString()}
              </p>
              <p>VND</p>

              {hasCoupon && (
                <p className="bg-green-800 p-1 text-xl font-bold">
                  {actualEconomyTicketPrice.toLocaleString()}
                </p>
              )}
            </div>

            <MdExpandMore
              className={`${showEconomyClass ? "rotate-180 text-3xl" : "rotate-0"} transform text-white duration-500`}
            />
          </div>
        </div>
      ) : (
        <div className="relative flex flex-1 cursor-not-allowed items-center justify-center bg-gray-300">
          <div className="flex flex-col items-center space-y-3 py-6 text-black opacity-70">
            <p className="font-bold text-green-800">Economy</p>

            <MdNotInterested className="text-3xl" />

            <p className="text-sm">Không còn chỗ</p>
          </div>
        </div>
      )}

      {availableBusinessSeats > 0 &&
      availableBusinessSeats >= totalPassengers ? (
        <div
          className="relative flex-1 cursor-pointer bg-blue-800"
          onClick={() => {
            if (!showBusinessClass) {
              setSelectedTicketClassOption(TicketClassName.BUSINESS);
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
              <p
                className={`text-xl font-bold ${hasCoupon ? "line-through" : ""}`}
              >
                {businessTicketPrice.toLocaleString()}
              </p>
              <p>VND</p>
              {hasCoupon && (
                <p className="bg-blue-900 p-1 text-xl font-bold">
                  {actualBusinessTicketPrice.toLocaleString()}
                </p>
              )}
            </div>

            <MdExpandMore
              className={`${showBusinessClass ? "rotate-180 text-3xl" : "rotate-0"} transform text-white duration-500`}
            />
          </div>
        </div>
      ) : (
        <div className="relative flex flex-1 cursor-not-allowed items-center justify-center bg-gray-300">
          <div className="flex flex-col items-center space-y-3 py-6 text-black opacity-70">
            <p className="font-bold text-blue-800">Business</p>

            <MdNotInterested className="text-3xl" />

            <p className="text-sm">Không còn chỗ</p>
          </div>
        </div>
      )}
    </>
  );
};

export default FlightCardClassOptions;
