import React, { useState } from "react";
import type { DropdownProps, MenuProps } from "antd";
import { Button, Dropdown, Form, Tooltip } from "antd";

import { UserOutlined } from "@ant-design/icons";
import { CiCircleMinus, CiCirclePlus } from "react-icons/ci";
import { FaBabyCarriage, FaUser } from "react-icons/fa";
import { FaChild } from "react-icons/fa6";

import useSearchData from "../../../booking/hooks/useSearchData";
import { setPassengers } from "../../../../redux/slices/flightSearchSlice";

interface ItemMenuProps {
  label: string;
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
  minCount?: number;
}

const ItemMenu: React.FC<ItemMenuProps> = ({
  label,
  count,
  setCount,
  minCount = 0,
}) => {
  return (
    <div className="flex items-center justify-between gap-2">
      {label}
      <div className="flex items-center">
        <Tooltip title="Giảm">
          <Button
            type="text"
            icon={<CiCircleMinus />}
            onClick={() => setCount(count > minCount ? count - 1 : minCount)}
          />
        </Tooltip>

        {count}

        <Tooltip title="Thêm">
          <Button
            type="text"
            icon={<CiCirclePlus />}
            onClick={() => setCount(count + 1)}
          />
        </Tooltip>
      </div>
    </div>
  );
};

const PassengerSelector: React.FC = () => {
  const { flightSearch, dispatch } = useSearchData();
  const { adult, children, infant } = flightSearch.passengers;
  const [open, setOpen] = useState(false);

  const setAdult: React.Dispatch<React.SetStateAction<number>> = (value) => {
    dispatch(
      setPassengers({
        adult: typeof value === "function" ? value(adult) : value,
        children,
        infant,
      }),
    );
  };

  const setChildren: React.Dispatch<React.SetStateAction<number>> = (value) => {
    dispatch(
      setPassengers({
        adult,
        children: typeof value === "function" ? value(children) : value,
        infant,
      }),
    );
  };

  const setInfant: React.Dispatch<React.SetStateAction<number>> = (value) => {
    dispatch(
      setPassengers({
        adult,
        children,
        infant: typeof value === "function" ? value(infant) : value,
      }),
    );
  };

  const handleOpenChange: DropdownProps["onOpenChange"] = (nextOpen, info) => {
    if (info.source === "trigger" || nextOpen) {
      setOpen(nextOpen);
    }
  };

  const items: MenuProps["items"] = [
    {
      label: (
        <ItemMenu
          label="Người lớn"
          count={adult}
          setCount={setAdult}
          minCount={1}
        />
      ),
      key: "adult",
      icon: <FaUser />,
    },
    {
      label: (
        <ItemMenu label="Trẻ em" count={children} setCount={setChildren} />
      ),
      key: "children",
      icon: <FaChild />,
    },
    {
      label: <ItemMenu label="Em bé" count={infant} setCount={setInfant} />,
      key: "infant",
      icon: <FaBabyCarriage />,
    },
  ];

  return (
    <Form.Item name="passengers">
      <Dropdown menu={{ items }} onOpenChange={handleOpenChange} open={open}>
        <Button className="w-full" size="large">
          <UserOutlined /> Hành khách: {adult + children + infant} người
        </Button>
      </Dropdown>
    </Form.Item>
  );
};

export default PassengerSelector;
