import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";

interface BusinessClassProps {
  price: number;
  name: string;
  features: {
    handBaggagePiece: number;
    handBaggage: number;
    checkedBaggage: number;
    refundBefore: number;
    refundAfter: number;
    changeBefore: number;
    changeAfter: number;
    freeSeatSelection: boolean;
  };
  choosenClass: string;
  setChoosenClass: (value: string) => void;
}

const BusinessClass: React.FC<BusinessClassProps> = ({
  price,
  name,
  features,
  choosenClass,
  setChoosenClass,
}) => {
  return (
    <div
      className={`${name === choosenClass && "border-x-blue-800 border-y-blue-800"} flex cursor-pointer flex-col overflow-hidden rounded-lg border-4 border-transparent bg-white shadow-[0px_0px_5px_1px_rgba(0,0,0,0.24)] transition-all duration-200 hover:border-blue-800`}
      onClick={() => setChoosenClass(name)}
    >
      <div
        className={`${name === choosenClass ? "bg-blue-800 text-white" : "bg-white text-blue-800"} rounded-b-[40%] pb-2 pt-4 text-center shadow-md transition-all duration-200`}
      >
        <p className="text-xl font-bold">{price.toLocaleString()} VND</p>
        <p className="font-bold">{name}</p>
      </div>

      <div className="space-y-4 p-4 text-sm">
        <div className="flex items-center">
          <FaCheckCircle className="mr-2 inline-block text-sm text-green-700" />
          <p>
            Hành lý xách tay: {features.handBaggagePiece} kiện,{" "}
            {features.handBaggage}kg/kiện
          </p>
        </div>

        {features.checkedBaggage > 0 ? (
          <div className="flex items-center">
            <FaCheckCircle className="mr-2 inline-block text-sm text-green-700" />
            <p>Hành lý ký gửi: {features.checkedBaggage}kg</p>
          </div>
        ) : (
          <div className="flex items-center">
            <FaTimesCircle className="mr-2 inline-block text-sm text-red-700" />
            <p>Không bao gồm hành lý ký gửi.</p>
          </div>
        )}

        <div className="flex items-center">
          <FaCheckCircle className="mr-2 inline-block text-sm text-green-700" />
          <p>
            Hoàn/huỷ trước giờ khởi hành:{" "}
            {features.refundBefore.toLocaleString()} VND
          </p>
        </div>

        <div className="flex items-center">
          <FaCheckCircle className="mr-2 inline-block text-sm text-green-700" />
          <p>
            Hoàn/huỷ sau giờ khởi hành: {features.refundAfter.toLocaleString()}{" "}
            VND
          </p>
        </div>

        {features.changeBefore > 0 && features.changeAfter > 0 ? (
          <>
            <div className="flex items-center">
              <FaCheckCircle className="mr-2 inline-block text-sm text-green-700" />
              <p>
                Thay đổi trước giờ khởi hành:{" "}
                {features.changeBefore.toLocaleString()} VND
              </p>
            </div>

            <div className="flex items-center">
              <FaCheckCircle className="mr-2 inline-block text-sm text-green-700" />
              <p>
                Thay đổi sau giờ khởi hành:{" "}
                {features.changeAfter.toLocaleString()} VND
              </p>
            </div>
          </>
        ) : (
          <div className="flex items-center">
            <FaCheckCircle className="mr-2 inline-block text-sm text-green-700" />
            <p>Thay đổi trước/sau giờ khởi hành miễn phí.</p>
          </div>
        )}

        {features.freeSeatSelection ? (
          <div className="flex items-center">
            <FaCheckCircle className="mr-2 inline-block text-sm text-green-700" />
            <p>Chọn ghế ngồi miễn phí</p>
          </div>
        ) : (
          <div className="flex items-center">
            <FaTimesCircle className="mr-2 inline-block text-sm text-red-700" />
            <p>Chọn ghế ngồi mất phí</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default BusinessClass;
