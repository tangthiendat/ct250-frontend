import { MdExpandMore } from "react-icons/md";
import ItemsPricing from "./ItemsPricing";
import { IBookingFlight, PassengerType } from "../../../../../../../interfaces";
import { useTraveler } from "../../../../../../../context/TravelerContext";

interface TravelerProps {
  passengerType: string;
  numberOfTraveler: number;
  pricing: number;
  bookingFlight: IBookingFlight;
}

const Traveler: React.FC<TravelerProps> = ({
  passengerType,
  numberOfTraveler,
  bookingFlight,
  pricing,
}) => {
  const { showExpand, setShowExpand } = useTraveler();
  return (
    <div
      className={`${showExpand ? "h-[17.5rem]" : "h-10"} overflow-hidden transition-all duration-200`}
    >
      <div
        className={`${showExpand ? "bg-gray-200" : "bg-gray-100"} text-heading-3 flex cursor-pointer justify-between rounded-sm p-2 transition-all duration-200 hover:bg-gray-300`}
        onClick={() => setShowExpand(!showExpand)}
      >
        <p className="text-blue-900">
          {numberOfTraveler}{" "}
          {passengerType === PassengerType.ADULT && "Người lớn"}
          {passengerType === PassengerType.CHILD && "Trẻ em"}
          {passengerType === PassengerType.INFANT && "Em bé"}
        </p>

        <div className="flex items-center">
          <p className="text-blue-900">{pricing.toLocaleString()} VND</p>
          <div>
            <MdExpandMore
              className={`${showExpand ? "rotate-0" : "-rotate-90"} transform duration-200`}
            />
          </div>
        </div>
      </div>

      <div className={`${showExpand && "bg-gray-100"} rounded-b-sm px-7`}>
        <ItemsPricing
          passengerType={passengerType}
          bookingFlight={bookingFlight}
        />
      </div>
    </div>
  );
};

export default Traveler;
