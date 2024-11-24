import BaggageDetail from "./components/BaggageDetail";

const Baggage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-between overflow-hidden rounded-lg shadow-[0px_0px_5px_1px_rgba(0,0,0,0.24)] transition-all duration-200">
      <div className="flex w-full cursor-default border-b-[1px] border-slate-400">
        <div className="flex-1 rounded-tr-lg">
          <img
            className="mx-auto h-[200px] w-full object-cover"
            src="/pages/home/services/hanh_ly.jpg"
            alt="hanh_ly"
          />
        </div>

        <div className="flex-1">
          <div className="text-heading-3 flex h-full flex-col justify-between p-5 text-green-700">
            <div>
              <p>Mua thêm hành lý</p>
              <p className="title-4 mt-3">
                Quý khách cần thêm hành lý ký gửi cho chuyến bay? Mua ngay để
                được hưởng giá tốt nhất.
              </p>
            </div>
          </div>
        </div>
      </div>

      <BaggageDetail />
    </div>
  );
};

export default Baggage;
