import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import {
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";

type ScrollContainerContextValue = {
  activeItem: number;
  setActiveItem: Dispatch<SetStateAction<number>>;
  content: { id: string; title: string; paragraph: string; imageUrl: string }[];
};
const ScrollContainerContext = createContext<
  ScrollContainerContextValue | undefined
>(undefined);

function useScrollContainerContext() {
  const context = useContext(ScrollContainerContext);
  if (!context) {
    throw new Error(
      "ScrollContainerContext must be used within a ScrollContainer"
    );
  }
  return context;
}

type ScrollContainerProps = PropsWithChildren & {
  className?: string;
  content: { id: string; title: string; paragraph: string; imageUrl: string }[];
};

const ScrollContainer = ({
  children,
  className,
  content,
}: ScrollContainerProps) => {
  const [activeItem, setActiveItem] = useState<number>(0);
  return (
    <ScrollContainerContext.Provider
      value={{ activeItem, setActiveItem, content }}
    >
      <div className={cn(className)}>{children}</div>
    </ScrollContainerContext.Provider>
  );
};

type ScrollContainerTriggerProps = PropsWithChildren & {
  className?: string;
  index: number;
  service: { id: string; title: string };
};
const ScrollContainerTrigger = ({
  className,
  index,
  service,
}: ScrollContainerTriggerProps) => {
  const { activeItem } = useScrollContainerContext();
  return (
    <motion.div
      className={cn(className)}
      initial={{ opacity: 0.2 }}
      animate={index === activeItem ? { opacity: 1 } : { opacity: 0.2 }}
    >
      <a href={`#${service.id}`} className="inline-block max-w-full">
        <h4>{service.title.toUpperCase()}</h4>
      </a>
    </motion.div>
  );
};

type ScrollContainerTextProps = PropsWithChildren & {
  className?: string;
  index: number;
  service: { id: string; paragraph: string };
};
const ScrollContainerText = ({
  className,
  index,
  service,
}: ScrollContainerTextProps) => {
  const { setActiveItem } = useScrollContainerContext();
  const handleViewEnter = () => setActiveItem(index);
  return (
    <div className={cn(className)}>
      <motion.p
        id={service.id}
        className="text-zinc-300"
        onViewportEnter={handleViewEnter}
      >
        {service.paragraph}
      </motion.p>
    </div>
  );
};

type ScrollContainerImageProps = {
  className?: string;
  index: number;
  service: { id: string; imageUrl: string };
};
const ScrollContainerImage = ({
  className,
  index,
  service,
}: ScrollContainerImageProps) => {
  const { activeItem } = useScrollContainerContext();

  return (
    <motion.div
      className={cn(className)}
      initial={{ opacity: 0 }}
      animate={index === activeItem ? { opacity: 1 } : { opacity: 0 }}
      exit={{ opacity: 0 }}
    >
      <img
        className="object-contain w-full align-middle"
        src={service.imageUrl}
        width={1024}
        height={994}
        loading="lazy"
        decoding="async"
        alt={service.id}
      />
    </motion.div>
  );
};

const ScrollContainerTriggers = () => {
  const { content } = useScrollContainerContext();
  return (
    <div className="mt-[10.42em] mb-[20.85em] px-[1vw] top-[16em] z-20 items-start flex flex-col w-1/4 sticky">
      {content.map((service, index) => (
        <ScrollContainerTrigger
          key={service.id}
          index={index}
          service={service}
        />
      ))}
    </div>
  );
};

const ScrollContainerImages = () => {
  const { content } = useScrollContainerContext();

  return (
    <div className="flex top-[8.5em] justify-center z-20 flex-wrap flex-shrink flex-grow-0 basis-auto items-start w-1/2 sticky max-h-svh">
      <AnimatePresence>
        {content.map((content, index) => (
          <ScrollContainerImage
            className="flex flex-col justify-center items-end max-w-full absolute overflow-hidden"
            key={content.id}
            index={index}
            service={content}
          />
        ))}
      </AnimatePresence>
    </div>
  );
};
const ScrollContainerTexts = () => {
  const { content } = useScrollContainerContext();
  return (
    <div className="relative z-10 w-[30%] flex flex-col">
      {content.map((service, index) => (
        <ScrollContainerText
          key={service.id}
          index={index}
          service={service}
          className="min-h-[80svh] flex flex-col justify-center"
        />
      ))}
    </div>
  );
};

export {
  ScrollContainer,
  ScrollContainerTriggers,
  ScrollContainerTexts,
  ScrollContainerImages,
};
