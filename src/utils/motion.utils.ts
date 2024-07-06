export type TransformVariant =
  | "top"
  | "left"
  | "bottom"
  | "right"
  | "z"
  | "zy"
  | "zx";

export const transformVariants = (direction?: TransformVariant) => ({
  hidden: {
    x: direction === "left" ? "-120%" : direction === "right" ? "120%" : 0,
    y: direction === "top" ? "-120%" : direction === "bottom" ? "120%" : 0,
    scale: direction === "z" ? 0 : 1,
    scaleY: direction === "zy" ? 0 : 1,
    scaleX: direction === "zx" ? 0 : 1,
    opacity: !direction ? 0 : 1,
  },
  visible: {
    x: 0,
    y: 0,
    scale: 1,
    scaleX: 1,
    scaleY: 1,
    opacity: 1,
  },
});

export const clipPathHidden = "polygon(50% 50%, 50% 50%, 50% 50%, 50% 50%)";
export const clipPathVisible = "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)";

export const clipPathVariants = {
  hidden: { clipPath: clipPathHidden },
  visible: { clipPath: clipPathVisible },
};

export function setInputRange(arrayLength: number, index: number) {
  const start = index / arrayLength;
  const end = (index + 1) / arrayLength;
  const range = [start, end];

  return range;
}

export const customCursorSpringConfig = {
  damping: 35,
  stiffness: 700,
  mass: 1,
};
export const customCursorVariants = {
  default: {
    // filter: "blur(0px)",
    scale: 1,
  },
  target: {
    scale: 4,
    // filter: "blur(10px)",
  },
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
