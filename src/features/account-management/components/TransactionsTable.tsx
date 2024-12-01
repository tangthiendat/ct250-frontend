import { Table, TableProps, Tag } from "antd";
import { ITransactionHistory } from "../../../interfaces";
import { format } from "date-fns";

const columns: TableProps<ITransactionHistory>["columns"] = [
  {
    title: "Mã giao dịch",
    dataIndex: "transactionId",
    key: "transactionId",
    width: 140,
    fixed: "left",
    align: "center",
    render: (value) => (
      <p
        style={{
          fontWeight: "bold",
          color: "#1890ff",
        }}
      >
        {value}
      </p>
    ),
    sorter: (a, b) => a.transactionId.localeCompare(b.transactionId),
  },
  {
    title: "Ngày giao dịch",
    dataIndex: "transactionDate",
    key: "transactionDate",
    width: 150,
    align: "center",
    render: (value) => {
      const parsedDate = value.split("/").reverse();

      return (
        <p className="font-medium">
          {format(new Date(parsedDate), "dd/MM/yyyy")}
        </p>
      );
    },
    sorter: (a, b) => {
      const dateA = a.transactionDate.split("/").reverse();
      const dateB = b.transactionDate.split("/").reverse();

      return (
        new Date(
          Number(dateA[0]),
          Number(dateA[1]) - 1,
          Number(dateA[2]),
        ).getTime() -
        new Date(
          Number(dateB[0]),
          Number(dateB[1]) - 1,
          Number(dateB[2]),
        ).getTime()
      );
    },
  },
  {
    title: "Loại chuyến bay",
    dataIndex: "flightType",
    key: "flightType",
    width: 140,
    align: "center",
    render: (value) => (
      <p className="font-medium">
        {value === "Một chiều" ? (
          <Tag className="bg-green-600 text-white">{value.toUpperCase()}</Tag>
        ) : (
          <Tag className="bg-blue-600 text-white">{value.toUpperCase()}</Tag>
        )}
      </p>
    ),
    filters: [
      {
        text: "Một chiều",
        value: "Một chiều",
      },
      {
        text: "Khứ hồi",
        value: "Khứ hồi",
      },
    ],
    onFilter: (value, record) => record.flightType === value,
  },
  {
    title: "Đi từ",
    dataIndex: "originAirport",
    key: "originAirport",
    align: "center",
    render: (value) => <p className="font-medium">{value}</p>,
  },
  {
    title: "Ngày đi",
    dataIndex: "departureDate",
    key: "departureDate",
    width: 110,
    align: "center",
    render: (value) => {
      const parsedDate = value.split("/").reverse();

      return (
        <p className="font-medium">
          {format(new Date(parsedDate), "dd/MM/yyyy")}
        </p>
      );
    },
    sorter: (a, b) => {
      const dateA = a.departureDate.split("/").reverse();
      const dateB = b.departureDate.split("/").reverse();

      return (
        new Date(
          Number(dateA[0]),
          Number(dateA[1]) - 1,
          Number(dateA[2]),
        ).getTime() -
        new Date(
          Number(dateB[0]),
          Number(dateB[1]) - 1,
          Number(dateB[2]),
        ).getTime()
      );
    },
  },
  {
    title: "Đến",
    dataIndex: "destinationAirport",
    key: "destinationAirport",
    align: "center",
    render: (value) => <p className="font-medium">{value}</p>,
  },
  {
    title: "Ngày về (nếu có)",
    dataIndex: "returnDate",
    key: "returnDate",
    width: 110,
    align: "center",
    render: (value) => {
      if (value) {
        const parsedDate = value.split("/").reverse();

        return (
          <p className="font-medium">
            {format(new Date(parsedDate), "dd/MM/yyyy")}
          </p>
        );
      }
    },
  },
  {
    title: "Số lượng vé",
    dataIndex: "numberOfTickets",
    key: "numberOfTickets",
    width: 90,
    align: "center",
    render: (value) => <p className="font-medium">{value}</p>,
  },
  {
    title: "Dịch vụ bổ sung (nếu có)",
    dataIndex: "additionalServices",
    key: "additionalServices",
    align: "center",
    render: (value: string[]) => (
      <span>
        {value.map((service) => {
          let color = "";
          switch (service) {
            case "Hành lý":
              color = "blue";
              break;
            case "Thú cưng":
              color = "green";
              break;
            case "Ăn uống":
              color = "orange";
              break;
            case "Trẻ em đi 1 mình":
              color = "red";
              break;
            default:
              color = "gray";
              break;
          }

          return (
            <Tag color={color} key={service} className="font-medium">
              {service.toUpperCase()}
            </Tag>
          );
        })}
      </span>
    ),
  },
  {
    title: "Tổng tiền",
    dataIndex: "totalPrice",
    key: "totalPrice",
    fixed: "right",
    width: 135,
    align: "center",
    render: (value) => (
      <p className="font-medium text-green-600">{value.toLocaleString()} VND</p>
    ),
  },
];

