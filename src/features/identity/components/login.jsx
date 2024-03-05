import {
  Button,
  Checkbox,
  Form,
  Input,
  Flex,
  Select,
  Card,
  Typography,
} from "antd";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
const { Text } = Typography;

export default function Login() {
  const onFinish = (values) => {
    console.log("success :", values);
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
      >
        <Select.Option value="98">+98</Select.Option>
        <Select.Option value="86">+86</Select.Option>
      </Select>
    </Form.Item>
  );
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
        {t("login.areNotRegistered")}
        <Link to="/register"> {t("login.register")}</Link>
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
            label={t("login.phoneNumber")}
            name="phone"
            rules={[{ required: true, message: t("login.validation.mobileRequired") }]}
          >
            <Input
              addonBefore={prefixSelector}
              style={{
                width: "100%",
              }}
            />
          </Form.Item>
          <Form.Item
            label={t("login.password")}
            name="password"
            rules={[{ required: true, message: t('login.validation.passwordRequired') }]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item
            name="remember"
            valuePropName="checked"
            wrapperCol={{
              span: 16,
            }}
          >
            <Checkbox>{t("login.rememberMe")}</Checkbox>
          </Form.Item>

          <Button type="primary" htmlType="submit" block>
            {t("login.login")}
          </Button>
        </Form>
      </Card>
    </Flex>
  );
}
