import { Anchor, Menu as AntdMenu, ConfigProvider, Dropdown } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import AccountMenu from "./AccountMenu";
import LanguageMenu from "./LanguageMenu";
import Menu from "./Menu";

const Header: React.FC = () => {
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
          <AccountMenu />
          <div className="lg:hidden">
            <Menu menuItems={menuItems} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
