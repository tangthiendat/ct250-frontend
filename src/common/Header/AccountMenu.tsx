import { Dropdown, Space } from "antd";
import React, { useCallback } from "react";
import { Link } from "react-router-dom";
import { useLogout } from "../../features/auth/hooks/UseAuth";
import { useAvatarUrl } from "../../features/auth/hooks/UseAvatarUrl";
import { useLoggedInUser } from "../../features/auth/hooks/UseLoggedInUser";
import UserAvatar from "./UserAvatar";

const AccountMenu: React.FC = () => {
  const { logout } = useLogout();
  const { user: loggedInUser } = useLoggedInUser();
  const avatarUrl = useAvatarUrl(loggedInUser ?? null);

  const handleLogout = useCallback(() => {
    logout();
    localStorage.removeItem("avatarUrl"); // Clear avatar URL on logout
  }, [logout]);

  type MenuItemType = {
    label: React.ReactNode;
    key: string;
    type?: undefined;
  };

  const items: MenuItemType[] = [
    {
      label: (
        <Link
          to="/manage-account"
          className="block cursor-pointer px-4 py-2 font-bold text-gray-700"
        >
          Quản lý tài khoản
        </Link>
      ),
      key: "manage-account",
    },
    {
      label: (
        <span
          onClick={handleLogout}
          className="block cursor-pointer px-4 py-2 font-bold text-gray-700"
        >
          Đăng xuất
        </span>
      ),
      key: "logout",
    },
  ];

  return (
    <div className="flex items-center">
      {loggedInUser && (
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
                <UserAvatar avatarUrl={avatarUrl} />
              </Space>
            </a>
          </Dropdown>
          <span className="text-sm font-semibold text-gray-700">
            {loggedInUser.firstName} {loggedInUser.lastName}
          </span>
        </>
      )}
    </div>
  );
};

export default React.memo(AccountMenu);
