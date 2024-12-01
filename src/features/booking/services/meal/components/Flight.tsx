import { IBookingFlight } from "../../../../../interfaces";
import usePassengersData from "../../../traveler/hooks/usePassengersData";
import AddMeal from "./AddMeal";

interface FlightProps {
  type: string;
  flightData: IBookingFlight;
  totalPrice: number;
  setTotalPrice: React.Dispatch<React.SetStateAction<number>>;
}

const Flight: React.FC<FlightProps> = ({
  type,
  flightData,
  totalPrice,
  setTotalPrice,
}) => {
  const { passengers } = usePassengersData();

  return (
    <div className="rounded-lg bg-slate-100 px-10 pb-4 pt-2 shadow-[0px_0px_5px_1px_rgba(0,0,0,0.24)]">
      <div className="text-heading-3 mb-4 text-center">
        <p className="text-blue-900">Chọn món ăn cho chuyến bay</p>
        <p className="text-green-700">
          {flightData.flight.route.departureAirport.cityName} đến{" "}
          {flightData.flight.route.arrivalAirport.cityName}
        </p>
      </div>

      <div className="rounded-md p-2">
        <AddMeal
          type={type}
          //   flightData={flightData}
          passengers={passengers}
          setTotalPrice={setTotalPrice}
        />
      </div>

      {totalPrice > 0 && (
        <div className="mt-3 flex flex-col items-end">
          <p className="text-heading-3 text-sm text-blue-800">
            Tổng:{" "}
            <span className="text-heading-3 text-blue-800">
              {totalPrice.toLocaleString()} VND
            </span>
          </p>
        </div>
      )}
    </div>
  );
};

export default Flight;