import SearchFlightsForm from "../../searching/flights/SearchFlightsForm";

interface ModifySearchFlightsFormProps {
  show: boolean;
}

const ModifySearchFlightsForm: React.FC<ModifySearchFlightsFormProps> = ({
  show,
}) => {
  return (
    <div
      className={`absolute left-1/2 w-full -translate-x-1/2 transform rounded-b-lg bg-white pt-5 transition-all duration-500 md:w-[90%] lg:max-w-screen-lg ${
        show ? "z-10 -translate-y-0" : "z-0 -translate-y-20 opacity-0"
      }`}
    >
      <SearchFlightsForm />
    </div>
  );
};

export default ModifySearchFlightsForm;
