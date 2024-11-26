import Baggage from "./components/baggage/Baggage";
import Meal from "./components/meal/Meal";
import Seat from "./components/Seat";

const Services: React.FC = () => {
  return (
    <>
      <div className="mt-6">
        <p className="text-heading-2 text-center text-blue-900">
          Các dịch vụ bổ sung
        </p>

        <div className="space-y-5">
          <Baggage />
          <Meal />
          <Seat />
        </div>
      </div>
    </>
  );
};

export default Services;
