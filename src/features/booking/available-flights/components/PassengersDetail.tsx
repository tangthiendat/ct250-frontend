import { FaUsers } from "react-icons/fa";
import useSearchData from "../hooks/useSearchData";
import { Dropdown } from "antd";
import { MenuProps } from "antd/lib";
import { PassengerType } from "../../../../interfaces";

const PassengersDetail: React.FC = () => {
  const { flightSearch } = useSearchData();
  const adult = flightSearch.passengers[PassengerType.ADULT];
  const children = flightSearch.passengers[PassengerType.CHILD];
  const infant = flightSearch.passengers[PassengerType.INFANT];

  const items: MenuProps["items"] = [
    {
      key: PassengerType.ADULT,
      label: (
        <div className="flex justify-between">
          <p>Người lớn</p>
          <p>: {adult}</p>
        </div>
      ),
    },
    {
      key: PassengerType.CHILD,
      label: (
        <div className="flex justify-between">
          <p>Trẻ em</p>
          <p>: {children}</p>
        </div>
      ),
    },
    {
      key: PassengerType.INFANT,
      label: (
        <div className="flex justify-between">
          <p>Em bé</p>
          <p>: {infant}</p>
        </div>
      ),
    },
  ];

  return (
    <Dropdown menu={{ items }} placement="bottom" arrow>
      <div className="cursor-pointer text-center">
        <p className="text-heading-3">Hành khách</p>
        <p className="title-4 text-gray-500">
          <div className="flex items-center justify-center gap-2">
            <FaUsers />
            {adult + children + infant}
          </div>
        </p>
      </div>
    </Dropdown>
  );
};

export default PassengersDetail;
