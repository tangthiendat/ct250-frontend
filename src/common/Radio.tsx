import { ComponentPropsWithoutRef } from "react";
import { useFormContext } from "react-hook-form";

interface RadioProps extends ComponentPropsWithoutRef<"input"> {
  name: string;
  label?: string;
  options: { value: string; label: string }[];
}

const Radio: React.FC<RadioProps> = ({
  name,
  label,
  options,
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

      <div className="mt-3 flex justify-between gap-1 lg:justify-between lg:px-4">
        {options.map((option) => (
          <label key={option.value} className="inline-flex items-center">
            <input
              type="radio"
              value={option.value}
              className="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
              {...otherProps}
              {...register(name, { required: "Giới tính không được để trống" })}
            />
            <span className="text ml-1">{option.label}</span>
          </label>
        ))}
      </div>

      {errors[name] && (
        <p className="pt-1 text-sm text-red-500">
          {String(errors[name].message)}
        </p>
      )}
    </>
  );
};

export default Radio;
