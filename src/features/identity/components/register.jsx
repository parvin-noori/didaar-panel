import React, { useEffect, useState } from "react";
import {
  Button,
  Checkbox,
  Form,
  Input,
  Flex,
  Select,
  Card,
  Typography,
  message,
} from "antd";
const { Text } = Typography;
import { Link, useActionData, useNavigate, useSubmit } from "react-router-dom";
import { httpService } from "../../../core/http-service";
import { useTranslation } from "react-i18next";

export default function Register() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const submitForm = useSubmit();
  const navigate = useNavigate();
  const { t } = useTranslation();

  useEffect(() => {
    if (isSubmitting) {
      setTimeout(() => {
        navigate("/login");
      }, 2000);
    }
  }, [isSubmitting]);

  const onFinish = async (values) => {
    try {
      console.log(values);
      setIsSubmitting(true);
      const { confirmPassword, prefix, ...userData } = values;
      submitForm(userData, { method: "post" });
      message.success("success");
    } catch (error) {
      message.success("error");
    } finally {
      // try {
      //   setIsSubmitting(false); // Set loading state to false after form submission
      // } catch (err) {
      //   console.error("Error setting loading state:", err);
      // }
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("failed:", errorInfo);
  };

  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select
        style={{
          width: 70,
        }}
        defaultValue="+98"
        options={[
          {
            value: "98",
            label: "+98",
          },
          {
            value: "92",
            label: "+92",
          },
        ]}
      />
    </Form.Item>
  );

  // const isSuccessOperation = useActionData();
  return (
    <Flex
      justify="center"
      align="center"
      style={{ height: "100vh" }}
      vertical
      gap="middle"
    >
      <Text>
        {t("register.alreadyRegistered")}
        <Link to="/login"> {t("register.signin")}</Link>
      </Text>
      <Card>
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          initialValues={{ remember: true }}
          autoComplete="off"
          onFinishFailed={onFinishFailed}
          onFinish={onFinish}
        >
          <Form.Item
            label={t("register.phoneNumber")}
            name="mobile"
            rules={[
              {
                required: true,
                message: t("register.validation.mobileRequired"),
              },
              { min: 11, message: t("register.validation.mobileLength") },
            ]}
          >
            <Input addonBefore={prefixSelector} />
          </Form.Item>
          <Form.Item
            label={t("register.password")}
            name="password"
            rules={[
              {
                required: true,
                message: t("register.validation.passwordRequired"),
              },
              { min: 6, message: t("register.validation.PasswordTooShort") },
            ]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item
            label={t("register.confirmPassword")}
            name="confirmPassword"
            dependencies={["password"]}
            rules={[
              {
                required: true,
                message: t("register.validation.repeatPasswordRequired"),
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(
                    new Error(t('register.validation.notMatching'))
                  );
                },
              }),
            ]}
          >
            <Input.Password />
          </Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            block
            disabled={isSubmitting}
          >
            {t("register.register")}
          </Button>
        </Form>
      </Card>
    </Flex>
  );
}

export async function registerAction({ request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  const response = await httpService.post("/Users", data);
  return response.status === 200;
}
