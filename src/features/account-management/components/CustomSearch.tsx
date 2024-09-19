interface CustomSearchProps {
  type: string;
  from?: string;
  to?: string;
}

const formatDate = (date: Date, days: number) => {
  const currentDate = new Date();
  const pastDate = new Date(currentDate.setDate(currentDate.getDate() - days));
  return pastDate.toISOString();
};

const handleDateSearch = (type: string, from?: string, to?: string) => {
  if (type !== "custom") {
    const currentDate = new Date();

    if (type === "10days") {
      from = formatDate(currentDate, 10);
      to = currentDate.toISOString();
    } else {
      from = formatDate(currentDate, 20);
      to = currentDate.toISOString();
    }
  }
  return { from, to };
};

const CustomSearch: React.FC<CustomSearchProps> = ({ type, from, to }) => {
  const { from: fromDate, to: toDate } = handleDateSearch(type, from, to);

  return (
    <div>
      {type} - {fromDate} - {toDate}
    </div>
  );
};

export default CustomSearch;
