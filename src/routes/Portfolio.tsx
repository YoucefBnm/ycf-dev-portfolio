import { Card, CardBody, CardFooter } from "@/components/Card";
import ContainerVelocity from "@/components/ContainerVelocity";
import { portfolioProjects } from "@/constants/data";
import RouteTransition from "@/hoc/RouteTransition";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Portfolio = () => {
  const portfoliProjectsArray = Object.values(portfolioProjects);
  return (
    <main>
      <section className="py-16 flex flex-col justify-evenly min-h-[75vh] place-content-center">
        <ContainerVelocity baseVelocity={5}>
          <h1>MY RECENT WORK &nbsp;</h1>
        </ContainerVelocity>

        <div className="px-default self-end">
          <p className="text-zinc-400 text-sm max-w-[32ch]">
            From ecommerce to startup landings, building fully responsive and
            functional website that showcase your product and your unique
            identity.
          </p>
        </div>
      </section>

      <section className="px-default py-12 relative">
        <div className="md:grid flex flex-wrap grid-cols-12 gap-6">
          {portfoliProjectsArray.map((project) => (
            <Card
              content={project}
              className={`
                rounded-xl bg-opacity-40 bg-zinc-800 border border-zinc-800 col-span-6 
              `}
            >
              <CardBody className="">
                <Link to={project.id} className="overflow-hidden ">
                  <motion.img
                    whileHover={{ scale: 1.2 }}
                    transition={{ type: "spring", damping: 50 }}
                    className="size-full align-middle"
                    src={project.imageUrl}
                    width={2000}
                    height={1300}
                    loading="lazy"
                  />
                </Link>
              </CardBody>

              <CardFooter className="flex-wrap gap-y-4 px-6 py-8">
                <div className="flex flex-wrap gap-4">
                  {project.services.map((service) => (
                    <div key={service} className="tag">
                      {service}
                    </div>
                  ))}
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>
    </main>
  );
};

const AsyncPortfolio = RouteTransition(Portfolio);
export default AsyncPortfolio;
