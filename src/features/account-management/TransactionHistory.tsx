import { ConfigProvider, Segmented } from "antd";
import { useState } from "react";
import CustomSearch from "./components/CustomSearch";

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

const TransactionHistory: React.FC = () => {
  const [searchType, setSearchType] = useState<string>("10days");

  return (
    <>
      <ConfigProvider
        theme={{
          components: {
            Segmented: {
              itemSelectedColor: "#0066FF",
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

      <div className="rounded-md bg-white p-4 shadow-lg md:shadow-md">
        <CustomSearch type={searchType} />
      </div>
    </>
  );
};

export default TransactionHistory;
