import { useNavigate } from "react-router-dom";
import Flights from "./Flights";

const MealDetail: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full p-5">
      <Flights />

      <div className="flex w-full justify-end">
        <button
          className="text-heading-3 text rounded-lg border-[2px] border-green-700 px-4 py-2 text-green-700 transition-colors duration-200 hover:bg-green-700 hover:text-white"
          onClick={() => navigate("/book/services/meal")}
        >
          Chọn mua thêm
        </button>
      </div>
    </div>
  );
};

export default MealDetail;
