import { Anchor, Menu as AntdMenu, ConfigProvider, Dropdown } from "antd";
import React, { useCallback, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AccountMenu from "./AccountMenu";
import LanguageMenu from "./LanguageMenu";
import Menu from "./Menu";

const Header: React.FC = () => {
  const navigate = useNavigate();
  const [showAccountMenu, setShowAccountMenu] = useState<boolean>(false);
  const accessToken = localStorage.getItem("access_token");

  useEffect(() => {
    if (accessToken) {
      setShowAccountMenu(true);
    } else {
      setShowAccountMenu(false);
    }
  }, [accessToken]);

  const handleLoginClick = useCallback(() => {
    navigate("/login");
  }, [navigate]);

  const handleSignupClick = useCallback(() => {
    navigate("/register");
  }, [navigate]);

  const menuItems = [
    {
      key: "0",
      title: "Chuyến bay của tôi",
      href: "/flights",
    },
    {
      key: "1",
      title: "Online Check-in",
      href: "/checkin",
    },
    {
      key: "2",
      title: "Dịch vụ bổ sung",
      href: "/services",
      submenu: [
        { key: "2-1", title: "Submenu 1", href: "/services/submenu1" },
        { key: "2-2", title: "Submenu 2", href: "/services/submenu2" },
      ],
    },
    {
      key: "3",
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
                      {item.title}
                    </a>
                  </Dropdown>
                ) : (
                  <a
                    href={item.href}
                    className="g-red-700 px-0 py-2 font-bold transition-all duration-500 hover:text-blue-600 lg:px-3 xl:px-8"
                  >
                    {item.title}
                  </a>
                ),
                href: item.href,
              }))}
            />
          </ConfigProvider>
        </div>

        {/* Right Side Menus */}
        <div className="flex items-center">
          <LanguageMenu />
          {showAccountMenu ? (
            <AccountMenu />
          ) : (
            <>
              <button
                onClick={handleLoginClick}
                className="min-w-28 rounded-lg bg-blue-500 py-2 text-base text-white transition-colors duration-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
              >
                Đăng nhập
              </button>
              <button
                onClick={handleSignupClick}
                className="ml-2 min-w-24 rounded-lg border border-blue-500 bg-white py-2 text-base text-blue-500 transition-colors duration-500 hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
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
