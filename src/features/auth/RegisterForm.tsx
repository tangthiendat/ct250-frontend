import { Button, Divider, Form, Modal, notification } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import ContactFields from "./components/ContactFields";
import DateAndGenderFields from "./components/DateAndGenderFields";
import GoogleLoginButton from "./components/GoogleLoginButton";
import IdentityFields from "./components/IndentityFields";
import NameFields from "./components/NameFields";
import PasswordFields from "./components/PasswordFields";
import { useRegisterForm } from "./hooks/UseRegisterForm";

const RegisterForm: React.FC = () => {
  const { form, isLoading, onFinish, isModalVisible, handleModalOk } =
    useRegisterForm();

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
        <div className="mt-4 flex flex-col gap-5 text-center text-xs">
          <span className="text-sm text-gray-900">
            Bạn đã có tài khoản? Quay lại{" "}
            <Link
              to="/login"
              className="text-sm font-semibold text-blue-700 hover:text-blue-900"
            >
              đăng nhập
            </Link>
            .
          </span>
        </div>
      </Form>

      <Modal
        title="Đăng ký thành công"
        open={isModalVisible}
        footer={[
          <Button key="ok" type="primary" onClick={handleModalOk}>
            Quay về trang đăng nhập
          </Button>,
        ]}
      >
        <p>Vui lòng kiểm tra email của bạn để kích hoạt tài khoản.</p>
      </Modal>
    </>
  );
};

export default RegisterForm;
