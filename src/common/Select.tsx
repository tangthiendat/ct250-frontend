import { ComponentPropsWithoutRef } from "react";
import { useFormContext } from "react-hook-form";

interface SelectProps extends ComponentPropsWithoutRef<"select"> {
  name: string;
  label?: string;
  options: { value: string; label: string }[];
}

const Select: React.FC<SelectProps> = ({
  name,
  label,
  options,
  ...otherProps
}) => {
  const { register } = useFormContext();

  return (
    <>
      {label && (
        <label htmlFor={name} className="text label">
          {label}
        </label>
      )}
      <select
        className="text w-full rounded border px-3 py-2 pr-6 leading-tight text-gray-700 shadow placeholder:text-sm hover:border-blue-300 focus:shadow-gray-500 focus:outline-none"
        {...register(name)}
        {...otherProps}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </>
  );
};

export default Select;
