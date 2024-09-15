import { Anchor, ConfigProvider, Dropdown, Menu } from "antd";
import React from "react";
import AccountMenu from "./AccountMenu";
import LanguageMenu from "./LanguageMenu";

const Header: React.FC = () => {
  const menuItems = [
    {
      key: "0",
      title: "Khám phá",
      href: "#0",
      submenu: [
        { key: "0-1", title: "Submenu 1", href: "#0-1" },
        { key: "0-2", title: "Submenu 2", href: "#0-2" },
      ],
    },
    {
      key: "1",
      title: "Chuyến bay của tôi",
      href: "#1",
      submenu: [
        { key: "1-1", title: "Submenu 1", href: "#1-1" },
        { key: "1-2", title: "Submenu 2", href: "#1-2" },
      ],
    },
    {
      key: "2",
      title: "Dịch vụ bổ sung",
      href: "#2",
      submenu: [
        { key: "2-1", title: "Submenu 1", href: "#2-1" },
        { key: "2-2", title: "Submenu 2", href: "#2-2" },
      ],
    },
    {
      key: "3",
      title: "Góp ý",
      href: "#3",
      submenu: [
        { key: "3-1", title: "Submenu 1", href: "#3-1" },
        { key: "3-2", title: "Submenu 2", href: "#3-2" },
      ],
    },
    {
      key: "4",
      title: "Hỗ trợ",
      href: "#4",
      submenu: [
        { key: "4-1", title: "Submenu 1", href: "#4-1" },
        { key: "4-2", title: "Submenu 2", href: "#4-2" },
      ],
    },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto flex items-center justify-between px-4 py-2">
        {/* Logo */}
        <a href="../" className="flex items-center">
          <img
            src="/logo512.png"
            alt="DaViKa Airways"
            className="xl:h-18 h-12 w-auto transition-transform duration-300 ease-in-out hover:scale-110 md:h-14 lg:h-16"
          />
        </a>

        {/* Menu Navigation */}
        <div className="hidden items-center space-x-8 md:flex">
          {" "}
          {/* Adjusted space-x */}
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
                title: (
                  <Dropdown
                    overlay={
                      <Menu>
                        {item.submenu.map((subItem) => (
                          <Menu.Item key={subItem.key}>
                            <a href={subItem.href}>{subItem.title}</a>
                          </Menu.Item>
                        ))}
                      </Menu>
                    }
                    trigger={["hover"]}
                  >
                    <a
                      href={item.href}
                      className="font-bold transition-colors duration-200 hover:text-blue-600"
                    >
                      {item.title}
                    </a>
                  </Dropdown>
                ),
                href: item.href,
              }))}
              className="flex items-center space-x-8 text-gray-700"
              style={{ fontWeight: "bold" }}
            />
          </ConfigProvider>
        </div>

        {/* Right Side Menus */}
        <div className="flex items-center space-x-4">
          <LanguageMenu />
          <AccountMenu />
          <div className="md:hidden">
            <Menu />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
