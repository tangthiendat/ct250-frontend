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
        <label htmlFor={name} className="text label">
          {label}
        </label>
      )}
      <input
        id={name}
        className="text w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow placeholder:text-sm hover:border-blue-300 focus:shadow-gray-500 focus:outline-none"
        {...otherProps}
        {...register(name)}
      />
    </>
  );
};

export default Input;
