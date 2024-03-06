import { Button, Col, Input, Layout, Row } from "antd";
import React, { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
const { Header, Footer, Sider, Content } = Layout;
const { Search } = Input;
import { MenuOutlined, CloseOutlined } from "@ant-design/icons";

export default function MainLayout() {
  const [collapsed, setCollapsed] = useState(true);
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  if (!token) {
    navigate("/login");
  }
  const onSearch = (value, _e, info) => console.log(info?.source, value);
  return (
    <div>
      <Layout>
        <Sider
          collapsed={collapsed}
          style={{ backgroundColor: "#fff" }}
        ></Sider>
        <Layout>
          <Header style={{ backgroundColor: "red" }}>
            <Row align="center" justify="flex-start">
              <Col span={1}>
                {" "}
                <Button
                  type="text"
                  icon={collapsed ? <MenuOutlined /> : <CloseOutlined />}
                  onClick={() => setCollapsed(!collapsed)}
                ></Button>
              </Col>
              <Col span={6}>
                {" "}
                <Search placeholder="جستجو" allowClear onSearch={onSearch} />
              </Col>
            </Row>
          </Header>

          {/* <Content></Content> */}
          {/* <Footer></Footer> */}
        </Layout>
      </Layout>
    </div>
  );
}
