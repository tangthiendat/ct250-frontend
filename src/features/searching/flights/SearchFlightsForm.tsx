import {
  Button,
  ConfigProvider,
  DatePicker,
  Form,
  Input,
  Segmented,
} from "antd";
import { RangePickerProps } from "antd/es/date-picker";
import { Dayjs } from "dayjs";
import { useEffect, useState } from "react";
import { RiCoupon3Line } from "react-icons/ri";
import { TbArrowNarrowRight, TbArrowsRightLeft } from "react-icons/tb";

import PassengerSelector from "./PassengerSelector";
import SearchAirPort from "./SearchAirPort";
import { ISearchFlights } from "../../../interfaces";

const { RangePicker } = DatePicker;

const typeTripOptions = [
  {
    key: "round-trip",
    label: (
      <div className="flex items-center gap-2">
        <TbArrowsRightLeft /> Khứ hồi
      </div>
    ),
    value: "round-trip",
  },
  {
    key: "one-way",
    label: (
      <div className="flex items-center gap-2">
        <TbArrowNarrowRight /> Một chiều
      </div>
    ),
    value: "one-way",
  },
];

type SizeType = Parameters<typeof Form>[0]["size"];

const SearchFlightsForm: React.FC = () => {
  const [form] = Form.useForm();
  const [typeTrip, setTypeTrip] = useState("round-trip");
  const [departAirport, setDepartAirport] = useState("");
  const [destAirport, setDestAirport] = useState("");
  const [departDate, setDepartDate] = useState<Dayjs | null>(null);
  const [returnDate, setReturnDate] = useState<Dayjs | null>(null);
  const [dates, setDates] = useState<[Dayjs | null, Dayjs | null]>([
    null,
    null,
  ]);
  const [adult, setAdult] = useState(1);
  const [children, setChildren] = useState(0);
  const [infant, setInfant] = useState(0);
  const [couponCode, setCouponCode] = useState("");

  const [componentSize, setComponentSize] = useState<SizeType | "default">(
    "default",
  );

  useEffect(() => {
    form.setFieldsValue({
      passengers: { adult, children, infant },
    });
  }, [adult, children, infant, form]);

  const onFormLayoutChange = ({ size }: { size: SizeType }) => {
    setComponentSize(size);
  };

  function onSubmit(data: ISearchFlights): void {
    console.log(data);
  }

  const dateValidation = (date: Date) => {
    const currentDate = new Date();
    return date.getTime() <= currentDate.getTime();
  };

  const onDateChange: RangePickerProps["onChange"] = (dates) => {
    if (dates) {
      setDepartDate(dates[0]);
      setReturnDate(dates[1]);
      console.log("Selected dates:", dates);
    } else {
      setDepartDate(null);
      setReturnDate(null);
      setDates([null, null]);
    }
  };

  const handleSearch = () => {
    console.log("------------------------------------");
    // console.log("Loại chuyến bay:", typeTrip);
    // console.log("Sân bay đi:", departAirport);
    // console.log("Sân bay đến:", destAirport);
    // console.log("Ngày đi:", departDate?.format("DD/MM/YYYY"));
    // console.log("Ngày về:", returnDate?.format("DD/MM/YYYY"));
    // console.log("Hành khách bao gồm:", {
    //   nguoiLon: adult,
    //   treEm: children,
    //   emBe: infant,
    // });
    // console.log("Mã giảm giá:", couponCode);
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
      <Form.Item name="typeTrip" initialValue={typeTrip}>
        <ConfigProvider
          theme={{
            components: {
              Segmented: {
                itemSelectedBg: "#0066FF",
                itemSelectedColor: "white",
              },
            },
          }}
        >
          <Segmented
            size="large"
            options={typeTripOptions}
            onChange={(typeTrip) => {
              setTypeTrip(typeTrip);
            }}
          />
        </ConfigProvider>
      </Form.Item>

      <div className="justify-centr flex flex-col gap-2">
        <div className="flex gap-2">
          <div className="flex-1">
            <SearchAirPort
              typeTrip={typeTrip}
              departure={departAirport}
              setDeparture={setDepartAirport}
              destination={destAirport}
              setDestination={setDestAirport}
            />
          </div>

          {typeTrip === "one-way" && (
            <div className="flex-1">
              <Form.Item
                name="departureDate"
                rules={[
                  {
                    required: true,
                    message: "Vui lòng chọn ngày đi",
                  },
                ]}
              >
                <DatePicker
                  className="w-full"
                  size="large"
                  format={"DD/MM/YYYY"}
                  placeholder="Chọn ngày đi"
                  disabledDate={(date) => dateValidation(date.toDate())}
                  onChange={(date) => setDepartDate(date)}
                />
              </Form.Item>
            </div>
          )}
        </div>

        {typeTrip === "round-trip" && (
          <Form.Item
            name="dates"
            rules={[
              {
                required: true,
                message: "Vui lòng chọn ngày đi và ngày về",
              },
            ]}
          >
            <RangePicker
              className="w-full"
              size="large"
              format={"DD/MM/YYYY"}
              placeholder={["Chọn ngày đi", "Chọn ngày về"]}
              disabledDate={(date) => dateValidation(date.toDate())}
              onChange={onDateChange}
            />
          </Form.Item>
        )}

        <div className="flex gap-2">
          <div className="flex-1">
            <Form.Item
              name="passengers"
              initialValue={{ adult, children, infant }}
            >
              <PassengerSelector
                adult={adult}
                setAdult={setAdult}
                children={children}
                setChildren={setChildren}
                infant={infant}
                setInfant={setInfant}
              />
            </Form.Item>
          </div>

          <div className="flex-1">
            <Form.Item name="couponCode">
              <Input
                className="w-full"
                size="large"
                placeholder="Nhập mã giảm giá"
                value={couponCode}
                onChange={(e) => setCouponCode(e.target.value)}
                prefix={<RiCoupon3Line />}
              />
            </Form.Item>
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
            onClick={handleSearch}
          >
            Tìm chuyến bay
          </Button>
        </Form.Item>
      </div>
    </Form>
  );
};

export default SearchFlightsForm;
