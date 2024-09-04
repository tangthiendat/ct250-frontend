import SearchFlightsForm from "../features/booking/SearchFlightsForm";

const Home: React.FC = () => {
  return (
    // px-6 py-12 m-2
    <div className="flex min-h-full flex-1 flex-col justify-center bg-red-800 lg:px-8">
      <SearchFlightsForm />
    </div>
  );
};

export default Home;
