import { Form, Input, Select } from "antd";
import { useCountries } from "../../countries/hooks";

const ContactFields: React.FC = () => {
  const { countries } = useCountries();
  const countryOptions = countries?.map((country) => ({
    label: country.countryName,
    value: country.countryId,
  }));

  return (
    <div className="flex flex-col min-[465px]:flex-row min-[465px]:gap-5">
      <Form.Item
        className="flex-1"
        label="Số điện thoại"
        name="phoneNumber"
        hasFeedback
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
        label="Quốc tịch"
        name={["country", "countryId"]}
        rules={[
          {
            required: true,
            message: "Vui lòng chọn quốc tịch",
          },
        ]}
      >
        <Select
          placeholder="Vui lòng chọn quốc tịch"
          options={countryOptions}
        />
      </Form.Item>
    </div>
  );
};

export default ContactFields;
