import { Flex, Layout, Col, Row,Divider } from "antd";
const { Header, Content } = Layout;
import React from "react";
import { Outlet } from "react-router-dom";
import ChangeLanguages from "../components/change-languages";

export default function IdentityLayout() {
  return (
    <Row>
      <Col span={24} style={{padding:'1rem'}}>
        <ChangeLanguages />
      </Col>
      <Divider style={{margin:'0'}}/>
      <Col span={24}>
        <Outlet />
      </Col>
    </Row>
  );
}
