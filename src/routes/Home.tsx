import About from "@/sections/About";
import Process from "@/sections/Process";
import Showcase from "@/sections/Showcase";
import Skills from "@/sections/Skills";
import Services from "@/sections/Services";
import Work from "@/sections/Work";
import { heroContent } from "@/constants/data";
import {
  HeroContainer,
  HeroCta,
  HeroDescription,
  HeroHeading,
  HeroVideo,
  HeroWrap,
} from "@/components/HeroContainer";
import RouteTransition from "@/hoc/RouteTransition";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Home = () => {
  const navigate = useNavigate();
  const navigateToBooking = () => navigate("/booking");

  return (
    <>
      <HeroContainer content={heroContent}>
        <HeroWrap>
          <HeroHeading />

          <div className="flex mb-8 px-default justify-between items-end">
            <HeroDescription />
            <HeroCta>
              <Button
                onClick={navigateToBooking}
                variant={"secondary"}
                size={"sm"}
                className="bg-primary-1 rounded-full text-xs"
              >
                GET STARTED
              </Button>
            </HeroCta>
          </div>
        </HeroWrap>
        <HeroVideo />
      </HeroContainer>
      
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
