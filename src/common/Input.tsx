import { type ComponentPropsWithoutRef } from "react";
import { useFormContext } from "react-hook-form";

interface InputProps extends ComponentPropsWithoutRef<"input"> {
  name: string;
  label?: string;
  validation?: Record<string, unknown>;
}

const Input: React.FC<InputProps> = ({ label, name, ...otherProps }) => {
  const { register } = useFormContext();
  return (
    <>
      {label && (
        <label htmlFor={name} className="label">
          {label}
        </label>
      )}
      <input
        id={name}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight hover:border-blue-300 focus:outline-none focus:shadow-gray-500 placeholder:text-sm"
        {...otherProps}
        {...register(name)}
      />
    </>
  );
};

export default Input;
