import { PassengerType } from "../../../../interfaces";
import usePassengersData from "../hooks/usePassengersData";

const Banner: React.FC = () => {
  const {
    passengers,
    totalPassenger,
    currentAdultIndex,
    currentChildIndex,
    currentInfantIndex,
    numOfAdult,
    numOfChild,
    numOfInfant,
    inputtingTravelerType,
  } = usePassengersData();

  const formatPrimaryTitle = () => {
    if (totalPassenger === 1) {
      if (passengers.passengersInfo[0] !== undefined) {
        return (
          passengers.passengersInfo[0].lastName +
          " " +
          passengers.passengersInfo[0].firstName
        );
      } else {
        return "Nhập thông tin hành khách";
      }
    } else if (inputtingTravelerType === PassengerType.ADULT) {
      if (passengers.passengersInfo[currentAdultIndex] !== undefined) {
        return (
          passengers.passengersInfo[currentAdultIndex].lastName +
          " " +
          passengers.passengersInfo[currentAdultIndex].firstName
        );
      } else {
        return `Nhập thông tin người lớn${numOfAdult > 1 ? ` thứ ${currentAdultIndex + 1}` : ""}`;
      }
    } else if (inputtingTravelerType === PassengerType.CHILD) {
      if (
        passengers.passengersInfo[numOfAdult + currentChildIndex] !== undefined
      ) {
        return (
          passengers.passengersInfo[numOfAdult + currentChildIndex].lastName +
          " " +
          passengers.passengersInfo[numOfAdult + currentChildIndex].firstName
        );
      } else {
        return `Nhập thông tin trẻ em${numOfChild > 1 ? ` thứ ${currentChildIndex + 1}` : ""}`;
      }
    } else if (inputtingTravelerType === PassengerType.INFANT) {
      if (
        passengers.passengersInfo[
          numOfAdult + numOfChild + currentInfantIndex
        ] !== undefined
      ) {
        return (
          passengers.passengersInfo[
            numOfAdult + numOfChild + currentInfantIndex
          ].lastName +
          " " +
          passengers.passengersInfo[
            numOfAdult + numOfChild + currentInfantIndex
          ].firstName
        );
      } else {
        return `Nhập thông tin em bé${numOfInfant > 1 ? ` thứ ${currentInfantIndex + 1}` : ""}`;
      }
    }
  };

  const formatSecondaryTitle = () => {
    if (
      inputtingTravelerType === PassengerType.ADULT &&
      currentAdultIndex < numOfInfant
    ) {
      const infantIndexByAdult = numOfAdult + numOfChild + currentAdultIndex;
      if (passengers.passengersInfo[infantIndexByAdult] !== undefined) {
        return `(đi cùng với ${passengers.passengersInfo[infantIndexByAdult].lastName} ${passengers.passengersInfo[infantIndexByAdult].firstName})`;
      } else {
        return `(đi cùng với em bé${numOfInfant > 1 ? ` thứ ${currentAdultIndex + 1}` : ""})`;
      }
    } else if (
      inputtingTravelerType === PassengerType.INFANT &&
      currentInfantIndex < numOfInfant
    ) {
      const adultIndexByInfant = currentInfantIndex;
      if (passengers.passengersInfo[adultIndexByInfant] !== undefined) {
        return `(đi cùng với ${passengers.passengersInfo[adultIndexByInfant].lastName} ${passengers.passengersInfo[adultIndexByInfant].firstName})`;
      } else {
        return `(đi cùng với người lớn${numOfAdult > 1 ? ` thứ ${currentInfantIndex + 1}` : ""})`;
      }
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
        <p className="text-heading-2 m-0 text-green-700">
          {formatPrimaryTitle()}
        </p>

        <p className="text-heading-2 m-0 text-blue-700">
          {formatSecondaryTitle()}
        </p>
      </div>
    </div>
  );
};

export default Banner;
