import { UserOutlined } from "@ant-design/icons";
import type { DropdownProps, MenuProps } from "antd";
import { Button, Dropdown, Tooltip } from "antd";
import React, { useState } from "react";
import { CiCircleMinus, CiCirclePlus } from "react-icons/ci";
import { FaBabyCarriage } from "react-icons/fa";
import { FaChild } from "react-icons/fa6";

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

interface PassengerSelectorProps {
  adult: number;
  setAdult: React.Dispatch<React.SetStateAction<number>>;
  children: number;
  setChildren: React.Dispatch<React.SetStateAction<number>>;
  infant: number;
  setInfant: React.Dispatch<React.SetStateAction<number>>;
}

const PassengerSelector: React.FC<PassengerSelectorProps> = ({
  adult,
  setAdult,
  children,
  setChildren,
  infant,
  setInfant,
}) => {
  const [open, setOpen] = useState(false);

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
      icon: <UserOutlined />,
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
    <Dropdown menu={{ items }} onOpenChange={handleOpenChange} open={open}>
      <Button className="w-full" size="large" icon={<UserOutlined />}>
        Hành khách: {adult + children + infant} người
      </Button>
    </Dropdown>
  );
};

export default PassengerSelector;
