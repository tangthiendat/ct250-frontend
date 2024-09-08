import React from "react";
import type { MenuProps } from "antd";
import { Dropdown, Space } from "antd";
import { FaUserCircle } from "react-icons/fa";

const items: MenuProps["items"] = [
  {
    label: <a href="/login">Đăng nhập</a>,
    key: "login",
  },
  {
    type: "divider",
  },
  {
    label: <a href="/register">Đăng ký</a>,
    key: "register",
  },
];

const AccountMenu: React.FC = () => {
  return (
    <Dropdown menu={{ items }} trigger={["click"]}>
      <a onClick={(e) => e.preventDefault()}>
        <Space>
          <FaUserCircle className="m-2 size-6 md:size-8 lg:size-10" />
        </Space>
      </a>
    </Dropdown>
  );
};

export default AccountMenu;
