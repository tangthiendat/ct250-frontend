import { useState } from "react";
import BodyLayout from "../../../layouts/BodyLayout";
import CalendarPanel from "./CalendarPanel";
import ExpansionButton from "./ExpansionButton";

interface CalendarFlightsProps {
  data: {
    typeTrip: string;
    departAirport: string;
    destAirport: string;
    departureDate: string;
    returnDate?: string;
    passengers: {
      adult: number;
      children: number;
      infant: number;
    };
    couponCode?: string;
  };
}

const CalendarFlights: React.FC<CalendarFlightsProps> = ({ data }) => {
  const [showPanel, setShowPanel] = useState<boolean>(false);

  return (
    <BodyLayout>
      <p className="text-heading-2 text-center text-blue-900">
        {new Date(
          data.departureDate.split("/").reverse().join("/"),
        ).toLocaleDateString("vi-VN", {
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
    </BodyLayout>
  );
};

export default CalendarFlights;
