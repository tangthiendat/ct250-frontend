import { Button, DatePicker } from "antd";
import { useState } from "react";
import TransactionsTable from "./TransactionsTable";
const { RangePicker } = DatePicker;

interface CustomSearchProps {
  type: string;
}

const CustomSearch: React.FC<CustomSearchProps> = ({ type }) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [fromDateCustom, setFromDateCustom] = useState<string>("");
  const [toDateCustom, setToDateCustom] = useState<string>("");

  const dateValidation = (date: Date) => {
    const currentDate = new Date();
    return date.getTime() >= currentDate.getTime();
  };

  const onDateChange = (dates: any, dateStrings: [string, string]) => {
    console.log("From: ", dateStrings[0], ", To: ", dateStrings[1]);
    setFromDateCustom(dateStrings[0]);
    setToDateCustom(dateStrings[1]);
    setLoading(false);
  };

  const formatDate = (days: number) => {
    const currentDate = new Date();
    currentDate.setDate(currentDate.getDate() - days);
    return currentDate.toLocaleDateString();
  };

  const handleDateSearch = (type: string) => {
    let from = "";
    let to = "";

    if (type !== "custom") {
      if (type === "10days") {
        from = formatDate(10);
        to = formatDate(0);
      } else {
        from = formatDate(20);
        to = formatDate(0);
      }
    }
    return { from, to };
  };

  const { from: fromDate, to: toDate } = handleDateSearch(type);

  return (
    <>
      {type !== "custom" ? (
        <TransactionsTable fromDate={fromDate} toDate={toDate} />
      ) : (
        <>
          <div className="space-x-2">
            <RangePicker
              className="mx-auto w-[70%] md:mx-0 md:w-[50%]"
              size="large"
              format={"DD/MM/YYYY"}
              placeholder={["Chọn ngày bắt đầu", "Chọn ngày kết thúc"]}
              disabledDate={(date) => dateValidation(date.toDate())}
              onChange={onDateChange}
            />
            <Button
              type="primary"
              size="large"
              onClick={() => {
                console.log(
                  "Tìm kiếm theo ngày:",
                  fromDateCustom,
                  toDateCustom,
                );
                setLoading(true);
              }}
            >
              Tìm kiếm
            </Button>
          </div>

          {loading && (
            <div className="pt-4">
              <TransactionsTable
                fromDate={fromDateCustom}
                toDate={toDateCustom}
              />
            </div>
          )}
        </>
      )}
    </>
  );
};

export default CustomSearch;
