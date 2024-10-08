import { Anchor, Menu as AntdMenu, ConfigProvider, Dropdown } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import AccountMenu from "./AccountMenu";
import LanguageMenu from "./LanguageMenu";
import Menu from "./Menu";
import { IUser } from "../interfaces";

interface HeaderProps {
  user?: IUser;
}

const Header: React.FC<HeaderProps> = ({ user }) => {
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
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto flex items-center justify-between px-4 py-2">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img
            src="/logo512.png"
            alt="DaViKa Airways"
            className="xl:h-18 lg:h-18 h-12 w-full max-w-lg transition-transform duration-300 ease-in-out hover:scale-110 md:h-14"
          />
        </Link>

        {/* Menu Navigation */}
        <div className="hidden items-center space-x-8 md:flex">
          <ConfigProvider
            theme={{
              token: {
                fontSize: 16,
              },
            }}
          >
            <Anchor
              offsetTop={-200}
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
                    <span className="cursor-pointer px-4 py-2 font-bold transition-colors duration-200 hover:text-blue-600">
                      {item.title}
                    </span>
                  </Dropdown>
                ) : (
                  <Link
                    to={item.href}
                    className="px-4 py-2 font-bold transition-colors duration-200 hover:text-blue-600"
                  >
                    {item.title}
                  </Link>
                ),
                href: item.href,
              }))}
              className="flex items-center space-x-8 font-bold text-gray-700"
            />
          </ConfigProvider>
        </div>

        {/* Right Side Menus */}
        <div className="flex items-center space-x-4">
          <LanguageMenu />
          <AccountMenu user={user} />
          <div className="md:hidden">
            <Menu />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
