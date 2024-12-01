import { IBookingFlight } from "../../../../../../interfaces";

interface CityAndTimeProps {
  data: IBookingFlight;
}

const CityAndTime: React.FC<CityAndTimeProps> = ({ data }) => {
  return (
    <div className="flex">
      <p className="title-4 font-semibold text-green-700">
        {data.flight.route.departureAirport.cityName}
        <span className="title-4"> đến </span>
        {data.flight.route.arrivalAirport.cityName}
      </p>

      <p className="title-4">&nbsp;-&nbsp;</p>

      <p className="title-4 font-semibold">
        {new Date(data.flight.departureDateTime).toLocaleDateString("vi-VN", {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </p>
    </div>
  );
};

export default CityAndTime;
