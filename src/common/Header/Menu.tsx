import { Drawer } from "antd";
import React, { useEffect, useState } from "react";
import { IoMenuOutline } from "react-icons/io5";

interface MenuItem {
  key: string;
  title: string;
  href: string;
}

interface MenuProps {
  menuItems: MenuItem[];
}

const Menu: React.FC<MenuProps> = ({ menuItems }) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1024) {
        setOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <IoMenuOutline
        className="m-2 cursor-pointer text-3xl text-blue-600 transition-transform duration-300 ease-in-out hover:scale-110"
        onClick={() => setOpen(true)}
      />
      <Drawer
        title="Menu"
        onClose={() => setOpen(false)}
        open={open}
        className="custom-drawer"
        bodyStyle={{ padding: "0" }}
        headerStyle={{
          backgroundColor: "#f0f0f0",
          borderBottom: "1px solid #e0e0e0",
        }}
      >
        <div className="flex flex-col space-y-2 p-5">
          {menuItems.map((item) => (
            <a
              key={item.key}
              href={item.href}
              className="block w-full rounded-lg bg-gray-100 px-4 py-3 text-center text-lg font-bold text-gray-700 shadow-sm transition-colors duration-200 hover:bg-blue-500 hover:text-white"
            >
              {item.title}
            </a>
          ))}
        </div>
      </Drawer>
    </>
  );
};

export default Menu;
