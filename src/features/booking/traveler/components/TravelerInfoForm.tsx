import { ConfigProvider, DatePicker, Input, Select } from "antd";
import { Form } from "antd/lib";

interface TravelerInfoFormProps {}

const TravelerInfoForm: React.FC<TravelerInfoFormProps> = ({}) => {
  return (
    <ConfigProvider
      theme={{
        components: {
          Input: {
            activeBorderColor: "#1e40af",
            hoverBorderColor: "#1e40af",
          },
          Select: {
            colorPrimary: "#1e40af",
            colorPrimaryHover: "#1e40af",
          },
          DatePicker: {
            activeBorderColor: "#1e40af",
            hoverBorderColor: "#1e40af",
          },
        },

        token: {
          lineWidth: 2,
        },
      }}
    >
      <Form className="g-blue-800 flex flex-col" layout="vertical">
        <Form.Item
          className="w-full flex-1"
          label={<p className="text-heading-3 text-blue-800">Danh xưng</p>}
          name="title"
          rules={[
            {
              required: true,
              message: "Vui lòng chọn danh xưng",
            },
          ]}
        >
          <Select
            size="large"
            className="w-full"
            placeholder="Vui lòng chọn danh xưng"
            options={[
              { label: "ÔNG", value: "Mr" },
              { label: "BÀ", value: "Mrs" },
            ]}
          />
        </Form.Item>

        <Form.Item
          className="flex-1"
          label={
            <p className="text-heading-3 text-blue-800">
              Tên đệm & tên (ví dụ: VAN A)
            </p>
          }
          name="firstName"
          rules={[
            {
              required: true,
              message: "Vui lòng nhập tên",
            },
          ]}
        >
          <Input
            size="large"
            className="uppercase"
            placeholder=" Vui lòng nhập tên đệm & tên"
          />
        </Form.Item>

        <Form.Item
          className="flex-1"
          label={
            <p className="text-heading-3 text-blue-800">Họ (ví dụ: NGUYEN)</p>
          }
          name="lastName"
          rules={[
            {
              required: true,
              message: "Vui lòng nhập họ",
            },
          ]}
        >
          <Input size="large" className="uppercase" placeholder="Họ" />
        </Form.Item>

        <Form.Item
          className="flex-1"
          label={<p className="text-heading-3 text-blue-800">Ngày sinh</p>}
          name="dateOfBirth"
          rules={[
            {
              required: true,
              message: "Ngày sinh không hợp lệ",
            },
          ]}
        >
          <DatePicker
            size="large"
            className="w-full"
            format="DD/MM/YYYY"
            //   disabledDate={disabledDate}
            placeholder="dd/mm/yyyy"
          />
        </Form.Item>
      </Form>
    </ConfigProvider>
  );
};

export default TravelerInfoForm;
