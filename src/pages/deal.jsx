import { Radio, Space, Flex, Typography, Dropdown, Button, Modal } from "antd";
import React, { useState } from "react";
const { Text } = Typography;
import { useTranslation } from "react-i18next";
import { PlusOutlined, DownOutlined } from "@ant-design/icons";

export default function Deal() {
  const { t } = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState(false);

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
  return (
    <>
      <Space>
        <Radio.Group  value="row-listview">
          <Radio.Button value="row-listview">
            {t("deal.rowListview")}
          </Radio.Button>
          <Radio.Button value="col-listview">
            {t("deal.colListview")}
          </Radio.Button>
          <Radio.Button value="forecast"> {t("deal.forecast")}</Radio.Button>
        </Radio.Group>

        <Dropdown menu={{ items }} trigger="click">
          <Button>
            {t("deal.rowListview")} abc
            <DownOutlined />
          </Button>
        </Dropdown>
        <Radio.Group value="all">
          <Radio.Button value="all">{t("deal.all")}</Radio.Button>
          <Radio.Button value="todayAndLastDays">
            {t("deal.todayAndLastDays")}
          </Radio.Button>
        </Radio.Group>
      </Space>

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
    </>
  );
}
