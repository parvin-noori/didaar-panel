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
import { useForm, Controller } from "react-hook-form";
const { Text } = Typography;
import { Link } from "react-router-dom";

export default function Register() {
  const {
    register,
    formState: { errors },
    watch,
    handleSubmit,
    control,
  } = useForm();

  const onSubmit = (data) => console.log(data);

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
          onFinish={handleSubmit(onSubmit)}
        >
          <Form.Item
            label="phone number"
            name="phone"
            rules={[{ required: true, message: "please input your number" }]}
          >
            <Controller
              name="phone"
              control={control}
              render={({ field }) => (
                <Input {...field} addonBefore={prefixSelector} />
              )}
            />
          </Form.Item>
          <Form.Item
            label="password"
            name="password"
            rules={[{ required: true, message: "please input your password" }]}
          >
            <Controller
              name="password"
              control={control}
              render={({ field }) => <Input.Password {...field} />}
            />
          </Form.Item>
          <Form.Item
            label="confirm password"
            name="confirmPassword"
            rules={[{ required: true, message: "please input your password" }]}
          >
            <Controller
              name="confirmPassword"
              control={control}
              render={({ field }) => <Input.Password {...field} />}
            />
          </Form.Item>

          <Button type="primary" htmlType="submit" block>
            register
          </Button>
        </Form>
      </Card>
    </Flex>
  );
}
