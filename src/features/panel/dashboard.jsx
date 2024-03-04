import React, { useState } from "react";
import { Layout, Flex, Button, Menu } from "antd";
const { Header, Footer, Sider, Content } = Layout;
import {
  MenuOutlined,
  CloseOutlined,
  PieChartOutlined,
  DesktopOutlined,
  ContainerOutlined,
  MailOutlined,
  AppstoreOutlined,
} from "@ant-design/icons";

export default function Dashboard() {
  const [collapsed, setCollapsed] = useState(true);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  function getItem(label, key, icon, children, type) {
    return {
      key,
      icon,
      children,
      label,
      type,
    };
  }
  const items = [
    getItem("option 1", "1", <PieChartOutlined />),
    getItem("option 2", "2", <DesktopOutlined />),
    getItem("option 3", "3", <ContainerOutlined />),
    getItem("Navigation One", "sub1", <MailOutlined />, [
      getItem("option 5", "5"),
      getItem("option 6", "6"),
      getItem("option 7", "7"),
    ]),
    getItem("navigate 2", "sub 2", <AppstoreOutlined />, [
      getItem("Option 9", "9"),
      getItem("Option 10", "10"),
      getItem("submenu", "sub3", null, [
        getItem("option 11", "11"),
        getItem("option 12", "12"),
      ]),
    ]),
  ];
  return (
    <Flex gap="middle" wrap="wrap">
      <Layout>
        <Header>
          {" "}
          <Button onClick={toggleCollapsed} type="primary">
            {collapsed ? <MenuOutlined /> : <CloseOutlined />}
          </Button>
        </Header>
        <Layout>
          <Content>Content</Content>
          <Sider collapsed={collapsed} collapsible>
            <Menu
              style={{
                width: "5%",
              }}
              theme="light"
              defaultSelectedKeys={["1"]}
              mode="inline"
              items={items}
            />
          </Sider>
        </Layout>
        <Footer>Footer</Footer>
      </Layout>
    </Flex>
  );
}
