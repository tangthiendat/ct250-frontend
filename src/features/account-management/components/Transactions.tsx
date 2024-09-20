import TransactionsTable from "./TransactionsTable";

interface TransactionsProps {
  fromDate: string;
  toDate: string;
}

const Transactions: React.FC<TransactionsProps> = ({ fromDate, toDate }) => {
  return (
    <div>
      {/* {fromDate} - {toDate} */}
      <TransactionsTable fromDate={fromDate} toDate={toDate} />
    </div>
  );
};

export default Transactions;
