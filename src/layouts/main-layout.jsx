import { Button, Layout } from "antd";
import React, { useState } from "react";
import { Outlet } from "react-router-dom";
const { Header, Footer, Sider, Content } = Layout;
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";

export default function MainLayout() {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <div>
      <Layout>
        <Sider  collapsed={collapsed} style={{backgroundColor:'#fff'}}></Sider>
        <Layout>
          <Header style={{backgroundColor:'#fff'}}>
            <Button
              type="text"
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={()=>setCollapsed(!collapsed)}
            ></Button>
          </Header>

          {/* <Content></Content> */}
          {/* <Footer></Footer> */}
        </Layout>
      </Layout>
    </div>
  );
}
