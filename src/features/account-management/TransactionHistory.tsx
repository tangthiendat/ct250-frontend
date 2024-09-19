import { Button, ConfigProvider, DatePicker, Segmented } from "antd";
import { useState } from "react";
import CustomSearch from "./components/CustomSearch";
const { RangePicker } = DatePicker;

const searchOptions = [
  {
    key: "10days",
    label: "10 ngày gần nhất",
    value: "10days",
  },
  {
    key: "20days",
    label: "20 ngày gần nhất",
    value: "20days",
  },
  {
    label: "Tìm theo ngày",
    key: "custom",
    value: "custom",
  },
];

const dateValidation = (date: Date) => {
  const currentDate = new Date();
  return date.getTime() >= currentDate.getTime();
};

const TransactionHistory: React.FC = () => {
  const [searchType, setSearchType] = useState<string>("10days");
  const [fromDate, setFromDate] = useState<string>("");
  const [toDate, setToDate] = useState<string>("");

  const onDateChange = (dates: any, dateStrings: [string, string]) => {
    console.log("From: ", dateStrings[0], ", To: ", dateStrings[1]);
    setFromDate(dateStrings[0]);
    setToDate(dateStrings[1]);
  };

  return (
    <>
      <ConfigProvider
        theme={{
          components: {
            Segmented: {
              itemSelectedBg: "#0066FF ",
              itemSelectedColor: "white",
            },
          },
        }}
      >
        <Segmented
          size="large"
          value={searchType}
          options={searchOptions}
          onChange={(type) => {
            setSearchType(type);
            console.log("Tìm kiếm theo:", type);
          }}
        />
      </ConfigProvider>

      <div className="rounded-md p-4 shadow-lg md:shadow-md">
        {searchType === "10days" && <CustomSearch type={searchType} />}
        {searchType === "20days" && <CustomSearch type={searchType} />}
        {searchType === "custom" && (
          <>
            <div className="flex gap-2">
              <RangePicker
                className="w-full"
                size="large"
                format={"DD/MM/YYYY"}
                placeholder={["Chọn ngày bắt đầu", "Chọn ngày kết thúc"]}
                disabledDate={(date) => dateValidation(date.toDate())}
                onChange={onDateChange}
              />
              <Button type="primary" size="large">
                Tìm kiếm
              </Button>
            </div>

            <CustomSearch type={searchType} from={fromDate} to={toDate} />
          </>
        )}
      </div>
    </>
  );
};

export default TransactionHistory;
