import { Layout } from "antd";
import React, { useState } from "react";
import { Outlet } from "react-router-dom";
const { Header, Footer, Content } = Layout;

export default function MainLayout() {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <div>
      <Layout>
        <Header></Header>
        <Content></Content>
        <Footer></Footer>
      </Layout>
    </div>
  );
}
