
import { HomeBanner } from "@/assets";
import { HeroContainer, HeroCta, HeroHeading, HeroVideo, HeroWrap } from "@/components/HeroContainer";
import {
  ScrollTabContent,
  ScrollTabTrigger,
  ScrollTabWrap,
  ScrollTabs,
} from "@/components/ScrollTab";
import { Button } from "@/components/ui/button";
import { portfolioProjects } from "@/constants/data";
import RouteTransition from "@/hoc/RouteTransition";
import { Helmet } from "react-helmet";
import { useParams } from "react-router-dom";

const PortfolioItem = () => {
  const params = useParams();
  const { projectId } = params;

  if (!projectId || !(projectId in portfolioProjects)) {
    return (
      <div className=" h-svh flex-center">
        <p className="text-red-400">Project not found</p>
      </div>
    );
  }

  const profile = portfolioProjects[projectId].profile;
  const services = portfolioProjects[projectId].services;
  const stack = portfolioProjects[projectId].stack;
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
        <HeroContainer content={portfolioProjects[projectId]}>
          <HeroWrap>
            <HeroHeading />

            <HeroCta className="my-6 px-default">
              <Button 
                aria-label="Visit website"
                variant={"secondary"}
                className="bg-primary-1 rounded-full">
                  <a href={portfolioProjects[projectId].route} target="_blank" rel="noopener noreferrer">View Website</a>
                </Button>
            </HeroCta>
          </HeroWrap>
          {portfolioProjects[projectId].videoUrl && <HeroVideo />}
        </HeroContainer>

        <section className="relative px-default">
          <ScrollTabs className="flex flex-col justify-center " arrayLength={3}>
            <ScrollTabWrap className="flex flex-col gap-4 md:flex-row md:justify-between md:items-center">
              <ScrollTabTrigger index={0} className="uppercase basis-1/2">
                <h2>Profile</h2>
              </ScrollTabTrigger>
              <ScrollTabContent index={0} className="basis-1/3 flex-1">
                {profile}
              </ScrollTabContent>
            </ScrollTabWrap>

            <ScrollTabWrap className="flex flex-col gap-4 md:flex-row md:justify-between md:items-center">
              <ScrollTabTrigger index={1} className="uppercase basis-1/2">
                <h2>Services</h2>
              </ScrollTabTrigger>
              <ScrollTabContent index={1} className="flex gap-4 flex-wrap">
                {services.map((service) => (
                  <span
                    key={service}
                    className="tag"
                  >
                    {service}
                  </span>
                ))}
              </ScrollTabContent>
            </ScrollTabWrap>

            <ScrollTabWrap className="flex flex-col gap-4 md:flex-row md:justify-between md:items-center">
              <ScrollTabTrigger index={2} className="uppercase basis-1/2">
                <h2>stack</h2>
              </ScrollTabTrigger>
              <ScrollTabContent index={2} className="flex gap-4 flex-wrap">
                {stack.map((stack) => (
                  <span key={stack} className="tag !bg-primary-1">
                    {stack}
                  </span>
                ))}
              </ScrollTabContent>
            </ScrollTabWrap>
          </ScrollTabs>
        </section>
      </main>
    </>
  );
};

const AsyncPortfolioItem = RouteTransition(PortfolioItem);
export default AsyncPortfolioItem;
