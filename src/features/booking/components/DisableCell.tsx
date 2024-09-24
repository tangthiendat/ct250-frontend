interface DisableCellProps {
  cell: {
    availableFlight: boolean;
    date: string;
  };
}

const DisableCell: React.FC<DisableCellProps> = ({ cell }) => {
  return (
    <div className="flex h-44 flex-col items-center justify-end text-[10px] font-bold md:text-sm">
      <div
        className="flex w-[90%] items-center justify-center text-balance rounded-md bg-gray-300 px-0 text-center text-red-500 md:px-1"
        style={{
          height: "40%",
        }}
      >
        {cell.availableFlight ? <p>Đã hết vé</p> : <p>Không có chuyến bay</p>}
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

export default DisableCell;
