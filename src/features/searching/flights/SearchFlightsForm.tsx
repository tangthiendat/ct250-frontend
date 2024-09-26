import { Button, Form } from "antd";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ISearchFlights } from "../../../interfaces";
import useSearchData from "../../booking/hooks/useSearchData";

import Coupon from "./components/Coupon";
import DateSelector from "./components/DateSelector";
import PassengerSelector from "./components/PassengerSelector";
import SearchAirPort from "./components/SearchAirPort";
import TypeTripSelector from "./components/TypeTripSelector";

type SizeType = Parameters<typeof Form>[0]["size"];

const SearchFlightsForm: React.FC = () => {
  const [form] = Form.useForm<ISearchFlights>();
  const navigate = useNavigate();
  const { flightSearch } = useSearchData();
  const [componentSize, setComponentSize] = useState<SizeType | "default">(
    "default",
  );

  useEffect(() => {
    form.setFieldsValue(flightSearch);
  }, [form, flightSearch]);

  const onFormLayoutChange = ({ size }: { size: SizeType }) => {
    setComponentSize(size);
  };

  const onSubmit = () => {
    navigate("/book/available-flights");
  };

  return (
    <Form
      form={form}
      onFinish={onSubmit}
      initialValues={{ size: componentSize }}
      onValuesChange={onFormLayoutChange}
      size={componentSize as SizeType}
      className="p-2"
    >
      <TypeTripSelector />

      <div className="justify-centr flex flex-col gap-2">
        <div className="flex flex-col gap-2 lg:flex-row">
          <div className="flex-1">
            <SearchAirPort />
          </div>
          <DateSelector />
        </div>

        <div className="flex gap-2">
          <div className="flex-1">
            <PassengerSelector />
          </div>
          <div className="flex-1">
            <Coupon />
          </div>
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
            Tìm chuyến bay
          </Button>
        </Form.Item>
      </div>
    </Form>
  );
};

export default SearchFlightsForm;
