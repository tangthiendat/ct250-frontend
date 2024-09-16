import { Form, DatePicker, Radio } from "antd";
import moment from "moment";

const genderOptions = [
  { value: "MALE", label: "Nam" },
  { value: "FEMALE", label: "Nữ" },
  { value: "OTHER", label: "Khác" },
];

const DateAndGenderFields: React.FC = () => (
  <div className="flex gap-5">
    <Form.Item
      className="flex-1"
      label="Ngày sinh"
      name="dateOfBirth"
      rules={[
        {
          required: true,
          message: "Ngày sinh không hợp lệ",
          validator: (_, value) =>
            value && moment(value).isBefore(moment())
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
);

export default DateAndGenderFields;
