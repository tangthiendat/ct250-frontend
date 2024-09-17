import { IoIosArrowForward } from "react-icons/io";

const Destinations: React.FC = () => {
  return (
    <>
      <div className="bg-blue-00 mx-auto w-[90%] py-5 transition-all duration-1000 lg:w-[80%]">
        <h1 className="text-heading">Điểm đến nội địa</h1>
        <a href="#">
          <div className="relative mx-auto h-52 overflow-hidden rounded-ee-3xl rounded-ss-3xl transition-all duration-1000 sm:h-72 lg:h-96">
            <img
              className="relative h-full w-full rounded-ee-3xl rounded-ss-3xl object-cover object-center transition-all duration-1000 ease-in-out hover:scale-110"
              src="/pages/home/VietNam.png"
              alt="Viet Nam"
            />
            <div className="absolute bottom-0 z-10 whitespace-normal pb-6 pl-6 font-serif text-2xl font-semibold text-white">
              Việt Nam
            </div>
            <div className="absolute bottom-0 right-0 z-10 whitespace-normal pb-6 pr-6 font-serif text-2xl font-semibold text-white">
              <IoIosArrowForward />
            </div>
          </div>
        </a>
      </div>

      <div className="bg-blue-00 mx-auto mt-10 w-[90%] py-5 transition-all duration-1000 lg:w-[80%]">
        <h1 className="text-heading">Châu Âu</h1>
        <div className="flex flex-col gap-5 md:flex-row">
          <a href="#">
            <div className="relative mx-auto h-52 overflow-hidden rounded-ee-3xl rounded-ss-3xl transition-all duration-1000 sm:h-72 lg:h-96">
              <img
                className="relative h-full w-full rounded-ee-3xl rounded-ss-3xl object-cover object-center transition-all duration-1000 ease-in-out hover:scale-110"
                src="/pages/home/Anh.png"
                alt="Anh"
              />
              <div className="absolute bottom-0 z-10 whitespace-normal pb-6 pl-6 font-serif text-2xl font-semibold text-white">
                Anh
              </div>
              <div className="absolute bottom-0 right-0 z-10 whitespace-normal pb-6 pr-6 font-serif text-2xl font-semibold text-white">
                <IoIosArrowForward />
              </div>
            </div>
          </a>
          <a href="#">
            <div className="relative mx-auto h-52 overflow-hidden rounded-ee-3xl rounded-ss-3xl transition-all duration-1000 sm:h-72 lg:h-96">
              <img
                className="relative h-full w-full rounded-ee-3xl rounded-ss-3xl object-cover object-center transition-all duration-1000 ease-in-out hover:scale-110"
                src="/pages/home/Duc.png"
                alt="Đức"
              />
              <div className="absolute bottom-0 z-10 whitespace-normal pb-6 pl-6 font-serif text-2xl font-semibold text-white">
                Đức
              </div>
              <div className="absolute bottom-0 right-0 z-10 whitespace-normal pb-6 pr-6 font-serif text-2xl font-semibold text-white">
                <IoIosArrowForward />
              </div>
            </div>
          </a>
        </div>
      </div>

      <div className="bg-blue-00 mx-auto mt-10 w-[90%] py-5 transition-all duration-1000 lg:w-[80%]">
        <h1 className="text-heading">Đông Bắc Á</h1>
        <div className="flex flex-col gap-5 md:flex-row">
          <a href="#">
            <div className="relative mx-auto h-52 overflow-hidden rounded-ee-3xl rounded-ss-3xl transition-all duration-1000 sm:h-72 lg:h-96">
              <img
                className="relative h-full w-full rounded-ee-3xl rounded-ss-3xl object-cover object-center transition-all duration-1000 ease-in-out hover:scale-110"
                src="/pages/home/HanQuoc.png"
                alt="Hàn Quốc"
              />
              <div className="absolute bottom-0 z-10 whitespace-normal pb-6 pl-6 font-serif text-2xl font-semibold text-white">
                Hàn Quốc
              </div>
              <div className="absolute bottom-0 right-0 z-10 whitespace-normal pb-6 pr-6 font-serif text-2xl font-semibold text-white">
                <IoIosArrowForward />
              </div>
            </div>
          </a>
          <a href="#">
            <div className="relative mx-auto h-52 overflow-hidden rounded-ee-3xl rounded-ss-3xl transition-all duration-1000 sm:h-72 lg:h-96">
              <img
                className="relative h-full w-full rounded-ee-3xl rounded-ss-3xl object-cover object-center transition-all duration-1000 ease-in-out hover:scale-110"
                src="/pages/home/NhatBan.png"
                alt="Nhật Bản"
              />
              <div className="absolute bottom-0 z-10 whitespace-normal pb-6 pl-6 font-serif text-2xl font-semibold text-white">
                Nhật Bản
              </div>
              <div className="absolute bottom-0 right-0 z-10 whitespace-normal pb-6 pr-6 font-serif text-2xl font-semibold text-white">
                <IoIosArrowForward />
              </div>
            </div>
          </a>
        </div>
        <a href="#">
          <div className="relative mx-auto mt-5 h-52 overflow-hidden rounded-ee-3xl rounded-ss-3xl transition-all duration-1000 sm:h-72 lg:h-96">
            <img
              className="relative h-full w-full rounded-ee-3xl rounded-ss-3xl object-cover object-center transition-all duration-1000 ease-in-out hover:scale-110"
              src="/pages/home/DaiLoan.png"
              alt="Đài Loan"
            />
            <div className="absolute bottom-0 z-10 whitespace-normal pb-6 pl-6 font-serif text-2xl font-semibold text-white">
              Đài Loan
            </div>
            <div className="absolute bottom-0 right-0 z-10 whitespace-normal pb-6 pr-6 font-serif text-2xl font-semibold text-white">
              <IoIosArrowForward />
            </div>
          </div>
        </a>
      </div>

      <div className="bg-blue-00 mx-auto mt-10 w-[90%] py-5 transition-all duration-1000 lg:w-[80%]">
        <h1 className="text-heading">Đông Nam Á</h1>
        <div className="flex flex-col gap-5 md:flex-row">
          <a href="#">
            <div className="relative mx-auto h-52 overflow-hidden rounded-ee-3xl rounded-ss-3xl transition-all duration-1000 sm:h-72 lg:h-96">
              <img
                className="relative h-full w-full rounded-ee-3xl rounded-ss-3xl object-cover object-center transition-all duration-1000 ease-in-out hover:scale-110"
                src="/pages/home/Singapore.png"
                alt="Singapore"
              />
              <div className="absolute bottom-0 z-10 whitespace-normal pb-6 pl-6 font-serif text-2xl font-semibold text-white">
                Singapore
              </div>
              <div className="absolute bottom-0 right-0 z-10 whitespace-normal pb-6 pr-6 font-serif text-2xl font-semibold text-white">
                <IoIosArrowForward />
              </div>
            </div>
          </a>
          <a href="#">
            <div className="relative mx-auto h-52 overflow-hidden rounded-ee-3xl rounded-ss-3xl transition-all duration-1000 sm:h-72 lg:h-96">
              <img
                className="relative h-full w-full rounded-ee-3xl rounded-ss-3xl object-cover object-center transition-all duration-1000 ease-in-out hover:scale-110"
                src="/pages/home/ThaiLan.png"
                alt="Thái Lan"
              />
              <div className="absolute bottom-0 z-10 whitespace-normal pb-6 pl-6 font-serif text-2xl font-semibold text-white">
                Thái Lan
              </div>
              <div className="absolute bottom-0 right-0 z-10 whitespace-normal pb-6 pr-6 font-serif text-2xl font-semibold text-white">
                <IoIosArrowForward />
              </div>
            </div>
          </a>
        </div>
      </div>
    </>
  );
};

export default Destinations;
