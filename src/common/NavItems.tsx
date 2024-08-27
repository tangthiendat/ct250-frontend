import { ComponentPropsWithoutRef } from "react";

interface ButtonProps extends ComponentPropsWithoutRef<"button"> {
  el?: "button";
}

interface AnchorProps extends ComponentPropsWithoutRef<"a"> {
  el?: "a";
}

function isAnchorProps(props: ButtonProps | AnchorProps): props is AnchorProps {
  return "href" in props;
}

const NavItems: React.FC<ButtonProps | AnchorProps> = (props) => {
  if (isAnchorProps(props)) {
    return (
      <a
        className="text rounded-md p-1 text-center text-gray-700 hover:bg-gray-200 hover:text-blue-500 focus:text-blue-500"
        {...props}
      >
        {props.children}
      </a>
    );
  }

  return (
    <button
      className="text rounded-lg bg-black p-1 text-white hover:bg-blue-500 hover:text-white"
      {...props}
    >
      {props.children}
    </button>
  );
};

export default NavItems;
