import { Button, Form, Input, Result } from "antd";
import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { authService } from "../../services";

const ResetPasswordForm: React.FC = () => {
  const [form] = Form.useForm();
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [hasVerifiedToken, setHasVerifiedToken] = useState(false);
  const [isTokenValid, setIsTokenValid] = useState(true);
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const token = searchParams.get("token");

  useEffect(() => {
    const verifyToken = async () => {
      try {
        if (!token) {
          throw new Error("Token không hợp lệ");
        }
        await authService.verifyResetToken(token);
        setHasVerifiedToken(true);
      } catch (error: any) {
        console.error("Token verification failed:", error);
        setIsTokenValid(false);
      }
    };

    if (!hasVerifiedToken) {
      verifyToken();
    }
  }, [token, hasVerifiedToken]);

  const onFinish = async (values: { newPassword: string }) => {
    setIsLoading(true);
    try {
      if (!token) {
        throw new Error("Token không hợp lệ");
      }
      await authService.resetPassword(token, values.newPassword);
      setIsSuccess(true);
    } catch (error: any) {
      console.error("Password reset failed:", error);
      setIsTokenValid(false);
    } finally {
      setIsLoading(false);
    }
  };

  if (!isTokenValid) {
    return (
      <Result
        status="error"
        title="Liên kết thay đổi mật khẩu đã hết hạn hoặc không hợp lệ"
        subTitle="Vui lòng yêu cầu một liên kết thay đổi mật khẩu mới."
        extra={[
          <Button
            type="primary"
            key="forgot-password"
            onClick={() => navigate("/forgot-password")}
          >
            Yêu cầu liên kết mới
          </Button>,
        ]}
      />
    );
  }

  if (isSuccess) {
    return (
      <Result
        status="success"
        title="Đặt lại mật khẩu thành công"
        subTitle="Mật khẩu của bạn đã được đặt lại thành công. Vui lòng đăng nhập lại."
        extra={[
          <Button type="primary" key="login" onClick={() => navigate("/login")}>
            Quay về trang đăng nhập
          </Button>,
        ]}
      />
    );
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100">
      <div className="w-full max-w-md rounded-lg bg-white p-8 shadow-md">
        <h2 className="mb-4 text-center text-2xl font-semibold text-gray-800">
          Đặt lại mật khẩu
        </h2>
        <p className="mb-6 text-center text-gray-600">
          Vui lòng nhập mật khẩu mới của bạn.
        </p>
        <Form form={form} onFinish={onFinish} layout="vertical">
          <Form.Item
            label="Mật khẩu mới"
            name="newPassword"
            rules={[
              {
                required: true,
                message: "Vui lòng nhập mật khẩu",
              },
              {
                min: 6,
                message: "Mật khẩu phải chứa ít nhất 6 ký tự",
              },
            ]}
            hasFeedback
          >
            <Input.Password placeholder="Mật khẩu" />
          </Form.Item>

          <Form.Item
            label="Xác nhận mật khẩu"
            name="confirmPassword"
            dependencies={["newPassword"]}
            rules={[
              {
                required: true,
                message: "Vui lòng xác nhận mật khẩu",
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("newPassword") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(
                    new Error("Mật khẩu xác nhận không khớp!"),
                  );
                },
              }),
            ]}
            hasFeedback
          >
            <Input.Password placeholder="Xác nhận mật khẩu" />
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              loading={isLoading}
              className="w-full"
            >
              Đặt lại mật khẩu
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default ResetPasswordForm;
