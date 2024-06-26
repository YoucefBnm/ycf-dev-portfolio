import { useRevealAnimation } from "@/hooks/useRevealAnimation";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";
import { transformVariants } from "@/utils/motion.utils";
import { motion, MotionValue, useTransform } from "framer-motion";
import { PropsWithChildren, createContext, useContext } from "react";

type HeroContainerContentValue = {
  scrollYProgress: MotionValue<number>;
};
const HeroContainerContext = createContext<
  HeroContainerContentValue | undefined
>(undefined);
function useHeroContainerContext() {
  const context = useContext(HeroContainerContext);

  if (!context) {
    throw new Error("HeroContainerContext must be used within a HeroContainer");
  }

  return context;
}
type HeroContainerProps = PropsWithChildren & {
  className?: string;
};
const HeroContainer = ({ className, children }: HeroContainerProps) => {
  const { scrollRef, scrollYProgress } = useScrollAnimation();
  return (
    <HeroContainerContext.Provider value={{ scrollYProgress }}>
      <section ref={scrollRef} className={cn("relative", className)}>
        {children}
      </section>
    </HeroContainerContext.Provider>
  );
};
type HeroContentProps = PropsWithChildren & {
  className?: string;
};

const HeroContent = ({ className, children }: HeroContentProps) => {
  const { scrollYProgress } = useHeroContainerContext();
  const height = useTransform(scrollYProgress, [0, 0.1], ["100vh", "0vh"]);

  const { revealRef, isInView } = useRevealAnimation();
  return (
    <motion.div
      layout
      ref={revealRef}
      style={{ height }}
      variants={transformVariants()}
      initial="hidden"
      transition={{ delay: 1.1 }}
      animate={isInView ? "visible" : "hidden"}
      className={cn(className, "absolute top-0 left-0 pb-8")}
    >
      {children}
    </motion.div>
  );
};
type HeroVideoProps = PropsWithChildren & {
  className?: string;
  videoUrl: string;
};
const HeroVideo = ({ className, videoUrl }: HeroVideoProps) => {
  const { scrollYProgress } = useHeroContainerContext();
  const scale = useTransform(scrollYProgress, [0, 0.8], [0.4, 1]);

  return (
    <div className={cn("sticky top-0 left-0 w-full flex-center", className)}>
      <motion.video
        className="align-middle object-cover size-full"
        playsInline
        loop
        muted
        autoPlay
        style={{ scale }}
        src={videoUrl}
      />
    </div>
  );
};

export { HeroContainer, HeroVideo, HeroContent };
