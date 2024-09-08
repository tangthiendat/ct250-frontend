import React, { useState } from "react";
import type { MenuProps } from "antd";
import { Dropdown, Space } from "antd";
import Language from "./Language";

const items: MenuProps["items"] = [
  {
    label: <Language language="Viet Nam" />,
    key: "vi-language",
  },
  {
    type: "divider",
  },
  {
    label: <Language language="English" />,
    key: "en-language",
  },
];

const LanguageMenu: React.FC = () => {
  const [currentLanguage, setCurrentLanguage] = useState("Viet Nam");

  const handleMenuClick: MenuProps["onClick"] = (e) => {
    if (e.key === "vi-language") {
      setCurrentLanguage("Viet Nam");
    } else if (e.key === "en-language") {
      setCurrentLanguage("English");
    }
  };

  return (
    <Dropdown menu={{ items, onClick: handleMenuClick }} trigger={["click"]}>
      <a onClick={(e) => e.preventDefault()}>
        <Space>
          <Language language={currentLanguage} />
        </Space>
      </a>
    </Dropdown>
  );
};

export default LanguageMenu;
