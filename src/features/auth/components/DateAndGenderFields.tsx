import { DatePicker, DatePickerProps, Form, Radio } from "antd";
import moment from "moment";

const genderOptions = [
  { value: "MALE", label: "Nam" },
  { value: "FEMALE", label: "Nữ" },
  { value: "OTHER", label: "Khác" },
];

const DateAndGenderFields: React.FC = () => {
  const disabledDate: DatePickerProps["disabledDate"] = (current) => {
    return current && current > moment().endOf("day");
  };
  return (
    <div className="flex gap-5">
      <Form.Item
        className="flex-1"
        label="Ngày sinh"
        name="dateOfBirth"
        rules={[
          {
            required: true,
            message: "Ngày sinh không hợp lệ",
          },
        ]}
      >
        <DatePicker
          className="w-full"
          format="DD/MM/YYYY"
          disabledDate={disabledDate}
          placeholder="Chọn ngày sinh"
        />
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
};

export default DateAndGenderFields;
