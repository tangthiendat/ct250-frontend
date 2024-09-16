import { Layout, Menu, Tabs } from "antd";
import { Content } from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";
import { useState } from "react";
import { FaHistory, FaUserCircle } from "react-icons/fa";
import { FaCircleInfo } from "react-icons/fa6";
import { NavLink, Outlet } from "react-router-dom";

const menuItems = [
  {
    label: <NavLink to="/manage-account/my-account">Tài khoản của tôi</NavLink>,
    key: "my-account",
    icon: <FaUserCircle />,
  },
  {
    label: (
      <NavLink to="/manage-account/personal-info">Thông tin cá nhân</NavLink>
    ),
    key: "personal-info",
    icon: <FaCircleInfo />,
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

  const handleMenuClick = (e: { key: string }) => {
    setCurrentMenuItem(e.key);
  };

  return (
    <Layout className="min-h-[500px]">
      <Sider
        theme="light"
        breakpoint="md"
        collapsedWidth="1"
        collapsible={false}
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <Menu
          theme="light"
          mode="inline"
          defaultSelectedKeys={["my-account"]}
          selectedKeys={[currentMenuItem]}
          items={menuItems}
          onClick={handleMenuClick}
        />
      </Sider>

      <Layout>
        <Tabs
          className="absolute md:hidden"
          defaultActiveKey="1"
          type="card"
          size="large"
          items={menuItems.map((item) => {
            return {
              label: item.label,
              key: item.key,
            };
          })}
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
