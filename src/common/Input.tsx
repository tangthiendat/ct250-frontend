import { useState } from "react";
import { type ComponentPropsWithoutRef } from "react";
import { useFormContext } from "react-hook-form";
import { IoEye, IoEyeOff, IoWarning } from "react-icons/io5";

interface InputProps extends ComponentPropsWithoutRef<"input"> {
  name: string;
  label?: string;
  validation?: Record<string, unknown>;
}

const Input: React.FC<InputProps> = ({
  label,
  name,
  validation,
  ...otherProps
}) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      {label && (
        <label htmlFor={name} className="text label">
          {label}
        </label>
      )}

      <div className="relative flex items-center">
        <input
          id={name}
          type={showPassword ? "text" : "password"}
          className="text w-full appearance-none rounded border px-3 py-2 pr-6 leading-tight text-gray-700 shadow placeholder:text-sm hover:border-blue-300 focus:shadow-gray-500 focus:outline-none"
          {...otherProps}
          {...register(name, validation)}
        />

        {errors[name] && (
          <IoWarning className="absolute left-[-18px] text-red-500" />
        )}

        {(name === "password" || name === "confirmPassword") && (
          <div
            className="absolute right-2 cursor-pointer text-gray-500"
            onClick={togglePasswordVisibility}
          >
            {showPassword ? <IoEyeOff /> : <IoEye />}
          </div>
        )}
      </div>

      {errors[name] && (
        <p className="pt-1 text-sm text-red-500">
          {String(errors[name].message)}
        </p>
      )}
    </>
  );
};

export default Input;
