import { PassengerType } from "../../../../interfaces";
import {
  setCurrentAdultIndex,
  setCurrentChildIndex,
  setCurrentInfantIndex,
  setInputtingTravelerType,
} from "../../../../redux/slices/passengersSlice";
import usePassengersData from "../hooks/usePassengersData";

const Banner: React.FC = () => {
  const {
    travelerIndex,
    navigate,
    dispatch,
    totalPassenger,
    currentAdultIndex,
    currentChildIndex,
    currentInfantIndex,
    numOfAdult,
    numOfChild,
    numOfInfant,
    inputtingTravelerType,
  } = usePassengersData();

  const currentPath = window.location.pathname;
  const pathParts = currentPath.split("/");

  const handleClick = () => {
    if (travelerIndex < totalPassenger - 1) {
      if (currentAdultIndex < numOfAdult) {
        dispatch(setCurrentAdultIndex(currentAdultIndex + 1));
        if (currentAdultIndex + 1 === numOfAdult) {
          if (numOfChild > 0) {
            dispatch(setInputtingTravelerType(PassengerType.CHILD));
          } else if (numOfInfant > 0) {
            dispatch(setInputtingTravelerType(PassengerType.INFANT));
          }
        }
      } else if (currentChildIndex < numOfChild) {
        dispatch(setCurrentChildIndex(currentChildIndex + 1));
        if (currentChildIndex + 1 === numOfChild && numOfInfant > 0) {
          dispatch(setInputtingTravelerType(PassengerType.INFANT));
        }
      } else if (currentInfantIndex < numOfInfant) {
        dispatch(setCurrentInfantIndex(currentInfantIndex + 1));
      }
      pathParts[pathParts.length - 1] = `${travelerIndex + 1}`;
      navigate(pathParts.join("/"));
    }
  };

  return (
    <div className="relative">
      <img
        src="/pages/traveler/banner.jpg"
        alt="banner"
        className="-z-10 h-[300px] w-full object-cover"
      />

      <div className="absolute left-1/2 top-1/3 flex -translate-x-1/2 transform flex-col items-center justify-center text-balance rounded-md bg-white px-12 py-4 text-center">
        {/* <p className="text-heading-2 text-blue-700">{title}</p> */}
        <p className="text-heading-2 m-0 text-green-700">
          {totalPassenger === 1
            ? "Nhập thông tin hành khách"
            : inputtingTravelerType === PassengerType.ADULT
              ? `Nhập thông tin người lớn${numOfAdult > 1 ? ` thứ ${currentAdultIndex + 1}` : ""}`
              : inputtingTravelerType === PassengerType.CHILD
                ? `Nhập thông tin trẻ em${numOfChild > 1 ? ` thứ ${currentChildIndex + 1}` : ""}`
                : inputtingTravelerType === PassengerType.INFANT &&
                  `Nhập thông tin em bé${numOfInfant > 1 ? ` thứ ${currentInfantIndex + 1}` : ""}`}
        </p>

        <p className="text-heading-2 m-0 text-blue-700">
          {inputtingTravelerType === PassengerType.ADULT &&
          currentAdultIndex < numOfInfant
            ? `(đi cùng với em bé${numOfInfant > 1 ? ` thứ ${currentAdultIndex + 1}` : ""})`
            : inputtingTravelerType === PassengerType.INFANT &&
              currentInfantIndex < numOfInfant &&
              `(đi cùng với người lớn${numOfAdult > 1 ? ` thứ ${currentInfantIndex + 1}` : ""})`}
        </p>
        <button className="absolute left-0 bg-yellow-500" onClick={handleClick}>
          Click
        </button>
      </div>
    </div>
  );
};

export default Banner;
