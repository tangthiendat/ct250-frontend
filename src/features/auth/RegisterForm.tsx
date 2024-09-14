import { IUser } from "../../interfaces";
import { Form, Input, Radio, Select, DatePicker, Divider, Button } from "antd";
import { useState } from "react";

const countryOptions = [
  { value: "vietnam", label: "Việt Nam" },
  { value: "japan", label: "Nhật Bản" },
  { value: "korea", label: "Hàn Quốc" },
  { value: "usa", label: "Mỹ" },
  { value: "other", label: "Khác" },
];

const genderOptions = [
  { value: "male", label: "Nam" },
  { value: "female", label: "Nữ" },
];

type SizeType = Parameters<typeof Form>[0]["size"];

const RegisterForm: React.FC = () => {
  const [componentSize, setComponentSize] = useState<SizeType | "default">(
    "default",
  );

  const onFormLayoutChange = ({ size }: { size: SizeType }) => {
    setComponentSize(size);
  };

  function onSubmit(data: IUser): void {
    console.log(data);
  }

  function onLoginWithGoogle(): void {
    console.log("Login with Google");
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
      <div className="flex gap-5">
        <Form.Item
          className="flex-1"
          label="Họ"
          name="lastName"
          rules={[
            {
              required: true,
              message: "Vui lòng nhập họ",
            },
            {
              pattern:
                /^[a-záàảãạăắằẳẵặâấầẩẫậéèẻẽẹêếềểễệóòỏõọôốồổỗộơớờởỡợíìỉĩịúùủũụưứừửữựýỳỷỹỵđA-ZÁÀẢÃẠĂẮẰẲẴẶÂẤẦẨẪẬÉÈẺẼẸÊẾỀỂỄỆÓÒỎÕỌÔỐỒỔỖỘƠỚỜỞỠỢÍÌỈĨỊÚÙỦŨỤƯỨỪỬỮỰÝỲỶỸỴĐ\s]+$/,
              message: "Họ không chứa ký tự đặc biệt",
            },
          ]}
        >
          <Input
            placeholder="Họ, ví dụ PHAM"
            style={{ textTransform: "uppercase" }}
          />
        </Form.Item>

        <Form.Item
          className="flex-1"
          label="Tên đệm & tên"
          name="firstName"
          rules={[
            {
              required: true,
              message: "Vui lòng nhập tên đệm & tên",
            },
            {
              pattern:
                /^[a-záàảãạăắằẳẵặâấầẩẫậéèẻẽẹêếềểễệóòỏõọôốồổỗộơớờởỡợíìỉĩịúùủũụưứừửữựýỳỷỹỵđA-ZÁÀẢÃẠĂẮẰẲẴẶÂẤẦẨẪẬÉÈẺẼẸÊẾỀỂỄỆÓÒỎÕỌÔỐỒỔỖỘƠỚỜỞỠỢÍÌỈĨỊÚÙỦŨỤƯỨỪỬỮỰÝỲỶỸỴĐ\s]+$/,
              message: "Họ không chứa ký tự đặc biệt",
            },
          ]}
        >
          <Input
            placeholder="Tên đệm & tên, ví dụ VAN A"
            style={{ textTransform: "uppercase" }}
          />
        </Form.Item>
      </div>

      <div className="flex gap-5">
        <Form.Item
          className="flex-1"
          label="Ngày sinh"
          name="dob"
          rules={[
            {
              required: true,
              message: "Ngày sinh không hợp lệ",
              validator: (_, value) =>
                new Date(value).getTime() < new Date().getTime()
                  ? Promise.resolve()
                  : Promise.reject("Ngày sinh không hợp lệ"),
            },
          ]}
        >
          <DatePicker className="w-full" />
        </Form.Item>

        <Form.Item
          className="flex-1"
          label="Giới tính"
          name="gender"
          rules={[
            {
              required: true,
              message: "Vui lòng chọn giới tính",
            },
          ]}
        >
          <Radio.Group className="space-x-4" options={genderOptions} />
        </Form.Item>
      </div>

      <div className="flex gap-5">
        <Form.Item
          className="flex-1"
          label="Số điện thoại"
          name="phoneNumber"
          rules={[
            {
              required: true,
              message: "Vui lòng nhập số điện thoại",
            },
            {
              pattern: /(84|0[3|5|7|8|9])+([0-9]{8})\b/,
              message: "Số điện thoại không hợp lệ",
            },
          ]}
        >
          <Input placeholder="Số điện thoại" />
        </Form.Item>

        <Form.Item
          className="flex-1"
          label="Quốc gia"
          name="country"
          rules={[
            {
              required: true,
              message: "Vui lòng chọn quốc gia",
            },
          ]}
        >
          <Select
            placeholder="Vui lòng chọn quốc gia"
            options={countryOptions}
          />
        </Form.Item>
      </div>

      <Form.Item
        label="Hộ chiếu/CCCD"
        name="passportNumber"
        rules={[
          {
            required: true,
            message: "Vui lòng nhập số hộ chiếu/CCCD",
          },
          {
            pattern: /^[0-9]{9,12}$/,
            message: "Số hộ chiếu/CCCD không hợp lệ",
          },
        ]}
      >
        <Input placeholder="Hộ chiếu/CCCD" />
      </Form.Item>

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
        <Input placeholder="Email" />
      </Form.Item>

      <Form.Item
        label="Mật khẩu"
        name="password"
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
        dependencies={["password"]}
        rules={[
          {
            required: true,
            message: "Vui lòng xác nhận mật khẩu",
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue("password") === value) {
                return Promise.resolve();
              }
              return Promise.reject(new Error("Mật khẩu xác nhận không khớp!"));
            },
          }),
        ]}
        hasFeedback
      >
        <Input.Password placeholder="Xác nhận mật khẩu" />
      </Form.Item>

      <Button type="primary" size="large" htmlType="submit">
        Đăng ký
      </Button>

      <Divider plain>Hoặc</Divider>

      <Button
        type="default"
        size="large"
        icon={
          <img src="/google_logo.png" alt="Google logo" className="h-6 w-6" />
        }
        onClick={onLoginWithGoogle}
      >
        Đăng ký với Google
      </Button>

      <div className="mt-4 text-center text-xs">
        <span className="text-sm text-gray-900">
          Bạn đã có tài khoản? Quay lại{" "}
        </span>
        <a
          href="../login"
          className="text-sm font-semibold text-blue-700 hover:text-blue-900"
        >
          đăng nhập
        </a>
      </div>
    </Form>
  );
};

export default RegisterForm;
