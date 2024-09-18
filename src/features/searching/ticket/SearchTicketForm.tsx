import { Button, Form, Input } from "antd";
import { ISearchTicket } from "../../../interfaces";
import { useState } from "react";

type SizeType = Parameters<typeof Form>[0]["size"];

function onSubmit(data: ISearchTicket): void {
  console.log(data);
}

const SearchTicketForm: React.FC = () => {
  const [form] = Form.useForm();

  const [componentSize, setComponentSize] = useState<SizeType | "default">(
    "default",
  );

  const onFormLayoutChange = ({ size }: { size: SizeType }) => {
    setComponentSize(size);
  };

  const handleFinish = (values: any) => {
    const data = {
      ...values,
      fullName: values.fullName
        .toLowerCase()
        .trim()
        .split(" ")
        .map((s: string) => s.charAt(0).toUpperCase() + s.slice(1))
        .join(" "),
    };
    onSubmit(data);
  };

  return (
    <Form
      form={form}
      onFinish={handleFinish}
      initialValues={{ size: componentSize }}
      onValuesChange={onFormLayoutChange}
      size={componentSize as SizeType}
      className="p-2"
      layout="vertical"
    >
      <div className="flex flex-col sm:flex-row sm:gap-10">
        <div className="flex-1">
          <Form.Item
            label="MÃ VÉ"
            name="ticketNumber"
            rules={[
              {
                required: true,
                message: "Vui lòng nhập mã đặt chỗ",
              },
            ]}
          >
            <Input
              className="uppercase"
              size="large"
              placeholder="1234XXXXXXXX"
            />
          </Form.Item>
        </div>

        <div className="flex-1">
          <Form.Item
            label="TÊN HÀNH KHÁCH"
            name="fullName"
            rules={[
              {
                required: true,
                message: "Vui lòng nhập họ tên hành khách",
              },
            ]}
          >
            <Input
              className="uppercase"
              size="large"
              placeholder="Nguyễn Văn A"
            />
          </Form.Item>
        </div>
      </div>

      <div className="flex justify-center">
        <Form.Item>
          <Button
            htmlType="submit"
            type="primary"
            size="large"
            className="w-40"
          >
            Tìm kiếm
          </Button>
        </Form.Item>
      </div>
    </Form>
  );
};

export default SearchTicketForm;
