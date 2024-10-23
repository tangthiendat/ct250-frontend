import { DatePicker, DatePickerProps, Form, Radio } from "antd";
import dayjs, { Dayjs } from "dayjs";
import { useState } from "react";

const genderOptions = [
  { value: "MALE", label: "Nam" },
  { value: "FEMALE", label: "Nữ" },
  { value: "OTHER", label: "Khác" },
];

const DateAndGenderFields: React.FC = () => {
  const [mode, setMode] = useState<DatePickerProps["mode"]>("year");

  const disabledDate: DatePickerProps["disabledDate"] = (current) => {
    return current.isAfter(dayjs().subtract(14, "year"));
  };

  const handleModeChange = (value: Dayjs, newMode: DatePickerProps["mode"]) => {
    if (newMode === "date") {
      setMode("date");
      console.log("date");
    } else if (newMode === "month") {
      setMode("month");
      console.log("month");
    } else if (newMode === "year") {
      setMode("year");
      console.log("year");
    }
  };
  const handleDateChange = (
    value: Dayjs | null,
    dateString: string | string[],
  ) => {
    if (!dateString) {
      setMode("year");
    }
  };

  return (
    <div className="flex flex-col min-[465px]:flex-row min-[465px]:gap-5">
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
          mode={mode}
          onPanelChange={handleModeChange}
          onChange={handleDateChange}
          className="w-full"
          format="DD/MM/YYYY"
          defaultValue={dayjs().subtract(14, "year")}
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
        <Radio.Group
          className="flex flex-row justify-between space-x-0"
          options={genderOptions}
        />
      </Form.Item>
    </div>
  );
};

export default DateAndGenderFields;
