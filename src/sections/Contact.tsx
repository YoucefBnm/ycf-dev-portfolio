import { ContactBg } from "@/assets";
import { socialProfiles } from "@/constants/data";
import { useRevealAnimation } from "@/hooks/useRevealAnimation";
import { useStartAnimation } from "@/hooks/useStartAnimation";
import { clipPathVariants, transformVariants } from "@/utils/motion.utils";
import { motion } from "framer-motion";
import IconChevron from "@assets/icons/icon-arrow.svg?react";

const Contact = () => {
  const { revealRef, isInView } = useRevealAnimation();

  const { controls, startAnimation } = useStartAnimation();
  return (
    <section ref={revealRef} className="relative px-default py-12 min-h-svh">
      <motion.div
        variants={clipPathVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        onAnimationComplete={startAnimation}
        className="absolute origin-top-right inset-0 size-full"
        transition={{
          ease: "linear",
          duration: 1.8,
        }}
      >
        <img
          loading="lazy"
          decoding="async"
          width={2000}
          height={1328}
          className="object-cover size-full"
          src={ContactBg}
        />
      </motion.div>

      <div className="relative w-4/5 md:w-1/2">
        <motion.h3
          variants={transformVariants()}
          className="mb-8"
          initial="hidden"
          animate={controls}
        >
          Always excited to discuss{" "}
          <span className="text-primary-1">
            new projects, job opportunities, or collaborations
          </span>
          .
        </motion.h3>

        <motion.ul
          initial="hidden"
          transition={{ staggerChildren: 0.15 }}
          animate={controls}
          className="flex flex-col gap-2"
        >
          {socialProfiles.map((profile) => (
            <motion.li
              key={profile.id}
              className="py-2 flex-1 max-w-56 border-b capitalize text-white transition-colors duration-200 hover:text-primary-1  border-current"
              variants={transformVariants()}
            >
              <a
                className="inline-flex w-full items-center flex-1 shrink justify-between"
                href={
                  profile.title === "mail"
                    ? `mailto:${profile.link}`
                    : profile.link
                }
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>{profile.title}</span>
                <span>
                  <IconChevron />
                </span>
              </a>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
};

export default Contact;
