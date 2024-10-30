import SearchFlightsForm from "../searching/flights/SearchFlightsForm";

interface ModifySearchFlightsFormProps {
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
}

const ModifySearchFlightsForm: React.FC<ModifySearchFlightsFormProps> = ({
  show,
  setShow,
}) => {
  return (
    <div
      className={`absolute left-1/2 w-full -translate-x-1/2 transform rounded-b-lg bg-white transition-all duration-500 md:w-[90%] lg:max-w-screen-lg ${
        show ? "z-10 -translate-y-0" : "z-0 mt-5 -translate-y-20 opacity-0"
      }`}
    >
      <SearchFlightsForm setShow={setShow} />
    </div>
  );
};

export default ModifySearchFlightsForm;
