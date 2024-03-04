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
import { useForm } from "react-hook-form";
const { Text } = Typography;
import { Link } from "react-router-dom";

export default function Register() {
  const onFinish = (values) => {
    console.log("success :", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("failed:", errorInfo);
  };
  const {register,formState:{errors},watch,handleSubmit}=useForm()

  const onSubmit=data=>console.log(data)

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
  return (
    <Flex
      justify="center"
      align="center"
      style={{ height: "100vh" }}
      vertical
      gap="middle"
    >
      <Text>
        قبلا ثبت نام کرده اید؟
        <Link to="/login">وارد شوید</Link>
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
            name="phone"
            rules={[{ required: true, message: "please input your number" }]}
          >
            <Input
              addonBefore={prefixSelector}
              style={{
                width: "100%",
              }}
            />
          </Form.Item>
          <Form.Item
            label="password"
            name="password"
            rules={[{ required: true, message: "please input your password" }]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item
            label="confirm password"
            name="confirmPassword"
            rules={[{ required: true, message: "please input your password" }]}
          >
            <Input.Password />
          </Form.Item>

          <Button type="primary" htmlType="submit" block>
            register
          </Button>
        </Form>
      </Card>
    </Flex>
  );
}
