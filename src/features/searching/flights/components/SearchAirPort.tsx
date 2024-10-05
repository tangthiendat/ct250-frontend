import { ConfigProvider, Form, Select } from "antd";
import { SelectProps } from "antd/lib";
import { useState } from "react";
import { MdFlightLand, MdFlightTakeoff } from "react-icons/md";
import { IAirport } from "../../../../interfaces";
import { groupBy } from "../../../../utils";
import AirportOption from "./AirportOption";

interface SearchAirPortProps {
  airports: IAirport[];
}

const SearchAirPort: React.FC<SearchAirPortProps> = ({ airports }) => {
  const airportsByCountry: Map<string, IAirport[]> = groupBy(
    airports,
    (airport) => airport.country.countryName,
  );
  const [selectedDepartureAirport, setSelectedDepartureAirport] = useState<
    number | undefined
  >(undefined);
  const [selectedArrivalAirport, setSelectedArrivalAirport] = useState<
    number | undefined
  >(undefined);

  const airportOptions = Array.from(airportsByCountry.entries()).map(
    ([countryName, airports]) => ({
      label: <span className="text-sm">{countryName}</span>,
      options: airports.map((airport) => ({
        value: airport.airportId,
        label: <AirportOption airport={airport} />,
        searchLabel: `${airport.airportName} (${airport.airportCode})`,
      })),
    }),
  );

  const filteredDepartureOptions = airportOptions.map((group) => ({
    ...group,
    options: group.options.filter(
      (airport) => airport.value !== selectedArrivalAirport,
    ),
  }));

  const filteredArrivalOptions = airportOptions.map((group) => ({
    ...group,
    options: group.options.filter(
      (airport) => airport.value !== selectedDepartureAirport,
    ),
  }));

  const labelRender: SelectProps["labelRender"] = (props) => {
    const { label } = props;
    if (label) {
      const selectedAirport = (label as React.JSX.Element).props
        .airport as IAirport;
      return `${selectedAirport?.cityName} (${selectedAirport?.airportCode})`;
    }
    return null;
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
          name={["departureAirport", "airportId"]}
          rules={[
            {
              required: true,
              message: "Vui lòng chọn điểm đi",
            },
          ]}
        >
          <Select
            allowClear
            showSearch
            size="large"
            options={filteredDepartureOptions}
            onChange={setSelectedDepartureAirport}
            labelRender={labelRender}
            filterOption={(input, option) => {
              if (option && option.options) {
                return false; //ignore group label
              }
              const airport = option?.label.props.airport as IAirport;
              return (
                airport.airportCode
                  .toLowerCase()
                  .includes(input.toLowerCase()) ||
                airport.cityName.toLowerCase().includes(input.toLowerCase())
              );
            }}
            suffixIcon={<MdFlightTakeoff className="text-black" />}
            placeholder="Điểm đi"
          />
        </Form.Item>

        <Form.Item
          className="flex-1"
          name={["arrivalAirport", "airportId"]}
          rules={[
            {
              required: true,
              message: "Vui lòng chọn điểm đến",
            },
          ]}
        >
          <Select
            allowClear
            showSearch
            size="large"
            onChange={setSelectedArrivalAirport}
            options={filteredArrivalOptions}
            labelRender={labelRender}
            filterOption={(input, option) => {
              if (option && option.options) {
                return false; //ignore group label
              }
              const airport = option?.label.props.airport as IAirport;
              return (
                airport.airportCode
                  .toLowerCase()
                  .includes(input.toLowerCase()) ||
                airport.cityName.toLowerCase().includes(input.toLowerCase())
              );
            }}
            suffixIcon={<MdFlightLand className="text-black" />}
            placeholder="Điểm đến"
          />
        </Form.Item>
      </ConfigProvider>
    </div>
  );
};

export default SearchAirPort;
