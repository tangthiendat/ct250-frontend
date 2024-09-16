import { Form, Input } from "antd";

const NameFields: React.FC = () => (
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
          pattern: /^[a-zA-Z\s]+$/,
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
          pattern: /^[a-zA-Z\s]+$/,
          message: "Tên đệm & tên không chứa ký tự đặc biệt",
        },
      ]}
    >
      <Input
        placeholder="Tên đệm & tên, ví dụ VAN A"
        style={{ textTransform: "uppercase" }}
      />
    </Form.Item>
  </div>
);

export default NameFields;
