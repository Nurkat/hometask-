import React, { useState } from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  LogoutOutlined,
  AppstoreOutlined,
  TagsOutlined,
  ShopOutlined,
  BarChartOutlined,
} from "@ant-design/icons";
import { Button, Layout, Menu, theme } from "antd";

const { Header, Sider } = Layout;

const Main: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  function handleLogOut() {
    localStorage.removeItem("access_token");
    window.location.reload();
  }

  return (
    <Layout className="w-full min-h-screen">
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="w-full flex items-center justify-center py-[40px] text-white text-[25px]">
          {collapsed ? "T" : "Texnoark"}
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={[
            {
              key: "1",
              icon: <BarChartOutlined />,
              label: "Dashboard",
            },
            {
              key: "2",
              icon: <AppstoreOutlined />,
              label: "Products",
            },
            {
              key: "3",
              icon: <TagsOutlined />,
              label: "Categories",
            },
            {
              key: "4",
              icon: <ShopOutlined />,
              label: "Brands",
            },
          ]}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 10,
            background: colorBgContainer,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
            }}
          />
          <Button
            type="text"
            className="flex items-center"
            onClick={handleLogOut}
          >
            <LogoutOutlined />
            <span>Log out</span>
          </Button>
        </Header>
      </Layout>
    </Layout>
  );
};

export default Main;
