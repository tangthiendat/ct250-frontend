import React, { useState } from "react";
import { Anchor, ConfigProvider } from "antd";
import LanguageMenu from "./LanguageMenu";
import AccountMenu from "./AccountMenu";
import Menu from "./Menu";

const Header: React.FC = () => {
  const [isLoggedin, setIsLoggedin] = useState(false);

  return (
    <header className="z-10 rounded-3xl bg-white shadow-xl">
      <div className="m-3 flex items-center justify-between">
        <a href="../">
          <img
            src="/logo512.png"
            alt="DaViKa Airways"
            className="h-14 md:h-14 lg:h-20 xl:h-24"
          />
        </a>

        <div className="text space-x-4 max-[840px]:hidden">
          <ConfigProvider
            theme={{
              token: {
                fontSize: 18,
              },
            }}
          >
            <Anchor
              offsetTop={-200}
              direction="horizontal"
              items={[
                { key: "0", title: "Khám phá", href: "#0" },
                { key: "1", title: "Chuyến bay của tôi", href: "#1" },
                { key: "2", title: "Dịch vụ bổ sung", href: "#2" },
                { key: "3", title: "Góp ý", href: "#3" },
                { key: "4", title: "Hỗ trợ", href: "#4" },
              ]}
            />
          </ConfigProvider>
        </div>

        <div className="flex items-center">
          <LanguageMenu />
          <AccountMenu />
          <div className="min-[841px]:hidden">
            <Menu />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
