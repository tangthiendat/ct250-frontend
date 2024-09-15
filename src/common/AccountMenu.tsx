import type { MenuProps } from "antd";
import { Dropdown, Space } from "antd";
import React from "react";
import { FaUserCircle } from "react-icons/fa";

const items: MenuProps["items"] = [
  {
    label: (
      <a
        href="/login"
        className="block px-4 py-2 text-gray-700 transition-colors duration-200 hover:bg-blue-500 hover:text-white"
      >
        Đăng nhập
      </a>
    ),
    key: "login",
  },
  {
    type: "divider",
  },
  {
    label: (
      <a
        href="/register"
        className="block px-4 py-2 text-gray-700 transition-colors duration-200 hover:bg-blue-500 hover:text-white"
      >
        Đăng ký
      </a>
    ),
    key: "register",
  },
];

const AccountMenu: React.FC = () => {
  return (
    <Dropdown
      menu={{ items }}
      trigger={["click"]}
      overlayClassName="rounded-lg shadow-lg"
    >
      <a onClick={(e) => e.preventDefault()} className="flex items-center">
        <Space>
          <FaUserCircle className="m-2 text-3xl text-gray-600 transition-transform duration-200 hover:scale-110 hover:text-blue-600 md:text-4xl lg:text-5xl" />
        </Space>
      </a>
    </Dropdown>
  );
};

export default AccountMenu;
