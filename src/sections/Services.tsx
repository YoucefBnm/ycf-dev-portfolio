import { Card, CardBody, CardFooter, CardHeader } from "@/components/Card";
import ContainerVelocity from "@/components/ContainerVelocity";
import { servicesContent } from "@/constants/data";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { motion, useTransform } from "framer-motion";

const Services = () => {
  const { scrollRef, scrollYProgress } = useScrollAnimation();

  const rotate = useTransform(scrollYProgress, [0, 0.5], [-2, 0]);
  const rotateReverse = useTransform(scrollYProgress, [0, 0.5], [2, 0]);

  return (
    <section ref={scrollRef} className="py-12 relative min-h-[150vh]">
      <ContainerVelocity className="mb-12 text-zinc-700" baseVelocity={6}>
        <h1>SERVICES SERVICES &nbsp;</h1>
      </ContainerVelocity>
      <div className="px-default w-full lg:w-11/12 mx-auto gap-4 grid grid-cols-12">
        {servicesContent.map((service, index) => {
          return (
            <motion.div
              key={service.id}
              className={`
                ${
                  index === 0 || index === servicesContent.length - 1
                    ? "md:col-span-6"
                    : "md:col-span-4"
                } md:col-span-5 col-span-12
              `}
              style={
                index === 0 || index === servicesContent.length - 1
                  ? { rotate }
                  : { rotate: rotateReverse }
              }
            >
              <Card
                content={service}
                className={`rounded-xl ${
                  index === 0 || index === servicesContent.length - 1
                    ? " bg-zinc-800"
                    : "bg-none"
                } bg-opacity-50 border border-zinc-800`}
              >
                <CardHeader className="capitalize max-w-[7ch]">
                  <img
                    className="object-contain"
                    width={48}
                    height={48}
                    alt={service.title}
                    src={service.icon}
                  />
                </CardHeader>

                <CardBody />

                <CardFooter>
                  {service.stack.map((stak) => (
                    <div
                      className="tag text-primary-1"
                      key={`${service.id}-${stak}`}
                    >
                      {stak}
                    </div>
                  ))}
                </CardFooter>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
