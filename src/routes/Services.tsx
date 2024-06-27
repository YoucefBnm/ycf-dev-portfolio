import { servicesContent } from "@/constants/data";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useWindowSize } from "@uidotdev/usehooks";
import {
  AnimatePresence,
  motion,
  MotionValue,
  useTransform,
} from "framer-motion";
import { memo, useState } from "react";

interface ServiceImageProps {
  imageUrl: string;
  order: number;
  activeImage: number;
  arrayLength: number;
  progress: MotionValue<number>;
}

const ServiceImage = memo(function ServiceImage({
  imageUrl,
  order,
  activeImage,
  arrayLength,
  progress,
}: ServiceImageProps) {
  const size = useWindowSize();
  const { width, height } = size;

  const imageWidth = Number(width) / 2;
  const imageHeight = Number(height);

  const imageInsetBottom = (arrayLength - 1) * imageHeight;
  const position = useTransform(progress, (pos: number) =>
    pos >= 1 ? "relative" : "fixed"
  );

  const y = useTransform(progress, (pos: number) =>
    pos >= 1 ? imageInsetBottom : 0
  );

  return (
    <div
      className={`
        order-none place-self-auto z-auto flex-none shrink-0 block inset-[0px_${imageWidth}px_${imageInsetBottom}px_0px] basis-auto overflow-hidden
      `}
      style={{
        height: imageHeight,
        width: imageWidth,
      }}
    >
      <AnimatePresence>
        <motion.picture
          className="left-0 bottom-0"
          style={{
            position,
            y,
            height: imageHeight,
            width: imageWidth,
          }}
          transition={{ type: "spring", damping: 30 }}
          initial={{ opacity: 0, x: -0.429688 }}
          animate={
            activeImage === order
              ? { opacity: 1, x: 0 }
              : { opacity: 0, x: -0.429688 }
          }
          exit={{ opacity: 0, x: -0.429688 }}
        >
          <img
            decoding="async"
            loading="lazy"
            width={1024}
            height={1448}
            alt="service"
            src={imageUrl}
            className="object-cover size-full"
          />
        </motion.picture>
      </AnimatePresence>
    </div>
  );
});

const Services = () => {
  const [activeImage, setActiveImage] = useState<number>(0);
  const { scrollRef, scrollYProgress } = useScrollAnimation();

  return (
    <div ref={scrollRef} className="relative overflow-hidden">
      {servicesContent.map((service, index) => (
        <div
          key={service.id}
          className="flex flex-wrap md:flex-nowrap min-h-svh"
        >
          <ServiceImage
            imageUrl={service.imageUrl}
            order={index}
            activeImage={activeImage}
            arrayLength={servicesContent.length}
            progress={scrollYProgress}
          />

          <motion.div
            className="w-1/2 px-6 md:px-16 py-8 m-[auto_0_auto_auto]"
            onViewportEnter={() => setActiveImage(index)}
          >
            <h3 className="mb-6 uppercase">{service.title}</h3>
            <p className="text-neutral-300">{service.paragraph}</p>
          </motion.div>
        </div>
      ))}
    </div>
  );
};

export default Services;
