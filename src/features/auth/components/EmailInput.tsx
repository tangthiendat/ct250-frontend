import { UserOutlined } from "@ant-design/icons";
import { Form, Input } from "antd";

const EmailInput: React.FC = () => (
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
);

export default EmailInput;
