import React, { useEffect, useState } from "react";
import { Drawer } from "antd";
import { IoMenuOutline } from "react-icons/io5";

const items = [
  { key: "0", title: "Khám phá", href: "#0" },
  { key: "1", title: "Chuyến bay của tôi", href: "#1" },
  { key: "2", title: "Dịch vụ bổ sung", href: "#2" },
  { key: "3", title: "Góp ý", href: "#3" },
  { key: "4", title: "Hỗ trợ", href: "#4" },
];

const Menu: React.FC = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 841) {
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
        color="blue"
        className="m-2 size-8"
        onClick={() => setOpen(true)}
      />
      <Drawer title="Menu" onClose={() => setOpen(false)} open={open}>
        <div>
          {items.map((item) => (
            <a
              key={item.key}
              href={item.href}
              className="my-2 block rounded-lg px-5 py-3 text-xl hover:bg-gray-200"
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
