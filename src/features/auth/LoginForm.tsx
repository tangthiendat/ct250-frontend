import { Form } from "antd";
import { useEffect } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { IAuthRequest } from "../../interfaces";
import EmailInput from "./components/EmailInput";
import PasswordInput from "./components/PasswordInput";
import SubmitButton from "./components/SubmitButton";
import { useLogin } from "./hooks/UseAuth";
import ForgotPassword from "./components/ForgotPassword";

const LoginForm: React.FC = () => {
  const navigate = useNavigate();

  const accessToken = localStorage.getItem("access_token");

  useEffect(() => {
    if (accessToken) {
      navigate("/");
    }
  }, [accessToken, navigate]);

  const [loginForm] = Form.useForm<IAuthRequest>();

  const { login, isLoading } = useLogin();

  const onFinish = (data: IAuthRequest): void => {
    login(data, {
      onSuccess: () => {
        toast.success("Đăng nhập thành công");
      },
      onError: () => {
        toast.error("Đăng nhập thất bại");
      },
    });
  };

  return (
    <>
      <Form
        className="flex flex-col"
        onFinish={onFinish}
        form={loginForm}
        layout="vertical"
        size="large"
      >
        <EmailInput />
        <PasswordInput />
        <SubmitButton loading={isLoading} />
        <div className="flex flex-col gap-5 text-center text-xs">
          <Link
            to="/forgot-password"
            className="text-sm font-semibold text-blue-700 hover:text-blue-900"
          >
            Quên mật khẩu?
          </Link>

          <span className="text-sm text-gray-900">
            Chưa có tài khoản?{" "}
            <Link
              to="/register"
              className="text-sm font-semibold text-blue-700 hover:text-blue-900"
            >
              Đăng ký{" "}
            </Link>
            ngay.
          </span>
        </div>
      </Form>
    </>
  );
};

export default LoginForm;
