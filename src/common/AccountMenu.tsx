import type { MenuProps } from "antd";
import { Dropdown, Space } from "antd";
import React, { useState } from "react";
import { FaUserCircle } from "react-icons/fa";

const AccountMenu: React.FC = () => {
  const [loggedIn, setLoggedIn] = useState(true);
  // const [loggedIn, setLoggedIn] = useState(false);

  const items: MenuProps["items"] = loggedIn
    ? [
        {
          label: (
            <a
              href="/manage-account/my-account"
              className="block px-4 py-1 text-gray-700"
            >
              Quản lý tài khoản
            </a>
          ),
          key: "manage-account",
        },
        {
          type: "divider",
        },
        {
          label: (
            <a href="/" className="block px-4 py-1 text-gray-700">
              Đăng xuất
            </a>
          ),
          key: "logout",
        },
      ]
    : [
        {
          label: (
            <a href="/login" className="block px-4 py-1 text-gray-700">
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
            <a href="/register" className="block px-4 py-1 text-gray-700">
              Đăng ký
            </a>
          ),
          key: "register",
        },
      ];

  return (
    <Dropdown
      menu={{ items }}
      trigger={["click"]}
      overlayClassName="rounded-lg shadow-lg"
    >
      <a onClick={(e) => e.preventDefault()} className="flex items-center">
        <Space>
          <FaUserCircle className="m-2 text-3xl text-gray-600 transition-transform duration-200 hover:scale-110 hover:text-blue-600 md:text-2xl lg:text-3xl" />
        </Space>
      </a>
    </Dropdown>
  );
};

export default AccountMenu;
