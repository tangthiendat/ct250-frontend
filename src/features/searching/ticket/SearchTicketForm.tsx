import { useQuery, useQueryClient } from "@tanstack/react-query";
import { Button, Form, Input, Modal } from "antd";
import { AxiosError } from "axios";
import { useEffect, useState } from "react";
import { bookingService } from "../../../services";

type SizeType = Parameters<typeof Form>[0]["size"];

interface SearchTicketFormValues {
  code: string;
}

const SearchTicketForm: React.FC = () => {
  const [form] = Form.useForm<SearchTicketFormValues>();
  const [code, setCode] = useState<string>("");
  const queryClient = useQueryClient();
  const [modal, contextHolder] = Modal.useModal();

  const [componentSize, setComponentSize] = useState<SizeType | "default">(
    "default",
  );

  const { data, isError, isLoading, error } = useQuery({
    queryKey: ["bookings", code],
    queryFn: () => bookingService.searchBookingByCode(code),
    enabled: code !== "",
    retry: false,
  });

  useEffect(() => {
    if (isError && error) {
      if ((error as AxiosError).response?.status === 404) {
        modal.error({
          title: "Không tìm thấy mã đặt chỗ",
          content: "Vui lòng kiểm tra lại mã đặt chỗ",
        });
      } else {
        modal.error({
          title: "Đã xảy ra lỗi",
          content: "Vui lòng thử lại sau",
        });
      }
    }

    if (data?.payload) {
      window.location.href = data.payload;
    }
  }, [data, isError, error, modal]);

  const onFormLayoutChange = ({ size }: { size: SizeType }) => {
    setComponentSize(size);
  };

  const handleFinish = (values: SearchTicketFormValues) => {
    queryClient.invalidateQueries({
      queryKey: ["bookings", values.code.toUpperCase()],
    });
    setCode(values.code.toUpperCase());
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
            label="MÃ ĐẶT CHỖ"
            name="code"
            rules={[
              {
                required: true,
                message: "Vui lòng nhập mã đặt chỗ",
              },
              {
                pattern: /^[a-zA-Z0-9]{1,6}$/,
                message: "Mã đặt chỗ chỉ chứa 6 ký tự chữ và số",
              },
            ]}
          >
            <Input className="uppercase" size="large" placeholder="XXXXXX" />
          </Form.Item>
        </div>

        {/* <div className="flex-1">
          <Form.Item
            label="HỌ"
            name="lastName"
            rules={[
              {
                required: true,
                message: "Vui lòng nhập họ hành khách",
              },
            ]}
          >
            <Input className="uppercase" size="large" placeholder="NGUYEN" />
          </Form.Item>
        </div> */}
      </div>

      <div className="flex justify-center">
        <Form.Item>
          <Button
            htmlType="submit"
            type="primary"
            size="large"
            className="w-40"
            loading={isLoading}
          >
            Tìm kiếm
          </Button>
        </Form.Item>
      </div>
      {contextHolder}
    </Form>
  );
};

export default SearchTicketForm;
