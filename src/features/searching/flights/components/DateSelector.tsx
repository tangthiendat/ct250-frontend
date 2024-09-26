import { DatePicker, Form } from "antd";
import dayjs, { Dayjs } from "dayjs";
import {
  setDepartureDate,
  setReturnDate,
} from "../../../../redux/slices/flightSearchSlice";
import useSearchData from "../../../booking/hooks/useSearchData";

const { RangePicker } = DatePicker;

const DateSelector: React.FC = () => {
  const { flightSearch, dispatch } = useSearchData();

  const dateValidation = (date: Date) => {
    const currentDate = new Date();
    return date.getTime() <= currentDate.getTime();
  };

  return (
    <>
      {flightSearch.typeTrip === "one-way" && (
        <Form.Item
          name="departureDate"
          rules={[{ required: true, message: "Vui lòng chọn ngày đi" }]}
          getValueProps={(value: string) => ({
            value: value && dayjs(value),
          })}
          normalize={(value: Dayjs) => value && value.tz().format("YYYY-MM-DD")}
        >
          <DatePicker
            className="w-full"
            size="large"
            format={"DD/MM/YYYY"}
            placeholder="Chọn ngày đi"
            onChange={(date) => {
              dispatch(setDepartureDate(date?.tz().format("YYYY-MM-DD")));
            }}
            disabledDate={(date) => dateValidation(date.toDate())}
          />
        </Form.Item>
      )}

      {flightSearch.typeTrip === "round-trip" && (
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
                    dispatch(
                      setDepartureDate(departureDate.tz().format("YYYY-MM-DD")),
                    );
                    dispatch(
                      setReturnDate(returnDate.tz().format("YYYY-MM-DD")),
                    );
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
