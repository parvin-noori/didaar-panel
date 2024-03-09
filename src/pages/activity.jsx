import React, { useState } from "react";
import { Radio, Table, Space, Button, Flex, Menu } from "antd";
import {
  PhoneOutlined,
  CommentOutlined,
  DownOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import { useTranslation } from "react-i18next";

export default function Activity() {
  const { t } = useTranslation();
  const items = [
    {
      label: (
        <Flex gap="middle">
          <Text>{t("deal.rowListview")} abc</Text>
        </Flex>
      ),
      key: "0",
    },
    {
      label: (
        <Button type="text" onClick={() => setIsModalOpen(true)}>
          <Flex gap="small">
            <PlusOutlined />
            <Text>{t("deal.createrowListview")}</Text>
          </Flex>
        </Button>
      ),
      key: "1",
    },
  ];

  const columns = [
    {
      title: t("activity.activityTitle"),
      dataIndex: "activityTitle",
      render: (text) => <a>{text}</a>,
    },
    {
      title: t("activity.responsible"),
      dataIndex: "responsible",
    },
    {
      title: t("activity.activityDate"),
      dataIndex: "activityDate",
      defaultSortOrder: "descend",
      sorter: (a, b) => a.age - b.age,
    },
    {
      title: t("activity.relatedPersons"),
      dataIndex: "relatedPersons",
    },
    {
      title: t("activity.relatedDeal"),
      dataIndex: "relatedDeal",
    },
    {
      title: t("activity.relatedCase"),
      dataIndex: "relatedCase",
    },
    {
      title: "",
      dataIndex: "comment",
    },
  ];
  const data = [
    {
      key: "1",
      activityTitle: (
        <span>
          <PhoneOutlined />
          {t("activity.incomingCall")}
        </span>
      ),
      responsible: "user 1",
      activityDate: <>{t("activity.sunday")} 13-12-1402</>,
      comment: <CommentOutlined />,
    },
    {
      key: "2",
      activityTitle: (
        <span>
          <PhoneOutlined />
          {t("activity.incomingCall")}
        </span>
      ),
      responsible: "user 2",
      activityDate: <>{t("activity.sunday")} 13-12-1402</>,
      comment: <CommentOutlined />,
    },
  ];
  // rowSelection object indicates the need for row selection
  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(
        `selectedRowKeys: ${selectedRowKeys}`,
        "selectedRows: ",
        selectedRows
      );
    },
    getCheckboxProps: (record) => ({
      disabled: record.name === "Disabled User",
      // Column configuration not to be checked
      name: record.name,
    }),
  };

  function getItem(label, key, icon) {
    return {
      key,
      icon,
      label,
    };
  }

  const menuItems = [
    getItem(t("activity.allActivities"), "allActivities"),
    getItem(t("activity.simpleNote"), "simpleNote"),
    getItem(t("activity.incomingCall"), "incomingCall"),
    getItem(t("activity.call"), "call"),
    getItem(t("activity.metting"), "metting"),
    getItem(t("activity.duty"), "duty"),
    getItem(t("activity.sendMessage"), "sendMessage"),
  ];

  const [selectionType, setSelectionType] = useState("checkbox");
  return (
    <Space direction="vertical" size="middle">
      <Menu mode={"horizontal"} items={menuItems} />
      <Space>
        <Radio.Group value="list">
          <Radio.Button value="list">{t("activity.list")}</Radio.Button>
          <Radio.Button value="calender">{t("activity.calender")}</Radio.Button>
        </Radio.Group>
        <Radio.Group value="all">
          <Radio.Button value="all">{t("activity.all")}</Radio.Button>
          <Radio.Button value="todayAndLastDays">
            {t("activity.todayAndLastDays")} (2)
          </Radio.Button>
          <Radio.Button value="today">{t("activity.today")} (0)</Radio.Button>
          <Radio.Button value="tomorrow">{t("activity.tommorow")}</Radio.Button>
          <Radio.Button value="UntilNextWeek">
            {t("activity.UntilNextWeek")}
          </Radio.Button>
          <Radio.Button value="nextWeek">{t("activity.nextWeek")}</Radio.Button>
          <Radio.Button value="anotherDate">
            {t("activity.anotherDate")}
          </Radio.Button>
        </Radio.Group>
      </Space>
      <Table
        bordered
        rowSelection={{
          type: selectionType,
          ...rowSelection,
        }}
        columns={columns}
        dataSource={data}
      />
    </Space>
  );
}
