import { useState } from "react";
import CalendarPanel from "./CalendarPanel";
import useSearchData from "../../hooks/useSearchData";
import ExpansionButton from "../ExpansionButton";
import { useParams } from "react-router-dom";
import HeadingTitle from "../../../../../common/HeadingTitle";

const CalendarFlights: React.FC = () => {
  const { flightSearch } = useSearchData();
  const [showPanel, setShowPanel] = useState<boolean>(true);
  const flightIndex: number = Number(
    useParams<{ flightIndex: string }>().flightIndex,
  );
  let departureDate: string = "";
  if (flightIndex === 0) {
    departureDate = flightSearch.departureDate;
  } else if (flightIndex === 1) {
    departureDate = flightSearch.flightRange[1];
  }

  return (
    <div className="mx-auto lg:max-w-screen-xl">
      <HeadingTitle
        className="text-center text-blue-900"
        level={2}
        title={new Date(departureDate).toLocaleDateString("vi-VN", {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      />

      <ExpansionButton
        titleOpen="Hiển thị ngày"
        titleClose="Ẩn ngày"
        showForm={showPanel}
        setShowForm={setShowPanel}
      />

      <CalendarPanel show={showPanel} />
    </div>
  );
};

export default CalendarFlights;
