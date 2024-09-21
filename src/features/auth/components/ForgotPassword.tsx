import { Button, Form, Input } from "antd";
import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const ForgotPassword: React.FC = () => {
  const [form] = Form.useForm();
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const onFinish = (values: { email: string }) => {
    setIsLoading(true);
    sendResetPasswordRequest(values.email)
      .then(() => {
        toast.success("Yêu cầu đặt lại mật khẩu đã được gửi");
        navigate("/login");
      })
      .catch(() => {
        toast.error("Có lỗi xảy ra, vui lòng thử lại");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100">
      <div className="w-full max-w-md rounded-lg bg-white p-8 shadow-md">
        <h2 className="mb-4 text-center text-2xl font-semibold text-gray-800">
          Quên mật khẩu?
        </h2>
        <p className="mb-6 text-center text-gray-600">
          Vui lòng nhập email đã đăng ký tài khoản DaViKa Airways.
        </p>
        <Form form={form} onFinish={onFinish} layout="vertical">
          <Form.Item
            name="email"
            label="EMAIL ĐÃ ĐĂNG KÝ"
            rules={[{ required: true, message: "Vui lòng nhập email" }]}
          >
            <Input type="email" />
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              loading={isLoading}
              className="w-full"
            >
              Gửi
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default ForgotPassword;

const sendResetPasswordRequest = async (email: string) => {};
