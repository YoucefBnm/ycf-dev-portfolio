import { showcaseContent } from "@/constants/data";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { motion, useTransform } from "framer-motion";

const Showcase = () => {
  const clipPathHidden = "polygon(33% 33%, 67% 33%, 67% 67%, 33% 67%)";
  const clipPathVisible = "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)";

  const { scrollRef, scrollYProgress } = useScrollAnimation();

  const clipPath = useTransform(
    scrollYProgress,
    [0, 0.7],
    [clipPathHidden, clipPathVisible]
  );

  const middleItem = Math.floor(showcaseContent.length / 2);

  const scale = useTransform(scrollYProgress, [0, 0.7], [0.33, 1]);

  return (
    <section
      ref={scrollRef}
      style={{ height: `${showcaseContent.length + 1}00vh` }}
      className="relative px-default"
    >
      <motion.div
        style={{ clipPath }}
        className="sticky inset-0 min-h-screen w-full grid grid-cols-12 grid-rows-[repeat(3,max-content)] gap-4 place-content-center"
      >
        {showcaseContent.map((item, index) => (
          <motion.figure
            key={item.id}
            className="showcase-figure"
            style={index !== middleItem ? { scale } : { scale: 1 }}
          >
            <img
              loading="lazy"
              width={1024}
              height={641}
              decoding="async"
              alt="portfolio showcase"
              className="size-full object-contain"
              src={item.imageUrl}
            />
          </motion.figure>
        ))}
      </motion.div>
    </section>
  );
};

export default Showcase;
