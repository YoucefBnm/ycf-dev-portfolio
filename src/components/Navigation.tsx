import { navLinks, socialProfiles } from "@/constants/data";
import {
  navItemVariants,
  navListVariants,
  navVariants,
} from "@/utils/motion.utils";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

type NavigationProps = {
  isOpen: boolean;
  closeNav: () => void;
};

const Navigation = ({ isOpen, closeNav }: NavigationProps) => {
  return (
    <motion.nav
      className="fixed z-40 inset-0 overflow-hidden w-screen bg-zinc-900 bg-opacity-95 h-screen  backdrop-blur-md pb-12 pt-20"
      variants={navVariants}
      animate={isOpen ? "visible" : "hidden"}
    >
      <div className="reltive flex gap-6 flex-wrap justify-between items-center h-full px-default overflow-hidden">
        <motion.ul
          variants={navListVariants}
          animate={isOpen ? "visible" : "hidden"}
          className="flex flex-col gap-4"
        >
          {navLinks.map((navLink) => (
            <motion.li key={navLink.id} variants={navItemVariants}>
              <Link onClick={closeNav} to={navLink.route}>
                <h2>{navLink.title}</h2>
              </Link>
            </motion.li>
          ))}
        </motion.ul>

        <motion.ul
          variants={navListVariants}
          animate={isOpen ? "visible" : "hidden"}
          className="self-end flex gap-4 text-primary-1 flex-wrap"
        >
          {socialProfiles.map((profile) => (
            <motion.li key={profile.id} variants={navItemVariants}>
              <a href={profile.link} target="_blank" rel="noopener noreferrer">
                {profile.title}
              </a>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </motion.nav>
  );
};

export default Navigation;
