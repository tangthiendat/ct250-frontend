import { useState } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch } from "../../../redux/hooks";
import FlightRecap from "../available-flights/components/FlightRecap";
import ModifySearchFlightsForm from "../available-flights/components/ModifySearchFlightsForm";
import Banner from "./common/Banner";
import TravelerInfoCard from "./components/TravelerInfoCard";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";

const Traveler: React.FC = () => {
  const [showModifyForm, setShowModifyForm] = useState<boolean>(false);
  const travelerIndex: number = Number(
    useParams<{ travelerIndex: string }>().travelerIndex,
  );
  const dispatch = useAppDispatch();

  //   if (travelerIndex === 0) {
  //     dispatch(clearBooking());
  //   }

  //   let title = "";
  //   if (travelerIndex === 0) {
  //     title = "Vui lòng chọn chuyến bay đi";
  //   } else if (travelerIndex === 1) {
  //     title = "Vui lòng chọn chuyến bay về";
  //   }

  return (
    <div className="pb-10">
      <FlightRecap
        showModifyForm={showModifyForm}
        setShowModifyForm={setShowModifyForm}
      />
      <ModifySearchFlightsForm
        show={showModifyForm}
        setShow={setShowModifyForm}
      />
      <Banner />
      <TravelerInfoCard />
    </div>
  );
};

export default Traveler;
