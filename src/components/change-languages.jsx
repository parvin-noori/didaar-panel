import React from "react";
import { Dropdown, Flex, Image, Typography } from "antd";
import usFlag from "@assets/images/us.png";
import faFlag from "@assets/images/fa.png";
import { useAppContext } from "../contexts/app/app-context";
const { Text } = Typography;

export default function ChangeLanguages() {
  const { changeLanguage, language } = useAppContext();
  const items = [
    {
      label: (
        <a href="#" onClick={() => changeLanguage("fa")}>
          <Flex gap="small">
            <Image src={faFlag} width={25} />
            <Text>فارسی</Text>
          </Flex>
        </a>
      ),
      key: "0",
    },
    {
      label: (
        <a href="#" onClick={() => changeLanguage("en")}>
          <Flex gap="small">
            <Image src={usFlag} width={25} />
            <Text>english</Text>
          </Flex>
        </a>
      ),
      key: "1",
    },
  ];
  return (
    <Flex justify="start">
    <Dropdown menu={{ items }} trigger="click">
      <a onClick={(e) => e.preventDefault()}>
        {" "}
        <Image
          src={language === "fa" ? faFlag : usFlag}
          width={25}
          alt="english"
          preview={false}
        />
      </a>
    </Dropdown>
    </Flex>
  );
}
