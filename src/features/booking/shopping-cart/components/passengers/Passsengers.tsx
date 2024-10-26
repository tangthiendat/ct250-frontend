import usePassengersData from "../../../traveler/hooks/usePassengersData";
import Passenger from "./components/Passenger";

const Passsengers: React.FC = () => {
  const { passengers } = usePassengersData();
  const passengersInfo = passengers.passengersInfo;

  return (
    <div className="mt-6">
      <p className="text-heading-2 text-center text-blue-900">Hành khách</p>

      <div className="space-y-3">
        {passengersInfo.map((passengerInfo, index) => (
          <Passenger
            key={index}
            passengerInfo={passengerInfo}
            passengerIndex={index}
          />
        ))}
      </div>
    </div>
  );
};

export default Passsengers;
