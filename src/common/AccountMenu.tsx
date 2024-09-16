import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Dropdown, Space, notification } from "antd";
import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

import { useLoggedInUser } from "../features/auth/hooks/UseLoggedInUser";
import { authService } from "../services/auth-service";

const AccountMenu: React.FC = () => {
  const { user, isLoading } = useLoggedInUser();
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const [notificationApi, contextHolder] = notification.useNotification();

  const { mutate: logout } = useMutation({
    mutationFn: authService.logout,
    onSuccess: () => {
      notificationApi.success({
        message: "Đăng xuất thành công",
      });
      window.localStorage.removeItem("access_token");
      queryClient.invalidateQueries(["user", "logged-in"]);
      navigate("/login");
    },
    onError: (error) => {
      console.error(error);
      notificationApi.error({
        message: "Đăng xuất thất bại",
      });
    },
  });

  const handleLogout = () => {
    logout();
  };

  const items = user
    ? [
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
      {contextHolder}
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
