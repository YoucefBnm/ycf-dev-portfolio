import { useScroll } from "framer-motion";
import { useRef } from "react";

export function useScrollAnimation() {
  const scrollRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["0.2 0.4", "0.9 1"],
    // offset: ["start start"],
  });

  return {
    scrollRef,
    scrollYProgress,
  };
}
