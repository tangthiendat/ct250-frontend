import { ComponentPropsWithoutRef, PropsWithChildren } from "react";

interface NavMenuItemsProps extends ComponentPropsWithoutRef<"a">, PropsWithChildren {}

const NavLink: React.FC<NavMenuItemsProps> = ({ children, ...props }) => {
  return (
    <a {...props} className="text-xl text-gray-700 hover:text-blue-500">
      {children}
    </a>
  );
};

export default NavLink;
