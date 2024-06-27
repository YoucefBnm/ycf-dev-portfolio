import { useRevealAnimation } from "@/hooks/useRevealAnimation";
import { transformVariants } from "@/utils/motion.utils";
import { motion } from "framer-motion";

interface WordProps {
  word: string;
}

const Word = ({ word }: WordProps) => {
  const characters = word.split("");

  return (
    <motion.span
      className={`inline-flex overflow-hidden`}
      variants={transformVariants()}
      transition={{ staggerChildren: 0.1 }}
    >
      {characters.map((char, index) => (
        <motion.span
          key={`${char}-${index}`}
          className="inline-block"
          variants={transformVariants("bottom")}
          transition={{ type: "spring", damping: 30, mass: 2 }}
        >
          {char}
        </motion.span>
      ))}
      &nbsp;
    </motion.span>
  );
};

interface AnimatedTextProps {
  text: string;
  className?: string;
  onAnimationComplete?: () => Promise<void>;
}

const AnimatedText = ({
  text,
  className,
  onAnimationComplete,
}: AnimatedTextProps) => {
  const words = text.split(" ");
  const { revealRef, isInView } = useRevealAnimation();

  return (
    <motion.div
      ref={revealRef}
      transition={{ staggerChildren: 0.2 }}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className={`w-fit overflow-hidden ${className}`}
      onAnimationComplete={onAnimationComplete}
    >
      {words.map((word, index) => (
        <Word key={`${word}-${index}`} word={word} />
      ))}
    </motion.div>
  );
};

export default AnimatedText;
