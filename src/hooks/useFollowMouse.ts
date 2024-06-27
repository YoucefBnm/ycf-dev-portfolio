import { customCursorSpringConfig } from "@/utils/motion.utils";
import { useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

export function useFollowMouse() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const cursorXSpring = useSpring(cursorX, customCursorSpringConfig);
  const cursorYSpring = useSpring(cursorY, customCursorSpringConfig);

  useEffect(() => {
    const followMouse = (e: MouseEvent) => {
      cursorX.set(e.clientX - 10);
      cursorY.set(e.clientY - 10);
    };
    window.addEventListener("mousemove", followMouse);

    return () => {
      window.removeEventListener("mousemove", followMouse);
    };
  }, []);

  return {
    cursorXSpring,
    cursorYSpring,
  };
}
