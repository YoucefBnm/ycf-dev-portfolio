import { showcaseContent } from "@/constants/data";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import {
  motion,
  useMotionTemplate,
  useScroll,
  useTransform,
} from "framer-motion";
import { useRef } from "react";

const SECTION_HEIGHT = 1500;
const Showcase = () => {
  return (
    <section
      className="relative w-full"
      style={{ height: `calc(${SECTION_HEIGHT}px + 100vh)` }}
    >
      <MainImage />
      <ParallaxImages />
    </section>
  );
};

const MainImage = () => {
  const { scrollY } = useScrollAnimation();

  const backgroundSize = useTransform(
    scrollY,
    [0, SECTION_HEIGHT],
    ["170%", "100%"]
  );
  const clip1 = useTransform(scrollY, [0, SECTION_HEIGHT], [25, 0]);
  const clip2 = useTransform(scrollY, [0, SECTION_HEIGHT], [75, 100]);

  const clipPath = useMotionTemplate`polygon(${clip1}% ${clip1}%, ${clip2}% ${clip1}%, ${clip2}% ${clip2}%, ${clip1}% ${clip2}%)`;

  return (
    <motion.div
      className="sticky top-0 h-screen w-3/4 mx-auto"
      style={{
        backgroundImage: `url(${showcaseContent[3].imageUrl})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize,
        clipPath,
      }}
    />
  );
};

const ParallaxImages = () => {
  return (
    <div className="px-default flex flex-wrap justify-between gap-4 w-full h-screen">
      <ParallaxImage
        className="w-2/5 h-auto object-contain"
        imageUrl={showcaseContent[0].imageUrl}
        start={-200}
        end={-250}
      />
      <ParallaxImage
        className="w-2/5 h-auto object-contain"
        imageUrl={showcaseContent[1].imageUrl}
        start={-200}
        end={-250}
      />
      <ParallaxImage
        className="w-2/5 h-auto object-contain"
        imageUrl={showcaseContent[2].imageUrl}
        start={-150}
        end={-200}
      />
      <ParallaxImage
        className="w-2/5 h-auto object-contain"
        imageUrl={showcaseContent[4].imageUrl}
        start={-150}
        end={-200}
      />
      <ParallaxImage
        className="w-2/5 h-auto object-contain"
        imageUrl={showcaseContent[5].imageUrl}
        start={-50}
        end={200}
      />
      <ParallaxImage
        className="w-2/5 h-auto object-contain"
        imageUrl={showcaseContent[6].imageUrl}
        start={-50}
        end={200}
      />
    </div>
  );
};

const ParallaxImage = ({
  className,
  imageUrl,
  start,
  end,
}: {
  className?: string;
  imageUrl: string;
  start: number;
  end: number;
}) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: [`${start}px end`, `end ${end * -1}px`],
  });
  const opacity = useTransform(scrollYProgress, [0.75, 1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0.75, 1], [1, 0.85]);
  const y = useTransform(scrollYProgress, [0, 1], [start, end]);
  const transform = useMotionTemplate`scale(${scale}) translateY(${y}px)`;

  return (
    <motion.img
      style={{ opacity, transform }}
      ref={ref}
      loading="eager"
      width={480}
      height={312}
      decoding="async"
      alt="portfolio showcase"
      className={className}
      src={imageUrl}
    />
  );
};

export default Showcase;
