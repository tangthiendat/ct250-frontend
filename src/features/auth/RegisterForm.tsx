import { Button, Divider, Form } from "antd";
import React from "react";
import GoogleLoginHandler from "./components/GoogleLoginHandler";
import RegisterFormFields from "./components/RegisterFromFields";
import { useRegisterForm } from "./hooks/UseRegisterForm";

const RegisterForm: React.FC = () => {
  const { form, isLoading, contextHolder, onFinish } = useRegisterForm();

  return (
    <>
      {contextHolder}
      <Form
        className="flex flex-col"
        onFinish={onFinish}
        layout="vertical"
        size="large"
        form={form}
      >
        <RegisterFormFields />

        <Button
          type="primary"
          size="large"
          htmlType="submit"
          loading={isLoading}
          className="w-full"
        >
          Đăng ký
        </Button>

        <Divider plain>Hoặc</Divider>

        <GoogleLoginHandler />
      </Form>
    </>
  );
};

export default RegisterForm;
