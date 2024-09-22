import {
  Button,
  ConfigProvider,
  DatePicker,
  Form,
  Input,
  Segmented,
} from "antd";
import { useEffect, useState } from "react";
import { RiCoupon3Line } from "react-icons/ri";
import { TbArrowNarrowRight, TbArrowsRightLeft } from "react-icons/tb";
import { useNavigate } from "react-router-dom";
import { ISearchFlights } from "../../../interfaces";
import PassengerSelector from "./PassengerSelector";
import SearchAirPort from "./SearchAirPort";

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

  const [form] = Form.useForm<ISearchFlights>();
  const navigate = useNavigate();

  const [typeTrip, setTypeTrip] = useState<string>("round-trip");
  const [departAirport, setDepartAirport] = useState<string>("");
  const [destAirport, setDestAirport] = useState<string>("");
  const [departureDate, setDepartureDate] = useState<string>();
  const [returnDate, setReturnDate] = useState<string>();

  const [adult, setAdult] = useState(1);
  const [children, setChildren] = useState(0);
  const [infant, setInfant] = useState(0);

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

  // function onSubmit(data: ISearchFlights): void {
  //   console.log(data);
  // }

  const onSubmit = (data: ISearchFlights) => {
    const searchData = {
      typeTrip,
      departAirport,
      destAirport,
      departureDate,
      returnDate,
      passengers: { adult, children, infant },
      couponCode: data.couponCode,
    };
    navigate("/book/available-flights", { state: searchData });
  };

  const dateValidation = (date: Date) => {
    const currentDate = new Date();
    return date.getTime() <= currentDate.getTime();
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
        <Form.Item name="typeTrip" initialValue={typeTrip}>
          <Segmented
            size="large"
            options={typeTripOptions}
            onChange={(typeTrip) => {
              setTypeTrip(typeTrip);
            }}
          />
        </Form.Item>
      </ConfigProvider>

      <div className="justify-centr flex flex-col gap-2">
        <div className="flex flex-col gap-2 lg:flex-row">
          <div className="flex-1">
            <SearchAirPort
              departure={departAirport}
              setDeparture={setDepartAirport}
              destination={destAirport}
              setDestination={setDestAirport}
            />
          </div>

          {typeTrip === "one-way" && (
            <div className="">
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
                  // onChange={(date) =>
                  //   setDepartureDate(formatISODate(date?.toString()))
                  // }
                  onChange={(date) => {
                    setDepartureDate(date?.format("DD/MM/YYYY"));
                  }}
                  disabledDate={(date) => dateValidation(date.toDate())}
                />
              </Form.Item>
            </div>
          )}

          {typeTrip === "round-trip" && (
            <div className="flex-1">
              <Form.Item
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
                  // onChange={(dates) => {
                  //   if (dates) {
                  //     setDepartureDate(
                  //       formatISODate((dates[0] as Dayjs).toString()),
                  //     );
                  //     setReturnDate(
                  //       formatISODate((dates[1] as Dayjs).toString()),
                  //     );
                  //   }
                  // }}
                  onChange={(dates) => {
                    if (dates) {
                      setDepartureDate(dates[0]?.format("DD/MM/YYYY"));
                      setReturnDate(dates[1]?.format("DD/MM/YYYY"));
                    }
                  }}
                  disabledDate={(date) => dateValidation(date.toDate())}
                />
              </Form.Item>
            </div>
          )}
        </div>

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
          >
            Tìm chuyến bay
          </Button>
        </Form.Item>
      </div>
    </Form>
  );
};

export default SearchFlightsForm;
