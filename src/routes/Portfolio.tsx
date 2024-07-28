import { HomeBanner } from "@/assets";
import ContainerVelocity from "@/components/ContainerVelocity";
import { portfolioProjects } from "@/constants/data";
import RouteTransition from "@/hoc/RouteTransition";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const Portfolio = () => {
  const portfoliProjectsArray = Object.values(portfolioProjects);
  return (
    <>
      <Helmet>
        <title>YCF Dev Portfolio - Showcasing Frontend Development Projects</title>
        <meta name="description" content="View the portfolio of YCF Dev, featuring innovative frontend development projects built with React, Vite, and TypeScript. See our work in action." />
        <meta name="keywords" content="frontend projects, React portfolio, Vite, TypeScript, web development, YCF Dev" />
        <meta property="og:title" content="YCF Dev Portfolio - Frontend Development Projects" />
        <meta property="og:description" content="Explore YCF Dev's portfolio showcasing cutting-edge frontend projects using React, Vite, and TypeScript." />
        <meta property="og:image" content={HomeBanner} />
        <meta property="og:url" content="https://ycfdev.netlify.app/portfolio" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="YCF Dev Portfolio - Frontend Development Projects" />
        <meta name="twitter:description" content="Discover innovative frontend projects by YCF Dev, using React, Vite, and TypeScript." />
        <meta name="twitter:image" content={HomeBanner} />
        <meta name="twitter:url" content="https://ycfdev.netlify.app/portfolio" />
      </Helmet>
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
          <div className="md:grid flex flex-wrap grid-cols-12 gap-6 items-start">
            {portfoliProjectsArray.map((project) => (
              <div key={project.id} 
                className={`
                  rounded-xl bg-opacity-40 bg-zinc-800 border border-zinc-800 col-span-6 overflow-hidden
                `}
              >
                <Link to={project.id} className="overflow-hidden block">
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

                <div className="py-6 px-4">
                  <h3>{project.title}</h3>
                  <p className="text-neutral-400 my-4 text-xs">
                    {project.profile}
                  </p>
                  <div className="flex flex-wrap gap-4">
                      {project.services.map((service) => (
                        <div key={service} className="tag">
                          {service}
                        </div>
                      ))}
                      {
                        project.stack.map((stack) => (
                          <div key={stack} className="tag !bg-primary-1">
                            {stack}
                          </div>
                        ))
                      }
                    </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
};

const AsyncPortfolio = RouteTransition(Portfolio);
export default AsyncPortfolio;
