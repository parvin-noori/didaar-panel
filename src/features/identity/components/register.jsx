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
import { useForm } from "react-hook-form";
const { Text } = Typography;
import { Link } from "react-router-dom";
import { httpService } from "../../../core/http-service";

export default function Register() {
  const {
    register,
    formState: { errors },
    watch,
    handleSubmit,
  } = useForm();

  const onFinish = (values) => {
    console.log(values);
    console.log("Success:", values);
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
  return (
    <Flex
      justify="center"
      align="center"
      style={{ height: "100vh" }}
      vertical
      gap="middle"
    >
      <Text>
        Already have an account?
        <Link to="/login"> Log in here.</Link>
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
            rules={[
              { required: true, message: "phone number is required" },
              { min: 11, message: "phone number must be 11" },
            ]}
          >
            <Input addonBefore={prefixSelector} {...register("phone")} />
          </Form.Item>
          <Form.Item
            label="password"
            name="password"
            rules={[{ required: true, message: "password is required" }]}
          >
            <Input.Password {...register("password")} />
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
            <Input.Password {...register("confirmPassword")} />
          </Form.Item>
          <Button type="primary" htmlType="submit" block>
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
