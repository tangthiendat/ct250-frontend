import { Form, Input } from "antd";
import { SizeType } from "antd/es/config-provider/SizeContext";
import { useState } from "react";
import { UserOutlined, LockOutlined } from "@ant-design/icons";

const LoginForm: React.FC = () => {
  const [componentSize, setComponentSize] = useState<SizeType | "default">(
    "default",
  );

  const onFormLayoutChange = ({ size }: { size: SizeType }) => {
    setComponentSize(size);
  };

  function onSubmit(data: any): void {
    console.log(data);
  }

  return (
    <Form
      className="flex flex-col"
      onFinish={onSubmit}
      layout="vertical"
      initialValues={{ size: componentSize }}
      onValuesChange={onFormLayoutChange}
      size={componentSize as SizeType}
    >
      <Form.Item
        label="Email"
        name="email"
        rules={[
          {
            required: true,
            message: "Vui lòng nhập email",
          },
          {
            pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
            message: "Email không hợp lệ",
          },
        ]}
      >
        <Input prefix={<UserOutlined />} placeholder="Email" />
      </Form.Item>

      <Form.Item
        label="Mật khẩu"
        name="password"
        rules={[
          {
            required: true,
            message: "Vui lòng nhập mật khẩu",
          },
        ]}
      >
        <Input.Password prefix={<LockOutlined />} placeholder="Mật khẩu" />
      </Form.Item>

      <Form.Item>
        <button
          type="submit"
          className="focus:shadow-outline mt-2 w-full rounded bg-blue-700 py-2 font-bold text-white hover:bg-blue-900 focus:outline-none"
        >
          Đăng nhập
        </button>
      </Form.Item>

      {/* <div className="text-center text-xs"></div> */}

      <div className="flex flex-col gap-5 text-center text-xs">
        <a
          href="#"
          className="text-sm font-semibold text-blue-700 hover:text-blue-900"
        >
          Quên mật khẩu?
        </a>

        <span className="text-sm text-gray-900">
          Chưa có tài khoản? {""}
          <a
            href="../register"
            className="text-sm font-semibold text-blue-700 hover:text-blue-900"
          >
            Đăng ký ngay
          </a>
        </span>
      </div>
    </Form>
  );
};

export default LoginForm;
