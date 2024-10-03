import { ConfigProvider, Form, Segmented } from "antd";
import { TbArrowNarrowRight, TbArrowsRightLeft } from "react-icons/tb";

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

interface TypeTripSelectorProps {
  typeTrip: string;
  setTypeTrip: React.Dispatch<React.SetStateAction<string>>;
}

const TypeTripSelector: React.FC<TypeTripSelectorProps> = ({
  typeTrip,
  setTypeTrip,
}) => {
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
  );
};

export default TypeTripSelector;
