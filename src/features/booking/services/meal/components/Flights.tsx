import { useState } from "react";
import { useAppSelector } from "../../../../../redux/hooks";
import Flight from "./Flight";
import { useNavigate } from "react-router-dom";

const Flights: React.FC = () => {
  const departureData = useAppSelector(
    (state) => state.booking.bookingFlights[0],
  );
  const arrivalData = useAppSelector(
    (state) => state.booking.bookingFlights[1],
  );
  const [totalDepartFlightMealPrice, setTotalDepartFlightMealPrice] =
    useState<number>(0);
  const [totalArrivalFlightMealPrice, setTotalArrivalFlightMealPrice] =
    useState<number>(0);
  const totalPrice =
    (totalDepartFlightMealPrice || 0) + (totalArrivalFlightMealPrice || 0);
  const navigate = useNavigate();

  return (
    <div className="mx-auto mt-5 max-w-screen-md px-2 transition-all duration-1000 xl:max-w-screen-lg">
      <div className="space-y-8">
        <Flight
          type="departure"
          flightData={departureData}
          totalPrice={totalDepartFlightMealPrice}
          setTotalPrice={setTotalDepartFlightMealPrice}
        />

        {arrivalData && (
          <Flight
            type="arrival"
            flightData={arrivalData}
            totalPrice={totalArrivalFlightMealPrice}
            setTotalPrice={setTotalArrivalFlightMealPrice}
          />
        )}
      </div>

      {totalPrice > 0 && (
        <div className="mt-3 flex flex-col items-end">
          <p className="text-heading-3 text-base text-blue-800">
            Tổng giá cho các món ăn/đồ uống được chọn:{" "}
            <span className="text-heading-3 text-xl text-blue-800">
              {totalPrice.toLocaleString()} VND
            </span>
          </p>
        </div>
      )}

      <div className="mt-3 flex flex-col items-end">
        <button
          className="text-heading-3 rounded-lg bg-green-700 px-6 py-2 text-xl text-white"
          onClick={() => navigate("/book/shopping-cart")}
        >
          Hoàn tất
        </button>
      </div>
    </div>
  );
};

export default Flights;