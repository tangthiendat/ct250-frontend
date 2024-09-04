import { ComponentPropsWithoutRef } from "react";
import { useFormContext } from "react-hook-form";
import { IoWarning } from "react-icons/io5";

interface RadioProps extends ComponentPropsWithoutRef<"input"> {
  name: string;
  label?: string;
  validation?: Record<string, unknown>;
  options: { value: string; label: string }[];
}

const Radio: React.FC<RadioProps> = ({
  name,
  label,
  options,
  validation,
  ...otherProps
}) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <>
      {label && (
        <label htmlFor={name} className="text label">
          {label}
        </label>
      )}

      <div className="flex justify-between gap-1 py-2 lg:justify-between lg:px-4">
        {options.map((option) => (
          <label key={option.value} className="inline-flex items-center">
            <input
              type="radio"
              value={option.value}
              className="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
              {...otherProps}
              {...register(name, validation)}
            />
            <span className="text ml-1">{option.label}</span>
          </label>
        ))}
      </div>

      {errors[name] && (
        <p className="pt-1 text-sm text-red-500">
          <div className="inline-flex items-center">
            <IoWarning className="text-red-500" />
            {String(errors[name].message)}
          </div>
        </p>
      )}
    </>
  );
};

export default Radio;
