import ContainerVelocity from "@/components/ContainerVelocity";
import { showcaseContent } from "@/constants/data";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { motion, useTransform } from "framer-motion";

const ShowcaseClip = () => {
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
      className="relative"
    >
      <div className="sticky inset-0 min-h-screen w-full place-content-center">
        <motion.div
          style={{ clipPath }}
          className=" grid px-default grid-cols-12 grid-rows-[repeat(3,max-content)] gap-4 place-content-center"
        >
          {showcaseContent.map((item, index) => (
            <motion.figure
              key={item.id}
              className="showcase-figure"
              style={index !== middleItem ? { scale } : { scale: 1 }}
            >
              <img
                loading="lazy"
                width={480}
                height={312}
                decoding="async"
                alt="portfolio showcase"
                className="size-full object-contain"
                src={item.imageUrl}
              />
            </motion.figure>
          ))}

          <div className="absolute w-full my-4 top-1/2 -translate-y-1/2 left-0 mix-blend-difference">
            <ContainerVelocity baseVelocity={1}>
              <h3 className="uppercase">
                Crafting seamless user experiences with modern web technologies
              </h3>
            </ContainerVelocity>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ShowcaseClip;
