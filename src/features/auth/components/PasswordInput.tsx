import { LockOutlined } from "@ant-design/icons";
import { Form, Input } from "antd";

const PasswordInput: React.FC = () => (
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
);

export default PasswordInput;
