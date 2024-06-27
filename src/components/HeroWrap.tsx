import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { motion, MotionValue, useTransform } from "framer-motion";
import { PropsWithChildren, createContext, useContext } from "react";
import AnimatedText from "./AnimatedText";
import { useStartAnimation } from "@/hooks/useStartAnimation";
import { cn } from "@/lib/utils";
import { transformVariants } from "@/utils/motion.utils";
import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";

type Content = {
  title: string;
  description: string;
  route?: string;
  label?: string;
  imageUrl?: string;
  videoUrl?: string;
};

type HeroWrapProps = PropsWithChildren & {
  content: Content;
  className?: string;
};

type HeroWrapContextValue = {
  content: Content;
  scrollYProgress: MotionValue<number>;
};

const HeroWrapContext = createContext<HeroWrapContextValue | undefined>(
  undefined
);

function useHeroWrapContext() {
  const context = useContext(HeroWrapContext);

  if (!context) {
    throw new Error("useHeroWrapContext must be used within a HeroWrap");
  }

  return context;
}
const HeroWrap = ({ content, className, children }: HeroWrapProps) => {
  const { scrollRef, scrollYProgress } = useScrollAnimation();

  return (
    <HeroWrapContext.Provider value={{ content, scrollYProgress }}>
      <section ref={scrollRef} className={cn("relative", className)}>
        <div className="px-default">{children}</div>
      </section>
    </HeroWrapContext.Provider>
  );
};

type HeroWrapTextProps = {
  className?: string;
};
const HeroWrapText = ({ className }: HeroWrapTextProps) => {
  const { content } = useHeroWrapContext();
  const { controls, startAnimation } = useStartAnimation();

  const navigate = useNavigate();
  const navigateToPage = () =>
    content.route ? navigate(content.route) : navigate("/");

  return (
    <div
      className={cn(
        "relative mt-12 min-h-[60vh] place-content-center",
        className
      )}
    >
      <h1 className="uppercase overflow-hidden">
        <AnimatedText
          text={content.title}
          onAnimationComplete={startAnimation}
        />
      </h1>

      <motion.div
        initial="hidden"
        animate={controls}
        transition={{ staggerChildren: 0.2 }}
      >
        <motion.p
          className="text-neutral-300 mt-6 mb-4 max-w-prose"
          variants={transformVariants()}
          transition={{ ease: "linear" }}
        >
          {content.description}
        </motion.p>

        {content.route && (
          <motion.div
            variants={transformVariants()}
            transition={{ ease: "linear" }}
          >
            <Button
              size={"lg"}
              variant={"outline"}
              className="rounded-full text-primary-1 border-current hover:bg-primary-1 bg-transparent"
              onClick={navigateToPage}
              aria-label={content.label}
            >
              {content.label}
            </Button>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

const HeroWrapVideo = () => {
  const { content, scrollYProgress } = useHeroWrapContext();
  const scale = useTransform(scrollYProgress, [0, 0.8], [0.15, 1]);

  return (
    <div className="h-[300vh]">
      <div className=" sticky inset-0 w-full min-h-svh flex items-center">
        <motion.video
          style={{
            scale,
          }}
          playsInline
          loop
          muted
          autoPlay
          className="align-middle object-cover origin-top-right"
        >
          <source src={content.videoUrl} type="video/mp4" />
          <img
            className="size-full"
            width={2000}
            height={1300}
            loading="lazy"
            decoding="async"
            aria-hidden
            src={content.imageUrl}
          />
        </motion.video>
      </div>
    </div>
  );
};
export { HeroWrap, HeroWrapText, HeroWrapVideo };
