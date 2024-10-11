import { FaCheckCircle } from "react-icons/fa";
import { IFlightOverview } from "../../../../interfaces";
import {
  setDepartureDate,
  setReturnDate,
} from "../../../../redux/slices/flightSearchSlice";
import useSearchData from "../../hooks/useSearchData";
import { useParams } from "react-router-dom";

interface AbleCellProps {
  cell: IFlightOverview;
  calculateHeight: (price: number) => number;
}

const AbleCell: React.FC<AbleCellProps> = ({ cell, calculateHeight }) => {
  const { flightSearch: data, dispatch } = useSearchData();
  const flightIndex: number = Number(
    useParams<{ flightIndex: string }>().flightIndex,
  );
  let chosenDate: string = "";
  if (flightIndex === 0) {
    chosenDate = data.departureDate;
  } else if (flightIndex === 1) {
    chosenDate = data.flightRange[1];
  }

  return (
    <div className="flex h-44 flex-col items-center justify-end rounded-lg text-[10px] transition-all duration-500 md:text-sm">
      <div
        className={`${chosenDate === cell.date ? "bg-blue-900 text-white" : "bg-blue-300/60"} w-[90%] cursor-pointer rounded-md px-0 pb-1 text-center md:px-1`}
        style={{
          paddingTop: calculateHeight(cell.minPriceOfDay),
        }}
        onClick={() => {
          if (flightIndex === 0) {
            dispatch(setDepartureDate(cell.date));
          } else if (flightIndex === 1) {
            dispatch(setReturnDate(cell.date));
          }
        }}
      >
        <p className="text-price text-balance font-semibold">
          {cell.minPriceOfDay.toLocaleString()} VND
        </p>
      </div>
      <p
        className={`${chosenDate === cell.date ? "font-bold text-blue-900" : "font-normal text-black"} flex items-center justify-between gap-2 text-balance text-center`}
      >
        <div className="hidden sm:flex">
          {chosenDate === cell.date && <FaCheckCircle />}
        </div>
        {new Date(cell.date).toLocaleDateString("vi-VN", {
          weekday: "narrow",
          day: "2-digit",
          month: "2-digit",
        })}
      </p>
    </div>
  );
};

export default AbleCell;
