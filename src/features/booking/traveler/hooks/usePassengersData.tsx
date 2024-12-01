import { useNavigate, useParams } from "react-router-dom";
import { useAppDispatch } from "../../../../redux/hooks";
import { useSelector } from "react-redux";
import { RootState } from "../../../../redux/store";

const usePassengersData = () => {
  const travelerIndex: number = Number(
    useParams<{ travelerIndex: string }>().travelerIndex,
  );
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const passengers = useSelector((state: RootState) => state.passengers);
  const inputtingTravelerType = passengers.inputtingTravelerType;
  const numOfAdult = passengers.totalAdult;
  const numOfChild = passengers.totalChildren;
  const numOfInfant = passengers.totalInfant;
  const totalPassenger = numOfAdult + numOfChild + numOfInfant;

  const currentAdultIndex = passengers.currentAdultIndex;
  const currentChildIndex = passengers.currentChildIndex;
  const currentInfantIndex = passengers.currentInfantIndex;

  return {
    travelerIndex,
    navigate,
    dispatch,
    passengers,
    inputtingTravelerType,
    numOfAdult,
    numOfChild,
    numOfInfant,
    totalPassenger,
    currentAdultIndex,
    currentChildIndex,
    currentInfantIndex,
  };
};

export default usePassengersData;
