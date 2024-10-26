const Services: React.FC = () => {
  return (
    <>
      <div className="mt-6">
        <p className="text-heading-2 text-center text-blue-900">
          Các dịch vụ bổ sung
        </p>

        <div className="space-y-3">
          <div className="flex items-center justify-between rounded-lg shadow-[0px_0px_5px_1px_rgba(0,0,0,0.24)] transition-all duration-200">
            <div className="flex">
              <div className="flex-1">
                <div className="text-heading-3 flex flex-col justify-between p-5">
                  <p className="">Mua thêm hành lý</p>
                  <p className="title-4">
                    Quý khách cần thêm hành lý ký gửi cho chuyến bay? Mua ngay
                    để được hưởng giá tốt nhất.
                  </p>
                  <p>Từ 65.000VND</p>
                </div>
              </div>

              <div className="flex-1 overflow-hidden rounded-tr-lg">
                <img
                  className="mx-auto w-full"
                  src="/pages/home/services/cho_ngoi.jpg"
                  alt="cho_ngoi"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
