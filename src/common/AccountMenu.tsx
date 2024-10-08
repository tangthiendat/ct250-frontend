import { Dropdown, Space } from "antd";
import React, { useCallback } from "react";
import { FaUserCircle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useLogout } from "../features/auth/hooks/UseAuth";
import { IUser } from "../interfaces";

interface AccountMenuProps {
  user?: IUser;
}

const AccountMenu: React.FC<AccountMenuProps> = ({ user }) => {
  const { logout } = useLogout();
  const navigate = useNavigate();

  const handleLogout = useCallback(() => {
    logout();
  }, [logout]);

  const handleLoginClick = useCallback(() => {
    navigate("/login");
  }, [navigate]);

  type MenuItemType = {
    label: React.ReactNode;
    key: string;
    type?: undefined;
  };

  const items: MenuItemType[] = [
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
  ];

  return (
    <div className="flex items-center">
      {user ? (
        <>
          <Dropdown
            menu={{ items }}
            trigger={["click"]}
            overlayClassName="rounded-lg shadow-lg"
          >
            <a
              onClick={(e) => e.preventDefault()}
              className="flex items-center"
            >
              <Space>
                <FaUserCircle className="m-2 text-3xl text-gray-600 transition-transform duration-200 hover:scale-110 hover:text-blue-600" />
              </Space>
            </a>
          </Dropdown>
          <span className="ml-2 text-sm font-semibold text-gray-700">
            {user.firstName} {user.lastName}
          </span>
        </>
      ) : (
        <button
          onClick={handleLoginClick}
          className="rounded-lg bg-blue-500 px-3 py-1.5 text-sm text-white transition-colors duration-200 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
        >
          Đăng nhập
        </button>
      )}
    </div>
  );
};

export default React.memo(AccountMenu);
