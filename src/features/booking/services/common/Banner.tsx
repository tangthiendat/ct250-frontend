const Banner: React.FC<{
  type: string;
}> = ({ type }) => {
  return (
    <div className="relative">
      <img
        src={`/pages/home/services/${
          type === "baggage"
            ? "hanh_ly.jpg"
            : type === "seat"
              ? "cho_ngoi.jpg"
              : "suat_an.jpg"
        }`}
        alt="banner?"
        className="-z-10 h-[300px] w-full object-cover"
      />

      <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 transform flex-col items-center justify-center text-balance rounded-md bg-white px-12 py-4 text-center">
        <p className="text-heading-2 m-0 text-green-700">
          {type === "baggage"
            ? "Mua thêm hành lý"
            : type === "seat"
              ? "Chọn chỗ ngồi"
              : "Chọn suất ăn, đồ uống"}
        </p>
      </div>
    </div>
  );
};

export default Banner;
