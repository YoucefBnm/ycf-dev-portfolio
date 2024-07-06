import { motion, useTransform } from "framer-motion";
import IconTime from "@assets/icons/icon-time.svg?react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { processContent } from "@/constants/data";
import { useWindowSize } from "@uidotdev/usehooks";
import { Card, CardBody, CardFooter, CardHeader } from "@/components/Card";
import ContainerVelocity from "@/components/ContainerVelocity";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Process = () => {
  const { scrollRef, scrollYProgress } = useScrollAnimation();

  const size = useWindowSize();
  const { width } = size;

  const X = (range: [number, number], order: number) =>
    useTransform(scrollYProgress, range, [Number(width) * order, 0]);

  const navigate = useNavigate();
  const navigateToPage = (route: string) => () => navigate(route);
  return (
    <section
      ref={scrollRef}
      style={{ height: `${processContent.length + 1}00vh` }}
      className="relative py-12"
    >
      <div className=" flex flex-col justify-evenly sticky top-0 left-0  min-h-svh overflow-hidden">
        <ContainerVelocity className=" text-neutral-500" baseVelocity={6}>
          <h1>HOW IT WORKS &nbsp;</h1>
        </ContainerVelocity>
        <div className="px-default flex flex-wrap justify-between gap-4 items-center w-full mx-auto ">
          {processContent.map((process, index) => {
            const start = index / processContent.length;
            const end = start + 1 / processContent.length;
            const x = X([start, end], index);

            return (
              <motion.div
                className="flex-1 bg-zinc-800 bg-opacity-50 rounded-xl border border-zinc-700"
                key={process.id}
                style={{ x }}
              >
                <Card content={process}>
                  <CardHeader className="uppercase" />

                  <CardBody>
                    <div className="inline-flex mb-4 md:mb-0 items-center gap-2 text-white">
                      <span className="inline-block align-middle">
                        <IconTime />
                      </span>
                      <p className="text-xs">{process.timing}</p>
                    </div>
                  </CardBody>

                  <CardFooter className="justify-between items-center">
                    <Button
                      variant={"link"}
                      className="capitalize text-primary-1 p-0"
                      onClick={navigateToPage(process.route)}
                    >
                      {process.label}
                    </Button>
                    <h4 className="text-white">{index + 1}</h4>
                  </CardFooter>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Process;
