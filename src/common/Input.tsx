import { ComponentPropsWithoutRef } from "react";

const Input: React.FC<ComponentPropsWithoutRef<"input">> = (props) => {
  return (
    <input
      {...props}
      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight hover:border-blue-300 focus:outline-none focus:shadow-gray-500"
    />
  );
};

export default Input;
