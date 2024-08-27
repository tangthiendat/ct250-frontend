import { motion } from "framer-motion";
import NavItems from "./NavItems";
import { ComponentPropsWithRef } from "react";
import { Language } from "./LanguageMenu";

interface NavbarMenuProps extends ComponentPropsWithRef<"nav"> {
  el?: "navbar";
  items: { id: string; title: string; href: string }[]; // Change the type of 'id' property to string
  isNavBarMenuOpen: boolean;
  setIsNavBarMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
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
      <motion.nav
        animate={props.isNavBarMenuOpen ? "open" : "closed"}
        className="absolute left-0 right-0 top-0 bg-white shadow-md"
      >
        <motion.ul
          initial={wrapperVariants.closed}
          variants={wrapperVariants}
          className="flex flex-col items-center space-y-2 p-4"
        >
          {props.items.map((item) => (
            <motion.li key={item.id} variants={itemVariants}>
              <NavItems href={item.href} el="a">
                {item.title}
              </NavItems>
            </motion.li>
          ))}
        </motion.ul>
      </motion.nav>
    );
  }

  return (
    // <motion.nav
    //   animate={props.isLanguageMenuOpen ? "open" : "closed"}
    //   className="right-100 top-100 absolute bg-white shadow-md"
    // >
    //   <motion.ul
    //     variants={wrapperVariants}
    //     className="flex flex-col items-center space-y-2 p-4"
    //   >
    //     <motion.li variants={itemVariants}>
    //       <Language language={props.language} />
    //     </motion.li>
    //   </motion.ul>
    // </motion.nav>
    <motion.div
      animate={props.isLanguageMenuOpen ? "open" : "closed"}
      // className=""
    >
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
