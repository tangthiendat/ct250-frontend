import { ComponentPropsWithoutRef } from "react";
import { useFormContext } from "react-hook-form";

interface RadioProps extends ComponentPropsWithoutRef<"input"> {
  name: string;
  options: { value: string; label: string }[];
}

const Radio: React.FC<RadioProps> = ({ name, options, ...otherProps }) => {
  const { register } = useFormContext();
  return options.map((option) => (
    <label key={option.value} className="flex-auto inline-flex items-center">
      <input
        type="radio"
        value={option.value}
        className="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
        {...otherProps}
        {...register(name)}
      />
      <span className="ml-2 text-sm">{option.label}</span>
    </label>
  ));
};

export default Radio;
