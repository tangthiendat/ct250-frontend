import { IoIosArrowForward } from "react-icons/io";
import BodyLayout from "../../layouts/BodyLayout";

const Destinations: React.FC = () => {
  return (
    <>
      <BodyLayout>
        <h1 className="text-heading">Điểm đến nội địa</h1>
        <a href="#">
          <div className="relative mx-auto h-52 overflow-hidden rounded-ee-3xl rounded-ss-3xl transition-all duration-1000 sm:h-72 lg:h-96">
            <img
              className="relative h-full w-full rounded-ee-3xl rounded-ss-3xl object-cover object-center transition-all duration-1000 ease-in-out hover:scale-110"
              src="/pages/home/destinations/VietNam/VietNam.png"
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
      </BodyLayout>

      <BodyLayout>
        <h1 className="text-heading">Châu Âu</h1>
        <div className="flex flex-col gap-5 md:flex-row">
          <a href="#">
            <div className="relative mx-auto h-52 overflow-hidden rounded-ee-3xl rounded-ss-3xl transition-all duration-1000 sm:h-72 lg:h-96">
              <img
                className="relative h-full w-full rounded-ee-3xl rounded-ss-3xl object-cover object-center transition-all duration-1000 ease-in-out hover:scale-110"
                src="/pages/home/destinations/Europe/Anh.png"
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
                src="/pages/home/destinations/Europe/Duc.png"
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
      </BodyLayout>

      <BodyLayout>
        <h1 className="text-heading">Đông Bắc Á</h1>
        <div className="flex flex-col gap-5 md:flex-row">
          <a href="#">
            <div className="relative mx-auto h-52 overflow-hidden rounded-ee-3xl rounded-ss-3xl transition-all duration-1000 sm:h-72 lg:h-96">
              <img
                className="relative h-full w-full rounded-ee-3xl rounded-ss-3xl object-cover object-center transition-all duration-1000 ease-in-out hover:scale-110"
                src="/pages/home/destinations/NortheastAsia/HanQuoc.png"
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
                src="/pages/home/destinations/NortheastAsia/NhatBan.png"
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
              src="/pages/home/destinations/NortheastAsia/DaiLoan.png"
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
      </BodyLayout>

      <BodyLayout>
        <h1 className="text-heading">Đông Nam Á</h1>
        <div className="flex flex-col gap-5 md:flex-row">
          <a href="#">
            <div className="relative mx-auto h-52 overflow-hidden rounded-ee-3xl rounded-ss-3xl transition-all duration-1000 sm:h-72 lg:h-96">
              <img
                className="relative h-full w-full rounded-ee-3xl rounded-ss-3xl object-cover object-center transition-all duration-1000 ease-in-out hover:scale-110"
                src="/pages/home/destinations/SoutheastAsia/Singapore.png"
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
                src="/pages/home/destinations/SoutheastAsia/ThaiLan.png"
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
      </BodyLayout>
    </>
  );
};

export default Destinations;
