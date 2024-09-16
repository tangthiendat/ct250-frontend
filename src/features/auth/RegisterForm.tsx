import { Button, Divider, Form, notification } from "antd";
import { SizeType } from "antd/es/config-provider/SizeContext";
import { useState } from "react";
import ContactFields from "./components/ContactFields";
import DateAndGenderFields from "./components/DateAndGenderFields";
import NameFields from "./components/NameFields";
import PasswordFields from "./components/PasswordFields";
import SocialLoginButton from "./components/SocialLoginButton";
import { useRegister } from "./hooks/UseAuth";
import useRedirectIfLoggedIn from "./hooks/UseRedirectIfLoggedIn";

const RegisterForm: React.FC = () => {
  useRedirectIfLoggedIn();

  const [form] = Form.useForm();
  const registerMutation = useRegister();
  const [notificationApi, contextHolder] = notification.useNotification();
  const [componentSize, setComponentSize] = useState<SizeType>("large");

  const onFinish = (values: any) => {
    registerMutation.mutate(values, {
      onSuccess: () => {
        notificationApi.success({ message: "Đăng ký thành công" });
      },
      onError: () => {
        notificationApi.error({ message: "Đăng ký thất bại" });
      },
    });
  };

  return (
    <Form
      className="flex flex-col"
      onFinish={onFinish}
      layout="vertical"
      size={componentSize as SizeType}
    >
      <NameFields />
      <DateAndGenderFields />
      <ContactFields />
      <PasswordFields />

      <Button type="primary" size="large" htmlType="submit">
        Đăng ký
      </Button>

      <Divider plain>Hoặc</Divider>

      <SocialLoginButton />
      {contextHolder}
    </Form>
  );
};

export default RegisterForm;
