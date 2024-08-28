import { motion } from "framer-motion";
import NavItems from "./NavItems";
import { ComponentPropsWithRef } from "react";
import { Language } from "./LanguageMenu";

interface NavbarMenuProps extends ComponentPropsWithRef<"nav"> {
  el?: "navbar";
  items: { id: number; title: string; href: string }[];
  isNavBarMenuOpen: boolean;
  setIsNavBarMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isLoggedin: boolean;
  setIsLoggedin: React.Dispatch<React.SetStateAction<boolean>>;
}

interface LanguageMenuProps extends ComponentPropsWithRef<"nav"> {
  el?: "language";
  isLanguageMenuOpen: boolean;
  setIsLanguageMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  currentLanguage: string;
  setCurrentLanguage: React.Dispatch<React.SetStateAction<string>>;
}

function isMenuNavbarProps(
  props: NavbarMenuProps | LanguageMenuProps,
): props is NavbarMenuProps {
  return "items" in props;
}

const wrapperVariants = {
  open: {
    scaleY: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
  closed: {
    scaleY: 0,
    transition: {
      when: "afterChildren",
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: {
      when: "beforeChildren",
    },
  },
  closed: {
    opacity: 0,
    y: -15,
    transition: {
      when: "afterChildren",
    },
  },
};

const MenuDrop: React.FC<NavbarMenuProps | LanguageMenuProps> = (props) => {
  if (isMenuNavbarProps(props)) {
    return (
      <motion.div animate={props.isNavBarMenuOpen ? "open" : "closed"}>
        <motion.ul
          initial={wrapperVariants.closed}
          variants={wrapperVariants}
          style={{ originY: "top", translateX: "-50%" }}
          className="absolute right-[-280%] top-[185%] z-10 flex flex-col rounded-xl bg-white shadow-2xl"
        >
          {props.items.map((item) => (
            <motion.li
              variants={itemVariants}
              key={item.id}
              onClick={() => props.setIsNavBarMenuOpen(false)}
              className="flex w-full cursor-pointer items-center gap-2 whitespace-nowrap rounded-md p-2 text-base text-slate-700 transition-colors hover:bg-blue-100 hover:text-blue-500"
            >
              <NavItems href={item.href} el="a" className="">
                {item.title}
              </NavItems>
            </motion.li>
          ))}
          <motion.li
            variants={itemVariants}
            onClick={() => props.setIsNavBarMenuOpen(false)}
            className="flex w-full cursor-pointer items-center gap-2 whitespace-nowrap rounded-md p-2 text-base text-slate-700 transition-colors hover:bg-blue-100 hover:text-blue-500"
          >
            <NavItems
              el="button"
              onClick={() => props.setIsLoggedin(!props.isLoggedin)}
              className="text mx-auto w-[80%] rounded-lg bg-black py-1 text-white hover:bg-blue-500 hover:text-white"
            >
              {props.isLoggedin ? "Đăng xuất" : "Đăng nhập"}
            </NavItems>
          </motion.li>
        </motion.ul>
      </motion.div>
    );
  }

  return (
    <motion.div animate={props.isLanguageMenuOpen ? "open" : "closed"}>
      <motion.ul
        initial={wrapperVariants.closed}
        variants={wrapperVariants}
        style={{ originY: "top", translateX: "-50%" }}
        className="absolute right-[-100%] top-[150%] flex flex-col rounded-xl bg-white drop-shadow"
      >
        <motion.li
          variants={itemVariants}
          onClick={() => props.setIsLanguageMenuOpen(!props.isLanguageMenuOpen)}
          className="flex w-40 flex-col gap-2 rounded-md p-2 text-base text-slate-700"
        >
          <Language
            language="Viet Nam"
            setCurrentLanguage={(value) => props.setCurrentLanguage(value)}
          />
          <Language
            language="English"
            setCurrentLanguage={(value) => props.setCurrentLanguage(value)}
          />
        </motion.li>
      </motion.ul>
    </motion.div>
  );
};

export default MenuDrop;
