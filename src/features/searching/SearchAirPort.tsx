import { AutoComplete, Form, Input } from "antd";
import { MdFlightLand, MdFlightTakeoff } from "react-icons/md";
// import { Form } from "react-router-dom";
import removeAccents from "remove-accents";

interface SearchAirPortProps {
  typeTrip: string;
  departure: string;
  setDeparture: React.Dispatch<React.SetStateAction<string>>;
  destination: string;
  setDestination: React.Dispatch<React.SetStateAction<string>>;
}

const airPortOptions = [
  {
    label: "Trong nước",
    options: [
      {
        label: "Thành phố Hồ Chí Minh - SGN",
        value: "Thành phố Hồ Chí Minh - SGN",
      },
      { label: "Thành phố Hà Nội - HAN", value: "Thành phố Hà Nội - HAN" },
    ],
  },
  {
    label: "Châu Á",
    options: [
      { label: "Thành phố Bangkok - BKK", value: "Thành phố Bangkok - BKK" },
      {
        label: "Thành phố Singapore - SIN",
        value: "Thành phố Singapore - SIN",
      },
    ],
  },
  {
    label: "Châu Âu",
    options: [
      { label: "Thành phố Paris - CDG", value: "Thành phố Paris - CDG" },
      { label: "Thành phố London - LHR", value: "Thành phố London - LHR" },
    ],
  },
  {
    label: "Châu Mỹ",
    options: [
      { label: "Thành phố New York - JFK", value: "Thành phố New York - JFK" },
      {
        label: "Thành phố Los Angeles - LAX",
        value: "Thành phố Los Angeles - LAX",
      },
    ],
  },
  {
    label: "Châu Phi",
    options: [
      { label: "Thành phố Cairo - CAI", value: "Thành phố Cairo - CAI" },
      {
        label: "Thành phố Johannesburg - JNB",
        value: "Thành phố Johannesburg - JNB",
      },
    ],
  },
  {
    label: "Châu Đại Dương",
    options: [
      { label: "Thành phố Sydney - SYD", value: "Thành phố Sydney - SYD" },
      { label: "Thành phố Auckland - AKL", value: "Thành phố Auckland - AKL" },
    ],
  },
];

const SearchAirPort: React.FC<SearchAirPortProps> = ({
  typeTrip,
  departure,
  setDeparture,
  destination,
  setDestination,
}) => {
  const handleDepartureChange = (value: string) => {
    setDeparture(value);
  };

  const handleDestinationChange = (value: string) => {
    setDestination(value);
  };

  const filteredDepartureOptions = airPortOptions.map((group) => ({
    ...group,
    options: group.options.filter((option) => option.value !== destination),
  }));

  const filteredDestinationOptions = airPortOptions.map((group) => ({
    ...group,
    options: group.options.filter((option) => option.value !== departure),
  }));

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
        ]}
      >
        <AutoComplete
          size="large"
          options={filteredDepartureOptions}
          filterOption={(inputValue, option) =>
            removeAccents(option!.label.toString().toUpperCase()).indexOf(
              removeAccents(inputValue.toUpperCase()),
            ) !== -1
          }
          onChange={handleDepartureChange}
        >
          <Input
            className="h-10"
            prefix={<MdFlightTakeoff />}
            placeholder="Địa điểm đi"
          />
        </AutoComplete>
      </Form.Item>

      {typeTrip === "round-trip" && (
        <Form.Item
          className="flex-1"
          name="destinationAirport"
          rules={[
            {
              required: true,
              message: "Vui lòng chọn điểm đến",
            },
          ]}
        >
          <AutoComplete
            size="large"
            options={filteredDestinationOptions}
            filterOption={(inputValue, option) =>
              removeAccents(option!.label.toString().toUpperCase()).indexOf(
                removeAccents(inputValue.toUpperCase()),
              ) !== -1
            }
            onChange={handleDestinationChange}
          >
            <Input
              className="h-10"
              prefix={<MdFlightLand />}
              placeholder="Địa điểm đến"
            />
          </AutoComplete>
        </Form.Item>
      )}
    </div>
  );
};

export default SearchAirPort;
