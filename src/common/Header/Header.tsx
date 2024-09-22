import {
  Anchor,
  Menu as AntdMenu,
  ConfigProvider,
  Divider,
  Dropdown,
} from "antd";
import React, { useCallback, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { IUser } from "../../interfaces";
import { userService } from "../../services/user-service";
import AccountMenu from "./AccountMenu";
import LanguageMenu from "./LanguageMenu";
import Menu from "./Menu";
import Search from "./Search";

const Header: React.FC = () => {
  const navigate = useNavigate();
  const [showAccountMenu, setShowAccountMenu] = useState<boolean>(false);
  const [user, setUser] = useState<IUser | null>(null);
  const accessToken = localStorage.getItem("access_token");

  useEffect(() => {
    const fetchUserData = async () => {
      if (accessToken) {
        try {
          const response = await userService.getLoggedInUser();
          const userData = response.payload;
          if (userData) {
            setUser(userData);
            setShowAccountMenu(true);
          }
        } catch (error) {
          console.error("Failed to fetch user data:", error);
        }
      } else {
        setShowAccountMenu(false);
      }
    };

    fetchUserData();
  }, [accessToken]);

  const handleLoginClick = useCallback(() => {
    navigate("/login");
  }, [navigate]);

  const handleSignupClick = useCallback(() => {
    navigate("/register");
  }, [navigate]);

  const menuItems = [
    {
      key: "flights",
      title: "Chuyến bay của tôi",
      href: "/flights",
    },
    {
      key: "checkin",
      title: "Online Check-in",
      href: "/checkin",
    },
    {
      key: "services",
      title: "Dịch vụ bổ sung",
      href: "/services",
      submenu: [
        { key: "2-1", title: "Submenu 1", href: "/services/submenu1" },
        { key: "2-2", title: "Submenu 2", href: "/services/submenu2" },
      ],
    },
    {
      key: "support",
      title: "Hỗ trợ",
      href: "/support",
    },
  ];

  return (
    <header className="sticky top-0 z-50 rounded-b-3xl bg-white shadow-md">
      <div className="mx-auto flex items-center justify-between px-4 py-2">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img
            src="/logo512.png"
            alt="DaViKa Airways"
            className="h-12 w-full min-w-24 transition-all duration-1000 ease-in-out hover:scale-110 lg:h-14 xl:h-16"
          />
        </Link>

        {/* Menu Navigation */}
        <div className="g-blue-700 hidden items-center lg:flex">
          <ConfigProvider
            theme={{
              token: {
                fontSize: 16,
              },
            }}
          >
            <Anchor
              direction="horizontal"
              items={menuItems.map((item) => ({
                key: item.key,
                title: item.submenu ? (
                  <Dropdown
                    overlay={
                      <AntdMenu className="mt-2 border-none shadow-lg">
                        {item.submenu.map((subItem) => (
                          <AntdMenu.Item key={subItem.key}>
                            <Link to={subItem.href} className="block px-4 py-2">
                              {subItem.title}
                            </Link>
                          </AntdMenu.Item>
                        ))}
                      </AntdMenu>
                    }
                    trigger={["hover"]}
                    overlayClassName="custom-dropdown"
                  >
                    <a
                      href={item.href}
                      className="g-red-700 px-0 py-2 font-bold transition-all duration-500 hover:text-blue-600 lg:px-3 xl:px-8"
                    >
                      {item.title.toUpperCase()}
                    </a>
                  </Dropdown>
                ) : (
                  <a
                    href={item.href}
                    className="g-red-700 px-0 py-2 font-bold transition-all duration-500 hover:text-blue-600 lg:px-3 xl:px-8"
                  >
                    {item.title.toUpperCase()}
                  </a>
                ),
                href: item.href,
              }))}
            />
          </ConfigProvider>
        </div>

        {/* Right Side Menus */}
        <div className="flex-col items-center">
          <div className="flex items-center justify-end">
            <Search />
            <Divider type="vertical" className="h-6 bg-black" />
            <LanguageMenu />
          </div>
          {showAccountMenu ? (
            <AccountMenu />
          ) : (
            <>
              <button
                onClick={handleLoginClick}
                className="min-w-28 rounded-lg bg-blue-500 py-2 text-base text-white transition-colors duration-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 max-[465px]:hidden"
              >
                Đăng nhập
              </button>
              <button
                onClick={handleSignupClick}
                className="ml-2 min-w-24 rounded-lg border border-blue-500 bg-white py-2 text-base text-blue-500 transition-colors duration-500 hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 max-[465px]:hidden"
              >
                Đăng ký
              </button>
            </>
          )}
          <div className="lg:hidden">
            <Menu menuItems={menuItems} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
