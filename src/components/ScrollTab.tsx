import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";
import { setInputRange } from "@/utils/motion.utils";
import { motion, MotionValue } from "framer-motion";
import {
  PropsWithChildren,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

type ScrollTabProps = PropsWithChildren & {
  className?: string;
  arrayLength: number;
};

type ScrollTabContextValue = {
  scrollYProgress: MotionValue<number>;
  currentScroll: number;
  arrayLength: number;
};

const ScrollTabContext = createContext<ScrollTabContextValue | undefined>(
  undefined
);

function useScrollTabContext() {
  const context = useContext(ScrollTabContext);

  if (!context) {
    throw new Error("ScrollTabContext must be used within a ScrollTab");
  }

  return context;
}

const ScrollTabs = ({ className, arrayLength, children }: ScrollTabProps) => {
  const { scrollRef, scrollYProgress } = useScrollAnimation();
  const [currentScroll, setCurrentScroll] = useState<number>(0);

  useEffect(() => {
    scrollYProgress.on("change", (latest: number) => {
      setCurrentScroll(latest);
    });
  });

  return (
    <ScrollTabContext.Provider
      value={{ scrollYProgress, currentScroll, arrayLength }}
    >
      <div
        style={{ height: `${arrayLength + 1}00vh` }}
        ref={scrollRef}
        className="relative"
      >
        <div className={cn("sticky inset-0 w-full min-h-svh", className)}>
          {children}
        </div>
      </div>
    </ScrollTabContext.Provider>
  );
};

type ScrollTabWrapProps = PropsWithChildren & {
  className?: string;
};
const ScrollTabWrap = ({ className, children }: ScrollTabWrapProps) => {
  return <div className={cn(className, "overflow-hidden")}>{children}</div>;
};

type ScrollTabItemProps = PropsWithChildren & {
  className?: string;
  index: number;
};

const ScrollTabTrigger = ({
  className,
  index,
  children,
}: ScrollTabItemProps) => {
  const { currentScroll, arrayLength } = useScrollTabContext();

  const range = setInputRange(arrayLength, index);
  const isActive = currentScroll > range[0] && currentScroll < range[1];

  return (
    <motion.div
      className={cn(className, "overflow-hidden uppercase cursor-pointer")}
      animate={isActive ? { opacity: 0.8 } : { opacity: 0.2 }}
    >
      {children}
    </motion.div>
  );
};

const ScrollTabContent = ({
  className,
  index,
  children,
}: ScrollTabItemProps) => {
  const { currentScroll, arrayLength } = useScrollTabContext();

  const range = setInputRange(arrayLength, index);
  const isActive = currentScroll > range[0] && currentScroll < range[1];

  return (
    <div className={" flex-1 overflow-hidden py-0"}>
      <motion.div
        animate={isActive ? { y: "0%" } : { y: "100%" }}
        className={cn(className, "py-2")}
        transition={{
          type: "spring",
          damping: 20,
        }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export { ScrollTabs, ScrollTabWrap, ScrollTabTrigger, ScrollTabContent };
