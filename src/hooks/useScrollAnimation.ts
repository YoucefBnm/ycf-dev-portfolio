import { useScroll } from "framer-motion";
import { useRef } from "react";

export function useScrollAnimation() {
  const scrollRef = useRef(null);

  const { scrollYProgress, scrollY } = useScroll({
    target: scrollRef,
    offset: ["0.2 0.5", "0.9 1"],
    // offset: ["start start"],
  });

  return {
    scrollRef,
    scrollYProgress,
    scrollY,
  };
}
