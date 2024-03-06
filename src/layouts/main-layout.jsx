import {
  Button,
  Col,
  Input,
  Layout,
  Row,
  Flex,
  Dropdown,
  Typography,
  Modal,
} from "antd";
import React, { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
const { Header, Footer, Sider, Content } = Layout;
const { Search } = Input;
const { Text } = Typography;
import {
  MenuOutlined,
  CloseOutlined,
  UserAddOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import ChangeLanguages from "../components/change-languages";
import Sidebar from "./main-layout/sidebar";

export default function MainLayout() {
  const [collapsed, setCollapsed] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  if (!token) {
    navigate("/login");
  }
  const onSearch = (value, _e, info) => console.log(info?.source, value);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const items = [
    {
      label: (
        <Button onClick={showModal} type="text">
          <Flex gap="small">
            <UserAddOutlined />
            <Text>افزودن شخص</Text>
          </Flex>
        </Button>
      ),
      key: "0",
    },
    {
      label: (
        <Button onClick={showModal} type="text">
          <Flex gap="small">
            <UserAddOutlined />
            <Text>افزودن شرکت</Text>
          </Flex>
        </Button>
      ),
      key: "1",
    },
    {
      label: (
        <Button onClick={showModal} type="text">
          <Flex gap="small">
            <UserAddOutlined />
            <Text>افزودن معامله</Text>
          </Flex>
        </Button>
      ),
      key: "2",
    },
    {
      label: (
        <Button onClick={showModal} type="text">
          <Flex gap="small">
            <UserAddOutlined />
            <Text>افزودن کارت</Text>
          </Flex>
        </Button>
      ),
      key: "3",
    },
    {
      label: (
        <Button onClick={showModal} type="text">
          <Flex gap="small">
            <UserAddOutlined />
            <Text>ارسال پیامک</Text>
          </Flex>
        </Button>
      ),
      key: "4",
    },
  ];
  return (
    <div>
      <Layout>
        <Row align="middle" style={{ padding: "1rem" }}>
          <Col span={1}>
            {" "}
            <Button
              type="text"
              icon={collapsed ? <MenuOutlined /> : <CloseOutlined />}
              onClick={() => setCollapsed(!collapsed)}
            ></Button>
          </Col>
          <Col span={1}>
            <ChangeLanguages />
          </Col>
          <Col span={6}>
            {" "}
            <Search placeholder="جستجو" allowClear onSearch={onSearch} />
          </Col>
          <Col span={1} offset={15}>
            <Dropdown menu={{ items }} trigger="click">
              <span type="text">
                <PlusOutlined />
              </span>
            </Dropdown>
          </Col>
        </Row>

        <Layout>
          {/* <Header style={{ backgroundColor: "red" }}> */}

          {/* </Header> */}

          {/* <Content></Content> */}
          {/* <Footer></Footer> */}
          <Sider collapsed={collapsed} style={{ backgroundColor: "#fff" }}>
            <Sidebar />
          </Sider>
          <Content>
            <Outlet />
          </Content>
        </Layout>
      </Layout>

      <Modal
        title="Basic Modal"
        open={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
        onOk={() => setIsModalOpen(true)}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </div>
  );
}
