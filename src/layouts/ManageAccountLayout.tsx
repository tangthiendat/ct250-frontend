import { ConfigProvider, Layout, Menu, Tabs } from "antd";
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
    <div className="mx-auto transition-all duration-1000 md:my-10 xl:max-w-screen-lg">
      <ConfigProvider
        theme={{
          components: {
            Layout: {
              lightSiderBg: "white",
              bodyBg: "white",
              // lightSiderBg: "#f5f5f5",
              // lightSiderBg: "#f0f2f5",
            },
          },
        }}
      >
        <Layout className="min-h-full transition-all duration-1000">
          <Sider
            theme="light"
            // className="shadow-md"
            breakpoint="md"
            collapsedWidth="1"
            collapsible={false}
          >
            <Menu
              theme="light"
              className="rounded-lg border-2"
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

            <Content className="ml-2 mt-10 md:mt-0">
              {/* <div className="rounded-md bg-white px-2 py-6 shadow-md md:bg-transparent md:p-0 md:shadow-none"> */}
              <Outlet />
              {/* </div> */}
            </Content>
          </Layout>
        </Layout>
      </ConfigProvider>
    </div>
  );
};

export default ManageAccountLayout;
