interface AbleCellProps {
  cell: {
    date: string;
    price: number;
  };
  choosenDate: string;
  calculateHeight: (price: number) => number;
}

const AbleCell: React.FC<AbleCellProps> = ({
  cell,
  choosenDate,
  calculateHeight,
}) => {
  return (
    <div className="flex h-44 flex-col items-center justify-end text-[10px] font-bold md:text-sm">
      <div
        className={`${choosenDate === cell.date ? "bg-green-500" : "bg-blue-500"} w-[90%] cursor-pointer rounded-md px-0 text-center md:px-1`}
        style={{
          paddingTop: calculateHeight(cell.price),
        }}
        // onClick={() => handleDateChange(cell.date)}
      >
        <p className="text-price text-balance text-white">
          {cell.price.toLocaleString()} VND
        </p>
      </div>
      <p className="text-balance text-center text-black">
        {new Date(cell.date.split("/").reverse().join("/")).toLocaleDateString(
          "vi-VN",
          {
            weekday: "narrow",
            day: "2-digit",
          },
        )}
      </p>
    </div>
  );
};

export default AbleCell;
