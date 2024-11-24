import { useAppSelector } from "../../../../../../../../redux/hooks";
import { RootState } from "../../../../../../../../redux/store";
import Flight from "./Flight";

const Flights: React.FC = () => {
  const departureData = useAppSelector(
    (state: RootState) => state.booking.bookingFlights[0],
  );
  const returnData = useAppSelector(
    (state: RootState) => state.booking.bookingFlights[1],
  );

  return (
    <>
      <div className="space-y-2 pb-4">
        <Flight type="departure" flightData={departureData} />
        {returnData && <Flight type="arrival" flightData={returnData} />}
      </div>
    </>
  );
};

export default Flights;