const data = [
  {
    key: "1",
    transactionId: "DVK0001689",
    transactionDate: "12/09/2024",
    flightType: "Một chiều",
    originAirport: "Sân bay Nội Bài",
    departureDate: "19/09/2024",
    destinationAirport: "Sân bay Tân Sơn Nhất",
    returnDate: "",
    numberOfTickets: 1,
    additionalServices: ["Hành lý", "Thú cưng"],
    totalPrice: 2000000,
  },
  {
    key: "2",
    transactionId: "DVK0001690",
    transactionDate: "01/09/2024",
    flightType: "Khứ hồi",
    originAirport: "Sân bay Nội Bài",
    departureDate: "18/09/2024",
    destinationAirport: "Sân bay Tân Sơn Nhất",
    returnDate: "02/02/2021",
    numberOfTickets: 2,
    additionalServices: ["Ăn uống"],
    totalPrice: 4000000,
  },
  {
    key: "3",
    transactionId: "DVK0001691",
    transactionDate: "01/09/2024",
    flightType: "Một chiều",
    originAirport: "Sân bay Nội Bài",
    departureDate: "19/09/2024",
    destinationAirport: "Sân bay Tân Sơn Nhất",
    returnDate: "",
    numberOfTickets: 1,
    additionalServices: ["Thú cưng"],
    totalPrice: 2000000,
  },
  {
    key: "4",
    transactionId: "DVK0001692",
    transactionDate: "31/08/2024",
    flightType: "Một chiều",
    originAirport: "Sân bay Nội Bài",
    departureDate: "20/09/2024",
    destinationAirport: "Sân bay Tân Sơn Nhất",
    returnDate: "",
    numberOfTickets: 1,
    additionalServices: ["Trẻ em đi 1 mình"],
    totalPrice: 2000000,
  },
  {
    key: "5",
    transactionId: "DVK0001693",
    transactionDate: "31/08/2024",
    flightType: "Khứ hồi",
    originAirport: "Sân bay Nội Bài",
    departureDate: "20/09/2024",
    destinationAirport: "Sân bay Tân Sơn Nhất",
    returnDate: "02/02/2021",
    numberOfTickets: 2,
    additionalServices: ["Ăn uống"],
    totalPrice: 4000000,
  },
  {
    key: "6",
    transactionId: "DVK0001694",
    transactionDate: "31/08/2024",
    flightType: "Một chiều",
    originAirport: "Sân bay Nội Bài",
    departureDate: "11/09/2024",
    destinationAirport: "Sân bay Tân Sơn Nhất",
    returnDate: "",
    numberOfTickets: 1,
    additionalServices: [""],
    totalPrice: 2000000,
  },
  {
    key: "7",
    transactionId: "DVK0001695",
    transactionDate: "14/09/2024",
    flightType: "Một chiều",
    originAirport: "Sân bay Nội Bài",
    departureDate: "20/09/2024",
    destinationAirport: "Sân bay Tân Sơn Nhất",
    returnDate: "",
    numberOfTickets: 1,
    additionalServices: [""],
    totalPrice: 2000000,
  },
  {
    key: "8",
    transactionId: "DVK0001696",
    transactionDate: "14/09/2024",
    flightType: "Khứ hồi",
    originAirport: "Sân bay Nội Bài",
    departureDate: "20/09/2024",
    destinationAirport: "Sân bay Tân Sơn Nhất",
    returnDate: "02/02/2021",
    numberOfTickets: 2,
    additionalServices: ["Ăn uống"],
    totalPrice: 4000000,
  },
  {
    key: "9",
    transactionId: "DVK0001697",
    transactionDate: "14/09/2024",
    flightType: "Một chiều",
    originAirport: "Sân bay Nội Bài",
    departureDate: "20/09/2024",
    destinationAirport: "Sân bay Tân Sơn Nhất",
    returnDate: "",
    numberOfTickets: 1,
    additionalServices: ["Thú cưng"],
    totalPrice: 2000000,
  },
  {
    key: "10",
    transactionId: "DVK0001698",
    transactionDate: "11/09/2024",
    flightType: "Một chiều",
    originAirport: "Sân bay Nội Bài",
    departureDate: "20/09/2024",
    destinationAirport: "Sân bay Tân Sơn Nhất",
    returnDate: "",
    numberOfTickets: 1,
    additionalServices: [""],
    totalPrice: 2000000,
  },
  {
    key: "11",
    transactionId: "DVK0001699",
    transactionDate: "11/09/2024",
    flightType: "Khứ hồi",
    originAirport: "Sân bay Nội Bài",
    departureDate: "20/09/2024",
    destinationAirport: "Sân bay Tân Sơn Nhất",
    returnDate: "02/02/2021",
    numberOfTickets: 2,
    additionalServices: ["Ăn uống"],
    totalPrice: 4000000,
  },
];

interface TransactionsTableProps {
  fromDate: string;
  toDate: string;
}

const TransactionsTable: React.FC<TransactionsTableProps> = ({
  fromDate,
  toDate,
}) => {
  const parseDate = (dateString: string) => {
    const [day, month, year] = dateString.split("/");
    return new Date(Number(year), Number(month) - 1, Number(day));
  };

  const from = parseDate(fromDate);
  const to = parseDate(toDate);

  const filteredData = data.filter((transaction) => {
    const transactionDate = parseDate(transaction.transactionDate);
    return transactionDate >= from && transactionDate <= to;
  });

  return (
    <>
      <Table
        bordered
        columns={columns}
        dataSource={filteredData}
        scroll={{ x: 1500, y: 300 }}
      />
    </>
  );
};

export default TransactionsTable;
