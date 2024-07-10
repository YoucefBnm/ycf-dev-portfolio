import Navigation from "@/components/Navigation";
import { useToggleNav } from "@/hooks/useToggleNav";
import Logo from "@assets/icons/logo.svg?react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

type NavToggleBtnProps = {
  isOpen: boolean;
  toggle: () => void;
};

const NavToggleBtn = ({ isOpen, toggle }: NavToggleBtnProps) => {
  return (
    <button
      className="size-14 bg-zinc-700 bg-opacity-40 transition-colors hover:bg-opacity-100 relative flex flex-wrap items-center justify-end pr-4 rounded-full"
      onClick={toggle}
    >
      <span className=" sr-only">open navigation</span>

      <motion.span
        className=" absolute block h-0.5  bg-neutral-300"
        layout
        animate={
          isOpen
            ? { marginTop: "0px", width: "41.66667%", rotate: 45 }
            : { marginTop: "-6px", width: "50%", rotate: 0 }
        }
        transition={{ ease: [0.4, 0, 0.2, 1] }}
      />
      <motion.span
        className="absolute block h-0.5  bg-neutral-300"
        layout
        animate={
          isOpen
            ? { marginTop: "0px", width: "41.66667%", rotate: -45 }
            : { marginTop: "6px", width: "33.33337%", rotate: 0 }
        }
        transition={{ ease: [0.4, 0, 0.2, 1] }}
      />
    </button>
  );
};

const Nav = () => {
  const { isOpen, isHidden, toggleNav, closeNav, showHeader } = useToggleNav();
  return (
    <>
      <motion.header
        className="sticky mix-blend-difference px-default flex items-end justify-between top-0 w-full h-16 left-0 z-50"
        animate={isHidden ? { y: "-90%" } : { y: "0%" }}
        whileHover={{ y: "0%" }}
        onFocusCapture={showHeader}
        transition={{ duration: 0.2 }}
      >
        <Link to="/" className="block ">
          <Logo />
        </Link>

        <NavToggleBtn isOpen={isOpen} toggle={toggleNav} />
      </motion.header>

      <Navigation closeNav={closeNav} isOpen={isOpen} />
    </>
  );
};

export default Nav;
