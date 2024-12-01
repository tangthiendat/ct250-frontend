import type { DropdownProps, MenuProps } from "antd";
import { Button, Dropdown, Form, Tooltip } from "antd";
import React, { useState } from "react";

import { UserOutlined } from "@ant-design/icons";
import { CiCircleMinus, CiCirclePlus } from "react-icons/ci";
import { FaBabyCarriage, FaUser } from "react-icons/fa";
import { FaChild } from "react-icons/fa6";
import { PassengerType } from "../../../../interfaces";
import { IoIosInformationCircleOutline } from "react-icons/io";

interface ItemMenuProps {
  // label: string;
  passengerType: string;
  showError: string | undefined;
  setShowError: React.Dispatch<React.SetStateAction<string | undefined>>;
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
  minCount?: number;
  maxCount: number;
}

const ItemMenu: React.FC<ItemMenuProps> = ({
  // label,
  passengerType,
  showError,
  setShowError,
  count,
  setCount,
  minCount = 0,
  maxCount,
}) => {
  const [error, setError] = useState<string | null>(null);

  const titleError = {
    limitPassenger: "Số hành khách không thể vượt quá 9",
    limitMinAdult: "Số người lớn không thể nhỏ hơn số em bé",
    limitMaxInfant: "Số em bé không thể vượt quá số người lớn",
  };

  const handleDecrease = () => {
    if (passengerType === PassengerType.ADULT) {
      if (count > minCount) {
        setCount(count - 1);
        setError(null);
        setShowError(undefined);
      } else if (count === 1) {
        setError(null);
        setShowError(undefined);
      } else {
        setError(titleError.limitMinAdult);
        setShowError(PassengerType.ADULT);
      }
    } else {
      if (count > minCount) {
        setCount(count - 1);
        setError(null);
        setShowError(undefined);
      }
    }
  };

  const handleIncrease = () => {
    if (passengerType === PassengerType.ADULT) {
      if (count < maxCount) {
        setCount(count + 1);
        setError(null);
        setShowError(undefined);
      } else {
        setError(titleError.limitPassenger);
        setShowError(PassengerType.ADULT);
      }
    } else if (passengerType === PassengerType.CHILD) {
      if (count < maxCount) {
        setCount(count + 1);
        setError(null);
        setShowError(undefined);
      } else {
        setError(titleError.limitPassenger);
        setShowError(PassengerType.CHILD);
      }
    } else {
      if (count < maxCount) {
        setCount(count + 1);
        setError(null);
        setShowError(undefined);
      } else {
        setError(titleError.limitMaxInfant);
        setShowError(PassengerType.INFANT);
      }
    }
  };

  return (
    <div className="flex flex-1 flex-col">
      <div className="flex flex-1 items-center justify-between">
        {passengerType === PassengerType.ADULT ? (
          <p className="text-heading-3 flex items-center gap-3 font-medium">
            <FaUser />
            <div className="flex items-center gap-1">
              Người lớn
              <Tooltip title="Từ 12 tuổi trở lên">
                <IoIosInformationCircleOutline className="text-sm" />
              </Tooltip>
            </div>
          </p>
        ) : passengerType === PassengerType.CHILD ? (
          <p className="text-heading-3 flex items-center gap-3 font-medium">
            <FaChild />
            <div className="flex items-center gap-1">
              Trẻ em
              <Tooltip title="Từ 2 đến 11 tuổi">
                <IoIosInformationCircleOutline className="text-sm" />
              </Tooltip>
            </div>
          </p>
        ) : (
          <p className="text-heading-3 flex items-center gap-3 font-medium">
            <FaBabyCarriage />
            <div className="flex items-center gap-1">
              Em bé
              <Tooltip title="Dưới 2 tuổi">
                <IoIosInformationCircleOutline className="text-sm" />
              </Tooltip>
            </div>
          </p>
        )}

        <div className="flex items-center">
          <Tooltip title="Giảm">
            <Button
              type="text"
              icon={<CiCircleMinus />}
              onClick={handleDecrease}
            />
          </Tooltip>

          {count}

          <Tooltip title="Thêm">
            <Button
              type="text"
              icon={<CiCirclePlus />}
              onClick={handleIncrease}
            />
          </Tooltip>
        </div>
      </div>

      {error && passengerType === showError && (
        <p className="text-right text-red-600">{error}</p>
      )}
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
  const [showError, setShowError] = useState<string | undefined>(undefined);

  const handleOpenChange: DropdownProps["onOpenChange"] = (nextOpen, info) => {
    if (info.source === "trigger" || nextOpen) {
      setOpen(nextOpen);
    }
  };

  const calculateMinAdult = () => {
    if (infant > 0) {
      return infant;
    } else {
      return 1;
    }
  };

  const calculateMaxPassenger = (passengerType: string) => {
    if (passengerType === PassengerType.ADULT) {
      return 9 - children;
    } else if (passengerType === PassengerType.CHILD) {
      return 9 - adult;
    } else {
      return adult;
    }
  };

  const items: MenuProps["items"] = [
    {
      label: (
        <ItemMenu
          passengerType={PassengerType.ADULT}
          showError={showError}
          setShowError={setShowError}
          count={adult}
          setCount={setAdult}
          minCount={calculateMinAdult()}
          maxCount={calculateMaxPassenger(PassengerType.ADULT)}
        />
      ),
      key: PassengerType.ADULT,
      // icon: <FaUser />,
    },
    {
      label: (
        <ItemMenu
          passengerType={PassengerType.CHILD}
          showError={showError}
          setShowError={setShowError}
          count={children}
          setCount={setChildren}
          maxCount={calculateMaxPassenger(PassengerType.CHILD)}
        />
      ),
      key: PassengerType.CHILD,
      // icon: <FaChild />,
    },
    {
      label: (
        <ItemMenu
          passengerType={PassengerType.INFANT}
          showError={showError}
          setShowError={setShowError}
          count={infant}
          setCount={setInfant}
          maxCount={calculateMaxPassenger(PassengerType.INFANT)}
        />
      ),
      key: PassengerType.INFANT,
      // icon: <FaBabyCarriage />,
    },
  ];

  return (
    <Form.Item name="passengers">
      <Dropdown menu={{ items }} onOpenChange={handleOpenChange} open={open}>
        <Button className="w-full" size="large">
          <UserOutlined />{" "}
          {`Hành khách: ${[adult > 0 ? `${adult} người lớn` : "", children > 0 ? `${children} trẻ em` : "", infant > 0 ? `${infant} em bé` : ""].filter(Boolean).join(", ")}`}
        </Button>
      </Dropdown>
    </Form.Item>
  );
};

export default PassengerSelector;
