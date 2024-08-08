import ContainerVelocity from "@/components/ContainerVelocity";
import { Button } from "@/components/ui/button";
import { skills } from "@/constants/data";
import { useRevealAnimation } from "@/hooks/useRevealAnimation";
import { transformVariants } from "@/utils/motion.utils";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Skills = () => {
  const navigate = useNavigate();
  const { revealRef, isInView } = useRevealAnimation();
  const navigateToPortfolio = () => navigate("/portfolio");
  return (
    <section className="relative py-16">
      <ContainerVelocity className=" mb-12 text-neutral-500" baseVelocity={6}>
        <h1>TECHNOLOGIES I USE &nbsp;</h1>
      </ContainerVelocity>
      <div
        ref={revealRef}
        className="grid px-default  grid-cols-12 grid-rows-[max-content_max-content] md:grid-rows-1"
      >
        <div className="col-span-10 md:col-span-4 mb-6 md:mb-0">
          <motion.p
            className="text-neutral-300 mb-4"
            variants={transformVariants()}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ ease: "linear" }}
          >
            My expertise in these technologies enables me to create dynamic,
            interactive, and user-friendly web applications that meet the needs
            of clients and users alike.
          </motion.p>
          <motion.div
            variants={transformVariants()}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <Button
              variant={"link"}
              className="text-primary-1 p-0"
              size={"lg"}
              onClick={navigateToPortfolio}
            >
              View My Work
            </Button>
          </motion.div>
        </div>

        <motion.ul
          transition={{ staggerChildren: 0.1 }}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="col-span-12 md:col-span-7 md:col-start-6 flex flex-wrap gap-4"
        >
          {skills.map((skil) => (
            <motion.li
              key={skil.id}
              className=" bg-zinc-800 bg-opacity-85 rounded-md size-24 flex-center flex-col gap-4"
              variants={transformVariants()}
              transition={{ duration: 0.3 }}
            >
              <span className="inline-block">
                <img
                  className="object-contain"
                  width={28}
                  height={28}
                  src={skil.icon}
                  alt={skil.label}
                />
              </span>
              <span className="inline-block text-white text-xs">
                {skil.label}
              </span>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
};

export default Skills;
