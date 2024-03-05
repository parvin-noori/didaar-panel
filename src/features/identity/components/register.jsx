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
import { Link, useNavigate, useSubmit } from "react-router-dom";
import { httpService } from "../../../core/http-service";
import { useTranslation } from "react-i18next";

export default function Register() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const submitForm = useSubmit();
  const navigate = useNavigate();


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
    const { t } = useTranslation();
  return (
    <Flex
      justify="center"
      align="center"
      style={{ height: "100vh" }}
      vertical
      gap="middle"
    >
      <Text>
        {t("register.phoneNumber")}
        <Link to="/login"> {t("register.login")}</Link>
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
            label="phone number"
            name="mobile"
            rules={[
              { required: true, message: "phone number is required" },
              { min: 11, message: "phone number must be 11" },
            ]}
          >
            <Input addonBefore={prefixSelector} />
          </Form.Item>
          <Form.Item
            label="password"
            name="password"
            rules={[
              { required: true, message: "password is required" },
              { min: 6, message: "phone number must be 6" },
            ]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item
            label="confirm password"
            name="confirmPassword"
            dependencies={["password"]}
            rules={[
              { required: true, message: "confirm password is required" },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(
                    new Error("The new password that you entered do not match!")
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
            loading={isSubmitting}
          >
            register
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
