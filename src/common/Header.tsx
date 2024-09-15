import { Anchor, Menu as AntdMenu, ConfigProvider, Dropdown } from "antd";
import React from "react";
import AccountMenu from "./AccountMenu";
import LanguageMenu from "./LanguageMenu";
import Menu from "./Menu"; // Import Menu component

const Header: React.FC = () => {
  const menuItems = [
    {
      key: "0",
      title: "Chuyến bay của tôi",
      href: "#",
    },
    {
      key: "1",
      title: "Online Check-in",
      href: "#1",
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
      title: "Hỗ trợ",
      href: "#3",
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
            className="xl:h-18 lg:h-18 h-12 w-full max-w-lg transition-transform duration-300 ease-in-out hover:scale-110 md:h-14"
          />
        </a>

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
                            <a href={subItem.href} className="block px-4 py-2">
                              {subItem.title}
                            </a>
                          </AntdMenu.Item>
                        ))}
                      </AntdMenu>
                    }
                    trigger={["hover"]}
                    overlayClassName="custom-dropdown"
                  >
                    <a
                      href={item.href}
                      className="px-4 py-2 font-bold transition-colors duration-200 hover:text-blue-600"
                    >
                      {item.title}
                    </a>
                  </Dropdown>
                ) : (
                  <a
                    href={item.href}
                    className="px-4 py-2 font-bold transition-colors duration-200 hover:text-blue-600"
                  >
                    {item.title}
                  </a>
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
          <AccountMenu />
          <div className="md:hidden">
            <Menu /> {/* Add Menu here */}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
