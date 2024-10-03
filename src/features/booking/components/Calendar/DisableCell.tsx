interface DisableCellProps {
  cell: {
    availableFlight: boolean;
    date: string;
  };
}

const DisableCell: React.FC<DisableCellProps> = ({ cell }) => {
  return (
    <div className="flex h-44 flex-col items-center justify-end text-[10px] md:text-sm">
      <div className="w-[90%] text-balance rounded-md bg-slate-400/60 pb-1 pt-3 text-center font-normal md:px-1">
        {new Date(cell.date.split("/").reverse().join("/")) < new Date() ? (
          <p>Đã qua</p>
        ) : (
          <p>Không có chuyến bay</p>
        )}
      </div>
      <p className="text-balance text-center font-normal text-black">
        {new Date(cell.date.split("/").reverse().join("/")).toLocaleDateString(
          "vi-VN",
          {
            weekday: "narrow",
            day: "2-digit",
            month: "2-digit",
          },
        )}
      </p>
    </div>
  );
};

export default DisableCell;
