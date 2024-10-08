import { Button, Form } from "antd";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ISearchFlights } from "../../../interfaces";

import { setFlightSearchInfo } from "../../../redux/slices/flightSearchSlice";
import Coupon from "./components/Coupon";
import DateSelector from "./components/DateSelector";
import PassengerSelector from "./components/PassengerSelector";
import SearchAirPort from "./components/SearchAirPort";
import TypeTripSelector from "./components/TypeTripSelector";
import { useQuery } from "@tanstack/react-query";
import { airportService } from "../../../services";
import useSearchData from "../../booking/available-flights/hooks/useSearchData";

type SizeType = Parameters<typeof Form>[0]["size"];

interface SearchFlightsFormProps {
  setShow?: (show: boolean) => void;
}

const SearchFlightsForm: React.FC<SearchFlightsFormProps> = ({ setShow }) => {
  const [searchFlightForm] = Form.useForm<ISearchFlights>();
  const navigate = useNavigate();
  const { flightSearch, dispatch } = useSearchData();
  const [componentSize, setComponentSize] = useState<SizeType | "default">(
    "default",
  );

  useEffect(() => {
    if (flightSearch) {
      searchFlightForm.setFieldsValue(flightSearch);
    }
  }, [flightSearch, searchFlightForm]);

  const [typeTrip, setTypeTrip] = useState<string>(flightSearch.typeTrip || "");

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

  const { data: airportsData } = useQuery({
    queryKey: ["airports"],
    queryFn: airportService.getAll,
  });

  const onFormLayoutChange = ({ size }: { size: SizeType }) => {
    setComponentSize(size);
  };

  const onSubmit = () => {
    const departureAirport = airportsData?.payload?.find(
      (airport) =>
        airport.airportId ===
        searchFlightForm.getFieldValue("departureAirport")?.airportId,
    );
    const arrivalAirport = airportsData?.payload?.find(
      (airport) =>
        airport.airportId ===
        searchFlightForm.getFieldValue("arrivalAirport")?.airportId,
    );

    dispatch(
      setFlightSearchInfo({
        typeTrip,
        departureAirport,
        arrivalAirport,
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
      form={searchFlightForm}
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
              airports={airportsData?.payload || []}
              form={searchFlightForm}
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
            onClick={() => setShow && setShow(false)}
          >
            Tìm chuyến bay
          </Button>
        </Form.Item>
      </div>
    </Form>
  );
};

export default SearchFlightsForm;
