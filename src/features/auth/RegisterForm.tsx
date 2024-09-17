import { Button, Divider, Form, notification } from "antd";
import { useState } from "react";
import moment from "moment";
import useRedirectIfLoggedIn from "./hooks/UseRedirectIfLoggedIn";
import { useRegister } from "./hooks/UseAuth";
import NameFields from "./components/NameFields";
import DateAndGenderFields from "./components/DateAndGenderFields";
import ContactFields from "./components/ContactFields";

import PasswordFields from "./components/PasswordFields";
import IdentityFields from "./components/IndentityFields";

const RegisterForm: React.FC = () => {
  useRedirectIfLoggedIn();
  const [form] = Form.useForm();
  const registerMutation = useRegister();
  const [notificationApi, contextHolder] = notification.useNotification();
  const [componentSize, setComponentSize] = useState<"large">("large");

  const onFinish = (values: any) => {
    const formattedValues = {
      ...values,
      dateOfBirth: values.dateOfBirth
        ? moment(values.dateOfBirth).format("DD/MM/YYYY")
        : null,
    };
    registerMutation.mutate(formattedValues, {
      onSuccess: () => {
        notificationApi.success({
          message: "Đăng ký thành công",
        });
      },
      onError: () => {
        notificationApi.error({
          message: "Đăng ký thất bại",
        });
      },
    });
  };

  return (
    <Form
      className="flex flex-col"
      onFinish={onFinish}
      layout="vertical"
      size={componentSize}
    >
      <NameFields />
      <DateAndGenderFields />
      <ContactFields />
      <IdentityFields />
      <PasswordFields />

      <Button type="primary" size="large" htmlType="submit">
        Đăng ký
      </Button>

      <Divider plain>Hoặc</Divider>

      <Button type="default" size="large">
        Đăng ký với Google
      </Button>

      {contextHolder}
    </Form>
  );
};

export default RegisterForm;
