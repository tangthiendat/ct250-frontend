import { useState } from "react";
import CalendarPanel from "./CalendarPanel";
import useSearchData from "../../hooks/useSearchData";
import ExpansionButton from "../ExpansionButton";

const CalendarFlights: React.FC = () => {
  const { flightSearch: data } = useSearchData();
  const [showPanel, setShowPanel] = useState<boolean>(true);

  return (
    <div className="mx-auto lg:max-w-screen-xl">
      <p className="text-heading-2 text-center text-blue-900">
        {new Date(data.departureDate).toLocaleDateString("vi-VN", {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </p>

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
