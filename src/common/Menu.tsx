import { motion } from "framer-motion";
import { Dispatch, SetStateAction } from "react";
import { IoClose, IoMenu } from "react-icons/io5";
import NavItems from "./NavItems";

type MenuProps = {
  navitems: { id: number; title: string; href: string }[];
  isMenuOpen: boolean;
  setIsMenuOpen: Dispatch<SetStateAction<boolean>>;
  isLoggedin: boolean;
  setIsLoggedin: Dispatch<SetStateAction<boolean>>;
};

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

const Menu: React.FC<MenuProps> = ({
  navitems,
  isMenuOpen,
  setIsMenuOpen,
  isLoggedin,
  setIsLoggedin,
}) => {
  return (
    <motion.div animate={isMenuOpen ? "open" : "closed"} className="relative">
      {!isMenuOpen ? (
        <IoMenu
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-3xl text-gray-700"
        />
      ) : (
        <IoClose
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-3xl text-gray-700"
        />
      )}

      <motion.ul
        initial={wrapperVariants.closed}
        variants={wrapperVariants}
        style={{ originY: "top", translateX: "-50%" }}
        className="absolute right-[-280%] top-[185%] z-10 flex flex-col rounded-xl bg-white shadow-2xl"
      >
        {navitems.map((item) => (
          <motion.li
            variants={itemVariants}
            key={item.id}
            onClick={() => setIsMenuOpen(false)}
            className="flex w-full cursor-pointer items-center gap-2 whitespace-nowrap rounded-md p-2 text-base text-slate-700 transition-colors hover:bg-blue-100 hover:text-blue-500"
          >
            <NavItems href={item.href} el="a" className="">
              {/*--------------Don't remove className, This's for override------------*/}
              {/*--------------Don't remove className, This's for override------------*/}
              {/*--------------Don't remove className, This's for override------------*/}
              {item.title}
            </NavItems>
          </motion.li>
        ))}
        <motion.li
          variants={itemVariants}
          onClick={() => setIsMenuOpen(false)}
          className="flex w-full cursor-pointer items-center gap-2 whitespace-nowrap rounded-md p-2 text-base text-slate-700 transition-colors"
        >
          <NavItems
            el="button"
            onClick={() => setIsLoggedin(!isLoggedin)}
            className="text mx-auto w-[80%] rounded-lg bg-black py-1 text-white hover:bg-blue-500 hover:text-white"
          >
            {isLoggedin ? "Đăng xuất" : "Đăng nhập"}
          </NavItems>
        </motion.li>
      </motion.ul>
    </motion.div>
  );
};

export default Menu;
