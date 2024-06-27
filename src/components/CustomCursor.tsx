import { useFollowMouse } from "@/hooks/useFollowMouse";
import { customCursorVariants } from "@/utils/motion.utils";
import { motion } from "framer-motion";
import {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";

type CustomCursorContextValue = {
  cursorVariant: "default" | "target";
  cursorText: string;
  setCursorVariant: Dispatch<SetStateAction<"default" | "target">>;
  setCursorText: Dispatch<SetStateAction<string>>;
};

export const CustomCursorContext = createContext<
  CustomCursorContextValue | undefined
>(undefined);

export function useCustomCursorContext() {
  const context = useContext(CustomCursorContext);

  return context;
}

const CustomCursor = () => {
  const [cursorVariant, setCursorVariant] =
    useState<CustomCursorContextValue["cursorVariant"]>("default");
  const [cursorText, setCursorText] = useState<string>("");

  const { cursorXSpring, cursorYSpring } = useFollowMouse();

  return (
    <CustomCursorContext.Provider
      value={{ cursorVariant, cursorText, setCursorVariant, setCursorText }}
    >
      <motion.div
        className="fixed z-50 pointer-events-none top-0 left-0 origin-center rounded-full size-5 bg-primary-1 mix-blend-difference"
        variants={customCursorVariants}
        animate={cursorVariant}
        style={{
          translateX: cursorXSpring,
          translateY: cursorYSpring,
        }}
      >
        {cursorText}
      </motion.div>
    </CustomCursorContext.Provider>
  );
};

export default CustomCursor;
