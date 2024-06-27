import { useScrollToTop } from "@/hooks/useScrollTop";
import { motion } from "framer-motion";
import { ComponentType } from "react";

const RouteTransition = (Component: ComponentType) =>
  function Hoc() {
    useScrollToTop();
    return (
      <>
        <Component />

        <motion.div
          className="fixed w-screen h-screen inset-0 bg-zinc-800 origin-bottom z-50"
          transition={{
            duration: 3,
            ease: [0.22, 1, 0.36, 1],
          }}
          initial={{
            clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
          }}
          animate={{
            clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
          }}
          exit={{ clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)" }}
        />
        <motion.div
          className="fixed w-screen h-screen inset-0 bg-primary-1 origin-top z-50"
          initial={{ clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)" }}
          animate={{
            clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
          }}
          transition={{
            duration: 3,
            ease: [0.22, 1, 0.36, 1],
          }}
        />
      </>
    );
  };

export default RouteTransition;
