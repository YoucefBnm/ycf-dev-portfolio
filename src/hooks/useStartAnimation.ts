import { useAnimation } from "framer-motion";

export function useStartAnimation() {
  const controls = useAnimation();

  const startAnimation = () => controls.start("visible");

  return {
    controls,
    startAnimation,
  };
}
