import { FaUsers } from "react-icons/fa";
import useSearchData from "../hooks/useSearchData";
import { Dropdown } from "antd";
import { MenuProps } from "antd/lib";

const PassengersDetail: React.FC = () => {
  const { flightSearch } = useSearchData();
  const { adult, children, infant } = flightSearch.passengers;

  const items: MenuProps["items"] = [
    {
      key: "adult",
      label: (
        <div className="flex justify-between">
          <p>Người lớn</p>
          <p>: {adult}</p>
        </div>
      ),
    },
    {
      key: "children",
      label: (
        <div className="flex justify-between">
          <p>Trẻ em</p>
          <p>: {children}</p>
        </div>
      ),
    },
    {
      key: "infant",
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
        <p className="text-flights_recap_heading text-lg font-bold">
          Hành khách
        </p>
        <p className="text-sm text-gray-500">
          <div className="flex items-center justify-center gap-2">
            <FaUsers />
            {flightSearch.passengers.adult +
              flightSearch.passengers.children +
              flightSearch.passengers.infant}
          </div>
        </p>
      </div>
    </Dropdown>
  );
};

export default PassengersDetail;
