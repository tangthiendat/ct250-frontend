import { FormProvider, useForm } from "react-hook-form";
import { ISearchFlights } from "../../interfaces";
import Radio from "../../common/Radio";
import Select from "../../common/Select";
import Input from "../../common/Input";

const currencyOptions = [
  { value: "VND", label: "VND" },
  { value: "USD", label: "USD" },
];

const flightTypeOptions = [
  { value: "one-way", label: "Một chiều" },
  { value: "round-trip", label: "Khứ hồi" },
];

function onSubmit(data: ISearchFlights): void {
  console.log(data);
}

const SearchFlightsForm: React.FC = () => {
  const methods = useForm<ISearchFlights>({
    mode: "onChange",
  });

  return <div>He he</div>;
};

export default SearchFlightsForm;
