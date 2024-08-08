import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";
import { motion, MotionValue, useTransform } from "framer-motion";
import { createContext, PropsWithChildren, useContext } from "react";
import ContainerVelocity from "./ContainerVelocity";

type HeroContent = {
  heading: string;
  title?: string;
  description?: string;
  videoUrl?: string;
};
type HeroContainerContextValue = {
  scrollYProgress: MotionValue<number>;
  content: HeroContent;
};
type HeroContainerProps = PropsWithChildren & {
  className?: string;
  content: HeroContent;
};

const HeroContainerContext = createContext<
  HeroContainerContextValue | undefined
>(undefined);
function useHeroContainerContext() {
  const context = useContext(HeroContainerContext);

  if (!context) {
    throw new Error("HeroContainerContext must be used within a HeroContainer");
  }

  return context;
}

const HeroContainer = ({
  className,
  content,
  children,
}: HeroContainerProps) => {
  const { scrollRef, scrollYProgress } = useScrollAnimation();
  return (
    <HeroContainerContext.Provider value={{ scrollYProgress, content }}>
      <section
        ref={scrollRef}
        className={cn("relative has-[video]:h-[300vh]", className)}
      >
        {children}
      </section>
    </HeroContainerContext.Provider>
  );
};

type HeroContainerWrapProps = PropsWithChildren & {
  className?: string;
};
const HeroWrap = ({ className, children }: HeroContainerWrapProps) => {
  return <div className={cn(className)}>{children}</div>;
};
type HeroTitleProps = {
  className?: string;
};
const HeroHeading = ({ className }: HeroTitleProps) => {
  const { content } = useHeroContainerContext();
  return (
    <ContainerVelocity
      className={cn("w-full my-8 overflow-hidden", className)}
      baseVelocity={3}
    >
      <h1>{content.heading.toUpperCase()}</h1>
      <p className="text-primary-1">{content.title}</p>
    </ContainerVelocity>
  );
};

type HeroDescriptionProps = {
  className?: string;
};
const HeroDescription = ({ className }: HeroDescriptionProps) => {
  const { content } = useHeroContainerContext();
  return (
    <div
      className={cn(
        "basis-1/2 md:basis-1/4 text-xs md:text-sm text-neutral-300",
        className
      )}
    >
      <p>{content.description}</p>
    </div>
  );
};

type HeroCtaProps = PropsWithChildren & {
  className?: string;
};
const HeroCta = ({ className, children }: HeroCtaProps) => {
  return <div className={cn(className)}>{children}</div>;
};

type HeroVideoProps = PropsWithChildren & {
  className?: string;
};
const HeroVideo = ({ className }: HeroVideoProps) => {
  const { scrollYProgress, content } = useHeroContainerContext();
  const scale = useTransform(scrollYProgress, [0, 0.8], [0.4, 1]);

  return (
    <div
      className={cn(
        "sticky top-24 md:top-0 left-0 w-full flex-center",
        className
      )}
    >
      <motion.video
        className="align-middle origin-top object-cover size-full"
        playsInline
        loop
        muted
        autoPlay
        style={{ scale }}
        src={content.videoUrl}
      />
    </div>
  );
};
export {
  HeroContainer,
  HeroWrap,
  HeroHeading,
  HeroDescription,
  HeroCta,
  HeroVideo,
};
