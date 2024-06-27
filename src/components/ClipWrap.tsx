import { cn } from "@/lib/utils";
import { clipPathHidden, clipPathVisible } from "@/utils/motion.utils";
import { motion, MotionValue, useTransform } from "framer-motion";
import { PropsWithChildren, createContext, useContext } from "react";
// import { Button } from "./ui/button";
// import { useNavigate } from "react-router-dom";

// type Content = {
//   id: string;
//   title: string;
//   imageUrl: string;
//   stack: string[];
// };
type ClipWrapProps = PropsWithChildren & {
  imageUrl: string;
  title?: string;
  className?: string;
  tagsArray: string[];
  arrayLength: number;
  progress: MotionValue<number>;
  index: number;
};
type ClipWrapContextValue = {
  imageUrl: string;
  title?: string;
  tagsArray?: string[];
  progress: MotionValue<number>;
  index: number;
  range: number[];
};

const ClipWrapContext = createContext<ClipWrapContextValue | undefined>(
  undefined
);

function useClipWrapContext() {
  const context = useContext(ClipWrapContext);

  if (!context) {
    throw new Error("useClipWrapContext must be used within a ClipWrap");
  }
  return context;
}

const ClipWrap = ({
  imageUrl,
  title,
  tagsArray,
  children,
  className,
  arrayLength,
  progress,
  index,
}: ClipWrapProps) => {
  const start = index / arrayLength;
  const end = start + 1 / arrayLength;

  const range = [start, end];
  const clipPath = useTransform(progress, range, [
    "inset(20% 20% 20%)",
    "inset(0% 0% 0%)",
  ]);

  return (
    <ClipWrapContext.Provider
      value={{ title, imageUrl, tagsArray, progress, range, index }}
    >
      <motion.div
        className={cn("absolute inset-0 size-full overflow-hidden", className)}
        style={{ clipPath }}
      >
        {children}
      </motion.div>
    </ClipWrapContext.Provider>
  );
};

type ClipWrapImageProps = {
  className?: string;
};
const ClipWrapImage = ({ className }: ClipWrapImageProps) => {
  const { imageUrl, range, index, progress } = useClipWrapContext();

  const clipPath = useTransform(progress, range, [
    clipPathHidden,
    clipPathVisible,
  ]);
  const rotate = useTransform(progress, range, [-45, 0]);
  const scale = useTransform(progress, range, [1.2, 1]);

  const notFirst = index > 0;
  return (
    <motion.div
      className={cn("absolute inset-0 size-full overflow-hidden", className)}
      style={notFirst ? { clipPath, rotate } : { clipPath: "none", rotate: 0 }}
    >
      <motion.img
        className="object-cover size-full min-w-full inset-0"
        loading="lazy"
        decoding="async"
        style={{ scale }}
        width={2000}
        height={1300}
        src={imageUrl}
      />
    </motion.div>
  );
};

type ClipWrapTitleProps = {
  className?: string;
};
const ClipWrapTitle = ({ className }: ClipWrapTitleProps) => {
  const { title, range, index, progress } = useClipWrapContext();

  const notFirst = index > 0;
  const y = useTransform(progress, range, ["-100%", "0%"]);

  return (
    <motion.h3
      exit={{ y: "100%" }}
      style={notFirst ? { y } : { y: 0 }}
      className={cn(className, "uppercase")}
    >
      {title}
    </motion.h3>
  );
};

const ClipWrapTags = () => {
  const { tagsArray, range, index, progress } = useClipWrapContext();
  const notFirst = index > 0;
  const opacity = useTransform(progress, range, [0, 1]);

  return (
    <motion.div
      className="flex flex-wrap gap-2"
      style={notFirst ? { opacity } : { opacity: 1 }}
    >
      {tagsArray?.map((stack) => (
        <div key={stack} className="tag">
          <span className="inline-block align-top">{stack}</span>
        </div>
      ))}
    </motion.div>
  );
};

// type ClipWrapBtnProps = { className?: string };

// const ClipWrapBtn = ({ className }: ClipWrapBtnProps) => {
//   const { content, range, index, progress } = useClipWrapContext();
//   const notFirst = index > 0;
//   const opacity = useTransform(progress, range, [0, 1]);

//   const navigate = useNavigate();
//   const navigateToProjectPage = () => navigate(`/portfolio/${content.id}`);

//   return (
//     <motion.div style={notFirst ? { opacity } : { opacity: 1 }}>
//       <Button
//         size={"lg"}
//         className={cn(
//           "bg-primary-1 text-neutral-900 hover:text-primary-1 rounded-full",
//           className
//         )}
//         onClick={navigateToProjectPage}
//         aria-label="view project details"
//       >
//         View Project
//       </Button>
//     </motion.div>
//   );
// };
export {
  ClipWrap,
  ClipWrapImage,
  ClipWrapTitle,
  ClipWrapTags,
  // ClipWrapBtn
};
