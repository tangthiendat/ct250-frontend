import { FaCheckCircle } from "react-icons/fa";
import useSearchData from "../../hooks/useSearchData";
import { setDepartureDate } from "../../../../redux/slices/flightSearchSlice";

interface AbleCellProps {
  cell: {
    date: string;
    price: number;
  };
  calculateHeight: (price: number) => number;
}

const AbleCell: React.FC<AbleCellProps> = ({ cell, calculateHeight }) => {
  const { flightSearch: data, dispatch } = useSearchData();
  const choosenDate = data.departureDate.split("-").reverse().join("/");
  // console.log(choosenDate);

  return (
    <div className="flex h-44 flex-col items-center justify-end rounded-lg text-[10px] transition-all duration-500 md:text-sm">
      <div
        className={`${choosenDate === cell.date ? "bg-blue-900 text-white" : "bg-blue-300/60"} w-[90%] cursor-pointer rounded-md px-0 pb-1 text-center md:px-1`}
        style={{
          paddingTop: calculateHeight(cell.price),
        }}
        onClick={() =>
          dispatch(setDepartureDate(cell.date.split("/").reverse().join("-")))
        }
      >
        <p className="text-price text-balance font-semibold">
          {cell.price.toLocaleString()} VND
        </p>
      </div>
      <p
        className={`${choosenDate === cell.date ? "font-bold text-blue-900" : "font-normal text-black"} flex items-center justify-between gap-2 text-balance text-center`}
      >
        <div className="hidden sm:flex">
          {choosenDate === cell.date && <FaCheckCircle />}
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
