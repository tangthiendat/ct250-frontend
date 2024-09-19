import { Form } from "antd";
import { SizeType } from "antd/es/config-provider/SizeContext";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import toast from "react-hot-toast";
import { IAuthRequest } from "../../interfaces";
import EmailInput from "./components/EmailInput";
import PasswordInput from "./components/PasswordInput";
import SubmitButton from "./components/SubmitButton";
import { useLogin } from "./hooks/UseAuth";

const LoginForm: React.FC = () => {
  const navigate = useNavigate();

  const [componentSize, setComponentSize] = useState<SizeType | "default">(
    "large",
  );

  const onFormLayoutChange = ({ size }: { size: SizeType }) => {
    setComponentSize(size);
  };
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
      {/* {isLoading && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-75">
          <Spin size="large" />
        </div>
      )} */}
      <Form
        className="flex flex-col"
        onFinish={onFinish}
        form={loginForm}
        layout="vertical"
        initialValues={{ size: componentSize }}
        onValuesChange={onFormLayoutChange}
        size={componentSize as SizeType}
      >
        <EmailInput />
        <PasswordInput />
        <SubmitButton loading={isLoading} />
        <div className="flex flex-col gap-5 text-center text-xs">
          {/* <a
            href="#"
            className="text-sm font-semibold text-blue-700 hover:text-blue-900"
          >
            Quên mật khẩu?
          </a> */}
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
