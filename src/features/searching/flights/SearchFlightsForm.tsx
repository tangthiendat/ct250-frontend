import { Button, Form } from "antd";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ISearchFlights } from "../../../interfaces";
import useSearchData from "../../booking/hooks/useSearchData";

import { setFlightSearchInfo } from "../../../redux/slices/flightSearchSlice";
import Coupon from "./components/Coupon";
import DateSelector from "./components/DateSelector";
import PassengerSelector from "./components/PassengerSelector";
import SearchAirPort from "./components/SearchAirPort";
import TypeTripSelector from "./components/TypeTripSelector";

type SizeType = Parameters<typeof Form>[0]["size"];

const SearchFlightsForm: React.FC = () => {
  const [form] = Form.useForm<ISearchFlights>();
  const navigate = useNavigate();
  const { flightSearch, dispatch } = useSearchData();
  const [componentSize, setComponentSize] = useState<SizeType | "default">(
    "default",
  );

  const [typeTrip, setTypeTrip] = useState<string>(flightSearch.typeTrip || "");
  const [departureAirport, setDepartureAirport] = useState<string>(
    flightSearch.departureAirport || "",
  );
  const [destinationAirport, setDestinationAirport] = useState<string>(
    flightSearch.destinationAirport || "",
  );
  const [departureDate, setDepartureDate] = useState<string>(
    flightSearch.departureDate || "",
  );
  const [flightRange, setFlightRange] = useState<string[]>(
    flightSearch.flightRange || [],
  );
  const [adult, setAdult] = useState<number>(
    flightSearch.passengers.adult || 1,
  );
  const [children, setChildren] = useState<number>(
    flightSearch.passengers.children || 0,
  );
  const [infant, setInfant] = useState<number>(
    flightSearch.passengers.infant || 0,
  );
  const [couponCode, setCouponCode] = useState<string>(
    flightSearch.couponCode || "",
  );

  const onFormLayoutChange = ({ size }: { size: SizeType }) => {
    setComponentSize(size);
  };

  const onSubmit = () => {
    dispatch(
      setFlightSearchInfo({
        typeTrip,
        departureAirport,
        destinationAirport,
        departureDate,
        flightRange,
        passengers: {
          adult,
          children,
          infant,
        },
        couponCode,
        cabinClass: "",
      }),
    );
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
      <TypeTripSelector typeTrip={typeTrip} setTypeTrip={setTypeTrip} />

      <div className="justify-centr flex flex-col gap-2">
        <div className="flex flex-col gap-2 lg:flex-row">
          <div className="flex-1">
            <SearchAirPort
              departureAirport={departureAirport}
              setDepartureAirport={setDepartureAirport}
              destinationAirport={destinationAirport}
              setDestinationAirport={setDestinationAirport}
            />
          </div>
          <DateSelector
            typeTrip={typeTrip}
            departureDate={departureDate}
            setDepartureDate={setDepartureDate}
            flightRange={flightRange}
            setFlightRange={setFlightRange}
          />
        </div>

        <div className="flex gap-2">
          <div className="flex-1">
            <PassengerSelector
              adult={adult}
              setAdult={setAdult}
              children={children}
              setChildren={setChildren}
              infant={infant}
              setInfant={setInfant}
            />
          </div>
          <div className="flex-1">
            <Coupon couponCode={couponCode} setCouponCode={setCouponCode} />
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
