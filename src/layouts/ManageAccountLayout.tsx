import { Layout, Menu, Tabs } from "antd";
import { Content } from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";
import { useState } from "react";
import { FaHistory, FaUserCircle } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";

const menuItems = [
  {
    label: <NavLink to="/manage-account/my-account">Tài khoản của tôi</NavLink>,
    key: "my-account",
    icon: <FaUserCircle />,
  },
  {
    label: (
      <NavLink to="/manage-account/transaction-history">
        Lịch sử giao dịch
      </NavLink>
    ),
    key: "transaction-history",
    icon: <FaHistory />,
  },
];

const ManageAccountLayout: React.FC = () => {
  const [currentMenuItem, setCurrentMenuItem] = useState("my-account");

  const handleMenuClick = (key: string) => {
    setCurrentMenuItem(key);
    console.log(key);
  };

  return (
    <Layout className="min-h-[500px]">
      <Sider
        theme="light"
        breakpoint="md"
        collapsedWidth="1"
        collapsible={false}
      >
        <Menu
          theme="light"
          mode="inline"
          selectedKeys={[currentMenuItem]}
          items={menuItems}
          onClick={(e) => handleMenuClick(e.key)}
        />
      </Sider>

      <Layout>
        <Tabs
          className="absolute md:hidden"
          activeKey={currentMenuItem}
          type="card"
          size="large"
          items={menuItems.map((item) => {
            return {
              label: item.label,
              key: item.key,
            };
          })}
          onChange={(key) => handleMenuClick(key)}
        />

        <Content className="mt-10 md:mt-0 md:p-2">
          <div className="rounded-md bg-white px-2 py-6 shadow-md md:bg-transparent md:p-0 md:shadow-none">
            <Outlet />
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default ManageAccountLayout;
