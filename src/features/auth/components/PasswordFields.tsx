import { Form, Input } from "antd";

const PasswordFields: React.FC = () => (
  <>
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
  </>
);

export default PasswordFields;
