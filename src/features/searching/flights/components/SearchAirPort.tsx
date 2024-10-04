import { AutoComplete, Form, Input } from "antd";
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
  const {
    filteredDepartureOptions,
    filteredDestinationOptions,
    validateAirport,
  } = useAirport(departureAirport, destinationAirport);

  const handleDepartureAirportChange = (value: string) => {
    setDepartureAirport(value);
  };

  const handleDestinationAirportChange = (value: string) => {
    setDestinationAirport(value);
  };

  return (
    <div className="flex flex-1 gap-2">
      <Form.Item
        className="flex-1"
        name="departureAirport"
        rules={[
          {
            required: true,
            message: "Vui lòng chọn điểm đi",
          },
          {
            validator: async (_, value) => {
              if (!validateAirport(value) && value !== "") {
                return Promise.reject("Điểm đi không hợp lệ");
              }
              return Promise.resolve();
            },
          },
        ]}
        initialValue={departureAirport}
      >
        <AutoComplete
          allowClear
          size="large"
          options={filteredDepartureOptions}
          filterOption={(inputValue, option) =>
            removeAccents(option!.label.toString().toUpperCase()).indexOf(
              removeAccents(inputValue.toUpperCase()),
            ) !== -1
          }
          onChange={handleDepartureAirportChange}
        >
          <Input
            className="h-10"
            prefix={<MdFlightTakeoff />}
            placeholder="Địa điểm đi"
          />
        </AutoComplete>
      </Form.Item>

      <Form.Item
        className="flex-1"
        name="destinationAirport"
        rules={[
          {
            required: true,
            message: "Vui lòng chọn điểm đến",
          },
          {
            validator: async (_, value) => {
              if (!validateAirport(value) && value !== "") {
                return Promise.reject("Điểm đến không hợp lệ");
              }
              return Promise.resolve();
            },
          },
        ]}
        initialValue={destinationAirport}
      >
        <AutoComplete
          allowClear
          size="large"
          options={filteredDestinationOptions}
          filterOption={(inputValue, option) =>
            removeAccents(option!.label.toString().toUpperCase()).indexOf(
              removeAccents(inputValue.toUpperCase()),
            ) !== -1
          }
          onChange={handleDestinationAirportChange}
        >
          <Input
            className="h-10"
            prefix={<MdFlightLand />}
            placeholder="Địa điểm đến"
          />
        </AutoComplete>
      </Form.Item>
    </div>
  );
};

export default SearchAirPort;
