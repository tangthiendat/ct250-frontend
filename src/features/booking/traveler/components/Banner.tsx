import { PassengerType } from "../../../../interfaces";
import usePassengersData from "../hooks/usePassengersData";

const Banner: React.FC = () => {
  const {
    totalPassenger,
    currentAdultIndex,
    currentChildIndex,
    currentInfantIndex,
    numOfAdult,
    numOfChild,
    numOfInfant,
    inputtingTravelerType,
  } = usePassengersData();

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
      </div>
    </div>
  );
};

export default Banner;
