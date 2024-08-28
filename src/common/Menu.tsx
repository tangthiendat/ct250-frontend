import { motion } from "framer-motion";
import { Dispatch, SetStateAction } from "react";
import { IoClose, IoMenu } from "react-icons/io5";
import MenuDrop from "./MenuDrop";

type MenuProps = {
  navitems: { id: number; title: string; href: string }[];
  isMenuOpen: boolean;
  setIsMenuOpen: Dispatch<SetStateAction<boolean>>;
  isLoggedin: boolean;
  setIsLoggedin: Dispatch<SetStateAction<boolean>>;
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

      <MenuDrop
        el="navbar"
        items={navitems}
        isNavBarMenuOpen={isMenuOpen}
        setIsNavBarMenuOpen={setIsMenuOpen}
        isLoggedin={isLoggedin}
        setIsLoggedin={setIsLoggedin}
      />
    </motion.div>
  );
};

export default Menu;
