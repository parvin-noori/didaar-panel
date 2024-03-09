import { Menu, theme } from "antd";
import React from "react";
import {
  PieChartOutlined,
  DesktopOutlined,
  ContainerOutlined,
  MailOutlined,
  AppstoreOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { red } from "@ant-design/colors";

export default function Sidebar() {
  function getItem(label, key, icon, children, type) {
    return {
      key,
      icon,
      children,
      label,
      type,
    };
  }
  const { t } = useTranslation();
  const { token } = theme.useToken();

  const items = [
    getItem(
      <Link to={"/"}>{t("mainLayout.sidebar.deal")}</Link>,
      "1",
      <PieChartOutlined />
    ),
    getItem(
      <Link to={"/activity"}>{t("mainLayout.sidebar.activity")}</Link>,
      "2",
      <DesktopOutlined />
    ),
    getItem(<Link to={"/case"}>{t("mainLayout.sidebar.cases")}</Link>, "3", <ContainerOutlined />),
    getItem("Navigation One", "sub1", <MailOutlined />, [
      getItem("Option 5", "5"),
      getItem("Option 6", "6"),
      getItem("Option 7", "7"),
      getItem("Option 8", "8"),
    ]),
    getItem("Navigation Two", "sub2", <AppstoreOutlined />, [
      getItem("Option 9", "9"),
      getItem("Option 10", "10"),
      getItem("Submenu", "sub3", null, [
        getItem("Option 11", "11"),
        getItem("Option 12", "12"),
      ]),
    ]),
  ];
  return (
    <div>
      <Menu
        defaultSelectedKeys={["1"]}
        mode="inline"
        items={items}
        style={{ backgroundColor: token.headerBg }}
      />
    </div>
  );
}
