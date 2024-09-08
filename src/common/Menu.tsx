import React from "react";
import type { MenuProps } from "antd";
import { Dropdown, Space } from "antd";
import { IoMenu } from "react-icons/io5";

const items: MenuProps["items"] = [
  {
    label: <a href="#0">Khám phá</a>,
    key: "0",
  },
  {
    type: "divider",
  },
  {
    label: <a href="#1">Chuyến bay của tôi</a>,
    key: "1",
  },
  {
    type: "divider",
  },
  {
    label: <a href="#2">Dịch vụ bổ sung</a>,
    key: "2",
  },
  {
    type: "divider",
  },
  {
    label: <a href="#3">Góp ý</a>,
    key: "3",
  },
  {
    type: "divider",
  },
  {
    label: <a href="#4">Hỗ trợ</a>,
    key: "4",
  },
];

const Menu: React.FC = () => {
  return (
    <Dropdown menu={{ items }} trigger={["click"]}>
      <a onClick={(e) => e.preventDefault()}>
        <Space>
          <IoMenu className="m-2 size-8" />
        </Space>
      </a>
    </Dropdown>
  );
};

export default Menu;
