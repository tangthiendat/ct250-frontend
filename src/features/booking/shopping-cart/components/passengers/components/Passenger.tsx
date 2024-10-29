import { Tooltip } from "antd";
import dayjs from "dayjs";
import { FaBabyCarriage, FaChild, FaEdit, FaUser } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  IPassengerData,
  PassengerTitle,
  PassengerType,
} from "../../../../../../interfaces";
import {
  setCurrentAdultIndex,
  setCurrentChildIndex,
  setCurrentInfantIndex,
  setInputtingTravelerType,
  setPassengerInfo,
} from "../../../../../../redux/slices/passengersSlice";
import usePassengersData from "../../../../traveler/hooks/usePassengersData";

interface PassengerProps {
  passengerInfo: IPassengerData;
  passengerIndex: number;
}

const Passenger: React.FC<PassengerProps> = ({
  passengerInfo,
  passengerIndex,
}) => {
  const { passengers, totalPassenger, numOfAdult, numOfChild } =
    usePassengersData();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleTitleOfPassenger = (passengerTitle: PassengerTitle) => {
    return passengerTitle === PassengerTitle.MR_valueOf
      ? PassengerTitle.MR
      : passengerTitle === PassengerTitle.MRS_valueOf
        ? PassengerTitle.MRS
        : passengerTitle === PassengerTitle.MS_valueOf
          ? PassengerTitle.MS
          : passengerTitle === PassengerTitle.MSTR_valueOf
            ? PassengerTitle.MSTR
            : PassengerTitle.MISS;
  };

  const handleGoWith = (
    passengerType: PassengerType,
    passengerIndex: number,
  ) => {
    if (passengerType === PassengerType.ADULT) {
      const infant =
        passengers.passengersInfo[numOfAdult + numOfChild + passengerIndex];

      if (infant === undefined) return;

      return (
        handleTitleOfPassenger(infant.passengerTitle) +
        ": " +
        infant.lastName +
        " " +
        infant.firstName
      );
    } else if (passengerType === PassengerType.INFANT) {
      const adult =
        passengers.passengersInfo[passengerIndex - (numOfAdult + numOfChild)];

      return (
        handleTitleOfPassenger(adult.passengerTitle) +
        ": " +
        adult.lastName +
        " " +
        adult.firstName
      );
    }
  };

  const name = `${handleTitleOfPassenger(
    passengerInfo.passengerTitle,
  )}: ${passengerInfo.lastName} ${passengerInfo.firstName} `;
  const dateOfBirth =
    "Ngày sinh: " + dayjs(passengerInfo.dateOfBirth).format("DD/MM/YYYY");
  const goWith =
    totalPassenger > 1
      ? handleGoWith(passengerInfo.passengerType, passengerIndex) &&
        "Đi cùng " + handleGoWith(passengerInfo.passengerType, passengerIndex)
      : undefined;

  const email =
    passengerInfo.email !== undefined && "Email: " + passengerInfo?.email;
  const phone = passengerInfo?.phone
    ? "Số điện thoại: (+" + passengerInfo?.country + ") " + passengerInfo?.phone
    : "";

  const formattedPassengerInfo = {
    ...passengerInfo,
    name,
    dateOfBirth,
    goWith,
    email,
    phone,
  };

  const handleEditPassenger = (passengerIndex: number) => {
    if (passengerInfo.passengerType === PassengerType.ADULT) {
      dispatch(setInputtingTravelerType(PassengerType.ADULT));
      dispatch(setCurrentAdultIndex(passengerIndex));
    } else if (passengerInfo.passengerType === PassengerType.CHILD) {
      dispatch(setInputtingTravelerType(PassengerType.CHILD));
      dispatch(setCurrentAdultIndex(numOfAdult));
      dispatch(setCurrentChildIndex(passengerIndex - numOfAdult));
    } else if (passengerInfo.passengerType === PassengerType.INFANT) {
      dispatch(setInputtingTravelerType(PassengerType.INFANT));
      dispatch(setCurrentAdultIndex(numOfAdult));
      dispatch(setCurrentChildIndex(numOfChild));
      dispatch(setCurrentInfantIndex(passengerIndex - numOfAdult - numOfChild));
    }

    dispatch(
      setPassengerInfo({
        index: passengerIndex,
        passengerInfo: {
          ...passengerInfo,
          isEditing: true,
        },
      }),
    );

    navigate(`/book/traveler/${passengerIndex}`);
  };

  return (
    <>
      <div className="flex items-center justify-between rounded-lg border-[2px] border-transparent px-4 py-2 shadow-[0px_0px_5px_1px_rgba(0,0,0,0.24)] transition-all duration-200 hover:border-green-600">
        <div className="flex items-center gap-4">
          {formattedPassengerInfo.passengerType === PassengerType.ADULT ? (
            <FaUser className="text-3xl text-green-700" />
          ) : formattedPassengerInfo.passengerType === PassengerType.CHILD ? (
            <FaChild className="text-3xl text-green-700" />
          ) : (
            <FaBabyCarriage className="text-3xl text-green-700" />
          )}
          <div className="title-4 flex gap-10 text-base">
            <div>
              <p className="text-heading-3 font-medium text-green-700">
                {name}
              </p>
              <p>{dateOfBirth}</p>
              <p className="text-heading-3 font-medium text-green-700">
                {goWith}
              </p>
            </div>

            <div>
              <p>{email}</p>
              <p>{phone}</p>
            </div>
          </div>
        </div>

        <Tooltip title="Chỉnh sửa thông tin hành khách">
          <button
            className="cursor-pointer px-6 py-4"
            onClick={() => handleEditPassenger(passengerIndex)}
          >
            <FaEdit className="text-xl text-blue-800" />
          </button>
        </Tooltip>
      </div>
    </>
  );
};

export default Passenger;
