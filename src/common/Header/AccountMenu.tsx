// import { Dropdown, Space } from "antd";
// import React, { useCallback } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { useLogout } from "../../features/auth/hooks/UseAuth";
// import { useAvatarUrl } from "../../features/auth/hooks/UseAvatarUrl";
// import { IUser } from "../../interfaces";
// import UserAvatar from "./UserAvatar";

// interface AccountMenuProps {
//   user?: IUser;
// }

// const AccountMenu: React.FC<AccountMenuProps> = ({ user }) => {
//   const { logout } = useLogout();
//   const navigate = useNavigate();
//   const avatarUrl = useAvatarUrl(user);

//   const handleLogout = useCallback(() => {
//     logout();
//     localStorage.removeItem("avatarUrl"); // Clear avatar URL on logout
//   }, [logout]);

//   const handleLoginClick = useCallback(() => {
//     navigate("/login");
//   }, [navigate]);

//   type MenuItemType = {
//     label: React.ReactNode;
//     key: string;
//     type?: undefined;
//   };

//   const items: MenuItemType[] = [
//     {
//       label: (
//         <Link
//           to="/account"
//           className="block px-4 py-2 text-gray-700 transition-colors duration-200 hover:bg-blue-500 hover:text-white"
//         >
//           Quản lý tài khoản
//         </Link>
//       ),
//       key: "account",
//     },
//     {
//       label: (
//         <span
//           onClick={handleLogout}
//           className="block cursor-pointer px-4 py-2 text-gray-700 transition-colors duration-200 hover:bg-blue-500 hover:text-white"
//         >
//           Đăng xuất
//         </span>
//       ),
//       key: "logout",
//     },
//   ];

//   return (
//     <div className="flex items-center">
//       {user ? (
//         <>
//           <Dropdown
//             menu={{ items }}
//             trigger={["click"]}
//             overlayClassName="rounded-lg shadow-lg"
//           >
//             <a
//               onClick={(e) => e.preventDefault()}
//               className="flex items-center"
//             >
//               <Space>
//                 <UserAvatar avatarUrl={avatarUrl} />
//               </Space>
//             </a>
//           </Dropdown>
//           <span className="ml-2 text-sm font-semibold text-gray-700">
//             {user.firstName} {user.lastName}
//           </span>
//         </>
//       ) : (
//         <button
//           onClick={handleLoginClick}
//           className="rounded-lg bg-blue-500 px-3 py-1.5 text-sm text-white transition-colors duration-200 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
//         >
//           Đăng nhập
//         </button>
//       )}
//     </div>
//   );
// };

// export default React.memo(AccountMenu);

// src/common/Header/AccountMenu.tsx
import { Dropdown, Space } from "antd";
import React, { useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useLogout } from "../../features/auth/hooks/UseAuth";

import UserAvatar from "./UserAvatar";
import { useUser } from "./UserContext";

const AccountMenu: React.FC = () => {
  const { user, avatarUrl, isLoading } = useUser();
  const { logout } = useLogout();
  const navigate = useNavigate();

  const handleLogout = useCallback(() => {
    logout();
    localStorage.removeItem("avatarUrl"); // Clear avatar URL on logout
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

  if (isLoading) {
    return null; // Hoặc hiển thị một spinner nếu cần
  }

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
                <UserAvatar avatarUrl={avatarUrl} />
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
