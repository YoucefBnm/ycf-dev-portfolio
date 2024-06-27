import ContainerVelocity from "@/components/ContainerVelocity";
import {
  HeroContainer,
  HeroContent,
  HeroVideo,
} from "@/components/HeroContainer";
import {
  ScrollTabContent,
  ScrollTabTrigger,
  ScrollTabWrap,
  ScrollTabs,
} from "@/components/ScrollTab";
import { portfolioProjects } from "@/constants/data";
import RouteTransition from "@/hoc/RouteTransition";
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

  const videoUrl = portfolioProjects[projectId].videoUrl;
  const title = portfolioProjects[projectId].title;
  const description = portfolioProjects[projectId].description;
  const profile = portfolioProjects[projectId].profile;
  const services = portfolioProjects[projectId].services;
  const stack = portfolioProjects[projectId].stack;
  return (
    <main>
      <HeroContainer
        className={` ${
          videoUrl ? "h-[350vh]" : "min-h-[70svh]  place-content-center"
        }`}
      >
        <HeroContent className="flex flex-col gap-4 my-6">
          <div className="relative mix-blend-difference">
            <ContainerVelocity baseVelocity={3}>
              <h1 className="uppercase">{title} &nbsp;</h1>
              <p className="text-primary-1">{description}</p>
            </ContainerVelocity>
          </div>
        </HeroContent>
        {videoUrl && <HeroVideo videoUrl={videoUrl} />}
      </HeroContainer>

      <section className="px-default">
        <ScrollTabs className="flex flex-col justify-center " arrayLength={3}>
          <ScrollTabWrap className="flex flex-col gap-4 md:flex-row md:justify-between md:items-center">
            <ScrollTabTrigger index={0} className="uppercase basis-1/2">
              <h1>Profile</h1>
            </ScrollTabTrigger>
            <ScrollTabContent index={0} className="basis-1/3 flex-1">
              {profile}
            </ScrollTabContent>
          </ScrollTabWrap>

          <ScrollTabWrap className="flex flex-col gap-4 md:flex-row md:justify-between md:items-center">
            <ScrollTabTrigger index={1} className="uppercase basis-1/2">
              <h1>Services</h1>
            </ScrollTabTrigger>
            <ScrollTabContent index={1} className="flex gap-4 flex-wrap">
              {services.map((service) => (
                <span
                  key={service}
                  className="tag !text-base capitalize text-primary-1"
                >
                  {service}
                </span>
              ))}
            </ScrollTabContent>
          </ScrollTabWrap>

          <ScrollTabWrap className="flex flex-col gap-4 md:flex-row md:justify-between md:items-center">
            <ScrollTabTrigger index={2} className="uppercase basis-1/2">
              <h1>stack</h1>
            </ScrollTabTrigger>
            <ScrollTabContent index={2} className="flex gap-4 flex-wrap">
              {stack.map((stack) => (
                <span key={stack} className="tag !text-base capitalize">
                  {stack}
                </span>
              ))}
            </ScrollTabContent>
          </ScrollTabWrap>
        </ScrollTabs>
      </section>
    </main>
  );
};

const AsyncPortfolioItem = RouteTransition(PortfolioItem);
export default AsyncPortfolioItem;
