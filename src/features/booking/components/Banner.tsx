interface BannerProps {
  data: {
    destAirport: string;
  };
}

const Banner: React.FC<BannerProps> = ({ data }) => {
  return (
    <div className="relative">
      <img
        src={`/flight-routes/${data.destAirport.split(" - ")[1]}.jpg`}
        alt={data.destAirport.split(" - ")[0]}
        className="-z-10 h-[400px] w-full object-cover"
      />

      <div className="absolute left-1/2 top-1/3 flex -translate-x-1/2 transform flex-col items-center justify-center text-balance rounded-md bg-white px-12 py-4 text-center">
        <p className="text-heading-2 uppercase text-blue-800">
          Vui lòng chọn chuyến bay đến
        </p>

        <p className="text-heading-2 mt-2 text-green-700">
          {data.destAirport.split(" - ")[0]}
        </p>
      </div>
    </div>
  );
};

export default Banner;
