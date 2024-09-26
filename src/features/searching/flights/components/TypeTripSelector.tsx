import { ConfigProvider, Form, Segmented } from "antd";
import { TbArrowNarrowRight, TbArrowsRightLeft } from "react-icons/tb";
import useSearchData from "../../../booking/hooks/useSearchData";
import { setTripType } from "../../../../redux/slices/flightSearchSlice";

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

const TypeTripSelector: React.FC = () => {
  const { dispatch } = useSearchData();

  return (
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
      <Form.Item name="typeTrip">
        <Segmented
          size="large"
          options={typeTripOptions}
          onChange={(typeTrip) => {
            dispatch(setTripType(typeTrip));
          }}
        />
      </Form.Item>
    </ConfigProvider>
  );
};

export default TypeTripSelector;
