import Flights from "./Flights";

const BaggageDetail: React.FC = () => {
  return (
    <div className="w-full p-2">
      <Flights />

      <div className="flex w-full justify-end">
        <button
          className="text-heading-3 text rounded-lg border-[2px] border-green-700 px-4 py-2 text-green-700 transition-colors duration-200 hover:bg-green-700 hover:text-white"
          // onClick={() => setShowModal(!showModal)}
        >
          Chọn mua thêm
        </button>
      </div>
    </div>
  );
};

export default BaggageDetail;
