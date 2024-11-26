import { useNavigate } from "react-router-dom";
import MealDetail from "./components/MealDetail";
import { useAppSelector } from "../../../../../../../redux/hooks";

const Meal: React.FC = () => {
  const navigate = useNavigate();
  const passenger = useAppSelector((state) => state.passengers.passengersInfo);

  const isOrdered = passenger.some(
    (passenger) =>
      passenger.services?.depart?.meal !== undefined ||
      passenger.services?.return?.meal !== undefined,
  );

  return (
    <div className="flex flex-col items-center justify-between overflow-hidden rounded-lg shadow-[0px_0px_5px_1px_rgba(0,0,0,0.24)] transition-all duration-200">
      <div className="flex w-full cursor-default border-b-[1px] border-slate-400">
        <div className="flex-1 rounded-tr-lg">
          <img
            className="mx-auto h-[200px] w-full object-cover"
            src="/pages/home/services/suat_an.jpg"
            alt="suat_an"
          />
        </div>

        <div className="flex-1">
          <div className="text-heading-3 flex h-full flex-col justify-between p-5 text-green-700">
            <div>
              <p>Chọn suất ăn - đồ uống</p>
              <p className="title-4 mt-3">
                Thưởng thức các món ăn, thức uống mới trên tàu bay.
              </p>
            </div>

            {!isOrdered && (
              <div className="flex w-full justify-end">
                <button
                  className="text-heading-3 text rounded-lg border-[2px] border-green-700 px-4 py-2 text-green-700 transition-colors duration-200 hover:bg-green-700 hover:text-white"
                  onClick={() => navigate("/book/services/meal")}
                >
                  Chọn mua thêm
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {isOrdered && <MealDetail />}
    </div>
  );
};

export default Meal;
