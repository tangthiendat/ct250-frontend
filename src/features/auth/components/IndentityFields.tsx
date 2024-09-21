import { Form, Input } from "antd";

const IdentityFields: React.FC = () => (
  <>
    <Form.Item
      label="Hộ chiếu/CCCD"
      name="identityNumber"
      hasFeedback
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
      hasFeedback
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
  </>
);

export default IdentityFields;
