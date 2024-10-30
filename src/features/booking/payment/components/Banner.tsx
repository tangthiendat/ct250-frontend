const Banner: React.FC = () => {
  return (
    <div className="relative">
      <img
        src="/pages/payment/banner.jpg"
        alt="banner"
        className="-z-10 h-[300px] w-full object-cover"
      />

      <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 transform flex-col items-center justify-center text-balance rounded-md bg-white px-12 py-4 text-center">
        <p className="text-heading-2 m-0 text-green-700">Thanh toán</p>
      </div>
    </div>
  );
};

export default Banner;
