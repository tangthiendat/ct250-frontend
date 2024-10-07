import { DatePicker, Form } from "antd";
import dayjs, { Dayjs } from "dayjs";

const { RangePicker } = DatePicker;

interface DateSelectorProps {
  typeTrip: string;
  departureDate: string;
  setDepartureDate: React.Dispatch<React.SetStateAction<string>>;
  flightRange: string[];
  setFlightRange: React.Dispatch<React.SetStateAction<string[]>>;
}

const DateSelector: React.FC<DateSelectorProps> = ({
  typeTrip,
  departureDate,
  setDepartureDate,
  flightRange,
  setFlightRange,
}) => {
  const dateValidation = (date: Date) => {
    const currentDate = new Date();
    return date.getTime() <= currentDate.getTime();
  };

  return (
    <>
      {typeTrip === "one-way" && (
        <div className="basis-[25%]">
          <Form.Item
            name="departureDate"
            rules={[{ required: true, message: "Vui lòng chọn ngày đi" }]}
            getValueProps={(value: string) => ({
              value: value && dayjs(value),
            })}
            normalize={(value: Dayjs) =>
              value && value.tz().format("YYYY-MM-DD")
            }
            initialValue={departureDate}
          >
            <DatePicker
              className="w-full"
              size="large"
              format={"DD/MM/YYYY"}
              placeholder="Chọn ngày đi"
              onChange={(date) => {
                setDepartureDate(date?.tz().format("YYYY-MM-DD"));
                setFlightRange([date?.tz().format("YYYY-MM-DD")]);
              }}
              disabledDate={(date) => dateValidation(date.toDate())}
            />
          </Form.Item>
        </div>
      )}

      {typeTrip === "round-trip" && (
        <div className="flex-1">
          <Form.Item
            name="flightRange"
            rules={[
              {
                // type: "array",
                required: true,
                message: "Vui lòng chọn ngày đi và ngày về",
              },
            ]}
            getValueProps={(value: string[]) => ({
              value: value
                ? [value[0] && dayjs(value[0]), value[1] && dayjs(value[1])]
                : [],
            })}
            normalize={(value: Dayjs[]) => {
              return value
                ? [
                    value[0] && value[0].tz().format("YYYY-MM-DD"),
                    value[1] && value[1].tz().format("YYYY-MM-DD"),
                  ]
                : [];
            }}
            initialValue={flightRange}
          >
            <RangePicker
              className="w-full"
              size="large"
              format={"DD/MM/YYYY"}
              placeholder={["Chọn ngày đi", "Chọn ngày về"]}
              onChange={(dates) => {
                if (dates) {
                  const [departureDate, returnDate] = dates;
                  if (departureDate && returnDate) {
                    setDepartureDate(departureDate.tz().format("YYYY-MM-DD"));
                    setFlightRange([
                      departureDate.tz().format("YYYY-MM-DD"),
                      returnDate.tz().format("YYYY-MM-DD"),
                    ]);
                  }
                }
              }}
              disabledDate={(date) => dateValidation(date.toDate())}
            />
          </Form.Item>
        </div>
      )}
    </>
  );
};

export default DateSelector;
