import { Form, Input } from "antd";

const NameFields: React.FC = () => (
  <div className="flex flex-col min-[465px]:flex-row min-[465px]:gap-5">
    <Form.Item
      className="flex-1"
      label="Họ"
      name="lastName"
      hasFeedback
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
        placeholder="Ví dụ: PHAM"
        styles={{
          input: {
            textTransform: "uppercase",
          },
        }}
      />
    </Form.Item>

    <Form.Item
      className="flex-1"
      label="Tên đệm & tên"
      name="firstName"
      hasFeedback
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
        placeholder="Ví dụ: VAN A"
        styles={{
          input: {
            textTransform: "uppercase",
          },
        }}
      />
    </Form.Item>
  </div>
);

export default NameFields;
