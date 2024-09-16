import { Dropdown, Space } from "antd";
import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useLoggedInUser } from "../features/auth/hooks/UseLoggedInUser";

const AccountMenu: React.FC = () => {
  const { user, setUser } = useLoggedInUser();
  const navigate = useNavigate();

  const handleLogout = () => {
    setUser(null);
    window.localStorage.removeItem("access_token");
    navigate("/login");
  };

  type MenuItemType = {
    label: React.ReactNode;
    key: string;
    type?: undefined;
  };

  const items: MenuItemType[] = user
    ? [
        {
          label: (
            <Link
              to="/account"
              className="block px-4 py-2 text-gray-700 transition-colors duration-200 hover:bg-blue-500 hover:text-white"
            >
              Quản lý tài khoản
            </Link>
          ),
          key: "account",
        },
        {
          label: (
            <span
              onClick={handleLogout}
              className="block cursor-pointer px-4 py-2 text-gray-700 transition-colors duration-200 hover:bg-blue-500 hover:text-white"
            >
              Đăng xuất
            </span>
          ),
          key: "logout",
        },
      ]
    : [
        {
          label: (
            <Link
              to="/login"
              className="block px-4 py-2 text-gray-700 transition-colors duration-200 hover:bg-blue-500 hover:text-white"
            >
              Đăng nhập
            </Link>
          ),
          key: "login",
        },
        {
          type: "divider",
        },
        {
          label: (
            <Link
              to="/register"
              className="block px-4 py-2 text-gray-700 transition-colors duration-200 hover:bg-blue-500 hover:text-white"
            >
              Đăng ký
            </Link>
          ),
          key: "register",
        },
      ];

  return (
    <>
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
    </>
  );
};

export default AccountMenu;
