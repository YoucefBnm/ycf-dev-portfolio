import { motion } from "framer-motion";
import { Link } from "react-router-dom";

type NavigationProps = {
  isOpen: boolean;
  closeNav: () => void;
};
export const navListVariants = {
  visible: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  hidden: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};
export const navItemVariants = {
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  hidden: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

export const navVariants = {
  visible: {
    clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
    display: "block",
    transition: {
      // type: "spring",
      // stiffness: 20,
      // restDelta: 2,
    },
  },
  hidden: {
    clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
    display: "none",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
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
          <motion.li variants={navItemVariants}>
            <Link onClick={closeNav} to="/">
              <h2>HOME</h2>
            </Link>
          </motion.li>
          <motion.li variants={navItemVariants}>
            <Link onClick={closeNav} to="/portfolio">
              <h2>WORK</h2>
            </Link>
          </motion.li>
          <motion.li variants={navItemVariants}>
            <Link onClick={closeNav} to="/questionnaire">
              <h2>QUOTE</h2>
            </Link>
          </motion.li>
          <motion.li variants={navItemVariants}>
            <Link onClick={closeNav} to="/booking">
              <h2>CONTACT</h2>
            </Link>
          </motion.li>
        </motion.ul>

        <motion.ul
          variants={navListVariants}
          animate={isOpen ? "visible" : "hidden"}
          className="self-end flex gap-4 text-primary-1 flex-wrap"
        >
          <motion.li variants={navItemVariants}>
            <a href="http://" target="_blank" rel="noopener noreferrer">
              LINKEDIN
            </a>
          </motion.li>
          <motion.li variants={navItemVariants}>
            <a href="http://" target="_blank" rel="noopener noreferrer">
              GITHUB
            </a>
          </motion.li>
          <motion.li variants={navItemVariants}>
            <a href="http://" target="_blank" rel="noopener noreferrer">
              X
            </a>
          </motion.li>
          <motion.li variants={navItemVariants}>
            <a href="http://" target="_blank" rel="noopener noreferrer">
              MAIL
            </a>
          </motion.li>
          <motion.li variants={navItemVariants}>
            <a href="http://" target="_blank" rel="noopener noreferrer">
              +213 777 915 747
            </a>
          </motion.li>
        </motion.ul>
      </div>
    </motion.nav>
  );
};

export default Navigation;
