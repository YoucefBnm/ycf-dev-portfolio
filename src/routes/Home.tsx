import About from "@/sections/About";
import Process from "@/sections/Process";
import Showcase from "@/sections/Showcase";
import Skills from "@/sections/Skills";
import Services from "@/sections/Services";
import Work from "@/sections/Work";
import { heroContent } from "@/constants/data";
import {
  HeroContainer,
  HeroContent,
  HeroVideo,
} from "@/components/HeroContainer";
import ContainerVelocity from "@/components/ContainerVelocity";
import { Button } from "@/components/ui/button";
import RouteTransition from "@/hoc/RouteTransition";

const Home = () => {
  const { title, videoUrl, description } = heroContent;
  return (
    <>
      <HeroContainer className="h-[350vh]">
        <HeroContent className="flex flex-col gap-4 mb-4">
          <div className="relative mix-blend-difference place-content-end overflow-hidden col-span-12">
            <ContainerVelocity baseVelocity={3}>
              <h1 className="md:text-9xl uppercase">{title} &nbsp;</h1>
            </ContainerVelocity>
          </div>

          <div className="px-default col-span-12 flex justify-between gap-4 items-end">
            <Button variant={"secondary"} className="rounded-full" size={"lg"}>
              GET STARTED
            </Button>
            <p className="basis-1/2 md:basis-1/4 text-xs md:text-sm text-neutral-300">
              {description}
            </p>
          </div>
        </HeroContent>
        <HeroVideo videoUrl={videoUrl} />
      </HeroContainer>
      <HeroContainer />
      <About />
      <Work />
      <Services />
      <Showcase />
      <Process />
      <Skills />
    </>
  );
};

const AsyncHome = RouteTransition(Home);
export default AsyncHome;
