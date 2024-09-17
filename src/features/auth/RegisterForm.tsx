import { Button, Divider, Form, notification } from "antd";
import React, { useState } from "react";

import ContactFields from "./components/ContactFields";
import DateAndGenderFields from "./components/DateAndGenderFields";
import GoogleLoginButton from "./components/GoogleLoginButton";
import NameFields from "./components/NameFields";
import PasswordFields from "./components/PasswordFields";
import { useRegisterForm } from "./hooks/UseRegisterForm";
import IdentityFields from "./components/IndentityFields";

const RegisterForm: React.FC = () => {
  const { form, isLoading, contextHolder, onFinish } = useRegisterForm();
  const [avatarUrl, setAvatarUrl] = useState<string | null>(null);

  const handleGoogleLoginSuccess = async (tokenResponse: any) => {
    const userInfoResponse = await fetch(
      "https://www.googleapis.com/oauth2/v3/userinfo",
      {
        headers: {
          Authorization: `Bearer ${tokenResponse.access_token}`,
        },
      },
    );
    const profile = await userInfoResponse.json();

    localStorage.removeItem("avatarUrl");

    form.setFieldsValue({
      email: profile.email,
      firstName: profile.family_name,
      lastName: profile.given_name,
      avatar: profile.picture,
    });
    localStorage.setItem("avatarUrl", profile.picture);
    setAvatarUrl(profile.picture);
    console.log("Google login profile:", profile);
  };

  const handleGoogleLoginFailure = (error: any) => {
    console.error("Google login error:", error);
    notification.error({
      message: "Đăng nhập Google thất bại",
      description: "Có lỗi xảy ra trong quá trình đăng nhập Google",
    });
  };

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
        <NameFields />
        <DateAndGenderFields />
        <ContactFields />
        <IdentityFields />
        <PasswordFields />
        <Form.Item name="avatar" hidden>
          <input type="hidden" />
        </Form.Item>

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

        <GoogleLoginButton
          onSuccess={handleGoogleLoginSuccess}
          onError={handleGoogleLoginFailure}
        />
      </Form>
    </>
  );
};

export default RegisterForm;
