import { ConfigProvider, Form, Select } from "antd";
import { MdFlightLand, MdFlightTakeoff } from "react-icons/md";
import removeAccents from "remove-accents";
import useAirport from "../hooks/useAirport";

interface SearchAirPortProps {
  departureAirport: string;
  setDepartureAirport: React.Dispatch<React.SetStateAction<string>>;
  destinationAirport: string;
  setDestinationAirport: React.Dispatch<React.SetStateAction<string>>;
}

const SearchAirPort: React.FC<SearchAirPortProps> = ({
  departureAirport,
  setDepartureAirport,
  destinationAirport,
  setDestinationAirport,
}) => {
  const { filteredDepartureOptions, filteredDestinationOptions } = useAirport(
    departureAirport,
    destinationAirport,
  );

  const handleDepartureAirportChange = (value: string) => {
    setDepartureAirport(value);
  };

  const handleDestinationAirportChange = (value: string) => {
    setDestinationAirport(value);
  };

  return (
    <div className="flex flex-1 flex-col gap-2 min-[530px]:flex-row">
      <ConfigProvider
        theme={{
          token: {
            fontSizeIcon: 14,
          },
        }}
      >
        <Form.Item
          className="flex-1"
          name="departureAirport"
          rules={[
            {
              required: true,
              message: "Vui lòng chọn điểm đi",
            },
          ]}
          initialValue={departureAirport || undefined}
        >
          <Select
            allowClear
            showSearch
            size="large"
            options={filteredDepartureOptions}
            filterOption={(inputValue, option) =>
              removeAccents(
                option?.label?.toString().toUpperCase() ?? "",
              ).indexOf(removeAccents(inputValue.toUpperCase())) !== -1
            }
            onChange={handleDepartureAirportChange}
            suffixIcon={<MdFlightTakeoff className="text-black" />}
            placeholder="Điểm đi"
          />
        </Form.Item>

        <Form.Item
          className="flex-1"
          name="destinationAirport"
          rules={[
            {
              required: true,
              message: "Vui lòng chọn điểm đến",
            },
          ]}
          initialValue={destinationAirport || undefined}
        >
          <Select
            allowClear
            showSearch
            size="large"
            options={filteredDestinationOptions}
            filterOption={(inputValue, option) =>
              removeAccents(
                option?.label?.toString().toUpperCase() ?? "",
              ).indexOf(removeAccents(inputValue.toUpperCase())) !== -1
            }
            onChange={handleDestinationAirportChange}
            suffixIcon={<MdFlightLand className="text-black" />}
            placeholder="Điểm đến"
          />
        </Form.Item>
      </ConfigProvider>
    </div>
  );
};

export default SearchAirPort;
