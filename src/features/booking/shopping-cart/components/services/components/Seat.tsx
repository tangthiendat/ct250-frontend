import { useState } from "react";
import CategoryRecap from "../common/CategoryRecap";

const Seat: React.FC = () => {
  const [showModal, setShowModal] = useState<boolean>(false);

  return (
    <div
      className={`flex flex-col items-center justify-between overflow-hidden rounded-lg shadow-[0px_0px_5px_1px_rgba(0,0,0,0.24)] transition-all duration-200`}
    >
      <div
        className={`${showModal && "border-b-[1px] border-slate-400"} flex cursor-default`}
      >
        <div className="flex-1 rounded-tr-lg">
          <img
            className="mx-auto w-full object-cover"
            src="/pages/home/services/cho_ngoi.jpg"
            alt="cho_ngoi"
          />
        </div>

        <div className="flex-1">
          <div className="text-heading-3 flex h-full flex-col justify-between p-5 text-green-700">
            <div>
              <p>Chọn chỗ ngồi</p>
              <p className="title-4">
                Lựa chọn ghế ngồi ưa thích của quý khách trên chuyến bay.
              </p>
            </div>

            <div className="flex justify-end">
              <button
                className="rounded-lg border-[2px] border-green-700 px-4 py-2 transition-colors duration-200 hover:bg-green-700 hover:text-white"
                onClick={() => setShowModal(!showModal)}
              >
                Chọn mua
              </button>
            </div>
          </div>
        </div>
      </div>

      <CategoryRecap showModal={showModal} />
    </div>
  );
};

export default Seat;
